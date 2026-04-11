__d(
  "WAWebBizAdPreviewContent.react",
  [
    "fbt",
    "WAWebBackIcon.react",
    "WAWebBizAdCreationFBPreview.react",
    "WAWebBizAdCreationIGPreview.react",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdLogger",
    "WAWebBizAdPreviewLoggingUtils",
    "WAWebDivider.react",
    "WAWebFlex.react",
    "WAWebTabs.react",
    "WDSButton.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useContext,
      p = c.useEffect,
      _ = c.useRef,
      f = c.useState,
      g = {
        header: {
          alignItems: "x6s0dn4",
          columnGap: "xs2akgl",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        root: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          rowGap: "x1f0uite",
          $$css: !0,
        },
        tabs: { backgroundColor: "x1280gxy", flexShrink: "x2lah0s", $$css: !0 },
      },
      h = { instagram: "instagram", facebook: "facebook" };
    function y(e) {
      var t = o("react-compiler-runtime").c(45),
        n = e.adAccountID,
        a = e.loggerContext,
        i = e.onClose,
        l = e.previewData,
        c = e.xstyle,
        d = f(h.instagram),
        y = d[0],
        C = d[1],
        b = m(r("WAWebBizAdCreationLoggerContext")),
        v = a != null ? a : b,
        S = _(null),
        R,
        L;
      (t[0] !== n || t[1] !== v || t[2] !== l.medias
        ? ((R = function () {
            if (n != null && v != null) {
              var e,
                t,
                a =
                  (e = (t = l.medias) == null ? void 0 : t.length) != null
                    ? e
                    : 0,
                i = o("WAWebBizAdPreviewLoggingUtils").determineMediaType(
                  l.medias,
                ),
                s = S.current,
                u = s == null,
                c =
                  u ||
                  (s == null ? void 0 : s.count) !== a ||
                  (s == null ? void 0 : s.type) !== i;
              c &&
                ((S.current = { count: a, type: i }),
                r("WAWebBizAdLogger").logCritical({
                  event: "ad_preview_modal_impression",
                  loggerContext: v,
                  adAccountID: n,
                  extra: { media_count: a, media_type: i, initial_load: u },
                }));
            }
          }),
          (L = [n, v, l.medias]),
          (t[0] = n),
          (t[1] = v),
          (t[2] = l.medias),
          (t[3] = R),
          (t[4] = L))
        : ((R = t[3]), (L = t[4])),
        p(R, L));
      var E;
      t[5] !== n || t[6] !== v || t[7] !== i
        ? ((E = function () {
            (n != null &&
              v != null &&
              r("WAWebBizAdLogger").log({
                event: "ad_preview_modal_close_click",
                loggerContext: v,
                adAccountID: n,
              }),
              i());
          }),
          (t[5] = n),
          (t[6] = v),
          (t[7] = i),
          (t[8] = E))
        : (E = t[8]);
      var k = E,
        I;
      t[9] !== n || t[10] !== v || t[11] !== l.medias || t[12] !== y
        ? ((I = function (t) {
            if (n != null && v != null) {
              var e,
                a,
                i = o("WAWebBizAdPreviewLoggingUtils").determineMediaType(
                  l.medias,
                );
              r("WAWebBizAdLogger").log({
                event: "previews_tab_click",
                loggerContext: v,
                adAccountID: n,
                extra: {
                  before: y,
                  after: t,
                  media_count:
                    (e = (a = l.medias) == null ? void 0 : a.length) != null
                      ? e
                      : 0,
                  media_type: i,
                },
              });
            }
            C(t);
          }),
          (t[9] = n),
          (t[10] = v),
          (t[11] = l.medias),
          (t[12] = y),
          (t[13] = I))
        : (I = t[13]);
      var T = I,
        D;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = { id: h.instagram, title: s._(/*BTDS*/ "Instagram") }),
          (t[14] = D))
        : (D = t[14]);
      var x;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = [D, { id: h.facebook, title: s._(/*BTDS*/ "Facebook") }]),
          (t[15] = x))
        : (x = t[15]);
      var $;
      t[16] !== T || t[17] !== y
        ? (($ = u.jsx(r("WAWebTabs.react"), {
            xstyle: g.tabs,
            selectedId: y,
            onSelect: T,
            testIdPrefix: "biz-ad-creation-preview-tab",
            tabConfigs: x,
          })),
          (t[16] = T),
          (t[17] = y),
          (t[18] = $))
        : ($ = t[18]);
      var P = $,
        N;
      t[19] !== c ? ((N = [g.root, c]), (t[19] = c), (t[20] = N)) : (N = t[20]);
      var M;
      t[21] !== k
        ? ((M = u.jsx(r("WDSButton.react"), {
            Icon: o("WAWebBackIcon.react").BackIcon,
            variant: "borderless",
            size: "medium",
            onPress: k,
          })),
          (t[21] = k),
          (t[22] = M))
        : (M = t[22]);
      var w;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: s._(/*BTDS*/ "Ad preview"),
          })),
          (t[23] = w))
        : (w = t[23]);
      var A;
      t[24] !== M
        ? ((A = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: g.header,
            children: [M, w],
          })),
          (t[24] = M),
          (t[25] = A))
        : (A = t[25]);
      var F, O;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = { className: "x98rzlu x2lwn1j x1odjw0f" }),
          (O = {
            className:
              "x78zum5 xdt5ytf x6s0dn4 xl56j7k x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
          }),
          (t[26] = F),
          (t[27] = O))
        : ((F = t[26]), (O = t[27]));
      var B;
      t[28] !== l || t[29] !== y
        ? ((B = u.jsx(
            "div",
            babelHelpers.extends({}, O, {
              children:
                y === h.instagram
                  ? u.jsx(
                      r("WAWebBizAdCreationIGPreview.react"),
                      babelHelpers.extends({}, l),
                    )
                  : u.jsx(
                      r("WAWebBizAdCreationFBPreview.react"),
                      babelHelpers.extends({}, l),
                    ),
            }),
          )),
          (t[28] = l),
          (t[29] = y),
          (t[30] = B))
        : (B = t[30]);
      var W, q;
      t[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = u.jsx(r("WAWebDivider.react"), { direction: "horizontal" })),
          (q = { className: "x16ovd2e x12xbjc7 x2b8uid" }),
          (t[31] = W),
          (t[32] = q))
        : ((W = t[31]), (q = t[32]));
      var U;
      t[33] !== y
        ? ((U =
            y === h.instagram
              ? s._(
                  /*BTDS*/ 'When potential customers tap on "Send WhatsApp Message", they can message you directly on WhatsApp.',
                )
              : s._(
                  /*BTDS*/ 'When potential customers tap on "WhatsApp", they can message you directly on WhatsApp.',
                )),
          (t[33] = y),
          (t[34] = U))
        : (U = t[34]);
      var V;
      t[35] !== U
        ? ((V = u.jsx(
            "div",
            babelHelpers.extends({}, q, {
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: U,
              }),
            }),
          )),
          (t[35] = U),
          (t[36] = V))
        : (V = t[36]);
      var H;
      t[37] !== B || t[38] !== V
        ? ((H = u.jsxs(
            "div",
            babelHelpers.extends({}, F, { children: [B, W, V] }),
          )),
          (t[37] = B),
          (t[38] = V),
          (t[39] = H))
        : (H = t[39]);
      var G;
      return (
        t[40] !== P || t[41] !== A || t[42] !== H || t[43] !== N
          ? ((G = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              xstyle: N,
              children: [A, P, H],
            })),
            (t[40] = P),
            (t[41] = A),
            (t[42] = H),
            (t[43] = N),
            (t[44] = G))
          : (G = t[44]),
        G
      );
    }
    l.default = y;
  },
  226,
);
