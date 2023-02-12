import React from 'react';
import './Fotter.scss';
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import Payments from '../../assests/payments.png';
const Fotter = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='col'>
                    <div className='title'>
                        About
                    </div>
                    <div className='text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                    </div>
                </div>
                <div className='col'>
                    <div className='title'>
                        Contact
                    </div>
                    <div className='c-item'>
                        <FaLocationArrow />
                        <div className='text'>
                            Gaondevi, Indira Nagar Vakola Pipe Line, Santacruz (East)
                            Mumbai No.: 400055.
                        </div>
                    </div>
                    <div className='c-item'>
                        <FaMobileAlt />
                        <div className='text'>
                            Phone: e+91-8898670078
                        </div>
                    </div>
                    <div className='c-item'>
                        <FaEnvelope />
                        <div className='text'>
                            Email: asb2041999@gmail.com
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='title'>
                        Categaories
                    </div>
                    <span className='text'>Headphone</span>
                    <span className='text'>Smart Watches</span>
                    <span className='text'> Blutooth Speakers </span>
                    <span className='text'> Home Theater </span>
                    <span className='text'> Projectors </span>
                    <span className='text'>Wireless Earbuds</span>
                </div>

                <div className='col'>
                    <div className='title'>
                        Pages
                    </div>
                    <span className='text'>Home</span>
                    <span className='text'>about</span>
                    <span className='text'> Privacy Policy </span>
                    <span className='text'> Returns </span>
                    <span className='text'> Contact Us </span>
                    <span className='text'>Terms & condit</span>
                </div>
            </div>
            <div className='bottom-bar'>
                    <div className='bottom-bar-content'>
                        <div className='text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                    <img src={Payments} className='payment-img'/>
                    </div>
            </div>
        </div>
    );
}

export default Fotter;
