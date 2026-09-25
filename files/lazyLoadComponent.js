__d(
  "lazyLoadComponent",
  [
    "BootloaderResource",
    "cr:2448",
    "cr:38536",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = ["ref"],
      u,
      c = u || (u = o("react")),
      d = new Map();
    function m(e, t, n) {
      var r = d.get(e);
      (r == null && ((r = new Map()), d.set(e, r)), r.set(t, n));
    }
    function p(e, t) {
      var n;
      return (n = d.get(e)) == null ? void 0 : n.get(t);
    }
    function _(t, r) {
      var a = p(t, r);
      if (a) return a;
      function i(r) {
        var a = o("react-compiler-runtime").c(7),
          i,
          l;
        a[0] !== r
          ? ((l = r.ref),
            (i = babelHelpers.objectWithoutPropertiesLoose(r, e)),
            (a[0] = r),
            (a[1] = i),
            (a[2] = l))
          : ((i = a[1]), (l = a[2]));
        var s = l === void 0 ? void 0 : l,
          u;
        a[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = o("BootloaderResource").read(t)), (a[3] = u))
          : (u = a[3]);
        var d = u;
        n("cr:2448")(t);
        var m;
        return (
          a[4] !== i || a[5] !== s
            ? ((m = c.jsx(d, babelHelpers.extends({}, i, { ref: s }))),
              (a[4] = i),
              (a[5] = s),
              (a[6] = m))
            : (m = a[6]),
          m
        );
      }
      i.displayName = "lazyLoadComponent(" + t.getModuleId() + ")";
      var l = i;
      if (n("cr:38536") != null) {
        var u = function (t) {
            var e = o("react-compiler-runtime").c(6),
              n,
              a;
            e[0] !== t
              ? ((a = t.ref),
                (n = babelHelpers.objectWithoutPropertiesLoose(t, s)),
                (e[0] = t),
                (e[1] = n),
                (e[2] = a))
              : ((n = e[1]), (a = e[2]));
            var l = a === void 0 ? void 0 : a,
              u;
            return (
              e[3] !== n || e[4] !== l
                ? ((u = c.jsx(_, {
                    description: d,
                    fallback: g,
                    fallbackComponent: r,
                    moduleName: d,
                    children: c.jsx(i, babelHelpers.extends({}, n, { ref: l })),
                  })),
                  (e[3] = n),
                  (e[4] = l),
                  (e[5] = u))
                : (u = e[5]),
              u
            );
          },
          d = t.getModuleId(),
          _ = n("cr:38536"),
          f = r,
          g =
            f == null
              ? void 0
              : function (e, t) {
                  return c.jsx(f, { error: e, moduleName: t });
                };
        ((u.displayName = "lazyLoadComponent(" + d + ")[ErrorBoundary]"),
          (l = u));
      }
      return (m(t, r, l), l);
    }
    l.default = _;
  },
  98,
);
