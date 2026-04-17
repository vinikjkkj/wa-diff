__d(
  "CometSplitPointForText",
  ["EmojiRendererData", "UnicodeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t, n, r) {
      (n === void 0 && (n = 8), r === void 0 && (r = 0));
      var a = null,
        i = e.split("\n"),
        l = (s || (s = o("UnicodeUtils"))).strlen(e);
      if ((l > t && l - t > r && (a = t), i.length > n)) {
        var u = i.slice(0, n).join("\n").length;
        a !== null ? (a = Math.min(u, a)) : (a = u);
      }
      if (a == null) return a;
      var d = a + c(e, a);
      return d < l ? d : null;
    }
    function c(t, n) {
      var a =
        n > 0 &&
        (e || (e = r("EmojiRendererData"))).isZWJ(
          (s || (s = o("UnicodeUtils"))).charAt(t, n - 1).codePointAt(0),
        );
      return d(t, a ? n - 1 : n);
    }
    function d(t, n) {
      var a = (s || (s = o("UnicodeUtils"))).charAt(t, n);
      if (a !== "") {
        var i = a.codePointAt(0);
        if (
          (e || (e = r("EmojiRendererData"))).isEmojiModifier(i) ||
          (e || (e = r("EmojiRendererData"))).isEmojiVariationSelector(i) ||
          (e || (e = r("EmojiRendererData"))).isTextVariationSelector(i)
        )
          return 1 + d(t, n + 1);
        if ((e || (e = r("EmojiRendererData"))).isZWJ(i)) {
          var l = (s || (s = o("UnicodeUtils"))).charAt(t, n + 1);
          if (
            (e || (e = r("EmojiRendererData"))).isEmojiModifierBase(
              l.codePointAt(0),
            )
          )
            return 2 + d(t, n + 2);
        }
      }
      return 0;
    }
    l.findSplitPointForText = u;
  },
  98,
);
