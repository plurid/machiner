// #region imports
    // #region external
    import {
        JoinerConfiguration,
    } from '#server/data/interfaces';
    // #endregion external
// #endregion imports



// #region module
export type AddableEntityType =
    | 'configuration';

export const ADD_ENTITY = 'ADD_ENTITY';
export interface AddEntityPayload {
    type: AddableEntityType;
    data: any;
}
export interface AddEntityAction {
    type: typeof ADD_ENTITY;
    payload: AddEntityPayload;
}


export type RemovableEntityType =
    | 'configuration';

export const REMOVE_ENTITY = 'REMOVE_ENTITY';
export interface RemoveEntityPayload {
    type: RemovableEntityType;
    id: string;
}
export interface RemoveEntityAction {
    type: typeof REMOVE_ENTITY;
    payload: RemoveEntityPayload;
}


export type AddableEntitiesType =
    | 'configurations';

export const ADD_ENTITIES = 'ADD_ENTITIES';
export interface AddEntitiesPayload {
    type: AddableEntitiesType;
    data: any;
    push?: string;
}
export interface AddEntitiesAction {
    type: typeof ADD_ENTITIES;
    payload: AddEntitiesPayload;
}


export type RemoveableEntitiesType =
    | 'configuration';

export const REMOVE_ENTITIES = 'REMOVE_ENTITIES';
export interface RemoveEntitiesPayload {
    type: RemoveableEntitiesType;
    ids: string[];
}
export interface RemoveEntitiesAction {
    type: typeof REMOVE_ENTITIES;
    payload: RemoveEntitiesPayload;
}


export const CLEAR_DATA = 'CLEAR_DATA';
export interface ClearDataAction {
    type: typeof CLEAR_DATA;
    payload: undefined;
}


export interface State {
    id: string;
    configurations: JoinerConfiguration[];
}


export type Actions =
    | AddEntityAction
    | RemoveEntityAction
    | AddEntitiesAction
    | RemoveEntitiesAction
    | ClearDataAction;
// #endregion module
