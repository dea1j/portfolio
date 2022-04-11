import React, { useEffect, useRef } from 'react';
import Masonry from 'react-masonry-css'
import { gsap } from 'gsap';
import CSSRulePlugin from "gsap/CSSRulePlugin"
import ScrollTrigger from "gsap/ScrollTrigger";
import "../assets/styles/css/Work.css";
import eyeIcon from "../assets/img/eye-icon.svg";
import githubAvatar from "../assets/img/github-avatar.svg";

function Work() {
    const featuredProjects = [
        {
            name: "Obade App",
            tools: `REACT + REACT BOOTSTRAP`,
            description: "An airtime vending app with cashback feature",
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

    gsap.registerPlugin(CSSRulePlugin);
    let featuredTitleRef = useRef(null)
    let featuredProjectsRef = useRef(null)
    let otherWorksRef = useRef(null)
    let workSectionRef = useRef(null)

    // Gsap animations
    const tl = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        tl
            .to(workSectionRef, { css: { visibility: "visible" }, delay: 0.6 })
            .from(featuredTitleRef, { duration: 0.7, opacity: 0, y: -30 })
            .from([featuredProjectsRef.firstChild, featuredProjectsRef.lastChild], {
                duration: 0.5, x: 200, y: -200, z: -50, rotation: 0, opacity: 0, autoAlpha: 0, ease: "power3.easeInOut",
            }, "<.3")
            .from(otherWorksRef, { duration: 1, opacity: 0, y: 100 })


        // FEAUTURED
        const projects = document.querySelectorAll(".project");
        projects.forEach((project) => {
            project.addEventListener("mouseover", (e) => {
                e.stopPropagation();
                if (project.nextElementSibling) {
                    project.nextElementSibling.style.opacity = ".45"
                    project.style.transform = "scale(1.08)"
                }
                if (project.previousElementSibling) {
                    project.previousElementSibling.style.opacity = ".45"
                    project.style.transform = "scale(1.08)"
                }
            })
            project.addEventListener("mouseout", (e) => {
                e.stopPropagation();
                if (project.nextElementSibling) {
                    project.nextElementSibling.style.opacity = "1"
                    project.style.transform = "scale(1)"
                }
                if (project.previousElementSibling) {
                    project.previousElementSibling.style.opacity = "1"
                    project.style.transform = "scale(1)"
                }
            })


        })

        // OTHERS

        // NOTE: The mansonry grid renders the elements as two separate columns and the below script is to get all the children nodes into one array(otherProjects) 
        const masonryGridCol = document.querySelectorAll(".my-masonry-grid_column")
        let otherProjects = [];
        let gridColumn = [];
        masonryGridCol.forEach((column, i) => {
            gridColumn.push(column)
        })
        // GridColumn consists of the two mansonry columns whicch is an object with a method of chilNodes that contains the children of that node
        for (let i = 0; i < gridColumn.length; i++) {
            for (let j = 0; j < gridColumn[i].childNodes.length; j++) {
                otherProjects.push(gridColumn[i].childNodes[j])
            }
        }

        // Handling the hover effect on all the elements (change of color)
        otherProjects.forEach((project, i) => {
            // On hover, change all elements opacity to .55 while leaving the hovered elements opacity on 1
            project.addEventListener("mouseover", (e) => {
                otherProjects.forEach((project) => {
                    project.style.opacity = ".45"
                })
                // Changing the prsent element back to default
                project.style.opacity = "1"
                // project.style.transform = "scale(1.1)"
            })
            // On mouseout, change all elements' opacity to 1
            project.addEventListener("mouseout", (e) => {
                otherProjects.forEach((project) => {
                    project.style.opacity = "1"
                })
                // Changing the present element back to default
                project.style.opacity = "1"
                // project.style.transform = "scale(1)"
            })
        })


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div ref={el => (workSectionRef = el)} id="work-section" className='work overflow-auto h-screen pt-20 w-full'>
            {/* Featured */}
            <div className="featured-works pl-10">
                <div ref={el => { featuredTitleRef = el }} className="title text-opacity-40 text-sm font-cat-semibold pb-4">FEATURED PROJECTS</div>
                <div ref={el => { featuredProjectsRef = el }} className="projects">
                    {/* Mapping all the projects in the array out */}
                    {featuredProjects.map((project, i) => (
                        <div key={i} className={`border-button w-11/12 py-6 px-10 mb-2.5 cursor-pointer`}>
                            <div className="project-name text-opacity-90 text-2xl xl:text-3xl pb-1.5">
                                {project.name}
                            </div>
                            <div className="project-tools text-opacity-60 text-xs font-cat-medium flex">
                                {project.tools}
                            </div>
                            <div className="project-description py-6 text-opacity-40">
                                {project.description}
                            </div>
                            <div className="project-links flex lg:text-xs 2xl:text-sm text-opacity-60 ">
                                <a href={project.githubLink} target="_blank" className="github-link flex pr-4">
                                    <img className="relative -top-0.5" src={githubAvatar} alt="github-icon" />
                                    <p className="px-1">Code</p>
                                </a>
                                {project.isProjectLive &&
                                    (<a href={project.projectLink} target="_blank" rel="noreferrer" className="live-link flex">
                                        <img className="relative -top-0.5" src={eyeIcon} alt="eye-icon" />
                                        <p className="px-1">View project</p>
                                    </a>)
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Other works */}
            <div ref={el => { otherWorksRef = el }} className="other-works my-14 px-14 xl:px-12 4xl:pr-24 5xl:pr-28">
                <div className="title text-opacity-40 text-sm font-cat-semibold pb-5">OTHERS</div>
                <div className="projects-masonry ">
                    {/* Used react-masonry to create the unbalanced effect on the grid */}
                    <Masonry
                        breakpointCols={2}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {otherProjects.map((project, i) => (
                            <div key={i} alt={i} className={`border-button  py-10 lg:px-5 xl:px-8 cursor-pointer`}>
                                <div className="project-name text-opacity-90 text-2xl xl:text-3xl pb-3">
                                    {project.name}
                                </div>
                                <div className="project-tools text-opacity-60 text-xs font-cat-medium flex">
                                    {project.tools}
                                </div>
                                <div className="project-description lg:text-sm xl:text-base py-6 text-opacity-40">
                                    {project.description}
                                </div>
                                <div className="project-links flex lg:text-xs 2xl:text-sm text-opacity-60 pt-12 pb-2">
                                    {/* Github */}
                                    <a href={project.githubLink} target="_blank" className="github-link flex items-center pr-2.5 xl:pr-4">
                                        <img className="relative lg:h-4 xl:h-max xl:-top-0.5" src={githubAvatar} alt="github-icon" />
                                        <p className="px-1">Code</p>
                                    </a>
                                    {/* Live */}
                                    {project.isProjectLive &&
                                        (<a href={project.projectLink} target="_blank" rel="noreferrer" className="live-link flex items-center">
                                            <img className="relative lg:h-4 xl:h-max xl:-top-0.5" src={eyeIcon} alt="eye-icon" />
                                            <p className="px-1">View project</p>
                                        </a>)
                                    }
                                </div>
                            </div>
                        ))}
                    </Masonry>
                </div>
            </div >
        </div >
    )
}
export default Work;