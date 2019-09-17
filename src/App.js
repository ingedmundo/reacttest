import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { StateProvider } from './state';

import { useStateValue } from './state';
import { Button} from 'react-bootstrap';


function Index() {
    const [{ theme }, dispatch] = useStateValue();

    return (
      <div>
      <h2>Home</h2>
         <Link to="/about">about basaename</Link>
          <Button
            variant={theme.variant}
            onClick={() => dispatch({
                      type: 'changeTheme',
                      newTheme: { variant: 'success'}
                    })}
          >
            {theme.variant}
          </Button>
      </div>
    )
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

function AppRouter() {
  const initialState = {
    theme: { variant: 'primary' }
  };

  const reducer = (state, action) => {
    switch (action.type) {
    case 'changeTheme':
      return {
        ...state,
        theme: action.newTheme
      };
    default:
      return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router basename="/reacttest">
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </Router>
    </StateProvider>
  );
}

export default AppRouter;
