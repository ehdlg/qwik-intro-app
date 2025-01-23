import {
  createContextId,
  useContext,
  useContextProvider,
  component$,
  Slot,
  useSignal,
  useTask$,
  type Signal,
} from '@builder.io/qwik';

const Context = createContextId<{ textSignal: Signal<string>; colorSignal: Signal<string> }>(
  'Context'
);

export default component$(() => {
  const textSignal = useSignal('');
  const colorSignal = useSignal('black');
  useContextProvider(Context, { colorSignal, textSignal });

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
      {textSignal.value && <Projector>You typed: </Projector>}
    </div>
  );
});

const Projector = component$(() => {
  const {
    colorSignal: { value: color },
    textSignal: { value: text },
  } = useContext(Context);
  return (
    <div>
      <Slot /> <span style={{ color }}>{text}</span>
    </div>
  );
});
