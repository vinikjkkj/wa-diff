__d(
  "WAWebStickerStoreStickerPackListItem.react",
  [
    "WAWebBaseContainerQueryElement.react",
    "WAWebBoolFunc",
    "WAWebChatCell.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebRoundPlayIcon.react",
    "WAWebStickerStoreStickerIconContainer.react",
    "WDSFlex.stylex",
    "WDSIconWdsIcAuraFill.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.Fragment,
      d = {
        auraIcon: { marginInlineEnd: "x7g7pl8", $$css: !0 },
        animatedIcon: {
          marginInlineStart: "xdzw4kq",
          color: "xct68jv",
          $$css: !0,
        },
        stickerIcon: { marginInlineEnd: "xnqxrjt", $$css: !0 },
      },
      m = 6,
      p = 72,
      _ = 22;
    function f(t) {
      for (
        var n = t.data,
          a = t.onClick,
          i = n.stickerPack,
          l = u.jsxs(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                o("WDSFlex.stylex").wdsFlex.flexAlignCenter,
              ),
              {
                children: [
                  i.premium > 0 &&
                    u.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (e || (e = r("stylex"))).props(
                          o("WDSFlex.stylex").wdsFlex.flexAlignCenter,
                          d.auraIcon,
                        ),
                        {
                          children: u.jsx(r("WDSIconWdsIcAuraFill.react"), {
                            height: 16,
                            width: 16,
                          }),
                        },
                      ),
                    ),
                  u.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: i.name,
                    ellipsify: !0,
                    titlify: !0,
                  }),
                  i.animated
                    ? u.jsx(o("WAWebRoundPlayIcon.react").RoundPlayIcon, {
                        xstyle: d.animatedIcon,
                        width: 16,
                        height: 16,
                      })
                    : null,
                ],
              },
            ),
          ),
          s = [],
          f = Math.min(m, i.previewImageIds.length),
          g = 0;
        g < f;
        g++
      ) {
        var h = i.previewImageIds[g];
        s.push(
          u.jsxs(
            c,
            {
              children: [
                u.jsx(r("WAWebBaseContainerQueryElement.react"), {
                  breakpoint: (g + 1) * (p + _) - _,
                  inverseToContainer: !0,
                  maxWidth: "100%",
                  minWidth: 0,
                }),
                u.jsx(r("WAWebStickerStoreStickerIconContainer.react"), {
                  url:
                    "https://static.whatsapp.net/sticker?cat=sticker_preview_png&id=" +
                    h,
                  xstyle: d.stickerIcon,
                }),
              ],
            },
            h,
          ),
        );
      }
      var y = u.jsxs(u.Fragment, {
        children: [
          u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: i.publisher,
            ellipsify: !0,
          }),
          u.jsx(o("WAWebFlex.react").FlexRow, {
            children: u.jsx(o("WAWebFlex.react").FlexItem, {
              className: "x78zum5 x1q0g3np xozqiw3 x1xmf6yo",
              grow: 1,
              children: s,
            }),
          }),
        ],
      });
      return u.jsx(
        r("WAWebChatCell.react"),
        {
          tabIndex: 0,
          testid: void 0,
          theme: "sticker-pack",
          primary: l,
          secondary: y,
          handleKeyboardClick: !0,
          onClick: function () {
            a(i);
          },
          className: "xf7dkkf x1vmm6hg",
          contextEnabled: o("WAWebBoolFunc").returnFalse,
        },
        i.id,
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
