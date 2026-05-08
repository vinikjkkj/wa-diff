__d(
  "WAWebAuthAgentFeatureControlLifecycle",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAuthAgentFeaturePolicyQuery",
    "WAWebBackendEventBus",
    "WAWebBizCoexGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebFeatureControlCache",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = !1;
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          if (o("WAWebBizCoexGatingUtils").authAgentFeatureControlEnabled()) {
            var t;
            try {
              t = o("WAWebUserPrefsMeUser").getMeUser();
            } catch (e) {
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "AuthAgentFeatureControl: getMeUser() failed at stream-ready \u2014 skipping",
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
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "AuthAgentFeatureControl: BusinessProfileCollection.find failed: ",
                    "",
                  ])),
                e instanceof Error ? e.message : String(e),
              );
              return;
            }
            if (((e = n) == null ? void 0 : e.isAuthorizedAgent) === !0) {
              yield o("WAWebFeatureControlCache").markUserAsAA();
              var r = o("WAWebFeatureControlCache").getPolicyLastFetchedAt();
              if (
                !(
                  r != null &&
                  o("WATimeUtils").unixTimeMs() - r <
                    o("WATimeUtils").WEEK_MILLISECONDS
                )
              ) {
                var a = yield o(
                  "WAWebAuthAgentFeaturePolicyQuery",
                ).fetchAndCacheAuthAgentFeaturePolicy();
                switch (a.type) {
                  case "success":
                    break;
                  case "not_authorized_agent":
                    break;
                  case "error":
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "AuthAgentFeatureControl: policy fetch failed (",
                          ") \u2014 gatekeeper will fall back to PILOT_DEFAULT until next session retries",
                        ])),
                      a.error.message,
                    );
                    break;
                }
              }
            }
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      d ||
        ((d = !0),
        o("WAWebBackendEventBus").BackendEventBus.onMainStreamModeReady(
          function () {
            m().catch(function (t) {
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
    l.startAuthAgentFeatureControlLifecycle = _;
  },
  98,
);
