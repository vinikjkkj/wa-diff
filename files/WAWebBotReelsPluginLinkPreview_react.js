__d(
  "WAWebBotReelsPluginLinkPreview.react",
  [
    "WABidi",
    "WAWebBaseShimmerComponents.react",
    "WAWebEmojiText.react",
    "WAWebReelPluginVideoIcon.react",
    "WDSHoverStateStyles",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        reelPluginPreview: {
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          height: "xe7z42g",
          position: "x1n2onr6",
          cursor: "x1ypdohk",
          borderTopWidth: "xt8cgyo",
          borderInlineEndWidth: "x128c8uf",
          borderBottomWidth: "x1co6499",
          borderInlineStartWidth: "xc5fred",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xnj1f2r",
          borderInlineEndColor: "x2uibgs",
          borderBottomColor: "xkveyfu",
          borderInlineStartColor: "x12llq9",
          $$css: !0,
        },
      };
    function d(e) {
      return e != null && e !== "" ? o("WABidi").dir(e) : void 0;
    }
    function m(t) {
      var n = t.botReelPluginThumbnailUrl,
        a = t.reelProfilePictureUrl,
        i = t.title,
        l = d(i);
      return n == null
        ? u.jsx("div", {
            className:
              "xlr9sxt xvvg52n xwd4zgb xq8v1ta x6ikm8r x10wlt62 xe7z42g x1n2onr6 x1ypdohk xt8cgyo x128c8uf x1co6499 xc5fred x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9",
            children: u.jsx(
              o("WAWebBaseShimmerComponents.react").RectangleShimmer,
              { height: 300, width: 170 },
            ),
          })
        : u.jsxs(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                c.reelPluginPreview,
                o("WDSHoverStateStyles").WDSHoverStateStyles.genericHover,
              ),
              {
                onClick: t.handleClick,
                children: [
                  u.jsx("img", {
                    "data-testid": void 0,
                    alt: "",
                    src: "data:image/jpeg;base64," + n,
                    className: "xh8yej3 x5yr21d xl1xv1r",
                  }),
                  u.jsx("div", {
                    className:
                      "x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c x18k6ek x47corl x1ja2u2z xbyyjgo",
                  }),
                  u.jsxs(
                    "div",
                    babelHelpers.extends(
                      {},
                      {
                        0: {
                          className:
                            "x10l6tqk xfr5jun xrotz4w x1awj2ng x1s688f x7yx35o x78zum5 x6s0dn4 x1vjfegm",
                        },
                        1: {
                          className:
                            "x10l6tqk xfr5jun xrotz4w x1awj2ng x1s688f x7yx35o x6s0dn4 x1vjfegm x1lliihq",
                        },
                      }[(a == null) << 0],
                      {
                        children: [
                          a != null &&
                            u.jsx("img", {
                              "data-testid": void 0,
                              alt: "",
                              src: "data:image/jpeg;base64," + a,
                              className:
                                "xvy4d1p xxk0z11 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xqf2s3x",
                            }),
                          u.jsx(o("WAWebEmojiText.react").EmojiText, {
                            text: i,
                            ellipsify: !0,
                            breakWord: !0,
                            direction: l,
                            testid: void 0,
                            multiline: !0,
                          }),
                        ],
                      },
                    ),
                  ),
                  u.jsx("div", {
                    className: "x10l6tqk xqo3gd xrotz4w x1vjfegm",
                    children: u.jsx(
                      o("WAWebReelPluginVideoIcon.react").ReelPluginVideoIcon,
                      {},
                    ),
                  }),
                ],
              },
            ),
          );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
