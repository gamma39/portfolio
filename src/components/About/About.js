import React from "react";
import classes from "./About.module.css"

const About = () => {
    return (
        <div id="about" className={classes.about}>
            <div className={classes.container}>
                <h2>About Me</h2>
                <p>
                    <em>Progamming</em> became a hobby for me when I was in my early twenties after picking up
                    a book on Java. It soon became a passion of mine to always be learning something new
                    and always be trying to build something better than I did before. As I progressed, 
                    I realized that I wanted to make a career out of my skills. I took the Freecodecamp 
                    course to learn front end development and took classes through Udemy to learn the backend. 
                    I have challenged myself to not only take on new projects for self-learning, but to also build sites
                    for others.
                </p>
            </div>
            
        </div>
    )
}

export default About