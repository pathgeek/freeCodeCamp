function arrayToList(array){
  var list = null;
  for (var i = array.length - 1; i >=0; i--){
    list ={value:array[i], rest:list};
  }
    return(list);
};

function ListToArray(list){
    var array = [];
    for (var node = list; node; node = node.rest){
      array.push(node.value);
    }
    return array;
}

function prepend(){
  return {value: value, rest: list};
}

function nth(){
  if (!list){
    return undefined;
  }else if (n === 0){
    return list.value;
  }else{
    return nth(list.rest, n -1 );
  }
}



arrayToList[10,20];
ListToArray{value:20, rest: null}
prepend(10, prepend(20, null));
nth(arrayToList[10,20,30]), 1);
