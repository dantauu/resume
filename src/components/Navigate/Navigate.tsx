import { useContext } from "react"
import { NavigateContext } from "../../app/App"

const NavigateData = [
	{ id: 1, name: 'Вся информация' },
	{ id: 2, name: 'Портфолио' },
]


export const Navigate = () => {
	const { active, setActive }: any = useContext(NavigateContext)
    const handleSelect = (name:string) => {
        setActive(name)
    }
    return (
			<div className='container'>
				<div className='flex gap-[10px] justify-center pt-[40px]'>
					{NavigateData.map((item, index) => (
						<div
							onClick={() => handleSelect(item.name)}
							key={index}
							className={`text-[17px] navigate-item ${
								active === item.name && 'active'
							}`}
						>
							<button className="">{item.name}</button>
						</div>
					))}
				</div>
			</div>
		)
}


