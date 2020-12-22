import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
// import { sampleData } from '../../../app/api/sampleData';
import { useSelector } from 'react-redux';
import EventListItemPlaceholder from './EventListItemPlaceholder';
import EventFilter from './EventFilter';
import {
  dataFromSnapshot,
  getEventsFromFirestore,
} from '../../../app/firestore/firestoreService';

const EventDashboard = () => {
  const { events } = useSelector(state => state.event);
  const { loading } = useSelector(state => state.async);

  useEffect(() => {
    const unsubscribe = getEventsFromFirestore({
      next: snapshot =>
        console.log(
          snapshot.docs.map(docSnapshot => dataFromSnapshot(docSnapshot))
        ),
      error: error => console.log(error),
    });

    return unsubscribe;
  });

  // if (loading) return <LoadingComponent />;

  return (
    <Grid>
      <Grid.Column width={10}>
        {loading && (
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        )}
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventFilter />
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
