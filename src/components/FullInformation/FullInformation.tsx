export const FullInformation = () => {
    return (
			<>
				<div className='information-wrapper flex flex-col gap-[20px]'>
					<div className='information-title'>
						<h1 className='text-[25px] text-[#d5d3d3] font-Montserrat-B'>
							Nebula(Россия)
						</h1>
					</div>
					<div className='information-inner flex flex-col gap-[10px]'>
						<div className='information-grade'>
							<h1 className='text-[25px] text-[#aeaeae] font-Montserrat-B'>
								Junior Frontend developer
							</h1>
						</div>
						<div className='information-inner__description max-w-[555px]'>
							<p className='text-[#aeaeae]'>
								- Участвовал в разработке AI ассистента, с использованием svg,
								axios, Redux Toolkit, React Transition, Swiper, Tailwind, React
								Hook Form.
							</p>
						</div>
						<div className='information-inner__description max-w-[555px]'>
							<p className='text-[#aeaeae]'>
								- Реализовывал адаптивы на flex, grid от больших экранов до
								мобильных устройств для удобства восприятия пользователем.
							</p>
						</div>
						<div className='information-inner__description max-w-[555px]'>
							<p className='text-[#aeaeae]'>
								- Учавстовал в решении задач в команде из 9 человек.
							</p>
						</div>
					</div>
				</div>
			</>
		)
}

export const FullInformationKwork = () => {
    return (
			<div className='flex flex-col gap-[20px] pt-[40px] pb-[50px]'>
				<div className='information-title'>
					<h1 className='text-[25px] text-[#d5d3d3] font-Montserrat-B'>
						Freelance
					</h1>
				</div>
				<div className='information-inner flex flex-col'>
					<div className='information-inner__description max-w-[555px]'>
						<p className='text-[#aeaeae]'>
							- Активное обсуждение и решение задач заказчика.
						</p>
					</div>
					<div className='information-inner__description max-w-[555px]'>
						<p className='text-[#aeaeae]'>
							-Реализовывал market place для продажи товаров с использованием
							React, ReduxToolkit, RTKQuery
						</p>
					</div>
				</div>
			</div>
		)
}