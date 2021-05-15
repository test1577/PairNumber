console.log("test ascend");

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

const getResultPairNumber = (input) => {
  const mockData = [1, 2, 3, 4, 5];
  const count = mockData.length;
  console.log("input :", input);
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
  console.log(`Result : ${JSON.stringify(rs)}`);

};

getResultPairNumber(7);
