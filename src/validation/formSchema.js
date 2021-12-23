import * as yup from 'yup';

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email('Gotta be a valid email address!')
    .required('YOU FORGOT TO ENTER AN EMAIL ADDRESS!!'),
  role: yup
    .string()
    .oneOf(['mild', 'medium', 'intense', 'tl'], 'Select your class intensity!'),
  crossfit: yup.boolean(),
  powerlifting: yup.boolean(),
  zumba: yup.boolean(),
  yoga: yup.boolean()
})

export default formSchema;