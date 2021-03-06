import {AutoResponderEntryEntity} from "../../domain/auto-responder-entry/auto-responder-entry-entity";
import * as AppActions from "../actions/index";
import {ClientRequestBoxEntry} from "../components/client-request-box";
import {CertificateBoxStatus} from "../components/cetificate-box";
import {ProxySettingBoxStatus} from "../components/proxy-setting-box";

export interface AppState {
    autoResponderEntries: AutoResponderEntryEntity[];
    clientRequestEntries: ClientRequestBoxEntry[];
    certificateBoxStatus: CertificateBoxStatus;
    proxySettingBoxStatus: ProxySettingBoxStatus;
}

let initialState: AppState = {
    autoResponderEntries: <AutoResponderEntryEntity[]>[],
    clientRequestEntries: <ClientRequestBoxEntry[]>[],
    certificateBoxStatus: "missing",
    proxySettingBoxStatus: "Off",
};

export function reducer(state = initialState, action: any): AppState {
    switch (action.type) {
        case AppActions.INIT_LOAD: {
            return Object.assign({}, state, {});
        }
        case AppActions.FILE_DROP: {
            return Object.assign({}, state, {
                autoResponderEntries: state.autoResponderEntries.concat(action.autoResponderBoxEntry)
            });
        }
        case AppActions.CLIENT_REQUEST: {
            return Object.assign({}, state, {
                clientRequestEntries: state.clientRequestEntries.concat(action.clientRequestEntity)
            });
        }
        case AppActions.CHANGE_CERTIFICATE_STATUS: {
            return Object.assign({}, state, {
                certificateBoxStatus: action.certificateBoxStatus
            });
        }
        case AppActions.CHANGE_PROXY_SETTING_STATUS: {
            return Object.assign({}, state, {
                proxySettingBoxStatus: action.proxySettingBoxStatus
            });
        }
        default:
            return state;
    }
}