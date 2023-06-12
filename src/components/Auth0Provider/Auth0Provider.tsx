import { FC, PropsWithChildren } from 'react';
import { Auth0Provider as Auth0ProviderBase } from '@auth0/auth0-react';
import useConfiguration from './useConfiguration.hook';

const Auth0Provider: FC<PropsWithChildren> = ({ children }) => {
    const { configuration } = useConfiguration();

    console.log({ configuration });

    return (
        <Auth0ProviderBase
            clientId={configuration.clientId}
            domain={configuration.domain}
            useRefreshTokens={true}
            useRefreshTokensFallback={false}
            authorizationParams={{
                connection: 'google-oauth2',
                redirect_uri: window.location.origin,
            }}
        >
            {children}
        </Auth0ProviderBase>
    );
};

export default Auth0Provider;
