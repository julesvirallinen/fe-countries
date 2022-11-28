import * as React from 'react';
import { CountriesContext } from '../contexts/countries';
import { useSorting, useThemeSwitcher } from '../hooks';
import { CountriesContextType, Language, TypeCountry } from '../@types/country';
import { ThemeContext } from '../contexts/theme';
import { ThemeContextType } from '../@types/theme';

type CountriesProps = {
    selectedContinent: string | null;
}

const Countries:React.FC<CountriesProps> = ({ selectedContinent }: CountriesProps) => {
  const { countries } = React.useContext(CountriesContext) as CountriesContextType;
  const { theme } = React.useContext(ThemeContext) as ThemeContextType;
  const [ selectedCountry, setSelectedCountry ] = React.useState<string | null>(null);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);

  const continentCountries: TypeCountry[] = countries.filter((country: TypeCountry) => country.continent === selectedContinent)

  const firstChars :string[] = Array.from(
    new Set<string>(
        continentCountries.map((country: TypeCountry) => {
          return country.name.charAt(0);
        })
    )
  );
  useSorting(firstChars);
  const selectedColor: string = useThemeSwitcher(theme);

  const handleClick = (index: string) => {
    setSelectedCountry((prev) => {
      return prev === index ? null : index;
    }); 
  };

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setSelectedCountry(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className='countries' ref={wrapperRef}>
      {firstChars.length > 0 &&
        firstChars.map((char: string) => (
          <div key={char} className="table">
            <h1 className="first-char">{char}</h1>

            <div className="country-btn-group">
              {continentCountries.length > 0 &&
                continentCountries.map(
                  (country: TypeCountry, i: any) =>
                  <>
                      {country.name.startsWith(char) && (
                        <>
                            <div
                                className="country-btn"
                                id={`${(continentCountries[i+1] !== undefined && continentCountries[i+1].name.charAt(0)) !== country.name.charAt(0) && selectedCountry !== i && 'last-child'}`}
                                key={i}
                                onClick={() => handleClick(i)}
                                style={{backgroundColor: selectedCountry === i ? selectedColor : '', color: selectedCountry === i ? 'black' : ''}}
                              >
                                {country.name}
                            </div>    
                            <div 
                                key={country.alpha3Code} 
                                id="country-details"
                                className={`details ${selectedCountry === i ? 'expanded': 'collapsed'}`}
                            >    
                                <div>capital: <p>{country.capital}</p></div>
                                <div>population: <p>{country.population.toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join(" ")}</p></div>  
                                <div>languages: <p>{country.languages.map((lang: Language) => lang.name).join(', ')}</p></div>   
                            </div>
                        </>    
                      )}
                  </>    
                )
              }
            </div>
          </div>
        ))
      }
    </div>
  );
};
export default Countries;
