import video from '../assets/video2.png'
import Header from '../components/header'
import { FaRegCopyright } from "react-icons/fa6";

const Construction = () => {
    return (
        <div>
          <img src={video} alt="video" className='w-full h-1/2' />
             <div className='w-12/12 absolute top-0 left-0 right-0 bg-opacity-20 shadow-md backdrop-blur-sm p-2'>
              <Header/>
          </div>
          <div className=' m-10 text-justify w-12/12  leading-relaxed'>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida, leo vitae aliquam feugiat, lorem mi suscipit velit, id posuere mi augue dapibus magna. 
Duis imperdiet sem ut convallis ultricies. Ut tempus non eros non venenatis. Vestibulum elit ligula, ultricies vel massa eget, aliquet ornare orci. 
Praesent sit amet quam a sem sagittis scelerisque. Etiam iaculis ac est at varius. Etiam bibendum eleifend dictum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida, leo vitae aliquam feugiat, lorem mi suscipit velit, id posuere mi augue dapibus magna. 
Duis imperdiet sem ut convallis ultricies. Ut tempus non eros non venenatis. Vestibulum elit ligula, ultricies vel massa eget, aliquet ornare orci. 
Praesent sit amet quam a sem sagittis scelerisque. Etiam iaculis ac est at varius. Etiam bibendum eleifend dictum.</p>
          </div>
          
          <div className="flex justify-center items-center w-full">
            <p className="inline-flex gap-2">
                <FaRegCopyright className="text-xl" /> 2024 Ndinda Design studio. All rights reserved
            </p>
          </div>

        </div>
    )
}

export default Construction