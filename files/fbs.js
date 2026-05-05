__d(
  "fbs",
  ["fbt", "invariant", "FbtHooks", "FbtPureStringResult"],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c = {},
      d = babelHelpers.extends({}, s, {
        _param: function (t, n, o) {
          return (
            typeof n == "string" ||
              n instanceof r("FbtPureStringResult") ||
              u(0, 11709, n, typeof n),
            s._param(t, n, o)
          );
        },
        _plural: function (t, n, o) {
          return (
            o == null ||
              typeof o == "string" ||
              o instanceof r("FbtPureStringResult") ||
              u(0, 47119, o, typeof o),
            s._plural(t, n, o)
          );
        },
        _wrapContent: function (n, o, a, i) {
          var t = typeof n == "string" ? [n] : n,
            l = (e || (e = r("FbtHooks"))).getErrorListener({
              hash: a,
              translation: o,
            });
          return e.getFbsResult({
            contents: t,
            errorListener: l,
            extraOptions: i,
            patternHash: a,
            patternString: o,
          });
        },
        cachedResults: c,
      }),
      m = d,
      p = m;
    l.default = p;
  },
  98,
);
