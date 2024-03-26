import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import FeatureCard from '../components/feature-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Landify - Tutorial</title>
        <meta property="og:title" content="Landify - Tutorial" />
      </Helmet>
      <header className="home-header">
        <div className="home-menu">
          <span className="home-text">About</span>
          <a href="#features" className="home-link">
            <AppComponent className="home-component"></AppComponent>
          </a>
          <a href="#pricing" className="home-link1">
            Pricing
          </a>
        </div>
        <img alt="image" src="/logotype-dark.svg" className="home-image" />
        <div className="home-container1">
          <div className="home-container2">
            <Link to="/login" className="home-navlink Button button">
              Sign Up
            </Link>
            <Link to="/login" className="home-navlink1 Button button">
              Log In 
            </Link>
          </div>
        </div>
        <svg viewBox="0 0 1024 1024" className="home-menu1">
          <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
        </svg>
      </header>
      <div className="home-hero">
        <div className="home-container3">
          <h1 className="home-text01 Headline1">
            Supercharge your Google setup with AI.
          </h1>
          <span className="home-text02">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et elit quis augue volutpat fringilla at nec quam.
          </span>
          <Link to="/login" className="home-navlink2 button Button">
            Get Started
          </Link>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1000"
          className="home-image1"
        />
        <img
          alt="image"
          src="/turquoise%20circle-1300w.png"
          className="home-turquoise-cirble"
        />
        <img
          alt="image"
          src="/orange%20circle-1300w.png"
          className="home-orange-circle"
        />
        <img
          alt="image"
          src="/purple%20circle1-700h.png"
          loading="eager"
          className="home-purple-circle"
        />
      </div>
      <div id="features" className="home-features">
        <h2 className="home-text03 Headline2">Raggy Features</h2>
        <div className="home-features1">
          <FeatureCard title="Robust workflow" imageSrc="/01.svg"></FeatureCard>
          <FeatureCard title="Flexibility" imageSrc="/02.svg"></FeatureCard>
          <FeatureCard
            title="Better compoents"
            imageSrc="/03.svg"
          ></FeatureCard>
          <FeatureCard title="Well organized" imageSrc="/04.svg"></FeatureCard>
        </div>
      </div>
      <h2 className="home-text04 Headline2">Pricing</h2>
      <div className="home-container4">
        <div className="home-container5">
          <div id="pricing" className="home-container6">
            <span className="home-text05">Basic</span>
            <span className="home-text06">
              <span>$9</span>
              <span className="home-text08">/month</span>
            </span>
            <span className="home-text09">
              <span className="home-text10">10</span>
              <span> Projects</span>
            </span>
            <span className="home-text12">
              <span className="home-text13">99</span>
              <span> Components</span>
            </span>
            <span className="home-text15">
              <span className="home-text16">3</span>
              <span> Collaborators</span>
            </span>
            <span className="home-text18">
              <span className="home-text19">Public projects</span>
            </span>
            <button className="home-button button">Learn More</button>
          </div>
          <div className="home-container7">
            <span className="home-text20">Free</span>
            <span className="home-text21">
              <span>$29</span>
              <span className="home-text23">/month</span>
            </span>
            <span className="home-text24">
              <span className="home-text25">100</span>
              <span> Projects</span>
            </span>
            <span className="home-text27">
              <span className="home-text28">1000</span>
              <span> Components</span>
            </span>
            <span className="home-text30">
              <span className="home-text31">20</span>
              <span> Collaborators</span>
            </span>
            <span className="home-text33">
              <span className="home-text34">Private projects</span>
            </span>
            <button className="home-button1 button">Learn More</button>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <img
          alt="logo"
          src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
          className="home-image2"
        />
        <span className="home-text35">
          © 2021 teleportHQ, All Rights Reserved.
        </span>
        <div className="home-icon-group">
          <svg viewBox="0 0 950.8571428571428 1024" className="home-icon3">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
          <svg viewBox="0 0 877.7142857142857 1024" className="home-icon5">
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
          <svg viewBox="0 0 602.2582857142856 1024" className="home-icon7">
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
        </div>
      </footer>
    </div>
  )
}

export default Home
