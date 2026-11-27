import { useState } from 'react'
import './App.css'

const markets = [
  'Forex', 'Derived Indices', 'Stocks',
  'Commodities', 'Crypto', 'Stock Indices'
]

export default function App() {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <header>
        <a className="logo" href="#">TradeNova</a>
        <button className="menu" onClick={() => setMenu(!menu)}
          aria-expanded={menu} aria-label="Toggle navigation">
          {menu ? 'Close' : 'Menu'}
        </button>
        <nav className={menu ? 'open' : ''}>
          <a href="#markets" onClick={() => setMenu(false)}>Markets</a>
          <a href="#platforms" onClick={() => setMenu(false)}>Platforms</a>
          <a href="#about" onClick={() => setMenu(false)}>About</a>
        </nav>
        <a className="button" href="#markets">Explore markets</a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span>TRADING PLATFORM PREVIEW</span>
            <h1>Explore markets.<br/>Discover possibilities.</h1>
            <p>Discover financial markets and modern trading tools in one place.</p>
            <a className="button" href="#markets">Get started</a>
          </div>
          <div className="preview">
            <small>Illustrative market chart</small>
            <svg viewBox="0 0 400 220" width="100%" aria-label="Sample price chart">
              <path d="M0 180 H400 M0 120 H400 M0 60 H400"
                stroke="#334155" fill="none"/>
              <path d="M0 170 L40 150 L75 175 L110 100 L145 125 L185 65 L220 100 L260 40 L300 80 L340 30 L400 15"
                stroke="#2dd4bf" strokeWidth="4" fill="none"/>
            </svg>
          </div>
        </section>

        <section id="about" className="section">
          <h2>Trade with clarity</h2>
          <p>Explore markets, discover platforms and learn about trading.</p>
        </section>

        <section id="markets" className="section">
          <h2>Explore global markets</h2>
          <div className="market-grid">
            {markets.map((market, i) => (
              <article key={market}>
                <span className="number">0{i+1}</span>
                <h3>{market}</h3>
                <p>Discover the fundamentals of this market.</p>
              </article>
            ))}
          </div>
        </section>

        <section id="platforms" className="section dark">
          <h2>Trading tools for every screen</h2>
          <p>Desktop, tablet and mobile experiences.</p>
        </section>
      </main>

      <footer>
        <strong>TradeNova</strong>
        <p>Independent development preview. No live trading or deposits.</p>
      </footer>
    </>
  )
}
