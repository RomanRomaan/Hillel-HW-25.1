// const BIG_ADITIONAL_NUM = 5;
// const MEDIUM_ADITIONAL_NUM = 3;
// const SMALL_ADITIONAL_NUM = 1;
// const MAX_SUM = 100;


// const LARGE_BOUNDARY_NUM = 10;
// const SMALL_BOUNDARY_NUM = 3;

// // const userNum = prompt("Enter a number");
// let sum;


// if (userNum > LARGE_BOUNDARY_NUM) {
//     sum = +userNum + BIG_ADITIONAL_NUM;

// }

// else if (userNum > SMALL_BOUNDARY_NUM) {
//     sum = +userNum + MEDIUM_ADITIONAL_NUM;
// }

// else { sum = +userNum + SMALL_ADITIONAL_NUM; }

// if (sum > 100) {
//     sum = MAX_SUM;
// }
// // alert("Your sum is " + sum)

// const obj = {};


// const userNum = 10369;

// let spacedNumber = userNum.toString().split('').join(' ');
// console.log(userNum.toString().split('').join(''))

// const user = {
//     name: 'Roman',
//     age: 36,
//     isStudent: false,
// }

// console.log(user);

// user.age = 37;
// console.log(user);

// user.city = "Dnipro";
// console.log(user);

// alert(`
// Name: ${user.name}
// Age: ${user.age}
// Is student: ${user.isStudent}
// City: ${user.city}
// `);

// const car = {
//     brand: "Tesla",
//     year: 2020,
//     color: "metalic",
//     id_s: {
//         id: 20,
//         subid: 10,
//     },
// }
// console.log(car)
// const carCopy = Object.assign({}, car)
// console.log(carCopy)

// carCopy.color = "green"
// carCopy.id_s.id = "nope"
// console.log(car)
// console.log(carCopy)
// const carCopy2 = { ...car }
// console.log(car)
// console.log(carCopy)
// console.log(carCopy2)
// carCopy.color = "greenn"
// carCopy.id_s.id = "nope2"
// console.log(car)
// console.log(carCopy)
// console.log(carCopy2)

// const num1 = 1
// const num2 = 2

// console.log(num1 == num2)
// console.log(num1 === num2)

// const user = {
//     name: 'Roman',
//     age: 36,
//     isStudent: false,
// }
// const user2 = {
//     name: 'Roman',
//     age: 36,
//     isStudent: false,
// }

// console.log(user == user2) // обьекты невозможно сравнить потому что они ссылочные
// console.log(user === user2)

// const user3 = user2

// console.log(user3 == user2) // будут тру только когда одинаковая ссылка, на значения он не смотрит
// console.log(user3 === user2)

// const userAge = prompt("Enter your age: ");

// if (userAge === null) {
//     alert("You canceled. See you soon!");
// } else if (userAge.trim() === "") {
//     alert("Your answer is empty");
// } else {
//     const ageNumber = Number(userAge.trim());

//     if (isNaN(ageNumber)) {
//         alert("Your answer is not a number");
//     } else if (!Number.isInteger(ageNumber)) {
//         alert("Your answer is not an INTEGER number");
//     } else if (ageNumber < 0 || ageNumber > 150) {
//         alert("Error: Age must be between 0 and 150");
//     } else {
//         alert(`Your age is: ${ageNumber} years old`);
//     }
// }


// const userAgeInput = prompt('Enter your row: ')

// console.log(typeof (userAgeInput))
// console.log(typeof (Number(userAgeInput)))

// const book = {
//     title: 'LA',
//     author: "Moby Diik",
//     year: 1850,
//     isRead: false,
// }

// book.isRead = true
// console.log(book.isRead)

// const numA = 5;
// const numB = "5";

// console.log(numA == numB) // не сравнивает типы
// console.log(numA === numB)


// const userNumberInput = prompt("Enter Your number: ")

// if (userNumberInput === null) {
//     alert('Your cancel. See ya soon :)')
// } else if (userNumberInput.trim() === "") {
//     alert("Your answer is  empty")
// }
// else {
//     const userNumber = Number(userNumberInput)
//     if (isNaN(userNumber)) {
//         alert("Your answer is not a number")
//     }
//     else if (!Number.isInteger(userNumber)) {
//         alert("Your answer is not a integer number")
//     }
//     else if (userNumber < 0 || userNumber > 1000) {
//         alert("Ваше число должно быть от 0 до 1000.");

//     } else { alert(`Tnx, your number is ${userNumber}`) }
// }


// const a = { b: 10, c: false };
// const userInput = prompt("Введите значение");
// if (userInput > 100) { alert("ok"); }


// const userInput = prompt("Enter something: ")

// console.log(typeof (userInput))
// userInputNumb = Number(userInput)
// console.log(userInputNumb)
// console.log(typeof (userInputNumb))
// console.log(isNaN(userInputNumb))
// console.log(Number.isInteger(userInputNumb))

// const DIGITS_COUNTER = 3;
// const userInput = prompt(`Enter a whole ${DIGITS_COUNTER}-digit number: `)

