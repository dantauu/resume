import { useContext } from "react"
import { NavigateContext } from "../../app/App"
import { InformationElem } from "../InformationElem/InformationElem"
import { ProjectElement } from "../ProjectElement/ProjectElement"

interface renderContentProps {
	[key: string]: JSX.Element
}

export const MainContent = () => {
    const { active } = useContext(NavigateContext)
    const renderContent: renderContentProps = {
		'Вся информация': <InformationElem />,
		'Портфолио': <ProjectElement />
		}
    return (
	<>
		{renderContent[active] || null}
	</>
    )
}