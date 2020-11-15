import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css';
import { Container } from 'reactstrap';


const Nav = () =>{
    const navIndex={
        paddingRight : '0'
    }
      
    return (
        <Container className="nav-container">
            <Navbar expand="lg">
                <Navbar.Brand href="/" className="nav-title">世新大學觀光規劃暨資源管理組</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav nav">
                    <ul className="navbar-nav nav">
                        <li className="nav-item">
                            <NavLink className="nav-list" activeClassName="nav-active" to="/about">
                                關於
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-list" activeClassName="nav-active" to="/sponsor">
                                贊助
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-list" activeClassName="nav-active" to="/teacher">
                                老師介紹
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-list" activeClassName="nav-active" to="/work">
                                作品+
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-list" activeClassName="nav-active" to="/store">
                                商店
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-list" to="/" style={ navIndex }>
                                首頁
                            </NavLink>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export { Nav };