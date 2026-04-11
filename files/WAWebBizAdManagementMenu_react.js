__d(
  "WAWebBizAdManagementMenu.react",
  [
    "fbt",
    "WAWebBizAdManagementLogger",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WDSIconIcCreditCard.react",
    "WDSIconIcHeadphones.react",
    "WDSIconIcHelp.react",
    "WDSIconWdsIcLogoFacebook.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "useWAWebBizContactUs",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback,
      d = "https://faq.whatsapp.com/512723604104492/";
    function m(e) {
      var t = e.accountType,
        n = e.loginWithFacebook,
        a = e.manageAdsFlowID,
        i = e.openAdPaymentAction,
        l = e.pageId,
        m = e.unmountSignal,
        p = r("useWAWebBizContactUs")(a, l, m),
        _ = p[0],
        f = p[1],
        g = c(
          function () {
            var e;
            ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
              e.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
              e.LWI_SCREEN_ACTION.LWI_ACTION_SWITCH_ACCOUNT_TAPPED,
              e.LWI_ADS_IDENTITY_TYPE.PAGE,
              a,
              null,
              JSON.stringify({ pageId: l }),
            ),
              n == null || n());
          },
          [n, a, l],
        ),
        h = c(
          function () {
            var e;
            ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
              e.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
              e.LWI_SCREEN_ACTION.LWI_ACTION_AD_PAYMENTS_ROW_TAPPED,
              e.LWI_ADS_IDENTITY_TYPE.PAGE,
              a,
              null,
              JSON.stringify({ pageId: l }),
            ),
              i());
          },
          [a, i, l],
        ),
        y = c(
          function () {
            var e;
            ((e = o("WAWebBizAdManagementLogger")).logManageAdsScreenAction(
              e.LWI_SCREEN_REFERENCE.LWI_SCREEN_PERFORMANCE,
              e.LWI_SCREEN_ACTION.LWI_ACTION_LEARN_MORE_TAPPED,
              e.LWI_ADS_IDENTITY_TYPE.PAGE,
              a,
              null,
              JSON.stringify({ pageId: l }),
            ),
              o("WAWebExternalLink.react").openExternalLink(d));
          },
          [a, l],
        );
      return u.jsxs(r("WDSMenu.react"), {
        children: [
          t === "WAA" &&
            n != null &&
            u.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconWdsIcLogoFacebook.react"),
              title: s._(/*BTDS*/ "Log into Facebook"),
              onPress: g,
            }),
          u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcCreditCard.react"),
            title: s._(/*BTDS*/ "Ad payments"),
            onPress: h,
          }),
          u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcHelp.react"),
            title: r("WAWebFbtCommon")("Learn more"),
            onPress: y,
          }),
          u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcHeadphones.react"),
            title: s._(/*BTDS*/ "Contact us"),
            onPress: _,
            disabled: f,
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
