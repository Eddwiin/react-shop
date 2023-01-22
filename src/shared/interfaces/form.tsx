export interface FormDataSubmitHook {
    [k: string]: string;
}

export interface FormDataChangedHook {
    [k: string]: string | number | boolean;
}