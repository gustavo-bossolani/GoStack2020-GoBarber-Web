import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  // Variável inner é uma lista de todos os campos do form
  err.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });
  return validationErrors;
}
