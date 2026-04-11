__d(
  "cancelIdleCallbackComet",
  ["IdleCallbackImplementation"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e =
      t.cancelIdleCallback ||
      o("IdleCallbackImplementation").cancelIdleCallback;
    function s(n) {
      e.call(t, n);
    }
    l.default = s;
  },
  98,
);
