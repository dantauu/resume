import { FullInformation, FullInformationKwork } from "../FullInformation/FullInformation"

export const InformationElem = () => {
    return (
			<>
				<div className='header-cont'>
					<div className=''>
						<h1 className='text-[25px] text-[#88888860] font-Montserrat-B'>Опыт работы</h1>
					</div>
					<div style={{ borderColor: '#88888860' }} className='border'></div>
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
						<div className='max-w-[127px] pt-[45px]'>
							<p className='text-[#888888cb]'>
								Январь 2024 - Фераль(включительно) 2024 2 месяцев
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

