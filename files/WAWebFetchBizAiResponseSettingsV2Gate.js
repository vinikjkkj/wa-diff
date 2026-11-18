__d(
  "WAWebFetchBizAiResponseSettingsV2Gate",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBackendApi",
    "WAWebBizAiAgentGating",
    "WAWebBizAiGateCache",
    "WAWebBizAiRelayClient",
    "WAWebFetchAdAccountToken",
    "WAWebFetchBizAiResponseSettingsV2GateMutation.graphql",
    "WAWebFetchWithAdAccountToken",
    "WAWebGraphQLServerError",
    "WAWebMobilePlatforms",
    "WAWebNetworkStatus",
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
      v = 1e4,
      S = 2;
    function R(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "loadedBizAiResponseSettingsV2Gate",
        { enabled: e },
      );
    }
    function L() {
      return (
        S *
        (o(
          "WAWebFetchAdAccountToken",
        ).getMaximumAdAccountFetchTimeoutSeconds() *
          1e3 +
          v)
      );
    }
    function E(e) {
      if (!o("WAWebMobilePlatforms").isSMB())
        return (y || (y = n("Promise"))).resolve();
      var t = o("WAWebBizAiAgentGating").getResponseSettingsV2TriState();
      if (t === "NONE") return (R(!1), (y || (y = n("Promise"))).resolve());
      if (t === "ROLLOUT") return (R(!0), (y || (y = n("Promise"))).resolve());
      if (e !== "debug") {
        var a = o("WAWebBizAiGateCache").getCachedBizAiGate(b);
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
            R(a),
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
            return o("WAPromiseTimeout").promiseTimeout(k(), L());
          })
          .then(function (t) {
            return D(t, e);
          })
          .catch(function (t) {
            D(
              t instanceof o("WACustomError").TimeoutError
                ? { type: "timeout" }
                : { type: "unknown-failed" },
              e,
            );
          })
      );
    }
    function k() {
      return o("WAWebBizAiRelayClient")
        .commitMutation(C, {})
        .then(function (e) {
          var t = e == null ? void 0 : e.xfb_meta_ai_biz_agent_wa_fetch_qe_bool;
          return (t == null ? void 0 : t.success) !== !0
            ? {
                reason: "success=" + String(t == null ? void 0 : t.success),
                type: "network-failed",
              }
            : { enabled: t.value === !0, type: "enabled" };
        })
        .catch(function (e) {
          return I(e);
        });
    }
    function I(e) {
      return e instanceof
        o("WAWebFetchWithAdAccountToken").FetchAdAccountTokenError
        ? { type: "token-failed" }
        : e instanceof Error &&
            o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
          ? { type: "auth-failed" }
          : e instanceof TypeError
            ? { type: "network-unreachable" }
            : { reason: T(e), type: "network-failed" };
    }
    function T(e) {
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
    function D(e, t) {
      e: {
        var n = e;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "enabled" &&
          "enabled" in n
        ) {
          var r = n.enabled;
          (o("WAWebBizAiGateCache").cacheBizAiGate(b, r),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] response settings V2 gate enabled=",
                  "",
                ])),
              r,
            ),
            R(r));
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "timeout"
        ) {
          (o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] response settings V2 gate fetch timed out",
                ])),
            )
            .sendLogs("maiba-response-settings-v2-gate-fetch-timeout"),
            R(o("WAWebBizAiGateCache").getBizAiGateFallback(b, t)));
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "auth-failed"
        ) {
          (o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] response settings V2 gate fetch failed (auth)",
                ])),
            )
            .sendLogs("maiba-response-settings-v2-gate-fetch-failed-auth"),
            R(!1));
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "network-failed" &&
          "reason" in n
        ) {
          var a = n.reason;
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] response settings V2 gate fetch failure reason=",
                "",
              ])),
            a,
          ),
            o("WALogger")
              .WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] response settings V2 gate fetch failed",
                  ])),
              )
              .sendLogs("maiba-response-settings-v2-gate-fetch-failed-network"),
            R(o("WAWebBizAiGateCache").getBizAiGateFallback(b, t)));
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "network-unreachable"
        ) {
          (o("WALogger")
            .WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] response settings V2 gate fetch could not reach the server",
                ])),
            )
            .verbose(),
            R(o("WAWebBizAiGateCache").getBizAiGateFallback(b, t)));
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "token-failed"
        ) {
          (o("WALogger")
            .WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] response settings V2 gate token fetch failed",
                ])),
            )
            .sendLogs("maiba-response-settings-v2-gate-token-fetch-failed"),
            R(o("WAWebBizAiGateCache").getBizAiGateFallback(b, t)));
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "unknown-failed"
        ) {
          (o("WALogger")
            .WARN(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] response settings V2 gate fetch failed (unknown)",
                ])),
            )
            .sendLogs("maiba-response-settings-v2-gate-fetch-failed-unknown"),
            R(o("WAWebBizAiGateCache").getBizAiGateFallback(b, t)));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    l.fetchBizAiResponseSettingsV2Gate = E;
  },
  98,
);
