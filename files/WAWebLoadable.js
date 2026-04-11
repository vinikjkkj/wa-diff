__d(
  "WAWebLoadable",
  ["react", "react-compiler-runtime", "react-loadable"],
  function (t, n, r, o, a, i, l) {
    var e = ["forwardedRefDoNotUse"],
      s = ["ref"],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = t.loader,
        a = t.loading,
        i = r("react-loadable")({
          loader: n,
          loading: function (t) {
            return t.pastDelay ? a(t) : null;
          },
          render: function (n, r) {
            var t = r.forwardedRefDoNotUse,
              o = babelHelpers.objectWithoutPropertiesLoose(r, e);
            return c.jsx(n, babelHelpers.extends({ ref: t }, o));
          },
        });
      function l(e) {
        var t = o("react-compiler-runtime").c(6),
          n,
          r;
        t[0] !== e
          ? ((r = e.ref),
            (n = babelHelpers.objectWithoutPropertiesLoose(e, s)),
            (t[0] = e),
            (t[1] = n),
            (t[2] = r))
          : ((n = t[1]), (r = t[2]));
        var a;
        return (
          t[3] !== n || t[4] !== r
            ? ((a = c.jsx(
                i,
                babelHelpers.extends({ forwardedRefDoNotUse: r }, n),
              )),
              (t[3] = n),
              (t[4] = r),
              (t[5] = a))
            : (a = t[5]),
          a
        );
      }
      return l;
    }
    l.default = d;
  },
  98,
);
