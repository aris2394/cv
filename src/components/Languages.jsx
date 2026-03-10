const languages = [
  { name: 'Bahasa Indonesia', level: 'Native', dots: 5 },
  { name: 'Bahasa Inggris', level: 'Profesional', dots: 4 },
  { name: 'Bahasa Jawa', level: 'Native', dots: 5 },
]

export default function Languages() {
  return (
    <section>
      <h2 className="section-title">Bahasa</h2>
      <div className="lang-list">
        {languages.map((l) => (
          <div key={l.name} className="lang-item">
            <div>
              <div className="lang-name">{l.name}</div>
              <div className="lang-dots">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`lang-dot${i < l.dots ? ' filled' : ''}`} />
                ))}
              </div>
            </div>
            <span className="lang-level">{l.level}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
