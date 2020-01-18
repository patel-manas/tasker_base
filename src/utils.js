export function isNumeric(value) {
  const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
  if (!isNaN(value) && reg.test(value)) return true;
  else return false;
}
