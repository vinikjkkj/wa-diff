__d(
  "WAWebInteractiveGalaxyFlowResponseMessage.react",
  [
    "fbt",
    "WABidi",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebGetGalaxyFlowCtaButton",
    "WAWebGetGalaxyFlowsActionFromButton",
    "WAWebL10N",
    "WAWebMessageMeta.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WDSIconIcDescription.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useMemo,
      m = {
        bubble: {
          boxSizing: "x9f619",
          userSelect: "x87ps6o",
          width: "x1o095ql",
          paddingBottom: "xmkwqf5",
          $$css: !0,
        },
        innerBubble: {
          height: "xdiz9cm",
          borderStartStartRadius: "xp43t2z",
          borderStartEndRadius: "x5j5mwf",
          borderEndEndRadius: "xptal55",
          borderEndStartRadius: "xjodkme",
          backgroundColor: "x1bu39yj",
          $$css: !0,
        },
        roundIconContainer: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "x14qfxbe",
          height: "xc9qbxq",
          backgroundColor: "x1k43qru",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        titleText: { fontSize: "x1jchvi3", $$css: !0 },
        iconColor: { color: "x1v5yvga", $$css: !0 },
      };
    function p(t) {
      var n,
        a,
        i = o("react-compiler-runtime").c(38),
        l = t.defaultMsg,
        u = t.msg,
        d =
          (n =
            (a = u.interactivePayload) == null ? void 0 : a.buttonParamsJson) !=
          null
            ? n
            : "{}",
        p;
      i[0] !== d ? ((p = JSON.parse(d)), (i[0] = d), (i[1] = p)) : (p = i[1]);
      var _ = p,
        f = _.wa_flow_response_params;
      if (
        f == null ||
        !Object.prototype.hasOwnProperty.call(f, "response_message") ||
        f.response_message == null
      )
        return l;
      if (f.title == null) return null;
      var g, h;
      if (i[2] !== d || i[3] !== u) {
        h = Symbol.for("react.early_return_sentinel");
        e: {
          var y = o(
            "WAWebGetGalaxyFlowCtaButton",
          ).getGalaxyFlowResponseCtaButton(d, 0);
          if (y == null) {
            h = null;
            break e;
          }
          g = o(
            "WAWebGetGalaxyFlowsActionFromButton",
          ).getCtaFlowInteractiveAction(y, u);
        }
        ((i[2] = d), (i[3] = u), (i[4] = g), (i[5] = h));
      } else ((g = i[4]), (h = i[5]));
      if (h !== Symbol.for("react.early_return_sentinel")) return h;
      var C = g,
        b;
      i[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = {
            0: { className: "x10l6tqk x1n327nk xv1oinf x1oi8geq" },
            1: { className: "x10l6tqk x1n327nk xv1oinf x1oi8geq xtrg13t" },
          }[!!r("WAWebL10N").isRTL() << 0]),
          (i[6] = b))
        : (b = i[6]);
      var v;
      i[7] !== u
        ? ((v = c.jsx(o("WAWebMessageMeta.react").Meta, { msg: u })),
          (i[7] = u),
          (i[8] = v))
        : (v = i[8]);
      var S;
      i[9] !== b || i[10] !== v
        ? ((S = c.jsx("div", babelHelpers.extends({}, b, { children: v }))),
          (i[9] = b),
          (i[10] = v),
          (i[11] = S))
        : (S = i[11]);
      var R = S,
        L;
      i[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s._(/*BTDS*/ "Response sent")), (i[12] = L))
        : (L = i[12]);
      var E = L,
        k = f.title,
        I;
      i[13] !== C
        ? ((I = function () {
            return C == null || C.onClick == null ? void 0 : C.onClick();
          }),
          (i[13] = C),
          (i[14] = I))
        : (I = i[14]);
      var T;
      i[15] !== C
        ? ((T = function (t) {
            (t.preventDefault(),
              (t.key === "Enter" || t.key === " ") &&
                (C == null || C.onClick == null || C.onClick()));
          }),
          (i[15] = C),
          (i[16] = T))
        : (T = i[16]);
      var D;
      i[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = (e || (e = r("stylex"))).props(
            [m.bubble, o("WAWebUISpacing").uiPadding.top5],
            o("WAWebUISpacing").uiPadding.horiz5,
          )),
          (i[17] = D))
        : (D = i[17]);
      var x;
      i[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = [m.innerBubble, o("WAWebUISpacing").uiPadding.all8]),
          (i[18] = x))
        : (x = i[18]);
      var $;
      i[19] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = c.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: m.roundIconContainer,
            padding: 2,
            children: c.jsx(r("WDSIconIcDescription.react"), {
              xstyle: m.iconColor,
            }),
          })),
          (i[19] = $))
        : ($ = i[19]);
      var P;
      i[20] !== k
        ? ((P = o("WABidi").dir(k)), (i[20] = k), (i[21] = P))
        : (P = i[21]);
      var N;
      i[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = r("WAWebL10N").isRTL()), (i[22] = N))
        : (N = i[22]);
      var M = (P === "rtl") !== N,
        w;
      i[23] !== k
        ? ((w = o("WABidi").dir(k)), (i[23] = k), (i[24] = w))
        : (w = i[24]);
      var A;
      i[25] !== M || i[26] !== w || i[27] !== k
        ? ((A = c.jsx(o("WAWebEmojiText.react").EmojiText, {
            xstyle: m.titleText,
            text: k,
            textLimit: 30,
            dirMismatch: M,
            direction: w,
            inferLinesDirection: !0,
          })),
          (i[25] = M),
          (i[26] = w),
          (i[27] = k),
          (i[28] = A))
        : (A = i[28]);
      var F;
      i[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = c.jsx(o("WAWebText.react").WAWebTextMuted, { children: E })),
          (i[29] = F))
        : (F = i[29]);
      var O;
      i[30] !== R || i[31] !== A
        ? ((O = c.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: x,
            align: "center",
            children: [
              $,
              c.jsxs(o("WAWebFlex.react").FlexColumn, {
                xstyle: o("WAWebUISpacing").uiPadding.start12,
                justify: "evenly",
                rowGap: 4,
                children: [A, F, R],
              }),
            ],
          })),
          (i[30] = R),
          (i[31] = A),
          (i[32] = O))
        : (O = i[32]);
      var B;
      return (
        i[33] !== D || i[34] !== O || i[35] !== I || i[36] !== T
          ? ((B = c.jsx(
              "div",
              babelHelpers.extends(
                {
                  "data-testid": void 0,
                  role: "button",
                  onClick: I,
                  tabIndex: 0,
                  onKeyDown: T,
                },
                D,
                { children: O },
              ),
            )),
            (i[33] = D),
            (i[34] = O),
            (i[35] = I),
            (i[36] = T),
            (i[37] = B))
          : (B = i[37]),
        B
      );
    }
    l.default = p;
  },
  226,
);
