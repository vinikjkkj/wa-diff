__d(
  "useWAWebDebouncedSearch",
  ["react", "useWAWebDebouncedCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e) {
      e === void 0 && (e = 100);
      var t = s(""),
        n = t[0],
        o = t[1],
        a = r("useWAWebDebouncedCallback")(function (e) {
          o(e);
        }, e);
      return [n, a];
    }
    l.default = u;
  },
  98,
);
