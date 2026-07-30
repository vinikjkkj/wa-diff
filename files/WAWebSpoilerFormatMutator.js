__d(
  "WAWebSpoilerFormatMutator",
  [
    "WAWebCreateRegexMutator",
    "WAWebSpoilerFormatRegex",
    "WAWebSpoilerMutatorComponent.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebCreateRegexMutator")(
        o("WAWebSpoilerFormatRegex").SPOILER_REGEX,
        1,
      ),
      c = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.jsx = function (t, n, o) {
            var e = o.selectable,
              a = o.spoilerInteractive;
            return s.jsx(r("WAWebSpoilerMutatorComponent.react"), {
              selectable: e,
              interactive: a,
              children: t,
            });
          }),
          t
        );
      })(u);
    l.default = c;
  },
  98,
);
