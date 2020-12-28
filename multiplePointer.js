function countUniqueValues(array){
    if(array.length===0)return 0;
    const hash={};
    array.forEach((element)=>{
        if(typeof hash[element]==='undefined') hash[element]=0;
    })
    let count=0;
      array.forEach((element)=>{
        if(typeof hash[element]!=='undefined'){ 
        delete hash[element];
        count++;
        }
    })
    return count
  // add whatever parameters you deem necessary - good luck!
}