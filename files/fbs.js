__d(
  "fbs",
  ["fbt", "invariant", "FbtHooks", "FbtPureStringResult"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = {},
      c = babelHelpers.extends({}, l, {
        _param: function (t, r, o) {
          return (
            typeof r == "string" ||
              r instanceof n("FbtPureStringResult") ||
              s(0, 11709, r, typeof r),
            l._param(t, r, o)
          );
        },
        _plural: function (t, r, o) {
          return (
            o == null ||
              typeof o == "string" ||
              o instanceof n("FbtPureStringResult") ||
              s(0, 47119, o, typeof o),
            l._plural(t, r, o)
          );
        },
        _wrapContent: function (r, o, a, i) {
          var t = typeof r == "string" ? [r] : r,
            l = (e || (e = n("FbtHooks"))).getErrorListener({
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
        cachedResults: u,
      }),
      d = c;
    a.exports = d;
  },
  null,
);
