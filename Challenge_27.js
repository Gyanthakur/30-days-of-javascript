function* range(start, end) {
    while (start < end) {
      yield start;
      start++;
    }
  }
  const result = range(1, 10);

for (const num of result) {
  console.log(num);
}
