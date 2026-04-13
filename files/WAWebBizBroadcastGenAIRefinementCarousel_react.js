__d(
  "WAWebBizBroadcastGenAIRefinementCarousel.react",
  [
    "fbt",
    "WAWebBizBroadcastGenAIRecommendationModel",
    "WAWebBizBroadcastTextFormatUtils",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WDSButton.react",
    "WDSIconIcChevronLeft.react",
    "WDSIconIcChevronRight.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useCallback;
    function m(t) {
      var n = o("react-compiler-runtime").c(42),
        a = t.history,
        i = t.isRTL,
        l = t.onNavigate,
        u = a.entries[a.currentIndex],
        d;
      n[0] !== a
        ? ((d = o("WAWebBizBroadcastGenAIRecommendationModel").canNavigate(
            a,
            "prev",
          )),
          (n[0] = a),
          (n[1] = d))
        : (d = n[1]);
      var m = d,
        _;
      n[2] !== a
        ? ((_ = o("WAWebBizBroadcastGenAIRecommendationModel").canNavigate(
            a,
            "next",
          )),
          (n[2] = a),
          (n[3] = _))
        : (_ = n[3]);
      var f = _,
        h;
      n[4] !== a.currentIndex || n[5] !== l
        ? ((h = function () {
            l(a.currentIndex - 1);
          }),
          (n[4] = a.currentIndex),
          (n[5] = l),
          (n[6] = h))
        : (h = n[6]);
      var y = h,
        C;
      n[7] !== a.currentIndex || n[8] !== l
        ? ((C = function () {
            l(a.currentIndex + 1);
          }),
          (n[7] = a.currentIndex),
          (n[8] = l),
          (n[9] = C))
        : (C = n[9]);
      var b = C,
        v = i ? a.currentIndex * 100 : -(a.currentIndex * 100),
        S;
      n[10] !== u.userPrompt
        ? ((S =
            u.userPrompt ===
            o("WAWebBizBroadcastGenAIRecommendationModel")
              .FROM_SUGGESTION_PROMPT
              ? s._(/*BTDS*/ "From suggestion")
              : u.userPrompt),
          (n[10] = u.userPrompt),
          (n[11] = S))
        : (S = n[11]);
      var R = S,
        L;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = { className: "xz65tgg x6ikm8r x10wlt62" }), (n[12] = L))
        : (L = n[12]);
      var E;
      n[13] !== v
        ? ((E = (e || (e = r("stylex"))).props(g.track, g.trackOffset(v))),
          (n[13] = v),
          (n[14] = E))
        : (E = n[14]);
      var k;
      n[15] !== a.entries
        ? ((k = a.entries.map(p)), (n[15] = a.entries), (n[16] = k))
        : (k = n[16]);
      var I;
      n[17] !== E || n[18] !== k
        ? ((I = c.jsx(
            "div",
            babelHelpers.extends({}, L, {
              children: c.jsx(
                "div",
                babelHelpers.extends({}, E, { children: k }),
              ),
            }),
          )),
          (n[17] = E),
          (n[18] = k),
          (n[19] = I))
        : (I = n[19]);
      var T;
      n[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = { className: "x2lah0s x14qfxbe" }), (n[20] = T))
        : (T = n[20]);
      var D;
      n[21] !== y || n[22] !== m
        ? ((D =
            m &&
            c.jsx(r("WDSButton.react"), {
              Icon: r("WDSIconIcChevronLeft.react"),
              "aria-label": s._(/*BTDS*/ "Previous refinement"),
              onPress: y,
              size: "small",
              variant: "outline",
              xstyle: g.chevronButton,
            })),
          (n[21] = y),
          (n[22] = m),
          (n[23] = D))
        : (D = n[23]);
      var x;
      n[24] !== D
        ? ((x = c.jsx("div", babelHelpers.extends({}, T, { children: D }))),
          (n[24] = D),
          (n[25] = x))
        : (x = n[25]);
      var $;
      n[26] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = {
            className:
              "x1h3rtpe xyi3aci xwf5gio x1p453bz x1suzm8a xhslqc4 x1nxh6w3 x1iorvi4 xjkvuk6 x1g0dm76 xpdmqnj",
          }),
          (n[26] = $))
        : ($ = n[26]);
      var P;
      n[27] !== R
        ? ((P = c.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            xstyle: g.promptCenter,
            children: c.jsx(
              "span",
              babelHelpers.extends({}, $, { children: R }),
            ),
          })),
          (n[27] = R),
          (n[28] = P))
        : (P = n[28]);
      var N;
      n[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = { className: "x2lah0s x14qfxbe" }), (n[29] = N))
        : (N = n[29]);
      var M;
      n[30] !== b || n[31] !== f
        ? ((M =
            f &&
            c.jsx(r("WDSButton.react"), {
              Icon: r("WDSIconIcChevronRight.react"),
              "aria-label": s._(/*BTDS*/ "Next refinement"),
              onPress: b,
              size: "small",
              variant: "outline",
              xstyle: g.chevronButton,
            })),
          (n[30] = b),
          (n[31] = f),
          (n[32] = M))
        : (M = n[32]);
      var w;
      n[33] !== M
        ? ((w = c.jsx("div", babelHelpers.extends({}, N, { children: M }))),
          (n[33] = M),
          (n[34] = w))
        : (w = n[34]);
      var A;
      n[35] !== x || n[36] !== P || n[37] !== w
        ? ((A = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: g.promptRow,
            children: [x, P, w],
          })),
          (n[35] = x),
          (n[36] = P),
          (n[37] = w),
          (n[38] = A))
        : (A = n[38]);
      var F;
      return (
        n[39] !== A || n[40] !== I
          ? ((F = c.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              xstyle: g.carouselContainer,
              children: [I, A],
            })),
            (n[39] = A),
            (n[40] = I),
            (n[41] = F))
          : (F = n[41]),
        F
      );
    }
    function p(e, t) {
      return c.jsx(
        "div",
        {
          className: "x2lah0s xh8yej3",
          children: c.jsx("div", {
            className:
              "x6s0dn4 x9f619 x78zum5 xz65tgg x16ovd2e x12xbjc7 xdx6fka xvtqlqk",
            children: c.jsx("div", {
              className:
                "x1pyc6se x1mlb2bo x16pkwpw xqe4bef xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x1f6kntn x37zpob x1i69ec5 x1odjw0f x16ovd2e x12xbjc7 x1iw51ew xde1mab x126k92a xh8yej3 x13faqbe",
              children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: e.message,
                formatters: o("WAWebBizBroadcastTextFormatUtils")
                  .AI_TEXT_FORMATTERS,
              }),
            }),
          }),
        },
        t,
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = 200,
      f = { transform: "xsqj5wx", $$css: !0 },
      g = {
        carouselContainer: { width: "xh8yej3", $$css: !0 },
        chevronButton: {
          backgroundColor: "x1h3rtpe",
          color: "x14ug900",
          $$css: !0,
        },
        promptCenter: { flexGrow: "x1iyjqo2", $$css: !0 },
        promptRow: {
          boxSizing: "x9f619",
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        track: {
          display: "x78zum5",
          transitionDuration: "x1d8287x",
          transitionProperty: "x11xpdln",
          transitionTimingFunction: "xz4gly6",
          width: "xh8yej3",
          $$css: !0,
        },
        trackOffset: function (t) {
          return [
            f,
            {
              "--x-transform":
                "translateX(" + t + "%)" != null
                  ? "translateX(" + t + "%)"
                  : void 0,
            },
          ];
        },
      };
    l.default = m;
  },
  226,
);
