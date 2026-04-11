__d(
  "WAWebBackendEventBusWorkerCompatible",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s(t) {
      e = t;
    }
    function u() {
      return r("nullthrows")(e, "BackendEventBus not initialized");
    }
    ((l.setBackendEventBus = s), (l.getBackendEventBus = u));
  },
  98,
);
