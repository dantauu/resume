import { useContext } from "react"
import { NavigateContext } from "../../app/App"

const NavigateData = [
	{ id: 1, name: 'Вся информация' },
	{ id: 2, name: 'Портфолио' },
]

export const Navigate = () => {
	const { active, setActive } = useContext(NavigateContext)
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
							className={`text-[17px] text-[#d2d1d1] navigate-item ${
								active === item.name && 'active'
							}`}
						>
							<button className='font-Montserrat-M'>{item.name}</button>
						</div>
					))}
				</div>
			</div>
		)
}


