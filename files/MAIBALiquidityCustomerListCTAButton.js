__d(
  "MAIBALiquidityCustomerListCTAButton",
  [
    "AdsHelpTrayUILoggerStoreUtils",
    "GeoButton.react",
    "MAIBAChatNavigationContext",
    "MAIBAInlinedContext",
    "MAIBALiquidityCTAAction",
    "react",
    "useJSON",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useMemo,
      p = u.useRef,
      _ = "open_liquidity_customer_list_modal",
      f = "liquidity-customer-list";
    function g(e) {
      var t = e.attributesJson,
        n = r("useJSON")(t),
        a = o("MAIBAChatNavigationContext").useMAIBAChatNavigationContext(),
        l = a.externalConversationId,
        u = n.action != null && n.action !== "" ? n.action : null,
        g = n.label != null && n.label !== "" ? n.label : null,
        h = u != null && g != null,
        y = m(
          function () {
            return {
              action: u != null ? u : "",
              "cta-type": f,
              label: g != null ? g : "",
            };
          },
          [u, g],
        ),
        C = c(
          function () {
            var e;
            if (u === _) {
              var t = o("MAIBAInlinedContext").getAdAccountIDFromURL(),
                n =
                  (e = o("MAIBAInlinedContext").getInlinedContext()) == null
                    ? void 0
                    : e.business_id;
              t == null ||
                n == null ||
                (o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
                  "help_tray_ads_ai_non_os_cta_click",
                  y,
                ),
                r("MAIBALiquidityCTAAction").dispatch(
                  {
                    adAccountID: t,
                    businessID: n,
                    externalConversationId: l,
                    modal: "customer_list",
                  },
                  {
                    line: "71",
                    module: "MAIBALiquidityCustomerListCTAButton.web.js",
                    moduleID: i.id,
                  },
                ));
            }
          },
          [u, l, y],
        ),
        b = p(!1);
      return (
        d(
          function () {
            b.current ||
              !h ||
              ((b.current = !0),
              o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
                "help_tray_ads_ai_non_os_cta_impression",
                y,
              ));
          },
          [h, y],
        ),
        u == null || g == null
          ? null
          : s.jsx(r("GeoButton.react"), {
              label: g,
              onClick: C,
              variant: "primary",
            })
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
