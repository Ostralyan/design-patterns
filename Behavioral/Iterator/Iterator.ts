// Iterator Pattern: provides a way to access 
// the elements of an aggregate object sequentially 
// without exposing its underlying representation.
interface MyIterator<T> {
    hasNext(): boolean;

    nextItem(): T;
}

class DinerMenu { 
    MAX_ITEMS: number = 6;
    numberOfItems: number = 0;
    menuItems: MenuItem[];

    constructor() {
        this.addItem("Vegetarian BLT", "(Fakin’) Bacon with lettuce & tomato on whole wheat", true, 2.99);
        this.addItem("BLT","Bacon with lettuce & tomato on whole wheat", false, 2.99);
        this.addItem("Soup of the day","Soup of the day, with a side of potato salad", false, 3.29);
        this.addItem("Hotdog","A hot dog, with saurkraut, relish, onions, topped with cheese", false, 3.05);
    }

    public addItem(name: string, description: string, vegetarian: boolean, price: number): void {
        let menuItem: MenuItem = new MenuItem(name, description, vegetarian, price); 
        if (this.numberOfItems >=this. MAX_ITEMS) {
            console.log("Sorry, menu is full! Can’t add item to menu"); 
        } else {
            this.menuItems[this.numberOfItems] = menuItem;
            this.numberOfItems = this.numberOfItems + 1; 
        }
    }

    public createIterator(): MyIterator<MenuItem> {
        return new DinerMenuIterator(this.menuItems);
    }
}

class DinerMenuIterator implements MyIterator<MenuItem> {
    items: MenuItem[];  
    position: number = 0;

    constructor(items: MenuItem[]) {
        this.items = items;
    }

    public nextItem(): MenuItem  {
        let menuItem = this.items[this.position];
        this.position++;
        return menuItem;
    }

    public hasNext(): boolean {
        if (this.position >= this.items.length || this.items[this.position] == null) {
            return false; 
        } else {
            return true; 
        }
    } 
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


let asdf = new DinerMenuIterator([
    new MenuItem('asdf', 'asdf', true, 123),
    new MenuItem('what', 'what', true, 123),
    new MenuItem('yee', 'yee', true, 123)
]);

while (asdf.hasNext()) {
    console.log(asdf.nextItem().getDescription());
}

while (asdf.hasNext()) {
    console.log(asdf.nextItem().getDescription());
}