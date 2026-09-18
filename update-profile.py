from pathlib import Path
p=Path('src/main.jsx')
s=p.read_text(encoding='utf-8-sig')
s=s.replace("import './theme.css'", "import './theme.css'\nimport WorkGallery from './components/WorkGallery'\nimport ShinyText from './components/ShinyText'\nimport './profile.css'")
s=s.replace('  const dialogRef = useRef(null)\n','').replace('  const [filmError, setFilmError] = useState(false)\n','')
s=s.replace('  const [copied, setCopied] = useState(false)', "  const [copied, setCopied] = useState('')")
s=s.replace("setCopied(true); setTimeout(() => setCopied(false), 2500)", "setCopied('email'); setTimeout(() => setCopied(''), 2500)")
anchor='  return <>\n    <header'
s=s.replace(anchor, "  const copyWechat = async () => { try { await navigator.clipboard.writeText('Gsl2998052700'); setCopied('wechat') } catch { setCopied('manual') } setTimeout(() => setCopied(''), 3000) }\n"+anchor)
s=s.replace('>PROFILE</h1>', '><ShinyText text="PROFILE" speed={3.2} delay={1.2} color="#ece6dc" shineColor="#ffffff" spread={115} disabled={!playing}/></h1>')
s=s.replace('DATA SCIENCE<br/>& AI EXPLORATION','AI FILMMAKING<br/>& CREATIVE WORKFLOWS')
s=s.replace('在数据、交通与人工智能的交汇处。','AI 视频 · 广告分镜 · AI 工作流。')
a=s.index('<div className="about-copy">')
b=s.index('            <div className="education">',a)
s=s[:a]+'''<div className="about-copy"><p className="eyebrow subtle">RESEARCHER. AI CREATOR. PROBLEM SOLVER.</p><h2>把脑海里的画面，<br/><span className="muted">变成看得见的故事。</span></h2><p className="body-copy">你好，我是熊启懿，华南理工大学研究生。我喜欢用理性的方式拆解问题，也喜欢用 AI 把想象变成画面。从交通与数据研究出发，我逐渐把探索延伸到视频创作、广告分镜和自动化工作流。</p><p className="body-copy">我擅长把一个想法拆成可执行的镜头，再将生成、筛选和迭代串成流程。比起单张好看的图，我更在意画面能否讲清楚故事，以及这套方法能否稳定地复用。</p>
            <div className="services"><p className="services-label">我可以参与的创作 / WHAT I CAN HELP WITH</p><div className="service-list"><article><span>01</span><h3>AI 视频创作</h3><p>广告、游戏 CG 与短剧的视觉探索和镜头制作。</p></article><article><span>02</span><h3>广告分镜设计</h3><p>梳理创意、镜头节奏与视觉表达，让想法具体可见。</p></article><article><span>03</span><h3>AI 工作流搭建</h3><p>结合 Prompt 与自动化工具，串联创作和数据处理流程。</p></article></div></div>
'''+s[b:]
a=s.index('      <section className="works section-space"')
b=s.index('      <section className="strengths',a)
s=s[:a]+'''      <section className="works section-space" id="works"><div className="wrap"><SectionLabel number="02">SELECTED WORK · 作品与案例</SectionLabel><div className="section-heading"><h2>画面有想法，<br/>作品有故事。</h2><p>从广告到叙事，从动态到静帧。<br/>探索 AI 创作的不同表达。</p></div><WorkGallery/></div></section>

'''+s[b:]
s=s.replace("{copied ? '已复制 ✓' : '复制 ↗'}", "{copied === 'email' ? '已复制 ✓' : '复制 ↗'}")
s=s.replace("{copied ? '邮箱地址已复制' : ''}", "{copied === 'email' ? '邮箱地址已复制' : copied === 'wechat' ? '微信号已复制' : ''}")
s=s.replace('<div><p>BASED IN</p><span>中国 · 广州</span></div>', '<div><p>WECHAT</p><span className="wechat-id">Gsl2998052700</span><button onClick={copyWechat} className="copy-button" aria-label="复制微信号">{copied === \'wechat\' ? \'已复制 ✓\' : \'复制 ↗\'}</button>{copied === \'manual\' && <small role="status">请选中微信号复制</small>}</div>')
a=s.index('    <dialog ref={dialogRef}')
b=s.index('\n  </>',a)
s=s[:a]+s[b:]
p.write_text(s,encoding='utf-8')
