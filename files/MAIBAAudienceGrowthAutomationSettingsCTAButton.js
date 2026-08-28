__d(
  "MAIBAAudienceGrowthAutomationSettingsCTAButton",
  [
    "ALToolTab",
    "AdsHelpTrayUILoggerStoreUtils",
    "GeoButton.react",
    "MAIBAAudienceGrowthAutomationSettingsCTAEvent",
    "MAIBAChatNavigationContext",
    "MAIBAInlinedContext",
    "MAIBALiquidityCTAAction",
    "MAIBASurfaceContext",
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
      _ = "open_liquidity_automation_settings_modal",
      f = "open_1p_automation_settings_modal",
      g = new Set([
        "WA Messaging Audience",
        "WA Messaging Campaign Creation",
        "WA Messaging Campaigns",
        "WA Messaging Event-Based Send",
      ]);
    function h(e) {
      var t,
        n = o("react-compiler-runtime").c(21),
        a = e.attributesJson,
        l = r("useJSON")(a),
        u = o("MAIBAChatNavigationContext").useMAIBAChatNavigationContext(),
        c = u.externalConversationId,
        m = o("MAIBASurfaceContext").useMAIBASurfaceContext(),
        h = m.autoLoggingTool,
        y = l.action != null && l.action !== "" ? l.action : null,
        C = l.label != null && l.label !== "" ? l.label : null,
        b =
          (t = l.source) != null
            ? t
            : y === f
              ? "MAIBA_1P"
              : y === _
                ? "MAIBA_LIQUIDITY"
                : null,
        v;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = o("MAIBAInlinedContext").getAdAccountIDFromURL()), (n[0] = v))
        : (v = n[0]);
      var S = v != null,
        R,
        L;
      n[1] !== h
        ? ((R = o("ALToolTab").getCurrentToolTab().tab),
          (L = h === "MBS" && R != null && g.has(R)),
          (n[1] = h),
          (n[2] = R),
          (n[3] = L))
        : ((R = n[2]), (L = n[3]));
      var E = L,
        k =
          (b === "MAIBA_1P" && E && y === f) ||
          (b === "MAIBA_LIQUIDITY" && y === _ && S),
        I = y != null && C != null && k,
        T = y != null ? y : "",
        D =
          b === "MAIBA_1P"
            ? "maiba-1p-automation-settings"
            : "liquidity-automation-settings",
        x = C != null ? C : "",
        $;
      n[4] !== T || n[5] !== D || n[6] !== x
        ? (($ = { action: T, "cta-type": D, label: x }),
          (n[4] = T),
          (n[5] = D),
          (n[6] = x),
          (n[7] = $))
        : ($ = n[7]);
      var P = $,
        N;
      n[8] !== y || n[9] !== R || n[10] !== c || n[11] !== P || n[12] !== b
        ? ((N = function () {
            var e;
            if (b === "MAIBA_1P") {
              if (y !== f) return;
              o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
                "help_tray_ads_ai_non_os_cta_click",
                P,
              );
              var t =
                  R === "WA Messaging Audience"
                    ? "BizWebCometBusinessMessagingHubWhatsAppAudiencesTabContent"
                    : "BizWebCometBusinessMessagingHubWhatsAppCampaignsRoot",
                n = {
                  externalConversationId: c,
                  modal: "automation_settings",
                  originComponent: t,
                };
              window.dispatchEvent(
                new CustomEvent(
                  o("MAIBAAudienceGrowthAutomationSettingsCTAEvent")
                    .MAIBA_AUDIENCE_GROWTH_AUTOMATION_SETTINGS_CTA_EVENT,
                  { detail: n },
                ),
              );
              return;
            }
            if (!(b !== "MAIBA_LIQUIDITY" || y !== _)) {
              var a = o("MAIBAInlinedContext").getAdAccountIDFromURL(),
                l =
                  (e = o("MAIBAInlinedContext").getInlinedContext()) == null
                    ? void 0
                    : e.business_id;
              a == null ||
                l == null ||
                (o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
                  "help_tray_ads_ai_non_os_cta_click",
                  P,
                ),
                r("MAIBALiquidityCTAAction").dispatch(
                  {
                    adAccountID: a,
                    businessID: l,
                    externalConversationId: c,
                    modal: "automation_settings",
                  },
                  {
                    line: "122",
                    module:
                      "MAIBAAudienceGrowthAutomationSettingsCTAButton.web.js",
                    moduleID: i.id,
                  },
                ));
            }
          }),
          (n[8] = y),
          (n[9] = R),
          (n[10] = c),
          (n[11] = P),
          (n[12] = b),
          (n[13] = N))
        : (N = n[13]);
      var M = N,
        w = p(!1),
        A,
        F;
      if (
        (n[14] !== I || n[15] !== P
          ? ((A = function () {
              w.current ||
                !I ||
                ((w.current = !0),
                o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
                  "help_tray_ads_ai_non_os_cta_impression",
                  P,
                ));
            }),
            (F = [I, P]),
            (n[14] = I),
            (n[15] = P),
            (n[16] = A),
            (n[17] = F))
          : ((A = n[16]), (F = n[17])),
        d(A, F),
        !I || y == null || C == null)
      )
        return null;
      var O;
      return (
        n[18] !== M || n[19] !== C
          ? ((O = s.jsx(r("GeoButton.react"), {
              label: C,
              onClick: M,
              variant: "primary",
            })),
            (n[18] = M),
            (n[19] = C),
            (n[20] = O))
          : (O = n[20]),
        O
      );
    }
    l.default = h;
  },
  98,
);
