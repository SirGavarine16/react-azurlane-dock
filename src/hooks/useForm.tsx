import { useState, ChangeEvent } from "react";
import { SelectChangeEvent } from "@mui/material";

const useForm  = <T extends Object> (initialState: T) => {
    const [formData, setFormData] = useState<T>(initialState);

    const handleInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const setFormField = (name: string, value: any) => {
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleMUISelectChange = ({ target: { name, value } }: SelectChangeEvent) => {
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const reset = (data: T = initialState) => {
        setFormData(data)
    }

    return {
        formData,
        setFormField,
        handleInputChange,
        handleMUISelectChange,
        reset
    }
}

export default useForm;