import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';
import { useEffect, useMemo } from 'react';

const App = () => {
    const { user, isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently, logout } =
        useAuth0();

    const renderButton = useMemo(() => {
        if (isAuthenticated) {
            return (
                <Button
                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                >
                    Logout
                </Button>
            );
        }

        return <Button onClick={loginWithRedirect}>Login</Button>;
    }, [isAuthenticated, logout, loginWithRedirect]);

    useEffect(() => {
        if (isAuthenticated) {
            console.log('authenticated');

            getAccessTokenSilently({
                authorizationParams: {
                    audience: 'quack-api',
                },
            }).then((data) => {
                console.log(data);
            });
        }
    }, [isAuthenticated, getAccessTokenSilently]);

    return (
        <>
            {renderButton}

            {isAuthenticated && !isLoading && user && (
                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            )}
        </>
    );
};

export default App;
