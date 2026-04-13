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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(25),
        n = e.msg,
        r = e.onClick,
        a = e.theme,
        i = n.thumbnail,
        l;
      t[0] !== n
        ? ((l = o("WAWebMsgGetters").getIsSentByMe(n)), (t[0] = n), (t[1] = l))
        : (l = t[1]);
      var s = l,
        d;
      if (i) {
        var _ = a === "quoted" && c.quotedMedia,
          f = 'url("data:image/jpeg;base64,' + i + '")',
          g;
        t[2] !== f
          ? ((g = {
              width: "72px",
              height: "72px",
              backgroundSize: "cover",
              borderStartStartRadius: "var(--radius-thumb)",
              borderEndStartRadius: "var(--radius-thumb)",
              borderStartEndRadius:
                o("WDSVars.stylex").WDSVars.borderRadiusNone,
              borderEndEndRadius: o("WDSVars.stylex").WDSVars.borderRadiusNone,
              backgroundImage: f,
            }),
            (t[2] = f),
            (t[3] = g))
          : (g = t[3]);
        var h;
        (t[4] !== _ || t[5] !== g
          ? ((h = u.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: _,
              style: g,
            })),
            (t[4] = _),
            (t[5] = g),
            (t[6] = h))
          : (h = t[6]),
          (d = h));
      }
      var y;
      t[7] !== s || t[8] !== a
        ? ((y = {
            0: {
              className:
                "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1n6pog2 x14ug900 x1ypdohk xaejkm2 x1uuy6ko x1gfim23 xqfj769 x1bu39yj",
            },
            1: {
              className:
                "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1n6pog2 x14ug900 x1ypdohk xaejkm2 x1uuy6ko x1gfim23 xqfj769 x1bu39yj",
            },
          }[!!(a === "quoted" || s) << 0]),
          (t[7] = s),
          (t[8] = a),
          (t[9] = y))
        : (y = t[9]);
      var C = a === "quoted" && c.quotedBody,
        b = a === "quoted" && o("WAWebUISpacing").uiPadding.all0,
        v;
      t[10] !== C || t[11] !== b
        ? ((v = [
            c.body,
            o("WAWebUISpacing").uiPadding.vert6,
            o("WAWebUISpacing").uiPadding.horiz10,
            C,
            b,
          ]),
          (t[10] = C),
          (t[11] = b),
          (t[12] = v))
        : (v = t[12]);
      var S, R;
      t[13] !== n
        ? ((S = u.jsx(m, { msg: n })),
          (R = u.jsx(p, { msg: n })),
          (t[13] = n),
          (t[14] = S),
          (t[15] = R))
        : ((S = t[14]), (R = t[15]));
      var L;
      t[16] !== v || t[17] !== S || t[18] !== R
        ? ((L = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            justify: "center",
            xstyle: v,
            children: [S, R],
          })),
          (t[16] = v),
          (t[17] = S),
          (t[18] = R),
          (t[19] = L))
        : (L = t[19]);
      var E;
      return (
        t[20] !== d || t[21] !== r || t[22] !== y || t[23] !== L
          ? ((E = u.jsxs(
              "div",
              babelHelpers.extends({}, y, { onClick: r, children: [d, L] }),
            )),
            (t[20] = d),
            (t[21] = r),
            (t[22] = y),
            (t[23] = L),
            (t[24] = E))
          : (E = t[24]),
        E
      );
    }
    function m(e) {
      var t,
        n = o("react-compiler-runtime").c(6),
        a = e.msg,
        i = (t = a.itemCount) != null ? t : 0,
        l;
      n[0] !== i
        ? ((l = s._(/*BTDS*/ '_j{"*":"{count} items","_1":"1 item"}', [
            s._plural(i, "count"),
          ])),
          (n[0] = i),
          (n[1] = l))
        : (l = n[1]);
      var d = l,
        m;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = [c.title, o("WAWebUISpacing").uiMargin.bottom2]), (n[2] = m))
        : (m = n[2]);
      var p;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsx(r("WDSIconIcShoppingCart.react"), {
            xstyle: [c.titleIcon, o("WAWebUISpacing").uiMargin.end2],
            iconXstyle: c.titleIconSvg,
            displayInline: !0,
          })),
          (n[3] = p))
        : (p = n[3]);
      var _;
      return (
        n[4] !== d
          ? ((_ = u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: m,
              children: [
                p,
                u.jsx(o("WAWebEmojiText.react").EmojiText, { text: d }),
              ],
            })),
            (n[4] = d),
            (n[5] = _))
          : (_ = n[5]),
        _
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.msg,
        r = e.showMessage,
        a = n.totalAmount1000,
        i = n.totalCurrencyCode,
        l = null;
      if (a != null && i != null && i !== "") {
        var d;
        (t[0] !== a || t[1] !== i
          ? ((d = u.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: s._(/*BTDS*/ "{total-currency-amount} (estimated total)", [
                s._param(
                  "total-currency-amount",
                  o("WAWebCurrencyUtils").formatAmount1000(i, a),
                ),
              ]),
            })),
            (t[0] = a),
            (t[1] = i),
            (t[2] = d))
          : (d = t[2]),
          (l = d));
      }
      var m;
      t[3] !== n.message || t[4] !== r
        ? ((m =
            r === !0
              ? u.jsx(o("WAWebEmojiText.react").EmojiText, { text: n.message })
              : null),
          (t[3] = n.message),
          (t[4] = r),
          (t[5] = m))
        : (m = t[5]);
      var p = m,
        _;
      t[6] !== l
        ? ((_ = u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: c.description,
            children: l,
          })),
          (t[6] = l),
          (t[7] = _))
        : (_ = t[7]);
      var f;
      return (
        t[8] !== p || t[9] !== _
          ? ((f = u.jsxs("div", { children: [_, p] })),
            (t[8] = p),
            (t[9] = _),
            (t[10] = f))
          : (f = t[10]),
        f
      );
    }
    ((l.OrderPreview = d), (l.OrderDescription = p));
  },
  226,
);
