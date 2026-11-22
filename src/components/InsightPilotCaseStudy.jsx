import './InsightPilotCaseStudy.css'

const media = '/media/insightpilot/'
const liveDemo = 'https://insightpilot-agent.onrender.com/'
const github = 'https://github.com/kamphyhu-glitch/insightpilot-agent'

const contributions = [
  {
    title: '产品流程与交互',
    detail: '我将规划、修订、批准和执行拆成独立状态，设计了新版待批准、执行记录和历史回看，让用户可以追溯统计口径的变更。',
  },
  {
    title: '分析与审批实现',
    detail: '在 E2B Fragments 上构建 CSV 解析、字段验证和审批接口。签名将当前计划与数据版本绑定，修改计划后换发凭证，同一进程内旧凭证随即失效。',
  },
  {
    title: '验证与上线',
    detail: '用浏览器验收修订、审批、下载和刷新恢复，并运行 164 项自动测试。发布公开 Demo，同时保留本地 Live 供真实模型和沙箱联调。',
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
            <p className="insight-case-lead">可审批的 CSV 分析 Agent</p>
            <p className="insight-case-copy">
              产品和运营人员可以上传 CSV，用自然语言提出数据问题。InsightPilot 会先列出分组、指标和计算方式，经用户确认后计算并生成可下载的报告。
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

        <section className="insight-case-section insight-case-purpose" aria-labelledby="insight-purpose">
          <div>
            <h2 id="insight-purpose">为什么做这个项目</h2>
            <p className="insight-case-copy">
              产品和运营同事经常需要临时看一份表，比如判断哪些渠道贡献更多收入，或检查要交付的数据有没有缺失和重复。问题说清楚了，统计口径仍需要对齐。「比较渠道收入」既可以按总收入排，也可以按每条记录的平均收入排。
            </p>
            <p className="insight-case-copy">
              我想让业务同事在出报表前就能发现这样的差异。InsightPilot 把分析口径放进一份可编辑的计划，用户先判断它是否回答了业务问题，然后才批准执行。
            </p>
          </div>
          <dl className="insight-case-facts">
            <div><dt>面向用户</dt><dd>需要临时复核表格指标的产品和运营人员</dd></div>
            <div><dt>适用问题</dt><dd>按维度求和、求平均、计数，以及缺失与重复检查</dd></div>
            <div><dt>交付结果</dt><dd>分组图表、校验记录、Markdown 报告和结果 CSV</dd></div>
          </dl>
        </section>

        <section className="insight-case-section insight-case-scenario" aria-labelledby="insight-scenario">
          <div>
            <h2 id="insight-scenario">一份渠道数据，两种统计口径</h2>
            <p className="insight-case-copy">
              用 24 行合成营销数据做了一次演示。初始问题是「按渠道比较收入」。按渠道求和能看累计贡献，求平均值则能看每条记录的收入水平。
            </p>
            <ol className="insight-case-steps">
              <li><strong>生成计划</strong><p>Agent 提出按渠道分组、对收入求和，将用到的字段和聚合方式显示在计划中。</p></li>
              <li><strong>修订并批准</strong><p>用户将求和改为平均值。页面显示「新版待批准」，点击「批准并执行」后才开始计算。</p></li>
              <li><strong>复核并交付</strong><p>报告计算出整体平均收入 2,912.5，并给出各渠道的结果与四项校验。刷新后可以从历史中回看已保存的报告。</p></li>
            </ol>
          </div>
          <figure className="insight-case-cover insight-case-plan-shot">
            <img src={media + 'plan-review.png'} width="566" height="844" alt="已将聚合方式从求和改为平均值，分析步骤仍显示待执行，等待用户批准" loading="lazy" />
            <figcaption>确认聚合口径后，用户可以批准或拒绝新版计划</figcaption>
          </figure>
        </section>

        <section id="insight-recording" className="insight-case-section insight-case-recording" aria-labelledby="insight-recording-title">
          <div>
            <p className="insight-case-kicker">51 秒演示</p>
            <h2 id="insight-recording-title">从求和计划到平均值报告</h2>
            <p className="insight-case-copy">录屏中可以看到新版计划的变化、结果下载和刷新后的历史恢复。</p>
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

        <section className="insight-case-section" aria-labelledby="insight-contributions">
          <h2 id="insight-contributions">我做了哪些工作</h2>
          <div className="insight-case-grid">
            {contributions.map(({ title, detail }) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="insight-case-section" aria-labelledby="insight-modes">
          <h2 id="insight-modes">计算是怎么完成的</h2>
          <div className="insight-case-grid insight-case-modes">
            <article>
              <h3>公开 Demo</h3>
              <p>规则规划器从受支持的分析中生成计划。批准后，服务端用 TypeScript 计算上传的数据并核对结果，整个过程无需 API Key。</p>
            </article>
            <article>
              <h3>本地 Live</h3>
              <p>DeepSeek 根据列信息和最多五行样本生成结构化计划。服务端验证计划后生成 Python，获批后在 E2B 沙箱运行，再用 TypeScript 独立复算。</p>
            </article>
          </div>
          <p className="insight-case-copy">
            在一次用合成数据完成的 Live 验收中，E2B 算出的收入总额为 69,900。四项对照校验通过，运行结束后确认沙箱已释放。
          </p>
        </section>
      </main>

      <footer className="insight-case-footer insight-case-shell">
        <a href="/#works">← 返回作品与案例</a>
        <a href={github + '/blob/main/docs/verification.md'} target="_blank" rel="noreferrer">项目验收记录 ↗</a>
      </footer>
    </div>
  )
}
