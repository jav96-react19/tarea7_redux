import Counter from '@/components/Counter/Counter.jsx'
import { Provider } from 'react-redux'
import store from '@/store/useStore.jsx'
import './App.css'

function App() {
  return (
    <main>
      {/* Provisionamos el store de Redux al Provider */}
      <Provider store={store}>
        <Counter />
      </Provider>
    </main>
  )
}

export default App
