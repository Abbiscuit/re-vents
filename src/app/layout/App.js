import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

/* components */
import HomePage from '../../features/home/HomePage';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';

function App() {
  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container className="main">
              <Route exact path="/events" component={EventDashboard} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route
                path={['/createEvent', '/manage:id']}
                component={EventForm}
              />
            </Container>
          </>
        )}
      />
    </Fragment>
  );
}

export default App;
