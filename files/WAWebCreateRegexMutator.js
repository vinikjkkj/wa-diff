__d(
  "WAWebCreateRegexMutator",
  ["WAWebExtractRangesUsingRegex", "WAWebFormatMutator"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return (
        t === void 0 && (t = 0),
        (function (o) {
          function a() {
            return o.apply(this, arguments) || this;
          }
          return (
            babelHelpers.inheritsLoose(a, o),
            (a.match = function (a) {
              return r("WAWebExtractRangesUsingRegex")(a, e, t, n);
            }),
            a
          );
        })(r("WAWebFormatMutator"))
      );
    }
    l.default = e;
  },
  98,
);
