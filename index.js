const INPUT = 7;
const MOCKDATA = [1, 2, 3, 4, 5];

const getMaxValArr = (arr) => 
console.log(`Answer : ${Math.max(...arr)}`);

const removeDuplicateData = (arr) => {
    const dataList = [];
    arr.map((itemArr, itemKey) => {
        const ck = dataList.filter( dataListItem => dataListItem.includes(itemArr[0]));
        if(ck.length == 0){
            dataList.push(`${itemArr[0]}+${itemArr[1]}`);
        }
    })
  return dataList;
};

const getResultPairNumber = (input, mockData) => {
  const count = mockData.length;
  const match = [];
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count; j++) {
      let res = mockData[i] + mockData[j] ? mockData[i] + mockData[j] : 0;
      if (res == input) {
        match.push([mockData[i],mockData[j]]);
      }
        // console.log(`view data ${mockData[i]}+${mockData[j]} eqauls: ${res} ${res == input ? 'macth' : ''}`);
    }
  }

  const rs = removeDuplicateData(match);
  console.log(`Answer : ${JSON.stringify(rs)}`);

};


console.log('1.Find max in the array of numbers : ')
getMaxValArr(MOCKDATA);
console.log('2.Given an array of numbers, please find all pair numbers which result in the given number. : ')
getResultPairNumber(INPUT, MOCKDATA);
