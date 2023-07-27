import React from 'react'
import "./Footer.css"
import {FaFacebook, FaLinkedin, FaInstagram, FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
    
    <div className='footer'>
        
        <div className='sb_footer_section_padding'>
            <div className='sb_footer-links'>
                <div className='sb_footer-links_div'>
                    <h4>About GoDaddy</h4>
                    <a href='/employee'>
                        <p>About Us</p>
                    </a>
                    <a href='/healthplan'>
                        <p>Contact Us</p>
                    </a>
                    <a href='/individual'>
                        <p>NewsRoom</p>
                    </a>
                    <a href='/individual'>
                        <p>Trust Centre</p>
                    </a>
                    <a href='/individual'>
                        <p>Investor Relation</p>
                    </a>
                    <a href='/individual'>
                        <p>Annual Returns</p>
                    </a>
                    <a href='/individual'>
                        <p>Corporate Social </p>
                    </a>
                    <a href='/individual'>
                        <p>Careers</p>
                    </a>
                    <a href='/individual'>
                        <p>Legal</p>
                    </a>
                    <a href='/individual'>
                        <p>GoDaddy Blog</p>
                    </a>
                </div>

                <div className='sb_footer-links_div'>
                    <h4>Support</h4>
                    <a href='/resources'>
                        <p>Product Support</p>
                    </a>
                    <a href='/community'>
                        <p>Community</p>
                    </a>
                    <a href='/abuse'>
                        <p>Report Abuse</p>
                    </a>
                    <a href='/resources'>
                        <p>Resources</p>
                    </a>
                </div>

                <div className='sb_footer-links_div'>
                    <h4>Resources</h4>
                    <a href='/mail'>
                        <p>Webemail</p>
                    </a>
                    <a href='/who'>
                        <p>Whois</p>
                    </a>
                    <a href='/ICANN'>
                        <p>ICANN Confirmation</p>
                    </a>
                    <a href='/developer'>
                        <p>designers & Developer</p>
                    </a>
                    <a href='/code'>
                        <p>Redeem Code</p>
                    </a>
                    <a href='/product'>
                        <p>Product Catlog</p>
                    </a>
                    <a href='/customer'>
                        <p>Customer Testimonial</p>
                    </a>
                    <a href='/Business'>
                        <p>Business Name</p>
                    </a>
                </div>
                
                <div className='sb_footer-links_div'>
                    <h4>Partner Programs</h4>
                    <a href='/affilates'>
                        <p>Affilates</p>
                    </a>
                    <a href='/program'>
                        <p>Reseller Programs</p>
                    </a>
                    <a href='/pro'>
                        <p>GoDaddy Pro</p>
                    </a>
                </div>

                <div className='sb_footer-links_div'>
                    <h4>Account</h4>
                    <a href='/products'>
                        <p>My Products</p>
                    </a>
                    <a href='/billing'>
                        <p>Renewals & Billing</p>
                    </a>
                    <a href='/create'>
                        <p>Create Account</p>
                    </a>
                </div>

                <div className='sb_footer-links_div'>
                    <h4>Shopping</h4>
                    <a href='/buy'>
                        <p>Buy a Domain</p>
                    </a>
                    <a href='/web'>
                        <p>Websites</p>
                    </a>
                    <a href='/Word'>
                        <p>WordPress</p>
                    </a>
                    <a href='/host'>
                        <p>Hosting</p>
                    </a>
                    <a href='/secure'>
                        <p>Web Security</p>
                    </a>
                    <a href='/email'>
                        <p>Email & Office</p>
                    </a>
                </div>

                <div className='sb_footer-links_div'>
                    <h4>Coming soon</h4>
                    <div className='socialmedia'>
                        <p><FaFacebook></FaFacebook></p>
                        <p><FaTwitter></FaTwitter></p>
                        <p><FaInstagram></FaInstagram></p>
                        <p><FaLinkedin></FaLinkedin></p>
                    </div>
                </div>
            </div>

            <div className='e3'>
            <img src='https://www.logo.wine/a/logo/GoDaddy/GoDaddy-White-Dark-Background-Logo.wine.svg' height='50px' width='190px' />
            <span> India-English</span>
            
            <span> INR</span>
            
            

            </div>

            <hr></hr>

            <div className='sb_footer-below'>
                <div className='sb_footer-copyright'>
                    <p>
                    Copyright © 1999 - 2023 GoDaddy Operating Company, LLC. All Rights Reserved. The GoDaddy word mark is a registered trademark of GoDaddy Operating Company, LLC in the US and other countries. The “GO” logo is a registered trademark of GoDaddy.com, LLC in the US.
                    </p>
                    <p>Use of this Site is subject to express terms of use. By using this site, you signify that you agree to be bound by these Universal Terms of Service.</p>
                    
                </div>
                <div className='sb_footer-below-links'>
                    <a href='/terms'><div><p>Terms & conditions</p></div></a>
                    <a href='/privacy'><div><p>Privacy</p></div></a>
                    <a href='/security'><div><p>Security</p></div></a>
                    <a href='/cookie'><div><p>Cookie Declaration</p></div></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
