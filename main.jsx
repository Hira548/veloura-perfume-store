import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Search, ShoppingBag, Menu, X, Heart, Star, ArrowRight, Instagram, Mail, Plus, Minus, Trash2, CheckCircle } from 'lucide-react'
import './styles.css'

const products = [
  { id: 1, name: 'Golden Hour', type: 'Floral · Amber', price: 6490, tag: 'BESTSELLER', notes: 'Jasmine, warm amber, vanilla', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85', category: 'Women' },
  { id: 2, name: 'Noir Éternel', type: 'Woody · Spicy', price: 7290, tag: 'NEW ARRIVAL', notes: 'Sandalwood, black pepper, musk', image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=85', category: 'Men' },
  { id: 3, name: 'Petal Muse', type: 'Fresh · Floral', price: 5890, tag: 'CUSTOMER FAVOURITE', notes: 'Rose, peony, bergamot', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85', category: 'Women' },
  { id: 4, name: 'Santal Dusk', type: 'Woody · Earthy', price: 7990, tag: 'LIMITED EDITION', notes: 'Creamy sandalwood, cedar, tonka', image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=900&q=85', category: 'Unisex' },
  { id: 5, name: 'Citrus Reverie', type: 'Citrus · Fresh', price: 5490, tag: 'FRESH PICK', notes: 'Mandarin, neroli, white musk', image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=900&q=85', category: 'Unisex' },
  { id: 6, name: 'Velvet Bloom', type: 'Sweet · Floral', price: 6890, tag: 'JUST ARRIVED', notes: 'Blackcurrant, iris, soft vanilla', image: 'https://images.unsplash.com/photo-1591360236480-4ed861025fa1?auto=format&fit=crop&w=900&q=85', category: 'Women' },
]

function money(n) { return 'Rs. ' + n.toLocaleString('en-PK') }

function App() {
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [notice, setNotice] = useState('')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const visible = useMemo(() => products.filter(p =>
    (category === 'All' || p.category === category) &&
    (p.name + p.type + p.notes).toLowerCase().includes(search.toLowerCase())
  ), [category, search])

  const count = cart.reduce((s, item) => s + item.qty, 0)
  const total = cart.reduce((s, item) => s + item.price * item.qty, 0)

  function addToCart(product) {
    setCart(old => old.some(x => x.id === product.id)
      ? old.map(x => x.id === product.id ? { ...x, qty: x.qty + 1 } : x)
      : [...old, { ...product, qty: 1 }])
    setNotice(`${product.name} added to your bag`)
    setTimeout(() => setNotice(''), 2200)
  }
  function updateQty(id, delta) {
    setCart(old => old.map(x => x.id === id ? { ...x, qty: x.qty + delta } : x).filter(x => x.qty > 0))
  }

  return <div className="site">
    <div className="announcement">A little luxury, delivered to your door · Free delivery on orders over Rs. 8,000</div>
    <header className="header">
      <button className="icon-btn mobile-menu" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Open menu">{mobileOpen ? <X/> : <Menu/>}</button>
      <a className="logo" href="#home">VELOURA<span>PARFUMS</span></a>
      <nav className={mobileOpen ? 'nav nav-open' : 'nav'}>
        <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
        <a href="#shop" onClick={() => setMobileOpen(false)}>Shop all</a>
        <a href="#story" onClick={() => setMobileOpen(false)}>Our story</a>
        <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
      </nav>
      <div className="header-actions">
        <label className="search-box"><Search size={17}/><input value={search} onChange={e => {setSearch(e.target.value); document.getElementById('shop')?.scrollIntoView({behavior:'smooth'})}} placeholder="Search scents..." /></label>
        <button className="icon-btn bag-btn" onClick={() => setCartOpen(true)} aria-label="Open shopping bag"><ShoppingBag/><span>{count}</span></button>
      </div>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">THE ART OF FRAGRANCE</p>
          <h1>A scent that<br/><em>stays with you.</em></h1>
          <p className="hero-text">Discover thoughtfully crafted fragrances that capture a feeling, tell a story, and make every moment unforgettable.</p>
          <a className="button button-dark" href="#shop">Explore the collection <ArrowRight size={17}/></a>
          <div className="hero-proof"><div className="proof-stars">★★★★★</div><span>Made for memories, worn by you</span></div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1400&q=90" alt="Elegant perfume bottle in warm golden light"/>
          <div className="image-note"><span>01 / SIGNATURE</span><strong>Find your<br/>everyday luxury.</strong></div>
        </div>
        <div className="hero-side">SCENT IS A LANGUAGE WITHOUT WORDS</div>
      </section>

      <section className="benefits">
        <div><span className="benefit-icon">✧</span><p><strong>Long-lasting scents</strong><small>Made to linger beautifully</small></p></div>
        <div><span className="benefit-icon">◇</span><p><strong>Carefully selected notes</strong><small>Thoughtful fragrance blends</small></p></div>
        <div><span className="benefit-icon">♡</span><p><strong>A gift worth giving</strong><small>Beautifully presented</small></p></div>
      </section>

      <section className="shop-section" id="shop">
        <div className="section-heading">
          <div><p className="eyebrow">THE VELOURA EDIT</p><h2>Find your <em>signature.</em></h2></div>
          <p className="section-desc">A fragrance for every mood, every memory, every version of you.</p>
        </div>
        <div className="filters">
          <div className="filter-tabs">{['All','Women','Men','Unisex'].map(c => <button key={c} onClick={() => setCategory(c)} className={category === c ? 'active' : ''}>{c}</button>)}</div>
          <span className="result-count">{visible.length} fragrances</span>
        </div>
        <div className="product-grid">
          {visible.map(p => <article className="product-card" key={p.id}>
            <div className="product-image"><img src={p.image} alt={p.name}/><span className="product-tag">{p.tag}</span><button className="quick-add" onClick={() => addToCart(p)} aria-label={`Add ${p.name} to bag`}><Plus/></button></div>
            <div className="product-info"><div><h3>{p.name}</h3><p>{p.type}</p></div><strong>{money(p.price)}</strong></div>
            <p className="notes">{p.notes}</p>
          </article>)}
        </div>
        {visible.length === 0 && <div className="empty-search">No fragrances found. Try another search.</div>}
      </section>

      <section className="story" id="story">
        <div className="story-image"><img src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=85" alt="Perfume and flowers arranged on a table"/></div>
        <div className="story-copy"><p className="eyebrow">A NOTE FROM VELOURA</p><h2>More than a fragrance.<br/><em>A feeling.</em></h2><p>We believe the right scent can take you back to a favourite place, bring a smile to an ordinary day, or become part of a new memory. Veloura is a celebration of those little moments.</p><a href="#shop" className="text-link">Discover our fragrances <ArrowRight size={16}/></a></div>
      </section>

      <section className="quote-section"><span>“</span><p>Wear the feeling. Leave the memory.</p><small>THE VELOURA PHILOSOPHY</small></section>

      <section className="newsletter" id="contact"><div><p className="eyebrow">THE SCENT LETTER</p><h2>A little note of <em>luxury.</em></h2><p>Sign up for new launches, fragrance notes and special offers.</p></div><form onSubmit={e => {e.preventDefault(); if(email.includes('@')) setSubscribed(true)}}><div className="email-field"><Mail size={18}/><input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address"/></div><button className="button button-dark" type="submit">{subscribed ? 'Subscribed ✓' : 'Join the list'}</button>{subscribed && <small className="success-msg">Thank you for joining the Veloura list!</small>}</form></section>
    </main>

    <footer><div className="footer-top"><a className="logo footer-logo" href="#home">VELOURA<span>PARFUMS</span></a><p>Find the fragrance that feels like you.</p><a className="social" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={19}/></a></div><div className="footer-bottom"><span>© 2026 Veloura Parfums. Student project demo.</span><span>Made with care · Pakistan</span></div></footer>

    {notice && <div className="toast"><CheckCircle size={17}/>{notice}</div>}
    {cartOpen && <div className="overlay" onClick={() => setCartOpen(false)}><aside className="cart-drawer" onClick={e => e.stopPropagation()}><div className="cart-head"><div><p className="eyebrow">YOUR SELECTION</p><h2>Shopping bag ({count})</h2></div><button className="icon-btn" onClick={() => setCartOpen(false)}><X/></button></div>
      {cart.length === 0 ? <div className="empty-cart"><ShoppingBag size={34}/><h3>Your bag is waiting</h3><p>Find a scent that feels like you.</p><button className="button button-dark" onClick={() => setCartOpen(false)}>Continue shopping</button></div> :
      <><div className="cart-items">{cart.map(item => <div className="cart-item" key={item.id}><img src={item.image} alt={item.name}/><div className="cart-item-info"><h3>{item.name}</h3><small>{money(item.price)}</small><div className="quantity"><button onClick={() => updateQty(item.id,-1)}><Minus size={13}/></button><span>{item.qty}</span><button onClick={() => updateQty(item.id,1)}><Plus size={13}/></button></div></div><button className="remove" onClick={() => updateQty(item.id,-item.qty)} aria-label="Remove item"><Trash2 size={17}/></button></div>)}</div><div className="cart-summary"><div><span>Subtotal</span><strong>{money(total)}</strong></div><small>Delivery charges calculated at checkout.</small><button className="button button-dark checkout" onClick={() => alert('Demo checkout: connect a payment provider to accept real orders.')}>Proceed to checkout <ArrowRight size={17}/></button></div></>}
    </aside></div>}
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
