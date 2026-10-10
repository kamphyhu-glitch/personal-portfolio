import './ContentOperationsCaseStudy.css'

const media = '/media/content-operations/'

const workflow = [
  ['01', 'Monitor', '持续关注节目播出节点、艺人动态与平台热点，建立候选选题池。'],
  ['02', 'Select', '结合人物关系、情绪点与传播时效，判断适合快速跟进的内容方向。'],
  ['03', 'Prepare', '整理可用素材、标题信息和镜头重点，为拍摄或二次剪辑明确表达目标。'],
  ['04', 'Publish', '完成内容包装与发布协同，保证热点内容在有效时间窗口内上线。'],
  ['05', 'Review', '结合播放、互动和内容表现复盘选题，沉淀下一轮可复用的判断依据。'],
]

const performance = [
  ['singer-hot-topic.jpg', '节目热点内容', '代表内容播放超过 100 万，验证节目节点与高情绪片段的传播潜力。'],
  ['singer-viral-moment.jpg', '人物互动片段', '围绕舞台互动与人物关系提炼标题和剪辑重点。'],
  ['co-created-content.jpg', '共创内容', '通过人物同框与轻量叙事情境增强内容的观看吸引力。'],
]

function SectionHeading({ number, eyebrow, title, intro }) {
  return <div className="ops-section-heading">
    <div><span>{number}</span><p>{eyebrow}</p></div>
    <h2>{title}</h2>
    {intro && <p className="ops-section-intro">{intro}</p>}
  </div>
}

