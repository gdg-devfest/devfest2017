import React, { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import c from './content.json';

class Sponsors extends Component {
  render() {
    return (
        <section className={classNames('hero', 'is-small', 'is-bold')}>
            <div className={classNames('hero-body', 'has-text-centered')}>
                <div className={classNames('title')}>{c.partners}</div>
                <div className={classNames('columns')}>
                    <div className={classNames('column')}>
                        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo"></img>
                    </div>
                </div>
                <div className={classNames('subtitle')}>{c.events}</div>
                <div className={classNames('columns')}>
                    
                </div>
                <div className={classNames('subtitle')}>{c.comm}</div>
                <div className={classNames('columns')}>

                </div>
                <div className={classNames('subtitle')}>{c.venue}</div>
                <div className={classNames('columns')}>
                    <div className={classNames('column', 'is-one-third')}></div>
                    <div className={classNames('column')}>
                        <div style={{ width: "200px"}}>
                            <a href="http://nextspace.us/">
                                <svg style={{ fill: "#ff5f00" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 527.18 148.84">
                                    <title>NextSpace</title>
                                    <path d="M84.41 0h39.78v49.35h-39.78zM75.67 58.09v-48.14h-75.67v138.9h116v-90.76h-40.33zm-14.89 74.62h-11.33l-20.81-31.61v31.61h-12.17v-52.81h12.7l19.44 29.54v-29.54h12.17v52.81zm25.55.61a34.1 34.1 0 0 1-15.46-3.75l1.38-8.8a28.83 28.83 0 0 0 14.16 4.44c3.21 0 4.74-1.07 4.74-2.83 0-1.91-1.07-2.75-6.35-4.06-9.41-2.45-13.39-5-13.39-12s5.21-11.63 14.39-11.63a34.41 34.41 0 0 1 13.85 2.76l-1.45 8.8a27.54 27.54 0 0 0-12.32-3.52c-2.76 0-4 1-4 2.45s1.12 2.35 6.36 3.82c9.95 2.68 13.47 5.2 13.47 12.17 0 7.83-5.43 12.15-15.38 12.15zM197.95 102.16l-20.63-31.33v31.33h-12.06v-52.34h12.59l19.26 29.28v-29.28h12.06v52.33h-11.22zM252.62 86.46h-22.3c.61 5.84 4.09 8.12 9.1 8.12 4.09 0 8.11-1.52 12.21-3.87l1.14 8a27 27 0 0 1-14.77 4.2c-11.15 0-19.11-5.92-19.11-19.19 0-12.14 7.43-19.49 17.52-19.49 11.38 0 16.46 8.5 16.46 19.27a15.12 15.12 0 0 1-.25 2.96zm-16.54-14.79c-3.19 0-5.46 2.81-5.84 8.5h11.68c-.38-5.62-2.35-8.5-5.84-8.5zM283.4 102.69l-6.4-11.45-6.14 10.92h-10.86l11.3-18.36-10.81-17.9 11.91-1.44 5.77 10.54 5.69-10h10.84l-10.77 17.44 11.38 18.81zM320.25 102.69c-8 0-13.5-2.88-13.5-12.36v-16h-4.93v-9.33h4.93v-11.08l11.38-1.74v12.82h7.05l1.44 9.33h-8.49v14.17c0 3 1.44 4.4 4.55 4.4a10.35 10.35 0 0 0 2.73-.38l1.44 9.41a21.87 21.87 0 0 1-6.6.76zM351.11 102.76a29 29 0 0 1-13.88-3.26l.77-5.31a25.5 25.5 0 0 0 13.35 3.94c6.14 0 10.77-3.49 10.77-9.41 0-5.16-2.58-7.74-10.54-11.22-10-4.4-13.65-7.74-13.65-15.17 0-7.89 6.37-13.12 15-13.12a22.86 22.86 0 0 1 11.53 2.73l-.76 5.23a19.48 19.48 0 0 0-11-3.34c-6.14 0-9.56 3.64-9.56 8.19 0 4.78 2.5 7.05 10.54 10.62 9.71 4.25 13.65 8 13.65 15.7.01 8.96-7.04 14.42-16.22 14.42zM393.34 102.61a24.64 24.64 0 0 1-9.33-1.75v14.34l-5 .83v-49.75h3.87l.83 5.16c2.81-3.19 6.37-5.92 11.61-5.92 7.81 0 14.41 5.69 14.41 17.67 0 13.13-7.66 19.42-16.39 19.42zm1.45-32.61c-4.25 0-7.51 2.5-10.77 6.45v19.8a19.53 19.53 0 0 0 9.18 2.12c6.45 0 11.45-4.93 11.45-14.94 0-8.73-4.18-13.43-9.86-13.43zM444 102.16l-.83-4.78c-3.34 3.11-7.51 5.54-12.67 5.54-6.22 0-10.69-3.41-10.69-9.78 0-8.42 6.83-12.36 23.06-14v-2.32c0-4.85-2.88-6.9-7.43-6.9a28.79 28.79 0 0 0-12.36 3.19l-.68-4.47a32 32 0 0 1 13.35-3.11c8 0 12.06 3.72 12.06 11.07v25.56h-3.81zm-1.14-19c-14.11 1.44-18.05 4.85-18.05 9.71 0 3.87 2.65 5.84 6.45 5.84s8.12-2.12 11.61-5.39v-10.2zM476 102.91c-9.18 0-16.23-6.83-16.23-18.66 0-12.06 7.28-18.73 16.38-18.73a19.66 19.66 0 0 1 11.68 3.64l-.83 5a16.24 16.24 0 0 0-10.92-4.32c-6.83 0-11.23 5.54-11.23 14.34s4.4 14.33 11.68 14.33a15.77 15.77 0 0 0 10.92-4.25l.68 4.55a18.79 18.79 0 0 1-12.13 4.1zM527.18 84.56h-25c.15 8.8 4.25 14 11.45 14 4.78 0 8.95-2.12 12.67-5.31l.76 4.55a20.87 20.87 0 0 1-13.73 5.08c-9.41 0-16.16-6.37-16.16-18.73 0-11.53 6.67-18.66 15.47-18.66 9.78 0 14.49 8 14.49 18v1.06zm-14.49-15c-5.61 0-9.25 4.17-10.24 11.07h19.55c-.51-6.46-3.54-11.09-9.31-11.09z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className={classNames('column')}>
                        <a href="https://www.galvanize.com/san-francisco/campus">
                            <img src="https://s3-us-west-2.amazonaws.com/galvanize.com-dev/galvanize-logo.svg" alt="Galvanize SF Logo"></img>
                        </a>
                    </div>
                    <div className={classNames('column')}>
                        <a href="https://www.42.us.org/">
                            <img src="https://www.42.us.org/wp-content/themes/42/images/42_logo_black.svg" alt="42 Logo" width="75"></img>
                        </a>
                    </div>
                    <div className={classNames('column', 'is-one-third')}></div>
                </div>
                <div className={classNames('subtitle', 'is-3')}>
                    <p>If you would like to sponsor the event</p>
                    <a href="mailto:san.francisco.gdg@gmail.com">
                        Contact us Here
                    </a>
                </div>
            </div>
        </section>    
    );
  }
}

export default Sponsors;