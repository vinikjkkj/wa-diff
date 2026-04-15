__d(
  "WAWebPaymentReminderHeader.react",
  [
    "fbt",
    "WAWebCurrencyUtils",
    "WAWebExternalLink.react",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardIsKeyActivation",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebName.react",
    "WAWebPaymentReminder",
    "WAWebThemeContext",
    "WDSFlex.stylex",
    "WDSFocusStateStyles",
    "WDSIconIcSchedule.react",
    "WDSIconIcWarning.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "wdsWidth",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      m = {
        wrapper: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          paddingTop: "x96k8nx",
          paddingInlineEnd: "xrw5ot4",
          paddingBottom: "xdvlbce",
          paddingInlineStart: "x7coems",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        bubbleIn: { backgroundColor: "x6egj2d", $$css: !0 },
        bubbleOut: { backgroundColor: "x4wrhlh", $$css: !0 },
        iconContainer: {
          width: "x1useyqa",
          height: "xsdox4t",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        iconContainerDark: { backgroundColor: "x1od0jb8", $$css: !0 },
        iconContainerLight: { backgroundColor: "x16w0wmm", $$css: !0 },
        warningIconColor: { color: "x30a034", $$css: !0 },
        contentWrapper: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        divider: {
          height: "xqtp20y",
          borderTopWidth: "x178xt8z",
          borderTopStyle: "xlya59e",
          borderTopColor: "x1uebkx7",
          opacity: "xz5rk10",
          marginTop: "x1xmf6yo",
          marginBottom: "x1e56ztr",
          $$css: !0,
        },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(56),
        a = t.msg,
        i = o("WAWebPaymentReminder").getPaymentReminderInfo(a),
        l;
      n[0] !== a
        ? ((l = o("WAWebMsgGetters").getIsSentByMe(a)), (n[0] = a), (n[1] = l))
        : (l = n[1]);
      var u = l,
        p;
      n[2] !== a
        ? ((p = o("WAWebFrontendMsgGetters").getCurrentChat(a.unsafe())),
          (n[2] = a),
          (n[3] = p))
        : (p = n[3]);
      var _ = p,
        f = o("WAWebThemeContext").useIsDarkTheme();
      if (i == null) return null;
      var g = o("WAWebCurrencyUtils").formatAmount(
          i.amountDueCurrency,
          i.amountDue.value / i.amountDue.offset,
        ),
        h = d.format(new Date(i.dueDateMs)),
        y;
      if (n[4] !== i.daysOverdue || n[5] !== i.isOverdue) {
        var C, b;
        ((y = i.isOverdue
          ? s._(
              /*BTDS*/ '_j{"*":"Payment overdue by {days} days","_1":"Payment overdue by {days} day"}',
              [
                s._plural((C = i.daysOverdue) != null ? C : 0),
                s._param("days", (b = i.daysOverdue) != null ? b : 0),
              ],
            )
          : s._(/*BTDS*/ "Payment due")),
          (n[4] = i.daysOverdue),
          (n[5] = i.isOverdue),
          (n[6] = y));
      } else y = n[6];
      var v = y,
        S = null;
      if (i.accountName != null) {
        var R;
        (n[7] !== i.accountName
          ? ((R = s._(/*BTDS*/ "Account: {accountName}", [
              s._param("accountName", i.accountName),
            ])),
            (n[7] = i.accountName),
            (n[8] = R))
          : (R = n[8]),
          (S = R));
      } else if (i.cardNumber != null) {
        var L;
        (n[9] !== i.cardNumber
          ? ((L = s._(
              /*BTDS*/ "Card \u2022 \u2022 \u2022 \u2022 {cardNumber}",
              [s._param("cardNumber", i.cardNumber)],
            )),
            (n[9] = i.cardNumber),
            (n[10] = L))
          : (L = n[10]),
          (S = L));
      }
      var E;
      n[11] !== i.url
        ? ((E = function () {
            i.url != null &&
              o("WAWebExternalLink.react").openExternalLink(i.url);
          }),
          (n[11] = i.url),
          (n[12] = E))
        : (E = n[12]);
      var k = E,
        I;
      n[13] !== k
        ? ((I = function (t) {
            r("WAWebKeyboardIsKeyActivation")(t) && k();
          }),
          (n[13] = k),
          (n[14] = I))
        : (I = n[14]);
      var T = I,
        D;
      n[15] !== u
        ? ((D = (e || (e = r("stylex"))).props(
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            o("WDSFlex.stylex").wdsFlex.flexColumn,
            m.wrapper,
            u ? m.bubbleOut : m.bubbleIn,
          )),
          (n[15] = u),
          (n[16] = D))
        : (D = n[16]);
      var x;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexRowCenter,
            o("WDSFlex.stylex").wdsFlex.columnGapSingle,
          )),
          (n[17] = x))
        : (x = n[17]);
      var $;
      n[18] !== f
        ? (($ = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexCenter,
            o("WDSFlex.stylex").wdsFlex.flexShrink0,
            m.iconContainer,
            f ? m.iconContainerDark : m.iconContainerLight,
          )),
          (n[18] = f),
          (n[19] = $))
        : ($ = n[19]);
      var P;
      n[20] !== i.isOverdue
        ? ((P = i.isOverdue
            ? c.jsx(r("WDSIconIcWarning.react"), {
                width: 24,
                height: 24,
                iconXstyle: m.warningIconColor,
              })
            : c.jsx(r("WDSIconIcSchedule.react"), { width: 24, height: 24 })),
          (n[20] = i.isOverdue),
          (n[21] = P))
        : (P = n[21]);
      var N;
      n[22] !== $ || n[23] !== P
        ? ((N = c.jsx("div", babelHelpers.extends({}, $, { children: P }))),
          (n[22] = $),
          (n[23] = P),
          (n[24] = N))
        : (N = n[24]);
      var M;
      n[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexColumn,
            o("WDSFlex.stylex").wdsFlex.flexGrow1,
            o("WDSFlex.stylex").wdsFlex.justifyCenter,
            m.contentWrapper,
          )),
          (n[25] = M))
        : (M = n[25]);
      var w;
      n[26] !== v
        ? ((w = c.jsx(r("WDSText.react"), {
            type: "Body2Emphasized",
            colorName: "contentDefault",
            children: v,
          })),
          (n[26] = v),
          (n[27] = w))
        : (w = n[27]);
      var A;
      n[28] !== _
        ? ((A = c.jsx(r("WDSText.react"), {
            type: "Body3",
            colorName: "contentDefault",
            children: c.jsx(o("WAWebName.react").Name, {
              chat: _,
              ellipsify: !0,
            }),
          })),
          (n[28] = _),
          (n[29] = A))
        : (A = n[29]);
      var F;
      n[30] !== S
        ? ((F =
            S != null &&
            c.jsx(r("WDSText.react"), {
              type: "Body3",
              colorName: "contentDeemphasized",
              children: S,
            })),
          (n[30] = S),
          (n[31] = F))
        : (F = n[31]);
      var O;
      n[32] !== w || n[33] !== A || n[34] !== F
        ? ((O = c.jsxs(
            "div",
            babelHelpers.extends({}, M, { children: [w, A, F] }),
          )),
          (n[32] = w),
          (n[33] = A),
          (n[34] = F),
          (n[35] = O))
        : (O = n[35]);
      var B;
      n[36] !== N || n[37] !== O
        ? ((B = c.jsxs(
            "div",
            babelHelpers.extends({}, x, { children: [N, O] }),
          )),
          (n[36] = N),
          (n[37] = O),
          (n[38] = B))
        : (B = n[38]);
      var W, q;
      n[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                o("wdsWidth").wdsWidth.fullWidth,
                m.divider,
              ),
            ),
          )),
          (q = e.props(
            o("WDSFlex.stylex").wdsFlex.flexRow,
            o("WDSFlex.stylex").wdsFlex.justifyBetween,
            o("wdsWidth").wdsWidth.fullWidth,
          )),
          (n[39] = W),
          (n[40] = q))
        : ((W = n[39]), (q = n[40]));
      var U;
      n[41] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = c.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDefault",
            children: s._(/*BTDS*/ "Due date"),
          })),
          (n[41] = U))
        : (U = n[41]);
      var V;
      n[42] !== h
        ? ((V = c.jsxs(
            "div",
            babelHelpers.extends({}, q, {
              children: [
                U,
                c.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDefault",
                  children: h,
                }),
              ],
            }),
          )),
          (n[42] = h),
          (n[43] = V))
        : (V = n[43]);
      var H, G;
      n[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                o("wdsWidth").wdsWidth.fullWidth,
                m.divider,
              ),
            ),
          )),
          (G = e.props(
            o("WDSFlex.stylex").wdsFlex.flexRow,
            o("WDSFlex.stylex").wdsFlex.justifyBetween,
            o("wdsWidth").wdsWidth.fullWidth,
          )),
          (n[44] = H),
          (n[45] = G))
        : ((H = n[44]), (G = n[45]));
      var z;
      n[46] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = c.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDefault",
            children: s._(/*BTDS*/ "Amount due"),
          })),
          (n[46] = z))
        : (z = n[46]);
      var j;
      n[47] !== g
        ? ((j = c.jsxs(
            "div",
            babelHelpers.extends({}, G, {
              children: [
                z,
                c.jsx(r("WDSText.react"), {
                  type: "Body2Emphasized",
                  colorName: "contentDefault",
                  children: g,
                }),
              ],
            }),
          )),
          (n[47] = g),
          (n[48] = j))
        : (j = n[48]);
      var K;
      return (
        n[49] !== k ||
        n[50] !== T ||
        n[51] !== B ||
        n[52] !== V ||
        n[53] !== j ||
        n[54] !== D
          ? ((K = c.jsxs(
              "div",
              babelHelpers.extends(
                { onClick: k, onKeyDown: T, role: "button", tabIndex: 0 },
                D,
                { children: [B, W, V, H, j] },
              ),
            )),
            (n[49] = k),
            (n[50] = T),
            (n[51] = B),
            (n[52] = V),
            (n[53] = j),
            (n[54] = D),
            (n[55] = K))
          : (K = n[55]),
        K
      );
    }
    l.default = p;
  },
  226,
);
