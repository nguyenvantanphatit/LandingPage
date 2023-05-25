import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
// import Profile_1 from '../../img/123.svg';
import facebook from '../../img/facebook.jpg';
import ins from '../../img/ins.jpg';
import git from '../../img/git.png';
import gmail from '../../img/gmail.jpg';
import './About.css';
import { ArrowRightOutlined } from '@ant-design/icons';

const About: React.FC = () => {
    return (
        <div
            className="header-container"
            style={{
                // backgroundImage: `url(${Profile_1})`,
                // backgroundRepeat: 'no-repeat',
                // backgroundSize: 'cover',
                // borderRadius: '30px'
            }}
        >
            <Row
            >
                <Col className="footer-social-icons">
                    <a href="https://www.facebook.com/tanphat05062001" target="_blank">
                        <img src={facebook} alt="Facebook" className='img' />
                    </a>
                    <a href="https://www.instagram.com/tannnphatttttttt/" target="_blank">
                        <img src={ins} alt="Instagram" className='img' />
                    </a>
                    <a href="https://github.com/nguyenvantanphatit" target="_blank">
                        <img src={git} alt="Github" className='img' />
                    </a>
                    <a href="https://www.gmail.com/nguyenvantanphat.it@gmail.com" target="_blank">
                        <img src={gmail} alt="Gmail" className='img' />
                    </a>
                    <Link to="/">
                        <ArrowRightOutlined style={{ fontSize: 50, color: '#000', marginLeft: 30 }} />
                    </Link>
                </Col>

            </Row>

        </div>
    );
};

export default About;
