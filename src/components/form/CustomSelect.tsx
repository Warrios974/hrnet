'use-client'

import Select, { ActionMeta, GroupBase, MultiValue, SingleValue, StylesConfig } from 'react-select'

export type SelectOptions = {
        value: string
        label: string
}

type CustomSelectProps = {
    id: string;
    options: SelectOptions[];
    onChange: (newValue: SingleValue<SelectOptions> | MultiValue<SelectOptions>, actionMeta: ActionMeta<SelectOptions>) => void;
    value?: SelectOptions | undefined
}

export default function CustomSelect({id, options, onChange, value }: CustomSelectProps) {

    const styleSelect: StylesConfig<SelectOptions, boolean, GroupBase<SelectOptions>> = {
        control: (baseStyles, state) => ({
        ...baseStyles,
        borderColor: state.isFocused ? 'rgb(132 204 22)' : 'grey',
        }),
        option: (baseStyles, state) => {
        return {
            ...baseStyles, 
            backgroundColor: state.isFocused ? "rgb(217 249 157)" : state.isSelected ? "rgb(132 204 22)" : '#fff',
            color: '#000',
        }
        }, 
    }

    return (
        <Select 
            id={id}
            options={options} 
            onChange={onChange}
            value={value}
            styles={styleSelect}
        />
    )
}