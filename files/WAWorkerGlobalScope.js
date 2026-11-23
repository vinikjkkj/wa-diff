__d(
  "WAWorkerGlobalScope",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      return typeof window != "undefined"
        ? window
        : typeof globalThis != "undefined"
          ? globalThis
          : self;
    })();
    i.workerGlobalScope = e;
  },
  66,
);
