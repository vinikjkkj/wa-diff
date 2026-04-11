__d(
  "useWAWebTimeout",
  [
    "WATimeUtils",
    "WAWebAlarm",
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef;
    function m(e, t, n) {
      var r = o("react-compiler-runtime").c(12),
        a = t === void 0 ? 0 : t,
        i;
      r[0] !== n
        ? ((i = n != null ? n : {}), (r[0] = n), (r[1] = i))
        : (i = r[1]);
      var l = i,
        s = l.immediate,
        u = s === void 0 ? !1 : s,
        d = p(e),
        m = d[0],
        _ = d[1],
        f;
      r[2] !== a || r[3] !== m
        ? ((f = function () {
            return m(a);
          }),
          (r[2] = a),
          (r[3] = m),
          (r[4] = f))
        : (f = r[4]);
      var g = f,
        h,
        y;
      (r[5] !== u || r[6] !== g
        ? ((h = function () {
            u && g();
          }),
          (y = [u, g]),
          (r[5] = u),
          (r[6] = g),
          (r[7] = h),
          (r[8] = y))
        : ((h = r[7]), (y = r[8])),
        c(h, y));
      var C;
      return (
        r[9] !== _ || r[10] !== g
          ? ((C = [g, _]), (r[9] = _), (r[10] = g), (r[11] = C))
          : (C = r[11]),
        C
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(7),
        n = r("useWAWebStableCallback")(e),
        a = d(),
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            a.current && self.clearTimeout(a.current);
          }),
          (t[0] = i))
        : (i = t[0]);
      var l = i,
        s;
      t[1] !== n
        ? ((s = function (t) {
            (l(), (a.current = self.setTimeout(n, t)));
          }),
          (t[1] = n),
          (t[2] = s))
        : (s = t[2]);
      var u = s,
        m,
        p;
      (t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = function () {
            return l;
          }),
          (p = [l]),
          (t[3] = m),
          (t[4] = p))
        : ((m = t[3]), (p = t[4])),
        c(m, p));
      var _;
      return (
        t[5] !== u ? ((_ = [u, l]), (t[5] = u), (t[6] = _)) : (_ = t[6]),
        _
      );
    }
    function _(e, t, n) {
      var r = o("react-compiler-runtime").c(13),
        a;
      r[0] !== n
        ? ((a = n != null ? n : {}), (r[0] = n), (r[1] = a))
        : (a = r[1]);
      var i = a,
        l = i.immediate,
        s = i.isGlobal,
        u = l === void 0 ? !1 : l,
        d = s === void 0 ? !1 : s,
        m = f(e),
        p = m[0],
        _ = m[1],
        g;
      r[2] !== t || r[3] !== d || r[4] !== p
        ? ((g = function () {
            return p(t, d);
          }),
          (r[2] = t),
          (r[3] = d),
          (r[4] = p),
          (r[5] = g))
        : (g = r[5]);
      var h = g,
        y,
        C;
      (r[6] !== u || r[7] !== h
        ? ((y = function () {
            u && h();
          }),
          (C = [u, h]),
          (r[6] = u),
          (r[7] = h),
          (r[8] = y),
          (r[9] = C))
        : ((y = r[8]), (C = r[9])),
        c(y, C));
      var b;
      return (
        r[10] !== _ || r[11] !== h
          ? ((b = [h, _]), (r[10] = _), (r[11] = h), (r[12] = b))
          : (b = r[12]),
        b
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(7),
        n = r("useWAWebStableCallback")(e),
        a = d(),
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            a.current != null && r("WAWebAlarm").clearTimeout(a.current);
          }),
          (t[0] = i))
        : (i = t[0]);
      var l = i,
        s;
      t[1] !== n
        ? ((s = function (t, i) {
            i
              ? (a.current = r("WAWebAlarm").setGlobalTimeout(
                  n,
                  o("WATimeUtils").castUnixTimeToMillisTime(t),
                  a.current,
                ))
              : (a.current = r("WAWebAlarm").setLocalTimeout(
                  n,
                  o("WATimeUtils").castUnixTimeToMillisTime(t),
                  a.current,
                ));
          }),
          (t[1] = n),
          (t[2] = s))
        : (s = t[2]);
      var u = s,
        m,
        p;
      (t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = function () {
            return l;
          }),
          (p = [l]),
          (t[3] = m),
          (t[4] = p))
        : ((m = t[3]), (p = t[4])),
        c(m, p));
      var _;
      return (
        t[5] !== u ? ((_ = [u, l]), (t[5] = u), (t[6] = _)) : (_ = t[6]),
        _
      );
    }
    ((l.useTimeout = m), (l.useManualTimeout = p), (l.useAlarm = _));
  },
  98,
);
