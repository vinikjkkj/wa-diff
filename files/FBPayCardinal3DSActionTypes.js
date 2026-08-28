__d(
  "FBPayCardinal3DSActionTypes",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new WeakMap();
    function l(t, n) {
      return (e.set(t, n), t);
    }
    function s(t) {
      var n;
      return t instanceof Error && (n = e.get(t)) != null ? n : null;
    }
    ((i.attachCardinal3DSDisplayCopy = l), (i.getCardinal3DSDisplayCopy = s));
  },
  66,
);
