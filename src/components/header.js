import React from 'react';
import { NavLink } from 'react-router-dom';

const header = () => (
  <header id='parallax__title'>
    <h1>GSAP Parallax Effect01</h1>
    <p>GSAP scrollTrigger - 애니메이션 기본 효과</p>
    <ul>
      <li><NavLink to='/gsap01'>1</NavLink></li>
      <li><NavLink to='/gsap02'>2</NavLink></li>
      <li><NavLink to='/gsap03'>3</NavLink></li>
      <li><NavLink to='/gsap04'>4</NavLink></li>
      <li><NavLink to='/gsap05'>5</NavLink></li>
      <li><NavLink to='/gsap06'>6</NavLink></li>
      <li><NavLink to='/gsap07'>7</NavLink></li>
      <li><NavLink to='/gsap08'>8</NavLink></li>
      <li><NavLink to='/gsap09'>9</NavLink></li>
      <li><NavLink to='/gsap10'>10</NavLink></li>
      <li><NavLink to='/gsap11'>11</NavLink></li>
      <li><NavLink to='/gsap12'>12</NavLink></li>
      <li><NavLink to='/gsap13'>13</NavLink></li>
      <li><NavLink to='/gsap14'>14</NavLink></li>
      <li><NavLink to='/gsap15'>15</NavLink></li>
    </ul>
    </header>
);

export default header;