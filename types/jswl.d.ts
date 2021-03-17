export default jswl;
declare const jswl: {
    obj: {
        getPropByPath: (obj: any, path: string) => any;
        getObjectPropBySubprop: (obj: any, subpropName: any, subpropValue: any) => any;
    };
    arr: {
        inArray: (value: any, array: any[], strict?: boolean) => boolean;
        isAnyInArray: (needles: any[], array: any[]) => boolean;
        removeAllElementsLike: (arr: any[], value: any) => any;
        uniqueArray: (arr: any[]) => any[];
        allNotEmpty: (arr: any) => boolean;
        getArrElementAndIndexByObjectProp: (arr: any[], propName: string, propValue: any) => any;
        getArrElementByObjectProp: (arr: any[], propName: string, propValue: any) => any;
        countSubElementsWithValue: (arr: any[], subElementPath: string, neededElementValue: any, arrayDelimeter?: string) => any;
        countElementsInSubArrays: (arr: any[], subArrayPathTemplate: string, arrayDelimeter?: string) => any;
    };
    file: {
        downloadBlobOrGetErrorInJson: (url: string, successCallback: Function, failCallback?: Function) => Promise<void>;
    };
    str: {
        addPrefixIfNotExists: (str: string, prefixStr: string) => string;
        removePrefixIfExists: (str: string, prefixStr: string) => string;
    };
    i18n: {
        rus: {
            getWordFormByCount: (number: number, forOne: string, forTwo: string, forFive: string) => string;
        };
    };
    isNullOrUndefined: (value: any) => boolean;
    isDefined: (value: any) => boolean;
    isObject: (value: any) => boolean;
    isObjectEmpty: (obj: any) => boolean;
    isEmpty: (value: any) => boolean;
    getPropIfObjectDefined: (obj: any, propertyName: string, defaultValue?: any) => any;
    getSquareBracketedFragments: (str: string) => any[];
    getSquareBracketedFragmentByNumber: (str: string, number: any) => string;
    checkForSubstring: (str: string, substr: string) => boolean;
    cloneByJson: (data: any) => any;
    hello: () => undefined;
};
