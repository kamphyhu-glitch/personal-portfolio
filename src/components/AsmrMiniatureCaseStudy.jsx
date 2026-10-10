import './AsmrMiniatureCaseStudy.css'

const media = '/media/asmr-miniature/'

const mechanism = [
  '螺丝弹出',
  '机关启动',
  '颗粒流动',
  '软体挤压',
  '透明水道',
  '机械归位',
  '螺丝复位',
  '模型恢复',
]

const workflow = [
  ['01', 'Concept', '确定糖果机械玩具屋与 ASMR 机械因果链。'],
  ['02', 'Model Design', '统一主体结构、糖果配色与 PVC / 软陶质感。'],
  ['03', 'Shot Design', '把连续动作拆成更短、更明确的镜头。'],
  ['04', 'Keyframe', '以稳定首帧约束主体、构图与机关位置。'],
  ['05', 'Seedance 2.5', '逐镜生成并比较动作逻辑与画面稳定性。'],
  ['06', 'Review', '筛除结构漂移、动作异常与连续性不足的结果。'],
  ['07', 'Regenerate', '调整描述、参考和镜头复杂度后重新生成。'],
  ['08', 'Editing', '整理镜头节奏，完成竖屏成片。'],
]

const challenges = [
  {
    number: '01',
    title: '主体结构漂移',
    problem: '房屋、透明颗粒仓、齿轮与装饰件在独立镜头中容易发生结构变化。',
    response: '先锁定整体模型，再用统一主体设定和首帧控制各镜头的结构、材质与配色。',
  },
  {
    number: '02',
    title: '复杂动作不稳定',
    problem: '机械弹出、颗粒流动与软体挤压同时发生时，动作逻辑容易模糊。',
    response: '把复合动作拆为更短的单一动作镜头，降低单次生成的结构与运动负担。',
  },
  {
    number: '03',
    title: '镜头连续性',
    problem: '单镜头成立并不代表剪在一起后仍能保持运动方向与视觉节奏。',
    response: '统一光线、材质与色彩，并以机械因果链安排镜头顺序，在后期建立连续节奏。',
  },
  {
    number: '04',
    title: '迭代与筛选',
    problem: '生成结果需要同时满足主体稳定、动作清楚、质感统一和成片可用。',
    response: '按问题类型复盘生成结果，调整 Prompt、Reference 或 Shot Design，再生成、比较和筛选。',
  },
]

const shots = [
  ['shot-01.webp', '完整模型', '建立糖果机械玩具屋的整体形象与空间关系。'],
  ['shot-02.webp', '螺丝弹出', '从单一机械动作切入，让机关启动具有清晰起点。'],
  ['shot-03.webp', '颗粒流动', '用彩色颗粒与透明容器强化触感和 ASMR 观看体验。'],
  ['shot-04.webp', '透明水道', '通过近景呈现透明材质、球体运动与空间层次。'],
  ['shot-05.webp', '机械归位', '让螺丝与齿轮回到稳定状态，完成动作收束。'],
  ['shot-06.webp', '模型恢复', '回到完整模型，形成首尾闭环。'],
]

function SectionHeading({ number, eyebrow, title, intro }) {
  return <div className="asmr-section-heading">
    <div><span>{number}</span><p>{eyebrow}</p></div>
    <h2>{title}</h2>
    {intro && <p className="asmr-section-intro">{intro}</p>}
  </div>
}

