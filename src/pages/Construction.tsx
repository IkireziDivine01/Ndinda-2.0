import video from '../assets/video2.png'
import Header from '../components/header'
import { FaRegCopyright } from "react-icons/fa6";
import { IoChatbubbleOutline } from "react-icons/io5";

const Construction = () => {
    return (
        <div>
          <img src={video} alt="video" className='w-full h-1/2' />
             <div className='w-12/12 absolute top-0 left-0 right-0 bg-opacity-20 shadow-md backdrop-blur-sm p-2'>
              <Header/>
          </div>
          <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 4,
          width: '10%',
          height: '10%',
          backgroundColor: '#A56D47',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10%',
        }}
      >
        <div>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-1 items-center text-main-light"> {/* Changed to flex-col and added items-center */}
              <a href="/chat" className="text-main-dark capitalize hover:text-main hover:font-bold active:text-main">
                <IoChatbubbleOutline style={{color: 'white'}}/>
              </a>
              Let's chat
            </li>
          </ul>
        </div>
      </div>
          <div className=' m-10 text-justify w-12/12 text-sm	leading-relaxed'>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida, leo vitae aliquam feugiat, lorem mi suscipit velit, id posuere mi augue dapibus magna. 
Duis imperdiet sem ut convallis ultricies. Ut tempus non eros non venenatis. Vestibulum elit ligula, ultricies vel massa eget, aliquet ornare orci. 
Praesent sit amet quam a sem sagittis scelerisque. Etiam iaculis ac est at varius. Etiam bibendum eleifend dictum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida, leo vitae aliquam feugiat, lorem mi suscipit velit, id posuere mi augue dapibus magna. 
Duis imperdiet sem ut convallis ultricies. Ut tempus non eros non venenatis. Vestibulum elit ligula, ultricies vel massa eget, aliquet ornare orci. 
Praesent sit amet quam a sem sagittis scelerisque. Etiam iaculis ac est at varius. Etiam bibendum eleifend dictum.</p>
          </div>
          
          <div  className="flex justify-center items-center w-full">
             <p className="flex items-center gap-2 text-xs">
                <FaRegCopyright />
                <span>2024 Ndinda Design studio. All rights reserved</span>
            </p>
          </div>

        </div>
    )
}

export default Construction