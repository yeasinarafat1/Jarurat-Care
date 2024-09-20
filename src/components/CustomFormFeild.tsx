/**
 * @description A custom form field component that renders an input field with a label, placeholder and form validation.
 * @prop {Control<any>} control - the control object from react-hook-form
 * @prop {string} label - the label of the form field
 * @prop {string} type - the type of the form field (text, number or password)
 * @prop {string} name - the name of the form field
 * @prop {string} placeholder - the placeholder of the form field
 * @prop {string} className - the class name of the form field
 */
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Control } from "react-hook-form";
import { Input } from "./ui/input";

interface props {
  control: Control<any>;
  label: string;
  type?: "text" | "number" | "password";
  name: string;
  placeholder: string;
  className?: string;
}

/**
 * @description Render the form field component
 * @param {props} props - the props of the component
 * @returns {JSX.Element} the form field component
 */
const CustomFormFeield = ({
  control,
  label,
  type = "text",
  name,
  placeholder,
  className,
}: props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="text-gray-900 font-medium">{label}</FormLabel>
          <FormControl>
            <RenderFormFeield
              field={field}
              placeholder={placeholder}
              className={className}
              type={type}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

/**
 * @description Render the input field based on the type prop
 * @param {any} field - the field object from react-hook-form
 * @param {string} placeholder - the placeholder of the input field
 * @param {string} className - the class name of the input field
 * @param {string} type - the type of the input field (text, number or password)
 * @returns {JSX.Element} the rendered input field
 */
const RenderFormFeield = ({
  field,
  type,
  placeholder,
  className,
}: {
  field: any;
  type?: "text" | "number" | "password";

  placeholder: string;
  className?: string;
}) => {
  switch (type) {
    case "text":
      return (
        <Input
          type={type}
          placeholder={placeholder}
          {...field}
          className={`h-11 ${className} text-base`}
        />
      );
    case "number":
      return (
        <Input
          type={type}
          placeholder={placeholder}
          {...field}
          className={`h-11 ${className}`}
        />
      );

    case "password":
      return (
        <Input
          type={type}
          placeholder={placeholder}
          {...field}
          className={`h-11 ${className}`}
        />
      );

    default:
      break;
  }
};

export default CustomFormFeield;
