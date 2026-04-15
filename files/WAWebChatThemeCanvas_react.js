__d(
  "WAWebChatThemeCanvas.react",
  [
    "WAWebChatThemeEnums",
    "WAWebStockWallpaper",
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
          position: "x1n2onr6",
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
        colorFill: { backgroundColor: "x1g5lz36", $$css: !0 },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(73),
        a = t.isSelected,
        i = t.onFocusChange,
        l = t.onPreview,
        s = t.onSelect,
        d = t.ref,
        m = t.tabIndex,
        p = t.themeId,
        _ = t.themeMode,
        f = t.variant,
        g = f === void 0 ? "theme" : f,
        h;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = { isChatThemeEnabled: !0 }), (n[0] = h))
        : (h = n[0]);
      var y = o("WAWebUseChatTheme").useLazyChatThemeDefinitions(h);
      if (y == null) return null;
      var C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M;
      if (
        n[1] !== y ||
        n[2] !== a ||
        n[3] !== i ||
        n[4] !== l ||
        n[5] !== s ||
        n[6] !== d ||
        n[7] !== m ||
        n[8] !== p ||
        n[9] !== _ ||
        n[10] !== g
      ) {
        var w = g === "color" ? y.getBubbleTheme(p, _) : y.getChatTheme(p, _),
          A;
        if (n[27] !== p) {
          var F = o("WAWebChatThemeEnums").Theme.cast(p.replace(/@.*/, ""));
          ((A =
            F != null
              ? o("WAWebStockWallpaper").getStockWallpaperThumbnailUrl(F)
              : null),
            (n[27] = p),
            (n[28] = A));
        } else A = n[28];
        M = A;
        var O;
        (n[29] !== M
          ? ((O =
              M != null
                ? {
                    backgroundImage: "url(" + M + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : void 0),
            (n[29] = M),
            (n[30] = O))
          : (O = n[30]),
          (N = O),
          (C = r("WAWebUnstyledButton.react")),
          (T = d),
          (D = "radio"),
          (x = a),
          ($ = m),
          (P = "chat-theme-" + p),
          (b = c.themeCardWrapper),
          n[31] !== s || n[32] !== p
            ? ((v = function () {
                return s(p);
              }),
              (n[31] = s),
              (n[32] = p),
              (n[33] = v))
            : (v = n[33]),
          n[34] !== l || n[35] !== p
            ? ((S = function () {
                l(p);
              }),
              (n[34] = l),
              (n[35] = p),
              (n[36] = S))
            : (S = n[36]),
          n[37] !== l
            ? ((R = function () {
                l(null);
              }),
              (n[37] = l),
              (n[38] = R))
            : (R = n[38]),
          n[39] !== i || n[40] !== p
            ? ((L = function () {
                return i(p);
              }),
              (n[39] = i),
              (n[40] = p),
              (n[41] = L))
            : (L = n[41]),
          n[42] !== i
            ? ((E = function () {
                return i(null);
              }),
              (n[42] = i),
              (n[43] = E))
            : (E = n[43]),
          n[44] === Symbol.for("react.memo_cache_sentinel")
            ? ((I = (e || (e = r("stylex"))).props(
                o("WDSFlex.stylex").wdsFlex.flexColumnCenter,
              )),
              (n[44] = I))
            : (I = n[44]),
          (k = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexColumn,
            g === "theme" && o("WDSFlex.stylex").wdsFlex.justifyEnd,
            c.themeCard,
            a && c.themeCardSelected,
            w,
            g === "color" && c.colorFill,
          )),
          (n[1] = y),
          (n[2] = a),
          (n[3] = i),
          (n[4] = l),
          (n[5] = s),
          (n[6] = d),
          (n[7] = m),
          (n[8] = p),
          (n[9] = _),
          (n[10] = g),
          (n[11] = C),
          (n[12] = b),
          (n[13] = v),
          (n[14] = S),
          (n[15] = R),
          (n[16] = L),
          (n[17] = E),
          (n[18] = k),
          (n[19] = I),
          (n[20] = T),
          (n[21] = D),
          (n[22] = x),
          (n[23] = $),
          (n[24] = P),
          (n[25] = N),
          (n[26] = M));
      } else
        ((C = n[11]),
          (b = n[12]),
          (v = n[13]),
          (S = n[14]),
          (R = n[15]),
          (L = n[16]),
          (E = n[17]),
          (k = n[18]),
          (I = n[19]),
          (T = n[20]),
          (D = n[21]),
          (x = n[22]),
          ($ = n[23]),
          (P = n[24]),
          (N = n[25]),
          (M = n[26]));
      var B = g !== "color" ? N : void 0,
        W;
      n[45] !== _ || n[46] !== M || n[47] !== g
        ? ((W =
            g !== "color" &&
            M != null &&
            _ === "dark" &&
            u.jsx("div", {
              className:
                "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x7w8cv9 xlr9sxt xvvg52n xwd4zgb xq8v1ta",
            })),
          (n[45] = _),
          (n[46] = M),
          (n[47] = g),
          (n[48] = W))
        : (W = n[48]);
      var q;
      n[49] !== g
        ? ((q =
            g === "theme" &&
            u.jsxs(
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
                        (e || (e = r("stylex"))).props(
                          o("WDSFlex.stylex").wdsFlex.selfStart,
                          c.bubbleIncoming,
                        ),
                      ),
                    ),
                    u.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (e || (e = r("stylex"))).props(
                          o("WDSFlex.stylex").wdsFlex.selfEnd,
                          c.bubbleOutgoing,
                        ),
                      ),
                    ),
                  ],
                },
              ),
            )),
          (n[49] = g),
          (n[50] = q))
        : (q = n[50]);
      var U;
      n[51] !== B || n[52] !== W || n[53] !== q || n[54] !== k
        ? ((U = u.jsxs(
            "span",
            babelHelpers.extends({}, k, { style: B, children: [W, q] }),
          )),
          (n[51] = B),
          (n[52] = W),
          (n[53] = q),
          (n[54] = k),
          (n[55] = U))
        : (U = n[55]);
      var V;
      n[56] !== U || n[57] !== I
        ? ((V = u.jsx("span", babelHelpers.extends({}, I, { children: U }))),
          (n[56] = U),
          (n[57] = I),
          (n[58] = V))
        : (V = n[58]);
      var H;
      return (
        n[59] !== C ||
        n[60] !== b ||
        n[61] !== v ||
        n[62] !== S ||
        n[63] !== R ||
        n[64] !== L ||
        n[65] !== E ||
        n[66] !== V ||
        n[67] !== T ||
        n[68] !== D ||
        n[69] !== x ||
        n[70] !== $ ||
        n[71] !== P
          ? ((H = u.jsx(C, {
              ref: T,
              role: D,
              "aria-checked": x,
              tabIndex: $,
              testid: void 0,
              xstyle: b,
              onClick: v,
              onMouseEnter: S,
              onMouseLeave: R,
              onFocus: L,
              onBlur: E,
              children: V,
            })),
            (n[59] = C),
            (n[60] = b),
            (n[61] = v),
            (n[62] = S),
            (n[63] = R),
            (n[64] = L),
            (n[65] = E),
            (n[66] = V),
            (n[67] = T),
            (n[68] = D),
            (n[69] = x),
            (n[70] = $),
            (n[71] = P),
            (n[72] = H))
          : (H = n[72]),
        H
      );
    }
    l.default = d;
  },
  98,
);
