// module.exports = function solveSudoku(matrix) {
  
//     //fill candidates list for each empty cell
//     let cellCandidates = new Map();
//     let arrOfDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
//     for(let i = 0; i < matrix.length; i++) {
//       for(let j = 0; j < matrix[0].length; j++) {
//         if(matrix[i][j] == 0) {
//           let candidates = new Set(arrOfDigits);
  
//           //check occupied values at that row
//           matrix[i].forEach(digit => {
//             candidates.delete(digit);
//           });
  
//           //check occupied values at that column
//           for(let k = 0; k < matrix.length; k++) {
//             candidates.delete(matrix[k][j]);
//           }
  
//           //check occupied values at that square
//           let squareRow = Math.floor(i / 3) * 3;
//           let squareCol = Math.floor(j / 3) * 3;
//           for(let r = squareRow; r < squareRow + 3; r++) {
//             for(let c = squareCol; c < squareCol + 3; c++) {
//               candidates.delete(matrix[r][c]);
//             }
//           }
          
//           cellCandidates.set([i, j], candidates);
//         }
//       }
//     }
  
//     console.log(cellCandidates);
//     console.log(cellCandidates.size);
  
  
  
  //   //finding unique elements and fill the matrix
  
  //   //while(cellCandidates.size != 0) {
  //   for(let m = 0; m < 10; m++) {
  
  //     cellCandidates.forEach((value, key, map) => {
  //       if(value.size == 1) {
  //         let singleElement;
  //         value.forEach(elem => {
  //           singleElement = elem;
  //         });
  //         console.log(singleElement);
  //         matrix[key[0]][key[1]] = singleElement;
  //         cellCandidates.delete(key);
  //         //delete element as a candidate from that row's cells
  //         cellCandidates.forEach((value2, key2, map2) => {
  //           if(key2[0] == key[0]) {
  //             if(value2.has(singleElement)) {
  //               console.log(`ROW CELL HAS VALUE ${key2}`);
  //               value2.delete(singleElement);
  //             }
  //           }
  //         });
  //         //delete element as a candidate from that column's cells
  //         cellCandidates.forEach((value3, key3, map3) => {
  //           if(key3[1] == key[1]) {
  //             if(value3.has(singleElement)) {
  //               console.log(`COLUMN CELL HAS VALUE ${key3}`);
  //               value3.delete(singleElement);
  //             }
  //           }
  //         });
  //         //delete element as a candidate from that square's cells
  //         let foundSquare = false;
  //         while(!foundSquare) {
  //           arrOfSquares.forEach(square => {
  //             square.forEach(cell => {
  //               if(cell[0] == key[0] && cell[1] == key[1]) {
  //                 foundSquare = true;
  //                 square.forEach(cell2 => {
  //                   cellCandidates.forEach((value4, key4, map4) => {
  //                     if(key4[0] == cell2[0] && key4[1] == cell2[1]) {
  //                       if(value4.has(singleElement)) {
  //                         console.log(`SQUARE CELL HAS VALUE ${key4}`);
  //                         value4.delete(singleElement);
  //                       }
  //                     }
  //                   });
  //                 });
  //               }
  //             });
  //           });
  //         }
  //       }
  //     });
  
  //     console.log(cellCandidates);
  //     console.log(cellCandidates.size);
  
  //   for(let i = 0; i < matrix.length; i++) {
  //     let tempArr = [], uniqueElemsArr = [];
  //     cellCandidates.forEach((value, key, map) => {
  //       if(key[0] == i) {
  //         tempArr.push(...value);
  //       }
  //     });
  //     tempArr.forEach(element => {
  //       if(tempArr.indexOf(element) == tempArr.lastIndexOf(element)) {
  //         uniqueElemsArr.push(element);
  //       }
  //     });
  //     if(uniqueElemsArr.length != 0) {
  //       cellCandidates.forEach((value, key, map) => {
  //         if(key[0] == i) {
  //           uniqueElemsArr.forEach(element => {
  //             if(value.has(element)) {
  //               matrix[i][key[1]] = element;
  //                 console.log(`${i}:${key[1]}`);
  //                 cellCandidates.delete(key);
  //                 //delete element as a candidate from that column's cells
  //                 cellCandidates.forEach((value2, key2, map2) => {
  //                   if(key2[1] == key[1]) {
  //                     if(value2.has(element)) {
  //                       console.log(`COLUMN CELL HAS VALUE ${key2}`);
  //                       value2.delete(element);
  //                     }
  //                   }
  //                 });
  //                 //delete element as a candidate from that square's cells
  //                 let foundSquare = false;
  //                 while(!foundSquare) {
  //                   arrOfSquares.forEach(square => {
  //                     square.forEach(cell => {
  //                       if(cell[0] == i && cell[1] == key[1]) {
  //                         foundSquare = true;
  //                         square.forEach(cell2 => {
  //                           cellCandidates.forEach((value3, key3, map3) => {
  //                             if(key3[0] == cell2[0] && key3[1] == cell2[1]) {
  //                               if(value3.has(element)) {
  //                                 console.log(`SQUARE CELL HAS VALUE ${key3}`);
  //                                 value3.delete(element);
  //                               }
  //                             }
  //                           });
  //                         });
  //                       }
  //                     });
  //                   });
  //                 }
  //             }
  //           });
  //         }
  //       });
  //     }
  //   }
  
  //   console.log(cellCandidates);
  //   console.log(cellCandidates.size);
  
  
  //   for(let j = 0; j < matrix[0].length; j++) {
  //     let tempArr = [], uniqueElemsArr = [];
  //     cellCandidates.forEach((value, key, map) => {
  //       if(key[1] == j) {
  //         tempArr.push(...value);
  //       }
  //     });
  //     tempArr.forEach(element => {
  //       if(tempArr.indexOf(element) == tempArr.lastIndexOf(element)) {
  //         uniqueElemsArr.push(element);
  //       }
  //     });
  //     if(uniqueElemsArr.length != 0) {
  //       cellCandidates.forEach((value, key, map) => {
  //         if(key[1] == j) {
  //           uniqueElemsArr.forEach(element => {
  //             if(value.has(element)) {
  //               matrix[key[0]][j] = element;
  //               console.log(`${key[0]}:${j}`);
  //               cellCandidates.delete(key);
  //               //delete element as a candidate from that row's cells
  //               cellCandidates.forEach((value2, key2, map2) => {
  //                 if(key2[0] == key[0]) {
  //                   if(value2.has(element)) {
  //                     console.log(`ROW CELL HAS VALUE ${key2}`);
  //                     value2.delete(element);
  //                   }
  //                 }
  //               });
  //               //delete element as a candidate from that square's cells
  //               let foundSquare = false;
  //                 while(!foundSquare) {
  //                   arrOfSquares.forEach(square => {
  //                     square.forEach(cell => {
  //                       if(cell[0] == key[0] && cell[1] == j) {
  //                         foundSquare = true;
  //                         square.forEach(cell2 => {
  //                           cellCandidates.forEach((value3, key3, map3) => {
  //                             if(key3[0] == cell2[0] && key3[1] == cell2[1]) {
  //                               if(value3.has(element)) {
  //                                 console.log(`SQUARE CELL HAS VALUE ${key3}`);
  //                                 value3.delete(element);
  //                               }
  //                             }
  //                           });
  //                         });
  //                       }
  //                     });
  //                   });
  //                 }
  //             }
  //           });
  //         }
  //       });
  //     }
  //   }
  
  
  //   console.log(cellCandidates);
  //   console.log(cellCandidates.size);
  
  
  //   arrOfSquares.forEach(square => {
  
  //     let tempArr = [], uniqueElemsArr = [];
  
  //     square.forEach(cell => {
  //       cellCandidates.forEach((value, key, map) => {
  //         if(key[0] == cell[0] && key[1] == cell[1]) {
  //           tempArr.push(...value);
  //         }
  //       });
  //     });
  
  //     tempArr.forEach(element => {
  //       if(tempArr.indexOf(element) == tempArr.lastIndexOf(element)) {
  //         uniqueElemsArr.push(element);
  //       }
  //     });
  //     if(uniqueElemsArr.length != 0) {
  //       square.forEach(cell => {
  //         cellCandidates.forEach((value, key, map) => {
  //           if(key[0] == cell[0] && key[1] == cell[1]) {
  //             uniqueElemsArr.forEach(element => {
  //               if(value.has(element)) {
  //                 matrix[key[0]][key[1]] = element;
  //                 console.log(`${key[0]}:${key[1]}`);
  //                 cellCandidates.delete(key);
  //                 //delete element as a candidate from that row's cells
  //                 cellCandidates.forEach((value2, key2, map2) => {
  //                   if(key2[0] == key[0]) {
  //                     if(value2.has(element)) {
  //                       console.log(`ROW CELL HAS VALUE ${key2}`);
  //                       value2.delete(element);
  //                     }
  //                   }
  //                 });
  //                 //delete element as a candidate from that column's cells
  //                 cellCandidates.forEach((value3, key3, map3) => {
  //                   if(key3[1] == key[1]) {
  //                     if(value3.has(element)) {
  //                       console.log(`COLUMN CELL HAS VALUE ${key3}`);
  //                       value3.delete(element);
  //                     }
  //                   }
  //                 });
  //               }
  //             });
  //           }
  //         });
  //       });
  //     }
  
  
  
  //   });
  
  //   console.log(cellCandidates);
  //   console.log(cellCandidates.size);
  // }
  
  
  
  
  
  
  // console.table(matrix);
  // return matrix;
  
