
import styles from './Navbar.module.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import Login from "../auth/login.js";
import Register from "../auth/register.js";
import React, { useState } from "react";
import logout from "../auth/logout.js";
import Widgets from '../widgets/widgets'
import About from '../about/aboutview.js'

export default function Navbar() {

    const [overview, setOverview] = useState(false);
    const onClick = () => setOverview(!overview);


    return (

        <Router>
            <header>
                <nav >
                    <div>
                        <ul className={styles.liste}>
                        <Route path="/about" component={About} />

                            <Route path="/" />
                            <li className={styles.items}><Link to="/"><button className={styles.button}>HOME</button></Link></li>

                            <Route path="/login" component={Login} />
                            <li className={styles.items}><Link to="/login"><button className={styles.button} onClick={(onClick)}> {overview ? 'LOGOUT' : 'LOGIN'}</button>{overview && (
                                <div className={styles.overview}></div>)}</Link></li>

                            <li  className={styles.items}> <Link to="/"><Route path="/" component={logout} /></Link></li>


                            <Route path="/register" component={Register} />
                            <li className={styles.items}><Link to="/register"><button className={styles.button}>REGISTER</button></Link></li>

                            {/*<Route path="/modules" component={} />*/}<Route path="/modules" component={Widgets}/>
                            <li className={styles.items}><Link to="/modules"><button className={styles.button}>MODULES</button></Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </Router>
    )
}

