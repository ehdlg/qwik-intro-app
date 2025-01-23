import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const textSignal = useSignal('');

  return (
    <div>
      This is Page 1
      <hr />
      <input bind:value={textSignal} type='text' placeholder='Type your search' />
      <hr />
      {textSignal.value && <Projector value={textSignal.value} />}
    </div>
  );
});

const Projector = component$(({ value }: { value: string }) => {
  return <div>You typed: {value}</div>;
});
