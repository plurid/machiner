// #region imports
    // #region external
    import * as Types from '../types';

    import initialState from '../initial';

    import resolvers from '../resolvers';
    // #endregion external
// #endregion imports



// #region module
const reducer = (
    state: Types.State = initialState,
    action: Types.Actions,
): Types.State => {
    switch(action.type) {
        case Types.SET_VIEW_LOADING:
            return resolvers.setViewLoading(state, action);
        case Types.SET_VIEW_TYPE:
            return resolvers.setViewType(state, action);
        case Types.SET_EDIT_ID:
            return resolvers.setEditID(state, action);
        case Types.SET_VIEW_COMPACT_SELECTORS:
            return resolvers.setViewCompactSelectors(state, action);
        case Types.SET_VIEW_OWNER_ID:
            return resolvers.setViewOwnerID(state, action);
        case Types.SET_VIEW_USAGE_TYPE:
            return resolvers.setViewUsageType(state, action);
        default:
            return {
                ...state,
            };
    }
}
// #endregion module



// #region exports
export default reducer;
// #endregion exports
