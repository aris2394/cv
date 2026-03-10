const experiences = [
  {
    role: 'NOC Engineer',
    company: 'PT Solusi Jaringan Nusantara — Yogyakarta',
    period: 'Jan 2023 – Sekarang',
    desc: [
      'Memantau infrastruktur jaringan 24/7 menggunakan Zabbix dan Grafana.',
      'Menangani insiden jaringan Level 1–2 dengan SLA < 15 menit untuk prioritas tinggi.',
      'Berkoordinasi dengan tim NOC tier-3 dan vendor ISP untuk eskalasi gangguan.',
      'Dokumentasi runbook dan laporan bulanan uptime (rata-rata 99,7%).',
    ],
  },
  {
    role: 'IT Support Specialist',
    company: 'CV Teknologi Maju — Semarang',
    period: 'Jun 2020 – Des 2022',
    desc: [
      'Memberikan dukungan teknis on-site & remote untuk 150+ pengguna.',
      'Instalasi, konfigurasi, dan pemeliharaan PC, printer, dan peripheral jaringan.',
      'Konfigurasi VLAN, switch manageable (Cisco, HP ProCurve), dan access point.',
      'Pengelolaan Active Directory, Office 365, dan backup data harian.',
    ],
  },
  {
    role: 'Teknisi Jaringan (Magang)',
    company: 'UPTD Balai Teknologi Komunikasi — Yogyakarta',
    period: 'Feb 2020 – Mei 2020',
    desc: [
      'Membantu pemasangan kabel UTP/STP dan patch panel di gedung pemerintah.',
      'Asistensi konfigurasi router MikroTik dan firewall dasar.',
    ],
  },
]

export default function Experience() {
  return (
    <section>
      <h2 className="section-title">Pengalaman Kerja</h2>
      <div className="exp-list">
        {experiences.map((e) => (
          <div key={e.role + e.company} className="exp-item">
            <div className="exp-header">
              <span className="exp-role">{e.role}</span>
              <span className="exp-period">{e.period}</span>
            </div>
            <div className="exp-company">{e.company}</div>
            <ul className="exp-desc">
              {e.desc.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
