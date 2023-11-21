const Main = () => {
    return (
        <div className="main flex min-h-screen flex-col items-center justify-center">
            <div className="grid-primary">
            <img src="src/assets/mobile/image-phone-and-keyboard.jpg" alt="phone and keyboard" className="left-img" />
            <img src="src/assets/mobile/image-glass-and-keyboard.jpg" alt="glass and keyboard" className="right-img" />
            <div className="section-title-div">
                <h2 className="section-title">Mechanical wireless keyboard</h2>
                <p className="section-txt">The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety 
  of switches and keycaps, along with reliable wireless connectivity.</p>
            </div>
            </div>
            <div className="grid-secondary grid">
                <article className="compatible">
                    <h3 className="compatible-title">Highly compatible</h3>
                    <p className="compatible-txt">
                    Easy to use and works well with all major computer brands, gaming consoles and mobile devices. 
                    Plug & play, no installation or driver needed.
                    </p>
                </article>
                <article className="wireless">
                    <h3 className="wireless-title">Wireless with bluetooth</h3>
                    <p className="wireless-txt">
                    Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. 
                    Simply plug the unifying receiver into your computer.
                    </p>
                </article>
                <article className="battery">
                    <h3 className="battery-title">High capacity battery</h3>
                    <p className="battery-txt">
                    Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones.
                    Enjoy 40 hours of usage time between charges.
                    </p>
                </article>
                <article className="backlit">
                    <h3 className="backlit-title">RGB backlit modes</h3>
                    <p className="backlit-txt">
                    Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps
                    you type in low light conditions.
                    </p>
                </article>
            </div>
        </div>
    )
}

export default Main;