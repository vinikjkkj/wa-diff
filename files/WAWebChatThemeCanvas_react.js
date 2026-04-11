__d(
  "WAWebChatThemeCanvas.react",
  [
    "WAWebUnstyledButton.react",
    "WAWebUseChatTheme",
    "WDSFlex.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        themeCardWrapper: {
          marginBottom: "xcytdqz",
          marginInlineStart: "x1uvdrpn",
          $$css: !0,
        },
        themeCard: {
          boxSizing: "x9f619",
          width: "x1pigqs1",
          height: "xn6wvy2",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xnj1f2r",
          borderInlineEndColor: "x2uibgs",
          borderBottomColor: "xkveyfu",
          borderInlineStartColor: "x12llq9",
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          cursor: "x1ypdohk",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          backgroundColor: "x1q80dvb",
          $$css: !0,
        },
        themeCardSelected: {
          borderTopWidth: "xmn4e3e",
          borderInlineEndWidth: "x1if355w",
          borderBottomWidth: "x2x41l1",
          borderInlineStartWidth: "xct1zlm",
          borderTopColor: "xlze6vy",
          borderInlineEndColor: "x47fsot",
          borderBottomColor: "x1rrvw3c",
          borderInlineStartColor: "x18djku1",
          $$css: !0,
        },
        bubbleRow: {
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          marginTop: "xr1yuqi",
          $$css: !0,
        },
        bubbleIncoming: {
          width: "x14qfxbe",
          height: "x170jfvy",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          backgroundColor: "x1ew7x2d",
          $$css: !0,
        },
        bubbleOutgoing: {
          width: "x14qfxbe",
          height: "x170jfvy",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          backgroundColor: "x1g5lz36",
          $$css: !0,
        },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(68),
        a = t.isSelected,
        i = t.onFocusChange,
        l = t.onPreview,
        s = t.onSelect,
        d = t.ref,
        m = t.tabIndex,
        p = t.themeId,
        _ = t.themeMode,
        f;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { isChatThemeEnabled: !0 }), (n[0] = f))
        : (f = n[0]);
      var g = o("WAWebUseChatTheme").useLazyChatThemeDefinitions(f);
      if (g == null) return null;
      var h, y, C, b, v, S, R, L, E, k, I, T, D, x, $;
      if (
        n[1] !== g ||
        n[2] !== a ||
        n[3] !== i ||
        n[4] !== l ||
        n[5] !== s ||
        n[6] !== d ||
        n[7] !== m ||
        n[8] !== p ||
        n[9] !== _
      ) {
        var P = g.getChatTheme(p, _),
          N;
        (n[25] !== g || n[26] !== p
          ? ((N = g.getColorSchemeName(p)),
            (n[25] = g),
            (n[26] = p),
            (n[27] = N))
          : (N = n[27]),
          (y = N),
          (h = r("WAWebUnstyledButton.react")),
          (k = d),
          (I = "radio"),
          (T = a),
          (D = m),
          (x = "chat-theme-" + p),
          ($ = c.themeCardWrapper),
          n[28] !== s || n[29] !== p
            ? ((C = function () {
                return s(p);
              }),
              (n[28] = s),
              (n[29] = p),
              (n[30] = C))
            : (C = n[30]),
          n[31] !== l || n[32] !== p
            ? ((b = function () {
                return l(p);
              }),
              (n[31] = l),
              (n[32] = p),
              (n[33] = b))
            : (b = n[33]),
          n[34] !== l
            ? ((v = function () {
                return l(null);
              }),
              (n[34] = l),
              (n[35] = v))
            : (v = n[35]),
          n[36] !== i || n[37] !== p
            ? ((S = function () {
                return i(p);
              }),
              (n[36] = i),
              (n[37] = p),
              (n[38] = S))
            : (S = n[38]),
          n[39] !== i
            ? ((R = function () {
                return i(null);
              }),
              (n[39] = i),
              (n[40] = R))
            : (R = n[40]),
          n[41] === Symbol.for("react.memo_cache_sentinel")
            ? ((E = (e || (e = r("stylex"))).props(
                o("WDSFlex.stylex").wdsFlex.flexColumnCenter,
              )),
              (n[41] = E))
            : (E = n[41]),
          (L = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexColumn,
            o("WDSFlex.stylex").wdsFlex.justifyEnd,
            c.themeCard,
            a && c.themeCardSelected,
            P,
          )),
          (n[1] = g),
          (n[2] = a),
          (n[3] = i),
          (n[4] = l),
          (n[5] = s),
          (n[6] = d),
          (n[7] = m),
          (n[8] = p),
          (n[9] = _),
          (n[10] = h),
          (n[11] = y),
          (n[12] = C),
          (n[13] = b),
          (n[14] = v),
          (n[15] = S),
          (n[16] = R),
          (n[17] = L),
          (n[18] = E),
          (n[19] = k),
          (n[20] = I),
          (n[21] = T),
          (n[22] = D),
          (n[23] = x),
          (n[24] = $));
      } else
        ((h = n[10]),
          (y = n[11]),
          (C = n[12]),
          (b = n[13]),
          (v = n[14]),
          (S = n[15]),
          (R = n[16]),
          (L = n[17]),
          (E = n[18]),
          (k = n[19]),
          (I = n[20]),
          (T = n[21]),
          (D = n[22]),
          (x = n[23]),
          ($ = n[24]));
      var M;
      n[42] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = u.jsxs(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                o("WDSFlex.stylex").wdsFlex.flexColumn,
                o("WDSFlex.stylex").wdsFlex.rowGapQuarter,
                c.bubbleRow,
              ),
              {
                children: [
                  u.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      e.props(
                        o("WDSFlex.stylex").wdsFlex.selfStart,
                        c.bubbleIncoming,
                      ),
                    ),
                  ),
                  u.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      e.props(
                        o("WDSFlex.stylex").wdsFlex.selfEnd,
                        c.bubbleOutgoing,
                      ),
                    ),
                  ),
                ],
              },
            ),
          )),
          (n[42] = M))
        : (M = n[42]);
      var w;
      n[43] !== L
        ? ((w = u.jsx("span", babelHelpers.extends({}, L, { children: M }))),
          (n[43] = L),
          (n[44] = w))
        : (w = n[44]);
      var A;
      n[45] !== a
        ? ((A = {
            0: { className: "x1ncwhqj x1chcg4z x2b8uid xav9cv8 x14ug900" },
            1: {
              className: "x1ncwhqj x1chcg4z x2b8uid xav9cv8 x14ug900 x117nqv4",
            },
          }[!!a << 0]),
          (n[45] = a),
          (n[46] = A))
        : (A = n[46]);
      var F;
      n[47] !== y || n[48] !== A
        ? ((F = u.jsx("span", babelHelpers.extends({}, A, { children: y }))),
          (n[47] = y),
          (n[48] = A),
          (n[49] = F))
        : (F = n[49]);
      var O;
      n[50] !== w || n[51] !== F || n[52] !== E
        ? ((O = u.jsxs(
            "span",
            babelHelpers.extends({}, E, { children: [w, F] }),
          )),
          (n[50] = w),
          (n[51] = F),
          (n[52] = E),
          (n[53] = O))
        : (O = n[53]);
      var B;
      return (
        n[54] !== h ||
        n[55] !== C ||
        n[56] !== b ||
        n[57] !== v ||
        n[58] !== S ||
        n[59] !== R ||
        n[60] !== O ||
        n[61] !== k ||
        n[62] !== I ||
        n[63] !== T ||
        n[64] !== D ||
        n[65] !== x ||
        n[66] !== $
          ? ((B = u.jsx(h, {
              ref: k,
              role: I,
              "aria-checked": T,
              tabIndex: D,
              testid: void 0,
              xstyle: $,
              onClick: C,
              onMouseEnter: b,
              onMouseLeave: v,
              onFocus: S,
              onBlur: R,
              children: O,
            })),
            (n[54] = h),
            (n[55] = C),
            (n[56] = b),
            (n[57] = v),
            (n[58] = S),
            (n[59] = R),
            (n[60] = O),
            (n[61] = k),
            (n[62] = I),
            (n[63] = T),
            (n[64] = D),
            (n[65] = x),
            (n[66] = $),
            (n[67] = B))
          : (B = n[67]),
        B
      );
    }
    l.default = d;
  },
  98,
);
