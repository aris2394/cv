const groups = [
  {
    label: 'Jaringan',
    tags: ['TCP/IP', 'VLAN', 'BGP', 'OSPF', 'STP', 'VPN', 'MPLS', 'QoS'],
  },
  {
    label: 'Perangkat',
    tags: ['Cisco IOS', 'MikroTik', 'Juniper', 'HP ProCurve', 'FortiGate'],
  },
  {
    label: 'Monitoring',
    tags: ['Zabbix', 'Grafana', 'PRTG', 'Nagios', 'Wireshark'],
  },
  {
    label: 'Sistem',
    tags: ['Linux (Ubuntu/CentOS)', 'Windows Server', 'Active Directory', 'DHCP/DNS'],
  },
  {
    label: 'Virtualisasi & Cloud',
    tags: ['VMware ESXi', 'Proxmox', 'AWS (dasar)', 'Docker (dasar)'],
  },
  {
    label: 'Ticketing & ITSM',
    tags: ['Freshdesk', 'Jira Service Desk', 'GLPI', 'OTRS'],
  },
]

export default function Skills() {
  return (
    <section>
      <h2 className="section-title">Keahlian Teknis</h2>
      {groups.map((g) => (
        <div key={g.label} className="skill-group">
          <div className="skill-group-label">{g.label}</div>
          <div className="skill-tags">
            {g.tags.map((t) => <span key={t} className="skill-tag">{t}</span>)}
          </div>
        </div>
      ))}
    </section>
  )
}
