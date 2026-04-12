__d(
  "WAWebChatSubtitleText.react",
  [
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEmojiText.react",
    "WAWebLockOutlineIcon.react",
    "WAWebUISpacing",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        chatSubtitleText: {
          flexGrow: "x1iyjqo2",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        icon: {
          display: "x1rg5ohu",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          color: "xhslqc4",
          $$css: !0,
        },
      };
    function d(t) {
      var n = t.ariaLabel,
        a = t.location,
        i = t.showLockIcon,
        l = t.text,
        s = t.textStatusEmoji,
        d;
      if (s != null) {
        var m = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(s);
        m != null &&
          (d = u.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                o("WAWebUISpacing").uiPadding.end5,
              ),
              {
                children: u.jsx(
                  r("WAWebEmoji.react"),
                  { emoji: m, size: "small" },
                  "low-res",
                ),
              },
            ),
          ));
      }
      var p = u.jsx(o("WAWebLockOutlineIcon.react").LockOutlineIcon, {
        height: 12,
        width: 12,
      });
      return u.jsxs(
        "div",
        babelHelpers.extends(
          { "data-testid": void 0 },
          {
            0: { className: "x78zum5 x1cy8zhl xeuugli" },
            1: {
              className:
                "x78zum5 x1cy8zhl xeuugli xisnujt x1nxh6w3 xcgms0a xhslqc4",
            },
          }[(a === "title") << 0],
          {
            children: [
              i === !0 &&
                u.jsx(
                  "span",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      c.icon,
                      o("WAWebUISpacing").uiMargin.top4,
                      o("WAWebUISpacing").uiMargin.end4,
                    ),
                    { children: p },
                  ),
                ),
              d,
              u.jsx(o("WAWebEmojiText.react").EmojiText, {
                titlify: !0,
                xstyle: c.chatSubtitleText,
                direction: "inherit",
                text: l,
                ariaLabel: n,
                selectable: !0,
              }),
            ],
          },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
