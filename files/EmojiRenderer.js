__d(
  "EmojiRenderer",
  ["EmojiRendererData", "UnicodeUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 0,
      c = 1,
      d = 2,
      m = 3,
      p = 4,
      _ = 5,
      f = 6,
      g = 7,
      h = 8,
      y = 9,
      C = 10,
      b = 11;
    function v(e) {
      var t = e[0];
      if (t === void 0) return !1;
      var n = e.length,
        o = e[n - 1];
      if (o) {
        var a = o.charCodeAt(0);
        if ((s || (s = r("EmojiRendererData"))).isTagSpec(a)) return !1;
      }
      if (
        ((t = e[0].charCodeAt(0)),
        (s || (s = r("EmojiRendererData"))).isSymbol(t) && n < 2)
      )
        return !1;
      if ((s || (s = r("EmojiRendererData"))).isText(t)) {
        if (n === 1) return !1;
        if (e.length === 2)
          return (s || (s = r("EmojiRendererData"))).isNonSpacingCombiningMark(
            e[1].charCodeAt(0),
          );
        var i = 1;
        for (
          (s || (s = r("EmojiRendererData"))).isEmojiVariationSelector(
            e[i].charCodeAt(0),
          ) && i++;
          i < e.length;
        ) {
          if (
            !(s || (s = r("EmojiRendererData"))).isNonSpacingCombiningMark(
              e[i].charCodeAt(0),
            )
          )
            return !1;
          i++;
        }
        return !0;
      }
      return !0;
    }
    function S(t, n) {
      for (var a = null, i = [], l = h, S = 0, R = t.length; S < R; ) {
        var L,
          E = (L = t.codePointAt(S)) != null ? L : 0,
          k = (e || (e = o("UnicodeUtils"))).getUTF16Length(t, S),
          I = t.substr(S, k);
        switch (l) {
          case y:
            (s || (s = r("EmojiRendererData"))).isRegionalIndicator(E)
              ? (l = m)
              : (l = h);
            break;
          case p:
            if ((s || (s = r("EmojiRendererData"))).isEmojiModifier(E)) {
              l = _;
              break;
            }
          case u:
            (s || (s = r("EmojiRendererData"))).isZWJ(E)
              ? (l = g)
              : (s || (s = r("EmojiRendererData"))).isEmojiVariationSelector(E)
                ? (l = d)
                : (s || (s = r("EmojiRendererData"))).isTextVariationSelector(E)
                  ? (l = b)
                  : (
                        s || (s = r("EmojiRendererData"))
                      ).isNonSpacingCombiningMark(E)
                    ? (l = c)
                    : (s || (s = r("EmojiRendererData"))).isTagSpec(E)
                      ? (l = f)
                      : (l = h);
            break;
          case c:
          case d:
            if (
              (s || (s = r("EmojiRendererData"))).isNonSpacingCombiningMark(E)
            )
              break;
          case m:
          case _:
            (s || (s = r("EmojiRendererData"))).isZWJ(E)
              ? (l = g)
              : (s || (s = r("EmojiRendererData"))).isTagSpec(E)
                ? (l = f)
                : (l = h);
            break;
          case f:
            (s || (s = r("EmojiRendererData"))).isTagSpec(E) ||
            (s || (s = r("EmojiRendererData"))).isTagTerm(E)
              ? (l = f)
              : (l = h);
            break;
          case g:
            (s || (s = r("EmojiRendererData"))).isRegionalIndicator(E)
              ? (l = y)
              : (s || (s = r("EmojiRendererData"))).isEmojiModifierBase(E)
                ? (l = p)
                : (s || (s = r("EmojiRendererData"))).isEmoji(E)
                  ? (l = u)
                  : (l = h);
            break;
          case C:
            (s || (s = r("EmojiRendererData"))).isNonSpacingCombiningMark(E)
              ? (l = c)
              : (s || (s = r("EmojiRendererData"))).isEmojiVariationSelector(E)
                ? (l = d)
                : (l = h);
            break;
          default:
            l = h;
            break;
        }
        if (l === h) {
          if (
            ((s || (s = r("EmojiRendererData"))).isRegionalIndicator(E)
              ? (l = y)
              : (s || (s = r("EmojiRendererData"))).isEmojiModifierBase(E)
                ? (l = p)
                : (s || (s = r("EmojiRendererData"))).isText(E)
                  ? (l = C)
                  : (s || (s = r("EmojiRendererData"))).isEmoji(E) && (l = u),
            l !== h)
          ) {
            if (
              (a !== null && v(a.emoji) && i.push(a),
              n !== null && n === i.length)
            ) {
              a = null;
              break;
            }
            a = { emoji: [I], length: k, offset: S };
          }
        } else a !== null && (a.emoji.push(I), (a.length += k));
        S += k;
      }
      return (a !== null && v(a.emoji) && i.push(a), i);
    }
    function R(e, t, n) {
      var r = S(e),
        o = [],
        a = 0;
      return (
        r.forEach(function (n) {
          var r = n.offset;
          r > a && o.push(e.substr(a, r - a));
          var i = t(n.emoji);
          (i != null && o.push(i), (a = r + n.length));
        }),
        o.push(e.substr(a, e.length - a)),
        o
      );
    }
    function L(e) {
      return S(e, 1).length === 1;
    }
    function E(e) {
      return S(e).length;
    }
    ((l.parse = S), (l.render = R), (l.containsEmoji = L), (l.countEmoji = E));
  },
  98,
);
