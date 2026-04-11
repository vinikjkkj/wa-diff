__d(
  "WAWebVoipWasmHeapBuffer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      return { ptr: 0, size: 0 };
    }
    function l(e, t, n) {
      return (
        t.size < n &&
          (t.ptr !== 0 && e._free(t.ptr),
          (t.ptr = e._malloc(n)),
          (t.size = t.ptr !== 0 ? n : 0)),
        t.ptr
      );
    }
    function s(e, t) {
      if (t.ptr !== 0) {
        try {
          e._free(t.ptr);
        } catch (e) {}
        ((t.ptr = 0), (t.size = 0));
      }
    }
    ((i.createHeapBufferState = e),
      (i.ensureHeapBuffer = l),
      (i.freeHeapBuffer = s));
  },
  66,
);
