import { useEffect, useRef } from "react";

const Hero = () => {

    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;  // ye fast or slow krne ke liye lagaye hai macbook ko khulne mai fast
    },[]);

  return (
    <section id="hero">
        <div>
            <h1>MackBook Pro</h1>
            <img src="/title.png" alt="MacBook Title" />
        </div>
        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />
        <button>Buy</button>
        <p>From ₹1,49,999 or ₹12,499/mo for 12 months</p>
    </section>
  )
}

export default Hero