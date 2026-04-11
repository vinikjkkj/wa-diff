__d(
  "WAWebDrawerManagerContext",
  [
    "WALogger",
    "WAWebDrawerManagerGlobalContext",
    "err",
    "react",
    "react-compiler-runtime",
    "useWAWebDrawerManagerEvents",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.createContext,
      m = c.useCallback,
      p = c.useContext,
      _ = c.useEffect,
      f = d(null);
    function g(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        r = e.onDrawerStateChange,
        a = o("useWAWebDrawerManagerEvents").useDrawerManagerEvents("left", r),
        i,
        l;
      (t[0] !== a
        ? ((i = function () {
            return (
              o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager(
                "left",
                a,
              ),
              h
            );
          }),
          (l = [a]),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l))
        : ((i = t[1]), (l = t[2])),
        _(i, l));
      var s;
      return (
        t[3] !== n || t[4] !== a
          ? ((s = u.jsx(f.Provider, { value: a, children: n })),
            (t[3] = n),
            (t[4] = a),
            (t[5] = s))
          : (s = t[5]),
        s
      );
    }
    function h() {
      o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager("left", null);
    }
    var y = d(null);
    function C(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        r = e.onDrawerStateChange,
        a = o("useWAWebDrawerManagerEvents").useDrawerManagerEvents("right", r),
        i,
        l;
      (t[0] !== a
        ? ((i = function () {
            return (
              o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager(
                "right",
                a,
              ),
              b
            );
          }),
          (l = [a]),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l))
        : ((i = t[1]), (l = t[2])),
        _(i, l));
      var s;
      return (
        t[3] !== n || t[4] !== a
          ? ((s = u.jsx(y.Provider, { value: a, children: n })),
            (t[3] = n),
            (t[4] = a),
            (t[5] = s))
          : (s = t[5]),
        s
      );
    }
    function b() {
      o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager(
        "right",
        null,
      );
    }
    var v = d(null);
    function S(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        r = e.onDrawerStateChange,
        a = o("useWAWebDrawerManagerEvents").useDrawerManagerEvents("mid", r),
        i,
        l;
      (t[0] !== a
        ? ((i = function () {
            return (
              o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager(
                "mid",
                a,
              ),
              R
            );
          }),
          (l = [a]),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l))
        : ((i = t[1]), (l = t[2])),
        _(i, l));
      var s;
      return (
        t[3] !== n || t[4] !== a
          ? ((s = u.jsx(v.Provider, { value: a, children: n })),
            (t[3] = n),
            (t[4] = a),
            (t[5] = s))
          : (s = t[5]),
        s
      );
    }
    function R() {
      o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager("mid", null);
    }
    var L = d(null);
    function E(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        r = e.onDrawerStateChange,
        a = o("useWAWebDrawerManagerEvents").useDrawerManagerEvents(
          "fullscreen",
          r,
        ),
        i,
        l;
      (t[0] !== a
        ? ((i = function () {
            return (
              o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager(
                "fullscreen",
                a,
              ),
              k
            );
          }),
          (l = [a]),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l))
        : ((i = t[1]), (l = t[2])),
        _(i, l));
      var s;
      return (
        t[3] !== n || t[4] !== a
          ? ((s = u.jsx(L.Provider, { value: a, children: n })),
            (t[3] = n),
            (t[4] = a),
            (t[5] = s))
          : (s = t[5]),
        s
      );
    }
    function k() {
      o("WAWebDrawerManagerGlobalContext").setGlobalDrawerManager(
        "fullscreen",
        null,
      );
    }
    function I(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.children,
        r = e.onDrawerStateChange,
        a;
      t[0] !== r
        ? ((a = function (t) {
            r == null || r("left", t);
          }),
          (t[0] = r),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] !== r
        ? ((l = function (t) {
            r == null || r("right", t);
          }),
          (t[2] = r),
          (t[3] = l))
        : (l = t[3]);
      var s = l,
        c;
      t[4] !== r
        ? ((c = function (t) {
            r == null || r("mid", t);
          }),
          (t[4] = r),
          (t[5] = c))
        : (c = t[5]);
      var d = c,
        m;
      t[6] !== r
        ? ((m = function (t) {
            r == null || r("fullscreen", t);
          }),
          (t[6] = r),
          (t[7] = m))
        : (m = t[7]);
      var p = m,
        _;
      t[8] !== n || t[9] !== p
        ? ((_ = u.jsx(E, { onDrawerStateChange: p, children: n })),
          (t[8] = n),
          (t[9] = p),
          (t[10] = _))
        : (_ = t[10]);
      var f;
      t[11] !== d || t[12] !== _
        ? ((f = u.jsx(S, { onDrawerStateChange: d, children: _ })),
          (t[11] = d),
          (t[12] = _),
          (t[13] = f))
        : (f = t[13]);
      var h;
      t[14] !== s || t[15] !== f
        ? ((h = u.jsx(C, { onDrawerStateChange: s, children: f })),
          (t[14] = s),
          (t[15] = f),
          (t[16] = h))
        : (h = t[16]);
      var y;
      return (
        t[17] !== i || t[18] !== h
          ? ((y = u.jsx(g, { onDrawerStateChange: i, children: h })),
            (t[17] = i),
            (t[18] = h),
            (t[19] = y))
          : (y = t[19]),
        y
      );
    }
    function T(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.children,
        r = o("WAWebDrawerManagerGlobalContext").useGlobalDrawerManagers(),
        a = r.fullscreen,
        i = r.left,
        l = r.mid,
        s = r.right,
        c;
      t[0] !== n || t[1] !== a
        ? ((c = u.jsx(L.Provider, { value: a, children: n })),
          (t[0] = n),
          (t[1] = a),
          (t[2] = c))
        : (c = t[2]);
      var d;
      t[3] !== l || t[4] !== c
        ? ((d = u.jsx(v.Provider, { value: l, children: c })),
          (t[3] = l),
          (t[4] = c),
          (t[5] = d))
        : (d = t[5]);
      var m;
      t[6] !== s || t[7] !== d
        ? ((m = u.jsx(y.Provider, { value: s, children: d })),
          (t[6] = s),
          (t[7] = d),
          (t[8] = m))
        : (m = t[8]);
      var p;
      return (
        t[9] !== i || t[10] !== m
          ? ((p = u.jsx(f.Provider, { value: i, children: m })),
            (t[9] = i),
            (t[10] = m),
            (t[11] = p))
          : (p = t[11]),
        p
      );
    }
    function D() {
      return p(v);
    }
    function x(t) {
      var n =
          t === "left"
            ? f
            : t === "right"
              ? y
              : t === "mid"
                ? v
                : t === "fullscreen"
                  ? L
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          t,
                      );
                    })(),
        a = p(n);
      if (a == null) {
        var i = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(t);
        if (i != null)
          return (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[useDrawerManagerContext] ",
                  " ctx unavailable, using global",
                ])),
              t,
            ),
            i
          );
        throw r("err")(
          "useDrawerManagerContext: " +
            t +
            " drawer manager context is not available. Make sure the component is wrapped with the appropriate DrawerManagerContextProvider.",
        );
      }
      return a;
    }
    ((l.LeftDrawerManagerContextProvider = g),
      (l.DrawerManagerContextProvider = I),
      (l.DrawerManagerGlobalBridgeProvider = T),
      (l.useMiddleDrawerManagerContext = D),
      (l.useDrawerManagerContext = x));
  },
  98,
);
