import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import { Container, Content } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Your online study platform.</h2>
        </div>

        <img src={landingImg} alt="Study platform" className="hero-image" />

        <div className="buttons-container">
          <a href="" className="study">
            <img src={studyIcon} alt="To study" />
            To study
          </a>

          <a href="" className="give-classes">
            <img src={giveClassesIcon} alt="To give classes" />
            To give classes
          </a>
        </div>

        <span className="total-connections">
          Total of 200 connections already made
          <img src={purpleHeartIcon} alt="Purple Heart" />
        </span>
      </Content>
    </Container>
  );
};

export default Landing;
