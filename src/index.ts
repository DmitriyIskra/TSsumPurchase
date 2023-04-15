export default interface Buyable {
    id: number
    name: string,
    nameEnglish: string,
    year: number,
    country: string,
    slogan: string,
    genre: string,
    time: string,
    price: number
}


// import Moovie from './moovie';
// import Cart from './cart';

// const moovieItem = new Moovie(245,'Мстители', 'Avengers', 2012, 'USA', 'Avengers Assemble!', 'фантастика, боевик, фэнтези', '137 мин. / 02:17', 2000);
// const moovieItem2 = new Moovie(246,'Мстители2', 'Avengers2', 2015, 'USA', 'Avengers Assemble!', 'фантастика, боевик, фэнтези', '137 мин. / 02:17', 2000);


// const cart = new Cart();
// cart.add(moovieItem);
// cart.add(moovieItem2);


// console.log(cart._items.length);


// test('test delete item', () => {
//     cart.del(246);
//     const result = cart._items.length
//     expect(result).toBe(1);
// })