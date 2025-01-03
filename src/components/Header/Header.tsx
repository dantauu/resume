import { FC } from "react"
import avatarIcon from '../../assets/img/next-avatar.png'
import telegramIcon from '../../assets/img/telegram.png'
import vkIcon from '../../assets/img/vk.png'
import emailIcon from '../../assets/img/email.png'
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
				<div className='header-description'>
					<HeaderItem text='Место жительства: Таганрог' />
					<HeaderItem text='Гражданство: Россия' />
					<HeaderItem text='Готов к переезду, готов к командировкам' />
				</div>
				<div className='header-connect__me'>
					<div className='header-title'>
						<h2 className='text-[19px] pb-[10px] font-Montserrat-M'>Связаться со мной:</h2>
					</div>
					<div className='flex flex-col gap-[15px]'>
						<div className='flex justify-between items-center'>
							<div className=''>
								<h2 className='font-medium font-Montserrat-M'>Telegram:</h2>
							</div>
							<a target='_blank' href='https://t.me/dantauu'>
								<HeaderIcons img={telegramIcon} />
							</a>
						</div>

						<div className='flex justify-between items-center'>
							<div className=''>
								<h2 className='font-medium font-Montserrat-M'>VK:</h2>
							</div>
							<a target='_blank' href='https://vk.com/dantauu'>
								<HeaderIcons img={vkIcon} />
							</a>
						</div>

						<div className='flex justify-between items-center'>
							<div className=''>
								<h2 className='font-medium font-Montserrat-M'>E-mail:</h2>
							</div>
							<a target='_blank'href='https://mail.google.com/mail/u/0/#search/azazzzz455u%40gmail.com?compose=new'
							>
								<HeaderIcons img={emailIcon} />
							</a>
						</div>
					</div>
					<div className='flex items-center justify-between gap-4 pt-5'>
						<div className='connect-git__title'>
							<h2 className='font-medium font-Montserrat-M'>GitHub:</h2>
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
			<h3 className='text-[19px] pb-[7px] font-Montserrat-B text-[#525252]'>{text}</h3>
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

