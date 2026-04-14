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
        l,
        u = t.currentLegacyAccountID,
        d = t.fragmentRef,
        h = t.onClose,
        y = t.onSubmit,
        C = o("CometRelay").useFragment(
          e !== void 0
            ? e
            : (e = n(
                "WAWebBizAdCreationPaymentAdAccountSelectorModal_query.graphql",
              )),
          d,
        ),
        b = f(u),
        v = b[0],
        S = b[1],
        R = m(r("WAWebBizAdCreationLoggerContext")),
        L = m(r("WAWebBizAdCreationSpecContext")),
        E =
          L == null ||
          (a = L.currentValue) == null ||
          (a = a.adAccountData) == null
            ? void 0
            : a.id,
        k = _(!1);
      p(
        function () {
          R != null &&
            !k.current &&
            ((k.current = !0),
            r("WAWebBizAdLogger").log({
              event: "payment_ad_account_selector_modal_impression",
              loggerContext: R,
              adAccountID: E,
            }));
        },
        [E, R],
      );
      var I = function (t) {
          (R != null &&
            r("WAWebBizAdLogger").log({
              event: "payment_ad_account_selector_row_click",
              loggerContext: R,
              adAccountID: E,
            }),
            S(t));
        },
        T = function () {
          (R != null &&
            r("WAWebBizAdLogger").log({
              event: "payment_ad_account_selector_save_button_click",
              loggerContext: R,
              adAccountID: E,
            }),
            y(v));
        },
        D = function () {
          (R != null &&
            r("WAWebBizAdLogger").log({
              event: "payment_ad_account_selector_close_button_click",
              loggerContext: R,
              adAccountID: E,
            }),
            h());
        },
        x = v === u,
        $ =
          (i =
            C == null || (l = C.wa_ctwa_ad_accounts) == null
              ? void 0
              : l.nodes) != null
            ? i
            : [],
        P = $.filter(function (e) {
          return (e == null ? void 0 : e.legacy_account_id) != null;
        }).map(function (e) {
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
        });
      return c.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.Auto,
        children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "stretch",
          xstyle: g.root,
          children: [
            c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: g.header,
              children: [
                c.jsx(r("WDSButton.react"), {
                  Icon: r("WDSIconIcClose.react"),
                  variant: "borderless",
                  size: "medium",
                  onPress: D,
                }),
                c.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDefault",
                  children: s._(/*BTDS*/ "Ad accounts"),
                }),
              ],
            }),
            c.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              xstyle: g.accountList,
              children: c.jsx(o("WAWebRadio.react").RadioGroup, {
                name: "ad-account-selection",
                options: P,
                checkedValue: v,
                onChange: I,
                theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
                ariaLabel: s._(/*BTDS*/ "Ad accounts"),
              }),
            }),
            c.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "end",
              xstyle: g.footer,
              children: c.jsx(r("WDSButton.react"), {
                label: s._(/*BTDS*/ "Save"),
                variant: "filled",
                size: "medium",
                type: "default",
                disabled: x,
                onPress: T,
              }),
            }),
          ],
        }),
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
