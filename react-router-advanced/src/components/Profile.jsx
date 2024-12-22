import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { BrowserRouter as Routes, Switch, Route, Link, Redirect } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

function Profile() {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <h2>Profile</h2>
            <ul>
                <li>
                    <Link to={`${url}/details`}>Profile Details</Link>
                </li>
                <li>
                    <Link to={`${url}/settings`}>Profile Settings</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a sub-section.</h3>
                </Route>
                <Route path={`${path}/details`}>
                    <ProfileDetails />
                </Route>
                <Route path={`${path}/settings`}>
                    <ProfileSettings />
                </Route>
            </Switch>
        </div>
    );
}

export default Profile;
