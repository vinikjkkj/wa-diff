__d(
  "WAWebBizProductListMessagePreview",
  [
    "fbt",
    "WAWebEmojiText.react",
    "WAWebFrontendMsgGetters",
    "WAWebMediaUtils",
    "WAWebMsgGetters",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useWAWebMsgValues",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        title: {
          display: "x78zum5",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          color: "x14ug900",
          textOverflow: "xlyipyv",
          $$css: !0,
        },
        body: {
          boxSizing: "x9f619",
          flexGrow: "x1iyjqo2",
          maxHeight: "xlrnmfh",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          lineHeight: "x17fgdl5",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
      };
    function m(t) {
      var n = t.msg,
        a = t.onClick,
        i = o("useWAWebMsgValues").useMsgValues(n.id, [
          o("WAWebMsgGetters").getList,
          o("WAWebMsgGetters").getIsSentByMe,
          o("WAWebFrontendMsgGetters").getDir,
          o("WAWebMsgGetters").getProductListHeaderImage,
        ]),
        l = i[0],
        u = i[1],
        m = i[2],
        p = i[3],
        _ = r("useWAWebStaticButtonA11y")(a),
        f = _[0],
        g = _[1];
      if (l == null) return null;
      var h =
          p != null
            ? c.jsx("div", {
                className: "x2lah0s xni59qk xy75621 xmz0i5r x1xsqp64 x18d0r48",
                style: {
                  backgroundImage:
                    "url(" + o("WAWebMediaUtils").convertToDataURI(p) + ")",
                },
              })
            : null,
        y = s._(/*BTDS*/ '_j{"*":"{count} items","_1":"1 item"}', [
          s._plural(n.productListItemCount || 0, "count"),
        ]);
      return c.jsxs(
        "div",
        babelHelpers.extends({}, g, {
          className: {
            0: "x78zum5 x1q0g3np x6s0dn4 xy75621 x6ikm8r x10wlt62 x1nxh6w3 x1n6pog2 x14ug900 x1ypdohk x1bu39yj xaejkm2 x1uuy6ko x1gfim23 xqfj769",
            1: "x78zum5 x1q0g3np x6s0dn4 xy75621 x6ikm8r x10wlt62 x1nxh6w3 x1n6pog2 x14ug900 x1ypdohk xaejkm2 x1uuy6ko x1gfim23 xqfj769 x1bu39yj",
          }[!!u << 0],
          ref: f,
          children: [
            h,
            c.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  d.body,
                  o("WAWebUISpacing").uiPadding.vert6,
                  o("WAWebUISpacing").uiPadding.horiz10,
                ),
                {
                  children: [
                    c.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        e.props(d.title, o("WAWebUISpacing").uiMargin.bottom2),
                        {
                          children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                            text: l.title,
                            ellipsify: !0,
                          }),
                        },
                      ),
                    ),
                    c.jsx("div", {
                      className:
                        "x78zum5 x7f0hsc x6ikm8r x10wlt62 x1pg5gke xhslqc4 xlyipyv",
                      children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                        text: y,
                        direction: m,
                        ellipsify: !0,
                      }),
                    }),
                  ],
                },
              ),
            ),
          ],
        }),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
