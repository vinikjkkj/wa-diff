__d(
  "useWAWebNavigatableList",
  [
    "WAWebNavigatableList",
    "WAWebSingleSelection",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(14),
        n = c(null),
        a = n[0],
        i = n[1],
        l;
      t[0] !== e
        ? ((l = new (r("WAWebSingleSelection"))(e)), (t[0] = e), (t[1] = l))
        : (l = t[1]);
      var s = c(l),
        d = s[0],
        m = s[1],
        p,
        _;
      (t[2] !== e
        ? ((p = function () {
            m(new (r("WAWebSingleSelection"))(e));
          }),
          (_ = [e]),
          (t[2] = e),
          (t[3] = p),
          (t[4] = _))
        : ((p = t[3]), (_ = t[4])),
        u(p, _));
      var f;
      t[5] !== d
        ? ((f = function () {
            i(d.getVal());
          }),
          (t[5] = d),
          (t[6] = f))
        : (f = t[6]);
      var g;
      (t[7] !== e || t[8] !== d
        ? ((g = [e, d]), (t[7] = e), (t[8] = d), (t[9] = g))
        : (g = t[9]),
        u(f, g));
      var h;
      (t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function (t) {
            var e = t.current;
            i(e);
          }),
          (t[10] = h))
        : (h = t[10]),
        o("useWAWebListener").useListener(d, "change", h));
      var y;
      return (
        t[11] !== a || t[12] !== d
          ? ((y = {
              activeItem: a,
              listSelection: d,
              NavigatableList: r("WAWebNavigatableList"),
            }),
            (t[11] = a),
            (t[12] = d),
            (t[13] = y))
          : (y = t[13]),
        y
      );
    }
    l.useNavigatableList = d;
  },
  98,
);
