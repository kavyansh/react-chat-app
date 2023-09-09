function SearchMessage({ userid, message }) {
  console.log(userid);
  return (
    <div>
      <span>{userid}</span>
      <span>{message}</span>
    </div>
  );
}

export default SearchMessage;
