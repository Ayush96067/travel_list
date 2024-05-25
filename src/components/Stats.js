export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your Bucket list 📃</em>
      </p>
    );
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const numPercent = Math.round((numPackedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {numPercent === 100
          ? "You got everything packed! Time to FLY ✈"
          : ` You have ${numItems} items on your list and you already packed
  
          ${numPackedItems} (${numPercent}%)`}
      </em>
    </footer>
  );
}
