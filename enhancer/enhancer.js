function success(item) {}

function fail(item) {
  const durability =
    item.enhancement < 15 ? item.durability - 5 : item.durability - 10;

  return { ...item, durability };
}
function repair(item) {
  return { ...item, durability: 100 };
}

module.exports = {
  repair,
  success,
  fail,
};
