/**
 * Custom select component
 * @param id - id of the select
 * @param options - options for the select
 * @param onChange - function to handle the change of the select
 * @param value - value of the select
 * @param name - name of the select
 * @returns Custom select component
 */
"use-client";

import Select, {
  ActionMeta,
  GroupBase,
  MultiValue,
  SingleValue,
  StylesConfig,
} from "react-select";

export type SelectOptions = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  id: string;
  options: SelectOptions[];
  onChange: (
    newValue: SingleValue<SelectOptions> | MultiValue<SelectOptions>,
    actionMeta: ActionMeta<SelectOptions>
  ) => void;
  value?: SelectOptions | undefined;
  name?: string;
};

export default function CustomSelect({
  id,
  options,
  onChange,
  value,
  name,
}: CustomSelectProps) {
  // Custom styles for the select
  const styleSelect: StylesConfig<
    SelectOptions,
    boolean,
    GroupBase<SelectOptions>
  > = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? "rgb(132 204 22)" : "grey",
    }),
    option: (baseStyles, state) => {
      return {
        ...baseStyles,
        backgroundColor: state.isFocused
          ? "rgb(217 249 157)"
          : state.isSelected
          ? "rgb(132 204 22)"
          : "#fff",
        color: "#000",
      };
    },
  };

  return (
    <Select
      inputId={id}
      name={name}
      options={options}
      onChange={onChange}
      value={value}
      styles={styleSelect}
    />
  );
}
