
export const DevElement = () => {
    return (
			<div className='header-cont'>
				<div className='dev-about__me'>
					<div className=''>
						<h1 className='text-[#88888860] text-[25px] font-Montserrat-B'>Обо мне</h1>
					</div>
					<div style={{ borderColor: '#88888860' }} className='border'></div>
					<div className='max-w-[700px]'>
						<p className='font-Montserrat-M'>
							Frontend-разработчик с полутора годами опыта, включая год
							коммерческой практики. В своей работе использовал как нативный
							JavaScript так и React, активно применяю стейт-менеджеры (Redux
							Toolkit - чаще всего) и по надобносям бизнеса UI-библиотеки. Разрабатывал интеграции с API,
							использовал RTK Query и axios для запросов. В портфолио можно
							ознакомиться с примерами моих проектов. В свободное время
							увлекаюсь залом и читаю книги Джеймса Клира.
						</p>
					</div>
				</div>
				<div className='border-wrapper'>
					<div className=''>
						<h1 className="text-[#88888860] text-[25px] pt-5 font-Montserrat-B">Должность</h1>
					</div>
					<div style={{ borderColor: '#88888860' }} className='border'></div>
				</div>
				<div className='dev-wrapper pt-5 leading-7'>
					<div className='dev-special__title'>
						<h1 className='font-bold text-3xl'>Frontend разработчик</h1>
					</div>
					<div className='dev-special__descroption'>
						<p className=''>Специализации:</p>
					</div>
					<div className='pl-5'>
						<p className=''>- Программист разработчик</p>
					</div>
					<div className='dev-special__descroption'>
						<p className=''>График работы: полный день</p>
					</div>
					<div className='dev-special__descroption'>
						<p className=''>
							Желательное время в пути до работы: не имеет значения
						</p>
					</div>
					<div className='max-w-[300px] pt-5'>
						<p className=''>
							<span className='font-semibold'>Stack:</span> HTML5, CSS3,
							JavaScript, SCSS, SASS, GitHub, React, Redux Toolkit, React Router
							DOM, TypeScript, RTK Query, Tailwind, Figma
						</p>
					</div>
				</div>
			</div>
		)
}