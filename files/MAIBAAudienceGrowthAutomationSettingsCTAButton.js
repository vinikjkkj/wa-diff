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
    "geoMargin",
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
        n = e.attributesJson,
        a = r("useJSON")(n),
        l = o("MAIBAChatNavigationContext").useMAIBAChatNavigationContext(),
        u = l.externalConversationId,
        h = o("MAIBASurfaceContext").useMAIBASurfaceContext(),
        y = h.autoLoggingTool,
        C = a.action != null && a.action !== "" ? a.action : null,
        b = a.label != null && a.label !== "" ? a.label : null,
        v =
          (t = a.source) != null
            ? t
            : C === f
              ? "MAIBA_1P"
              : C === _
                ? "MAIBA_LIQUIDITY"
                : null,
        S = o("MAIBAInlinedContext").getAdAccountIDFromURL() != null,
        R = o("ALToolTab").getCurrentToolTab().tab,
        L = y === "MBS" && R != null && g.has(R),
        E =
          (v === "MAIBA_1P" && L && C === f) ||
          (v === "MAIBA_LIQUIDITY" && C === _ && S),
        k = C != null && b != null && E,
        I = m(
          function () {
            return {
              action: C != null ? C : "",
              "cta-type":
                v === "MAIBA_1P"
                  ? "maiba-1p-automation-settings"
                  : "liquidity-automation-settings",
              label: b != null ? b : "",
            };
          },
          [C, b, v],
        ),
        T = c(
          function () {
            var e;
            if (v === "MAIBA_1P") {
              if (C !== f) return;
              o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
                "help_tray_ads_ai_non_os_cta_click",
                I,
              );
              var t =
                  R === "WA Messaging Audience"
                    ? "BizWebCometBusinessMessagingHubWhatsAppAudiencesTabContent"
                    : "BizWebCometBusinessMessagingHubWhatsAppCampaignsRoot",
                n = {
                  externalConversationId: u,
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
            if (!(v !== "MAIBA_LIQUIDITY" || C !== _)) {
              var a = o("MAIBAInlinedContext").getAdAccountIDFromURL(),
                l =
                  (e = o("MAIBAInlinedContext").getInlinedContext()) == null
                    ? void 0
                    : e.business_id;
              a == null ||
                l == null ||
                (o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
                  "help_tray_ads_ai_non_os_cta_click",
                  I,
                ),
                r("MAIBALiquidityCTAAction").dispatch(
                  {
                    adAccountID: a,
                    businessID: l,
                    externalConversationId: u,
                    modal: "automation_settings",
                  },
                  {
                    line: "123",
                    module:
                      "MAIBAAudienceGrowthAutomationSettingsCTAButton.web.js",
                    moduleID: i.id,
                  },
                ));
            }
          },
          [C, R, u, I, v],
        ),
        D = p(!1);
      return (
        d(
          function () {
            D.current ||
              !k ||
              ((D.current = !0),
              o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
                "help_tray_ads_ai_non_os_cta_impression",
                I,
              ));
          },
          [k, I],
        ),
        !k || C == null || b == null
          ? null
          : s.jsx(r("GeoButton.react"), {
              label: b,
              onClick: T,
              variant: "primary",
              xstyle: [r("geoMargin").end8, r("geoMargin").bottom8],
            })
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
