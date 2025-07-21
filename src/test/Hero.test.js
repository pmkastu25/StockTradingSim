//JEST UNit TESTING (Automated)

import React from 'react'

import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from "../landing_page/home/Hero"

//Test Suite

describe('Hero Component', ()=>{
    test('renders hero image', ()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText('Hero IMAGE')
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/homeHero.png");

    })

    test('renders signup button', ()=>{
        render(<Hero/>);
        const signupbtn = screen.getByRole('button', {name:'Sign up for free'})
        expect(signupbtn).toBeInTheDocument();
        expect(signupbtn).toHaveClass("btn-primary");
    })
})

//write npm test on terminal to run tests