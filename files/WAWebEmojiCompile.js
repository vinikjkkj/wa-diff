__d(
  "WAWebEmojiCompile",
  ["WATrie", "escapeRegex", "isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = r("WATrie").fromForwardsStrings(
        e
          .sort(function (e, t) {
            return t.length - e.length;
          })
          .map(function (e) {
            return "" + e + u;
          }),
      );
      return s({ depth: 0, prefix: null, prevChar: null, trie: t });
    }
    function s(e) {
      var t = e.depth,
        n = e.fe0fIsRequiredArg,
        o = e.prefix,
        a = e.prevChar,
        i = e.trie,
        l = [],
        d = !1,
        m = n;
      if (m == null && !r("isStringNullOrEmpty")(o))
        if (t === 1) {
          var p = c.has(o);
          p && (m = !0);
        } else !r("isStringNullOrEmpty")(a) && t === 2 && (m = c.has(a + o));
      i.getChildren().forEach(function (e) {
        if (e.prefix === u) {
          d = !0;
          return;
        }
        l.push(
          s({
            depth: t + 1,
            fe0fIsRequiredArg: m,
            prefix: e.prefix,
            prevChar: o,
            trie: e.node,
          }),
        );
      });
      var _ =
          o === String.fromCodePoint(65039) && a != null && m !== !0
            ? String.fromCodePoint(65039) + "?"
            : r("escapeRegex")(o || ""),
        f = l.length === 0 ? "" : "(?:" + l.join("|") + ")";
      return (f && d && (f += "?"), "" + _ + f);
    }
    var u = "\n",
      c = new Set([
        String.fromCodePoint(169),
        String.fromCodePoint(174),
        String.fromCodePoint(8482),
        String.fromCodePoint(9823),
        String.fromCodePoint(9854),
        String.fromCodePoint(12336),
      ]);
    l.default = e;
  },
  98,
);
