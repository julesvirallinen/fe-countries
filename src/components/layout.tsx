import * as React from 'react';
import { CountriesContext } from '../contexts/countries';
import { CountriesContextType, TypeCountry } from '../@types/country';
import { useSorting } from '../hooks';
import Button from './button';
import Select from './select';
import Countries from './countries';
import IsLoading from './is-loading';
import Error from './error';

const Layout:React.FC = () =>{
    const { countries, error, isLoading, getData } = React.useContext(CountriesContext) as CountriesContextType;
    const [selectedContinent, setSelectedContinent] = React.useState<string | null>(null);
    const [mobile, setMobile] = React.useState<boolean>(false);
    
    const query = window.matchMedia("(max-width:440px)");

    const continents:string[] = Array.from(
        new Set<string>(countries.map((country: TypeCountry) => country.continent))
    );
    useSorting(continents);
    
    const handleChange = (continent:string) => {
        setMobile(query.matches);
        setSelectedContinent(continent);
    }

    React.useEffect(()=>{
        const handleChange = (event: MediaQueryListEvent) => {
            setMobile(event.matches)
        }     
        query.addEventListener('change', handleChange);
        return () => {
           query.removeEventListener('change', handleChange)   
        }  
    }, [mobile])

    return (
        <div className={`container ${countries.length===0 && 'centered'}`} id={`${mobile && 'centered'}`}>
            {!isLoading && !error && countries.length===0 && <Button text="Get Data" onClick={getData}/> }
            {isLoading && <IsLoading />}
            {error && <Error error={error}/>} 
            <>
                <div 
                    className={`continents ${continents.length > 0 ? 'expanded': 'collapsed'}`}
                    id={mobile ? 'resp-continents': ''}
                    
                >    
                    {mobile && selectedContinent ? 
                        <Select 
                            selected={selectedContinent} 
                            options={continents} 
                            handleChange={handleChange}       
                        />
                        :
                        continents.map((cntn, i) => (  
                            <Button
                                key={i}
                                text={cntn}
                                onClick={() => handleChange(cntn)}
                                idName={selectedContinent===cntn ? 'active' : ''}
                            />
                        ))
                    }   
                </div>
                {selectedContinent && <Countries selectedContinent={selectedContinent}/>}
            </>
        </div>
    )
}

export default Layout;