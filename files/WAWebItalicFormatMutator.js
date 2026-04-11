__d(
  "WAWebItalicFormatMutator",
  [
    "WAWebAdjustDelimitedRange",
    "WAWebCreateRegexMutator",
    "WAWebItalicFormatRegex",
    "WAWebItalicMutatorComponent.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebAdjustDelimitedRange")("_"),
      c = r("WAWebCreateRegexMutator")(r("WAWebItalicFormatRegex"), 1, u),
      d = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.jsx = function (t, n, o) {
            var e = o.selectable,
              a = e === void 0 ? !1 : e;
            return s.jsx(r("WAWebItalicMutatorComponent.react"), {
              selectable: a,
              children: t,
            });
          }),
          t
        );
      })(c);
    l.default = d;
  },
  98,
);
