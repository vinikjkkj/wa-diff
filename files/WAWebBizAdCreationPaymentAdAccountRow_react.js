__d(
  "WAWebBizAdCreationPaymentAdAccountRow.react",
  [
    "fbt",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationSpecContext",
    "WAWebBizAdLogger",
    "WAWebFlex.react",
    "WDSButton.react",
    "WDSIconIcAccountBalanceWallet.react",
    "WDSText.react",
    "react",
    "useWAWebBizAdCreationOpenAdAccountSelectorModal",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useContext,
      p = {
        container: { height: "xnnlda6", $$css: !0 },
        iconAndTextContainer: {
          rowGap: "x1f0uite",
          columnGap: "xs2akgl",
          $$css: !0,
        },
        icon: {
          color: "xhslqc4",
          height: "x1nqnulx",
          width: "x1xvr5cs",
          $$css: !0,
        },
      };
    function _(e) {
      var t,
        n = e.adAccountsRef,
        a = e.legacyAccountID,
        i = e.name,
        l = r("useWAWebBizAdCreationOpenAdAccountSelectorModal")(a, n),
        c = m(r("WAWebBizAdCreationLoggerContext")),
        _ = m(r("WAWebBizAdCreationSpecContext")),
        f =
          _ == null ||
          (t = _.currentValue) == null ||
          (t = t.adAccountData) == null
            ? void 0
            : t.id,
        g = d(
          function () {
            (c != null &&
              r("WAWebBizAdLogger").log({
                event: "payment_ad_account_change_button_click",
                loggerContext: c,
                adAccountID: f,
              }),
              l());
          },
          [f, c, l],
        );
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "all",
        xstyle: p.container,
        children: [
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: p.iconAndTextContainer,
            children: [
              u.jsx(r("WDSIconIcAccountBalanceWallet.react"), {
                iconXstyle: p.icon,
              }),
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                children: [
                  u.jsx(r("WDSText.react"), {
                    type: "Body1",
                    colorName: "contentDefault",
                    children: i != null ? i : a,
                  }),
                  u.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: a,
                  }),
                ],
              }),
            ],
          }),
          u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsx(r("WDSButton.react"), {
              variant: "borderless",
              size: "medium",
              label: s._(/*BTDS*/ "Change"),
              onPress: g,
            }),
          }),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    var f = r("withWAWebBizAdCreationSpecContext")(_, function (e) {
      return {
        legacyAccountID: e.adAccountData.legacyAccountID,
        name: e.adAccountData.name,
      };
    });
    l.default = f;
  },
  226,
);
