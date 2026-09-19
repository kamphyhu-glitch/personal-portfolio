import { useEffect } from 'react'
import './FlowPilotCaseStudy.css'

const liveDemo = 'https://flowpilot-agent.vercel.app'
const github = 'https://github.com/kamphyhu-glitch/flowpilot-agent'
const media = '/media/flowpilot/'

const problems = [
  ['01', 'Black-box planning', '传统 Assistant 通常只给出最终答案，用户不知道 AI 如何拆解任务和做出安排。'],
  ['02', 'Uncontrolled actions', '当 Agent 开始修改任务、日历或真实数据时，直接执行会降低用户的控制感与信任。'],
  ['03', 'Memory without influence', '保存记忆并不等于使用记忆；它是否真正影响下一次规划，对用户往往并不透明。'],
  ['04', 'Hard to evaluate', 'Agent 质量需要系统评估 Intent、Planning、Tool Use、Memory、Constraint 与 User Control。'],
]

const planningSteps = [
  'Understand the goal',
  'Check tomorrow’s calendar',
  'Check Shenzhen weather',
  'Estimate travel time',
  'Add SQL focus session',
  'Add interview preparation',
  'Block travel time',
]

const learnings = [
  ['01', 'Agent autonomy is not the same as automatic execution.', 'AI 可以拥有更强的行动能力，但用户仍然需要明确的控制权。'],
  ['02', 'Memory should influence behavior, not just store information.', '真正有价值的 Memory 应进入 Planning 和 Constraint Validation。'],
  ['03', 'Explainability is part of the product experience.', 'Agent Trace 不只是调试信息，也是建立用户信任的界面。'],
  ['04', 'Agent quality needs a repeatable evaluation loop.', '从 Failure 到 Root Cause，再到 Fix 与 Verification，比单纯优化 Prompt 更可持续。'],
]

function ExternalLink({ href, children, primary = false }) {
  return <a className={`flowpilot-button${primary ? ' flowpilot-button--primary' : ''}`} href={href} target="_blank" rel="noreferrer">{children}<span aria-hidden="true">↗</span></a>
}

function SectionHeading({ number, eyebrow, title, intro }) {
  return <div className="flowpilot-section-heading"><div><span>{number}</span><p>{eyebrow}</p></div><h2>{title}</h2>{intro && <p className="flowpilot-section-intro">{intro}</p>}</div>
}

function Screenshot({ src, alt, className = '' }) {
  return <figure className={`flowpilot-shot ${className}`}><img src={media + src} alt={alt}/></figure>
}

