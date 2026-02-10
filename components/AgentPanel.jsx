'use client';
import { AGENTS } from '@/lib/agents';

const statusEmoji = {
  idle: '💤', working: '🟢', thinking: '🤔', talking: '💬',
  posting: '📤', researching: '🔎', error: '⚠️', sleeping: '😴',
};

export default function AgentPanel({ agents }) {
  return (
    <div style={styles.panel}>
      <h3 style={styles.title}>AGENTS</h3>
      {(agents || []).map(a => {
        const config = AGENTS[a.name] || {};
        return (
          <div key={a.name} style={styles.row}>
            <span style={{ ...styles.dot, backgroundColor: config.color }}></span>
            <span style={styles.icon}>{config.icon}</span>
            <span style={styles.name}>{config.label}</span>
            <span style={{ ...styles.role, color: config.color }}>{config.role}</span>
            <span style={styles.status}>
              {statusEmoji[a.status] || '⚪'} {a.status}
            </span>
            {a.current_task && (
              <div style={styles.task}>"{a.current_task}"</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  panel: {
    background: '#111',
    borderRadius: 8,
    padding: 12,
    border: '1px solid #333',
    width: '100%',
    boxSizing: 'border-box',
  },
  title: {
    color: '#888',
    fontSize: 12,
    letterSpacing: 2,
    margin: '0 0 10px',
    fontFamily: 'monospace',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    padding: '6px 0',
    borderBottom: '1px solid #222',
    flexWrap: 'wrap',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    flexShrink: 0,
  },
  icon: {
    fontSize: 14,
  },
  name: {
    color: '#fff',
    fontSize: 13,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    minWidth: 70,
  },
  role: {
    fontSize: 10,
    fontFamily: 'monospace',
    opacity: 0.7,
    background: 'rgba(255,255,255,0.05)',
    padding: '1px 5px',
    borderRadius: 3,
    border: '1px solid rgba(255,255,255,0.08)',
  },
  status: {
    color: '#aaa',
    fontSize: 11,
    fontFamily: 'monospace',
  },
  task: {
    color: '#666',
    fontSize: 10,
    fontFamily: 'monospace',
    fontStyle: 'italic',
    width: '100%',
    paddingLeft: 20,
  },
};
