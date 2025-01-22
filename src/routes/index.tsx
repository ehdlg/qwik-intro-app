import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <span>Hello world</span>
      <button onClick$={() => console.log('You clicked me!')}>Click me!</button>
    </>
  );
});
