__d(
  "useWAWebMessageDensity",
  ["WAWebDBMessageDensity", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState,
      d = new Map();
    function m(e, t, n) {
      return e + "_" + t + "_" + n;
    }
    function p(e, t) {
      var n = o("react-compiler-runtime").c(14),
        r = c(null),
        a = r[0],
        i = r[1],
        l,
        s,
        p,
        _,
        f;
      n[0] !== e || n[1] !== t
        ? ((f = t.getFullYear()),
          (p = t.getMonth()),
          (l = e != null ? e.toString() : null),
          (s = l != null ? m(l, f, p) : null),
          (_ = s != null ? d.get(s) : void 0),
          (n[0] = e),
          (n[1] = t),
          (n[2] = l),
          (n[3] = s),
          (n[4] = p),
          (n[5] = _),
          (n[6] = f))
        : ((l = n[2]), (s = n[3]), (p = n[4]), (_ = n[5]), (f = n[6]));
      var g = _,
        h = l != null && s != null && g == null,
        y,
        C;
      return (
        n[7] !== l || n[8] !== s || n[9] !== p || n[10] !== h || n[11] !== f
          ? ((y = function () {
              if (!(!h || s == null || l == null)) {
                var e = !1,
                  t = new Date(f, p, 1),
                  n = new Date(f, p + 1, 0);
                return (
                  o("WAWebDBMessageDensity")
                    .getMessageCountsForDateRange(l, t, n)
                    .then(function (t) {
                      e || (d.set(s, t), i({ key: s, data: t }));
                    }),
                  function () {
                    e = !0;
                  }
                );
              }
            }),
            (C = [h, l, s, f, p]),
            (n[7] = l),
            (n[8] = s),
            (n[9] = p),
            (n[10] = h),
            (n[11] = f),
            (n[12] = y),
            (n[13] = C))
          : ((y = n[12]), (C = n[13])),
        u(y, C),
        g != null ? g : a != null && a.key === s ? a.data : null
      );
    }
    l.default = p;
  },
  98,
);
