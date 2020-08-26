import { ApplicationPropertyForCustomer } from '../domain/auth'
import { RootStateCommon } from './common'

export interface RootState extends RootStateCommon {
    showHeader: boolean,
    drawerMenu: boolean
}

export interface SystemState {
    applicationProperty:
        ApplicationPropertyForCustomer
}
