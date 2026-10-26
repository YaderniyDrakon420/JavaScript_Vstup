//1.Напишіть функцію зведення числа у ступінь.
// function number_to_power(number,degree)
// {
//     if (degree == 0) return 1;
//     return number * number_to_power(number, degree - 1);
// }
// console.log(number_to_power(2,3));

//2.Напишіть функцію пошуку найбільшого спільного дільника.
// function greatest_common_divisor (a,b)
// {
//     let remainder = a % b;
//     if (remainder == 0) return b;
//     return greatest_common_divisor (b,remainder);
// }
// console.log(greatest_common_divisor(48,18))

//4.Напишіть функцію, яка визначає чи є передане число простим.
function is_number_prime(number) {
    if (number <= 1) {
        console.log("Число не просте");
        return;
    }

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            console.log("Число не просте");
            return;
        }
    }

    console.log("Число просте");
}

is_number_prime(7);
is_number_prime(8);
is_number_prime(25);