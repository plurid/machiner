// #region imports
    // #region external
    import {
        Context,
    } from '#server/data/interfaces';
    // #endregion external
// #endregion imports



// #region module
const getCurrentOwner = async (
    context: Context,
) => {
    try {
        const {
            request,
            privateUsage,
            privateOwnerIdentonym,
        } = context;

        if (privateUsage) {
            if (!privateOwnerIdentonym) {
                return {
                    status: false,
                };
            }

            return {
                status: true,
                data: {
                    id: privateOwnerIdentonym,
                },
            };
        }

        return {
            status: true,
            data: {
                id: '',
            },
        };
        // return {
        //     status: false,
        // };
    } catch (error) {
        return {
            status: false,
        };
    }
}
// #endregion module



// #region exports
export default getCurrentOwner;
// #endregion exports
