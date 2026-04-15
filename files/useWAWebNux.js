__d(
  "useWAWebNux",
  [
    "WAWebNuxAction",
    "WAWebUserPrefsNuxPreferences",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useState;
    function m(e, t) {
      var n = o("react-compiler-runtime").c(24),
        r = t === void 0 ? o("WAWebUserPrefsNuxPreferences").shouldShowNUX : t,
        a;
      n[0] !== e || n[1] !== r
        ? ((a = function () {
            return r(e);
          }),
          (n[0] = e),
          (n[1] = r),
          (n[2] = a))
        : (a = n[2]);
      var i = d(a),
        l = i[0],
        s = i[1],
        u,
        m;
      (n[3] !== e || n[4] !== r
        ? ((u = function () {
            var t = o("WAWebUserPrefsNuxPreferences").getNUX(e);
            t == null &&
              (o("WAWebUserPrefsNuxPreferences").setNUX(e, { views: 0 }),
              s(r(e)));
          }),
          (m = [e, r]),
          (n[3] = e),
          (n[4] = r),
          (n[5] = u),
          (n[6] = m))
        : ((u = n[5]), (m = n[6])),
        c(u, m));
      var p;
      n[7] !== e || n[8] !== r
        ? ((p = function () {
            (o("WAWebNuxAction").viewNux(e), s(r(e)));
          }),
          (n[7] = e),
          (n[8] = r),
          (n[9] = p))
        : (p = n[9]);
      var _ = p,
        f;
      n[10] !== e || n[11] !== r
        ? ((f = function () {
            (o("WAWebNuxAction").dismissNux(e), s(r(e)));
          }),
          (n[10] = e),
          (n[11] = r),
          (n[12] = f))
        : (f = n[12]);
      var g = f,
        h;
      n[13] !== e || n[14] !== r
        ? ((h = function () {
            (o("WAWebNuxAction").resetNux(e), s(r(e)));
          }),
          (n[13] = e),
          (n[14] = r),
          (n[15] = h))
        : (h = n[15]);
      var y = h,
        C;
      (n[16] !== e || n[17] !== r
        ? ((C = function () {
            s(r(e));
          }),
          (n[16] = e),
          (n[17] = r),
          (n[18] = C))
        : (C = n[18]),
        o("useWAWebListener").useListener(
          o("WAWebUserPrefsNuxPreferences").NuxPrefsEvent,
          e,
          C,
        ));
      var b;
      return (
        n[19] !== g || n[20] !== y || n[21] !== l || n[22] !== _
          ? ((b = [l, _, g, y]),
            (n[19] = g),
            (n[20] = y),
            (n[21] = l),
            (n[22] = _),
            (n[23] = b))
          : (b = n[23]),
        b
      );
    }
    l.default = m;
  },
  98,
);
