__d(
  "WAWebBookingConfirmationHeader.react",
  [
    "fbt",
    "WAWebBizOpenBookingConfirmationDrawer.react",
    "WAWebBookingConfirmation",
    "WAWebFormatEventDateString",
    "WAWebKeyboardIsKeyActivation",
    "WAWebMsgGetters",
    "WAWebThemeContext",
    "WDSFlex.stylex",
    "WDSFocusStateStyles",
    "WDSIconIcCalendarMonth.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
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
        iconColor: { color: "x14ug900", $$css: !0 },
        contentWrapper: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      };
    function m(t) {
      var n,
        a,
        i,
        l,
        u,
        m = o("react-compiler-runtime").c(42),
        p = t.msg,
        _ = o("WAWebBookingConfirmation").getBookingConfirmationInfo(p),
        f;
      m[0] !== p
        ? ((f = o("WAWebMsgGetters").getIsSentByMe(p)), (m[0] = p), (m[1] = f))
        : (f = m[1]);
      var g = f,
        h = o("WAWebThemeContext").useIsDarkTheme();
      if (_ == null) return null;
      var y = (n = p.interactiveHeader) == null ? void 0 : n.title,
        C = Math.floor(Date.parse(_.startDatetime) / 1e3),
        b =
          _.endDatetime != null
            ? Math.floor(Date.parse(_.endDatetime) / 1e3)
            : null,
        v;
      m[2] !== b || m[3] !== C
        ? ((v = o("WAWebFormatEventDateString").getEventDateStringFor(C, b)),
          (m[2] = b),
          (m[3] = C),
          (m[4] = v))
        : (v = m[4]);
      var S = v,
        R =
          (a =
            (i = (l = _.location) != null ? l : _.bookingUrl) != null
              ? i
              : _.phoneNumber) != null
            ? a
            : null,
        L = _.bookingUrl != null,
        E = _.phoneNumber != null && _.location == null && _.bookingUrl == null,
        k;
      m[5] !== _ || m[6] !== p
        ? ((k = function () {
            o(
              "WAWebBizOpenBookingConfirmationDrawer.react",
            ).openBookingConfirmationDrawer(_, p);
          }),
          (m[5] = _),
          (m[6] = p),
          (m[7] = k))
        : (k = m[7]);
      var I = k,
        T;
      m[8] !== I
        ? ((T = function (t) {
            r("WAWebKeyboardIsKeyActivation")(t) && I();
          }),
          (m[8] = I),
          (m[9] = T))
        : (T = m[9]);
      var D = T,
        x;
      m[10] !== g
        ? ((x = (e || (e = r("stylex"))).props(
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            o("WDSFlex.stylex").wdsFlex.flexColumn,
            d.wrapper,
            g ? d.bubbleOut : d.bubbleIn,
          )),
          (m[10] = g),
          (m[11] = x))
        : (x = m[11]);
      var $;
      m[12] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexRowCenter,
            o("WDSFlex.stylex").wdsFlex.columnGapSingle,
          )),
          (m[12] = $))
        : ($ = m[12]);
      var P;
      m[13] !== h
        ? ((P = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexCenter,
            o("WDSFlex.stylex").wdsFlex.flexShrink0,
            d.iconContainer,
            h ? d.iconContainerDark : d.iconContainerLight,
          )),
          (m[13] = h),
          (m[14] = P))
        : (P = m[14]);
      var N;
      m[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = c.jsx(r("WDSIconIcCalendarMonth.react"), {
            width: 24,
            height: 24,
            iconXstyle: d.iconColor,
          })),
          (m[15] = N))
        : (N = m[15]);
      var M;
      m[16] !== P
        ? ((M = c.jsx("div", babelHelpers.extends({}, P, { children: N }))),
          (m[16] = P),
          (m[17] = M))
        : (M = m[17]);
      var w;
      m[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexColumn,
            o("WDSFlex.stylex").wdsFlex.flexGrow1,
            o("WDSFlex.stylex").wdsFlex.justifyCenter,
            d.contentWrapper,
          )),
          (m[18] = w))
        : (w = m[18]);
      var A;
      m[19] !== y
        ? ((A =
            y != null &&
            c.jsx(r("WDSText.react"), {
              type: "Body2Emphasized",
              colorName: "contentDefault",
              testid: void 0,
              children: y,
            })),
          (m[19] = y),
          (m[20] = A))
        : (A = m[20]);
      var F;
      m[21] !== S
        ? ((F = c.jsx(r("WDSText.react"), {
            type: "Body3",
            colorName: "contentDefault",
            maxLines: 1,
            children: S,
          })),
          (m[21] = S),
          (m[22] = F))
        : (F = m[22]);
      var O;
      m[23] !== R
        ? ((O =
            R != null &&
            c.jsx(r("WDSText.react"), {
              type: "Body3",
              colorName: "contentDeemphasized",
              maxLines: 1,
              testid: void 0,
              children: R,
            })),
          (m[23] = R),
          (m[24] = O))
        : (O = m[24]);
      var B;
      if (
        m[25] !==
          ((u = _.displayContent) == null ? void 0 : u.displayMeetingType) ||
        m[26] !== E ||
        m[27] !== L
      ) {
        var W, q, U, V;
        ((B =
          (L ||
            E ||
            ((W = _.displayContent) == null ? void 0 : W.displayMeetingType) !=
              null) &&
          c.jsx(r("WDSText.react"), {
            type: "Body3",
            colorName: "contentDeemphasized",
            children:
              (q =
                (U = _.displayContent) == null
                  ? void 0
                  : U.displayMeetingType) != null
                ? q
                : L
                  ? s._(/*BTDS*/ "Video call")
                  : s._(/*BTDS*/ "Phone call"),
          })),
          (m[25] =
            (V = _.displayContent) == null ? void 0 : V.displayMeetingType),
          (m[26] = E),
          (m[27] = L),
          (m[28] = B));
      } else B = m[28];
      var H;
      m[29] !== A || m[30] !== F || m[31] !== O || m[32] !== B
        ? ((H = c.jsxs(
            "div",
            babelHelpers.extends({}, w, { children: [A, F, O, B] }),
          )),
          (m[29] = A),
          (m[30] = F),
          (m[31] = O),
          (m[32] = B),
          (m[33] = H))
        : (H = m[33]);
      var G;
      m[34] !== H || m[35] !== M
        ? ((G = c.jsxs(
            "div",
            babelHelpers.extends({}, $, { children: [M, H] }),
          )),
          (m[34] = H),
          (m[35] = M),
          (m[36] = G))
        : (G = m[36]);
      var z;
      return (
        m[37] !== I || m[38] !== D || m[39] !== G || m[40] !== x
          ? ((z = c.jsx(
              "div",
              babelHelpers.extends(
                {
                  "data-testid": void 0,
                  onClick: I,
                  onKeyDown: D,
                  role: "button",
                  tabIndex: 0,
                },
                x,
                { children: G },
              ),
            )),
            (m[37] = I),
            (m[38] = D),
            (m[39] = G),
            (m[40] = x),
            (m[41] = z))
          : (z = m[41]),
        z
      );
    }
    l.default = m;
  },
  226,
);
