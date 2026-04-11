__d(
  "WAWebEmojiSuggestions.react",
  [
    "WAWebEmojiKeywordToUnicode",
    "WAWebEmojiSuggestionsPanel.react",
    "WAWebRecentEmojiCollection",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(12),
        n = e.editor,
        a = e.emojiSuggestionSelect,
        i = e.kind,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { minQueryLength: d, maxQueryLength: m, boundary: !0 }),
          (t[0] = l))
        : (l = t[0]);
      var u = o("useWAWebLexicalTypeAhead").useTypeAhead(n, c, l),
        p = u.omitQuery,
        _ = u.query,
        f = u.replaceQuery,
        g;
      e: {
        if (_ == null) {
          g = null;
          break e;
        }
        var h;
        t[1] !== _
          ? ((h = o("WAWebEmojiKeywordToUnicode").emojiKeywordToUnicodeSearch(
              _,
            )),
            (t[1] = _),
            (t[2] = h))
          : (h = t[2]);
        var y = h;
        if (y.length === 0) {
          g = null;
          break e;
        }
        g = y.length === 0 ? null : y;
      }
      var C = g,
        b;
      t[3] !== f
        ? ((b = function (t) {
            (o("WAWebRecentEmojiCollection").RecentEmojiCollection.increment(t),
              f(t));
          }),
          (t[3] = f),
          (t[4] = b))
        : (b = t[4]);
      var v = b,
        S;
      return (
        t[5] !== n ||
        t[6] !== a ||
        t[7] !== C ||
        t[8] !== v ||
        t[9] !== i ||
        t[10] !== p
          ? ((S = s.jsx(r("WAWebEmojiSuggestionsPanel.react"), {
              kind: i,
              editor: n,
              emojis: C,
              onSelect: v,
              onDismiss: p,
              emojiSuggestionSelect: a,
            })),
            (t[5] = n),
            (t[6] = a),
            (t[7] = C),
            (t[8] = v),
            (t[9] = i),
            (t[10] = p),
            (t[11] = S))
          : (S = t[11]),
        S
      );
    }
    l.default = p;
  },
  98,
);
