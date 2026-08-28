__d(
  "MAIBALiquidityCustomerListCTAButton",
  [
    "AdsHelpTrayUILoggerStoreUtils",
    "GeoButton.react",
    "MAIBAChatNavigationContext",
    "MAIBAInlinedContext",
    "MAIBALiquidityCTAAction",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(14),
        n = e.attributesJson,
        a = r("useJSON")(n),
        l = o("MAIBAChatNavigationContext").useMAIBAChatNavigationContext(),
        u = l.externalConversationId,
        c = a.action != null && a.action !== "" ? a.action : null,
        m = a.label != null && a.label !== "" ? a.label : null,
        g = c != null && m != null,
        h = c != null ? c : "",
        y = m != null ? m : "",
        C;
      t[0] !== h || t[1] !== y
        ? ((C = { action: h, "cta-type": f, label: y }),
          (t[0] = h),
          (t[1] = y),
          (t[2] = C))
        : (C = t[2]);
      var b = C,
        v;
      t[3] !== c || t[4] !== u || t[5] !== b
        ? ((v = function () {
            var e;
            if (c === _) {
              var t = o("MAIBAInlinedContext").getAdAccountIDFromURL(),
                n =
                  (e = o("MAIBAInlinedContext").getInlinedContext()) == null
                    ? void 0
                    : e.business_id;
              t == null ||
                n == null ||
                (o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
                  "help_tray_ads_ai_non_os_cta_click",
                  b,
                ),
                r("MAIBALiquidityCTAAction").dispatch(
                  {
                    adAccountID: t,
                    businessID: n,
                    externalConversationId: u,
                    modal: "customer_list",
                  },
                  {
                    line: "71",
                    module: "MAIBALiquidityCustomerListCTAButton.web.js",
                    moduleID: i.id,
                  },
                ));
            }
          }),
          (t[3] = c),
          (t[4] = u),
          (t[5] = b),
          (t[6] = v))
        : (v = t[6]);
      var S = v,
        R = p(!1),
        L,
        E;
      if (
        (t[7] !== g || t[8] !== b
          ? ((L = function () {
              R.current ||
                !g ||
                ((R.current = !0),
                o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
                  "help_tray_ads_ai_non_os_cta_impression",
                  b,
                ));
            }),
            (E = [g, b]),
            (t[7] = g),
            (t[8] = b),
            (t[9] = L),
            (t[10] = E))
          : ((L = t[9]), (E = t[10])),
        d(L, E),
        c == null || m == null)
      )
        return null;
      var k;
      return (
        t[11] !== S || t[12] !== m
          ? ((k = s.jsx(r("GeoButton.react"), {
              label: m,
              onClick: S,
              variant: "primary",
            })),
            (t[11] = S),
            (t[12] = m),
            (t[13] = k))
          : (k = t[13]),
        k
      );
    }
    l.default = g;
  },
  98,
);
