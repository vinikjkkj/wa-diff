__d(
  "createObjectFrom",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(t, n) {
      if (n === void 0) return e(t, !0);
      var r = {};
      if (Array.isArray(n))
        for (var o = t.length - 1; o >= 0; o--) r[t[o]] = n[o];
      else for (var a = t.length - 1; a >= 0; a--) r[t[a]] = n;
      return r;
    }
    i.default = e;
  },
  66,
);
