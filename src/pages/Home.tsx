import { DevElement } from "../components/DevElement/DevElement"
import { MainContent } from "../components/MainContent/MainContent"
import { Navigate } from "../components/Navigate/Navigate"

export const Home = () => {
    return (
			<>
				<div className='pt-10'>
					<DevElement />
				</div>
				<Navigate />
				<MainContent />
			</>
		)
}