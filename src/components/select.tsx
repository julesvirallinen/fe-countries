import * as React from 'react';

type SelectProps = {
    options: string[];
    handleChange: (value: string)=> void;
    selected: string;
    className? :string;
}
const Select: React.FC<SelectProps> = ({ options, handleChange, selected, className }: SelectProps) =>{
    return (
        <select 
            className={className ? className : 'btn'}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>{handleChange(e.target.value)}} 
            value={selected}
        >
            {options.map((cntn:string) => <option key={cntn} value={cntn}>{cntn}</option>)}
        </select>
        
    )
}

export default Select;