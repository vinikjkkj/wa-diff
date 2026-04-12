__d(
  "useWAWebMessageDensity",
  ["WAWebDBMessageDensity", "react"],
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
      var n = c(null),
        r = n[0],
        a = n[1],
        i = t.getFullYear(),
        l = t.getMonth(),
        s = e != null ? e.toString() : null,
        p = s != null ? m(s, i, l) : null,
        _ = p != null ? d.get(p) : void 0,
        f = s != null && p != null && _ == null;
      return (
        u(
          function () {
            if (!(!f || p == null || s == null)) {
              var e = !1,
                t = new Date(i, l, 1),
                n = new Date(i, l + 1, 0);
              return (
                o("WAWebDBMessageDensity")
                  .getMessageCountsForDateRange(s, t, n)
                  .then(function (t) {
                    e || (d.set(p, t), a({ key: p, data: t }));
                  }),
                function () {
                  e = !0;
                }
              );
            }
          },
          [f, s, p, i, l],
        ),
        _ != null ? _ : r != null && r.key === p ? r.data : null
      );
    }
    l.default = p;
  },
  98,
);
