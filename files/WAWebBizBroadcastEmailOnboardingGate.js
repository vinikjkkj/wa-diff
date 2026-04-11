__d(
  "WAWebBizBroadcastEmailOnboardingGate",
  [
    "Promise",
    "WALogger",
    "WAWebBizAdCreationEmailOnboardingFlow.react",
    "WAWebBizBroadcastEmailOnboardingGateQuery.graphql",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebModalManager",
    "asyncToGeneratorRuntime",
    "react",
    "react-relay",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = p || (p = o("react")),
      f =
        e !== void 0
          ? e
          : (e = n("WAWebBizBroadcastEmailOnboardingGateQuery.graphql"));
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var a,
              i = yield o("react-relay").fetchQuery(e, f, {}).toPromise(),
              l =
                i == null || (a = i.wa_ad_account_onboarding_data) == null
                  ? void 0
                  : a.email;
            return l != null && l !== ""
              ? (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAWebBizBroadcastEmailOnboardingGate] Email already set, skipping onboarding",
                    ])),
                ),
                !0)
              : (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAWebBizBroadcastEmailOnboardingGate] Email not set, opening onboarding flow",
                    ])),
                ),
                new (m || (m = n("Promise")))(function (n) {
                  o("WAWebModalManager").ModalManager.open(
                    _.jsx(o("react-relay").RelayEnvironmentProvider, {
                      environment: e,
                      children: _.jsx(
                        r("WAWebBizAdCreationEmailOnboardingFlow.react"),
                        {
                          adAccountID: t,
                          loggerContext: null,
                          onCancel: function () {
                            (o("WAWebModalManager").closeModalManager(), n(!1));
                          },
                          onComplete: function () {
                            (o("WAWebModalManager").closeModalManager(), n(!0));
                          },
                        },
                      ),
                    }),
                    { blockClose: !0 },
                  );
                }));
          } catch (e) {
            return (
              e instanceof Error
                ? o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[WAWebBizBroadcastEmailOnboardingGate] Email onboarding check failed:",
                        ])),
                    )
                    .catching(e)
                    .sendLogs("bb-email-onboarding-failed")
                : o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[WAWebBizBroadcastEmailOnboardingGate] Email onboarding check failed: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("bb-email-onboarding-failed"),
              o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.emailOnboardingCheckFailed(
                "onboarding_query_failed",
              ),
              !0
            );
          }
        })),
        h.apply(this, arguments)
      );
    }
    l.maybeOpenEmailOnboarding = g;
  },
  98,
);
