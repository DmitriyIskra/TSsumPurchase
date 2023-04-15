import Buyable from "./index";

export default class Cart {
    _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    sum(): number {
        return this._items.reduce( (acc: number, item: Buyable) => acc += item.price, 0);
    }

    sumWithDiscount(discount: number): number {
        let sum: number
        sum = this._items.reduce( (acc: number, item: Buyable) => acc += item.price, 0);

        return sum - (sum * discount / 100)
    }

    del(id: number): void {
        let index: number;
        index = this._items.findIndex( item => item.id === id);

        if(index !== -1) {
            this._items.splice(index, 1)
        } else {
            throw new Error(`Объект с id:${id} не существует`)
        }
        
    }
}

