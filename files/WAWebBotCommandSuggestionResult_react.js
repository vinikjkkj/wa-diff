__d(
  "WAWebBotCommandSuggestionResult.react",
  [
    "cx",
    "WAWebBotCommandSuggestions.react",
    "WAWebClassnames",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(29),
        n = e.command,
        r = e.imageWid,
        a = e.onMouseDown,
        i = e.onMouseEnter,
        l = e.onMouseUp,
        s = e.query,
        c = e.selected,
        d = n.description,
        m = n.name,
        p;
      t[0] !== m || t[1] !== s.length
        ? ((p = m.slice(0, s.length)),
          (t[0] = m),
          (t[1] = s.length),
          (t[2] = p))
        : (p = t[2]);
      var _ = p,
        f;
      t[3] !== m || t[4] !== s.length
        ? ((f = m.slice(s.length)), (t[3] = m), (t[4] = s.length), (t[5] = f))
        : (f = t[5]);
      var g = f,
        h;
      if (t[6] !== c) {
        var y;
        ((h = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((y = {}), (y._aopp = !0), y),
          {
            0: "x78zum5 x6s0dn4 x1qx5ct2 xyamay9 xl3akx1 x1l90r2v x11ahuha x6ikm8r x10wlt62 x1f6kntn xhslqc4 xlyipyv xuxw1ft xxymvpz",
            1: "x78zum5 x6s0dn4 x1qx5ct2 xyamay9 xl3akx1 x1l90r2v x11ahuha x6ikm8r x10wlt62 x1f6kntn xhslqc4 xlyipyv xuxw1ft xxymvpz x1ru9bj0",
          }[!!c << 0],
        )),
          (t[6] = c),
          (t[7] = h));
      } else h = t[7];
      var C;
      t[8] !== r
        ? ((C =
            r != null &&
            u.jsx("div", {
              className: "x17pgkn5 xav9cv8 x1sa5p1d",
              children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: r,
                size: 32,
              }),
            })),
          (t[8] = r),
          (t[9] = C))
        : (C = t[9]);
      var b;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            className: "xyqdw3p x14ug900",
            text: o("WAWebBotCommandSuggestions.react").QUERY_TRIGGER,
          })),
          (t[10] = b))
        : (b = t[10]);
      var v;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = "xyqdw3p x117nqv4 x1v5yvga"), (t[11] = v))
        : (v = t[11]);
      var S;
      t[12] !== _
        ? ((S = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            className: v,
            text: _,
          })),
          (t[12] = _),
          (t[13] = S))
        : (S = t[13]);
      var R;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = "xyqdw3p x14ug900"), (t[14] = R))
        : (R = t[14]);
      var L;
      t[15] !== g
        ? ((L = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            className: R,
            text: g,
          })),
          (t[15] = g),
          (t[16] = L))
        : (L = t[16]);
      var E;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = "xyqdw3p x1hm9lzh xhslqc4 x1yc453h"), (t[17] = E))
        : (E = t[17]);
      var k;
      t[18] !== d
        ? ((k = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            className: E,
            testid: void 0,
            ellipsify: !0,
            text: d,
          })),
          (t[18] = d),
          (t[19] = k))
        : (k = t[19]);
      var I;
      return (
        t[20] !== a ||
        t[21] !== i ||
        t[22] !== l ||
        t[23] !== k ||
        t[24] !== h ||
        t[25] !== C ||
        t[26] !== S ||
        t[27] !== L
          ? ((I = u.jsxs("div", {
              className: h,
              onMouseDown: a,
              onMouseUp: l,
              onMouseEnter: i,
              children: [C, b, S, L, k],
            })),
            (t[20] = a),
            (t[21] = i),
            (t[22] = l),
            (t[23] = k),
            (t[24] = h),
            (t[25] = C),
            (t[26] = S),
            (t[27] = L),
            (t[28] = I))
          : (I = t[28]),
        I
      );
    }
    l.default = c;
  },
  98,
);
