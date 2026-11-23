__d(
  "WAWebBizProductListMessagePreview",
  [
    "fbt",
    "WAWebEmojiText.react",
    "WAWebFrontendMsgGetters",
    "WAWebMediaUtils",
    "WAWebMsgGetters",
    "WDSMargins.stylex",
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
        y = s._(/*BTDS*/ "", [s._plural(n.productListItemCount || 0, "count")]);
      return c.jsxs(
        "div",
        babelHelpers.extends({}, g, {
          className: {
            0: "x78zum5 x1q0g3np x6s0dn4 xy75621 x6ikm8r x10wlt62 x1nxh6w3 x1o168i8 x14ug900 x1ypdohk x1bu39yj x1i282gy xx9ypkp xd15eu0 x11ecxm0",
            1: "x78zum5 x1q0g3np x6s0dn4 xy75621 x6ikm8r x10wlt62 x1nxh6w3 x1o168i8 x14ug900 x1ypdohk x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj",
          }[!!u << 0],
          ref: f,
          children: [
            h,
            c.jsxs("div", {
              className:
                "x9f619 x1iyjqo2 xlrnmfh x6ikm8r x10wlt62 x17fgdl5 x78zum5 xdt5ytf xl56j7k x1yrsyyn x10b6aqq xe2zdcy x2vl965",
              children: [
                c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      d.title,
                      o("WDSMargins.stylex").wdsMargins.marginBottom2,
                    ),
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
            }),
          ],
        }),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
