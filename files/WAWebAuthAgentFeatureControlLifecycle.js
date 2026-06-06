__d(
  "WAWebAuthAgentFeatureControlLifecycle",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAgentTransitionUtils",
    "WAWebAuthAgentFeaturePolicyQuery",
    "WAWebBackendEventBus",
    "WAWebBizCoexGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebFeatureControlCache",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = !1;
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          if (o("WAWebBizCoexGatingUtils").authAgentFeatureControlEnabled()) {
            var t;
            try {
              t = o("WAWebUserPrefsMeUser").getMeUser();
            } catch (e) {
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[AAFC] getMeUser() failed at stream-ready",
                  ])),
              );
              return;
            }
            var n;
            try {
              n = yield o(
                "WAWebBusinessProfileCollection",
              ).BusinessProfileCollection.find(t);
            } catch (e) {
              var a = e instanceof Error ? e.message : String(e);
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[AAFC] BusinessProfileCollection.find err ",
                    "",
                  ])),
                a,
              );
              return;
            }
            if (((e = n) == null ? void 0 : e.isAuthorizedAgent) === !0) {
              if (o("WAWebBizCoexGatingUtils").agentSmbOffboardingEnabled())
                if (
                  o(
                    "WAWebUserPrefsMultiDevice",
                  ).getIsHostedMeAccountFromLocalStorage()
                )
                  try {
                    yield o(
                      "WAWebAgentTransitionUtils",
                    ).clearMeSmbOffboardingState();
                  } catch (e) {
                    o("WALogger")
                      .ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[AAFC] clear stale SMB offboarding state failed at startup",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("aa-smb-offboarding-clear-startup-fail");
                  }
                else
                  try {
                    var i;
                    (yield o(
                      "WAWebAgentTransitionUtils",
                    ).storeMeSmbParentCompanyName(
                      (i = n.parentCompanyName) != null ? i : "",
                    ),
                      yield o(
                        "WAWebAgentTransitionUtils",
                      ).storeMeSmbOffboardingState());
                  } catch (e) {
                    o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[AAFC] failed to store SMB offboarding state at startup",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("aa-smb-offboarding-store-startup-fail");
                  }
              yield o("WAWebFeatureControlCache").markUserAsAA();
              var l = o("WAWebFeatureControlCache").getPolicyLastFetchedAt();
              if (
                !(
                  l != null &&
                  o("WATimeUtils").unixTimeMs() - l <
                    o("WATimeUtils").WEEK_MILLISECONDS
                )
              ) {
                var p = yield o(
                  "WAWebAuthAgentFeaturePolicyQuery",
                ).fetchAndCacheAuthAgentFeaturePolicy();
                switch (p.type) {
                  case "success":
                    break;
                  case "not_authorized_agent":
                    break;
                  case "error":
                    o("WALogger").WARN(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[AAFC] policy fetch failed (",
                          ")",
                        ])),
                      p.error.message,
                    );
                    break;
                }
              }
            }
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      p ||
        ((p = !0),
        o("WAWebBackendEventBus").BackendEventBus.onMainStreamModeReady(
          function () {
            _().catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "AuthAgentFeatureControl: unexpected error",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("aa-fc-lifecycle-error");
            });
          },
        ));
    }
    l.startAuthAgentFeatureControlLifecycle = g;
  },
  98,
);
