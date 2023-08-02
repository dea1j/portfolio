import React from 'react'
import { useRef, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { gsap } from "gsap";
import Work from "./Work";
import Resume from "./Resume";
import "../assets/styles/css/App.css";
import githubAvatar from "../assets/img/github-avatar.svg";
import mailAvatar from "../assets/img/mail-avatar.svg";
import twitterAvatar from "../assets/img/twitter-avatar.svg";
import linkedinAvatar from "../assets/img/linkedin-avatar.svg";
import arrowUp from "../assets/img/arrow-up.svg";
import MobileHome from './mobile/MobileHome';


function Home() {
    const [page, setPage] = useState("Work")  // State that handles the dynamic web page routing    
    const [mobilePage, setMobilePage] = useState("Home")  // State that handles the dynamic mobile page routing while respecting the web state

    const navigate = useNavigate()
    let location = useLocation()
    
    //  Refs
    let introductionRef = useRef(null)
    let webcontainerRef = useRef(null)
    let briefbioRef = useRef(null)
    let githubLinkRef = useRef(null)
    let mailLinkRef = useRef(null)
    let twitterLinkRef = useRef(null)
    let linkedinLinkRef = useRef(null)
    let appNavigationRef = useRef(null)
    let yearRef = useRef(null)
    // GSAP Animation Timeline 
    const tl = gsap.timeline()

    // Handle mail link actions
    const handleMailLink = function (e) {
        e.preventDefault()
        window.location.href = "mailto:jdayo2012@gmail.com"
    }

    // Handle work link below on the footer of resume(both web and mobile)
    const handleWorkRouteButton = function () {
        setMobilePage("Work")
        setPage("Work")
        navigate("/work")
    }

    // Function that checks the value of route to determine page and handle effect
    const handlePageChangeOnRouteChange = () => {
        if (location.pathname === "/") {
            setPage("Work")
            setMobilePage("Home")
        } else if (location.pathname === "/work") {
            setPage("Work")
        }
    }

    // adds the hover event listenerr on the menu navigation
    useEffect(() => {
        // WORK HANDLERS START
        handlePageChangeOnRouteChange()

        // Introduction VARS
        const firstIntroductionLine = introductionRef.firstElementChild;
        const secondIntroductionLine = firstIntroductionLine.nextSibling;

        // GSAP ANIMATIONS START
        tl
            .to(webcontainerRef, { duration: 0, css: { visibility: "visible" } })
            .from([firstIntroductionLine.children, secondIntroductionLine.children], { duration: 1, y: 75, opacity: 0, autoAlpha: 0, ease: "power3.easeInOut", stagger: 0.18 }, "<.8")
            .from(briefbioRef, { duration: .8, opacity: 0, y: 50, ease: "power3.easeInOut", delay: .1 })
            .from(appNavigationRef, { duration: .5, opacity: 0, x: -30, ease: "power3.easeInOut" })
            .from([githubLinkRef, linkedinLinkRef, mailLinkRef, twitterLinkRef, yearRef], { duration: 1, x: -30, opacity: 0, autoAlpha: 0, ease: "power3.easeInOut", stagger: 0.2 }, "<.3")

        // Handles bio text animation
        setInterval(() => {
            tl
                .to([".bio-text-1", ".bio-text-2", ".bio-text-3", ".bio-text-4", ".bio-text-5"], { duration: 2, css: { color: "rgba(255, 255, 255, 1)" }, ease: "power3.easeInOut", stagger: 0, delay: 2 },)
                .to([".bio-text-1", ".bio-text-2", ".bio-text-3", ".bio-text-4", ".bio-text-5"], { duration: 2, css: { color: "rgba(255, 255, 255, .6)" }, autoAlpha: 0, ease: "power3.easeInOut", stagger: 0 },)

        }, 6000)
    }, [])


    // The use effect tracks if the browser back or front button is pressed and reloads the page(Solves in-page routing bug where the route changees and page doesnt load)
    // The useEffect is dependent on change of the browwser location(pathname)
    useEffect(() => {
        handlePageChangeOnRouteChange()
    }, [handlePageChangeOnRouteChange])


    return (
        <div>
            <div className="app w-full">
                {/* Container for web view */}
                <div ref={el => { webcontainerRef = el }} className="web-container hidden w-full h-screen overflow-hidden lg:grid grid-cols-12 px-3 xl:px-12 2xl:px-5 3xl:px-28 font-cat-regular" >
                    {/* Left main side */}
                    <div className="left main-content col-span-6 text-opacity-90 pl-8 xl:pl-12 2xl:pl-24 4xl:pl-32 5xl:pl-40 pt-20 w-full 2xl:w-4/5">
                        <div ref={el => { introductionRef = el }} className="introduction text-4xl xl:text-5xl font-cat-semibold leading-tight">
                            <div className='introduction-inner h-14 overflow-hidden'>
                                <div className=''>
                                    Hi <span className='wave text-3xl inline-block'>👋</span>
                                </div>
                            </div>
                            <div className='introduction-inner h-14 overflow-hidden'>
                                <div>
                                    I'm Dayo James.
                                </div>
                            </div>
                        </div>
                        <div ref={el => { briefbioRef = el }} className="brief-bio py-5 w-400px 2xl:w-480px leading-7 text-opacity-60 font-cat-light">
                            A savvy software developer with over 2 years experience using front end technologies like Vanilla Js, React Js, and development of enterprise standard RESTFUL APIs using Node Js with frameworks like Express Js.
                        </div>

                        <div ref={el => { appNavigationRef = el }} className="app-navigation pt-10">
                            {/* Resume Link */}
                            <div className="menu-nav resume-nav flex cursor-pointer my-5 text-opacity-60 w-56 items-center">
                                <a href='https://drive.google.com/file/d/1cHARto6KncAIS8ArVOgh5fy3C4vU87-R/view?usp=sharing' target='_blank' rel="noreferrer" className="menu-nav resume-nav flex cursor-pointer my-5 text-opacity-60 w-56 items-center">
                                    <div className="default-line work-line" style={{ height: "1px", width: "54px", backgroundColor: "#1b1b1d", opacity: "0.5" }}></div>
                                    <span className='ml-2'>RESUME</span>
                                </a>
                            </div>
                        </div>


                        {/* Socials Section*/}
                        <div className="socials flex text-opacity-60 pt-14">
                            {/* Github */}
                            <a href="https://github.com/dea1j" ref={el => { githubLinkRef = el }} className="social-github flex items-center mr-2 font-cat-medium cursor-pointer hover:text-opacity-100 hover:transition-all">
                                <img className="relative -top-0.5" src={githubAvatar} alt="github" />
                                <p className="px-1.5">Github</p>
                                <img src={arrowUp} alt="arrow-up" />
                            </a>
                            {/* Linkedin */}
                            <a href='https://www.linkedin.com/in/dayo-james-77ba20111' target="_blank" ref={el => { linkedinLinkRef = el }} className="social-twitter flex items-center mx-2 font-cat-medium cursor-pointer hover:text-opacity-100 hover:transition-all">
                                <img className="social-mail flex items-center mx-2 font-cat-medium cursor-pointer hover:text-opacity-100 hover:transition-all" src={linkedinAvatar} alt="linkedin" />
                                <p className="px-1.5">LinkedIn</p>
                                <img src={arrowUp} alt="arrow-up" />
                            </a>
                            {/* Mail */}
                            <Link to="#" onClick={handleMailLink}
                                ref={el => { mailLinkRef = el }} className="social-mail flex items-center mx-2 font-cat-medium cursor-pointer hover:text-opacity-100 hover:transition-all">
                                <img className="relative -top-0.5" src={mailAvatar} alt="mail" />
                                <p className="px-1.5">Mail</p>
                                <img src={arrowUp} alt="arrow-up" />
                            </Link>

                            {/* Twitter */}
                            <a href='https://twitter.com/dea1j' ref={el => { twitterLinkRef = el }} className="social-twitter flex items-center mx-2 font-cat-medium cursor-pointer hover:text-opacity-100 hover:transition-all">
                                <img className="relative -top-0.5" src={twitterAvatar} alt="twitter" />
                                <p className="px-1.5">Twitter</p>
                                <img src={arrowUp} alt="arrow-up" />
                            </a>
                        </div>
                        <div ref={el => { yearRef = el }} className='mt-12'>
                            2022
                        </div>
                    </div>

                    {/* Right dynamic side  */}
                    <div className="right sub-content col-span-6 text-opacity-90 5xl:pr-28">
                        {page === "Work" ? <Work /> : <Resume handleWorkRouteButton={handleWorkRouteButton} />}
                    </div>
                </div>

                {/* Container for mobile view */}
                <div className="mobile-container lg:hidden">
                    <MobileHome page={page} setPage={setPage} mobilePage={mobilePage} setMobilePage={setMobilePage} handleWorkRouteButton={handleWorkRouteButton} />
                </div>

            </div>
        </div>
    )
}

export default Home
