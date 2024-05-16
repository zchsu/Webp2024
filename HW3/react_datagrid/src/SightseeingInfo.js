import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';

const SightseeingInfo = () => {
  const [dataset, setDataset] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const pageSize = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch
        (
          'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6'
        );
        const data = await response.json();
        setDataset(data);
        setFilteredData(data);
        
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const searchText = event.target.value;
    if (searchText === '') {
      setFilteredData(dataset);
    } else {
      const filtered = dataset.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: '名稱', width: 200 },
    { field: 'location', headerName: '地點', width: 200 },
    { field: 'price', headerName: '票價', width: 600 },
  ];

  const rows = filteredData.map((item, index) => ({
    id: index + 1,
    title: item.title,
    location: item.showInfo[0].location,
    price: item.showInfo[0].price,
  }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1>景點觀光展資訊
      <span>    </span>
      <input
      type="text"
      id="searchInput"
      onChange={handleSearch}
      placeholder="搜尋......"
      style={{ padding: '8px', width: '20%' }}
      />
      </h1>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        checkboxSelection
        style={{backgroundColor: '#f2f2f2', color: 'black'}}
      />
    </div>
  );
};

export default SightseeingInfo;