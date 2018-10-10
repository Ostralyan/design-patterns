interface Iterator<T> {
    hasNext(): boolean;

    next(): T;
}

class DinerMenuIterator implements Iterator<MenuItem>{
    items: MenuItem[];
    position: number = 0;

    public DinerMenuIterator(items: MenuItem[]) {
        this.items = items;
    }

    // public next(): MenuItem {
    //     let menuItem = this.items[this.position];
    //     this.position++;
    //     return menuItem;
    // }

    public next() :  {

    }

    // public hasNext(): boolean {
    //     if (this.position >= this.items.length || this.items[this.position] == null) {
    //         return false; 
    //     } else {
    //         return true; 
    //     }
    // } 
}

class MenuItem { 
    name: string;
    description: string; 
    vegetarian: boolean;
    price: number;

    constructor(
        name: string, 
        description: string,
        vegetarian: boolean, 
        price: number
    ) {
        this.name = name;
        this.description = description;
        this.vegetarian = vegetarian;
        this.price = price;
    }

    public getName(): string { 
        return this.name;
    }
    public getDescription(): string { 
        return this.description;
    }
    public getPrice(): number { 
        return this.price;
    }
    public isVegetarian(): boolean { 
        return this.vegetarian;
    } 
}
