import './About.css'
import meSrc from './resources/me.png'

/**
 * A React component that represents the About Us page of the app.
 */
const About = props => {
    return (
        <>
            <h1>About Us</h1>
            <img src={meSrc}/>
            <p>Hi! My name is Sivan. I'm a senior computer science student
                taking Agile Software Development, and this is my full-stack
                MERN practice application.</p><br/>
            <p>Some facts about me: I'm from the west coast and I love when it 
                rains. I have a cat named Sushi at home and I volunteer at a cat
                shelter over here. My interests include math, computer science,
                Chinese language and literature, and video games.</p><br/>
            <p>After graduating, I hope to move back to my home city and work as
                a software engineer for a while. I would love to travel to Asia
                (especially China) for an extended period of time at some point.
            </p>
        </>
    )
}

export default About
