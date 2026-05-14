__d(
  "lazyLoadComponent",
  [
    "BootloaderResource",
    "cr:2448",
    "cr:38536",
    "gkx",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = ["ref"],
      u,
      c = u || (u = o("react")),
      d = new Map();
    function m(e, t) {
      d.set(e, t);
    }
    function p(e) {
      return d.get(e);
    }
    function _(t) {
      var a = p(t);
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
      if (n("cr:38536") != null && r("gkx")("18719")) {
        var u = function (t) {
            var e = o("react-compiler-runtime").c(6),
              n,
              r;
            e[0] !== t
              ? ((r = t.ref),
                (n = babelHelpers.objectWithoutPropertiesLoose(t, s)),
                (e[0] = t),
                (e[1] = n),
                (e[2] = r))
              : ((n = e[1]), (r = e[2]));
            var a = r === void 0 ? void 0 : r,
              l;
            return (
              e[3] !== n || e[4] !== a
                ? ((l = c.jsx(_, {
                    description: d,
                    moduleName: d,
                    children: c.jsx(i, babelHelpers.extends({}, n, { ref: a })),
                  })),
                  (e[3] = n),
                  (e[4] = a),
                  (e[5] = l))
                : (l = e[5]),
              l
            );
          },
          d = t.getModuleId(),
          _ = n("cr:38536");
        ((u.displayName = "lazyLoadComponent(" + d + ")[ErrorBoundary]"),
          (l = u));
      }
      return (m(t, l), l);
    }
    l.default = _;
  },
  98,
);
