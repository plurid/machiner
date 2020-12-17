// #region imports
    // #region libraries
    import React from 'react';

    import {
        universal,
    } from '@plurid/plurid-ui-components-react';
    // #endregion libraries


    // #region external
    import joinerLogo from '../../assets/joiner-logo.png';
    // #endregion external


    // #region internal
    import {
        StyledInitialView,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
const {
    buttons: {
        PureButton: PluridPureButton,
    },
} = universal;

export interface InitialViewProperties {
}

const InitialView: React.FC<InitialViewProperties> = (
    properties,
) => {
    // #region properties
    // const {
    // } = properties;
    // #endregion properties


    // #region render
    return (
        <StyledInitialView>
            <div>
                <img
                    src={joinerLogo}
                    alt="joiner logo"
                    height={250}
                />
            </div>

            <h1>
                joiner
            </h1>

            <h2>
                Multi/Mono-Repository Task Runner
            </h2>

            <div
                style={{
                    width: '200px',
                    margin: '50px auto',
                }}
            >
                <PluridPureButton
                    text="Initial Setup"
                    atClick={() => {
                        // setView('setup');
                    }}
                    level={2}
                />
            </div>
        </StyledInitialView>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default InitialView;
// #endregion exports
