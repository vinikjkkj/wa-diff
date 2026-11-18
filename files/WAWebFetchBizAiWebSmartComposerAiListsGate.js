__d(
  "WAWebFetchBizAiWebSmartComposerAiListsGate",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBackendApi",
    "WAWebBizAiGateCache",
    "WAWebBizAiRelayClient",
    "WAWebFetchAdAccountToken",
    "WAWebFetchBizAiWebSmartComposerAiListsGateQuery.graphql",
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
          : (e = n("WAWebFetchBizAiWebSmartComposerAiListsGateQuery.graphql")),
      b = "biz_ai_web_smart_composer_ai_lists_gate",
      v = 1e4,
      S = 2;
    function R(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "loadedBizAiWebSmartComposerAiListsGate",
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
      var t =
        e === "debug" ? null : o("WAWebBizAiGateCache").getCachedBizAiGate(b);
      return t != null
        ? (R(t),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] Smart Composer and AI Lists gate cache hit",
              ])),
          ),
          (y || (y = n("Promise"))).resolve())
        : (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] fetchBizAiWebSmartComposerAiListsGate reason=",
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
            }));
    }
    function k() {
      return o("WAWebBizAiRelayClient")
        .fetchQuery(C, {})
        .then(function (e) {
          var t;
          return {
            enabled:
              (e == null ||
              (t =
                e.xfb_meta_ai_biz_agent_wa_web_smart_composer_ai_lists_gate) ==
                null
                ? void 0
                : t.value) === !0,
            type: "enabled",
          };
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
                  "[BizAI] Smart Composer and AI Lists gate loaded",
                ])),
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
                  "[BizAI] Smart Composer and AI Lists gate fetch timed out",
                ])),
            )
            .sendLogs("maiba-web-smart-composer-ai-lists-gate-fetch-timeout"),
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
                  "[BizAI] Smart Composer and AI Lists gate fetch failed (auth)",
                ])),
            )
            .sendLogs(
              "maiba-web-smart-composer-ai-lists-gate-fetch-failed-auth",
            ),
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
                "[BizAI] Smart Composer and AI Lists gate fetch failure reason=",
                "",
              ])),
            a,
          ),
            o("WALogger")
              .WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] Smart Composer and AI Lists gate fetch failed",
                  ])),
              )
              .sendLogs(
                "maiba-web-smart-composer-ai-lists-gate-fetch-failed-network",
              ),
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
                  "[BizAI] Smart Composer and AI Lists gate fetch could not reach the server",
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
                  "[BizAI] Smart Composer and AI Lists gate token fetch failed",
                ])),
            )
            .sendLogs(
              "maiba-web-smart-composer-ai-lists-gate-token-fetch-failed",
            ),
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
                  "[BizAI] Smart Composer and AI Lists gate fetch failed (unknown)",
                ])),
            )
            .sendLogs(
              "maiba-web-smart-composer-ai-lists-gate-fetch-failed-unknown",
            ),
            R(o("WAWebBizAiGateCache").getBizAiGateFallback(b, t)));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    l.fetchBizAiWebSmartComposerAiListsGate = E;
  },
  98,
);
