__d(
  "useHoverState",
  ["react-compiler-runtime", "useBoolean", "useEventHandler"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("react-compiler-runtime").c(11),
        a = r("useBoolean")(!1),
        i = a.set,
        l = a.setFalse,
        s = a.setTrue,
        u = a.value,
        c;
      n[0] !== s || n[1] !== e
        ? ((c = function (n) {
            (s(), e == null || e(n));
          }),
          (n[0] = s),
          (n[1] = e),
          (n[2] = c))
        : (c = n[2]);
      var d = r("useEventHandler")(c),
        m;
      n[3] !== l || n[4] !== t
        ? ((m = function (n) {
            (l(), t == null || t(n));
          }),
          (n[3] = l),
          (n[4] = t),
          (n[5] = m))
        : (m = n[5]);
      var p = r("useEventHandler")(m),
        _;
      return (
        n[6] !== d || n[7] !== p || n[8] !== u || n[9] !== i
          ? ((_ = {
              isHovered: u,
              onMouseEnter: d,
              onMouseLeave: p,
              setIsHovered: i,
            }),
            (n[6] = d),
            (n[7] = p),
            (n[8] = u),
            (n[9] = i),
            (n[10] = _))
          : (_ = n[10]),
        _
      );
    }
    l.default = e;
  },
  98,
);
