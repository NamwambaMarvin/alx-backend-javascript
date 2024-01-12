export default function taskBlock(trueOrFalse) {
  var task = false; // eslint-disable-line no-var
  var task2 = true; // eslint-disable-line no-var

  if (trueOrFalse) {
    const task = true; // eslint-disable-line no-unused-vars
    const task2 = false; // eslint-disable-line no-unused-vars
  }

  return [task, task2];
}
