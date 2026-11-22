import React, { useRef, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import './hero.css'
import './theme.css'
import WorkGallery from './components/WorkGallery'
import FlowPilotCaseStudy from './components/FlowPilotCaseStudy'
import InsightPilotCaseStudy from './components/InsightPilotCaseStudy'
import AsmrMiniatureCaseStudy from './components/AsmrMiniatureCaseStudy'
import ContentOperationsCaseStudy from './components/ContentOperationsCaseStudy'
import ProfileCard from './components/ProfileCard'
import './profile.css'
import './mobile.css'
import './home-showcase.css'
import { works } from './works'

const media = '/media/'
const featuredProducts = works.filter(work => work.featuredLabel)
const posterCount = works.filter(work => work.kind === 'image').length
const email = '2998052700@qq.com'
const projects = [
  ['2025.09 — 至今', '用户行为预测与因果归因', '核心研究课题', '以城市出行轨迹为研究对象，构建多维评估指标，结合 XGBoost 与 SHAP 探索非线性影响机制。', 'Python / SQL / XGBoost / SHAP'],
  ['2025.09 — 2026.06', '城市路网通行评估与控制实验', '数据与流程负责人', '开展多变量外场实测，处理无人机轨迹数据，运用方差分析与流量—速度拟合支持道路供给优化。', '实验设计 / ANOVA / 数据分析'],
  ['2026.06 — 2026.07', '车牌定位与字符分割自动化系统', '算法开发项目', '独立设计端到端图像处理流水线，结合 OpenCV 迭代复杂背景下的定位与分割规则。', 'Python / OpenCV / 自动化'],
  ['2025.02 — 2026.03', '大型基建前期统筹与跨部门协同', '项目统筹助理', '核对多源台账、对接内外部业务节点，跟踪异常与审批进度，推动多方信息同步。', '项目统筹 / 流程梳理 / 跨部门沟通'],
  ['2023.02 — 2025.06', '连续梁桥荷载试验方案设计', '本科毕业设计', '运用 Midas Civil 建立有限元模型，分析桥梁内力、挠度与自振特性，制定静动力荷载试验方案。', 'Midas Civil / 有限元分析 / 试验设计'],
]
const strengths = [
  ['01', '从数据中，找到线索', '数据分析', '连接原始数据与实际问题，以 Python、SQL 完成清洗、特征工程与指标体系搭建。', ['Python', 'SQL', 'A/B Testing']],
  ['02', '让模型，给出解释', '机器学习', '结合 XGBoost、随机森林与 SHAP，将复杂特征交互转化为可以理解的归因线索。', ['XGBoost', 'SHAP', '随机森林']],
  ['03', '把想法，变成工作流', 'AI 实践', '通过 Prompt Engineering，结合 Claude Code 与 Codex 搭建自动化数据处理流程。', ['AI Agent', 'Prompt', 'Codex']],
  ['04', '在协作中，推动落地', '项目执行', '从外场实验到跨部门协调，梳理任务、对齐信息，让研究和项目有序向前。', ['实验设计', '项目统筹', '沟通协作']],
]
function Arrow({ diagonal = false }) { return <span aria-hidden="true">{diagonal ? '↗' : '↗'}</span> }
function SectionLabel({ number, children }) { return <div className="section-label"><span>{number} /</span>{children}</div> }

function App() {
  const heroVisualRef = useRef(null)
  const heroVideoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [heroError, setHeroError] = useState(false)
  const [copied, setCopied] = useState('')
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 40)
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePlayback = () => {
      const video = heroVideoRef.current
      if (!video) return
      if (preference.matches) video.pause()
      else video.play().catch(() => setPlaying(false))
    }
    updatePlayback()
    preference.addEventListener('change', updatePlayback)
    return () => preference.removeEventListener('change', updatePlayback)
  }, [])
  const updateHeroParallax = (event) => {
    if (!heroVisualRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    heroVisualRef.current.style.setProperty('--hero-parallax-x', `${x * 10}px`)
    heroVisualRef.current.style.setProperty('--hero-parallax-y', `${y * 8}px`)
  }
  const resetHeroParallax = () => {
    heroVisualRef.current?.style.setProperty('--hero-parallax-x', '0px')
    heroVisualRef.current?.style.setProperty('--hero-parallax-y', '0px')
  }
  const toggleHeroVideo = () => {
    const video = heroVideoRef.current
    if (!video || heroError) return
    if (video.paused) video.play().catch(() => setHeroError(true))
    else video.pause()
  }
  const copyEmail = async () => { try { await navigator.clipboard.writeText(email); setCopied('email'); setTimeout(() => setCopied(''), 2500) } catch { window.location.href = `mailto:${email}` } }
  const copyWechat = async () => { try { await navigator.clipboard.writeText('Gsl2998052700'); setCopied('wechat') } catch { setCopied('manual') } setTimeout(() => setCopied(''), 3000) }
  return <>
    <header className={`navigation${scrolled ? ' is-scrolled' : ''}`}><a href="#home" className="wordmark" aria-label="熊启懿 首页">XQ<span>Y</span><i>®</i></a><nav aria-label="主导航"><a href="#about">关于我</a><a href="#works">作品与案例</a><a href="#strengths">个人优势</a></nav><a className="nav-contact" href="#contact">聊聊新可能 <Arrow /></a></header>
    <main>
      <section className="hero editorial-hero" id="home" onPointerMove={updateHeroParallax} onPointerLeave={resetHeroParallax}>
        <div className="hero-content wrap">
          <div className="editorial-hero-copy">
            <p className="hero-eyebrow">熊启懿 · 个人作品集</p>
            <h1 className="editorial-title"><span>AI Products</span><em>&amp; Creative Workflows.</em></h1>
            <div className="editorial-intro">
              <p><strong>从数据分析到任务协作</strong><span>我设计 AI Agent，也用生成式 AI 创作广告、游戏 CG 和短片。</span></p>
              <a className="poster-cta" href="#works">浏览作品与案例 <Arrow /></a>
            </div>
          </div>

          <div className="hero-projects home-showcase" ref={heroVisualRef}>
            <a href="#motion-works" className="hero-project hero-project-lipstick" aria-label="浏览口红 AI 广告作品">
              <img src={media + 'works/lipstick.jpg'} alt="口红 AI 广告真实画面" />
              <span>AI ADVERTISING<br/><strong>Lipstick Film</strong></span>
            </a>
            {featuredProducts.map(work => (
              <a key={work.id} href={work.slug} className={`hero-project hero-project-main hero-project-${work.id}`} aria-label={`查看 ${work.title} ${work.featuredLabel}`}>
                <div className="hero-project-browser">
                  <div className="browser-bar" aria-hidden="true"><i/><i/><i/><span>{work.title.toUpperCase()}</span></div>
                  <img src={work.cover} alt="" />
                </div>
                <div className="hero-project-caption"><strong>{work.title}</strong><small>{work.featuredLabel}</small></div>
              </a>
            ))}
            <div className="hero-project hero-project-aux hero-project-asmr">
              <a href="/asmr-miniature/" className="hero-aux-link" aria-label="查看 ASMR 风格微缩模型展示项目"><video ref={heroVideoRef} muted loop playsInline preload="metadata" poster={media + 'asmr-miniature/cover.webp'} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setHeroError(true)}><source src={media + 'asmr-miniature/final-video.mp4'} type="video/mp4" /></video><span>AI VIDEO<br/><strong>Miniature ASMR</strong></span></a>
              <button className="hero-video-toggle" type="button" onClick={toggleHeroVideo} disabled={heroError} aria-label={playing ? '暂停 ASMR 项目视频' : '播放 ASMR 项目视频'}>{heroError ? '静态封面' : playing ? 'Ⅱ' : '▶'}</button>
            </div>
          </div>
        </div>
        <div className="hero-bottom wrap"><span>01</span><i/><a href="#works">SCROLL TO DISCOVER ↓</a></div>
      </section>

      <section className="about wrap section-space" id="about">
        <SectionLabel number="01">ABOUT ME · 关于我</SectionLabel>
        <div className="about-grid">
          <div className="portrait-block">
            <ProfileCard avatarUrl={media + 'portrait.jpeg'} onContactClick={() => { window.location.hash = 'contact' }}/>
            <p className="location">中国 · 广州 / 籍贯云南丽江</p>
          </div>
          <div className="about-copy">
            <h2>AI 产品设计<br/><span className="muted">与内容创作</span></h2>
            <p className="body-copy">你好，我是熊启懿，华南理工大学交通运输硕士研究生。做出行数据研究时，我习惯先厘清问题和指标口径。这个习惯也延续到了我的 AI Agent 项目里：先让用户看清分析方案或任务计划，确认后再执行。</p>
            <p className="body-copy">我也有内容运营实习和 AI 视觉创作的经历。做广告海报或短片时，我会先确定画面要传达的卖点或情绪，再用参考图、分镜和多轮生成来调整画面。</p>
            <div className="services">
              <div className="service-list">
                <article>
                  <h3>AI Agent 产品</h3>
                  <p>InsightPilot 支持 CSV 分析和报告导出，FlowPilot 支持任务规划和执行前审批。</p>
                </article>
                <article>
                  <h3>内容运营</h3>
                  <p>参与综艺热点选题、艺人拍摄协作，以及品牌直播素材的二次剪辑。</p>
                </article>
                <article>
                  <h3>AI 视觉创作</h3>
                  <p>从 ASMR 微缩模型短片到 DIMOO 和饮料品牌的概念海报，用画面表现产品卖点和场景氛围。</p>
                </article>
              </div>
            </div>
            <div className="education"><div><span>2025 — 2028（预计）</span><strong>华南理工大学</strong><p>交通运输 · 硕士研究生</p></div><div><span>2021 — 2025</span><strong>武汉科技大学</strong><p>交通运输工程 · 本科</p></div></div>
            <div className="stats">
              <div><strong>{featuredProducts.length}<span>个</span></strong><p>AI Agent 作品</p></div>
              <div><strong>{posterCount}<span>张</span></strong><p>品牌概念海报</p></div>
              <div><strong>CET<span>—</span>6</strong><p>英语能力认证</p></div>
            </div>
            <a className="text-link" href={`mailto:${email}`}>{email} <Arrow /></a>
          </div>
        </div>
        <div className="experience"><div className="experience-heading"><h3>研究与项目经历</h3><span>SELECTED EXPERIENCE / 2023 — NOW</span></div>{projects.map(([date,title,role,description,stack],i) => <details key={title} className="experience-row"><summary><span className="experience-date">{date}</span><strong>{title}</strong><span className="experience-role">{role}</span><span className="expand-icon">+</span></summary><div className="experience-detail"><p>{description}</p><span>{stack}</span></div></details>)}</div>
      </section>

      <section className="works section-space" id="works" aria-label="作品与案例">
        <div className="wrap">
          <SectionLabel number="02">SELECTED WORK · 作品与案例</SectionLabel>
          <WorkGallery />
        </div>
      </section>

      <section className="strengths wrap section-space" id="strengths"><SectionLabel number="03">MY APPROACH · 个人优势</SectionLabel><div className="section-heading"><h2>理性为底，创造为翼。</h2><p>从提出问题，<br/>到让想法真正发生。</p></div><div className="strength-grid">{strengths.map(([n,title,label,description,tags]) => <article className="strength-card" key={n}><div className="strength-top"><span>{n}</span><span>{label}</span></div><div className={'line-art art-' + n} aria-hidden="true"><i/><i/><i/><i/></div><h3>{title}</h3><p>{description}</p><div className="tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>

      <section className="contact" id="contact"><div className="wrap contact-inner"><SectionLabel number="04">LET’S CONNECT · 联系我</SectionLabel><div className="contact-status"><i/>AVAILABLE FOR AI PRODUCT &amp; CREATIVE WORK</div><p className="contact-intro">好的想法，往往始于一次交流。</p><h2>下一个可能，<br/><span>一起创造。</span><a href={`mailto:${email}`} className="contact-arrow" aria-label="通过邮件联系熊启懿">↗</a></h2><div className="contact-details"><div><p>EMAIL</p><a href={`mailto:${email}`}>{email}</a><button onClick={copyEmail} className="copy-button" aria-label="复制邮箱地址">{copied === 'email' ? '已复制 ✓' : '复制 ↗'}</button><span className="sr-only" role="status">{copied === 'email' ? '邮箱地址已复制' : copied === 'wechat' ? '微信号已复制' : ''}</span></div><div><p>PHONE</p><a href="tel:13708820988">+86 137 0882 0988</a></div><div><p>WECHAT</p><span className="wechat-id">Gsl2998052700</span><button onClick={copyWechat} className="copy-button" aria-label="复制微信号">{copied === 'wechat' ? '已复制 ✓' : '复制 ↗'}</button>{copied === 'manual' && <small role="status">请选中微信号复制</small>}</div></div><footer><a className="wordmark" href="#home">XQ<span>Y</span></a><p>© {new Date().getFullYear()} 熊启懿 · 个人作品集</p><a href="#home">回到顶部 ↑</a></footer></div></section>
    </main>

  </>
}
const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'
const caseStudyPages = {
  '/flowpilot': FlowPilotCaseStudy,
  '/insightpilot': InsightPilotCaseStudy,
  '/asmr-miniature': AsmrMiniatureCaseStudy,
  '/content-operations': ContentOperationsCaseStudy,
}
const Page = caseStudyPages[currentPath] ?? App
createRoot(document.getElementById('root')).render(<Page />)



