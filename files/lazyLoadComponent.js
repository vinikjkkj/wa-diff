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
    function m(e, t) {
      d.set(e, t);
    }
    function p(e) {
      return d.get(e);
    }
    function _(t) {
      var r = p(t);
      if (r) return r;
      function a(r) {
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
      a.displayName = "lazyLoadComponent(" + t.getModuleId() + ")";
      var i = a;
      if (n("cr:38536") != null) {
        var l = function (t) {
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
            var i = r === void 0 ? void 0 : r,
              l;
            return (
              e[3] !== n || e[4] !== i
                ? ((l = c.jsx(d, {
                    description: u,
                    moduleName: u,
                    children: c.jsx(a, babelHelpers.extends({}, n, { ref: i })),
                  })),
                  (e[3] = n),
                  (e[4] = i),
                  (e[5] = l))
                : (l = e[5]),
              l
            );
          },
          u = t.getModuleId(),
          d = n("cr:38536");
        ((l.displayName = "lazyLoadComponent(" + u + ")[ErrorBoundary]"),
          (i = l));
      }
      return (m(t, i), i);
    }
    l.default = _;
  },
  98,
);
