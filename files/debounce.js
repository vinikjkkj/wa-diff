__d(
  "debounce",
  ["clearTimeout", "debounceCore", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, o, a) {
      t === void 0 && (t = 100);
      var i = function (t, n, a) {
        return r("setTimeout")(t, n, a, !o);
      };
      return r("debounceCore")(e, t, n, i, r("clearTimeout"), a);
    }
    l.default = e;
  },
  98,
);
