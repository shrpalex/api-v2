export function out_bool(bool: boolean, truestr?: string, falsestr?: string): void {
    print(bool_str(bool, truestr, falsestr));
}

export function bool_str(bool: boolean, truestr?: string, falsestr?: string): string {
    return bool ? truestr || "TRUE" : falsestr || "FALSE"
}