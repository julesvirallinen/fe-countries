export {};
/*import * as React from 'react';
import { TypeCountry } from '../types';

const Countries = ({ countries }:any) => {
  const [id, setId] = React.useState<string>('');
  const [selectedCountry, setSelectedCountry] = React.useState<TypeCountry>();
  const countriesRefs = React.useRef<React.RefObject<HTMLInputElement>[]>([]);
  const [previousCountry, setPreviousCountry] =
    React.useState<React.RefObject<HTMLInputElement> | null>(null);

  const countryRef = (countriesRefs.current = countries.map(
    (country: TypeCountry, i: any) =>
      countriesRefs.current[i] ?? React.createRef()
  ));

  const firstChars = Array.from(
    new Set<string>(
      countries.map((country: TypeCountry) => {
        return country.name.charAt(0);
      })
    )
  );
  const sortedFirstChars = Array.from(firstChars).sort((a, b) => {
    return a.localeCompare(b, 'en', { sensitivity: 'base' });
  });

  const handleClick = (index: string, country:TypeCountry) => {
    setId(index);
    setSelectedCountry(country);
    if (previousCountry) {
      countryRef[id].current.style.backgroundColor = '';
      countryRef[id].current.style.color = '';
      setPreviousCountry(null);
    }
    if (index) {
      countryRef[index].current.style.backgroundColor = '#e3127e';
      countryRef[index].current.style.color = '#000000';
      const prevCountry = countryRef[index].current;
      setPreviousCountry(prevCountry);
    }
  };

  return (
    <div className="countries-wrapper">
      {sortedFirstChars.length > 0 &&
        sortedFirstChars.map((char) => (
          <div key={char} className="table">
            <h1 className="first-char">{char}</h1>

            <div className="country-btn-group">
              {countries.length > 0 &&
                countries.map(
                  (country: TypeCountry, i: string) =>
                  <>
                    <div key={i}>
                      {country.name.startsWith(char) && (
                        <div
                          className="country-btn"
                          key={i}
                          ref={countriesRefs.current[+i]}
                          onClick={() => handleClick(i.toString(), country)}
                        >
                          {country.name}
                        </div>
                   
                      )}
                    </div>  
                  </>
                    
                )}
            </div>
          </div>
        ))}
    </div>
  );
};
export default Countries;*/
