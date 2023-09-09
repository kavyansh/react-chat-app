function SearchMessage({ userid, message }) {
  console.log("id", userid);
  return (
    <div>
      <span>{userid}</span>
      <span>{message}</span>
    </div>
  );
}

export default SearchMessage;
