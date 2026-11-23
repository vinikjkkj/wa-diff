__d(
  "WAWebUseRollerCounter",
  ["react", "useWAWebDebouncedCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useRef,
      c = s.useState,
      d = 50;
    function m(e) {
      var t = c(e),
        n = t[0],
        o = t[1],
        a = c(null),
        i = a[0],
        l = a[1],
        s = u(null);
      s.current == null && (s.current = n);
      var m = r("useWAWebDebouncedCallback")(function () {
        (s.current != null && s.current !== e && (o(e), l(s.current)),
          (s.current = null));
      }, d);
      return (e != null && m(), { currentValueProp: n, previousValueProp: i });
    }
    l.useRollerCounter = m;
  },
  98,
);
