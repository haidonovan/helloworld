export async function getOneProduct(id) {
  const res = await fetch(`http://localhost:3001/products/${id}`);
  const data = await res.json();
  return data;
}
