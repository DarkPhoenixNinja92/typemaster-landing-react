const Main = () => {
    return (
        <div className="main">
            <div className="grid-primary">
            <img src="src/assets/mobile/image-phone-and-keyboard.jpg" alt="phone and keyboard" className="left-img" />
            <img src="src/assets/tablet/image-phone-and-keyboard.jpg" alt="phone and keyboard" className="left-img-tablet" />
            <img src="src/assets/desktop/image-phone-and-keyboard.jpg" alt="phone and keyboard" className="left-img-desktop" />
            <img src="src/assets/mobile/image-glass-and-keyboard.jpg" alt="glass and keyboard" className="right-img" />
            <img src="src/assets/tablet/image-glass-and-keyboard.jpg" alt="glass and keyboard" className="right-img-tablet" />
            <img src="src/assets/desktop/image-glass-and-keyboard.jpg" alt="glass and keyboard" className="right-img-desktop" />
            <div className="section-title-div">
                <h2 className="section-title">Mechanical wireless keyboard</h2>
                <p className="section-txt">The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety 
  of switches and keycaps, along with reliable wireless connectivity.</p>
            </div>
            </div>
            <div className="grid-secondary">
                <article className="compatible card">
                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
  <rect width="65" height="65" rx="16" fill="#F16718"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M21.9592 22.449H43.1837C44.2657 22.449 45.1429 23.3261 45.1429 24.4082V36.4898C45.1429 37.5718 44.2657 38.449 43.1837 38.449H21.9592C20.8772 38.449 20 37.5718 20 36.4898V24.4082C20 23.3261 20.8772 22.449 21.9592 22.449ZM27.5102 42.6939L29.7633 39.7551H35.6734L37.9265 42.6939H27.5102Z" fill="white"/>
</svg>
                    <h3 className="compatible-title">Highly compatible</h3>
                    <p className="compatible-txt">
                    Easy to use and works well with all major computer brands, gaming consoles and mobile devices. 
                    Plug & play, no installation or driver needed.
                    </p>
                </article>
                <article className="wireless card">
                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
  <rect width="65" height="65" rx="16" fill="#F16718"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M34.9471 32.9306L40.9215 26.9313C41.2696 26.5825 41.4425 26.0949 41.395 25.6043C41.3463 25.1131 41.0797 24.6694 40.6719 24.3942L33.0748 19.2818C32.5677 18.9397 31.9085 18.9068 31.3698 19.1935C30.8305 19.4808 30.483 20.0421 30.483 20.652V28.5936L26.5331 24.6006C25.8903 23.9529 24.8543 23.9487 24.2067 24.5902C23.559 25.233 23.5542 26.2794 24.197 26.927L30.15 32.9294L24.197 38.9311C23.5542 39.5782 23.559 40.6245 24.2067 41.2685C24.8543 41.9107 25.891 41.907 26.5331 41.2582L30.483 37.2651V45.2062C30.483 45.8167 30.8305 46.3779 31.3698 46.6646C31.9085 46.9519 32.5677 46.9184 33.0748 46.5757L40.6713 41.4651C41.0803 41.1894 41.3463 40.745 41.3944 40.255C41.4419 39.7638 41.269 39.2775 40.9209 38.9275L34.9471 32.9306ZM33.8357 23.7569L37.1938 26.017L33.8357 29.3886V23.7569ZM33.8357 36.4732V42.1048L37.1938 39.8448L33.8357 36.4732Z" fill="white"/>
</svg>
                    <h3 className="wireless-title">Wireless with bluetooth</h3>
                    <p className="wireless-txt">
                    Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. 
                    Simply plug the unifying receiver into your computer.
                    </p>
                </article>
                <article className="battery card">
                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
  <rect width="65" height="65" rx="16" fill="#F16718"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M45.3333 27.3334H45.6547C46.9413 27.3334 47.988 28.38 47.988 29.6667V37C47.988 38.2867 46.9413 39.3334 45.6547 39.3334H45.3333V39.6667C45.3333 41.6894 43.688 43.3334 41.6667 43.3334H19.6667C17.6453 43.3334 16 41.6894 16 39.6667V27C16 24.9774 17.6453 23.3334 19.6667 23.3334H41.6667C43.688 23.3334 45.3333 24.9774 45.3333 27V27.3334ZM24.3333 39.3334C24.8853 39.3334 25.3333 38.8854 25.3333 38.3334V28.3334C25.3333 27.7814 24.8853 27.3334 24.3333 27.3334H21C20.448 27.3334 20 27.7814 20 28.3334V38.3334C20 38.8854 20.448 39.3334 21 39.3334H24.3333ZM33.3333 38.3334C33.3333 38.8854 32.8853 39.3334 32.3333 39.3334H29C28.448 39.3334 28 38.8854 28 38.3334V28.3334C28 27.7814 28.448 27.3334 29 27.3334H32.3333C32.8853 27.3334 33.3333 27.7814 33.3333 28.3334V38.3334ZM40.3333 39.3334C40.8853 39.3334 41.3333 38.8854 41.3333 38.3334V28.3334C41.3333 27.7814 40.8853 27.3334 40.3333 27.3334H37C36.448 27.3334 36 27.7814 36 28.3334V38.3334C36 38.8854 36.448 39.3334 37 39.3334H40.3333Z" fill="white"/>
</svg>
                    <h3 className="battery-title">High capacity battery</h3>
                    <p className="battery-txt">
                    Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones.
                    Enjoy 40 hours of usage time between charges.
                    </p>
                </article>
                <article className="backlit card">
                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
  <rect width="65" height="65" rx="16" fill="#F16718"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M32 20.6093C31.448 20.6093 31 20.1613 31 19.6093V17C31 16.448 31.448 16 32 16C32.552 16 33 16.448 33 17V19.6093C33 20.1613 32.552 20.6093 32 20.6093ZM40.7613 24.2387C40.5053 24.2387 40.2493 24.1413 40.0547 23.9453C39.664 23.5547 39.664 22.9213 40.0547 22.5307L41.9 20.6853C42.2907 20.2947 42.924 20.2947 43.3147 20.6853C43.7053 21.076 43.7053 21.7093 43.3147 22.1L41.4693 23.9453C41.2733 24.14 41.0173 24.2387 40.7613 24.2387ZM44.3907 33H47C47.552 33 48 32.552 48 32C48 31.448 47.552 31 47 31H44.3907C43.8387 31 43.3907 31.448 43.3907 32C43.3907 32.552 43.8387 33 44.3907 33ZM42.6067 43.6067C42.3507 43.6067 42.0947 43.5093 41.9 43.3133L40.0547 41.468C39.664 41.0773 39.664 40.444 40.0547 40.0533C40.4453 39.6627 41.0787 39.6627 41.4693 40.0533L43.3147 41.8987C43.7053 42.2893 43.7053 42.9227 43.3147 43.3133C43.1187 43.5093 42.8627 43.6067 42.6067 43.6067ZM20.6867 43.3133C20.8813 43.5093 21.1373 43.6067 21.3933 43.6067C21.6493 43.6067 21.9053 43.5093 22.1013 43.3133L23.9467 41.468C24.3373 41.0773 24.3373 40.444 23.9467 40.0533C23.556 39.6627 22.9227 39.6627 22.532 40.0533L20.6867 41.8987C20.296 42.2893 20.296 42.9227 20.6867 43.3133ZM19.6093 33H17C16.448 33 16 32.552 16 32C16 31.448 16.448 31 17 31H19.6093C20.1613 31 20.6093 31.448 20.6093 32C20.6093 32.552 20.1613 33 19.6093 33ZM22.532 23.9453C22.7267 24.1413 22.9827 24.2387 23.2387 24.2387C23.4947 24.2387 23.7493 24.14 23.9467 23.9453C24.3373 23.5547 24.3373 22.9213 23.9467 22.5307L22.1013 20.6853C21.7107 20.2947 21.0773 20.2947 20.6867 20.6853C20.296 21.076 20.296 21.7093 20.6867 22.1L22.532 23.9453ZM36 44V45.6667C36 46.9467 34.9467 48 33.6667 48H30.3333C29.2133 48 28 47.1467 28 45.28V44H36ZM37.88 24.7467C35.6933 22.9733 32.8133 22.28 30 22.88C26.4667 23.6133 23.6 26.4933 22.8667 30.0267C22.12 33.6533 23.48 37.2533 26.3867 39.4533C27.1733 40.04 27.72 40.9467 27.9067 42V42.0133C27.9333 42 27.9733 42 28 42H36C36.0267 42 36.04 42 36.0667 42.0133V42C36.2533 40.9867 36.8533 40.0533 37.7733 39.3333C40.0267 37.5467 41.3333 34.88 41.3333 32C41.3333 29.1733 40.08 26.5333 37.88 24.7467ZM37 32.6667C36.4533 32.6667 36 32.2133 36 31.6667C36 29.64 34.36 28 32.3333 28C31.7867 28 31.3333 27.5467 31.3333 27C31.3333 26.4533 31.7867 26 32.3333 26C35.4533 26 38 28.5467 38 31.6667C38 32.2133 37.5467 32.6667 37 32.6667Z" fill="white"/>
</svg>
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