export async function getDummyMsg() {
  const res = await fetch("https://dummyjson.com/quotes/random");

  if (!res.ok) return "Hi, I am good!";
  const data = await res.json();

  return data?.quote;
}
