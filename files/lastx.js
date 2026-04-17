__d(
  "lastx",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = null;
      if (Array.isArray(e)) e.length && (t = { value: e[e.length - 1] });
      else for (var n of e) ((t = t || {}), (t.value = n));
      if (t) return t.value;
      s(0, 1145);
    }
    l.default = e;
  },
  98,
);
