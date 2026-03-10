const educations = [
  {
    degree: 'D3 Teknik Informatika',
    school: 'Politeknik Negeri Semarang',
    year: '2017 – 2020',
  },
  {
    degree: 'SMK Jurusan Teknik Komputer & Jaringan',
    school: 'SMK Negeri 2 Yogyakarta',
    year: '2014 – 2017',
  },
]

const certifications = [
  { name: 'Cisco CCNA (200-301)', year: '2022' },
  { name: 'MikroTik MTCNA', year: '2021' },
  { name: 'CompTIA Network+', year: '2023' },
  { name: 'ITIL® Foundation v4', year: '2023' },
]

export default function Education() {
  return (
    <section>
      <h2 className="section-title">Pendidikan</h2>
      <div className="edu-list">
        {educations.map((e) => (
          <div key={e.degree}>
            <div className="edu-degree">{e.degree}</div>
            <div className="edu-school">{e.school}</div>
            <div className="edu-year">{e.year}</div>
          </div>
        ))}
      </div>

      <h2 className="section-title" style={{ marginTop: '1.5rem' }}>Sertifikasi</h2>
      <div className="edu-list">
        {certifications.map((c) => (
          <div key={c.name}>
            <div className="edu-degree">{c.name}</div>
            <div className="edu-year">{c.year}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
