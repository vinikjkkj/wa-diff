__d(
  "WAWebFetchBizAiResponseSettingsV2Gate",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBizAiAgentGating",
    "WAWebFetchAdAccountToken",
    "WAWebFetchBizAiResponseSettingsV2GateMutation.graphql",
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
      g,
      h =
        e !== void 0
          ? e
          : (e = n("WAWebFetchBizAiResponseSettingsV2GateMutation.graphql")),
      y = "biz_ai_response_settings_v2_gate",
      C = 360 * 60,
      b = 1e4,
      v = 2;
    function S(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "loadedBizAiResponseSettingsV2Gate",
        { enabled: e },
      );
    }
    function R() {
      var e = r("WAWebUserPrefsStore").getUser(y);
      if (e == null || typeof e != "object") return null;
      var t = e.enabled,
        n = e.ts;
      if (typeof t != "boolean" || typeof n != "number") return null;
      var a = !o("WATimeUtils").isInFuture(
        o("WATimeUtils").futureUnixTime(C, o("WATimeUtils").castToUnixTime(n)),
      );
      return a ? null : t;
    }
    function L(e) {
      r("WAWebUserPrefsStore").setUser(y, {
        enabled: e,
        ts: o("WATimeUtils").unixTime(),
      });
    }
    function E() {
      return (
        v *
        (o(
          "WAWebFetchAdAccountToken",
        ).getMaximumAdAccountFetchTimeoutSeconds() *
          1e3 +
          b)
      );
    }
    function k(e) {
      if (!o("WAWebMobilePlatforms").isSMB())
        return (g || (g = n("Promise"))).resolve();
      var t = o("WAWebBizAiAgentGating").getResponseSettingsV2TriState();
      if (t === "NONE") return (S(!1), (g || (g = n("Promise"))).resolve());
      if (t === "ROLLOUT") return (S(!0), (g || (g = n("Promise"))).resolve());
      if (e !== "debug") {
        var a = R();
        if (a != null)
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] response settings V2 gate cache hit enabled=",
                  "",
                ])),
              a,
            ),
            S(a),
            (g || (g = n("Promise"))).resolve()
          );
      }
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[BizAI] fetchBizAiResponseSettingsV2Gate reason=",
              "",
            ])),
          e,
        ),
        r("WAWebNetworkStatus")
          .waitIfOffline()
          .then(function () {
            return o("WAPromiseTimeout").promiseTimeout(I(), E());
          })
          .then(D)
          .catch(function (e) {
            D(
              e instanceof o("WACustomError").TimeoutError
                ? { type: "timeout" }
                : { type: "unknown-failed" },
            );
          })
      );
    }
    function I() {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (e) {
          return e.type !== "success"
            ? { type: "token-failed" }
            : T(e.token).then(function (e) {
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
                            : T(e.token).then(function (e) {
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
    function T(e) {
      return o("WAWebRelayClient")
        .commitMutation(h, {}, { accessToken: e, environmentType: "facebook" })
        .then(function (e) {
          var t = e == null ? void 0 : e.xfb_meta_ai_biz_agent_wa_fetch_qe_bool;
          return (t == null ? void 0 : t.success) !== !0
            ? { type: "error" }
            : { enabled: t.value === !0, type: "ok" };
        })
        .catch(function (e) {
          return o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
            ? { type: "auth" }
            : { type: "error" };
        });
    }
    function D(e) {
      e: {
        var t = e;
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "enabled" &&
          "enabled" in t
        ) {
          var n = t.enabled;
          (L(n),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] response settings V2 gate enabled=",
                  "",
                ])),
              n,
            ),
            S(n));
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "timeout"
        ) {
          (o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] response settings V2 gate fetch timed out",
                ])),
            )
            .sendLogs("maiba-response-settings-v2-gate-fetch-timeout"),
            S(!1));
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "auth-failed"
        ) {
          (o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] response settings V2 gate fetch failed (auth)",
                ])),
            )
            .sendLogs("maiba-response-settings-v2-gate-fetch-failed-auth"),
            S(!1));
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "network-failed"
        ) {
          (o("WALogger")
            .WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] response settings V2 gate fetch failed",
                ])),
            )
            .sendLogs("maiba-response-settings-v2-gate-fetch-failed-network"),
            S(!1));
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "token-failed"
        ) {
          (o("WALogger")
            .WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] response settings V2 gate token fetch failed",
                ])),
            )
            .sendLogs("maiba-response-settings-v2-gate-token-fetch-failed"),
            S(!1));
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "unknown-failed"
        ) {
          (o("WALogger")
            .WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] response settings V2 gate fetch failed (unknown)",
                ])),
            )
            .sendLogs("maiba-response-settings-v2-gate-fetch-failed-unknown"),
            S(!1));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    l.fetchBizAiResponseSettingsV2Gate = k;
  },
  98,
);