// if (!userInput?.trim()) {
//     alert("Error: nothing is entered")
// }
// else if (!Number.isInteger(+userInput)) {
//     alert("Error: not a whole number")
// }
// else {
//     const userNum = +userInput;
//     const positiveUserNumStr = String(Math.abs(userNum));
//     if (positiveUserNumStr.length === DIGITS_COUNTER) {
//         const positiveUserNum = Math.abs(userNum);
//         const firstDigit = Math.floor(positiveUserNum / 100);
//         const secondDigit = Math.floor((positiveUserNum % 100) / 10);
//         const thirdDigit = positiveUserNum % 10;
//         if (firstDigit === secondDigit && secondDigit === thirdDigit) {
//             alert("All digits are the same")
//         } else if (firstDigit === secondDigit || firstDigit === thirdDigit || secondDigit === thirdDigit) {
//             alert("some of the numbers are similar")
//         } else {
//             alert("All digits are different");
//         }
//     }
//     else {
//         alert(`Error: enter a ${DIGITS_COUNTER}-digit number`)
//     }
// }


// const numbers = [3, 8, 1, 12, 5, 6];
// let positiveNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         positiveNumbers.push(numbers[i]);
//     }
// }

// console.log(positiveNumbers); // [8, 12, 6]

// const arr = [-2, 4, -1, 10, 0, -7, 3];
// let sumOfPositiveNumbers = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//         sumOfPositiveNumbers += arr[i]
//     }
// }

// console.log(sumOfPositiveNumbers);


// const words = ["apple", "banana", "kiwi", "pineapple", "grape"];
// let wordCount = [];

// for (let i = 0; i < words.length; i++) {
//     if (words[i].length > 5) {
//         wordCount.push(words[i])
//     }
// } console.log(wordCount)


// const nums = [10, 25, 8, 31, 7];
// let numsMax = nums[0]; // стартуем с первого элемента массива


// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > numsMax) {
//         numsMax = nums[i]
//     }
// } console.log(numsMax)

// let numbers = [5, -3, 12, 0, -7, 8];


// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//         numbers.splice(i, 1)
//         i--
//     }
// } console.log(numbers)

// const nums = [4, 9, 12, 18, 2];

