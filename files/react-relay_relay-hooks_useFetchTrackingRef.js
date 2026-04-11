__d(
  "react-relay/relay-hooks/useFetchTrackingRef",
  [
    "react",
    "react-compiler-runtime",
    "react-relay/relay-hooks/useUnsafeRef_DEPRECATED",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("react-compiler-runtime").c,
      s = e || (e = n("react")),
      u = s.useCallback,
      c = s.useEffect;
    function d() {
      var e = l(20),
        t = n("react-relay/relay-hooks/useUnsafeRef_DEPRECATED")(null),
        r = n("react-relay/relay-hooks/useUnsafeRef_DEPRECATED")(!1),
        o;
      e[0] !== r || e[1] !== t
        ? ((o = function () {
            (t.current != null && (t.current.unsubscribe(), (t.current = null)),
              (r.current = !1));
          }),
          (e[0] = r),
          (e[1] = t),
          (e[2] = o))
        : (o = e[2]);
      var a;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = []), (e[3] = a))
        : (a = e[3]);
      var i = u(o, a),
        s;
      e[4] !== r || e[5] !== t
        ? ((s = function (n) {
            ((t.current = n), (r.current = !0));
          }),
          (e[4] = r),
          (e[5] = t),
          (e[6] = s))
        : (s = e[6]);
      var d;
      e[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = []), (e[7] = d))
        : (d = e[7]);
      var m = u(s, d),
        p;
      e[8] !== r || e[9] !== t
        ? ((p = function () {
            ((t.current = null), (r.current = !1));
          }),
          (e[8] = r),
          (e[9] = t),
          (e[10] = p))
        : (p = e[10]);
      var _;
      e[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = []), (e[11] = _))
        : (_ = e[11]);
      var f = u(p, _),
        g,
        h;
      (e[12] !== i
        ? ((g = function () {
            return i;
          }),
          (h = [i]),
          (e[12] = i),
          (e[13] = g),
          (e[14] = h))
        : ((g = e[13]), (h = e[14])),
        c(g, h));
      var y;
      return (
        e[15] !== f || e[16] !== i || e[17] !== r || e[18] !== m
          ? ((y = {
              isFetchingRef: r,
              startFetch: m,
              disposeFetch: i,
              completeFetch: f,
            }),
            (e[15] = f),
            (e[16] = i),
            (e[17] = r),
            (e[18] = m),
            (e[19] = y))
          : (y = e[19]),
        y
      );
    }
    a.exports = d;
  },
  null,
);
