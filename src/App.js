import './App.css';
import { Container, Grid } from '@material-ui/core';
import Profile from './components/Profile';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
      <Container className="top__60">
        <Grid container spacing={7} className="grid__container">
          <Grid item xs={12} sm={12} md={4} lg={3} >
            <Profile/>
          </Grid>

          <Grid item xs>
            <Router>
              <Header />
              <div className='main__content container__shadow'>
                <Switch>
                  <Route path="/portfolio" component={Portfolio} />
                  <Route path="/" component={Resume}/> 
                </Switch>
              </div>
            </Router>

            <Footer/>
          </Grid> 
        </Grid>
      </Container>
  );
}

export default App;
