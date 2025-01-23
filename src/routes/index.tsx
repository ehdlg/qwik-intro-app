import { $, component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const visibleSignal = useSignal(false);

  const isVisible = visibleSignal.value;
  return (
    <>
      {isVisible && <div>This is visible</div>}
      <span>Hello world</span>
      <button
        onClick$={() => {
          visibleSignal.value = !isVisible;
        }}
      >
        Click me!
      </button>
    </>
  );
});
