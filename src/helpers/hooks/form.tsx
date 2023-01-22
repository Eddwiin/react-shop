export function useSubmit(fn: Function) {
    return (event: any) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const value = Object.fromEntries(data.entries());
        return fn(value)
    }
}

export function useChange(fn: Function) {
    return (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        return fn({ [name]: value })
    }
}