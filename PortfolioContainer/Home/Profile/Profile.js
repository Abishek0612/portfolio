import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://mail.google.com/mail/u/0/#inbox'>
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href='https://www.instagram.com/mernstackdeveloperabi/'>
                                <i className='fa fa-instagram'></i>
                            </a>

                            <a href='https://twitter.com/home'>
                                <i className='fa fa-twitter'></i>
                            </a>
                            <a href='https://www.linkedin.com/feed/'>
                                <i className='fa fa-linkedin'></i>
                            </a>
                            <a href='https://github.com/'>
                                <i className='fa fa-github'></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {""}
                            Hello I'M <span className='highlighted-text'>Abishek</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {""}
                            <h1>
                                {""}
                                <Typical loop={Infinity}
                                    steps={[
                                        "Enthusiastic Dev 😎",
                                        1000,
                                        "Full stack Developer 💻",
                                        1000,
                                        "Mern stack Dev 📱",
                                        1000,
                                        "Cross Platform Dev 🔴",
                                        1000,
                                        "React/React Native Dev 🌐",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            Hire Me{""}
                        </button>
                        <button>
                            <a href='Resume-2023.pdf' download='Resume Resume-2023.pdf' >
                                <button className='btn highlighted-btn'>Get Resume</button>
                            </a>
                        </button>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}
