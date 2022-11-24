import styles from './CountIndicator.module.css'

interface CountIndicatorProps {
  label: string
  count: string
  color?: 'purple' | 'blue'
}

export const CountIndicator = ({ label, count, color = 'purple'}: CountIndicatorProps) => {
  return (
    <div className={styles['count-indicator-container']}>
      <p className={styles[`count-indicator-text-${color}`]}>{label}</p>
      <span className={styles['count-indicator-count']}>{count}</span>
    </div>
  )
}
