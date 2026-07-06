import { useState,useEffect } from "react"

export default function Body() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        image: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))

    },[])

    function handleChange(event){
        const {value,name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]:value
        }))
        console.log(value);
    }

    function getImage(event){
        event.preventDefault();
        const randomNum = Math.floor(Math.random() * allMemes.length)
        const newMemeURL = allMemes[randomNum].url
        setMeme(prevMeme => ({
            ...prevMeme,
            image:newMemeURL
        }))
    }

    return (
        <>
            <form>
                <div id="text">
                    <div id="top-text">
                        Top Text
                        <input
                            type="text"
                            placeholder="One does not simply"
                            name="topText"
                            onChange={handleChange}
                            value = {meme.topText}
                        />
                    </div>

                    <div id="bottom-text">
                        Bottom Text
                        <input
                            type="text"
                            placeholder="Walk into Mordor"
                            name="bottomText"
                            onChange={handleChange}
                            value = {meme.bottomText}
                        />
                    </div>
                </div>

                <button onClick={getImage}>
                    Get a new meme image 🖼
                </button>
            </form>

            <div className="meme">
                <img
                    src={meme.image}
                    alt="Meme"
                />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </>
    );
}