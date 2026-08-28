__d(
  "last",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = null;
      if (Array.isArray(e) || typeof e == "string")
        e.length && (t = { value: e[e.length - 1] });
      else for (var n of e) ((t = t || {}), (t.value = n));
      return t ? t.value : null;
    }
    i.default = e;
  },
  66,
);