// let numsValue = 0;

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 3 === 0 && nums[i] > 10) {
//         numsValue = nums[i]
//         break;
//     }
// } console.log(numsValue)



// const nums = [1, 2, 3, 4, 5];

// let newNums = [];

// for (let i = 0; i < nums.length; i++) {
//     counter = nums.pop();
//     newNums.push(counter)
//     i--

// }
// console.log(newNums)
// ------------
// while (nums.length > 0) {
//     const counter = nums.pop();
//     newNums.push(counter);
// }
// console.log(newNums)


// const numbers = [1, 3, 5, 3, 1, 7, 5, 9];

// let newNumbersArr = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (!newNumbersArr.includes(numbers[i])) {
//         newNumbersArr.push(numbers[i]);
//     }
// } console.log(newNumbersArr)


// const nested = [["hi", "there"], ["my", "name"], ["is", "ChatGPT"]];

// let newNested = []
// let c = [];

// for (let i = 0; i < nested.length; i++) {
//     newNested = newNested.concat(nested[i])


// } c = newNested.join(" ");
// console.log(c)

// Вивести в консоль числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5 ....)

// for (let i = 20; i <= 21.5; i = i + 0.5) {
//     console.log(i)
// }

// Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).

// const userNumInput = +prompt("Enter an integer");

// if (userNumInput <= 1) {
//     alert("It's not a prime number");
// } else {
//     let isPrime = true;
//     for (let i = 2; i < userNumInput; i++) {
//         if (userNumInput % i === 0) {
//             isPrime = false;
//             break; // Можно сразу выйти из цикла, если делитель найден
//         }
//     }
//     if (isPrime) {
//         alert("It's a prime number");
//     } else {
//         alert("It's not a prime number");
//     }
// }
// Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

// const dollarCoast = 26;

// for (let i = 10; i <= 100; i++) {
//     console.log(`${i}$ = ${i * dollarCoast} грн`)
// }



// Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

// const integerUserInput = prompt("Enter integer number")
// if (integerUserInput === null) {
//     alert(`You're canceled`);
// } else if (integerUserInput.trim() === '') {
//     alert('You entered empty numbers');
// } else if (isNaN(Number(integerUserInput))) {
//     alert(`It's must be a number`);
// }
// else {
//     const integerNum = +integerUserInput
//     if (integerNum < 0) {
//         alert("You need to enter positive number")
//     }
//     else if (!Number.isInteger(integerNum)) {
//         alert("You need to enter an integer")
//     } else {
//         for (let i = 1; i <= 100; i++) {
//             if (i ** 2 <= integerNum) {
//                 console.log(i)
//             }
//         }
//     }
// }

// Базовые циклы: for, while, do...while
// Задача 1. Сумма чисел от 1 до 100
// Напиши три версии одного и того же кода — используя for, while и do...while.
// Посчитай сумму всех чисел от 1 до 100.

// let sum = 0;
// for (i = 1; i <= 100; i++) {
//     sum += i
// }
// console.log(sum)

// let sum2 = 0;
// let n = 0;
// while (n <= 100) {
//     sum2 += n
//     n++;
// }
// console.log(sum2);

// let sum3 = 0;
// let k = 0;
// do {
//     sum3 += k;
//     k++;

// } while (k <= 100);
// console.log(sum3);

// Циклы for...in и for...of
// Задача 2. Работа с объектом
// У тебя есть объект:
// Выведи все ключи и значения объекта с помощью for...in.


// const user = {
//     name: "Alice",
//     age: 25,
//     country: "Ukraine"
// };

// for (let key in user) {
//     console.log(key, user[key]);
// }

// Задача 3. Список имён
// У тебя есть массив:
// Выведи каждое имя с помощью for...of. добавил ещё фильтрацию


// const names = ["Anna", "Bohdan", "Katya", "Dima", "Jan"];
// let nameFromNames = []
// let nameFromNamesForm3 = []

// for (let name of names) {
//     if (name.length > 4) {
//         nameFromNames.push(name)
//     }
//     else if (name.length < 4) {
//         nameFromNamesForm3.push(name)
//     }
//     else console.log(name)
// }

// console.log(nameFromNames)
// console.log(nameFromNamesForm3)

// Задача 4. Остановись на числе 7
// Массив:
// Пройди по массиву и выведи элементы до тех пор, пока не встретишь число 7. Как только встретишь — используй break.


// const numbers = [2, 4, 5, 7, 9, 12];
// let found = false
// for (let num of numbers) {
//     if (num === 7) {
//         found = true;
//         break
//     }
// } if (found) {
//     console.log("7 is found")
// } else console.log("7 is not found")


// Задача 5. Пропускаем чётные числа
// Массив:
// Выведи только нечётные числа, пропуская чётные с помощью continue.


// const numbers = [1, 2, 3, 4, 5, 6];

// for (numb of numbers) {
//     if (numb % 2 === 0) continue
//     console.log(numb)
// }

//  Вложенные циклы
// Задача 6. Таблица умножения 1–10
// Сделай вложенный цикл, который выведет все комбинации умножения от 1 до 3: сделал до 10

// 1 x 1 = 1
// 1 x 2 = 2
// ...
// 3 x 3 = 9

// for (let i = 1; i <= 10; i++) {
//     console.log(`\n=== Таблица на ${i} ===`);

//     for (let k = 1; k <= 10; k++) {
//         console.log(`${i} x ${k} = ${i * k}`)
//     }

// }

// function sayHi(name = '[noname]', isFormal) {
// 	console.log((isFormal ? "Hello" : "Hi") + " " + name)
// }

// sayHi("Roma");
// sayHi("");
// // sayHi();
// // sayHi(null);
// // sayHi("Romcha", true);
// const user = {
// 	firstName: "john",
// 	lastName: "Doe",
// 	age: 30,
// }

// function makeAdmin(user) {
// 	if (!user.role) {
// 		user.role = 'admin';
// 		return true;
// 	}
// 	return false;
// }

// // console.log(user)
// // console.log(user.role)
// // makeAdmin(user);
// // console.log(user)
// console.log(user.role)
// const result = makeAdmin(user)
// console.log(result)





// function calculateSumOfThreeDigitNumber() {
// 	const userNumberInput = prompt("Enter 3-digit number: ");
// 	const error = get3digitNumbervalidationError(userNumberInput);
// 	if (error) {
// 		alert(error);
// 		return;
// 	}
// 	const sum = getSumOf3DigitNumber(userNumberInput);
// 	alert("sum of digits is " + sum)
// }

// // calculateSumOfThreeDigitNumber();

// function get3digitNumbervalidationError(userNumberInput) {
// 	if (userNumberInput === null) {
// 		return "Ok, bye";

// 	}
// 	if (!userNumberInput.trim()) {
// 		return "Nothing entered";
// 	}
// 	if (!Number.isInteger(+userNumberInput)) {
// 		return "Not a whole number";
// 	}
// 	const numDigit = String(Math.abs(+userNumberInput));
// 	if (numDigit.length !== 3) {
// 		return "Not a 3-digit number";
// 	}
// }

// function getSumOf3DigitNumber(num) {
// 	const numDigit = String(Math.abs(+num));
// 	return Number(numDigit[0]) + Number(numDigit[1]) + Number(numDigit[2]);

// }

// function isXDigitNumber(strToCheck, digitCount) {
// 	if (!Number.isInteger(digitCount) || digitCount < 1) {
// 		return false;
// 	}

// 	if (!strToCheck?.trim() || !Number.isInteger(+strToCheck)) {
// 		return false;
// 	}
// 	const numDigit = String(Math.abs(+strToCheck));

// 	return numDigit.length === digitCount;
// }

// function are4DigitsSame(num) {
// 	const numDigit = String(Math.abs(+num));
// 	return numDigit[0] === numDigit[1] && numDigit[1] === numDigit[2] === numDigit[2] === numDigit[3];
// }
// function areDigitsSame(num) {
// 	const numDigit = String(Math.abs(+num));

// 	for (let i = 0; i < numDigit.length - 1; i++) {
// 		if (numDigit[i] !== numDigit[i + 1]) {
// 			return false;
// 		}
// 	}

// 	return true;
// // areSame=true
// i = 0 areSame = true
// && numDigit[0] === numDigit[1];i = 1 areSame = true
// && numDigit[0] === numDigit[1]
// && numDigit[1] === numDigit[2];
// i = 2  areSame = true && numDigit[0] === numDigit[1]
// && numDigit[1] === numDigit[2]
// && numDigit[2] === numDigit[3];
// comment

// return numDigit[0] === numDigit[1]
// 	&& numDigit[1] === numDigit[2]
// 	&& numDigit[2] === numDigit[3]
// 	&& numDigit[3] === numDigit[4];
// }

// function checkDigits() {
// 	const digitsCount = 5;
// 	const userNumberInput = prompt(`Enter ${digitsCount}-digit number: `);

// 	if (!isXDigitNumber(userNumberInput, digitsCount)) {
// 		alert(`Error not a ${digitsCount}-digit number`);
// 		return;
// 	}
// 	const areSame = areDigitsSame(userNumberInput);
// 	alert(`${+userNumberInput} Digits are${areSame ? "" : " not"} same`)
// }
// checkDigits()

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.
// function remove_chars(string, chars) {
// 	let result = '';
// 	for (let i = 0; i < string.length; i++) {
// 		if (chars.includes(string[i])) {
// 			continue;
// 		}
// 		else { result += string[i] }
// 	}
// 	return result
// }
// console.log(remove_chars('hello', 'h'))

// function remove_chars2(string, chars) {
// 	let result = '';
// 	for (let char of string) {
// 		if (!chars.includes(char)) result += char;
// 	}
// 	return result;
// }
// console.log(remove_chars2('hello', 'h'))



// Напиши функцию countNumbers(arr), которая считает количество числовых элементов в массиве (typeof === 'number' и не NaN).

// array = [10, true, false, undefined, 10, 100, NaN]

// function countNumbers(arr) {

// 	let counter = 0;
// 	for (let i = 0; i < arr.length; i++) {

// 		if (typeof arr[i] === 'number' && !Number.isNaN(arr[i])) {
// 			counter++
// 		}
// 	}
// 	return counter
// }

// console.log(countNumbers(array))


// Напиши функцию filterByType(arr, type), которая возвращает новый массив только с элементами указанного типа.


// const arr = [1, 'a', true, null, 5, false, 'b', undefined];


// function filterByType(arr, type) {
// 	let filtered = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (typeof arr[i] === type) {
// 			filtered.push(arr[i])
// 		}
// 	}
// 	return filtered
// }



// const onlyStrings = filterByType(arr, 'string'); // ['a', 'b']
// console.log(onlyStrings)



// Чётные числа в массиве
// Напиши функцию, которая принимает массив чисел и возвращает новый массив только с чётными числами.

// // const arr = [1, 2, 3, 4, 5, 6];
// // evenNumbers(arr); // [2, 4, 6]

// const arr2 = [1, 2, 3, 4, 5, 6];

// function evenNumbers(array) {
// 	const filtered = []
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] % 2 === 0 && typeof array[i] !== 'boolean') {
// 			filtered.push(array[i])
// 		}
// 	}
// 	return filtered
// }

// console.log(evenNumbers(arr2))

//  Фильтрация по длине строки
// Напиши функцию, которая принимает массив строк и число len. Возвращает только те строки, длина которых больше len и по первой букве.

// // const arr = ['hi', 'hello', 'sun', 'wonderful'];
// // filterByLength(arr, 3); // ['hello', 'wonderful']

// const arr = ['hi', 'hello', 'sun', 'wonderful'];

// function filterByLength(arr, lencounter, char) {
// 	let filtered = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i].length > lencounter && (!char || arr[i].charAt(0) === char)) {
// 			filtered.push(arr[i])
// 		}
// 	}
// 	return filtered
// }

// const arrfiltered = filterByLength(arr, 4); // ['hello', 'wonderful']
// console.log(arrfiltered)

// 3. Проверка, все ли элементы — числа
// Напиши функцию, которая возвращает true, если все элементы массива — числа, иначе false.


// // allNumbers([1, 2, 3]); // true
// // allNumbers([1, '2', 3]); // false

// function allNumbers(arr) {
// 	let isAllNumbers = true;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (typeof arr[i] !== 'number') {
// 			isAllNumbers = false;
// 		}
// 	}
// 	return isAllNumbers
// }
// console.log(allNumbers([1, 2, 3]));
// console.log(allNumbers([1, '2', 3]))



// 4. Сумма чисел в массиве любого типа
// Напиши функцию, которая считает сумму только числовых элементов в массиве любых типов.

// // Пример:
// // sumNumbers([1, 'hello', 2, false, 3]); // 6

// function sumNumbers(arr) {
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (typeof arr[i] === 'number' && arr[i] % 2 === 0 && arr[i] > 10) {
// 			sum += arr[i]
// 		}
// 	}
// 	return sum
// }

// console.log(sumNumbers([1, 'hello', 2, false, 3, 12, 20, 100]));


// 5. Удаление всех ложных значений
// Напиши функцию, которая возвращает новый массив без "ложных" значений (false, 0, '', null, undefined, NaN).

// // removeFalsy([1, 0, '', 'hello', null, 3, undefined, NaN]); // [1, 'hello', 3]

// function removeFalsy(arr) {
// 	let filtered = []
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i]) {
// 			filtered.push(arr[i])

// 		}
// 	}
// 	return filtered
// }

// console.log(removeFalsy([1, 0, '', 'hello', null, 3, undefined, NaN])); // [1, 'hello', 3])

// 6. Создай массив из квадратов
// Напиши функцию, которая принимает массив чисел и возвращает массив их квадратов.

// // squareArray([2, 3, 4]); // [4, 9, 16]

// function squareArray(arr) {
// 	let res = []
// 	for (let i = 0; i < arr.length; i++) {
// 		res.push(arr[i] ** 2)
// 	}
// 	return res
// }
// console.log(squareArray([2, 3, 4])); // [4, 9, 16])


//  Сумма положительных чисел
// Напиши функцию sumPositive(arr), которая возвращает сумму только положительных чисел из массива.

// sumPositive([2, -4, 5, 0, -1, 6]); // 13


// function sumPositive(arr) {
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {

// 		if (arr[i] > 0) {
// 			sum += arr[i]
// 		}
// 	}
// 	return sum
// }
// console.log(sumPositive([2, -4, 5, 0, -1, 6])); // 13)

// 2. Массив строк с заглавной буквы
// Функция capitalizeArray(arr) возвращает новый массив, где каждая строка начинается с большой буквы.


// capitalizeArray(['apple', 'orange', 'banana']); // ['Apple', 'Orange', 'Banana']

// function capitalizeArray(arr) {
// 	let res = []
// 	for (let i = 0; i < arr.length; i++) {
// 		res.push(arr[i][0].toUpperCase() + arr[i].slice(1))
// 	}
// 	return res
// }
// console.log(capitalizeArray(['apple', 'orange', 'banana'])); // ['Apple', 'Orange', 'Banana'])
// 3. Фильтрация по подстроке
// Функция filterIncludes(arr, substr) возвращает все строки массива, в которых есть подстрока substr(регистр не важен).


// filterIncludes(['Hello', 'world', 'sun', 'HELLO'], 'ell'); // ['Hello', 'HELLO']

// function filterIncludes(arr, substr) {
// 	console.log(arr[0].toLowerCase().indexOf(substr))
// 	let res = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i].toLowerCase().indexOf(substr.toLowerCase()) !== -1) {
// 			res.push(arr[i])
// 		}
// 	}
// 	return res
// }

// console.log(filterIncludes(['Hello', 'world', 'sun', 'HELLO'], 'ell'))

// 4. Количество уникальных значений
// Функция uniqueCount(arr) возвращает количество уникальных элементов в массиве.


// uniqueCount([1, 2, 2, 3, 4, 4, 4, 5]); // 5

// function uniqueCount(arr) {

// 	let counter = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]))
// 			counter++

// 	}
// 	return counter
// }

// console.log(uniqueCount([1, 2, 2, 3, 4, 4, 4, 5]));

/**Функции высшего порядка и колбэки
 * Задание:
 * Создай функцию calculate, которая принимает два числа и
 * функцию-операцию (callback).
 * Сделай отдельные функции для сложения, вычитания, умножения и
 * деления, и протестируй их вместе с calculate.
// Пример вызова:
calculate(10, 2, add);      // 12
calculate(10, 2, subtract); // 8
calculate(10, 2, multiply); // 20
calculate(10, 2, divide);   // 5*/


// function calculate(num, num2, operation) {
// 	return operation(num, num2)
// }

// function add(num1, num2) {
// 	return num1 + num2
// }
// function subtract(num1, num2) {
// 	return num1 - num2
// }
// function multiply(num1, num2) {
// 	return num1 * num2
// }
// function divide(num1, num2) {
// 	return num1 / num2
// }

// console.log(calculate(10, 2, add));      // 12
// calculate(10, 2, subtract); // 8
// calculate(10, 2, multiply); // 20
// calculate(10, 2, divide);   // 5*/


//  Чистые функции
// Задание:
// Напиши функцию doubleArray, которая принимает массив чисел и возвращает новый массив, где все элементы умножены на 2.
// Убедись, что исходный массив не изменился (чистая функция).
// arr = [1, 2, 3, 4]
// function doubleArray(arr) {
// 	let arrCopy = [...arr]
// 	arrCopy = arrCopy.map(function (num) {
// 		return num * 2
// 	})
// 	return arrCopy
// };


// console.log(doubleArray(arr))


// 4. Замыкания
// Задание:
// Создай функцию makeCounter, которая при каждом вызове увеличивает внутреннее число на 1 и возвращает его.

// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// counter(); // 3
// const counter = makeCounter();
// function makeCounter() {
// 	let count = 0;
// 	return function () {

// 		return ++count

// 	}
// }
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())

// Написати функцію, яка приймає 1 параметр. Та скадае значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

// console.log(sum(4)); // 4

// console.log(sum(6)); // 10

// console.log(sum(10)); // 20

// console.log(sum(7)); // 27

// const sum = makeSum();
// function makeSum() {
// 	let num = 0;
// 	return function (el) {
// 		num += el
// 		return num
// 	}
// }

// console.log(sum(4))
// console.log(sum(6))
// console.log(sum(7));


// (function () {
// 	console.log('Hello from IIFE!');
// })();

// const users = [
// 	{ name: 'Anna', age: 18, role: 'admin' },
// 	{ name: 'Boris', age: 25, role: 'user' },
// 	{ name: 'Clara', age: 20, role: 'user' },
// 	{ name: 'David', age: 23, role: 'admin' },
// ]
// const admins = users.filter(user => user.role === 'admin')
// console.log(admins)

// const userNames = users.map(user => user.name)
// console.log(userNames)

// const usersAge = users.reduce((acc, user) => acc + user.age, 0)
// console.log(usersAge)


// Используя map, получить массив имён.

// Используя reduce, посчитать суммарный возраст всех пользователей.

// Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:

// Copy code
// let ladder = {
//   up: function () { // підніматиме вас на одну сходинку
//   },
//   down: function () { // опускатиме вас на одну сходинку
//   },
//   showStep: function () { // показує поточну сходинку
//   }
// };
// Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:

// ladder.up();

// ladder.up();

// ladder.down();

// ladder.showStep(); // 1

// Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:

// ladder.up().up().down().showStep(); // 1

// Такий підхід широко використовується в бібліотеках JavaScript.

// let ladder = {
// 	step: 0,
// 	up: function () {
// 		this.step = this.step + 1
// 		return this// підніматиме вас на одну сходинку
// 	},
// 	down: function () {
// 		this.step = this.step - 1
// 		return this// опускатиме вас на одну сходинку
// 	},
// 	showStep: function () {
// 		console.log(this.step) // показує поточну сходинку
// 	}


// };
// ladder.up().up().down().showStep();



// function printArray(arr) {
// 	if (arr.length === 0) {
// 		return
// 	} else console.log(arr[0])
// 	printArray(arr.slice(1))
// }

// printArray(['a', 'b', 'c']);
// let company = {
// 	sales: [
// 		{ name: 'John', salary: 1000 },
// 		{ name: 'Alice', salary: 600 }
// 	],
// 	development: {
// 		web: [
// 			{ name: 'Peter', salary: 2000 },
// 			{ name: 'Alex', salary: 1800 }
// 		],
// 		internals: [
// 			{ name: 'Jack', salary: 1300 }
// 		]
// 	}
// };



// function sumSalaries(department) {
// 	if (Array.isArray(department)) {
// 		return department.reduce((acc, curr) => acc + curr.salary, 0);
// 	} else {
// 		return Object.values(department).reduce((acc, curr) => acc + sumSalaries(curr), 0);
// 	}

// }

// console.log(sumSalaries(company))

// const data = {
// 	a: 10,
// 	b: {
// 		c: 20,
// 		d: {
// 			e: 30,
// 			f: 40
// 		}
// 	},
// 	g: 50
// };
// function sumNumbers(obj) {
// 	if (typeof obj === 'number') {
// 		return obj
// 	} return Object.values(obj).reduce((acc, curr) => acc + sumNumbers(curr), 0);
// }


// console.log(sumNumbers(data))




// const data = {
// 	a: 10,
// 	b: {
// 		c: 20,
// 		d: {
// 			e: 30,
// 			f: "hello"
// 		},
// 		arr: [1, 2, { x: 5 }]
// 	},
// 	g: true
// };

// function countNumbers(obj) {
// 	if (typeof obj === 'number') {
// 		return 1;
// 	}
// 	// Если obj — не объект или null, то игнорируем
// 	if (typeof obj !== 'object' || obj === null) {
// 		return 0;
// 	}
// 	return Object.values(obj).reduce((acc, curr) => acc + countNumbers(curr), 0);
// }


// console.log(countNumbers(data)); // Должно вывести 5 (10, 20, 30, 1, 2, 5)



// // Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. Створіть метод об'єкту для отримання та відображення цих даних.

// const userData = {
// 	name: 'Jon',
// 	age: 35,
// 	cityOfLiving: "LA",

// 	showInfo() {
// 		return (`Your name is ${this.name}, your age is ${this.age}, your city is ${this.cityOfLiving}`)
// 	}
// }


// console.log(userData.showInfo())

// // Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву, в якому лише парні числа з оригінального масиву.

// const arr = [1, 2, 3, 4, 5]

// const filteredArr = arr.filter(function (number) {
// 	return number % 2 === 0;
// });

// console.log(filteredArr)


// const table = document.createElement('table');

// for (i = 0; i < 10; i++) {
// 	let tr = document.createElement('tr');
// 	table.appendChild(tr)
// 	for (n = 0; n < 10; n++) {
// 		let td = document.createElement('td');
// 		td.textContent = (i + 1) * (n + 1);
// 		tr.appendChild(td)
// 	}
// }
// table.classList.add('pifagor-table');
// document.body.appendChild(table);


// Є блок із текстом на сторінці та кнопка. При натисканні на кнопку текст змінює колір. При повторному натисканні – повертається попередній колір



// const button = document.querySelector('button')
// const text = document.querySelector('p')

// function buttonClicked() {
// 	text.classList.toggle('blue')
// }

// button.addEventListener('click', buttonClicked)


// const btnUserUrl = document.getElementById('btn1');
// const btnUserUrlForward = document.getElementById('btn2');
// let userUrl;

// function buttonClicked() {
// 	userUrl = prompt("Enter your url");
// 	if (userUrl) {
// 		userUrl = userUrl.trim();
// 		if (hasCyrillic(userUrl)) {
// 			alert("URL не должен содержать кириллицу!");
// 			userUrl = "";
// 			return;
// 		}
// 		if (!userUrl.toLowerCase().startsWith("http")) {
// 			userUrl = "https://" + userUrl;
// 		}
// 	}
// }

// function hasCyrillic(text) {
// 	return /[а-яёіїєґА-ЯЁІЇЄҐ]/.test(text);
// }


// btnUserUrl.addEventListener('click', buttonClicked)

// btnUserUrlForward.addEventListener('click', function () {
// 	window.location.href = userUrl;
// });

// ------------------
// const ddLiestItems = [
// 	'1 - the first',
// 	'2 - the second',
// 	'3 - the third'
// ]

// let currentItem = ddLiestItems[0];

// const ddEl = document.querySelector('.custom-dd')
// const ddValueEl = document.querySelector('.custom-dd-value')
// const ddListEl = document.querySelector('.custom-dd-list')

// const lisItemELs = ddLiestItems.map(item => {
// 	const itemEl = document.createElement('li');
// 	itemEl.textContent = item;
// 	return itemEl;
// });

// ddListEl.append(...lisItemELs);
// ddValueEl.textContent = currentItem;

// ddValueEl.addEventListener('click', e => {
// 	if (ddListEl.style.display) {
// 		ddListEl.style.display = ''
// 	}
// 	else {
// 		ddListEl.style.display = 'none'
// 	}
// })
// ddListEl.addEventListener('click', e => {
// 	if (e.target.nodeName !== 'LI') {
// 		return;
// 	}

// 	currentItem = e.target.textContent;
// 	ddValueEl.textContent = currentItem;
// 	ddListEl.style.display = 'none'

// })

// window.addEventListener('click', e => {
// 	const parent = e.target.closest('.custom-dd')
// 	if (!parent) {
// 		ddListEl.style.display = 'none'
// 	}
// })

// Створіть клас Calculator, який буде мати методи для виконання базових математичних операцій: додавання, віднімання, множення та ділення.

// class Calculator {

// 	add(a, b) {
// 		return a + b;
// 	}
// 	subtract(a, b) {
// 		return a - b;
// 	}
// 	multiply(a, b) {
// 		return a * b;
// 	}
// 	divide(a, b) {
// 		return a / b;
// 	}

// }

// const calc = new Calculator();

// console.log(calc.add(5, 3)); // 8

// console.log(calc.subtract(10, 4)); // 6

// console.log(calc.multiply(3, 6)); // 18

// console.log(calc.divide(8, 2)); // 4





// class Animal {
// 	constructor(name) {
// 		this.name = name;
// 	}

// 	speak() {
// 		console.log(`${this.name} видає звук`);
// 	}
// }

// class Cat extends Animal {
// 	speak() {
// 		console.log(`${this.name} говорит: Мяу!`);
// 	}
// }
// murka = new Cat("Мурка")
// murka.speak()


// class SafeBox {
// 	#code = '123'

// 	unlock(input) {
// 		if (input === this.#code) {
// 			console.log("Сейф відкрито!");
// 		} else {
// 			console.log("Невірний код.");
// 		}
// 	}
// }

// const box = new SafeBox();
// box.unlock("123"); // ?
// box.unlock("000"); // ?


// class BankAccount {
// 	#balance = 0;

// 	deposit(amount) {
// 		if (amount > 0) {
// 			this.#balance += amount;
// 		} else {
// 			console.log("Сума має бути більше нуля.");
// 		}
// 	}
// 	withdraw(amount) {
// 		if (amount <= this.#balance) {
// 			this.#balance -= amount;
// 		} else {
// 			console.log("Недостатньо коштів на рахунку");
// 		}
// 	}
// 	get balance() {
// 		return this.#balance;
// 	}
// }
// const acc = new BankAccount();
// acc.deposit(-1);
// console.log(acc.balance);


// class PasswordProtectedSafe {
// 	#password;

// 	constructor(pass) {
// 		this.#password = pass;
// 	}
// 	open(inputPassword) {
// 		if (inputPassword === this.#password) {
// 			console.log("Сейф відкрито!")
// 		} else {
// 			console.log("Доступ заборонено")
// 		}
// 	}
// 	changePassword(oldPass, newPass) {
// 		if (oldPass === this.#password) {
// 			this.#password = newPass
// 		}
// 	}
// }

// const safe = new PasswordProtectedSafe("1234");

// safe.open("0000"); // ❌
// safe.open("1234"); // ✅

// safe.changePassword("0000", "5678"); // ❌
// safe.changePassword("1234", "5678"); // ✅

// safe.open("5678"); // ✅


// const pet = { name: "Ricci", type: 'parot' };
// localStorage.setItem("pet", JSON.stringify(pet)); // сохраняем

// const raw = localStorage.getItem("pet");
// const parsedPet = JSON.parse(raw); // обратно в объект

// console.log(parsedPet.name); // "Ricci"


// Сохрани в sessionStorage объект userSession, с полями email и isLoggedIn

// Получи его обратно

// Выведи isLoggedIn в консоль

// const userSession = { email: 'jay4or@gmail.com', isLoggedIn: true }

// sessionStorage.setItem('userSession', JSON.stringify(userSession))


// const locSessiom = sessionStorage.getItem("userSession");
// const parsedSession = JSON.parse(locSessiom); // обратно в объект

// console.log(parsedSession.isLoggedIn)



// const date = new Date();
// date.setDate(date.getDate() + 2); // +2 дня
// document.cookie = `language=uk; expires=${date.toUTCString()}; path=/`;

// function getCookieSimple(name) {
// 	// "language=uk; theme=dark"
// 	const cookies = document.cookie.split('; ');
// 	for (let cookie of cookies) {
// 		const [key, value] = cookie.split('=');
// 		if (key === name) return value;
// 	}
// 	return undefined;
// }


// console.log(getCookieSimple("language")); // "uk"

let secretNumber = Math.floor(Math.random() * 20) + 1;
const messageBlock = document.querySelector('#message')
const checkBtn = document.querySelector('#checkBtn');
const restartBtn = document.querySelector('#restartBtn');
const recordDiv = document.querySelector('#best');
const historyDiv = document.querySelector('#history');
const timerDiv = document.querySelector('#timer');
const guessInput = document.querySelector('#guessInput');
const themeBtn = document.querySelector('#themeToggle');
let attempts = 5;
let tries = [];
let secondsLeft = 20;
let timerInterval;
let idleTimer;

// ——— PROMISE CONFIRM ———
function confirmPromise(message) {
	return new Promise(resolve => {
		const result = window.confirm(message);
		resolve(result);
	});
}

// ——— ТИКЕР (Уменьшает секунды) ———
function tickTimer() {
	secondsLeft--;
	timerDiv.textContent = `Залишилось часу для відповіді: ${secondsLeft}`;
	if (secondsLeft <= 0) {
		clearInterval(timerInterval);
		// Таймер сам ничего не делает — дальше всё через setTimeout (см. resetIdleTimer)
	}
}

// ——— RESET IDLE TIMER ———
async function resetIdleTimer() {
	secondsLeft = 20; // сколько секунд до сброса (можешь изменить)
	timerDiv.textContent = `Залишилось часу для відповіді: ${secondsLeft}`;

	clearInterval(timerInterval); // Остановить прошлый
	timerInterval = setInterval(tickTimer, 1000); // Новый тикер

	if (idleTimer) clearTimeout(idleTimer);
	idleTimer = setTimeout(async () => {
		clearInterval(timerInterval); // Остановить таймер
		const restart = await confirmPromise("Хочете почати гру знову?");
		if (restart) {
			restartBtn.click();
		} else {
			messageBlock.textContent = "Гру завершено через неактивність.";
			messageBlock.className = "hint";
			checkBtn.disabled = true;
			guessInput.disabled = true;
			restartBtn.style.display = 'block';
			tries = [];
			historyDiv.textContent = "Ви пробували: ";
		}
	}, secondsLeft * 1000);
}

// ——— ТЕМА ———
themeBtn.addEventListener('click', function () {
	document.body.classList.toggle('light');
	if (themeBtn.textContent === 'Teмна тема') {
		themeBtn.textContent = 'Світла тема';
	} else {
		themeBtn.textContent = 'Teмна тема';
	}
});

// ——— BEST SCORE ———
const bestScoreLocal = Number(localStorage.getItem('bestScore'));
if (bestScoreLocal) {
	recordDiv.innerHTML = `Ваш рекорд: ${bestScoreLocal} спроб`;
} else {
	recordDiv.innerHTML = "Рекорд ще не встановлено";
}

// ——— КНОПКА ПРОВЕРИТЬ ———
checkBtn.addEventListener('click', function () {
	resetIdleTimer();
	const inputNumb = +guessInput.value;
	if (!inputNumb) return; // не добавлять пустые значения

	tries.push(inputNumb);
	historyDiv.textContent = "Ви пробували: " + tries.join(', ');
	attempts--;

	if (!attempts) {
		messageBlock.textContent = `Усі спроби вичерпано, загадане число було ${secretNumber}`;
		checkBtn.disabled = true;
		guessInput.disabled = true;
		checkBtn.style.cursor = "default";
		restartBtn.style.display = 'block';
		messageBlock.className = "hint";
		return
	}
	if (inputNumb < 1 || inputNumb > 20) {
		messageBlock.textContent = `Число має бути від 1 до 20, залишилось спроб = ${attempts}`;
		messageBlock.className = "hint";
		return;
	}

	if (secretNumber === inputNumb) {
		const usedAttempts = 5 - attempts;
		messageBlock.textContent = `Вітаю! Ви вгадали число за ${usedAttempts} спроб!`;
		messageBlock.className = "success";

		if (!bestScoreLocal || usedAttempts < bestScoreLocal) {
			localStorage.setItem('bestScore', usedAttempts);
			recordDiv.innerHTML = `Ваш рекорд: ${usedAttempts} спроб`;
		}
		checkBtn.disabled = true;
		guessInput.disabled = true;
		restartBtn.style.display = 'block';
	} else if (secretNumber > inputNumb) {
		messageBlock.textContent = `Загадане число більше, залишилось спроб = ${attempts}`;
		messageBlock.className = "error";
	} else {
		messageBlock.textContent = `Загадане число менше, залишилось спроб = ${attempts}`;
		messageBlock.className = "error";
	}
	guessInput.value = "";
});

// ——— КНОПКА RESTART ———
restartBtn.addEventListener('click', function () {
	resetIdleTimer();
	secretNumber = Math.floor(Math.random() * 20) + 1;
	attempts = 5;
	tries = [];
	historyDiv.textContent = "Ви пробували: ";
	checkBtn.disabled = false;
	guessInput.disabled = false;
	checkBtn.style.cursor = "pointer";
	restartBtn.style.display = 'none';
	guessInput.value = "";
	messageBlock.textContent = '';
});

// ——— ENTER в ИНПУТЕ ———
guessInput.addEventListener('keydown', function (event) {
	if (event.key === 'Enter') {
		event.preventDefault();
		checkBtn.click();
	}
});

// ——— СТАРТ ———
resetIdleTimer();
