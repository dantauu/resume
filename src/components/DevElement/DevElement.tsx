
export const DevElement = () => {
    return (
			<div className='header-cont'>
				<div className='dev-about__me'>
					<div className=''>
						<h1 className='text-[#7d7d7d6e] text-[25px] font-Montserrat-B'>
							Обо мне
						</h1>
					</div>
					<div style={{ borderColor: '#88888860' }} className='border'></div>
					<div className='max-w-[700px]'>
						<p className='font-Montserrat-M'>
							Frontend-разработчик с полутора годами опыта, включая год
							коммерческой практики. В своей работе использовал как нативный
							JavaScript так и фреймворки, например, React, активно применяю стейт-менеджеры (ReduxToolkit или Zustand) и по надобности бизнеса UI-библиотеки.
							Разрабатывал интеграции с API, использовал RTK Query и axios для
							запросов. В портфолио можно ознакомиться с примерами моих
							проектов. В свободное время увлекаюсь залом и читаю книги Джеймса
							Клира.
						</p>
					</div>
				</div>
				<div className='border-wrapper'>
					<div className=''>
						<h1 className='text-[#7d7d7d6e] text-[25px] pt-5 font-Montserrat-B'>
							Должность
						</h1>
					</div>
					<div style={{ borderColor: '#88888860' }} className='border'></div>
				</div>
				<div className='dev-wrapper pt-5 leading-7'>
					<div className='dev-special__title'>
						<h1 className='font-bold text-3xl font-Montserrat-B'>
							Frontend разработчик
						</h1>
					</div>
					<div className='dev-special__descroption'>
						<p className='font-Montserrat-M'>Специализации:</p>
					</div>
					<div className='pl-5'>
						<p className='font-Montserrat-M'>- Программист разработчик</p>
					</div>
					<div className='dev-special__descroption'>
						<p className='font-Montserrat-M'>График работы: полный день</p>
					</div>
					<div className='dev-special__descroption'>
						<p className='font-Montserrat-M'>
							Желательное время в пути до работы: не имеет значения
						</p>
					</div>
					<div className='max-w-[300px] pt-5'>
						<p className='font-Montserrat-M'>
							<span className='font-Montserrat-B'>Stack:</span> HTML5, CSS3,
							JavaScript, SCSS, SASS, GitHub, React, Redux Toolkit, React Router DOM, TypeScript, RTK Query, Tailwind, axios, Figma
						</p>
					</div>
				</div>
			</div>
		)
}