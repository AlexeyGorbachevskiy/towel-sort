
// You should implement your task here.


module.exports = function towelSort (matrix) {
    if(matrix===undefined || matrix.length===0){
        return []
    }

    return matrix.reduce((accum,curr,index)=>{
        return index%2===0 ? [...accum,...curr] :[...accum,...curr.reverse()]
    },[])
}

// ------------------------------------------SECOND SOLUTION------------------------------------------------------
// module.exports = function towelSort (matrix) {
//     if(matrix===undefined || matrix.length===0){
//         return []
//     }
//
//     let out=[];
//     for (let i=0;i<matrix.length;i++){
//         if (i%2===0){
//             for(let j=0;j<matrix[i].length;j++){
//                 out=[...out,matrix[i][j]]
//             }
//         }
//         else{
//             for(let k=matrix[i].length-1;k>=0;k--){
//                 out=[...out,matrix[i][k]]
//             }
//         }
//     }
//     return out
// }
