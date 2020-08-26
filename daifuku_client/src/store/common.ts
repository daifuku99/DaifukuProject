export interface RootStateCommon {
    loadingCount: number;
    timeoutID: number | null;
    errorQueue: [];
    errorOccuredInInquiry: boolean;
}
