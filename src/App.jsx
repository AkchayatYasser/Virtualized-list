import './App.css'
import VirtualizedList from './components/virtualizedList'


function App() {
  const data = Array.from({ length: 1000 }, (_, i) => `L3iba ra9m ${i + 1}`);

  return (
    <div>
      <h1>Virtualized-List</h1>
      <VirtualizedList data={data} itemHeight={50} visibleItemCount={8} />
    </div>
  )
}

export default App
