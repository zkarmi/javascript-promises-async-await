export const fetchWithTimeout = (delay) => {
  return new Promise( resolve => setTimeout(resolve, delay));
}
