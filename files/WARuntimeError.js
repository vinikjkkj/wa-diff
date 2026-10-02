__d(
  "WARuntimeError",
  ["WAResultOrError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WAResultOrError").makeError({
        type: "runtime-error",
        error: e,
      });
    }
    l.runtimeError = e;
  },
  98,
);
