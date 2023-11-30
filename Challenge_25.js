const getData = async (url1, url2) => {
    const response1 = await fetch(url1);
    const data1 = await response1.json();
  
    const response2 = await fetch(url2);
    const data2 = await response2.json();
  
    return [data1, data2];
  };
  
  const [data1, data2] = await getData('https://api1.example.com/data', 'https://api2.example.com/data');
  
  console.log(data1, data2);
  