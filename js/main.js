import React from 'react';
import ReactDOM from 'react-dom';
import App from '../LittleLemon/build'; // Adjust the path as per your project structure

ReactDOM.render(<App />, document.getElementById('root'));

const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav__links');
	const hero = document.querySelector('.hero');

	// Toggle Nav
	burger.addEventListener('click', () => {
		hero.classList.toggle('hidden');
		nav.classList.toggle('nav-active');
	});
};

navSlide();
