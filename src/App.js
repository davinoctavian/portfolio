import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route, Link, useLocation } from "react-router-dom"
import { changeMenu, increment } from './reducers/globalSlice'

import "./App.css"

import Profile from "./components/Profile"
import About from "./components/About"
import Project from "./components/Project"
import Cv from "./components/Cv"
import NotFound from "./components/NotFound"
import useCheckMobileScreen from "./components/ScreenDetect"

const App = () => {
  const menuName = useSelector((state) => state.global.menuName)
  const dispatch = useDispatch()
  const isMobile = useCheckMobileScreen()

  let location = useLocation()

  useEffect(() => {
    dispatch(changeMenu(location.pathname))
    dispatch(increment())
  }, [location, dispatch])

  return (
    <>
    {!isMobile && 
      <div className="container">
        <div className="navbar-left">
          <div className="nav-item">
            <Link to={"/profile"} className="nav-link">
                Profile <span className={menuName === "/" || menuName === "/profile" ? "active": "not-active"}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.24 12.24C21.3658 11.1141 21.9983 9.58716 21.9983 7.99497C21.9983 6.40279 21.3658 4.87582 20.24 3.74997C19.1142 2.62413 17.5872 1.99164 15.995 1.99164C14.4028 1.99164 12.8758 2.62413 11.75 3.74997L5 10.5V19H13.5L20.24 12.24Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 8L2 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 15H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
            </Link>
          </div>
          <div className="nav-item">
            <Link to={"/about"} className="nav-link">
                About <span className={menuName === "/about" ? "active": "not-active"}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.24 12.24C21.3658 11.1141 21.9983 9.58716 21.9983 7.99497C21.9983 6.40279 21.3658 4.87582 20.24 3.74997C19.1142 2.62413 17.5872 1.99164 15.995 1.99164C14.4028 1.99164 12.8758 2.62413 11.75 3.74997L5 10.5V19H13.5L20.24 12.24Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 8L2 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 15H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
            </Link>
          </div>
        </div>
        <div className="content-container glowing-border">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <div className="navbar-right">
          <div className="nav-item">
            <Link to={"/project"} className="nav-link">
                <span className={menuName === "/project" ? "active": "not-active"}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{transform: "rotate(-90deg)"}} xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.24 12.24C21.3658 11.1141 21.9983 9.58716 21.9983 7.99497C21.9983 6.40279 21.3658 4.87582 20.24 3.74997C19.1142 2.62413 17.5872 1.99164 15.995 1.99164C14.4028 1.99164 12.8758 2.62413 11.75 3.74997L5 10.5V19H13.5L20.24 12.24Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 8L2 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 15H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span> Project
            </Link>
          </div>
          <div className="nav-item">
            <Link to={"/cv"} className="nav-link">
                <span className={menuName === "/cv" ? "active": "not-active"}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{transform: "rotate(-90deg)"}} xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.24 12.24C21.3658 11.1141 21.9983 9.58716 21.9983 7.99497C21.9983 6.40279 21.3658 4.87582 20.24 3.74997C19.1142 2.62413 17.5872 1.99164 15.995 1.99164C14.4028 1.99164 12.8758 2.62413 11.75 3.74997L5 10.5V19H13.5L20.24 12.24Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 8L2 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 15H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span> CV
            </Link>
          </div>
        </div>
      </div>
    }
    {isMobile && 
      <div className="container-mobile">
        <div className="content-container-mobile">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <div className="navbar-mobile">
          <div className="nav-item-mobile">
            <span className={menuName === "/" || menuName === "/profile" ? "hex-left": "not-active"}></span>
            <Link to={"/profile"} className="nav-link-mobile">
                Profile
            </Link>
            <span className={menuName === "/" || menuName === "/profile" ? "hex-right": "not-active"}></span>
          </div>
          <div className="nav-item-mobile">
            <span className={menuName === "/about" ? "hex-left": "not-active"}></span>
            <Link to={"/about"} className="nav-link-mobile">
                About
            </Link>
            <span className={menuName === "/about" ? "hex-right": "not-active"}></span>
          </div>
          <div className="nav-item-mobile">
            <span className={menuName === "/project" ? "hex-left": "not-active"}></span>
            <Link to={"/project"} className="nav-link-mobile">
              Project
            </Link>
            <span className={menuName === "/project" ? "hex-right": "not-active"}></span>
          </div>
          <div className="nav-item-mobile">
            <span className={menuName === "/cv" ? "hex-left": "not-active"}></span>
            <Link to={"/cv"} className="nav-link-mobile">
              CV
            </Link>
            <span className={menuName === "/cv" ? "hex-right": "not-active"}></span>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default App
