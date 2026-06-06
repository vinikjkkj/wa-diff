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
    async function _() {
      var t;
      if (o("WAWebBizCoexGatingUtils").authAgentFeatureControlEnabled()) {
        var n;
        try {
          n = o("WAWebUserPrefsMeUser").getMeUser();
        } catch (t) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[AAFC] getMeUser() failed at stream-ready",
              ])),
          );
          return;
        }
        var a;
        try {
          a = await o(
            "WAWebBusinessProfileCollection",
          ).BusinessProfileCollection.find(n);
        } catch (e) {
          var i = e instanceof Error ? e.message : String(e);
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[AAFC] BusinessProfileCollection.find err ",
                "",
              ])),
            i,
          );
          return;
        }
        if (((t = a) == null ? void 0 : t.isAuthorizedAgent) === !0) {
          if (o("WAWebBizCoexGatingUtils").agentSmbOffboardingEnabled())
            if (
              o(
                "WAWebUserPrefsMultiDevice",
              ).getIsHostedMeAccountFromLocalStorage()
            )
              try {
                await o(
                  "WAWebAgentTransitionUtils",
                ).clearMeSmbOffboardingState();
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[AAFC] clear stale SMB offboarding state failed at startup",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("aa-smb-offboarding-clear-startup-fail");
              }
            else
              try {
                var l;
                (await o(
                  "WAWebAgentTransitionUtils",
                ).storeMeSmbParentCompanyName(
                  (l = a.parentCompanyName) != null ? l : "",
                ),
                  await o(
                    "WAWebAgentTransitionUtils",
                  ).storeMeSmbOffboardingState());
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[AAFC] failed to store SMB offboarding state at startup",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("aa-smb-offboarding-store-startup-fail");
              }
          await o("WAWebFeatureControlCache").markUserAsAA();
          var m = o("WAWebFeatureControlCache").getPolicyLastFetchedAt();
          if (
            !(
              m != null &&
              o("WATimeUtils").unixTimeMs() - m <
                o("WATimeUtils").WEEK_MILLISECONDS
            )
          ) {
            var p = await o(
              "WAWebAuthAgentFeaturePolicyQuery",
            ).fetchAndCacheAuthAgentFeaturePolicy();
            switch (p.type) {
              case "success":
                break;
              case "not_authorized_agent":
                break;
              case "error":
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
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
    }
    function f() {
      p ||
        ((p = !0),
        o("WAWebBackendEventBus").BackendEventBus.onMainStreamModeReady(
          function () {
            _().catch(function (e) {
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "AuthAgentFeatureControl: unexpected error",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("aa-fc-lifecycle-error");
            });
          },
        ));
    }
    l.startAuthAgentFeatureControlLifecycle = f;
  },
  98,
);
