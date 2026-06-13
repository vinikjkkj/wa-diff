__d(
  "WAWebFetchBizAiLargeScreensGate",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebFetchAdAccountToken",
    "WAWebFetchBizAiLargeScreensGateQuery.graphql",
    "WAWebMobilePlatforms",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p =
        e !== void 0
          ? e
          : (e = n("WAWebFetchBizAiLargeScreensGateQuery.graphql"));
    function _(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "loadedBizAiLargeScreensGate",
        { enabled: e },
      );
    }
    function f(e) {
      return !o("WAWebMobilePlatforms").isSMB() ||
        !o("WAWebABProps").getABPropConfigValue(
          "biz_ai_large_screens_gate_fetch_enabled",
        )
        ? (m || (m = n("Promise"))).resolve()
        : (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] fetchBizAiLargeScreensGate reason=",
                "",
              ])),
            e,
          ),
          o("WAWebFetchAdAccountToken")
            .fetchToken()
            .then(function (e) {
              if (e.type !== "success") {
                _(!1);
                return;
              }
              return g(e.token);
            })
            .catch(function () {
              (o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[BizAI] large-screens gate token fetch failed",
                    ])),
                )
                .sendLogs("maiba-large-screens-gate-token-fetch-failed"),
                _(!1));
            }));
    }
    function g(e) {
      return o("WAWebRelayClient")
        .fetchQuery(p, {}, { accessToken: e, environmentType: "facebook" })
        .then(function (e) {
          var t,
            n =
              (e == null ||
              (t = e.xfb_meta_ai_biz_agent_wa_large_screens_gate) == null
                ? void 0
                : t.value) === !0;
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] large-screens gate enabled=",
                "",
              ])),
            n,
          ),
            _(n));
        })
        .catch(function (e) {
          (o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e) &&
            o("WAWebFetchAdAccountToken").markTokenAsInvalid(),
            o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] large-screens gate fetch failed",
                  ])),
              )
              .sendLogs("maiba-large-screens-gate-fetch-failed"),
            _(!1));
        });
    }
    l.fetchBizAiLargeScreensGate = f;
  },
  98,
);
