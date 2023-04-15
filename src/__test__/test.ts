import Moovie from '../moovie';
import Cart from '../cart';

const cart = new Cart();

const moovieItem = new Moovie(245,'Мстители', 'Avengers', 2012, 'USA', 'Avengers Assemble!', 'фантастика, боевик, фэнтези', '137 мин. / 02:17', 2000);
const moovieItem2 = new Moovie(246,'Мстители2', 'Avengers2', 2015, 'USA', 'Avengers Assemble!', 'фантастика, боевик, фэнтези', '137 мин. / 02:17', 2000);

cart.add(moovieItem);
cart.add(moovieItem2);


test('test sum', () => {
    const result = cart.sum();

    expect(result).toBe(4000);
})

test('test sumWithDiscount', () => {
    const result = cart.sumWithDiscount(10);

    expect(result).toBe(3600);
})

test('test del', () => {
    cart.del(246);

    const result = cart.items.length;

    expect(result).toBe(1);
})

test('test del error', () => {
    ;

    expect(() => cart.del(249)).toThrow(`Объект с id:249 не существует`);
})