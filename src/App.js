import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from './Components/AppBar/AppBar';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import { connect } from 'react-redux';
import * as authOperations from './Redux/auth/auth-operations';

const HomeView = lazy(() => import('./Views/HomeView/HomeView'));
const RegisterView = lazy(() => import('./Views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('./Views/Login/Login'));
const PhonebookView = lazy(() => import('./Views/PhonebookView/PhonebookView'));

class App extends Component {
    componentDidMount() {
        this.props.onGetCurrentUser();
    }

    render() {
        return (
            <>
                <AppBar />
                <Suspense fallback={<p>Страница загружается...</p>}>
                    <Switch>
                        <PublicRoute exact path="/" component={HomeView} />
                        <PublicRoute
                            path="/register"
                            restricted
                            redirectTo="/contacts"
                            component={RegisterView}
                        />
                        <PublicRoute
                            path="/login"
                            restricted
                            redirectTo="/contacts"
                            component={LoginView}
                        />
                        <PrivateRoute
                            path="/contacts"
                            redirectTo="/login"
                            component={PhonebookView}
                        />
                    </Switch>
                </Suspense>
            </>
        );
    }
}

// function App() {
//     return (
//         <>
//             <AppBar />

//             <Switch>
//                 <Route exact path="/" component={HomeView} />
//                 <Route path="/register" component={RegisterView} />
//                 <Route path="/login" component={LoginView} />
//                 <Route path="/contacts" component={PhoneBook} />
//             </Switch>
//         </>
//     );
// }

// const mapStateToProps = ({ contacts: { items } }) => ({
//     contacts: items,
// });

// const mapDispatchToProps = (dispatch) => ({
//     fetchContact: () => dispatch(fetchContact()),
// });

const mapDispatchToProps = {
    onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
