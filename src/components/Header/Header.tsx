import { FC } from "react"
import avatarIcon from '../../assets/img/next-avatar.png'
import telegramIcon from '../../assets/img/telegram.svg'
import vkIcon from '../../assets/img//vk.svg'
import emailIcon from '../../assets/img/email.svg'
import gitHubIcon from '../../assets/img/github.svg'


export const Header = () => {
	return (
		<div className='header-cont'>
			<div className='flex items-center gap-[60px] pt-[50px]'>
				<div className='header-avatar'>
					<img
						className='max-w-[400px] max-h-[300px] rounded-[10px]'
						src={avatarIcon}
						alt=''
					/>
				</div>
				<div className='flex flex-col gap-10 text-[20px]'>
					<div className=''>
						<div className=''>
							<h1 className='font-Montserrat-B text-[#d7d7d7]'>
								Имя:{' '}
								<span className='text-[#8e8e8e] font-Montserrat-M'>Артём</span>
							</h1>
						</div>
						<div className=''>
							<h1 className='font-Montserrat-B text-[#d7d7d7]'>
								Фамилия:{' '}
								<span className='text-[#8e8e8e] font-Montserrat-M'>
									Галанский
								</span>
							</h1>
						</div>
						<div className=''>
							<h1 className='font-Montserrat-B text-[#d7d7d7]'>
								Отчество:{' '}
								<span className='text-[#8e8e8e] font-Montserrat-M'>
									Олегович
								</span>
							</h1>
						</div>
					</div>
					<div className='header-description'>
						<div className='flex gap-2'>
							<HeaderItem text='Место жительства:' />
							<span className='text-[#8e8e8e] font-Montserrat-M'>Таганрог</span>
						</div>
						<div className='flex gap-2'>
							<HeaderItem text='Гражданство:' />
							<span className='text-[#8e8e8e] font-Montserrat-M'>Росиия</span>
						</div>
						<HeaderItem text='Готов к переезду, готов к командировкам' />
					</div>
				</div>
				<div className='header-connect__me'>
					<div className='header-title'>
						<h2 className='text-[19px] text-[#d7d7d7] pb-[10px] font-Montserrat-M'>
							Связаться со мной:
						</h2>
					</div>
					<div className='flex flex-col gap-[15px]'>
						<div className='flex justify-between items-center'>
							<div className=''>
								<h2 className='font-medium font-Montserrat-M text-[#d7d7d7]'>
									Telegram:
								</h2>
							</div>
							<a target='_blank' href='https://t.me/dantauu'>
								<HeaderIcons img={telegramIcon} />
							</a>
						</div>

						<div className='flex justify-between items-center'>
							<div className=''>
								<h2 className='font-medium font-Montserrat-M text-[#d7d7d7]'>
									VK:
								</h2>
							</div>
							<a target='_blank' href='https://vk.com/dantauu'>
								<HeaderIcons img={vkIcon} />
							</a>
						</div>

						<div className='flex justify-between items-center'>
							<div className=''>
								<h2 className='font-medium font-Montserrat-M text-[#d7d7d7]'>
									E-mail:
								</h2>
							</div>
							<a
								target='_blank'
								href='https://mail.google.com/mail/u/0/#search/azazzzz455u%40gmail.com?compose=new'
							>
								<HeaderIcons img={emailIcon} />
							</a>
						</div>
					</div>
					<div className='flex items-center justify-between gap-4 pt-5'>
						<div className='connect-git__title'>
							<h2 className='font-medium font-Montserrat-M text-[#d7d7d7]'>
								GitHub:
							</h2>
						</div>
						<a target='_blank' href='https://github.com/dantauu'>
							<HeaderIcons img={gitHubIcon} />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

interface HeaderItemPprops {
    text?: string
    img?: string
}

const HeaderItem: FC<HeaderItemPprops> = ({ text }) => {
    return (
			<div className='header-description__item'>
				<h3 className='text-[19px] text-[#d7d7d7] pb-[7px] font-Montserrat-B'>
					{text}
				</h3>
			</div>
		)
}

const HeaderIcons: FC<HeaderItemPprops> = ({ img }) => {
	return (
		<div className=''>
			<img src={img} alt='' className='max-w-[50px]' />
		</div>
	)
}

