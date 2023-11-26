const Advert = () => {
    return (
        <section className="advert-outer">
        <section className="advert">
        <div className="upper">
        <h1 className="title">Typemaster keyboard</h1>
        <p className="bio">
        Improve your productivity and gaming without breaking the bank. Upgrade to a high quality 
        mechanical typing experience.
        </p>
        </div>
        <div className="lower" id="btn-article-div">
            <button className="preorder-middle">Pre-order now</button>
            <p className="release">Release on 5/27</p>
        </div>
        </section>
        <img src="src/assets/mobile/image-keyboard.jpg" alt="" className="keyboard" />
        <img src="src/assets/tablet/image-keyboard.jpg" alt="" className="keyboard-tablet" />
        
        </section>
    )
}

export default Advert;