export default function ContentOperationsCaseStudy() {
  return <div className="ops-page">
    <header className="ops-nav">
      <a href="/#works">← 返回作品集</a>
      <a href="#top" className="ops-nav-title">Content Operations</a>
      <a href="#evidence" className="ops-nav-link">查看案例 ↓</a>
    </header>

    <main id="top">
      <section className="ops-hero ops-shell">
        <div className="ops-hero-copy">
          <p className="ops-kicker">INTERNSHIP CASE · CONTENT OPERATIONS</p>
          <h1>Entertainment &amp;<br/>Social Content<br/>Operations</h1>
          <p className="ops-hero-lead">从综艺热点到品牌直播，把内容判断落实为可发布、可复盘的运营动作。</p>
          <p className="ops-hero-cn">实习期间主要参与综艺热点内容产出、艺人拍摄协助，以及 WAKUKU、泡泡玛特直播前期选题收集和二次剪辑。案例仅展示可公开的代表画面，账号身份与后台信息已做脱敏处理。</p>
          <div className="ops-tags"><span>热点运营</span><span>内容策划</span><span>二次剪辑</span><span>现场协作</span><span>直播选题</span></div>
        </div>
        <div className="ops-hero-board" aria-label="内容运营案例代表画面">
          <figure className="ops-hero-main"><img src={media + 'content-review-presentation.jpg'} alt="内容运营方法与平台能力复盘现场"/><figcaption>CONTENT REVIEW · FIELD PRACTICE</figcaption></figure>
          <figure className="ops-hero-small ops-hero-small-one"><img src={media + 'singer-hot-topic.jpg'} alt="综艺热点内容代表画面"/><figcaption>VARIETY SHOW</figcaption></figure>
          <figure className="ops-hero-small ops-hero-small-two"><img src={media + 'popmart-live-reference.jpg'} alt="泡泡玛特直播内容参考画面"/><figcaption>LIVE CONTENT</figcaption></figure>
        </div>
      </section>

      <section className="ops-overview ops-shell">
        <SectionHeading number="01" eyebrow="CASE OVERVIEW" title="运营不只是追热点，而是判断什么值得被快速做出来。" intro="这个案例呈现我在真实内容场景中的选题、制作协作与复盘方法。"/>
        <div className="ops-overview-grid">
          <p>工作覆盖节目内容、艺人相关素材和品牌直播三个场景。我需要在有限时间内识别可传播的信息点，整理素材并协助内容落地，再根据实际表现回看选题与包装是否有效。</p>
          <dl>
            <div><dt>ROLE</dt><dd>内容运营实习</dd></div>
            <div><dt>CHANNEL</dt><dd>短视频 · 综艺内容 · 品牌直播</dd></div>
            <div><dt>RESPONSIBILITY</dt><dd>热点选题 · 拍摄协助 · 二次剪辑 · 内容复盘</dd></div>
            <div><dt>PRIVACY</dt><dd>账号信息脱敏 · 数据区间化展示</dd></div>
          </dl>
        </div>
        <div className="ops-results" aria-label="案例结果概览">
          <article><strong>50<span>万+</span></strong><p>多条代表内容播放</p></article>
          <article><strong>100<span>万+</span></strong><p>头部内容播放</p></article>
          <article><strong>03<span>类</span></strong><p>节目 · 艺人 · 直播场景</p></article>
        </div>
        <p className="ops-data-note">数据来自所提供的真实运营截图，公开页面仅保留区间结果，不展示账号主页、用户 ID 与完整后台字段。</p>
      </section>

      <section className="ops-process">
        <div className="ops-shell">
          <SectionHeading number="02" eyebrow="WORKING METHOD" title="从热点信号，到可发布内容。" intro="把内容运营拆成连续步骤，让快速响应不依赖临时灵感。"/>
          <div className="ops-workflow">{workflow.map(([number,title,copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="ops-section ops-shell" id="evidence">
        <SectionHeading number="03" eyebrow="VARIETY SHOW CONTENT" title="把节目讨论点，转化为短视频传播点。" intro="围绕《歌手》、京东采销和《合伙人》等节目节点，快速整理热点、人物互动与可传播片段。"/>
        <div className="ops-performance-grid">{performance.map(([src,title,copy],index) => <figure key={src}><div><img src={media + src} alt={title}/><span>{String(index + 1).padStart(2,'0')}</span></div><figcaption><strong>{title}</strong><p>{copy}</p></figcaption></figure>)}</div>
      </section>

      <section className="ops-field">
        <div className="ops-shell">
          <SectionHeading number="04" eyebrow="ON-SITE COLLABORATION" title="内容判断，也要回到真实现场。" intro="在节目与艺人相关内容中协助素材准备、拍摄配合和现场沟通，让后续剪辑拥有更清晰的内容重点。"/>
          <div className="ops-field-grid">
            <figure><img src={media + 'partner-show-poster.jpg'} alt="合伙人节目公开宣传画面"/><figcaption>PROGRAM CONTEXT · 合伙人</figcaption></figure>
            <figure><img src={media + 'artist-shoot-support.jpg'} alt="歌手节目艺人相关内容画面"/><figcaption>ARTIST CONTENT · 歌手</figcaption></figure>
            <div className="ops-field-copy"><p className="ops-mini-label">MY CONTRIBUTION</p><h3>把现场信息，整理成后续内容可以直接使用的线索。</h3><ul><li>协助艺人相关内容拍摄与素材确认</li><li>记录现场人物关系、情绪点和可用片段</li><li>配合节目节点整理热点内容方向</li><li>为标题、剪辑重点和发布节奏提供素材依据</li></ul></div>
          </div>
        </div>
      </section>

      <section className="ops-section ops-shell">
        <SectionHeading number="05" eyebrow="LIVE CONTENT RESEARCH" title="为直播前期准备更明确的内容抓手。" intro="针对 WAKUKU 与泡泡玛特相关直播，参与选题收集和二次剪辑，把产品信息、用户兴趣和直播表达连接起来。"/>
        <div className="ops-live-grid">
          <figure><img src={media + 'popmart-live-reference.jpg'} alt="泡泡玛特直播内容参考截图"/><figcaption><span>01</span><strong>泡泡玛特</strong><p>收集产品、互动方式和直播节奏相关素材，为选题与剪辑准备参考。</p></figcaption></figure>
          <figure><img src={media + 'wakuku-live-reference.jpg'} alt="WAKUKU直播内容参考截图"/><figcaption><span>02</span><strong>WAKUKU</strong><p>围绕角色产品、用户兴趣与直播内容形式整理可复用的内容方向。</p></figcaption></figure>
          <div className="ops-live-copy"><p className="ops-mini-label">PRE-LIVE WORK</p><h3>选题收集<br/>素材整理<br/>二次剪辑</h3><p>直播内容的前期准备，不只是寻找热门素材，也要判断内容是否与产品、受众和直播节奏匹配。二次剪辑则进一步提炼信息密度，让素材更适合实际传播场景。</p></div>
        </div>
      </section>

      <section className="ops-reflection">
        <div className="ops-shell">
          <SectionHeading number="06" eyebrow="REFLECTION" title="数据是结果，判断过程才是可以复用的能力。"/>
          <blockquote>这段经历让我建立了更完整的内容运营视角：从热点中识别机会，在现场理解素材，再通过剪辑、发布和复盘持续校正选题判断。</blockquote>
          <footer><a href="/#works">← 返回作品集首页</a><span>CONTENT OPERATIONS INTERNSHIP CASE</span><a href="#top">回到顶部 ↑</a></footer>
        </div>
      </section>
    </main>
  </div>
}
