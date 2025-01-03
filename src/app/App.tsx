import { Home } from '../pages/Home'
import { Header } from '../components/Header/Header'
import { createContext, useState } from 'react'
import './index.css'

export interface NavigateContextProps {
	active: string,
	setActive: (value: string) => void
}

export const NavigateContext = createContext<NavigateContextProps>({
	active: 'Вся информация',
	setActive: () => {}
	})

function App() {
	const [active, setActive] = useState<string>('Вся информация')
  return (
		<>
			<Header />
			<NavigateContext.Provider value={{active, setActive}}>
				<main>
					<Home />
				</main>
			</NavigateContext.Provider>
		</>
	)
}

export default App
