__d(
  "useWAWebSet",
  ["Promise", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useState;
    function m(t) {
      var r = o("react-compiler-runtime").c(9),
        a;
      r[0] !== t ? ((a = t ? t() : p), (r[0] = t), (r[1] = a)) : (a = r[1]);
      var i = d(a),
        l = i[0],
        s = i[1],
        u;
      r[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = function (r) {
            return new (e || (e = n("Promise")))(function (e) {
              s(function (t) {
                var n = new Set(t);
                return (n.add(r), e(n), n);
              });
            });
          }),
          (r[2] = u))
        : (u = r[2]);
      var c = u,
        m;
      r[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = function (r) {
            return new (e || (e = n("Promise")))(function (e) {
              s(function (t) {
                var n = new Set(t);
                return (n.delete(r), e(n), n);
              });
            });
          }),
          (r[3] = m))
        : (m = r[3]);
      var _ = m,
        f;
      r[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = function (r) {
            return new (e || (e = n("Promise")))(function (e) {
              s(function (t) {
                var n = new Set(t);
                return (n.has(r) ? n.delete(r) : n.add(r), e(n), n);
              });
            });
          }),
          (r[4] = f))
        : (f = r[4]);
      var g = f,
        h;
      r[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function (r) {
            var t = r === void 0 ? [] : r;
            return new (e || (e = n("Promise")))(function (e) {
              s(function () {
                var n = new Set(t);
                return (e(n), n);
              });
            });
          }),
          (r[5] = h))
        : (h = r[5]);
      var y = h,
        C;
      r[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = { add: c, remove: _, toggle: g, clear: y }), (r[6] = C))
        : (C = r[6]);
      var b;
      return (
        r[7] !== l ? ((b = [l, C]), (r[7] = l), (r[8] = b)) : (b = r[8]),
        b
      );
    }
    function p() {
      return new Set();
    }
    l.useSet = m;
  },
  98,
);