//   }
  
  
  
//   const square1 = [ [0, 0], [0, 1], [0, 2],
//                     [1, 0], [1, 1], [1, 2],
//                     [2, 0], [2, 1], [2, 2] ];
//   const square2 = [ [0, 3], [0, 4], [0, 5],
//                     [1, 3], [1, 4], [1, 5],
//                     [2, 3], [2, 4], [2, 5] ];
//   const square3 = [ [0, 6], [0, 7], [0, 8],
//                     [1, 6], [1, 7], [1, 8],
//                     [2, 6], [2, 7], [2, 8] ];
//   const square4 = [ [3, 0], [3, 1], [3, 2],
//                     [4, 0], [4, 1], [4, 2],
//                     [5, 0], [5, 1], [5, 2] ];
//   const square5 = [ [3, 3], [3, 4], [3, 5],
//                     [4, 3], [4, 4], [4, 5],
//                     [5, 3], [5, 4], [5, 5] ];
//   const square6 = [ [3, 6], [3, 7], [3, 8],
//                     [4, 6], [4, 7], [4, 8],
//                     [5, 6], [5, 7], [5, 8] ];
//   const square7 = [ [6, 0], [6, 1], [6, 2],
//                     [7, 0], [7, 1], [7, 2],
//                     [8, 0], [8, 1], [8, 2] ];
//   const square8 = [ [6, 3], [6, 4], [6, 5],
//                     [7, 3], [7, 4], [7, 5],
//                     [8, 3], [8, 4], [8, 5] ];
//   const square9 = [ [6, 6], [6, 7], [6, 8],
//                     [7, 6], [7, 7], [7, 8],
//                     [8, 6], [8, 7], [8, 8] ];
//   const arrOfSquares = [square1, square2, square3, square4, square5, square6, square7, square8, square9];