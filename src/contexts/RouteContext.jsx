import { createContext, useContext, useState } from 'react';

export const RouteContext = createContext();

const initialState = 'trending';

// eslint-disable-next-line react-refresh/only-export-components
export const useRoute = () => {
  return useContext(RouteContext);
};

const RouteProvider = ({ children }) => {
  const [route, setRoute] = useState(initialState);
  return (
    <RouteContext.Provider value={{ route, setRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

export default RouteProvider;