export default function AsmrMiniatureCaseStudy() {
  return <div className="asmr-page">
    <header className="asmr-nav">
      <a href="/#works" className="asmr-back">← 返回作品集</a>
      <a href="#top" className="asmr-nav-title">ASMR Miniature</a>
      <a href="#final-result" className="asmr-nav-link">观看成片 ↓</a>
    </header>

    <main id="top">
      <section className="asmr-hero asmr-shell">
        <div className="asmr-hero-copy">
          <p className="asmr-kicker">AI VIDEO · SEEDANCE 2.5 · PERSONAL PROJECT</p>
          <h1>ASMR Miniature<br/>Model Showcase</h1>
          <p className="asmr-hero-subtitle">An AI video experiment exploring miniature model consistency, tactile materials and controllable motion.</p>
          <p className="asmr-hero-cn">围绕“糖果机械玩具屋”展开的生成式视频实验，通过模型锁定、镜头拆解、首帧控制和多轮生成，探索 AI 视频在材质表现、动作可控性与多镜头一致性方面的能力。</p>
          <div className="asmr-tags" aria-label="项目标签"><span>AI Video</span><span>AIGC</span><span>Seedance 2.5</span><span>9:16 Vertical</span></div>
        </div>
        <figure className="asmr-hero-visual"><img src={media + 'cover.webp'} alt="糖果色微缩机械玩具屋完整模型"/><figcaption>FINAL FILM FRAME · 01</figcaption></figure>
      </section>

      <section className="asmr-overview asmr-shell">
        <SectionHeading number="01" eyebrow="PROJECT OVERVIEW" title="把一个模型，变成一段完整的机械叙事。" intro="这不是几个视觉效果的简单拼接，而是一条由机械动作驱动、能够首尾闭环的视觉节奏。"/>
        <div className="asmr-overview-grid">
          <p>这是一个围绕生成式 AI 视频展开的个人实验项目。我尝试让微缩模型在多个镜头中保持稳定，同时让螺丝、齿轮、颗粒和透明滑道形成清晰的动作关系。最终成片以温馨、治愈和可爱的视觉语言呈现机械互动与 ASMR 质感。</p>
          <dl className="asmr-meta">
            <div><dt>FORMAT</dt><dd>9:16 Vertical</dd></div>
            <div><dt>DURATION</dt><dd>28 seconds</dd></div>
            <div><dt>DELIVERY</dt><dd>720 × 1280 · 24fps</dd></div>
            <div><dt>TYPE</dt><dd>Personal Generative Video Experiment</dd></div>
            <div><dt>TOOLS</dt><dd>Seedance 2.5 · ComfyUI · Photoshop · 剪映</dd></div>
          </dl>
        </div>
      </section>

      <section className="asmr-concept">
        <div className="asmr-shell">
          <SectionHeading number="02" eyebrow="CREATIVE CONCEPT" title="Candy-powered cause and effect." intro="糖果色视觉包裹着一条清晰的机械因果链，让动作既可理解，又保持轻盈和治愈。"/>
          <div className="asmr-mechanism" aria-label="视频机械因果链">
            {mechanism.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong>{index < mechanism.length - 1 && <i aria-hidden="true">→</i>}</div>)}
          </div>
          <div className="asmr-concept-grid">
            <figure><img src={media + 'shot-03.webp'} alt="透明颗粒仓和彩色颗粒特写"/><figcaption>TACTILE MATERIAL · CANDY PARTICLES</figcaption></figure>
            <div><p className="asmr-mini-label">VISUAL LANGUAGE</p><h3>PVC / 软陶质感<br/>糖果色与透明材质</h3><p>主体以奶油黄、珊瑚粉、薄荷绿和湖蓝构成。圆润边角、柔和高光与透明部件共同建立玩具般的触感，让机械结构不显冰冷。</p></div>
          </div>
        </div>
      </section>

      <section className="asmr-section asmr-shell">
        <SectionHeading number="03" eyebrow="MODEL DESIGN & CONSISTENCY" title="先稳定主体，再进入动作生成。" intro="模型不是每个镜头重新设计，而是作为所有镜头共同遵守的视觉基准。"/>
        <div className="asmr-model-grid">
          <figure className="asmr-model-main"><img src={media + 'shot-01.webp'} alt="糖果机械玩具屋整体模型"/><figcaption>FULL MODEL · FINAL FILM FRAME</figcaption></figure>
          <div className="asmr-model-copy">
            <p>屋顶、风车、透明颗粒仓、滑道、齿轮和螺丝构成主体的核心识别结构。进入视频生成前，先统一这些组件的位置关系、材质、配色和比例，以减少独立镜头之间的模型漂移。</p>
            <ul><li>固定主体轮廓与关键机关位置</li><li>统一 PVC / 软陶质感与糖果配色</li><li>使用稳定首帧约束构图和结构</li><li>将复杂运动拆解到独立镜头</li></ul>
            <figure className="asmr-model-detail"><img src={media + 'shot-02.webp'} alt="粉色螺丝和蓝色齿轮结构特写"/><figcaption>STRUCTURE DETAIL · SCREW & GEAR</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="asmr-sequence">
        <div className="asmr-shell">
          <SectionHeading number="04" eyebrow="FINAL FILM SHOT SEQUENCE" title="从成片中拆解镜头节奏。" intro="当前项目没有独立分镜图，以下画面均直接提取自最终视频，用于展示实际镜头顺序与动作关系。"/>
          <div className="asmr-shot-grid">{shots.map(([src, title, copy], index) => <figure key={src}><img src={media + src} alt={`${title}镜头`}/><figcaption><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{title}</strong><p>{copy}</p></div></figcaption></figure>)}</div>
        </div>
      </section>

      <section className="asmr-section asmr-shell">
        <SectionHeading number="05" eyebrow="AI VIDEO WORKFLOW" title="From concept to controlled motion." intro="将创意、结构和动作分开处理，再通过生成与筛选逐步收敛到可用成片。"/>
        <div className="asmr-workflow">{workflow.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="asmr-challenges">
        <div className="asmr-shell">
          <SectionHeading number="06" eyebrow="CHALLENGES & ITERATION" title="稳定性来自持续拆解和重生成。"/>
          <div className="asmr-challenge-list">{challenges.map(item => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><div><p><strong>问题</strong>{item.problem}</p><p><strong>处理方式</strong>{item.response}</p></div></article>)}</div>
          <div className="asmr-iteration" aria-label="生成迭代方法"><span>Review result</span><i>→</i><span>Classify issue</span><i>→</i><span>Adjust prompt / reference / shot</span><i>→</i><span>Regenerate</span><i>→</i><span>Compare & select</span></div>
        </div>
      </section>

      <section className="asmr-section asmr-shell">
        <SectionHeading number="07" eyebrow="PROMPT STRATEGY" title="Prompt 是控制变量，不是一次性的答案。" intro="项目未保留可公开展示的完整 Prompt 文档，因此这里仅呈现实际采用的控制思路。"/>
        <div className="asmr-strategy-grid">
          <article><span>01</span><h3>Model</h3><p>明确主体结构、糖果配色、PVC / 软陶质感与关键机关，先建立稳定的模型语言。</p></article>
          <article><span>02</span><h3>Keyframe</h3><p>通过首帧固定构图、组件位置与镜头距离，为动作生成提供一致起点。</p></article>
          <article><span>03</span><h3>Motion</h3><p>每个镜头聚焦一个主要动作，减少同时发生的复杂运动，提升动作清晰度。</p></article>
          <article><span>04</span><h3>Consistency</h3><p>重复约束主体、材质、光线、颜色与运动方向，并根据结果持续缩小偏差。</p></article>
        </div>
      </section>

      <section className="asmr-result" id="final-result">
        <div className="asmr-shell">
          <SectionHeading number="08" eyebrow="FINAL RESULT" title="28 seconds of tactile motion." intro="最终成片保留原始竖屏比例与声音控制，点击播放即可观看完整机械因果链。"/>
          <div className="asmr-player-wrap">
            <video controls playsInline preload="metadata" poster={media + 'cover.webp'} aria-label="ASMR风格微缩模型展示最终视频"><source src={media + 'final-video.mp4'} type="video/mp4"/>你的浏览器暂不支持视频播放。</video>
            <div className="asmr-player-copy"><p className="asmr-mini-label">FINAL FILM</p><h3>ASMR Miniature<br/>Model Showcase</h3><p>Seedance 2.5 · 9:16 Vertical · 28s</p><p>Creative direction, model design, shot design, generation, iteration and editing by Xiong Qiyi.</p></div>
          </div>
        </div>
      </section>

      <section className="asmr-reflection asmr-shell">
        <SectionHeading number="09" eyebrow="REFLECTION" title="漂亮的单镜头，只是开始。"/>
        <blockquote>AI 视频创作的核心，不只是生成一个漂亮镜头，而是建立稳定的主体设定、控制复杂动作、保持镜头连续性，并通过持续测试与复盘形成可复用的生成工作流。</blockquote>
        <p>相比一次性生成，我更关注整个流程中的可控性、稳定性和最终成片表达。</p>
        <footer><a href="/#works">← 返回作品集首页</a><span>ASMR Miniature Model Showcase · 2026</span><a href="#top">回到顶部 ↑</a></footer>
      </section>
    </main>
  </div>
}
