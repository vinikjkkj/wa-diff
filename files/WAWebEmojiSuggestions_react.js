__d(
  "WAWebEmojiSuggestions.react",
  [
    "WAWebEmojiKeywordToUnicode",
    "WAWebEmojiSuggestionsPanel.react",
    "WAWebRecentEmojiCollection",
    "react",
    "useWAWebLexicalTypeAhead",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = ":",
      d = 2,
      m = 50;
    function p(e) {
      var t = e.editor,
        n = e.emojiSuggestionSelect,
        a = e.kind,
        i = o("useWAWebLexicalTypeAhead").useTypeAhead(t, c, {
          minQueryLength: d,
          maxQueryLength: m,
          boundary: !0,
        }),
        l = i.omitQuery,
        p = i.query,
        _ = i.replaceQuery,
        f = u(
          function () {
            if (p == null) return null;
            var e = o("WAWebEmojiKeywordToUnicode").emojiKeywordToUnicodeSearch(
              p,
            );
            return e.length === 0 || e.length === 0 ? null : e;
          },
          [p],
        ),
        g = function (t) {
          (o("WAWebRecentEmojiCollection").RecentEmojiCollection.increment(t),
            _(t));
        };
      return s.jsx(r("WAWebEmojiSuggestionsPanel.react"), {
        kind: a,
        editor: t,
        emojis: f,
        onSelect: g,
        onDismiss: l,
        emojiSuggestionSelect: n,
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
