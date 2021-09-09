import { Dispatch, SetStateAction } from "react"
import formValues from './FormValues.interface'

interface Props {
    handleReset: () => void;
    handleBack: () => void;
    formValues: [formValues, Dispatch<SetStateAction<formValues>>];
}

export default Props