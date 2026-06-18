__d(
  "WAWebFetchBizAiLargeScreensGate",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebFetchAdAccountToken",
    "WAWebFetchBizAiLargeScreensGateQuery.graphql",
    "WAWebMobilePlatforms",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g =
        e !== void 0
          ? e
          : (e = n("WAWebFetchBizAiLargeScreensGateQuery.graphql")),
      h = "biz_ai_large_screens_gate",
      y = 360 * 60,
      C = 1e4;
    function b(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "loadedBizAiLargeScreensGate",
        { enabled: e },
      );
    }
    function v() {
      var e = r("WAWebUserPrefsStore").getUser(h);
      if (e == null || typeof e != "object") return null;
      var t = e.enabled,
        n = e.ts;
      if (typeof t != "boolean" || typeof n != "number") return null;
      var a = !o("WATimeUtils").isInFuture(
        o("WATimeUtils").futureUnixTime(y, o("WATimeUtils").castToUnixTime(n)),
      );
      return a ? null : t;
    }
    function S(e) {
      r("WAWebUserPrefsStore").setUser(h, {
        enabled: e,
        ts: o("WATimeUtils").unixTime(),
      });
    }
    function R() {
      return (
        o("WAWebFetchAdAccountToken").getMaximumAdAccountFetchTimeoutSeconds() *
          1e3 +
        C
      );
    }
    function L(e) {
      if (
        !o("WAWebMobilePlatforms").isSMB() ||
        !o("WAWebABProps").getABPropConfigValue(
          "biz_ai_large_screens_gate_fetch_enabled",
        )
      )
        return (f || (f = n("Promise"))).resolve();
      if (e !== "debug") {
        var t = v();
        if (t != null)
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] large-screens gate cache hit enabled=",
                  "",
                ])),
              t,
            ),
            b(t),
            (f || (f = n("Promise"))).resolve()
          );
      }
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[BizAI] fetchBizAiLargeScreensGate reason=",
              "",
            ])),
          e,
        ),
        r("WAWebNetworkStatus")
          .waitIfOffline()
          .then(function () {
            return o("WAPromiseTimeout").promiseTimeout(E(), R());
          })
          .then(I)
          .catch(function (e) {
            I(
              e instanceof o("WACustomError").TimeoutError
                ? { type: "timeout" }
                : { type: "token-failed" },
            );
          })
      );
    }
    function E() {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (e) {
          return e.type !== "success"
            ? { type: "token-failed" }
            : k(e.token).then(function (e) {
                return e.type === "ok"
                  ? { enabled: e.enabled, type: "enabled" }
                  : e.type === "error"
                    ? { type: "network-failed" }
                    : (o("WAWebFetchAdAccountToken").markTokenAsInvalid(),
                      o("WAWebFetchAdAccountToken")
                        .fetchToken(!0)
                        .then(function (e) {
                          return e.type !== "success"
                            ? { type: "token-failed" }
                            : k(e.token).then(function (e) {
                                return e.type === "ok"
                                  ? { enabled: e.enabled, type: "enabled" }
                                  : e.type === "auth"
                                    ? (o(
                                        "WAWebFetchAdAccountToken",
                                      ).markTokenAsInvalid(),
                                      { type: "auth-failed" })
                                    : { type: "network-failed" };
                              });
                        }));
              });
        });
    }
    function k(e) {
      return o("WAWebRelayClient")
        .fetchQuery(g, {}, { accessToken: e, environmentType: "facebook" })
        .then(function (e) {
          var t;
          return {
            enabled:
              (e == null ||
              (t = e.xfb_meta_ai_biz_agent_wa_large_screens_gate) == null
                ? void 0
                : t.value) === !0,
            type: "ok",
          };
        })
        .catch(function (e) {
          return o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
            ? { type: "auth" }
            : { type: "error" };
        });
    }
    function I(e) {
      switch (e.type) {
        case "enabled":
          (S(e.enabled),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] large-screens gate enabled=",
                  "",
                ])),
              e.enabled,
            ),
            b(e.enabled));
          return;
        case "timeout":
          (o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] large-screens gate fetch timed out",
                ])),
            )
            .sendLogs("maiba-large-screens-gate-fetch-timeout"),
            b(!1));
          return;
        case "auth-failed":
          (o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] large-screens gate fetch failed (auth)",
                ])),
            )
            .sendLogs("maiba-large-screens-gate-fetch-failed-auth"),
            b(!1));
          return;
        case "network-failed":
          (o("WALogger")
            .WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] large-screens gate fetch failed",
                ])),
            )
            .sendLogs("maiba-large-screens-gate-fetch-failed-network"),
            b(!1));
          return;
        case "token-failed":
          (o("WALogger")
            .WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] large-screens gate token fetch failed",
                ])),
            )
            .sendLogs("maiba-large-screens-gate-token-fetch-failed"),
            b(!1));
          return;
      }
    }
    l.fetchBizAiLargeScreensGate = L;
  },
  98,
);
