const strictEquals = (valueA, valueB) => {
  let result = Object.is(valueA, valueB);
  if (Number.isNaN(valueA) && Number.isNaN(valueB)) {
    return false;
  } else if (Object.is(valueA, 0) && Object.is(valueB, -0)) {
    return true;
  } else if (Object.is(valueA, -0) && Object.is(valueB, 0)) {
    return true;
  } else {
    return result;
  }
};

export default strictEquals;
