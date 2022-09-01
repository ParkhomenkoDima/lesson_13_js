console.log('Sample JavaScript #1 HW #13');

/*
 * #1
 *
 * Создайте переменные со значениями
 */

// имя переменной: myNum, значение: 10
var myNum = 10;
// имя переменной: myStr, значение: 'строка'
var myStr = 'строка';
// имя переменной: myBool, значение: true
var myBool = true;
// имя переменной: myArr, значения: 1, 2, 3, 4, 5
var myArr = [1, 2, 3, 4, 5];
// имя переменной myObj, значения: first: 'First Name', last: 'Last Name'
var myObj = {
    first: 'First Name',
    last: 'Last Name'
}

console.log('--------------------------');
console.log('myNum = ', myNum);
console.log('myStr = ', myStr);
console.log('myBool = ', myBool);
console.log('myArr =', myArr);
console.log('myObj =', myObj);

/*
 * #2
 *
 * Отформатируйте целое число, которое хранится в переменной myNum,
 * чтобы получить результат с 2 знаками после запятой.
 * Результат сохраните в переменную decimal2.
 */
var decimal2 = myNum.toFixed(2);
console.log('--------------------------');
console.log('decimal2 = ', decimal2);
// decimal2

/*
 * #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */
var i = 0;
console.log('--------------------------');
console.log('i = ', i);
console.log('++i = ', ++i);
console.log('++i = ', ++i);
console.log('++i = ', ++i);
console.log('++i = ', ++i);
console.log('++i = ', ++i);
console.log('--i = ', --i);
console.log('--i = ', --i);
console.log('--i = ', --i);
console.log('--i = ', --i);
console.log('--i = ', --i);
console.log('i = ', i);
console.log('--------------------------');
console.log('i = ', i);
console.log('i++ = ', i++);
console.log('i++ = ', i++);
console.log('i++ = ', i++);
console.log('i++ = ', i++);
console.log('i++ = ', i++);
console.log('i-- = ', i--);
console.log('i-- = ', i--);
console.log('i-- = ', i--);
console.log('i-- = ', i--);
console.log('i-- = ', i--);
console.log('i = ', i);
// i

/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */

// myTest
var myTest = 20;
var x = 7;
// +=
console.log('--------------------------');
console.log('myTest = ', myTest);
myTest += x;
console.log('myTest +=' , x, ' = ', myTest);
// –=
console.log('--------------------------');
console.log('myTest = ', myTest);
myTest -= x;
console.log('myTest –=' , x, ' = ', myTest);
// *=
console.log('--------------------------');
console.log('myTest = ', myTest);
myTest *= x;
console.log('myTest *= ', x, ' = ', myTest);
// /=
console.log('--------------------------');
console.log('myTest = ', myTest);
myTest /= x;
console.log('myTest /= ', x, ' = ', myTest);
// %=
console.log('--------------------------');
console.log('myTest = ', myTest);
myTest %= x;
console.log('myTest %= ', x, ' = ', myTest);
/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */

// константа Pi → myPi
var myPi = Math.PI;
console.log('--------------------------');
console.log('myPi = ', myPi);
// округленное значение числа 89.279 → myRound
var myRound = Math.round(89.279);
console.log('--------------------------');
console.log('round(89.279):');
console.log('myRound = ', myRound);
// случайное число между 0..10 → myRandom
var myRandom = Math.random() * 10;
console.log('--------------------------');
console.log('myRandom = ', myRandom);
// 3 в 5 степени → myPow
var myPow = Math.pow(3, 5);
console.log('--------------------------');
console.log('3 в 5 степени:');
console.log('myPow = ', myPow);
/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */

// Мама мыла раму, рама мыла маму

// strObj
var strObj = {
    str: 'Мама мыла раму, рама мыла маму',
    length: null
}
strObj.length = strObj.str.length;
console.log('--------------------------');
console.log('strObj = ', strObj);

/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */

// isRamaPos
var isRamaPos = false;
const searchString = 'рама';


// *************************************************
// ПРЕДПОЛАГАЛ ЧТО ТУТ НУЖЕН ЛОГИЧЕСКИЙ РЕЗУЛЬТАТ
// if (strObj.str.indexOf(searchString) > -1) {
//     isRamaPos = true;
// }
// *************************************************

isRamaPos = strObj.str.indexOf(searchString);

console.log('--------------------------');
console.log('isRamaPos = ', isRamaPos);

/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace
var strReplace;
const stringForReplace = 'Мама моет раму, Рама держит маму';

console.log('--------------------------');
console.log('Original string:', strObj.str);

strReplace = strObj.str.replace(strObj.str, stringForReplace);

console.log('New string (strReplace):', strReplace);
/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */

console.log('--------------------------');
console.log('Original string:', strObj.str);
console.log('toUpperCase:', strObj.str.toUpperCase());
console.log('toLowerCase:', strObj.str.toLowerCase());