import lightBuyIcon from '../../assets/img/light-buy.png'
import psbIcon from '../../assets/img/psb.png'
import santelIcon from '../../assets/img/santel.png'
import cryptoIcon from '../../assets/img/crypto.png'
import { FC } from 'react'


interface ProjectElementItemProps {
	img: string
	text: string
	link: string
}

export const ProjectElement = () => {
    return (
			<div className='header-cont'>
				<div className='card-wrapper grid grid-cols-2 gap-y-[50px] gap-x-10 pt-10 pb-[110px]'>
					<ProjectElementItem
						text={'Интернет магазин умных товаров'}
						link='https://light-buy.netlify.app'
						img={lightBuyIcon}
					/>

					<ProjectElementItem
						text={'Калькулятор крпиптовалют'}
						link='https://crypto-calc-application.netlify.app'
						img={cryptoIcon}
					/>

					<ProjectElementItem
						text={'Точная копия личного кабинета PSB банка'}
						link='https://dantauu.github.io/PSB-bank/'
						img={psbIcon}
					/>

					<ProjectElementItem
						text={'Газификация частных домов'}
						link='https://santelgaz.ru/'
						img={santelIcon}
					/>
				</div>
			</div>
		)
}

const ProjectElementItem: FC<ProjectElementItemProps> = ({ img, text, link }) => {
    return (
			<div className='card-item flex flex-col items-center max-w-[100%] 
			bg-[#0000000c] p-7 rounded-[10%]'>
				<div className='card-description'>
					<p className='text-[20px] pb-5 font-semibold'>{text}</p>
				</div>
				<div className='card-img'>
					<img
						className='max-w-[550px] h-[300px] rounded-md'
						src={img}
						alt=''
					/>
				</div>
				<a target='_blank' href={link}
					className='flex items-center justify-center mt-4 rounded-xl 
                    bg-[#6f00ff57] w-[140px]'
				>
					<div className='card-link'>
						<button className='text-[#393939] font-medium'>Перейти</button>
					</div>
					<div className=''>
						<svg
							width='40px'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M6 12H18M18 12L13 7M18 12L13 17'
								stroke='#393939'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</div>
				</a>
			</div>
		)
}