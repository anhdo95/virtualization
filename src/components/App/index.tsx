import FixedSizeList from '../FixedSizeList'

import styles from './styles.module.css'

function App() {
  return (
    <div className={styles.app}>
      <section className={styles.section}>
        <h3 className={styles.heading}>Fixed Size List</h3>
        <FixedSizeList
          className={styles.list}
          itemCount={1000}
          itemSize={45}
          width={300}
          height={200}
        >
          {({ index, style }) => (
            <div className={styles.row} style={style}>
              Row {index}
            </div>
          )}
        </FixedSizeList>
      </section>
    </div>
  )
}

export default App
