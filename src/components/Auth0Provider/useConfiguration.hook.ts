interface ImplicitGrantConfiguration {
    clientId: string;
    domain: string;
}

const useConfiguration = (): { configuration: ImplicitGrantConfiguration } => {
    console.log(import.meta.env);
    if (import.meta.env.MODE === 'development') {
        return {
            configuration: {
                clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
                domain: import.meta.env.VITE_AUTH0_DOMAIN,
            },
        };
    }

    throw new Error('Configuration for non development env is not implemented yet');
};

export default useConfiguration;
