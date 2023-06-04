// // // câu 1
// const player1 = ['Ederson', 'Erling Haaland', 'Ake Nathan', 'Dias Ruben', 'Galvez Tomas'];
// const player2 = ['peter cech', 'ronaldo', 'messi', 'neymar', 'ramos', 'văn nam']

// // // câu 2

// let gk = 'Ederson';
// const fieldPlayers = [
//   gk, 
//   'Lewandowski',
//   'Neuer',
//   'Muller',
//   'Boateng',
//   'Alaba',
//   'Kimmich',
//   'Gnabry',
//   'Davies',
//   'Sule',
//   'Goretzka',
//   'Coman',
// ]


// // // câu 3
// const allPlayers = [
//   'Player 1',
//   'Player 2',
//   'Player 3',
//   'Player 4',
//   'Player 5',
//   'Player 6',
//   'Player 7',
//   'Player 8',
//   'Player 9',
//   'Player 10',
//   'Player 11',
//   'Player 12',
//   'Player 13',
//   'Player 14',
//   'Player 15',
//   'Player 16',
//   'Player 17',
//   'Player 18',
//   'Player 19',
//   'Player 20',
//   'Player 21',
//   'Player 22'
// ];

// // // Câu 4
// // // Mảng ban đầu chứa các cầu thủ Bayern Munich
// const players1 = [
//   'Lewandowski',
//   'Neuer',
//   'Muller',
//   'Boateng',
//   'Alaba',
//   'Kimmich',
//   'Gnabry',
//   'Davies',
//   'Sule',
//   'Goretzka',
//   'Coman',
// ];

// // // Tạo mảng mới chứa các cầu thủ ban đầu và các cầu thủ vào thay người
// const players1Final = [
//   ...players1,  // Sử dụng toán tử 'spread' để thêm các phần tử từ mảng cũ
//   'Thiago',
//   'Coutinho',
//   'Perisic'
// ];

// // // In ra kết quả:
// console.log(players1Final);

// // // Câu 5
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borussia Dortmund',
//   players: [
//     'Neuer',
//     'Pavard',
//     'Martinez',
//     'Alaba',
//     'Davies',
//     'Kimmich',
//     'Goretzka',
//     'Coman',
//     'Muller',
//     'Gnarby',
//     'Lewandowski'
//   ],
//   score: '4:0',
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5
//   }
// };
// // // Tạo biến thể hiện tỉ lệ kết quả trận đấu
// const { team1, x: draw, team2 } = game.odds;

// // // In ra kết quả
// console.log(team1, draw, team2); // 1.33 3.25 6.5

// // // câu 6
// function printGoals(...players) {
//   players.forEach((player) => {
//     console.log(`${player.name} đã ghi được ${player.goals} bàn`);
//   });
// }


// const players = [
//   { name: 'Ronaldo', goals: 30 },
//   { name: 'Messi', goals: 28 },
//   { name: 'Neymar', goals: 20 }
// ];

// printGoals(...players);

// // câu 7 
// const teams = [
//   { name: 'Real Madrid', handicap: -1 },
//   { name: 'Barcelona', handicap: 0 }
// ];
// const scores = { team1: 3, team2: 2 };

// function getWinner(teams, scores) {
//   const [team1, team2] = Object.values(scores);
//   const winner = teams.reduce((acc, cur) => acc + cur.handicap - team1 < cur.handicap - team2 ? cur : acc);
//   return winner.name;
// }

// console.log(getWinner(teams, scores)); // 'Barcelona'

// lap1.2
// câu 1: Lặp mảng game.scored array và in ra cầu thủ cùng với số bàn thắng đã ghi

const game1 = [
    { playerName: 'Ronaldo', goals: 30 },
    { playerName: 'Messi', goals: 28 },
    { playerName: 'Neymar', goals: 20 }
]
for(let i = 0; i < game1.length; i++){
  console.log(game1[i].playerName + " đã ghi được " + game1[i].goals + " bàn ");
}

// câu 2
const results = ["win", "lose", "draw"]; // Mảng kết quả trận đấu
const wins = 2; // Số trận thắng
const loses = 1; // Số trận thua
const draws = 2; // Số trận hòa

let totalMatches = 0; // Tổng số trận đấu
for (let i = 0; i < results.length; i++) {
  totalMatches += i === 0 ? wins : i === 1 ? loses : draws;
}

const winRate = ((wins / totalMatches) * 100).toFixed(2); // Tỉ lệ thắng
const loseRate = ((loses / totalMatches) * 100).toFixed(2); // Tỉ lệ thua
const drawRate = ((draws / totalMatches) * 100).toFixed(2); // Tỉ lệ hòa

console.log(`Tỉ lệ thắng: ${winRate}%`);
console.log(`Tỉ lệ thua: ${loseRate}%`);
console.log(`Tỉ lệ hòa: ${drawRate}%`);
