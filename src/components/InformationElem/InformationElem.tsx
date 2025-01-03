import { FullInformation, FullInformationKwork } from "../FullInformation/FullInformation"

export const InformationElem = () => {
    return (
			<>
				<div className='header-cont'>
					<div className=''>
						<h1 className='text-[25px] text-[#7d7d7d6e] font-Montserrat-B'>Опыт работы 1 год</h1>
					</div>
					<div style={{ borderColor: '#88888860' }} className='border mb-9'></div>
					<div className='place flex gap-[108px]'>
						<div className='max-w-[109px]'>
							<p className='text-[#888888cb]'>
								Апрель 2024 - Ноябрь 2024 8 месяцев
							</p>
						</div>
						<div className='information-right'>
							<FullInformation />
						</div>
					</div>
				</div>

				<div className='header-cont'>
					<div className='place flex gap-[100px]'>
						<div className='max-w-[107px] pt-[45px]'>
							<p className='text-[#888888cb]'>
								Декабрь 2023 - Март 2024 4 месяца
							</p>
						</div>
						<div className='information-right'>
							<FullInformationKwork />
						</div>
					</div>
				</div>
			</>
		)
}

