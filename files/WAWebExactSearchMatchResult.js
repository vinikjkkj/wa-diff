__d(
  "WAWebExactSearchMatchResult",
  ["WAWebSearchMatchResult"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t, n) {
        return e.call(this, t, n) || this;
      }
      return (
        babelHelpers.inheritsLoose(t, e),
        (t.noMatch = function () {
          return new t(-1, 0);
        }),
        t
      );
    })(o("WAWebSearchMatchResult").WAWebSearchMatchResult);
    l.WAWebExactSearchMatchResult = e;
  },
  98,
);
