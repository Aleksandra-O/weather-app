const windCode = (code) => {
  if (code>22.5 && code<67.5) {
    return 'North-East'
  };
  if (code>67.5 && code<112.5) {
    return 'East'
  };
  if (code>112.5 && code<157.5) {
    return 'South-East'
  };
  if (code>157.5 && code<202.5) {
    return 'South'
  };
  if (code>202.5 && code<247.5) {
    return 'South-West'
  };
  if (code>247.5 && code<292.5) {
    return 'West'
  };
  if (code>292.5 && code<337.5) {
    return 'North-West'
  };
  if ((code>337.5 && code<=360) || (code<22.5 && code>=0)) {
    return 'North'
  };
}

export default windCode;