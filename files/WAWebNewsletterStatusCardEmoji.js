__d(
  "WAWebNewsletterStatusCardEmoji",
  [
    "WAWebEmoji",
    "WAWebNewsletterStatusCardText",
    "WAWebNewsletterStatusCardTextLine",
    "WAWebNewsletterStatusCardTypography",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 64,
      s = 160,
      u = 64,
      c = 1.1,
      d = o("WAWebNewsletterStatusCardTypography").fromAndroidDp(1),
      m = /(\d+(?:\.\d+)?)px/,
      p = /[.*+?^${}()|[\]\\]/g,
      _ = new WeakMap();
    function f(e, t) {
      var n = v(t),
        r = new Map();
      for (var a of e) {
        var i =
          a != null ? o("WAWebEmoji").EmojiUtil.extractAllEmojis(a) : null;
        for (var l of i != null ? i : []) {
          var s = r.has(l) ? null : S(l, n);
          s != null && r.set(l, r.size < u ? s : null);
        }
      }
      return r;
    }
    function g(e, t) {
      return function (n, r, a) {
        var i = L(n, t);
        return b(
          n,
          i,
          a != null ? a : o("WAWebNewsletterStatusCardText").isRtlText(n),
        )
          ? i.reduce(function (t, n) {
              return t + (n.emoji != null ? C(r) : e(n.text, r));
            }, 0)
          : e(n, r, a);
      };
    }
    function h(e, t) {
      var n = L(e.text, t);
      return b(e.text, n, e.isRtl) ? n : null;
    }
    function y(e) {
      var t = m.exec(e);
      return t != null ? Number(t[1]) * c : 0;
    }
    function C(e) {
      return y(e) + d;
    }
    function b(e, t, n) {
      return (
        t.some(function (e) {
          return e.emoji != null;
        }) &&
        R(e, n) &&
        !o("WAWebNewsletterStatusCardTextLine").separatesNumberFromArabic(
          t.map(function (e) {
            return e.text;
          }),
        )
      );
    }
    function v(e) {
      var t;
      return new Set(
        e != null
          ? (t = o("WAWebEmoji").EmojiUtil.extractAllEmojis(e)) != null
            ? t
            : []
          : [],
      );
    }
    function S(t, n) {
      return o("WAWebEmoji").EmojiUtil.isEmoji(t)
        ? o("WAWebEmoji").EmojiUtil.getGlyphPath(t, n.has(t) ? s : e)
        : null;
    }
    function R(e, t) {
      var n = o("WAWebNewsletterStatusCardTextLine").getStrongDirections(e);
      return n.size === 0 || (n.size === 1 && n.has(t ? "rtl" : "ltr"));
    }
    function L(e, t) {
      return t.size === 0
        ? [{ text: e, emoji: null }]
        : e
            .split(E(t))
            .filter(function (e) {
              return e !== "";
            })
            .map(function (e) {
              var n;
              return { text: e, emoji: (n = t.get(e)) != null ? n : null };
            });
    }
    function E(e) {
      var t = _.get(e);
      if (t != null) return t;
      var n = Array.from(e.keys())
          .sort(function (e, t) {
            return t.length - e.length;
          })
          .map(function (e) {
            return e.replace(p, "\\$&");
          }),
        r = new RegExp("(" + n.join("|") + ")", "u");
      return (_.set(e, r), r);
    }
    ((l.getCardEmojiGlyphPaths = f),
      (l.measureWithCardEmoji = g),
      (l.getCardEmojiPieces = h),
      (l.getCardEmojiSize = y),
      (l.getCardEmojiAdvance = C));
  },
  98,
);
