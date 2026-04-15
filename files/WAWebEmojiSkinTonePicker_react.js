__d(
  "WAWebEmojiSkinTonePicker.react",
  [
    "WAWebConnModel",
    "WAWebDropdownItem.react",
    "WAWebEmoji",
    "WAWebEmojiGridPicker.react",
    "WAWebEmojiPanelUtil",
    "WAWebEmojiRowPicker.react",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "WAWebMiscGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebMultiSkinTonePicker.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(26),
        n = e.action,
        a = e.base,
        i = e.preVariant,
        l = e.unicode,
        u;
      t[0] !== a
        ? ((u = o("WAWebEmoji").isBaseMultiSkinToneEmoji(a)),
          (t[0] = a),
          (t[1] = u))
        : (u = t[1]);
      var m = u,
        p = o("WAWebEmoji").HANDSHAKE === a,
        _;
      t[2] !== p
        ? ((_ =
            o("WAWebMiscGatingUtils").multiSkinToneEmojiPickerEnabled() &&
            !(
              o("WAWebConnModel").Conn.platform ===
                o("WAWebMobilePlatforms").PLATFORMS.IPHONE && p
            )),
          (t[2] = p),
          (t[3] = _))
        : (_ = t[3]);
      var f = _,
        g,
        h;
      if (t[4] !== n || t[5] !== a || t[6] !== m || t[7] !== l) {
        var y = m
            ? o("WAWebEmoji").getPermutations(
                o("WAWebEmojiPanelUtil").SKIN_TONE_VARIATIONS.slice(1),
                2,
              )
            : o("WAWebEmojiPanelUtil").SKIN_TONE_VARIATIONS.map(d),
          C;
        (t[10] !== a
          ? ((C = function (t, n) {
              var e = o("WAWebEmoji").EmojiUtil.getSkinToneVariant(a, n);
              return (e == null || t.push(e), t);
            }),
            (t[10] = a),
            (t[11] = C))
          : (C = t[11]),
          (h = y.reduce(C, [])));
        var b;
        (t[12] !== n || t[13] !== m || t[14] !== l
          ? ((b = function (t, r) {
              return s.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  type: m ? "emoji-grid" : "emoji",
                  testid: void 0,
                  action: function (r) {
                    return n(r, l, t);
                  },
                  children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: t,
                    formatters: o("WAWebFormatConfiguration").LargeEmojiOnly(),
                    tabIndex: "-1",
                  }),
                },
                t + r,
              );
            }),
            (t[12] = n),
            (t[13] = m),
            (t[14] = l),
            (t[15] = b))
          : (b = t[15]),
          (g = h.filter(c).map(b)),
          (t[4] = n),
          (t[5] = a),
          (t[6] = m),
          (t[7] = l),
          (t[8] = g),
          (t[9] = h));
      } else ((g = t[8]), (h = t[9]));
      var v = g;
      if (m) {
        var S;
        return (
          t[16] !== n ||
          t[17] !== a ||
          t[18] !== v ||
          t[19] !== i ||
          t[20] !== l ||
          t[21] !== f ||
          t[22] !== h
            ? ((S = f
                ? s.jsx(r("WAWebMultiSkinTonePicker.react"), {
                    base: a,
                    action: n,
                    unicode: l,
                    preVariant: i,
                    children: h,
                  })
                : s.jsx(r("WAWebEmojiGridPicker.react"), {
                    base: a,
                    action: n,
                    unicode: l,
                    children: v,
                  })),
              (t[16] = n),
              (t[17] = a),
              (t[18] = v),
              (t[19] = i),
              (t[20] = l),
              (t[21] = f),
              (t[22] = h),
              (t[23] = S))
            : (S = t[23]),
          S
        );
      }
      var R;
      return (
        t[24] !== v
          ? ((R = s.jsx(r("WAWebEmojiRowPicker.react"), { children: v })),
            (t[24] = v),
            (t[25] = R))
          : (R = t[25]),
        R
      );
    }
    function c(e) {
      return o("WAWebEmoji").EmojiUtil.isEmoji(e);
    }
    function d(e) {
      return [e];
    }
    l.default = u;
  },
  98,
);
