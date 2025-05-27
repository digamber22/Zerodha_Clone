import React from 'react';
import {render , screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for some delay to check
import Hero from "../landing_page/home/Hero";

// Test Suite 
describe("Hero Component", () =>{
test("renders hero images", ()=> {
 render(<Hero />);
 const heroImage = screen.getByAltText("Hero Image");  // checking attribute
 expect(heroImage).toBeInTheDocument();               // presence in document;
 expect(heroImage).toHaveAttribute("src" , "media/images/homeHero.png"); //check of attribute
});

test("renders signup button", ()=> {
    render(<Hero />);
    const signupButton = screen.getByRole("button",{name:"Signup Now"});  // checking attribute
    expect(signupButton).toBeInTheDocument();               // presence in document;
    expect(signupButton).toHaveClass("btn-primary"); //check of attribute
   });

});