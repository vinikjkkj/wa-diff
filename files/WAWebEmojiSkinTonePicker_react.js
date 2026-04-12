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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.action,
        n = e.base,
        a = e.preVariant,
        i = e.unicode,
        l = o("WAWebEmoji").isBaseMultiSkinToneEmoji(n),
        u = o("WAWebEmoji").HANDSHAKE === n,
        c =
          o("WAWebMiscGatingUtils").multiSkinToneEmojiPickerEnabled() &&
          !(
            o("WAWebConnModel").Conn.platform ===
              o("WAWebMobilePlatforms").PLATFORMS.IPHONE && u
          ),
        d = l
          ? o("WAWebEmoji").getPermutations(
              o("WAWebEmojiPanelUtil").SKIN_TONE_VARIATIONS.slice(1),
              2,
            )
          : o("WAWebEmojiPanelUtil").SKIN_TONE_VARIATIONS.map(function (e) {
              return [e];
            }),
        m = d.reduce(function (e, t) {
          var r = o("WAWebEmoji").EmojiUtil.getSkinToneVariant(n, t);
          return (r == null || e.push(r), e);
        }, []),
        p = m
          .filter(function (e) {
            return o("WAWebEmoji").EmojiUtil.isEmoji(e);
          })
          .map(function (e, n) {
            return s.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                type: l ? "emoji-grid" : "emoji",
                testid: void 0,
                action: function (r) {
                  return t(r, i, e);
                },
                children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: e,
                  formatters: o("WAWebFormatConfiguration").LargeEmojiOnly(),
                  tabIndex: "-1",
                }),
              },
              e + n,
            );
          });
      return l
        ? c
          ? s.jsx(r("WAWebMultiSkinTonePicker.react"), {
              base: n,
              action: t,
              unicode: i,
              preVariant: a,
              children: m,
            })
          : s.jsx(r("WAWebEmojiGridPicker.react"), {
              base: n,
              action: t,
              unicode: i,
              children: p,
            })
        : s.jsx(r("WAWebEmojiRowPicker.react"), { children: p });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