export default function FlowPilotCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'FlowPilot · AI Agent Case Study'
    window.scrollTo(0, 0)
    return () => { document.title = previousTitle }
  }, [])

  return <div className="flowpilot-page">
    <header className="flowpilot-nav">
      <a href="/" className="flowpilot-back">← 返回作品集</a>
      <a href="#top" className="flowpilot-nav-title">FlowPilot</a>
      <div className="flowpilot-nav-actions"><ExternalLink href={liveDemo}>Live Demo</ExternalLink><ExternalLink href={github}>GitHub</ExternalLink></div>
    </header>

    <main id="top">
      <section className="flowpilot-hero flowpilot-shell">
        <div className="flowpilot-hero-copy">
          <p className="flowpilot-kicker">AI PRODUCT · AGENT EXPERIENCE · 2026</p>
          <h1>FlowPilot</h1>
          <p className="flowpilot-subtitle">AI Native Task Collaboration Agent</p>
          <p className="flowpilot-lead">An AI-native task collaboration Agent that turns complex goals into explainable, controllable and memory-aware actions.</p>
          <p className="flowpilot-lead flowpilot-lead--cn flowpilot-lead--desktop">一个围绕任务规划、工具调用、用户审批、长期记忆与 Agent Evaluation 设计的 AI 原生任务协作产品原型。</p>
          <p className="flowpilot-lead flowpilot-lead--cn flowpilot-lead--mobile">一个让复杂任务规划、审批与记忆影响变得可控、可见的 AI Agent 原型。</p>
          <div className="flowpilot-tags" aria-label="项目标签"><span>AI Product</span><span>Agent UX</span><span className="flowpilot-tag--secondary">Task Planning</span><span>Memory</span><span className="flowpilot-tag--secondary">Evaluation</span></div>
          <div className="flowpilot-hero-actions"><ExternalLink href={liveDemo} primary>Live Demo</ExternalLink><ExternalLink href={github}>GitHub</ExternalLink></div>
        </div>
        <dl className="flowpilot-meta">
          <div><dt>Role</dt><dd>Product Design / Agent Experience / Prototype</dd></div>
          <div><dt>Duration</dt><dd>2026.09</dd></div>
          <div><dt>Tools</dt><dd>Codex / Next.js / React / TypeScript</dd></div>
        </dl>
        <Screenshot src="flowpilot-planning.png" alt="FlowPilot Agent Workspace：面试日任务规划、审批、工具活动与 Agent Trace" className="flowpilot-hero-shot"/>
      </section>

      <section className="flowpilot-section flowpilot-shell">
        <SectionHeading number="01" eyebrow="BACKGROUND · PROBLEM · PRODUCT GOAL" title="From AI Assistant to AI Agent" intro="FlowPilot 的设计重点不是增加更多 AI 功能，而是建立一套完整、可观察的 Agent Experience Loop。"/>
        <div className="flowpilot-background-grid">
          <div className="flowpilot-prose">
            <p>大多数 AI Assistant 擅长回答问题，但当用户提出一个包含时间、偏好、任务优先级和外部工具的复杂目标时，仅仅生成一段建议往往不够。</p>
            <p>我希望进一步探索：如果 AI 开始替用户规划任务并执行操作，产品应该如何保证它既智能，又可控、可解释、可评估？</p>
            <p>FlowPilot 因此被设计为一个 AI-native Task Collaboration Agent。它不仅生成计划，还能够读取长期记忆、拆解任务、调用工具、请求用户审批、执行操作，并解释自己的决策过程。</p>
          </div>
          <aside className="flowpilot-question"><span>DESIGN QUESTION</span><strong>What makes an Agent trustworthy?</strong><p>能力提升的同时，如何保留用户控制、决策透明度和可重复评估？</p></aside>
        </div>
        <div className="flowpilot-loop" aria-label="Agent Experience Loop">
          {['User Goal','Memory Read','Task Planning','Constraint Validation','Tool Selection','User Approval','Execution','Agent Trace','Evaluation'].map((step,index)=><div key={step}><span>{String(index+1).padStart(2,'0')}</span><strong>{step}</strong>{index < 8 && <i aria-hidden="true">→</i>}</div>)}
        </div>
        <div className="flowpilot-card-grid flowpilot-problem-grid">{problems.map(([number,title,copy])=><article key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="flowpilot-section flowpilot-section--tint">
        <div className="flowpilot-shell">
          <SectionHeading number="02" eyebrow="TASK PLANNING · TOOL USE · USER CONTROL" title="Turn complex goals into executable plans" intro="FlowPilot 将现实目标拆成可执行步骤，组合多个工具，并通过 Tool Activity 与 Agent Trace 让过程保持可见。"/>
          <blockquote className="flowpilot-prompt">“我明天下午 3 点在深圳面试，还要学习 SQL，帮我安排一下。”</blockquote>
          <Screenshot src="flowpilot-planning.png" alt="完整 Task Planning、Pending Approval、Tool Activity 与 Agent Trace 界面"/>
          <div className="flowpilot-planning-grid">
            <div><p className="flowpilot-mini-label">TASK PLANNING</p><ol className="flowpilot-step-list">{planningSteps.map(step=><li key={step}>{step}</li>)}</ol></div>
            <div className="flowpilot-control-card"><p className="flowpilot-mini-label">USER CONTROL</p><h3>Agent can act, but the user stays in control</h3><p>所有关键写操作在执行前都进入 Pending Approval。用户可以 Approve 或 Decline，只有审批通过后，操作才会真正进入 Tasks Repository。</p><ul><li>No side effect before approval</li><li>Decline means no write</li><li>Approval is idempotent</li><li>Fallback must stay visible</li></ul><strong>Agent autonomy should increase efficiency without removing user agency.</strong></div>
          </div>
        </div>
      </section>

      <section className="flowpilot-section flowpilot-shell">
        <SectionHeading number="03" eyebrow="MEMORY MANAGEMENT · MEMORY-AWARE PLANNING" title="Memory that actually changes behavior" intro="Memory 不再只是数据库中的记录，而是真正进入下一轮 Agent 的规划和约束验证。"/>
        <div className="flowpilot-media-copy">
          <Screenshot src="flowpilot-memory.png" alt="FlowPilot Memory 管理页，展示偏好、目标、习惯和近期上下文"/>
          <div className="flowpilot-prose"><p>FlowPilot 将长期上下文分为 Preference、Goal、Habit 与 Recent Context，并进一步区分必须满足的 Hard Constraint 和尽量优化的 Soft Preference。</p><dl className="flowpilot-memory-list"><div><dt>Preference</dt><dd>Prefers lighter schedules with buffer time.</dd></div><div className="is-hard"><dt>Hard Constraint · Must satisfy</dt><dd>Don’t schedule anything before 10 AM.</dd></div><div><dt>Goal</dt><dd>Improve SQL skills and prepare portfolio for internship applications.</dd></div><div><dt>Habit</dt><dd>Prefers focused work blocks in the morning.</dd></div></dl></div>
        </div>
        <div className="flowpilot-feature-block">
          <div className="flowpilot-feature-copy"><p className="flowpilot-mini-label">MEMORY-AWARE PLANNING</p><h3>Memory becomes part of the planning logic</h3><p>下一次用户只说：“根据我的偏好，帮我安排明天的 SQL 学习和作品集修改。”</p><ul><li>读取已保存的 Memory</li><li>SQL Learning 安排在 10:00–11:00</li><li>Portfolio Revision 安排在 11:30–12:30</li><li>自动加入 30 分钟 buffer</li><li>验证所有任务不会早于 10 AM</li></ul><div className="flowpilot-influence"><div><span>PREFERENCE · OPTIMIZED</span><p>Added a 30-minute buffer between the two planned work blocks.</p></div><div><span>HARD CONSTRAINT · ENFORCED</span><p>Validated that all proposed work begins at 10:00 or later.</p></div></div></div>
          <Screenshot src="flowpilot-memory-aware.png" alt="Memory-aware Planning 结果，显示记忆读取、规划、工具活动、Agent Trace 和约束执行"/>
        </div>
        <div className="flowpilot-evidence flowpilot-evidence--memory">
          <div><p className="flowpilot-mini-label">EVIDENCE · MEMORY INFLUENCE</p><h3>Preference optimized. Constraint enforced.</h3><p>局部视图将偏好优化与硬约束执行并列呈现，让 Memory 对下一轮决策的影响可以被快速验证。</p></div>
          <figure className="flowpilot-evidence-crop flowpilot-evidence-crop--memory"><img src={media + 'flowpilot-memory-aware.png'} alt="Memory Influence 局部：Preference Optimized 与 Hard Constraint Enforced"/><figcaption>Memory Influence · Agent Trace</figcaption></figure>
        </div>
      </section>

      <section className="flowpilot-section flowpilot-section--dark">
        <div className="flowpilot-shell">
          <SectionHeading number="04" eyebrow="EXECUTION RESULT" title="From approval to action" intro="审批通过后，Agent actions 被持久化到 Tasks workspace，完成从计划到执行的闭环。"/>
          <div className="flowpilot-execution-copy"><p>每个任务保留清晰的执行上下文：</p><div className="flowpilot-tags"><span>Source</span><span>Schedule</span><span>Status</span><span>Created time</span><span>Run reference</span></div></div>
          <Screenshot src="flowpilot-tasks.png" alt="FlowPilot Tasks 页面，显示 Agent 创建任务的来源、时间与状态"/>
        </div>
      </section>

      <section className="flowpilot-section flowpilot-shell">
        <SectionHeading number="05" eyebrow="EXPLAINABILITY · CONSTRAINT VALIDATION" title="Make Agent decisions visible" intro="用户不仅知道 Agent 做了什么，也能理解为什么这样做，以及哪条记忆真正影响了结果。"/>
        <div className="flowpilot-explain-grid">
          <div className="flowpilot-trace-card"><p className="flowpilot-mini-label">AGENT TRACE</p><h3>Decision</h3><p>Use two morning focus blocks with spacing based on saved preferences.</p><h3>Reasons</h3><ul><li>Morning availability is open</li><li>Both tasks benefit from focused time</li><li>Memory preference preserves recovery time</li></ul><div className="flowpilot-trace-fields"><span>Goal</span><span>Constraints</span><span>Tools Used</span><span>Memory Influence</span></div></div>
          <Screenshot src="flowpilot-memory-aware.png" alt="Agent Trace 中的决策、原因、工具和 Memory Influence" className="flowpilot-shot--trace"/>
        </div>
        <div className="flowpilot-constraint">
          <h3>From stored constraint to executable rule</h3>
          <div className="flowpilot-constraint-flow">
            <div><span>BEFORE</span><strong>Memory</strong><p>Don’t schedule anything before 10 AM.</p><em>Agent proposal: 09:30 SQL Learning</em></div>
            <div className="is-failure"><span>FAILURE</span><strong>Constraint Violation</strong><p>保存了约束，但执行前没有验证。</p></div>
            <div><span>ROOT CAUSE</span><strong>Stored ≠ enforced</strong><p>Hard Constraint 没有进入 execution validation。</p></div>
            <div><span>FIX</span><strong>Hard Constraint Validator</strong><p>在 approval 之前验证计划。</p></div>
            <div className="is-after"><span>AFTER</span><strong><s>09:30</s> → 10:00</strong><p>Agent Memory 从“记住”转化为影响行为。</p></div>
          </div>
        </div>
      </section>

      <section className="flowpilot-section flowpilot-section--tint">
        <div className="flowpilot-shell">
          <SectionHeading number="06" eyebrow="EVALUATION · FAILURE ANALYSIS" title="How do we know the Agent is getting better?" intro="不只凭直觉判断回答是否好看，而是把产品机制变成可重复验证的评测与迭代循环。"/>
          <Screenshot src="flowpilot-evaluation.png" alt="FlowPilot Evaluation 仪表盘，包含固定案例、体验指标和测试结果"/>
          <div className="flowpilot-evidence flowpilot-evidence--evaluation">
            <div><p className="flowpilot-mini-label">EVIDENCE · DETERMINISTIC EVALUATION</p><h3>16 fixed cases, visible metrics and inspectable results.</h3><p>局部视图聚焦固定案例数量、体验维度与结果区域，强调这是一套可重复的产品逻辑验证机制。</p></div>
            <figure className="flowpilot-evidence-crop flowpilot-evidence-crop--evaluation"><img src={media + 'flowpilot-evaluation.png'} alt="Evaluation 局部：16 个固定案例、体验指标与结果区域"/><figcaption>16 cases · Experience metrics · Test results</figcaption></figure>
          </div>
          <div className="flowpilot-eval-grid">
            <div className="flowpilot-metrics"><div><strong>16</strong><span>fixed evaluation cases</span></div><div><strong>5</strong><span>test files</span></div><div><strong>21</strong><span>automated tests</span></div><div><strong>7</strong><span>experience dimensions</span></div></div>
            <div className="flowpilot-prose"><p>To avoid evaluating Agent quality only by intuition, I built a deterministic evaluation dashboard across planning, tool use, user control, memory compliance and constraint compliance.</p><p>Current Evaluation 使用 deterministic fixtures，并与真实 Tasks / Memory runtime data 隔离。它用于验证产品逻辑和体验机制，不代表生产级真实大模型 benchmark。</p></div>
          </div>
          <div className="flowpilot-eval-dimensions"><span>Intent Understanding</span><span>Task Planning</span><span>Tool Use</span><span>Context Consistency</span><span>User Control</span><span>Memory Compliance</span><span>Constraint Compliance</span></div>
          <div className="flowpilot-failure"><div><p className="flowpilot-mini-label">FAILURE ANALYSIS</p><h3>Test → Failure → Root Cause → Fix → Verify</h3><p>我将 Agent 问题结构化为 Failure Analysis，而不是简单记录“回答不好”，使每次迭代都能对应具体问题、根因、修复和验证。</p></div><div className="flowpilot-failure-tags"><span>Intent Error</span><span>Planning Error</span><span>Tool Error</span><span>Memory Violation</span><span>Constraint Violation</span><span>Context Loss</span><span>UX Issue</span></div></div>
        </div>
      </section>

      <section className="flowpilot-section flowpilot-shell">
        <SectionHeading number="07" eyebrow="TECHNICAL IMPLEMENTATION" title="Prototype Architecture" intro="优先验证 Agent 产品逻辑，以 deterministic scenarios 与 Mock Tools 构建稳定 Demo，同时保留接入真实 LLM 和外部 API 的模块边界。"/>
        <div className="flowpilot-architecture">
          <article><span>FRONTEND</span><h3>Next.js / React / TypeScript / Tailwind</h3></article>
          <article><span>PERSISTENCE</span><h3>Typed localStorage Repository</h3></article>
          <article><span>STATE SYNC</span><h3>React useSyncExternalStore</h3></article>
          <article><span>TESTING & DEPLOYMENT</span><h3>5 test files / 21 tests<br/>GitHub + Vercel</h3></article>
        </div>
        <aside className="flowpilot-limitations"><p className="flowpilot-mini-label">CURRENT LIMITATIONS</p><ul><li>No real autonomous LLM</li><li>No real Calendar API</li><li>No real Weather API</li><li>No real Maps API</li><li>Deterministic evaluator</li><li>Browser localStorage persistence</li></ul></aside>
      </section>

      <section className="flowpilot-section flowpilot-section--closing">
        <div className="flowpilot-shell">
          <SectionHeading number="08" eyebrow="WHAT I LEARNED" title="What I learned from building FlowPilot"/>
          <div className="flowpilot-card-grid flowpilot-learning-grid">{learnings.map(([number,title,copy])=><article key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
          <div className="flowpilot-cta"><p className="flowpilot-kicker">EXPLORE THE PROTOTYPE</p><h2>Explore FlowPilot</h2><p>FlowPilot is an exploration of how AI Agents can become more capable without becoming less understandable or controllable.</p><div><ExternalLink href={liveDemo} primary>Live Demo</ExternalLink><ExternalLink href={github}>GitHub</ExternalLink></div></div>
          <footer className="flowpilot-footer"><a href="/">← 返回作品集首页</a><span>FlowPilot · AI Agent Case Study · 2026</span><a href="#top">回到顶部 ↑</a></footer>
        </div>
      </section>
    </main>
  </div>
}
