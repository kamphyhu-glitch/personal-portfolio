import './InsightPilotCaseStudy.css'

const media = '/media/insightpilot/'
const liveDemo = 'https://insightpilot-agent.onrender.com/'
const github = 'https://github.com/kamphyhu-glitch/insightpilot-agent'

const decisions = [
  {
    title: '用户可以改计划',
    detail: '将分组列、指标和聚合方式显示在待批准的计划里。用户可以把求和改为平均值，保存后审阅新版 Python。',
  },
  {
    title: '修改后重新审批',
    detail: '服务端为新版计划换发审批凭证，旧版本在当前服务进程内失效。用户批准后才开始计算。',
  },
  {
    title: '报告附带核验记录',
    detail: '报告展示行数、数据质量、分组和汇总校验。用户可下载结果，也可刷新后回看只读历史。',
  },
]

export default function InsightPilotCaseStudy() {
  return (
    <div className="insight-case">
      <header className="insight-case-nav insight-case-shell">
        <a href="/#works">← 返回作品集</a>
        <span>AI PRODUCT / DATA ANALYSIS</span>
        <a href={liveDemo} target="_blank" rel="noreferrer">线上 Demo ↗</a>
      </header>

      <main className="insight-case-shell">
        <section className="insight-case-hero" aria-labelledby="insight-case-title">
          <div>
            <p className="insight-case-kicker">PRODUCT CASE STUDY</p>
            <h1 id="insight-case-title">InsightPilot</h1>
            <p className="insight-case-lead">先审阅分析计划，再让 Agent 执行。</p>
            <p className="insight-case-copy">
              面向产品和运营人员的 CSV 分析工作台。我基于 E2B Fragments 二次开发，负责产品流程、审批交互和结果验收。
            </p>
            <div className="insight-case-links">
              <a className="insight-case-primary" href={liveDemo} target="_blank" rel="noreferrer">体验 Demo ↗</a>
              <a href="#insight-recording">看 51 秒录屏 ↓</a>
              <a href={github} target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
            <p className="insight-case-note">在线演示无需 API Key。实例休眠后首次加载可能需要约一分钟。</p>
          </div>
          <figure className="insight-case-cover">
            <img src={media + 'report.png'} width="1440" height="1000" alt="InsightPilot 的只读历史报告，显示整体平均收入 2,912.5 和各渠道图表" />
            <figcaption>刷新后恢复的报告 · 24 行合成营销数据</figcaption>
          </figure>
        </section>

        <section className="insight-case-section" aria-labelledby="insight-decisions">
          <h2 id="insight-decisions">把决定权留在审批之前</h2>
          <div className="insight-case-grid">
            {decisions.map(({ title, detail }) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="insight-recording" className="insight-case-section insight-case-recording" aria-labelledby="insight-recording-title">
          <div>
            <p className="insight-case-kicker">51 秒演示</p>
            <h2 id="insight-recording-title">从求和计划到平均值报告</h2>
            <p className="insight-case-copy">
              录屏展示上传 CSV、编辑计划、重新审批、下载报告和刷新后的历史恢复。
            </p>
            <dl className="insight-case-evidence">
              <div><dt>参与分析</dt><dd>24 行</dd></div>
              <div><dt>整体平均收入</dt><dd>2,912.5</dd></div>
              <div><dt>结果校验</dt><dd>4 / 4</dd></div>
            </dl>
          </div>
          <video controls playsInline preload="none" poster={media + 'report.png'} aria-label="InsightPilot 公开 Demo 录屏">
            <source src={media + 'demo.webm'} type="video/webm" />
            <a href={media + 'demo.webm'}>下载演示视频</a>
          </video>
        </section>

        <section className="insight-case-section" aria-labelledby="insight-modes">
          <h2 id="insight-modes">两种运行模式</h2>
          <div className="insight-case-grid insight-case-modes">
            <article>
              <h3>公开 Demo</h3>
              <p>规则规划器生成计划，服务端用 TypeScript 对实际 CSV 计算并检查结果的一致性。</p>
            </article>
            <article>
              <h3>本地 Live</h3>
              <p>DeepSeek 生成结构化计划，用户批准后在 E2B 沙箱运行 Python。TypeScript 独立复算并逐项对照。</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="insight-case-footer insight-case-shell">
        <a href="/#works">← 返回作品与案例</a>
        <a href={github + '/blob/main/docs/verification.md'} target="_blank" rel="noreferrer">项目验收记录 ↗</a>
      </footer>
    </div>
  )
}
