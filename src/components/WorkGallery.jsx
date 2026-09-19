import { useEffect, useRef, useState } from 'react'
import { works } from '../works'
import AccordionGallery from './AccordionGallery'
import './WorkGallery.css'

function Cover({ work, index }) {
  return <div className={`case-cover tone-${work.accent}`}>
    {work.cover ? <img src={work.cover} alt={work.title} loading="lazy"/> : <div className="cover-draft" aria-label="待补充作品封面"><span>{work.kind === 'video' ? 'MOTION' : 'IMAGE'} / STUDY</span><strong>{String(index + 1).padStart(2,'0')}</strong><span>{work.english}</span></div>}
    <span className="case-status">{work.status === 'pending' ? '素材整理中' : work.status === 'demo' ? '本站演示' : work.kind === 'case-study' ? 'CASE STUDY' : work.kind === 'video' ? 'VIDEO' : 'IMAGE'}</span>
    <span className="case-overlay">查看项目详情 <span aria-hidden="true">↗</span></span>
  </div>
}
function CaseCard({ work, index, open }) {
  return <article className={`case-card case-${work.id}`}><button className="case-open" onClick={event => open(work,event.currentTarget)} aria-label={`查看${work.title}详情`}><Cover work={work} index={index}/><div className="case-heading"><div><p>{work.type}</p><h3>{work.title}</h3></div><span className="case-arrow" aria-hidden="true">↗</span></div><p className="case-description">{work.description}</p></button></article>
}
function CaseStudyCard({ work }) {
  return <article className={`case-card case-study-card case-${work.id}`}><a className="case-open case-study-link" href={work.slug} aria-label={`查看${work.title}完整案例`}><Cover work={work} index={0}/><div className="case-heading"><div><p>{work.type}</p><h3>{work.title}</h3></div><span className="case-arrow" aria-hidden="true">↗</span></div><p className="case-description">{work.description}</p></a></article>
}
export default function WorkGallery() {
  const [selected,setSelected] = useState(null)
  const [failed,setFailed] = useState(false)
  const dialogRef = useRef(null)
  const triggerRef = useRef(null)
  const playerRef = useRef(null)
  useEffect(() => {
    if (!selected) return
    const dialog = dialogRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialog.showModal()
    return () => { document.body.style.overflow = previousOverflow }
  },[selected])
  const open = (work, trigger) => { triggerRef.current=trigger; setFailed(false); setSelected(work) }
  const close = () => dialogRef.current.close()
  const afterClose = () => { playerRef.current?.pause(); setSelected(null); triggerRef.current?.focus({preventScroll:true}) }
  return <>
    <div className="collection-header product-header"><span>00 / PRODUCT / CASE STUDY</span><h3>从功能设计，到可信赖的 Agent Experience。</h3><span>FEATURED CASE STUDY</span></div>
    <div className="case-study-grid">{works.filter(work=>work.kind==='case-study').map(work=><CaseStudyCard key={work.id} work={work}/>)}</div>
    <div className="collection-header"><span>01 / AIGC / MOTION / VISUAL</span><h3>用镜头，讲一个好故事。</h3><span>2 支广告 · 1 部游戏 CG · 1 部 AI 短剧</span></div>
    <div className="film-grid">{works.filter(work=>work.kind==='video').map((work,index)=><CaseCard key={work.id} work={work} index={index} open={open}/>)}</div>
    <div className="collection-header image-header"><span>02 / STILL</span><h3>把想象，定格成画面。</h3><span>AI IMAGE EXPLORATIONS</span></div>
    <AccordionGallery items={works.filter(work=>work.kind==='image').map(work=>({image:work.cover,label:work.title,alt:work.description,type:work.type,work}))} defaultIndex={2} height={500} radius={12} gap={12} expandRatio={0.56} grayscale={false} tilt={4} accentColor="#ffae82" onSelect={(item,trigger)=>open(item.work,trigger)}/>

    <dialog ref={dialogRef} className="case-dialog" aria-labelledby="case-title" onClose={afterClose} onClick={event=>{if(event.target===dialogRef.current) close()}}>
      {selected && <><div className="case-dialog-top"><span>{selected.type}</span><button className="dialog-close" onClick={close} autoFocus aria-label="关闭项目详情">关闭 ×</button></div>
        <div className="case-detail-media">{selected.src ? selected.kind==='video' ? <video ref={playerRef} controls playsInline preload="metadata" poster={selected.cover || undefined} src={selected.src} onError={()=>setFailed(true)} aria-label={selected.title}/> : <img src={selected.src} alt={selected.title} onError={()=>setFailed(true)}/> : <Cover work={selected} index={works.findIndex(work=>work.id===selected.id)}/>}{failed && <p className="case-failure">素材暂时无法加载，请稍后重试。</p>}</div>
        <div className="case-detail-copy"><p className="case-kicker">{selected.english}</p><h2 id="case-title">{selected.title}</h2><p>{selected.description}</p><div className="case-facts"><div><span>作品类型</span><strong>{selected.type}</strong></div><div><span>当前状态</span><strong>{selected.status==='pending'?'素材整理中':selected.status==='demo'?'网站视觉演示':'作品已上线'}</strong></div></div>
        {selected.status==='pending' ? <p className="case-note">完整素材、创作目标和制作过程将在整理后补充。</p> : selected.status==='demo' ? <p className="case-note">这张图由 AI 为本站生成，仅用于展示页面效果，不代表个人既有项目或商业案例。</p> : null}
        {selected.motion && <details className="motion-demo"><summary>查看该图的动态演示</summary><video ref={playerRef} controls playsInline preload="none" poster={selected.cover} src={selected.motion} onError={()=>setFailed(true)} aria-label="轨迹之外动态演示"/><p className="case-note">AI 静态图像的镜头动效演示。</p></details>}
        <a className="case-contact" href="mailto:2998052700@qq.com">聊聊这个方向 ↗</a></div></>}
    </dialog>
  </>
}
