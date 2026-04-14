__d(
  "WAWebUseRollerCounter",
  ["react", "useWAWebDebouncedCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useRef,
      c = s.useState,
      d = 50;
    function m(e, t) {
      var n = c(t),
        o = n[0],
        a = n[1],
        i = c(null),
        l = i[0],
        s = i[1],
        m = u(null);
      m.current == null && (m.current = e);
      var p = r("useWAWebDebouncedCallback")(function () {
        (m.current != null && m.current !== t && (a(t), s(m.current)),
          (m.current = null));
      }, d);
      return (t != null && p(), { currentValueProp: o, previousValueProp: l });
    }
    l.useRollerCounter = m;
  },
  98,
);
