import { component$, Slot, useSignal, useTask$ } from '@builder.io/qwik';

export default component$(() => {
  const textSignal = useSignal('');
  const colorSignal = useSignal('black');

  useTask$(({ track }) => {
    track(() => textSignal.value);
    const toTrack = 'llama';

    if (textSignal.value.toLowerCase() === toTrack) {
      colorSignal.value = 'red';
    } else {
      colorSignal.value = 'black';
    }
  });

  return (
    <div>
      This is Page 1
      <hr />
      <input bind:value={textSignal} type='text' placeholder='Type your search' />
      <hr />
      {textSignal.value && (
        <Projector value={textSignal.value} color={colorSignal.value}>
          You typed:{' '}
        </Projector>
      )}
    </div>
  );
});

const Projector = component$(({ value, color }: { value: string; color?: string }) => {
  return (
    <div>
      <Slot /> <span style={{ color }}>{value}</span>
    </div>
  );
});
