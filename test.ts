function Add(x: number, y: number) {
    return x + y
}

interface Car {
    wheels: number;
    mileage: number;
}

//write a function that tells me how many wheels this car has
function wheelsOnCar(someCar: Car) {
    return someCar.wheels
}

interface Book {
    pages: string[],
    title: string,
    author: string,
}

const warAndPeace: Book = {
    pages: ["once upon a time", "there was war"],
    title: "war and peace",
    author: "Tolstoy"
}

function pagesInBook(someBook: Book): number {
    return someBook.pages.length;
};

console.log(pagesInBook(warAndPeace));