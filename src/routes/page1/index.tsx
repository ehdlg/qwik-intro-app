import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div>
      This is Page 1
      <hr />
      <input onKeyDown$={(e) => console.log(e.key)} type='text' placeholder='Type your search' />
      <hr />
      <div>You typed: </div>
    </div>
  );
});
