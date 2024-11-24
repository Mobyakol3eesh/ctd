const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
};
export class Task {
    private name: string;
    private date: string;
    private isFulfiled: boolean;
    constructor(
        name: string,
        date = new Date().toLocaleDateString('en-US', options),
        isFulfiled = false
    ) {
        this.name = name;
        this.date = date;
        this.isFulfiled = isFulfiled;
    }
    getName() {
        return this.name;
    }
    getDate() {
        return this.date;
    }
    getIsFulfiled() {
        return this.isFulfiled;
    }
    toggleStatus() {
        this.isFulfiled = !this.isFulfiled;
    }
    setName(newName: string) {
        this.name = newName;
    }
}
