__d(
  "WebBloksChangeCanonicalURL",
  ["CAAWebBloksMinificationKeys"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t.get(o("CAAWebBloksMinificationKeys").CHANGE_CANONICAL_URL);
      if (n) {
        var r = history.state;
        window.history.replaceState(r, null, n);
      }
    }
    l.default = e;
  },
  98,
);
