import React, { Component } from 'react';
import NavBar from './styledComponents/navBar';
import { hot } from 'react-hot-loader/root'
import Slider from './styledComponents/slider';
import Companies from './styledComponents/companies';
import AboutMySelf from './styledComponents/aboutMyself';
import LatestWorks from './styledComponents/latestWorks';
import JobHistory from './styledComponents/jobHistory';
import Services from './styledComponents/services';
import ClientReview from './styledComponents/clientReview';
import Footer from './styledComponents/footer';
import ContactMe from './styledComponents/contactMe';
import Preloader from './assets/preloader';



class App extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div className="App">
      
      {/* <Preloader /> */}

      

      <NavBar />
      <Slider />
      <Companies />
      <AboutMySelf />
      <LatestWorks />
      <JobHistory />
      <Services />
      <ClientReview />
      <ContactMe />
      <Footer />

      
    
      </div>
    );
  }
}

export default hot(App);
