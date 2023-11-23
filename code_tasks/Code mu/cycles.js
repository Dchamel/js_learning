// №1 ⊗jsPmLpPrm Выведите с помощью цикла столбец чисел от 1 до 100.
for (let i=0; i<=100; i++ ) {
    console.log(i)
}

// №2 ⊗jsPmLpPrm Выведите с помощью цикла столбец чисел от 100 до 1
let i = 100
while (i > 0) {
    console.log(i)
    i--
}

// №3 ⊗jsPmLpPrm Выведите с помощью цикла столбец четных чисел от 1 до 100.
for (let i=1; i <=100; i++) {
    i%2==0 ? console.log(i) : void 0
}

// №4 ⊗jsPmLpPrm Заполните массив 10-ю иксами с помощью цикла.
let arr = []
for (let i = 0; i <= 10; i++) {
    arr.push('X')
}
console.log(arr)

// №5 ⊗jsPmLpPrm Заполните массив числами от 1 до 10 с помощью цикла.
let arr = []
for (let i = 1; i <= 10; i++) {
    arr.push(i)
}
console.log(arr)

// № 6 Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
let arr = [9, 1, 29, -39, 49, 59];
for (let i=0; i < arr.length; i++) {
    if (arr[i] < 0) {
        continue;
    }
    else console.log(arr[i])
}

// № 7 Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
let arr = [8, 15, 9, 5, 105];
for (let i = 0; i < arr.length; i++) {
    arr[i] == 5 ? console.log('True') : null
}

// № 8 Дан массив с числами. С помощью цикла найдите сумму элементов этого массива
let arr = [1, 2, 3, 5, 4];
let q = 0;
for (let i = 0; i < arr.length; i++) {
    q += arr[i]
}
console.log(q)

// № 9 Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
let arr = [10, 20, 30, -50, 4.5];
q = 0
for (let i = 0; i < arr.length; i++) {
    q += Math.pow(arr[i],2);
}
console.log(q)

// № 10 Дан массив с числами. Найдите среднее арифметическое его элементов.
let arr = [11, 55, 100, -30];
q = 0
for (let i = 0; i < arr.length; i++) {
    q += arr[i];
}
q = q / arr.length
console.log(q)

// № 11 Напишите скрипт, который будет находить факториал числа. Факториал - это произведение всех целых чисел от единицы до заданного числа.
let i = 5
q = 1;
for (let j = 1; j <= 5; j++) {
    q = q * j;
}
console.log(q)

// № 12 Заполните массив числами от 10 до 1 с помощью цикла.
arr = []
for (let i = 10; i > 0; i-- ) {
    arr.push(i);
}
console.log(arr)

// № 13 Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
let arr = [0, -8, 10, 11, -3];
let q = 0;
for (let i = 0; i < arr.length ; i++) {
    if (arr[i] >= 0) {
        q += arr[i]
    }
}
console.log(q)

// № 14 Дан массив числами.Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5
let arr = [10, 20, 30, 50, 235, 3000];
let arr2 = [1,2,5]
for (let i = 0; i < arr.length ; i++) {
    if ( arr2.some( arr2el => String(arr[i]).startsWith(arr2el)) ) {
        console.log(arr[i]);
    };
}

// № 15 Дан массив с числами. Выведите элементы этого массива в обратном порядке
let arr = [1, 5, 7, 9, 15];
for (let i = arr.length-1; i >= 0; i--) {
    console.log(arr[i]);
}

// № 16 Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.
let arr = [9, 1, 29, -39, 4, 49, 59];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
        console.log(arr[i])
    }
}

// № 17 Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. Используйте для этого тег br.
let arr = [0, 100, 1000, 10001];
for (let i = 0; i < arr.length; i++) {
    arr[i];
    document.write('<br>');
}

// № 18 Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце.
let arr = [9, 19, 29, -39, 49, 59];
for (let i = 0; i < arr.length; i++) {
    document.write(`<p> ${arr[i]} </p>`)
}

// № 19 Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
let days = ['Пн', 'Вт', 'Ср', 'Чт', 'Птн', 'Сб', 'Вс']
for (let i = 0; i < days.length; i++) {
    if (days[i] == 'Сб' || days[i] == 'Вс') {
        document.write(`<b> ${days[i]} </b>`)
    }
    else document.write(`${days[i]} `)
}

// № 20 Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Номер текущего дня должен храниться в переменной day.
let days = ['Пн', 'Вт', 'Ср', 'Чт', 'Птн', 'Сб', 'Вс'];
let day = 'Чт';
for (let i = 0; i < days.length ; i++) {
    if (day == days[i]) {
        document.write(`<i>${days[i]} </i>`)
    }
     else document.write(`${days[i]} `)
}

// № 21 Дан следующий объект с работниками и их зарплатами.Увеличьте зарплату каждого работника на 10%.
let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};

for (const objKey in obj) {
    obj[objKey] = Math.round(obj[objKey] * 1.1)
}

console.log(obj)

// № 22 Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.
let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};

for (const objKey in obj) {
    if (obj[objKey] <= 400) {
        obj[objKey] = Math.round(obj[objKey] * 1.1)
    }
    else break;
}

console.log(obj)

// № 23  С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let obj = {}
for (let i = 0; i < arr1.length ; i++) {
    obj[arr1[i]] = arr2[i]
}
console.log(obj)

// № 24 Найдите сумму ключей этого объекта и поделите ее на сумму значений.
let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let keysum = 0,
    valsum = 0;

for (const objKey in obj) {
    keysum += objKey;
    valsum += obj[objKey];
}
console.log(keysum/valsum)

// № 25 Запишите ключи этого объекта в один массив, а значения - в другой.
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let arr1 = [], arr2 = [];

for (const objKey in obj) {
    arr1.push(objKey)
    arr2.push(obj[objKey])
}
console.log(arr1, arr2)

// № 26 Дан следующий объект.Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. То есть у вас в результате получится вот такой массив:
// //[    125,
// //     225,
// //     128,
// //     145,
// //     281,
// //];
let obj = {
    1: 125,
    2: 225,
    3: 128,
    4: 356,
    5: 145,
    6: 281,
    7: 452,
};
let arr =[]
for (const objKey in obj) {
    if (String(obj[objKey]).startsWith('1') || String(obj[objKey]).startsWith('2')) {
        arr.push(obj[objKey])
    }
}
console.log(arr)

// № 27 Дан следующий массив.Создайте из этого массива следующий объект:
// {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};
let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {}
for (let i = 0; i < arr.length; i++) {

}

// № 28 Дан следующий массив:let arr = ['a', 'b', 'c', 'd', 'e']; Создайте из этого массива следующий объект:
// {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let arr = ['a', 'b', 'c', 'd', 'e']
let obj = {}
for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i + 1
}
console.log(obj)