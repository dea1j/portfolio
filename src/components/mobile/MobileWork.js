import React from 'react'
import { Link } from "react-router-dom"
import eyeIcon from "../../assets/img/eye-icon.svg";
import githubAvatar from "../../assets/img/github-avatar.svg";
import mailAvatar from "../../assets/img/mail-avatar.svg";
import twitterAvatar from "../../assets/img/twitter-avatar.svg";
import linkedinAvatar from "../../assets/img/linkedin-avatar.svg";

function MobileWork({ handleResumeClick, handleHomeClick, handleMailLink }) {
       const featuredProjects = [
        {
            name: "Obade App",
            tools: `REACT + REACT BOOTSTRAP`,
            description: "airtime vending app with cashback feature",
            githubLink: "https://github.com/dea1j",
            isProjectLive: true,
            projectLink: "https://app.obade.org",
        },
    ]

    const otherProjects = [
        {
            name: "AMPZ Sports",
            tools: `GATSBY JS + BOOTSTRAP`,
            description: "Redesign and develop the company’s web-based application",
            githubLink: "https://github.com/dea1j",
            isProjectLive: true,
            projectLink: "https://www.ampzsports.com/"
        },

        {
            name: "ZLogistics",
            tools: `REACT + GRAPHQL`,
            description: "Zardan Logistics app",
            githubLink: "https://github.com/dea1j",
            isProjectLive: true,
            projectLink: "http://zlogistics-frontend-dev.herokuapp.com/"
        }
    ]

    // Functions

    return (
        <div className='mobile-work'>
            {/* FEATURED */}
            <div className="featured-works pl-8 md:pl-14 ">
                <div className="title text-white text-opacity-40 text-sm font-cat-semibold pb-4">FEATURED</div>
                <div className="projects">
                    {/* Mapping all the projects in the array out */}
                    {featuredProjects.map((project, i) => (
                        <div key={i} className={`project border-button w-11/12 py-6 px-10 mb-8`}>
                            <div className="project-name text-opacity-90 text-2xl xl:text-3xl pb-1.5">
                                {project.name}
                            </div>
                            <div className="project-tools text-white text-opacity-60 text-xs font-cat-medium flex">
                                {project.tools}
                            </div>
                            <div className="project-description pt-6 pb-12 lg:pb-6 text-opacity-40">
                                {project.description}
                            </div>
                            <div className="project-links flex text-xs 2xl:text-sm text-opacity-60 ">
                                {/* Used ancchor tags because of external link, check if solution to v6 external routing exists later */}
                                <a href={project.githubLink} className="github-link flex pr-4">
                                    <img className="relative top-0" src={githubAvatar} alt="github-icon" />
                                    <p className="px-1">Code</p>
                                </a>

                                {/* Used ancchor tags because of external link, check if solution to v6 external routing exists later */}
                                {project.isProjectLive &&
                                    (<a href={project.projectLink} className="live-link flex">
                                        <img className="relative top-0" src={eyeIcon} alt="eye-icon" />
                                        <p className="px-1">Live</p>
                                    </a>)
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* OTHERS */}
            <div className="other-works pl-8 md:pl-14 pb-8 pt-5">
                <div className="title text-white text-opacity-40 text-sm font-cat-semibold pb-4">OTHERS</div>
                <div className="projects">
                    {/* Mapping all the projects in the array out */}
                    {otherProjects.map((project, i) => (
                        <div key={i} className={`project border-button w-11/12 py-6 px-10 mb-8`}>
                            <div className="project-name text-opacity-90 text-2xl xl:text-3xl pb-1.5">
                                {project.name}
                            </div>
                            <div className="project-tools text-opacity-60 text-xs font-cat-medium flex">
                                {project.tools}
                            </div>
                            <div className="project-description pt-6 pb-12 lg:pb-6 text-opacity-40">
                                {project.description}
                            </div>
                            <div className="project-links flex text-xs 2xl:text-sm text-opacity-60 ">
                                <a href={project.githubLink} className="github-link flex pr-4">
                                    <img className="relative top-0" src={githubAvatar} alt="github-icon" />
                                    <p className="px-1">Code</p>
                                </a>

                                {project.isProjectLive &&
                                    (<a href={project.projectLink} className="live-link flex">
                                        <img className="relative top-0" src={eyeIcon} alt="eye-icon" />
                                        <p className="px-1">Live</p>
                                    </a>)
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Nav Buttons */}
            <div className="nav-buttons flex justify-center mb-2 text-sm">
                <div className="nav-btn pr-2 ">
                    <button onClick={handleHomeClick} className='home-btn border-button w-32 md:w-56 px-3 py-2'>
                        Home
                    </button>
                </div>
                <a href='https://docs.google.com/document/d/1_vUGVAEHv_wWVQk00zn0WLBO2zBuPzJA/edit?usp=sharing&ouid=115225426569719419972&rtpof=true&sd=true' target='_blank' className="nav-btn pl-2">
                    <button className='resume-btn border-button w-32 md:w-56 px-3 py-2'>
                        Resume
                    </button>
                </a>
            </div>

            {/* Socials Section */}
            <div className="social-section mt-12 mb-16 flex flex-col items-center">
                {/* social links */}
                <div className="social-links flex px-3 py-2 w-max">
                    {/* Github */}
                    <a href="https://github.com/Dahnie" className="mobile-github-link">
                        <img src={githubAvatar} alt="github" className="h-7" />
                    </a>
                    {/* Mail */}
                    <Link to="#" onClick={handleMailLink} className="mobile-mail-link">
                        <img src={mailAvatar} alt="mail" className="h-7 px-2 mx-6" />
                    </Link>
                    {/* LinkedIn */}
                    {/* TODO get the correct avatar */}
                    <a href="https://https://www.linkedin.com/in/daniel-adeneye-0825b81a1/" className="mobile-linkedin-link">
                        <img src={linkedinAvatar} alt="linkedin" className="h-7 pr-2 mr-6" />
                    </a>
                    {/* Twitter */}
                    {/* TODO Get the correct twitter link */}
                    <a href="https://twitter.com/sage_dann" className="mobile-twitter-link">
                        <img src={twitterAvatar} alt="" className="h-7" />
                    </a>
                </div>
                {/* Inspiration Text */}
                <div className="mobile-inspiration-text mt-3 text-xs text-white text-opacity-60 font-cat-medium">
                    <p>Inspired by <a href='https://twitter.com/kadetXx' className='text-white text-sm text-opacity-100'>Kadet</a></p>
                </div>
            </div>
        </div>
    )
}

export default MobileWork