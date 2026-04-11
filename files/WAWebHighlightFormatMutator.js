__d(
  "WAWebHighlightFormatMutator",
  [
    "WAWebExtractRangesUsingRegex",
    "WAWebFormatMutator",
    "WAWebHighlightMutatorComponent.react",
    "WAWebL10N",
    "WAWebL10NIsLatinAlphabetLanguage",
    "WAWebL10NRemoveAccents",
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
            if (!n) return [];
            var e = n.boundary,
              a = e === void 0 ? !1 : e,
              i = n.ignoreDiacritics,
              l = i === void 0 ? !1 : i,
              s = n.terms;
            if (
              !s.length ||
              s.every(function (e) {
                return e.length === 0;
              })
            )
              return [];
            var u =
                l &&
                o("WAWebL10NIsLatinAlphabetLanguage").isLatinAlphabetLanguage(
                  t,
                ) &&
                s.every(function (e) {
                  return o(
                    "WAWebL10NIsLatinAlphabetLanguage",
                  ).isLatinAlphabetLanguage(e);
                }) &&
                !r("WAWebL10N").isRTL(),
              d = u ? o("WAWebL10NRemoveAccents").removeAccents(t) : t,
              m = r("WAWebExtractRangesUsingRegex")(d, c(s, a, u));
            return m;
          }),
          t
        );
      })(r("WAWebFormatMutator"));
    u.jsx = function (e, t, n) {
      var o = n.selectable;
      return s.jsx(r("WAWebHighlightMutatorComponent.react"), {
        selectable: o,
        children: e,
      });
    };
    function c(e, t, n) {
      var a = n
          ? e.map(function (e) {
              return o("WAWebL10NRemoveAccents").removeAccents(e);
            })
          : e,
        i = a.filter(function (e) {
          return e.trim().length > 0;
        }),
        l = i.map(r("escapeRegex")).join("|");
      return r("WAWebL10N").isRTL()
        ? new RegExp((t ? "(?:^|\\b)" : "") + "(\\S+)?(" + l + ")(\\S+)?", "ig")
        : new RegExp((t ? "(?:^|\\b)" : "") + "(" + l + ")", "ig");
    }
    l.default = u;
  },
  98,
);
