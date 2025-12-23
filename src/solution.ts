function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === "string") {
        return value.toUpperCase()
    }
    if (typeof value === "number") {
        return value * 10;
    }
    return !value;

}

function getLength(value: string | any[]): number {
    if (typeof value === "string") {
        return value.length
    }
    return value.length;
}


class Person {
    public name: string;
    public age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}


type Item = {
    title: string;
    rating: number;
}
function filterByRating(items: Item[]): Item[] {
    return items.filter(item => item.rating >= 4);
}



type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean
};
function filterActiveUsers(users: User[]): User[] {
    return users.filter(user => user.isActive)
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean

}

function printBookDetails(book: Book):string {
    const availability = book.isAvailable ? "Yes" : "No";
   return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
}


type Value = string | number;
function getUniqueValues(arr1: Value[], arr2: Value[]): Value[] {
    const result: Value[] = [];
    for (const item of arr1) {
        let exists = false;

        for (const value of result) {
            if (value === item) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result.push(item)
        }
    }

    for (const item of arr2) {
        let exists = false;
        for (const value of result) {
            if (value === item) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result.push(item)
        }
    }
    return result;
}


type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number
}

function calculateTotalPrice(products: Product[]): number {
    if (products.length === 0) {
        return 0;
    }
    return products.map(product => { const basePrice = product.price * product.quantity 
        if(product.discount !== undefined){
            return basePrice - (basePrice* product.discount)/100;
        }
        return basePrice;
    })
    .reduce((total, price) => total + price, 0)
}

