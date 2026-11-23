__d(
  "MAIBAV2TerminalResponseSelector",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null) return null;
      for (var t = e.length - 1; t >= 0; t--) {
        var n = e[t];
        if ((n == null ? void 0 : n.is_final) === !0) return n;
      }
      return e.at(-1);
    }
    i.default = e;
  },
  66,
);
