
// Lab 2.1
// const events = [

//     [10, 'Halland Ghi bàn cho đội chủ nhà'],
//     [23, 'Thay người cho đội khách'],
//     [35, 'Nhận thẻ vàng cho đội chủ nhà'],
//     [40, 'Ghi bàn cho đội khách'],
//     [55, 'Nhận thẻ đỏ cho đội khách'],
//     [64, 'YELLOW CARD'],
//     [75, 'Thay người cho đội chủ nhà'],
//     [85, 'Ghi bàn cho đội chủ nhà']

// ]

// // 1. Tạo mảng các sự kiện khác nhau trong trận đấu
// const uniqueEvents = [...new Set(events.map(event => event[1]))];

// // 2. Xóa sự kiện thẻ vàng phút 64 khỏi danh sách sự kiện
// const filteredEvents = events.filter(event => event[0] !== 64);

// // 3. In ra console số lượng sự kiện và trung bình mỗi 9 phút
// const eventCount = events.length;
// const averagePerMinute = eventCount / 90;
// console.log(`${eventCount} sự kiện xảy ra, trung bình mỗi ${averagePerMinute.toFixed(1)} phút`);

// // 4. Lặp qua toàn bộ mảng sự kiện và in ra màn hình với đánh dấu hiệp 1 hoặc hiệp 2
// filteredEvents.forEach(event => {
//     const minute = event[0];
//     const action = event[1];
//     const half = minute <= 45 ? "[FIRST HALF]" : "[SECOND HALF]";
//     console.log(`${half} ${minute}: ${action}`);
// });

// Lab 2.2

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');

    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');
        // console.log(row, first, second);
        const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
})

// lab 2.3
// const flights =
 
// '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// // � Delayed Departure from FAO to TXL (11h25)
// // Arrival from BRU to FAO (11h45)
// // � Delayed Arrival from HEL to FAO (12h05)
// // Departure from FAO to LIS (12h30)
// const getCode = str => str.slice(0, 3).toUpperCase();
// for (const flight of flights.split('+')) {
//  const [type, from, to, time] = flight.split(';');
//  const output = `${type.startsWith('_Delayed') ? '�' : ''}${type.replaceAll(
//  '_',
//  ' '
//  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
//  console.log(output);
// }


// lab2.4
// (function () {
//     const header = document.querySelector('h1');
//     header.style.color = 'red';
//     document.querySelector('body').addEventListener('click', function () { 
//             // addEventListener thiết lập các hàm được gọi khi một sự kiện cụ thể xảy ra, 
//             //chẳng hạn như khi người dùng nhấp vào một nút. 
//             // Hướng dẫn này chỉ cho bạn cách bạn có thể triển khai addEventListener() trong mã của mình.
    
//         header.style.color = 'blue';
//     });
// })();