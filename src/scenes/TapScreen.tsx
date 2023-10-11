import React from 'react'
import RoundedButton from '../components/RoundedButton'
import TapDisappear from '../utils/TapDisappear';

export default function TapScreen() {
    const imgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
    const [i, setI] = React.useState(0)
    const [j, setJ] = React.useState(0)
    const [src, setSrc] = React.useState(imgs[0])
    const handleClick = () => {
        if (j != 19) {
            setI(Math.floor(Math.random() * 9))
            setSrc(imgs[i])
            setJ((prev) => prev + 1)
        }
        else {
            TapDisappear()
        }
        console.log(j)
    }
    return (
        <div className='tapscreen screen'>
            <RoundedButton classNM='rel circle-white-black' text='тык' onClick={handleClick} />
            <div className="circle c1"></div>
            <div className="circle c2"></div>
            <div className="circle c3"></div>
            <div className="circle c4"></div>
            <div className="circle c5"></div>
            <div className="circle c6"></div>
            <div className="circle c7"></div>
            <div className="circle c8"></div>
            <div className="circle c9"></div>
            <div className="circle c10"></div>
            <img className='img-tap' src={src} alt="" />
        </div>
    )
}