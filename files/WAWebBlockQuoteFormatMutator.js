__d(
  "WAWebBlockQuoteFormatMutator",
  ["WAWebBlockQuoteMutatorComponent.react", "WAWebCreateRegexMutator", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = /(?:^)\>(\s(?! +)[^\n]+(?:$)(?:\n|$))/gm,
      c = /(?:^)\>(\s(?! +)[^\n]*(?:$)(?:\n|$))/gm,
      d = r("WAWebCreateRegexMutator")(u, 1),
      m = r("WAWebCreateRegexMutator")(c, 1),
      p = (function (e) {
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
      })(d);
    p.unformatDecorations = { pre: ">" };
    var _ = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(m);
    ((l.BlockQuote = p), (l.BlockQuoteWithEmpty = _));
  },
  98,
);
