import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="site">
    <header class="header">
      <div class="container">
        <a href="/" class="logo">autonom<span class="accent">OS</span></a>
        <nav class="nav">
          <a href="#problem">Problem</a>
          <a href="#products">Products</a>
          <a href="#platform">Platform</a>
          <a href="#speed">Why Days</a>
          <a href="#ai-agent">AOS AI</a>
          <a href="#context-os">contextOS</a>
          <a href="#contact">Contact</a>
        </nav>
        <button class="mobile-menu-btn" aria-label="Menu">&#9776;</button>
      </div>
    </header>

    <main>
      <!-- HERO -->
      <section class="hero">
        <div class="container hero-layout">
          <div class="hero-text">
            <h1>autonom<span class="accent">OS</span></h1>
            <p class="tagline">Unified context for the enterprise.</p>
          </div>
          <div class="hero-image">
            <img src="/images/hero.png" alt="AutonomOS" />
          </div>
        </div>
      </section>

      <!-- FOUR FORCES -->
      <section id="problem" class="section">
        <div class="container problem-layout">
          <div class="problem-image">
            <img src="/images/funnel.gif" alt="The Context Gap" />
          </div>
          <div class="problem-content">
            <h2>The Four Forces Holding Enterprise Intelligence Back</h2>

            <div class="problem-grid">
              <div class="problem-card">
                <h4>Enterprise Information is Fragmented</h4>
                <ul>
                  <li><strong>900+ applications</strong> managed by the average enterprise</li>
                  <li><strong>71%</strong> remain disconnected</li>
                  <li><strong>95% of IT leaders</strong> cite integration as the #1 barrier to AI adoption</li>
                  <li>Shadow IT and "agentic sprawl" compound the complexity</li>
                </ul>
              </div>
              <div class="problem-card">
                <h4>M&A Value is Leaking</h4>
                <ul>
                  <li><strong>70% of deals</strong> fail to create intended value</li>
                  <li>Only <strong>30%</strong> hit synergy targets</li>
                  <li>Post-merger IT integration averages <strong>18-24 months</strong></li>
                  <li>Up to <strong>50%</strong> of potential merger value is missed</li>
                </ul>
              </div>
              <div class="problem-card">
                <h4>Multi-Entity Comprehension is Surface-Level</h4>
                <ul>
                  <li><strong>Hyperion and OneStream</strong> aggregate GL balances only</li>
                  <li>Operational metadata is stripped away</li>
                  <li>Parent entities see numbers, not the <strong>underlying operations</strong></li>
                </ul>
              </div>
              <div class="problem-card">
                <h4>Adaptation is Stalled</h4>
                <ul>
                  <li>Legacy architecture cannot support <strong>agentic AI</strong></li>
                  <li>Organizations constrained by <strong>decades-old record-keeping systems</strong></li>
                  <li>Without a context layer, <strong>AI agents</strong> remain isolated and ineffective</li>
                </ul>
              </div>
            </div>

            <p class="root-cause">The root cause of these failures is the same: <span class="accent"><strong>The Context Gap.</strong></span> Solving this doesn't require a multi-year migration; it requires a lightweight layer that understands what is already there.</p>
          </div>
        </div>
      </section>

      <!-- THREE PRODUCTS -->
      <section id="products" class="section section-alt">
        <div class="container products-layout">
          <div class="products-content">
            <h2>Three Products, One Scalable Platform, Deployed in Days</h2>

            <div class="product-card">
              <h4>Enterprise<span class="accent">OS</span></h4>
              <p>Single-entity comprehension. The full platform for any enterprise with a complex data architecture that needs to generate a consistent, contextual, reliable data pipeline.</p>
            </div>
            <div class="product-card">
              <h4>Convergence <span class="accent">M&A</span></h4>
              <p>The M&A Data Platform. Unified reporting across the combined entity, from due diligence to integration and beyond. What-if scenarios on contextually reconciled data. Proforma financials, normalized EBITDA, Quality of Earnings. Customer cross-sell and upsell analytics. Synergy identification, integration planning, overlap identification across any function. Ongoing synergy execution monitoring.</p>
            </div>
            <div class="product-card">
              <h4>Convergence <span class="accent">Multi-entity</span></h4>
              <p>Permanent multi-entity operations — health systems, merged banks, defense primes. Unified, contextual reporting with industry-specific semantic libraries. Far beyond the capabilities of GAAP consolidations, gain semantic understanding of your subs' performance, risk profile, and operations.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- PLATFORM -->
      <section id="platform" class="section">
        <div class="container">
          <h2>autonom<span class="accent">OS</span>: One Intelligent, Extensible Platform</h2>
          <div class="platform-intro">
            <p>AOS is a lightweight, rapidly deployed abstraction layer that floats on top of your IT landscape.</p>
            <p>It doesn't move data. It doesn't replace systems.</p>
            <p>It just connects to what's already there.</p>
            <p>And understands what's already there.</p>
          </div>
          <div class="platform-image">
            <img src="/images/platform-ig.jpg" alt="AutonomOS Platform" />
          </div>
          <h3 class="platform-tagline">The same pipeline serves every product.</h3>
        </div>
      </section>

      <!-- WHY DAYS -->
      <section id="speed" class="section section-alt">
        <div class="container speed-layout">
          <div class="speed-content">
            <h2>Why days, not years.</h2>
            <div class="speed-reasons">
              <div class="speed-item">
                <h4 class="accent">We connect to what's already there.</h4>
                <p>There is no data migration, no replatforming and no system replacement. AOS floats on top of your existing IT landscape and reads from the systems you already run. The deployment footprint is a connection, not a project.</p>
              </div>
              <div class="speed-item">
                <h4 class="accent">Discovery is automated, not workshopped.</h4>
                <p>AOS discovers your systems, maps their connections, and extracts schemas automatically. What used to take a team of consultants months takes the platform hours.</p>
              </div>
              <div class="speed-item">
                <h4 class="accent">The semantic layer learns.</h4>
                <p>AOS resolves field-level semantics automatically — heuristic matching in under a second, AI-powered resolution in seconds more. Stakeholders only spend time on the genuinely ambiguous <span class="accent">10%</span>. The other <span class="accent">90%</span> is resolved ahead of time.</p>
              </div>
              <div class="speed-item">
                <h4 class="accent">AI leads and automates the onboarding process.</h4>
                <p>Before a stakeholder sits down, the embedded AI agent (AOS AI) has already researched the company, run IT discovery, and generated preliminary semantic mappings. <span class="accent">90 minutes replaces months</span> of back-and-forth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- AOS AI AGENT -->
      <section id="ai-agent" class="section">
        <div class="container agent-layout">
          <div class="agent-content">
            <h2>Embedded AI Customer Success Agent Who Works 24/7.</h2>
            <div class="agent-card">
              <h4>What it is.</h4>
              <p><span class="accent">AOS AI</span> is a persistent AI engagement lead assigned to every customer. It knows what's been discovered, connected, mapped, and changed — across every module. It remembers context across sessions.</p>
            </div>
            <div class="agent-card">
              <h4>What it does.</h4>
              <p>Deployment and onboarding. Real-time system, data and process support. Process management — automated discovery, conflict resolution, triage. Tech support: human-supervised system configuration changes and personalization.</p>
            </div>
            <div class="agent-card">
              <h4>Why it matters.</h4>
              <p>Compress implementation from months to days via a 60-minute conversation. Always on, always available, knows everything.</p>
            </div>
          </div>
          <div class="agent-image">
            <img src="/images/maestra.png" alt="AOS AI Agent" />
          </div>
        </div>
      </section>

      <!-- CONTEXT OS -->
      <section id="context-os" class="section section-alt">
        <div class="container">
          <h2>context<span class="accent">OS</span>: The Living Enterprise Ontology</h2>
          <p class="section-intro">Enterprise architecture has a <strong>language problem</strong>: systems speak in disparate tables, while AI requires a unified conceptual framework. contextOS bridges this gap — transforming raw data into a single, consistent, verifiable enterprise ontology that evolves automatically.</p>

          <div class="context-grid">
            <div class="context-card">
              <h4>Beyond Data-Driven</h4>
              <p>Agentic AI breaks the assumption that humans can manually supply context for every transaction.</p>
            </div>
            <div class="context-card">
              <h4>Semantic Layer Required</h4>
              <p>Agents need a knowledge graph encoding business rules, relationships, and authority.</p>
            </div>
            <div class="context-card">
              <h4>The Living Record</h4>
              <p>Unlike static docs, contextOS auto-resolves new fields to business meaning and builds relationship graphs continuously.</p>
            </div>
          </div>

          <div class="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Traditional Data</th>
                  <th class="accent">contextOS Ontology</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Structure</strong></td>
                  <td>Rigid tables & rows</td>
                  <td>Flexible nodes & relationships</td>
                </tr>
                <tr>
                  <td><strong>Integration</strong></td>
                  <td>Heavy ETL; months of manual mapping</td>
                  <td>Native; automated semantic resolution</td>
                </tr>
                <tr>
                  <td><strong>Query Method</strong></td>
                  <td>Keyword & SQL-based</td>
                  <td>Intent & concept-based (Plain English)</td>
                </tr>
                <tr>
                  <td><strong>AI Readiness</strong></td>
                  <td>Low; high hallucination risk</td>
                  <td class="accent">High; grounded, contextual answers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section id="contact" class="section cta-section">
        <div class="container cta-layout">
          <div class="cta-content">
            <h2>autonom<span class="accent">OS</span></h2>
            <h3>Unified enterprise context and comprehension — deployed in days, not years.</h3>
            <p class="cta-sub">The platform is built and running. We're ready for the conversation.</p>
            <div class="cta-buttons">
              <a href="mailto:ilya@autonomos.tech" class="btn btn-primary">Contact Us</a>
              <a href="mailto:ilya@autonomos.tech?subject=Demo%20Request" class="btn btn-secondary">Request a Demo</a>
            </div>
          </div>
          <div class="cta-image">
            <img src="/images/cta.png" alt="AutonomOS" />
          </div>
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

// Mobile menu toggle
document.querySelector('.mobile-menu-btn')?.addEventListener('click', () => {
  document.querySelector('.nav')?.classList.toggle('nav-open')
})

// Close mobile menu on link click
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav')?.classList.remove('nav-open')
  })
})
