__d(
  "WAWebBizBroadcastProOnboardingHistoryQuery",
  [
    "CometRelay",
    "WALogger",
    "WAWebBizBroadcastProOnboardingHistoryQuery.graphql",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebBizBroadcastProRelayEnvironment",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("WAWebBizBroadcastProOnboardingHistoryQuery.graphql"));
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e,
              t = yield r("WAWebBizBroadcastProRelayEnvironment")(),
              n = yield o("CometRelay")
                .fetchQuery(t, c, {}, { fetchPolicy: "network-only" })
                .toPromise(),
              a =
                n == null || (e = n.xfb_whatsapp_bb_pro) == null
                  ? void 0
                  : e.has_onboarding_history;
            if (a == null) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "BB Pro onboarding history missing from response",
                    ])),
                )
                .sendLogs("bb-pro-onboarding-history-missing");
              return;
            }
            o(
              "WAWebBizBroadcastProOnboardingStatus",
            ).updateBizBroadcastProOnboardingHistory(a);
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to fetch BB Pro onboarding history",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("bb-pro-onboarding-history-fetch-failed");
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.default = d;
  },
  98,
);
