__d(
  "lazyLoadComponent",
  ["BootloaderResource", "cr:2448", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = new Map();
    function d(e, t) {
      c.set(e, t);
    }
    function m(e) {
      return c.get(e);
    }
    function p(t) {
      var r = m(t);
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
          c;
        a[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = o("BootloaderResource").read(t)), (a[3] = c))
          : (c = a[3]);
        var d = c;
        n("cr:2448")(t);
        var m;
        return (
          a[4] !== i || a[5] !== s
            ? ((m = u.jsx(d, babelHelpers.extends({}, i, { ref: s }))),
              (a[4] = i),
              (a[5] = s),
              (a[6] = m))
            : (m = a[6]),
          m
        );
      }
      return (
        (a.displayName = "lazyLoadComponent(" + t.getModuleId() + ")"),
        d(t, a),
        a
      );
    }
    l.default = p;
  },
  98,
);
