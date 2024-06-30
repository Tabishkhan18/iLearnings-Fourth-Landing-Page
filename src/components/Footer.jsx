import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" className="bg-black text-white py-8 md:px-56 md:py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <a href="#" className="text-white text-2xl font-bold">iLearnings</a>
                </div>
                <div className="flex space-x-8">
                    <div>
                        <h3 className="font-semibold mb-2">Discover</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Courses</a></li>
                            <li><a href="#" className="hover:underline">Programs</a></li>
                            <li><a href="#" className="hover:underline">Blogs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Connect</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                            <li><a href="#" className="hover:underline">FAQ</a></li>
                            <li><a href="#" className="hover:underline">Testimonial</a></li>
                            <li><a href="#" className="hover:underline">Webinar</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Resources</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">Terms of Services</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
