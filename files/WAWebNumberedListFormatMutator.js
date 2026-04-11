__d(
  "WAWebNumberedListFormatMutator",
  [
    "WAWebBoolFunc",
    "WAWebCreateRegexMutator",
    "WAWebNumberedListMutatorComponent.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u =
        /((?:^)(?:(\d{1,2})\. (?! +)(?:[^\n]+)(?:\n(?:(\d{1,2})\. [^\n]+)){0,})(?:\n|$))/gm,
      c = r("WAWebCreateRegexMutator")(u, 0),
      d = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.jsx = function (t, n, o) {
            return s.jsx(
              r("WAWebNumberedListMutatorComponent.react"),
              babelHelpers.extends({}, o, { children: t }),
            );
          }),
          t
        );
      })(c);
    ((d.nestable = o("WAWebBoolFunc").returnFalse), (l.default = d));
  },
  98,
);
