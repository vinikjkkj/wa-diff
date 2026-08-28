__d(
  "requestIdleCallbackComet",
  ["IdleCallbackImplementation"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e =
      t.requestIdleCallback ||
      o("IdleCallbackImplementation").requestIdleCallback;
    function s(n, r) {
      return e.call(t, n, r);
    }
    l.default = s;
  },
  98,
);
