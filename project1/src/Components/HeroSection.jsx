const HeroSection = () => {
    return (            
        <main className="hero">
            <div className="hero-content">
                <h1>YOUR FEET <br /> DESERVE <br />THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br />THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br />SHOES.</p>
            
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also Availble On</p>
                <div className="brand-icon">
                    <img src="/images/flipkart.png" alt="" />
                    <img src="/images/amazon.png" alt="amazon.logo" />
                </div>
            </div>
            </div>
            <div className="hero-image">
                <img src="/images/hero-image.png" alt="hero-image" />
            </div>
        </main>
    )
}

export default HeroSection;