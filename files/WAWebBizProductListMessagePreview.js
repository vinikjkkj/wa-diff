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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(24),
        a = t.msg,
        i = t.onClick,
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            o("WAWebMsgGetters").getList,
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebFrontendMsgGetters").getDir,
            o("WAWebMsgGetters").getProductListHeaderImage,
          ]),
          (n[0] = l))
        : (l = n[0]);
      var u = o("useWAWebMsgValues").useMsgValues(a.id, l),
        m = u[0],
        p = u[1],
        _ = u[2],
        f = u[3],
        g = r("useWAWebStaticButtonA11y")(i),
        h = g[0],
        y = g[1];
      if (m == null) return null;
      var C;
      n[1] !== f
        ? ((C =
            f != null
              ? c.jsx("div", {
                  className:
                    "x2lah0s xni59qk xy75621 xmz0i5r x1xsqp64 x18d0r48",
                  style: {
                    backgroundImage:
                      "url(" + o("WAWebMediaUtils").convertToDataURI(f) + ")",
                  },
                })
              : null),
          (n[1] = f),
          (n[2] = C))
        : (C = n[2]);
      var b = C,
        v;
      n[3] !== a.productListItemCount
        ? ((v = s._(/*BTDS*/ '_j{"*":"{count} items","_1":"1 item"}', [
            s._plural(a.productListItemCount || 0, "count"),
          ])),
          (n[3] = a.productListItemCount),
          (n[4] = v))
        : (v = n[4]);
      var S = v,
        R;
      n[5] !== p
        ? ((R = {
            0: "x78zum5 x1q0g3np x6s0dn4 xy75621 x6ikm8r x10wlt62 x1nxh6w3 x1n6pog2 x14ug900 x1ypdohk x1bu39yj xaejkm2 x1uuy6ko x1gfim23 xqfj769",
            1: "x78zum5 x1q0g3np x6s0dn4 xy75621 x6ikm8r x10wlt62 x1nxh6w3 x1n6pog2 x14ug900 x1ypdohk xaejkm2 x1uuy6ko x1gfim23 xqfj769 x1bu39yj",
          }[!!p << 0]),
          (n[5] = p),
          (n[6] = R))
        : (R = n[6]);
      var L, E;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = (e || (e = r("stylex"))).props(
            d.body,
            o("WAWebUISpacing").uiPadding.vert6,
            o("WAWebUISpacing").uiPadding.horiz10,
          )),
          (E = e.props(d.title, o("WAWebUISpacing").uiMargin.bottom2)),
          (n[7] = L),
          (n[8] = E))
        : ((L = n[7]), (E = n[8]));
      var k;
      n[9] !== m.title
        ? ((k = c.jsx(
            "div",
            babelHelpers.extends({}, E, {
              children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: m.title,
                ellipsify: !0,
              }),
            }),
          )),
          (n[9] = m.title),
          (n[10] = k))
        : (k = n[10]);
      var I;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = {
            className:
              "x78zum5 x7f0hsc x6ikm8r x10wlt62 x1pg5gke xhslqc4 xlyipyv",
          }),
          (n[11] = I))
        : (I = n[11]);
      var T;
      n[12] !== S || n[13] !== _
        ? ((T = c.jsx(
            "div",
            babelHelpers.extends({}, I, {
              children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: S,
                direction: _,
                ellipsify: !0,
              }),
            }),
          )),
          (n[12] = S),
          (n[13] = _),
          (n[14] = T))
        : (T = n[14]);
      var D;
      n[15] !== k || n[16] !== T
        ? ((D = c.jsxs(
            "div",
            babelHelpers.extends({}, L, { children: [k, T] }),
          )),
          (n[15] = k),
          (n[16] = T),
          (n[17] = D))
        : (D = n[17]);
      var x;
      return (
        n[18] !== y || n[19] !== h || n[20] !== b || n[21] !== D || n[22] !== R
          ? ((x = c.jsxs(
              "div",
              babelHelpers.extends({}, y, {
                className: R,
                ref: h,
                children: [b, D],
              }),
            )),
            (n[18] = y),
            (n[19] = h),
            (n[20] = b),
            (n[21] = D),
            (n[22] = R),
            (n[23] = x))
          : (x = n[23]),
        x
      );
    }
    l.default = m;
  },
  226,
);
