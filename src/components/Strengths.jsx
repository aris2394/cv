const strengths = [
  'Pemecahan masalah teknis secara sistematis',
  'Komunikasi efektif dengan pengguna non-teknis',
  'Kemampuan kerja di bawah tekanan & shift malam',
  'Orientasi pada detail dan dokumentasi',
  'Cepat beradaptasi dengan teknologi baru',
  'Kolaborasi lintas tim & vendor',
]

export default function Strengths() {
  return (
    <section>
      <h2 className="section-title">Kompetensi</h2>
      <ul className="strength-list">
        {strengths.map((s) => <li key={s}>{s}</li>)}
      </ul>
    </section>
  )
}
