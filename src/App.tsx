import './index.css'
import Cards_icon from './image/Cards_icon.svg'
import Coin_icon from './image/Coin_icon.svg'
import Purse_icon from './image/Purse_icon.svg'
import GIF from './image/GIF.svg'
import Logos from './image/Logos.svg'
import User_Icon from './image/User_Icon.svg'
import Screenshot from './image/Screenshot.svg'
import Screenshot1 from './image/Screenshot1.svg'

interface ContentProp {
  content: React.ReactNode,
  color: string
}

interface FeaturesParam {
  logo: string,
  name: string,
  text: string
}

const features: FeaturesParam[] = [
  { logo: Cards_icon, text: 'Custom your own card for your exact incomes and expenses needs.', name: 'Customizable card' },
  { logo: Coin_icon, text: 'Transfer your payment all over the world with no payment fee.', name: 'No payment fee' },
  { logo: Purse_icon, text: 'The right place to keep your credit and debit cards, boarding passes & more.  ', name: 'All in one place' }
]

const links: string[] = ['© Wallet 2022', 'Privacy policy', 'Cookies policy', 'Terms of use']

const Button = ({ content, color }: ContentProp) => (
  <button className={`text-[17px] text-[#333333] w-34 h-12 rounded-2xl hover:opacity-70 hover:cursor-pointer ${color}`}>{content}</button>
)

const NavBar = () => (
  <nav className='max-w-400 w-full h-20 flex justify-between items-center border-b-2 px-13 border-[#444] fixed bg-[#2B2B2B]'>
    <div className='font-semibold text-[22px] text-white'>Wallet</div>
    <div className='flex gap-8 items-center'>
      <p className='text-[17px] text-white'>Sign up</p>
      <Button content='Log in' color='bg-[#BFAFF2]' />
    </div>
  </nav>
)

const Header = () => (
  <header className='max-w-400 py-20 mt-20 flex justify-center items-center'>
    <div className='flex flex-col gap-5 max-w-200'>
      <h1 className='text-white font-semibold text-[63px]'>SaaS Landing Page Template</h1>
      <p className='text-[17px] text-[#777]'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
      <Button content='Get started' color='bg-[#F8D57E]' />
    </div>
    <div className='max-w-200'>
      <img src={Screenshot} alt="Screenshot" className='bg-[#333333] rounded-2xl max-w-full' />
    </div>
  </header>
)

const LogosPage = () => (
  <section className='max-w-400 w-full py-20 flex justify-center items-center border-y-2 border-[#444]'>
    <img src={Logos} alt="Logo" />
  </section>
)

const ProductImage = () => (
  <section className='max-w-400 w-full py-20 flex justify-center items-center'>
    <img src={Screenshot1} alt="Screenshot" className='rounded-2xl bg-amber-50' />
  </section>
)

const Features = () => (
  <section className='max-w-400 w-full flex justify-between items-center'>
    {features.map((feature) => (<div key={feature.name} className='flex flex-col items-center text-center px-5 max-w-100 gap-4'>
      <img src={feature.logo} alt={feature.name} />
      <p className='text-[17px] text-white font-semibold'>{feature.name}</p>
      <p className='text-[17px] text-[#777]'>{feature.text}</p>
    </div>))}
  </section>
)

const UserFeedback = () => (
  <section className='max-w-300 py-20 flex justify-center items-center'>
    <div className='px-20 py-20 bg-[#BFAFF2] rounded-2xl'>
      <p className='text-[#2B2B2B] text-[22px] font-semibold'>“Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don't need to worry because it's all in one place! thanks!”</p>
      <div className='flex items-center gap-3 mt-10'>
        <img src={User_Icon} alt="User Icon" />
        <div>
          <p className='text-[18px] text-gray-500'>Johnny Owens</p>
          <p className='text-[24px] text-[#2B2B2B]'>★★★★★</p>
        </div>
      </div>
    </div>
  </section>
)

const CTA = () => (
  <section className='max-w-400 w-full py-20 flex justify-between'>
    <div className='flex flex-col gap-5 max-w-200'>
      <h2 className='text-white font-semibold text-[63px]'>Questions? Lets talk</h2>
      <p className='text-[17px] text-[#777]'>Contact us through our 24/7 live chat. Were always happy to help!</p>
      <Button content='Get started' color='bg-[#F8D57E]' />
    </div>
    <div className='max-w-200'>
      <img src={GIF} alt="Screenshot" className='bg-[#333333] rounded-2xl max-w-full' />
    </div>
  </section>
)

const Footer = () => (
  <footer className='max-w-400 w-full py-10 flex justify-between items-center border-t-2 px-13 border-[#444]'>
    <div className='flex flex-col justify-between w-150 h-22'>
      <div className='font-semibold text-[22px] text-white'>Wallet</div>
      <div className='flex justify-between'>
        {links.map((link) => (<p key={link} className='text-[17px] font-semibold text-white'>{link}</p>))}
      </div>
    </div>
    <div className='h-25 w-125 flex flex-col justify-between'>
      <p className='text-[17px] text-white'>Updates right to your Inbox</p>
      <div className='flex justify-between'>
        <input type="text" placeholder='Email Address' className='w-70 h-12 placeholder:text-[#777] rounded-2xl bg-[#333] text-[18px] pl-7' />
        <Button content='Send' color='bg-[#BFAFF2]' />
      </div>
    </div>
  </footer>
)

const App = () => (
  <div className='flex flex-col items-center bg-[#2B2B2B]'>
    <NavBar />
    <main className='flex flex-col items-center max-w-495 px-25'>
      <Header />
      <LogosPage />
      <ProductImage />
      <Features />
      <UserFeedback />
      <CTA />
    </main>
    <Footer />
  </div>
)

export default App
