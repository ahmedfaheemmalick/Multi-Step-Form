import { Dispatch, SetStateAction } from 'react'
import formValues from './FormValues.interface'

interface Props {
    handleNext: () => void;
    formValues: [formValues, Dispatch<SetStateAction<formValues>>];
}

export default Props