import './About.css'
import axios from 'axios'
import { useState } from 'react'

/**
 * A React component that represents the About Us page of the app.
 */
const About = (props) => {
    const [about, setAbout] = useState("")
    axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
        .then(response => {
            const about = response.data.about
            setAbout(about)
        })
        .catch(err => console.error(err))
    return (
        <>
            <h1>About Us</h1>
            <img src='./public/me.png' alt="me"/>
            {["",""].forEach( s => <><p class="about">{s}</p><br/></>)}
        </>
    )
}

export default About
