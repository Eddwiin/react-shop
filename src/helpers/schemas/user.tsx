import * as yup from 'yup';
import { EMAIL_REGEX, PHONE_REGEX } from '../regex/user';

export const userSchema = yup.object().shape({
    firstName: yup.string().required().min(3).max(10),
    lastName: yup.string().required().min(3).max(10),
    email: yup.string().matches(EMAIL_REGEX, { message: "Email is invalid" }),
    phone: yup.string().matches(PHONE_REGEX, { message: "Phone is invalid" }),
    password: yup.string().min(5),
    confirmPassword: yup.string().min(5)
        .oneOf([yup.ref('password'), null], 'Passwords must match')
})