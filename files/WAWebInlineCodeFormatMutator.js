__d(
  "WAWebInlineCodeFormatMutator",
  [
    "WAWebAdjustDelimitedRange",
    "WAWebCreateRegexMutator",
    "WAWebInlineCodeFormatRegex",
    "WAWebInlineCodeMutatorComponent.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebAdjustDelimitedRange")("`"),
      c = r("WAWebCreateRegexMutator")(r("WAWebInlineCodeFormatRegex"), 1, u),
      d = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.jsx = function (t, n, o) {
            var e = o.quoted,
              a = e === void 0 ? !1 : e,
              i = o.selectable,
              l = i === void 0 ? !1 : i;
            return s.jsx(r("WAWebInlineCodeMutatorComponent.react"), {
              selectable: l,
              quoted: a,
              children: t,
            });
          }),
          t
        );
      })(c);
    ((d.format = !1), (l.default = d));
  },
  98,
);
