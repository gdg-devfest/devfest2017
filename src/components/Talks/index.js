import React, { Component } from 'react';
import classNames from 'classnames';
import Menu from '../Menu';
import Sponsors from '../Sponsors';
import Footer from '../Footer';
import Timer from '../Timer';
import 'bulma/css/bulma.css';
import c from './content.json';
import Maps from '../Maps';

class Talks extends Component {
  render() {
    return (
      <div className={'wrapper'}>
        <section className={classNames('hero', 'is-medium','is-primary','is-bold', 'has-text-centered')}>
          <Menu />  
          <div className={'hero-body'}>
            <div className={'container'}>
              <h1 className={classNames('title')}>{c.title}</h1>
              <Timer customOptions={{endDate: '10/28/2017 9:00 AM'}} />
            </div>
          </div>
        </section>
        <Maps
          lat={37.787600}
          lng={-122.396600}
          eventLocation='Galvanize SF - Soma'
          eventDescription='Desc'
          directions='https://goo.gl/maps/21dQqb9tccR2'
        />
        <Sponsors />
        <Footer />
      </div>
    );
  }
}

export default Talks;