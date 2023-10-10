let names = [];

names.push('Vincent', 'Paul', 'Arthur');

names.forEach(name => {
  name += " va à la pèche"; // équivalent de name = name + " va à la pèche"
  console.log(name);
});