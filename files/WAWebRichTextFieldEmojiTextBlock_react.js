__d(
  "WAWebRichTextFieldEmojiTextBlock.react",
  [
    "cx",
    "WAUnicodeUtils",
    "WAWebClickableLink.react",
    "WAWebEmojiText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.isRefresh,
        n = t === void 0 ? !1 : t,
        a = e.settings,
        i = e.testid,
        l = e.textContent;
      if (!(!a || l == null || l === "")) {
        var s = a.textLimit,
          c = s === void 0 ? 1 / 0 : s,
          d = a.readMoreText,
          m = a.onReadMore,
          p = a.formatters,
          _ = a.ellipsify,
          f = a.multiline,
          g = a.inferLinesDirection,
          h = a.direction,
          y = a.preserveWhitespace,
          C = a.breakWord;
        return u.jsxs("div", {
          className: n === !0 ? "x98rzlu x6ikm8r x10wlt62 x1vvkbs" : "_alcd",
          children: [
            u.jsx(o("WAWebEmojiText.react").EmojiText, {
              testid: void 0,
              text: l,
              ellipsify: _,
              multiline: f,
              selectable: !0,
              emojiSize: o("WAWebEmojiText.react").EMOJI_SIZE.SMALL,
              textLimit: c,
              formatters: p,
              inferLinesDirection: g,
              direction: h,
              preserveWhitespace: y,
              breakWord: C,
            }),
            m &&
              d != null &&
              o("WAUnicodeUtils").numCodepoints(
                l == null ? void 0 : l.toString(),
              ) > c &&
              u.jsx(r("WAWebClickableLink.react"), {
                onClick: m,
                tabIndex: 0,
                children: d,
              }),
          ],
        });
      }
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
