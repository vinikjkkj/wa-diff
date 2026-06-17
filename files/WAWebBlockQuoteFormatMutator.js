__d(
  "WAWebBlockQuoteFormatMutator",
  ["WAWebBlockQuoteMutatorComponent.react", "WAWebCreateRegexMutator", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = /(?:^)\>([^\S\n](?! +)[^\n]*(?:$)(?:\n|$))/gm,
      c = r("WAWebCreateRegexMutator")(u, 1),
      d = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.jsx = function (t, n, o) {
            var e = o.inline,
              a = e === void 0 ? !1 : e,
              i = o.quoted,
              l = i === void 0 ? !1 : i,
              u = o.selectable,
              c = u === void 0 ? !1 : u,
              d = n[1];
            return s.jsx(r("WAWebBlockQuoteMutatorComponent.react"), {
              selectable: c,
              inline: a,
              text: d,
              quoted: l,
              children: t,
            });
          }),
          t
        );
      })(c);
    d.unformatDecorations = { pre: ">" };
    var m = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(c);
    ((l.BlockQuote = d), (l.BlockQuoteWithEmpty = m));
  },
  98,
);
