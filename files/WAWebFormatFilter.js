__d(
  "WAWebFormatFilter",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      if (e.length === 1) return e;
      for (var n = [], r; (r = e.pop()); ) {
        for (
          var o = r,
            a = o[0],
            i = o[3],
            l = o[4],
            s = t[l],
            u = s[0],
            c = s[2],
            d = !0,
            m = n.length,
            p = m - 1;
          p >= 0;
          --p
        ) {
          var _ = n[p],
            f = _[2],
            g = _[3],
            h = _[4];
          if (!(a > g)) {
            var y = t[h],
              C = y[0],
              b = y[2];
            if (i > f) {
              if (c < b && n.splice(p, 1)) continue;
              d = !1;
              break;
            }
            if (C.mutates && !(d = !1)) break;
            if (u.compatibility) {
              u.nestable(C) || (d = !1);
              break;
            }
            if (
              !(
                !u.nestable(C) &&
                !C.compatibility &&
                c < b &&
                n.splice(p, 1)
              ) &&
              !u.compatibility &&
              !C.format
            ) {
              d = !1;
              break;
            }
          }
        }
        d && n.push(r);
      }
      return n;
    }
    i.default = e;
  },
  66,
);
