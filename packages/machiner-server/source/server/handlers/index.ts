// #region imports
    // #region libraries
    import PluridServer from '@plurid/plurid-react-server';
    // #endregion libraries


    // #region internal
    import setupGlobal from './global';
    import setupMiddleware from './middleware';
    import setupGraphQL from './graphql';
    // #endregion internal
// #endregion imports



// #region module
const setupHandlers = async (
    server: PluridServer,
) => {
    const instance = server.instance();

    await setupGlobal();
    await setupMiddleware(
        instance,
    );
    await setupGraphQL(
        instance,
    );
}
// #endregion module



// #region exports
export default setupHandlers;
// #endregion exports
