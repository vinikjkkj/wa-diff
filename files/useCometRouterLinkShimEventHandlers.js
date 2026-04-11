__d(
  "useCometRouterLinkShimEventHandlers",
  ["CometGHLRenderingContext", "ReactDOM", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.onContextMenu,
        a = e.onHoverStart,
        i = e.onPress,
        l = e.shimmed,
        s = u(r("CometGHLRenderingContext")),
        d = c(s),
        m = d[0],
        p = d[1],
        _;
      t[0] !== n || t[1] !== m
        ? ((_ = function (t) {
            (n == null || n(t),
              m &&
                o("ReactDOM").flushSync(function () {
                  p(!1);
                }));
          }),
          (t[0] = n),
          (t[1] = m),
          (t[2] = _))
        : (_ = t[2]);
      var f = _,
        g;
      t[3] !== i || t[4] !== m
        ? ((g = function (t) {
            (i == null || i(t),
              m &&
                o("ReactDOM").flushSync(function () {
                  p(!1);
                }));
          }),
          (t[3] = i),
          (t[4] = m),
          (t[5] = g))
        : (g = t[5]);
      var h = g,
        y;
      t[6] !== a || t[7] !== l
        ? ((y = function (t) {
            (a == null || a(t), l === !0 && p(!0));
          }),
          (t[6] = a),
          (t[7] = l),
          (t[8] = y))
        : (y = t[8]);
      var C = y,
        b;
      return (
        t[9] !== f || t[10] !== C || t[11] !== h || t[12] !== m
          ? ((b = {
              onContextMenu: f,
              onHoverStart: C,
              onPress: h,
              useOrigHref: m,
            }),
            (t[9] = f),
            (t[10] = C),
            (t[11] = h),
            (t[12] = m),
            (t[13] = b))
          : (b = t[13]),
        b
      );
    }
    l.default = d;
  },
  98,
);
