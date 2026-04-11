__d(
  "WAWebBizAdCreationPaymentAdAccountSelectorModal.react",
  [
    "fbt",
    "CometRelay",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationPaymentAdAccountSelectorModal_query.graphql",
    "WAWebBizAdCreationSpecContext",
    "WAWebBizAdLogger",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebRadio.react",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useContext,
      p = d.useEffect,
      _ = d.useRef,
      f = d.useState,
      g = {
        accountList: {
          flexGrow: "x1iyjqo2",
          overflowY: "x1odjw0f",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        footer: {
          borderTopColor: "xx42vgk",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          flexShrink: "x2lah0s",
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        header: { columnGap: "xs2akgl", flexShrink: "x2lah0s", $$css: !0 },
        root: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          maxHeight: "x159tps6",
          paddingTop: "x1xrf6ya",
          paddingInlineEnd: "xde1mab",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "x1iw51ew",
          rowGap: "x1f0uite",
          width: "x1czfd9k",
          $$css: !0,
        },
      };
    function h(t) {
      var a,
        i,
        l = o("react-compiler-runtime").c(36),
        u = t.currentLegacyAccountID,
        d = t.fragmentRef,
        h = t.onClose,
        b = t.onSubmit,
        v = o("CometRelay").useFragment(
          e !== void 0
            ? e
            : (e = n(
                "WAWebBizAdCreationPaymentAdAccountSelectorModal_query.graphql",
              )),
          d,
        ),
        S = f(u),
        R = S[0],
        L = S[1],
        E = m(r("WAWebBizAdCreationLoggerContext")),
        k = m(r("WAWebBizAdCreationSpecContext")),
        I =
          k == null ||
          (a = k.currentValue) == null ||
          (a = a.adAccountData) == null
            ? void 0
            : a.id,
        T = _(!1),
        D,
        x;
      (l[0] !== I || l[1] !== E
        ? ((D = function () {
            E != null &&
              !T.current &&
              ((T.current = !0),
              r("WAWebBizAdLogger").log({
                event: "payment_ad_account_selector_modal_impression",
                loggerContext: E,
                adAccountID: I,
              }));
          }),
          (x = [I, E]),
          (l[0] = I),
          (l[1] = E),
          (l[2] = D),
          (l[3] = x))
        : ((D = l[2]), (x = l[3])),
        p(D, x));
      var $;
      l[4] !== I || l[5] !== E
        ? (($ = function (t) {
            (E != null &&
              r("WAWebBizAdLogger").log({
                event: "payment_ad_account_selector_row_click",
                loggerContext: E,
                adAccountID: I,
              }),
              L(t));
          }),
          (l[4] = I),
          (l[5] = E),
          (l[6] = $))
        : ($ = l[6]);
      var P = $,
        N;
      l[7] !== I || l[8] !== E || l[9] !== b || l[10] !== R
        ? ((N = function () {
            (E != null &&
              r("WAWebBizAdLogger").log({
                event: "payment_ad_account_selector_save_button_click",
                loggerContext: E,
                adAccountID: I,
              }),
              b(R));
          }),
          (l[7] = I),
          (l[8] = E),
          (l[9] = b),
          (l[10] = R),
          (l[11] = N))
        : (N = l[11]);
      var M = N,
        w;
      l[12] !== I || l[13] !== E || l[14] !== h
        ? ((w = function () {
            (E != null &&
              r("WAWebBizAdLogger").log({
                event: "payment_ad_account_selector_close_button_click",
                loggerContext: E,
                adAccountID: I,
              }),
              h());
          }),
          (l[12] = I),
          (l[13] = E),
          (l[14] = h),
          (l[15] = w))
        : (w = l[15]);
      var A = w,
        F = R === u,
        O;
      if (
        l[16] !==
        (v == null || (i = v.wa_ctwa_ad_accounts) == null ? void 0 : i.nodes)
      ) {
        var B,
          W,
          q,
          U =
            (B =
              v == null || (W = v.wa_ctwa_ad_accounts) == null
                ? void 0
                : W.nodes) != null
              ? B
              : [];
        ((O = U.filter(C).map(y)),
          (l[16] =
            v == null || (q = v.wa_ctwa_ad_accounts) == null
              ? void 0
              : q.nodes),
          (l[17] = O));
      } else O = l[17];
      var V = O,
        H;
      l[18] !== A
        ? ((H = c.jsx(r("WDSButton.react"), {
            Icon: r("WDSIconIcClose.react"),
            variant: "borderless",
            size: "medium",
            onPress: A,
          })),
          (l[18] = A),
          (l[19] = H))
        : (H = l[19]);
      var G;
      l[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = c.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: s._(/*BTDS*/ "Ad accounts"),
          })),
          (l[20] = G))
        : (G = l[20]);
      var z;
      l[21] !== H
        ? ((z = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: g.header,
            children: [H, G],
          })),
          (l[21] = H),
          (l[22] = z))
        : (z = l[22]);
      var j;
      l[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = s._(/*BTDS*/ "Ad accounts")), (l[23] = j))
        : (j = l[23]);
      var K;
      l[24] !== P || l[25] !== V || l[26] !== R
        ? ((K = c.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            xstyle: g.accountList,
            children: c.jsx(o("WAWebRadio.react").RadioGroup, {
              name: "ad-account-selection",
              options: V,
              checkedValue: R,
              onChange: P,
              theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
              ariaLabel: j,
            }),
          })),
          (l[24] = P),
          (l[25] = V),
          (l[26] = R),
          (l[27] = K))
        : (K = l[27]);
      var Q;
      l[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = s._(/*BTDS*/ "Save")), (l[28] = Q))
        : (Q = l[28]);
      var X;
      l[29] !== M || l[30] !== F
        ? ((X = c.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "end",
            xstyle: g.footer,
            children: c.jsx(r("WDSButton.react"), {
              label: Q,
              variant: "filled",
              size: "medium",
              type: "default",
              disabled: F,
              onPress: M,
            }),
          })),
          (l[29] = M),
          (l[30] = F),
          (l[31] = X))
        : (X = l[31]);
      var Y;
      return (
        l[32] !== K || l[33] !== X || l[34] !== z
          ? ((Y = c.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.Auto,
              children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "stretch",
                xstyle: g.root,
                children: [z, K, X],
              }),
            })),
            (l[32] = K),
            (l[33] = X),
            (l[34] = z),
            (l[35] = Y))
          : (Y = l[35]),
        Y
      );
    }
    function y(e) {
      var t,
        n = (t = e == null ? void 0 : e.legacy_account_id) != null ? t : "",
        a = e == null ? void 0 : e.name;
      return {
        value: n,
        label: c.jsxs(o("WAWebFlex.react").FlexColumn, {
          children: [
            c.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              children: a != null ? a : n,
            }),
            a != null &&
              c.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: n,
              }),
          ],
        }),
      };
    }
    function C(e) {
      return (e == null ? void 0 : e.legacy_account_id) != null;
    }
    l.default = h;
  },
  226,
);
