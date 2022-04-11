import React, { useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom"
import { gsap } from "gsap"
import githubAvatar from "../../assets/img/github-avatar.svg";
import mailAvatar from "../../assets/img/mail-avatar.svg";
import twitterAvatar from "../../assets/img/twitter-avatar.svg";
import linkedinAvatar from "../../assets/img/linkedin-avatar.svg";
import navLine from "../../assets/img/nav-line.svg";
import navBurger from "../../assets/img/nav-burger.svg";
import rightArrow from "../../assets/img/right-arrow.svg"
import MobileWork from './MobileWork';
import MobileResume from './MobileResume';


function MobileHome({ page, setPage, mobilePage, setMobilePage, handleWorkRouteButton }) {

    const tl = gsap.timeline();
    const navigate = useNavigate()
    const location = useLocation();
    const mobileNavRef = useRef(null);
    const mobileMainRef = useRef(null);





    // Functions
    // Handle mail link actions
    const handleMailLink = function (e) {
        e.preventDefault()
        window.location.replace("mailto:jdayo2012@gmail.com")
    }


    // Click functions on burger menu

    // Click of home link
    const handleHomeClick = function () {
        setMobilePage("Home");
        setPage("Work")
        navigate("/");
        // remove nav section
        mobileNavRef.current.classList.add("hidden")
        mobileMainRef.current.classList.remove("hidden")

    }

    // Click of Work link
    const handleWorkClick = function () {
        setMobilePage("Work");
        setPage("Work")
        navigate("/work");
        // remove nav section
        mobileNavRef.current.classList.add("hidden")
        mobileMainRef.current.classList.remove("hidden")

    }

    const handleResumeClick = function () {
        setMobilePage("Resume");
        setPage("Resume")
        navigate("/resume");
        // remove nav section
        mobileNavRef.current.classList.add("hidden")
        mobileMainRef.current.classList.remove("hidden")
    }

    const handleExploreClick = function () {
        setMobilePage("Work")
        setPage("Work")
        navigate("/work")
    }


    useEffect(() => {
        // Burger animation
        gsap.to(".mobile-nav-content", { duration: 0, y: -60, opacity: 0 })

        //  Handle close button animation when navbar is left or closed
        gsap.to(".nav-close-up", { duration: 0, rotate: "0", opacity: 0 })
        gsap.to(".nav-close-down", { duration: 0, rotate: "0", opacity: 0 })
    }, [location])

    useEffect(() => {

        const navOpen = document.querySelector(".nav-open")
        const navClose = document.querySelector(".nav-close")
        const navCloseUpLine = document.querySelector(".nav-close-up")
        const navCloseDownLine = document.querySelector(".nav-close-down")
        const navbarSection = document.querySelector(".mobile-nav")
        const mobileMainContent = document.querySelector(".mobile-main-content")

        // Handles mobile bio text animation
        if (location.pathname === "/") {
            setInterval(() => {
                tl
                    .to([".mobile-bio-text-1", ".mobile-bio-text-2", ".mobile-bio-text-3", ".mobile-bio-text-4", ".mobile-bio-text-5"], { duration: 2, css: { color: "rgba(255, 255, 255, 1)" }, ease: "power3.easeInOut", stagger: 0, delay: 2 },)
                    .to([".mobile-bio-text-1", ".mobile-bio-text-2", ".mobile-bio-text-3", ".mobile-bio-text-4", ".mobile-bio-text-5"], { duration: 2, css: { color: "rgba(255, 255, 255, .6)" }, autoAlpha: 0, ease: "power3.easeInOut", stagger: 0 },)

            }, 6000)
        }


        // On Nav Open
        navOpen.addEventListener("click", (e) => {
            e.stopPropagation();
            // Handles burger toggle
            // Open nav content
            navbarSection.classList.remove("hidden");
            mobileMainContent.classList.add("hidden");
            // Burger animation
            gsap.to(".mobile-nav-content", { duration: 0.5, y: 5, opacity: 1, ease: "power3.easeOut" })

            //  Handle close button animation
            gsap.to(navCloseUpLine, { duration: 0.4, rotate: "45", opacity: 1 })
            gsap.to(navCloseDownLine, { duration: 0.4, rotate: "-45", opacity: 1 })

        })

        // On Nav Close
        navClose.addEventListener("click", (e) => {
            e.stopPropagation();
            // Handles burger toggle
            // Close nav  content
            navbarSection.classList.add("hidden")
            mobileMainContent.classList.remove("hidden");
            // Burger animation
            gsap.to(".mobile-nav-content", { duration: 0, y: -60, opacity: 0 })

            //  Handle close button animation when navbar is left or closed
            gsap.to(navCloseUpLine, { duration: 0, rotate: "0", opacity: 0 })
            gsap.to(navCloseDownLine, { duration: 0, rotate: "0", opacity: 0 })
        })

    })
    return (
        <div className='mobile'>
            {/* Navigation */}
            <div ref={mobileNavRef} className="mobile-nav hidden h-screen relative overflow-hidden">
                {/* Close */}
                <div className="nav-option flex"  style={{backgroundColor: 'black'}}>
                    <div className="nickname flex justify-end py-5 px-4 md:px-10 text-3xl text-opacity-90 font-cat-medium">
                        <p>dayo</p>
                    </div>

                    <div className="nav-option-inner w-full flex justify-end py-5 px-3 md:px-10">
                        <div className="nav-close">
                            <img className='nav-close-up mb-3 px-3 opacity-0' src={navLine} alt="cancel" style={{ transformOrigin: "left" }} />
                            <img className='nav-close-down my-7 absolute px-3 opacity-0' src={navLine} alt="cancel" style={{ transformOrigin: "left" }} />
                        </div>

                    </div>
                </div>

                <div className="mobile-nav-content opacity-0">
                    {/* Nav Links */}
                    <nav className="nav-content-inner flex flex-col items-center">
                        {/* Nav home */}
                        <div onClick={handleHomeClick} className='nav-home w-max px-10 py-3 text-2xl text-opacity-60'>
                            <p>
                                Home
                            </p>
                        </div>

                        {/* Nav work */}
                        <div onClick={handleWorkClick} className='nav-work w-max my-3 px-10 py-3 text-2xl text-opacity-60'>
                            <p>
                                Work
                            </p>
                        </div>

                        {/* Nav resume */}
                        <div className='nav-resume w-max mb-3 px-10 py-3 text-2xl text-opacity-60'>
                            <a href='https://docs.google.com/document/d/1_vUGVAEHv_wWVQk00zn0WLBO2zBuPzJA/edit?usp=sharing&ouid=115225426569719419972&rtpof=true&sd=true' target='_blank' rel="noreferrer" className='nav-resume w-max mb-3 px-10 py-3 text-2xl text-opacity-60'>
                                Resume
                            </a>
                        </div>
                    </nav>

                    {/* Social connections */}
                    <div className="social-connections flex flex-col items-center pt-6">
                        <div className="title w-max text-opacity-90 px-3 py-1 text-2xl font-cat-medium">
                            <p>
                                Connect with me
                            </p>
                        </div>

                        {/* social links */}
                        <div className="social-links flex px-3 py-2 w-max">
                            {/* Github */}
                            {/* Used anchor tags because of external link, check if solution to v6 external routing exists later */}
                            <a href="https://github.com/dea1j" target="_blank" className="mobile-github-link">
                                <img src={githubAvatar} alt="github" className="h-7" />
                            </a>

                            {/* Mail */}
                            <Link to="#" onClick={handleMailLink} className="mobile-mail-link">
                                <img src={mailAvatar} alt="mail" className="h-7 px-2 mx-2.5" />
                            </Link>

                            {/* LinkedIn */}
                            {/* Used anchor tags because of external link, check if solution to v6 external routing exists later */}
                            <a href="https://www.linkedin.com/in/dayo-james-77ba20111" target="_blank" className="mobile-linkedin-link">
                                <img src={linkedinAvatar} alt="linkedin" className="h-7 pr-2 mr-2.5" />
                            </a>

                            {/* Twitter */}
                            {/* Used anchor tags because of external link, check if solution to v6 external routing exists later */}
                            <a href="https://twitter.com/dea1j" className="mobile-twitter-link">
                                <img src={twitterAvatar} alt="" className="h-7" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div ref={mobileMainRef} className={`mobile-main-content h-screen ${mobilePage === "Home" ? "overflow-hidden" : "overflow-auto"}`}>
                {/* Open */}
                <div className="nav-option flex" style={{backgroundColor: 'black'}}>
                    <div className="nickname flex justify-end py-5 px-4 md:px-10 text-3xl text-opacity-90 font-cat-medium">
                        <p></p>
                    </div>

                    <div className="nav-option-inner w-full flex justify-end py-5 px-3 md:px-10">
                        <img className='nav-open py-3 px-3' src={navBurger} alt="open" />
                    </div>
                </div>

                {/* Dynamic part of page dependding on route */}
                <div className="mobile-main-content-inner">
                    {
                        // If pathname === "/", fully home and not "work-home"(like on web), set to Home
                        mobilePage === "Home" ?
                            (
                                <div className="mobile-home mt-10">
                                    {/* Mobile Home */}
                                    <div className="mobile-home-inner">
                                        <div className="mobile-bio  flex flex-col items-center">
                                        <div className='introduction-inner text-6xl h-14 overflow-hidden'>
                                            Hi <span className='wave text-4xl inline-block'>👋</span>
                                        </div>
                                            <div className="mobile-name h-max overflow-hidden text-2xl md:text-3xl font-cat-medium flex justify-center mt-7">
                                                <p>
                                                I'm Dayo James.
                                                </p>
                                            </div>
                                            <div className="mobile-description h-max overflow-hidden w-3/4 md:w-4/6 mt-2 ">
                                                <p className='text-center text-opacity-60 text-sm'>
                                                    A savvy software developer with over 2 years experience using front end technologies like Vanilla Js, React Js, and development of enterprise standard RESTFUL APIs using Node Js with frameworks like Express Js.
                                                </p>
                                            </div>
                                        </div>
                                        {/* Explore btn */}
                                        <div className="explore-btn flex justify-center mt-5">
                                            <button onClick={handleExploreClick} className='flex items-center border-button px-7 py-4 font-cat-medium'>Explore My Works<span><img src={rightArrow} className='h-3.5 md:h-4 relative' alt="right arrow" /></span></button>
                                        </div>

                                        {/* footer */}
                                        <div className="footer w-full absolute bottom-4 flex justify-center">
                                            <div className="footer-inner w-max flex flex-col items-center">
                                                {/* social links */}
                                                <div className="social-links flex px-3 py-2 w-max">
                                                    {/* Github */}
                                                    <a href="https://github.com/dea1j" target="_blank" className="mobile-github-link">
                                                        <img src={githubAvatar} alt="github" className="h-7" />
                                                    </a>
                                                    {/* Mail */}
                                                    <Link to="#" onClick={handleMailLink} className="mobile-mail-link">
                                                        <img src={mailAvatar} alt="mail" className="h-7 px-2 mx-6" />
                                                    </Link>
                                                    {/* LinkedIn */}
                                                    {/* TODO get the correct avatar */}
                                                    <a href="https://www.linkedin.com/in/dayo-james-77ba20111" target="_blank" className="mobile-linkedin-link">
                                                        <img src={linkedinAvatar} alt="linkedin" className="h-7 pr-2 mr-6" />
                                                    </a>
                                                    {/* Twitter */}
                                                    {/* TODO Get the correct twitter link */}
                                                    <a href="https://twitter.com/dea1j" target="_blank" className="mobile-twitter-link">
                                                        <img src={twitterAvatar} alt="" className="h-7" />
                                                    </a>
                                                </div>
                                                {/* Inspiration Text */}
                                                <div className="mobile-inspiration-text mt-2 text-sm text-opacity-60 font-cat-medium">
                                                    <p>2022</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            // Else if page === Work, set to work
                            : mobilePage === "Work" ?
                                <MobileWork handleResumeClick={handleResumeClick} handleHomeClick={handleHomeClick} handleMailLink={handleMailLink} />
                                // Else page === Resume, set to resume
                                :
                                <MobileResume handleWorkClick={handleWorkClick} handleHomeClick={handleHomeClick} handleMailLink={handleMailLink} handleWorkRouteButton={handleWorkRouteButton} />

                    }
                </div>
            </div>
        </div>

    )
}

export default MobileHome