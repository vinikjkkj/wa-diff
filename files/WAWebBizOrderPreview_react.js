__d(
  "WAWebBizOrderPreview.react",
  [
    "fbt",
    "WAWebCurrencyUtils",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebMsgGetters",
    "WAWebUISpacing",
    "WDSIconIcShoppingCart.react",
    "WDSVars.stylex",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        quotedMedia: {
          order: "x14yy4lh",
          width: "x1pju0fl",
          height: "x10wjd1d",
          $$css: !0,
        },
        body: {
          boxSizing: "x9f619",
          flexGrow: "x1iyjqo2",
          maxHeight: "x6h9qgo",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          lineHeight: "x17fgdl5",
          $$css: !0,
        },
        quotedBody: { order: "x9ek82g", $$css: !0 },
        titleIcon: {
          width: "x1xp8n7a",
          height: "xmix8c7",
          pointerEvents: "x47corl",
          fill: "xvt3oi1",
          $$css: !0,
        },
        titleIconSvg: { width: "x1xp8n7a", height: "xmix8c7", $$css: !0 },
        title: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          color: "x14ug900",
          textOverflow: "xlyipyv",
          $$css: !0,
        },
        description: {
          flexShrink: "x7f0hsc",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          fontSize: "x1pg5gke",
          color: "xhslqc4",
          textOverflow: "xlyipyv",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.msg,
        n = e.onClick,
        r = e.theme,
        a = t.thumbnail,
        i = o("WAWebMsgGetters").getIsSentByMe(t),
        l;
      return (
        a &&
          (l = u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: r === "quoted" && c.quotedMedia,
            style: {
              width: "72px",
              height: "72px",
              backgroundSize: "cover",
              borderStartStartRadius: "var(--radius-thumb)",
              borderEndStartRadius: "var(--radius-thumb)",
              borderStartEndRadius:
                o("WDSVars.stylex").WDSVars.borderRadiusNone,
              borderEndEndRadius: o("WDSVars.stylex").WDSVars.borderRadiusNone,
              backgroundImage: 'url("data:image/jpeg;base64,' + a + '")',
            },
          })),
        u.jsxs(
          "div",
          babelHelpers.extends(
            {},
            {
              0: {
                className:
                  "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1n6pog2 x14ug900 x1ypdohk xaejkm2 x1uuy6ko x1gfim23 xqfj769 x1bu39yj",
              },
              1: {
                className:
                  "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1n6pog2 x14ug900 x1ypdohk xaejkm2 x1uuy6ko x1gfim23 xqfj769 x1bu39yj",
              },
            }[!!(r === "quoted" || i) << 0],
            {
              onClick: n,
              children: [
                l,
                u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  justify: "center",
                  xstyle: [
                    c.body,
                    o("WAWebUISpacing").uiPadding.vert6,
                    o("WAWebUISpacing").uiPadding.horiz10,
                    r === "quoted" && c.quotedBody,
                    r === "quoted" && o("WAWebUISpacing").uiPadding.all0,
                  ],
                  children: [u.jsx(m, { msg: t }), u.jsx(p, { msg: t })],
                }),
              ],
            },
          ),
        )
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t,
        n = e.msg,
        a = (t = n.itemCount) != null ? t : 0,
        i = s._(/*BTDS*/ '_j{"*":"{count} items","_1":"1 item"}', [
          s._plural(a, "count"),
        ]),
        l = r("WDSIconIcShoppingCart.react");
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        xstyle: [c.title, o("WAWebUISpacing").uiMargin.bottom2],
        children: [
          u.jsx(l, {
            xstyle: [c.titleIcon, o("WAWebUISpacing").uiMargin.end2],
            iconXstyle: c.titleIconSvg,
            displayInline: !0,
          }),
          u.jsx(o("WAWebEmojiText.react").EmojiText, { text: i }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.msg,
        n = e.showMessage,
        r = t.totalAmount1000,
        a = t.totalCurrencyCode,
        i = null;
      r != null &&
        a != null &&
        a !== "" &&
        (i = u.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: s._(/*BTDS*/ "{total-currency-amount} (estimated total)", [
            s._param(
              "total-currency-amount",
              o("WAWebCurrencyUtils").formatAmount1000(a, r),
            ),
          ]),
        }));
      var l =
        n === !0
          ? u.jsx(o("WAWebEmojiText.react").EmojiText, { text: t.message })
          : null;
      return u.jsxs("div", {
        children: [
          u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: c.description,
            children: i,
          }),
          l,
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.OrderPreview = d),
      (l.OrderDescription = p));
  },
  226,
);
