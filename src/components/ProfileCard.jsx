import React, { useEffect, useRef, useMemo, useState } from 'react'
import './ProfileCard.css'

const clamp = (value,min=0,max=100) => Math.min(Math.max(value,min),max)
const round = value => Number(value.toFixed(3))

// Adapted from the ProfileCard supplied by the user: same pointer variables
// and eased tilt, with an idle stop and reduced-motion support.
function ProfileCardComponent({
  avatarUrl, miniAvatarUrl, iconUrl, grainUrl,
  innerGradient='linear-gradient(145deg,#ffd7bf 0%,#d8cbf2 58%,#cbe6f7 100%)',
  behindGlowEnabled=true, behindGlowColor='rgba(248,142,95,.38)',
  behindGlowSize='72%', className='', enableTilt=true,
  name='熊启懿', title='华南理工大学 · 硕士研究生', handle='XIONG QIYI',
  status='AI 视频 / 创意工作流', contactText='联系我', showUserInfo=true, onContactClick
}) {
  const wrapRef=useRef(null)
  const shellRef=useRef(null)
  const [failed,setFailed]=useState(false)
  const engine=useMemo(()=>{
    let raf=null,last=0,x=0,y=0,tx=0,ty=0
    const setVars=(px,py)=>{
      const shell=shellRef.current,wrap=wrapRef.current
      if(!shell||!wrap) return
      const percentX=clamp(px/(shell.clientWidth||1)*100)
      const percentY=clamp(py/(shell.clientHeight||1)*100)
      const values={
        '--pointer-x':`${percentX}%`, '--pointer-y':`${percentY}%`,
        '--background-x':`${35+percentX*.3}%`, '--background-y':`${35+percentY*.3}%`,
        '--pointer-from-center':clamp(Math.hypot(percentX-50,percentY-50)/50,0,1),
        '--pointer-from-top':percentY/100, '--pointer-from-left':percentX/100,
        '--rotate-x':`${round(-(percentX-50)/5)}deg`, '--rotate-y':`${round((percentY-50)/4)}deg`
      }
      Object.entries(values).forEach(([key,value])=>wrap.style.setProperty(key,value))
    }
    const step=time=>{
      const dt=last ? Math.min((time-last)/1000,.05) : 1/60
      last=time
      const k=1-Math.exp(-dt/.14)
      x+=(tx-x)*k;y+=(ty-y)*k;setVars(x,y)
      if(Math.hypot(tx-x,ty-y)>.05) raf=requestAnimationFrame(step)
      else { x=tx;y=ty;setVars(x,y);raf=null;last=0 }
    }
    return {
      immediate(px,py){x=tx=px;y=ty=py;setVars(x,y)},
      target(px,py){tx=px;ty=py;if(raf===null) raf=requestAnimationFrame(step)},
      cancel(){if(raf!==null) cancelAnimationFrame(raf);raf=null;last=0}
    }
  },[])
  useEffect(()=>{
    const shell=shellRef.current
    const reduce=matchMedia('(prefers-reduced-motion: reduce)')
    const fine=matchMedia('(hover: hover) and (pointer: fine)')
    const allowed=()=>enableTilt&&!reduce.matches&&fine.matches
    const reset=()=>{engine.cancel();engine.immediate(shell.clientWidth/2,shell.clientHeight/2);shell.classList.remove('active')}
    const move=event=>{
      if(!allowed()||event.pointerType==='touch') return
      const rect=shell.getBoundingClientRect()
      shell.classList.add('active')
      engine.target(clamp(event.clientX-rect.left,0,rect.width),clamp(event.clientY-rect.top,0,rect.height))
    }
    const leave=()=>{shell.classList.remove('active');engine.target(shell.clientWidth/2,shell.clientHeight/2)}
    reset()
    shell.addEventListener('pointerenter',move)
    shell.addEventListener('pointermove',move)
    shell.addEventListener('pointerleave',leave)
    shell.addEventListener('pointercancel',leave)
    reduce.addEventListener('change',reset);fine.addEventListener('change',reset)
    window.addEventListener('resize',reset)
    return ()=>{
      engine.cancel()
      shell.removeEventListener('pointerenter',move);shell.removeEventListener('pointermove',move)
      shell.removeEventListener('pointerleave',leave);shell.removeEventListener('pointercancel',leave)
      reduce.removeEventListener('change',reset);fine.removeEventListener('change',reset)
      window.removeEventListener('resize',reset)
    }
  },[enableTilt,engine])
  const cardStyle={
    '--icon':iconUrl?`url(${iconUrl})`:'none', '--grain':grainUrl?`url(${grainUrl})`:'none',
    '--inner-gradient':innerGradient, '--behind-glow-color':behindGlowColor,'--behind-glow-size':behindGlowSize
  }
  return <div ref={wrapRef} className={`pc-card-wrapper ${className}`} style={cardStyle}>
    {behindGlowEnabled&&<div className="pc-behind" aria-hidden="true"/>}
    <div ref={shellRef} className="pc-card-shell"><section className="pc-card" aria-label={`${name}的个人名片`}>
      <div className="pc-inside">
        <div className="pc-shine" aria-hidden="true"/><div className="pc-glare" aria-hidden="true"/>
        <div className="pc-content pc-avatar-content">
          {failed?<div className="pc-photo-fallback">{name}</div>:<img className="avatar" src={avatarUrl} alt={`${name}的个人照片`} loading="lazy" onError={()=>setFailed(true)}/>}
        </div>
        <div className="pc-content pc-details"><p className="pc-kicker">RESEARCHER & AI CREATOR</p><h3>{name}</h3><p>{title}</p></div>
        {showUserInfo&&<div className="pc-user-info"><div className="pc-user-details"><div className="pc-mini-avatar"><img src={miniAvatarUrl||avatarUrl} alt="" loading="lazy" onError={event=>{event.currentTarget.style.visibility='hidden'}}/></div><div className="pc-user-text"><div className="pc-handle">{handle}</div><div className="pc-status">{status}</div></div></div><button className="pc-contact-btn" onClick={onContactClick} type="button" aria-label={`联系${name}`}>{contactText} <span aria-hidden="true">↗</span></button></div>}
      </div>
    </section></div>
  </div>
}
export default React.memo(ProfileCardComponent)
