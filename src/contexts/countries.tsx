import * as React from 'react';
import { CountriesContextType, TypeCountry } from '../@types/country';

export const CountriesContext = React.createContext<CountriesContextType | null>(null);

type CountriesProviderProps = {
  children: React.ReactNode;
}
const CountriesProvider: React.FC<CountriesProviderProps> = ({ children }) => {
  
  const [countries, setCountries] = React.useState<TypeCountry[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);


  const getData = () =>{
    setIsLoading(true);
    const url = 'https://api.countries.code-test.utopiamusic.com/all';
    fetch(url)
        .then(response => response.json())
        .then(data => setCountries(data))
        .catch(err => {setError("Whoops, something went wrong.."); console.log('Error: ', err.message)})
        .finally(()=>setIsLoading(false))
  }
  
  return <CountriesContext.Provider value={{ countries, error, isLoading, getData }}>{children}</CountriesContext.Provider>;
};

export default CountriesProvider;
