const compareArrays = (array1, array2) => {
  console.log(
    array1.length === array2.length &&
      array1.every((el, index) => array2[index].title === el.title),
    array1,
    array2
  );
  return (
    array1.length === array2.length &&
    array1.every((el, index) => array2[index].title === el.title)
  );
};
export default compareArrays;
