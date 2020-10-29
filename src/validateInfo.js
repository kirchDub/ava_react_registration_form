export default function validateInfo(values) {
  let errors = {};

  if (!values.first.trim()) {
    errors.first = 'First name required';
  }

  if (!values.last.trim()) {
    errors.last = 'Last name required';
  }

  if (!values.npi.trim()) {
    errors.npi = 'NPI Number required';
  }

  if (!values.address.trim()) {
    errors.address = 'Business address required';
  }

  if (!values.phone.trim()) {
    errors.phone = 'Telephone number required';
  } else if (!/^[0-9]{10}$/.test(values.phone)) {
    errors.phone = 'Telephone number is invalid';
  }
  

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  return errors;
}
