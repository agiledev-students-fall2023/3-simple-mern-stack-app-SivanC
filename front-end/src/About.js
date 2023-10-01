import './About.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

/**
 * A React component that represents the About Us page of the app.
 */
const About = (props) => {
    const [about, setAbout] = useState({ text: [""] })
    const [imgUrl, setImgUrl] = useState("")
    useEffect(async () => {
        await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
            .then(response => {
                const about = response.data.about
                setAbout(about)

                const imgUrl = response.data.img
                setImgUrl(imgUrl)
            })
            .catch(err => console.error(err))
        }, [])
    return (
        <>
            <h1>About Us</h1>
            <img src={imgUrl} alt="me"/>
            {about.text.map(s => <><p className="about">{s}</p><br/></>)}
        </>
    )
}

export default About
