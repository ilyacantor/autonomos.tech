import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="site">
    <header class="header">
      <div class="container">
        <a href="/" class="logo">AutonomOS</a>
        <nav class="nav">
          <a href="#platform">Platform</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="container">
          <h1>Unified context for the enterprise.</h1>
          <p class="subtitle">
            AutonomOS sits on top of your existing systems — Salesforce, SAP, AWS — without replacing them.
            It discovers what exists, understands how to connect it, maps everything to business meaning,
            and lets humans and AI agents query it in plain English.
          </p>
          <p class="subtitle">The moat is the semantic data layer — not the runtime.</p>
        </div>
      </section>

      <section id="platform" class="platform">
        <div class="container">
          <h2>What AutonomOS does</h2>
          <div class="grid">
            <div class="card">
              <h3>Discover</h3>
              <p>Automatically find and classify every system, dataset, and connection in your enterprise.</p>
            </div>
            <div class="card">
              <h3>Connect</h3>
              <p>Build and maintain pipes between systems with self-healing adapters and drift detection.</p>
            </div>
            <div class="card">
              <h3>Understand</h3>
              <p>Map raw data to business meaning through a semantic triple store — not another dashboard.</p>
            </div>
            <div class="card">
              <h3>Query</h3>
              <p>Ask questions in plain English. Get answers grounded in real data with full provenance.</p>
            </div>
            <div class="card">
              <h3>Govern</h3>
              <p>AI agents work within policy boundaries with human-in-the-loop oversight and budget tracking.</p>
            </div>
            <div class="card">
              <h3>Unify</h3>
              <p>M&amp;A convergence — bring two enterprises into one semantic layer without ripping out systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="contact">
        <div class="container">
          <h2>Get in touch</h2>
          <p><a href="mailto:ilya@autonomos.tech">ilya@autonomos.tech</a></p>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; ${new Date().getFullYear()} AutonomOS Inc.</p>
      </div>
    </footer>
  </div>
`
