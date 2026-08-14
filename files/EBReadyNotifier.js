__d(
  "EBReadyNotifier",
  ["WAResolvable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (o("WAResolvable").Resolvable)();
    function s() {
      e.resolve();
    }
    function u() {
      e.resolveWasCalled() && (e = new (o("WAResolvable").Resolvable)());
    }
    ((l.markEBReady = s), (l.resetEBReady = u));
  },
  98,
);
