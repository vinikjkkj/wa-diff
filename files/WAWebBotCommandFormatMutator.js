__d(
  "WAWebBotCommandFormatMutator",
  [
    "WAWebBotCommandMutatorComponent.react",
    "WAWebExtractRangesUsingRegex",
    "WAWebFormatMutator",
    "escapeRegex",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.match = function (t, n) {
            var e = n != null ? n : {},
              o = e.commands;
            if (!o || o.length === 0) return [];
            var a = o.map(function (e) {
                return r("escapeRegex")("/" + e.name);
              }),
              i = new RegExp("(" + a.join("|") + ")(?=$|\\s)", "gmi"),
              l = !1;
            return r("WAWebExtractRangesUsingRegex")(t, i, 0, function (e) {
              return l ? null : ((l = !0), e);
            });
          }),
          t
        );
      })(r("WAWebFormatMutator"));
    ((u.format = !1),
      (u.jsx = function (e, t) {
        return s.jsx(r("WAWebBotCommandMutatorComponent.react"), {
          children: e,
        });
      }),
      (l.BotCommand = u));
  },
  98,
);
