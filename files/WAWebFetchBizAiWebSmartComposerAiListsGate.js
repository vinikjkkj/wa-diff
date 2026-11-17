__d(
  "WAWebFetchBizAiWebSmartComposerAiListsGate",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBizAiRelayClient",
    "WAWebFetchAdAccountToken",
    "WAWebFetchBizAiWebSmartComposerAiListsGateQuery.graphql",
    "WAWebFetchWithAdAccountToken",
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
          : (e = n("WAWebFetchBizAiWebSmartComposerAiListsGateQuery.graphql")),
      b = "biz_ai_web_smart_composer_ai_lists_gate",
      v = 360 * 60,
      S = 1e4,
      R = 2;
    function L(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "loadedBizAiWebSmartComposerAiListsGate",
        { enabled: e },
      );
    }
    function E(e) {
      var t = r("WAWebUserPrefsStore").getUser(e);
      if (t == null || typeof t != "object") return null;
      var n = t.enabled,
        a = t.ts;
      if (typeof n != "boolean" || typeof a != "number") return null;
      var i = !o("WATimeUtils").isInFuture(
        o("WATimeUtils").futureUnixTime(v, o("WATimeUtils").castToUnixTime(a)),
      );
      return i ? null : n;
    }
    function k(e, t) {
      r("WAWebUserPrefsStore").setUser(e, {
        enabled: t,
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
      var t = e === "debug" ? null : E(b);
      return t != null
        ? (L(t),
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
              return o("WAPromiseTimeout").promiseTimeout(D(), I());
            })
            .then(function (e) {
              return P(e, t);
            })
            .catch(function (e) {
              P(
                e instanceof o("WACustomError").TimeoutError
                  ? { type: "timeout" }
                  : { type: "unknown-failed" },
                t,
              );
            }));
    }
    function D() {
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
          return x(e);
        });
    }
    function x(e) {
      return e instanceof
        o("WAWebFetchWithAdAccountToken").FetchAdAccountTokenError
        ? { type: "token-failed" }
        : e instanceof Error &&
            o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
          ? { type: "auth-failed" }
          : e instanceof TypeError
            ? { type: "network-unreachable" }
            : { reason: $(e), type: "network-failed" };
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
    function P(e, t) {
      e: {
        var n = e;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "enabled" &&
          "enabled" in n
        ) {
          var r = n.enabled;
          (k(b, r),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] Smart Composer and AI Lists gate loaded",
                ])),
            ),
            L(r));
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
            L(t != null ? t : !1));
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
            L(t != null ? t : !1));
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
            L(t != null ? t : !1));
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
            L(t != null ? t : !1));
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
            L(t != null ? t : !1));
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
            L(t != null ? t : !1));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    l.fetchBizAiWebSmartComposerAiListsGate = T;
  },
  98,
);
