// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들수 있다
const fruits = ['🍏', '🥝', '🍓', '🍌'];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
// const [x, y] = point;
const [y, x, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ['apple', '🍎'];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const ian = { name: 'Ian', age: 30, job: 's/w engineer' };
function display({ name, age, job }) {
  console.log('Name', name);
  console.log('Age', age);
  console.log('Job', job);
}
display(ian);

const { name, age, job } = ian;
// const { name, age, job: occupation, job } = ian;
// Change the key 'job' to 'occupation'
console.log(name);
console.log(age);
console.log(job);

// Quiz
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
}

changeColor(prop);
