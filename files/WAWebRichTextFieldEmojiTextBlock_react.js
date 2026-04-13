__d(
  "WAWebRichTextFieldEmojiTextBlock.react",
  [
    "cx",
    "WAUnicodeUtils",
    "WAWebClickableLink.react",
    "WAWebEmojiText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.isRefresh,
        a = e.settings,
        i = e.testid,
        l = e.textContent,
        s = n === void 0 ? !1 : n;
      if (!(!a || l == null || l === "")) {
        var c = a.textLimit,
          d = a.readMoreText,
          m = a.onReadMore,
          p = a.formatters,
          _ = a.ellipsify,
          f = a.multiline,
          g = a.inferLinesDirection,
          h = a.direction,
          y = a.preserveWhitespace,
          C = a.breakWord,
          b = c === void 0 ? 1 / 0 : c,
          v;
        t[0] !== s
          ? ((v = s === !0 ? "x98rzlu x6ikm8r x10wlt62 x1vvkbs" : "_alcd"),
            (t[0] = s),
            (t[1] = v))
          : (v = t[1]);
        var S = i + "-read-only",
          R;
        t[2] !== C ||
        t[3] !== h ||
        t[4] !== _ ||
        t[5] !== f ||
        t[6] !== p ||
        t[7] !== g ||
        t[8] !== y ||
        t[9] !== S ||
        t[10] !== l ||
        t[11] !== b
          ? ((R = u.jsx(o("WAWebEmojiText.react").EmojiText, {
              testid: void 0,
              text: l,
              ellipsify: _,
              multiline: f,
              selectable: !0,
              emojiSize: o("WAWebEmojiText.react").EMOJI_SIZE.SMALL,
              textLimit: b,
              formatters: p,
              inferLinesDirection: g,
              direction: h,
              preserveWhitespace: y,
              breakWord: C,
            })),
            (t[2] = C),
            (t[3] = h),
            (t[4] = _),
            (t[5] = f),
            (t[6] = p),
            (t[7] = g),
            (t[8] = y),
            (t[9] = S),
            (t[10] = l),
            (t[11] = b),
            (t[12] = R))
          : (R = t[12]);
        var L;
        t[13] !== m || t[14] !== d || t[15] !== l || t[16] !== b
          ? ((L =
              m &&
              d != null &&
              o("WAUnicodeUtils").numCodepoints(
                l == null ? void 0 : l.toString(),
              ) > b &&
              u.jsx(r("WAWebClickableLink.react"), {
                onClick: m,
                tabIndex: 0,
                children: d,
              })),
            (t[13] = m),
            (t[14] = d),
            (t[15] = l),
            (t[16] = b),
            (t[17] = L))
          : (L = t[17]);
        var E;
        return (
          t[18] !== v || t[19] !== R || t[20] !== L
            ? ((E = u.jsxs("div", { className: v, children: [R, L] })),
              (t[18] = v),
              (t[19] = R),
              (t[20] = L),
              (t[21] = E))
            : (E = t[21]),
          E
        );
      }
    }
    l.default = c;
  },
  98,
);
