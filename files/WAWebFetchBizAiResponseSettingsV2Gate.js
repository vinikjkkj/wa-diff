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
    "WAWebBizAiRelayClient",
    "WAWebFetchAdAccountToken",
    "WAWebFetchBizAiResponseSettingsV2GateMutation.graphql",
    "WAWebGraphQLServerError",
    "WAWebMobilePlatforms",
    "WAWebNetworkStatus",
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
      h,
      y,
      C =
        e !== void 0
          ? e
          : (e = n("WAWebFetchBizAiResponseSettingsV2GateMutation.graphql")),
      b = "biz_ai_response_settings_v2_gate",
      v = 360 * 60,
      S = 1e4,
      R = 2;
    function L(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "loadedBizAiResponseSettingsV2Gate",
        { enabled: e },
      );
    }
    function E() {
      var e = r("WAWebUserPrefsStore").getUser(b);
      if (e == null || typeof e != "object") return null;
      var t = e.enabled,
        n = e.ts;
      if (typeof t != "boolean" || typeof n != "number") return null;
      var a = !o("WATimeUtils").isInFuture(
        o("WATimeUtils").futureUnixTime(v, o("WATimeUtils").castToUnixTime(n)),
      );
      return a ? null : t;
    }
    function k(e) {
      r("WAWebUserPrefsStore").setUser(b, {
        enabled: e,
        ts: o("WATimeUtils").unixTime(),
      });
    }
    function I() {
      return (
        R *
        (o(
          "WAWebFetchAdAccountToken",
        ).getMaximumAdAccountFetchTimeoutSeconds() *
          1e3 +
          S)
      );
    }
    function T(e) {
      if (!o("WAWebMobilePlatforms").isSMB())
        return (y || (y = n("Promise"))).resolve();
      var t = o("WAWebBizAiAgentGating").getResponseSettingsV2TriState();
      if (t === "NONE") return (L(!1), (y || (y = n("Promise"))).resolve());
      if (t === "ROLLOUT") return (L(!0), (y || (y = n("Promise"))).resolve());
      if (e !== "debug") {
        var a = E();
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
            L(a),
            (y || (y = n("Promise"))).resolve()
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
            return o("WAPromiseTimeout").promiseTimeout(D(), I());
          })
          .then(P)
          .catch(function (e) {
            P(
              e instanceof o("WACustomError").TimeoutError
                ? { type: "timeout" }
                : { type: "unknown-failed" },
            );
          })
      );
    }
    function D() {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (e) {
          return e.type !== "success"
            ? { type: "token-failed" }
            : x(e.token).then(function (e) {
                return e.type === "ok"
                  ? { enabled: e.enabled, type: "enabled" }
                  : e.type === "error"
                    ? { reason: e.reason, type: "network-failed" }
                    : e.type === "unreachable"
                      ? { type: "network-unreachable" }
                      : (o("WAWebFetchAdAccountToken").markTokenAsInvalid(),
                        o("WAWebFetchAdAccountToken")
                          .fetchToken(!0)
                          .then(function (e) {
                            return e.type !== "success"
                              ? { type: "token-failed" }
                              : x(e.token).then(function (e) {
                                  return e.type === "ok"
                                    ? { enabled: e.enabled, type: "enabled" }
                                    : e.type === "auth"
                                      ? (o(
                                          "WAWebFetchAdAccountToken",
                                        ).markTokenAsInvalid(),
                                        { type: "auth-failed" })
                                      : e.type === "unreachable"
                                        ? { type: "network-unreachable" }
                                        : {
                                            reason: e.reason,
                                            type: "network-failed",
                                          };
                                });
                          }));
              });
        });
    }
    function x(e) {
      return o("WAWebBizAiRelayClient")
        .commitMutation(C, {}, { accessToken: e })
        .then(function (e) {
          var t = e == null ? void 0 : e.xfb_meta_ai_biz_agent_wa_fetch_qe_bool;
          return (t == null ? void 0 : t.success) !== !0
            ? {
                reason: "success=" + String(t == null ? void 0 : t.success),
                type: "error",
              }
            : { enabled: t.value === !0, type: "ok" };
        })
        .catch(function (e) {
          return o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
            ? { type: "auth" }
            : e instanceof TypeError
              ? { type: "unreachable" }
              : { reason: $(e), type: "error" };
        });
    }
    function $(e) {
      if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
        var t,
          n,
          r,
          a = (
            (t = (n = e.source) == null ? void 0 : n.errors) != null ? t : []
          )
            .map(function (e) {
              var t = e.code;
              return t;
            })
            .join(",");
        return (
          "codes=" +
          a +
          " http=" +
          String((r = e.source) == null ? void 0 : r.httpStatus)
        );
      }
      return e instanceof Error ? e.name : typeof e;
    }
    function P(e) {
      e: {
        var t = e;
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "enabled" &&
          "enabled" in t
        ) {
          var n = t.enabled;
          (k(n),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] response settings V2 gate enabled=",
                  "",
                ])),
              n,
            ),
            L(n));
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
            L(!1));
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
            L(!1));
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "network-failed" &&
          "reason" in t
        ) {
          var r = t.reason;
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] response settings V2 gate fetch failure reason=",
                "",
              ])),
            r,
          ),
            o("WALogger")
              .WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] response settings V2 gate fetch failed",
                  ])),
              )
              .sendLogs("maiba-response-settings-v2-gate-fetch-failed-network"),
            L(!1));
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "network-unreachable"
        ) {
          (o("WALogger")
            .WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] response settings V2 gate fetch could not reach the server",
                ])),
            )
            .verbose(),
            L(!1));
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "token-failed"
        ) {
          (o("WALogger")
            .WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] response settings V2 gate token fetch failed",
                ])),
            )
            .sendLogs("maiba-response-settings-v2-gate-token-fetch-failed"),
            L(!1));
          break e;
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "unknown-failed"
        ) {
          (o("WALogger")
            .WARN(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] response settings V2 gate fetch failed (unknown)",
                ])),
            )
            .sendLogs("maiba-response-settings-v2-gate-fetch-failed-unknown"),
            L(!1));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    l.fetchBizAiResponseSettingsV2Gate = T;
  },
  98,
);
