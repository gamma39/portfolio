import React from 'react';
import classes from './Hero.module.css'
import { AiOutlineCaretDown, AiOutlineMenu } from 'react-icons/ai'

const Hero = () => {
    return (
        <div id="home" className={classes.hero}>
            <AiOutlineMenu className={classes.hamburger} size="4rem"/>
            <div className={classes.spacer}></div>
            <div className={classes.text}>
                <h3>Hello, my name is</h3>
                <h1>James McKinney.</h1>
                <h3>I am a full stack web developer living in Reno, NV.</h3>
            </div>
            <div className={classes.cta}>
                <p>Learn More</p>
                <div className={classes.downArrows}>
                    <AiOutlineCaretDown size="2rem" color="#FEE715FF"/>
                    <AiOutlineCaretDown size="2rem" color="#FEE715FF"/>
                </div>
                
            </div>
        </div>
    )
}

export default Hero