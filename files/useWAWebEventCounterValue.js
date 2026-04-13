__d(
  "useWAWebEventCounterValue",
  ["react", "react-compiler-runtime", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e, t, n) {
      var r = o("react-compiler-runtime").c(8),
        a = n === void 0 ? 0 : n,
        i;
      if (e == null) {
        var l;
        (r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = []), (r[0] = l))
          : (l = r[0]),
          (i = l));
      } else if (Array.isArray(e)) i = e;
      else {
        var u;
        (r[1] !== e ? ((u = [e]), (r[1] = e), (r[2] = u)) : (u = r[2]),
          (i = u));
      }
      var c = s(a),
        d = c[0],
        m = c[1],
        p;
      if (r[3] !== t || r[4] !== i) {
        var _;
        (r[6] !== t
          ? ((_ = function (n) {
              return {
                source: n,
                eventOrEvents: t,
                callback: function (t) {
                  var e = t === void 0 ? 1 : t;
                  m(function (t) {
                    return t + e;
                  });
                },
              };
            }),
            (r[6] = t),
            (r[7] = _))
          : (_ = r[7]),
          (p = i.map(_)),
          (r[3] = t),
          (r[4] = i),
          (r[5] = p));
      } else p = r[5];
      return (o("useWAWebListener").useListeners(p), d);
    }
    l.default = u;
  },
  98,
);
