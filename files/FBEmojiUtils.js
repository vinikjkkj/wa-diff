__d(
  "FBEmojiUtils",
  ["EmojiRendererData", "SupportedEmoji3"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = /_fe0f/g,
      u = [127995, 127996, 127997, 127998, 127999];
    function c(e) {
      return e
        .map(function (e) {
          return String.fromCodePoint(e);
        })
        .join("");
    }
    var d = function (t) {
        return t
          .filter(function (e) {
            return e.length > 0;
          })
          .map(function (e) {
            return e.codePointAt(0).toString(16);
          })
          .join("_")
          .replace(s, "");
      },
      m = function (t) {
        var e = d(t);
        return e == null ? null : r("SupportedEmoji3")[e] ? e : null;
      },
      p = function (t) {
        return t.replace(s, "");
      },
      _ = function (n) {
        var t = [];
        return (
          (e || (e = r("EmojiRendererData"))).isEmojiModifierBase(n[0]) &&
            u.forEach(function (o) {
              var a = n.reduce(function (t, n) {
                return (
                  (t.length &&
                    (
                      e || (e = r("EmojiRendererData"))
                    ).isEmojiVariationSelector(n) &&
                    (e || (e = r("EmojiRendererData"))).isEmojiModifier(
                      t[t.length - 1],
                    )) ||
                    (t.push(n),
                    (e || (e = r("EmojiRendererData"))).isEmojiModifierBase(
                      n,
                    ) && t.push(o)),
                  t
                );
              }, []);
              m(
                a.map(function (e) {
                  return String.fromCodePoint(e);
                }),
              ) && t.push(a);
            }),
          t
        );
      };
    ((l.codepointsToString = c),
      (l.getKeyFromCodepoints = d),
      (l.getSupportedKey = m),
      (l.normalizeKey = p),
      (l.getSupportedModifierSequences = _));
  },
  98,
);
