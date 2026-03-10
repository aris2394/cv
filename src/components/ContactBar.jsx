const contacts = [
  { icon: '📍', label: 'Yogyakarta, Indonesia' },
  { icon: '📞', label: '+62 812-3456-7890', href: 'tel:+6281234567890' },
  { icon: '✉️', label: 'aris.setyawan@email.com', href: 'mailto:aris.setyawan@email.com' },
  { icon: '💼', label: 'linkedin.com/in/arissetyawan', href: 'https://linkedin.com/in/arissetyawan' },
  { icon: '🐙', label: 'github.com/arissetyawan', href: 'https://github.com/arissetyawan' },
]

export default function ContactBar() {
  return (
    <div className="contact-bar">
      {contacts.map((c) => (
        <span key={c.label} className="contact-item">
          <span className="contact-icon">{c.icon}</span>
          {c.href
            ? <a href={c.href} target="_blank" rel="noopener noreferrer">{c.label}</a>
            : c.label
          }
        </span>
      ))}
    </div>
  )
}
