__d(
  "WAWebBizBroadcastEmailOnboardingGate",
  [
    "WALogger",
    "WAWebBizAdCreationEmailOnboardingFlow.react",
    "WAWebBizBroadcastEmailOnboardingGateQuery.graphql",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebModalManager",
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
      p = m || (m = o("react")),
      _ =
        e !== void 0
          ? e
          : (e = n("WAWebBizBroadcastEmailOnboardingGateQuery.graphql"));
    async function f(e, t) {
      try {
        var n,
          a = await o("react-relay").fetchQuery(e, _, {}).toPromise(),
          i =
            a == null || (n = a.wa_ad_account_onboarding_data) == null
              ? void 0
              : n.email;
        return i != null && i !== ""
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
            new Promise(function (n) {
              o("WAWebModalManager").ModalManager.open(
                p.jsx(o("react-relay").RelayEnvironmentProvider, {
                  environment: e,
                  children: p.jsx(
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
    }
    l.maybeOpenEmailOnboarding = f;
  },
  98,
);
