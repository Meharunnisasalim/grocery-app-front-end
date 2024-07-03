import React, { createContext, useState, useEffect,useContext } from 'react';
import axios from 'axios';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`${API_BASE_URL}/api/data`)
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error('There was an error making the request!', error);
          });
      }, []);

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};
const useData = () => useContext(DataContext);

export { useData, DataProvider };
