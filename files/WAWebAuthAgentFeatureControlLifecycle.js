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
              var r = e instanceof Error ? e.message : String(e);
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[AAFC] BusinessProfileCollection.find err ",
                    "",
                  ])),
                r,
              );
              return;
            }
            if (((e = n) == null ? void 0 : e.isAuthorizedAgent) === !0) {
              yield o("WAWebFeatureControlCache").markUserAsAA();
              var a = o("WAWebFeatureControlCache").getPolicyLastFetchedAt();
              if (
                !(
                  a != null &&
                  o("WATimeUtils").unixTimeMs() - a <
                    o("WATimeUtils").WEEK_MILLISECONDS
                )
              ) {
                var i = yield o(
                  "WAWebAuthAgentFeaturePolicyQuery",
                ).fetchAndCacheAuthAgentFeaturePolicy();
                switch (i.type) {
                  case "success":
                    break;
                  case "not_authorized_agent":
                    break;
                  case "error":
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[AAFC] policy fetch failed (",
                          ")",
                        ])),
                      i.error.message,
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
