__d(
  "WAWebFetchBizAiLargeScreensGate",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBackendApi",
    "WAWebBizAiGateCache",
    "WAWebBizAiRelayClient",
    "WAWebFetchAdAccountToken",
    "WAWebFetchBizAiLargeScreensGateQuery.graphql",
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
          : (e = n("WAWebFetchBizAiLargeScreensGateQuery.graphql")),
      b = "biz_ai_large_screens_gate",
      v = 1e4;
    function S(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "loadedBizAiLargeScreensGate",
        { enabled: e },
      );
    }
    function R() {
      return (
        o("WAWebFetchAdAccountToken").getMaximumAdAccountFetchTimeoutSeconds() *
          1e3 +
        v
      );
    }
    function L(e) {
      if (!o("WAWebMobilePlatforms").isSMB())
        return (y || (y = n("Promise"))).resolve();
      if (e !== "debug") {
        var t = o("WAWebBizAiGateCache").getCachedBizAiGate(b);
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
            S(t),
            (y || (y = n("Promise"))).resolve()
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
          .then(T)
          .catch(function (e) {
            T(
              e instanceof o("WACustomError").TimeoutError
                ? { type: "timeout" }
                : { type: "unknown-failed" },
            );
          })
      );
    }
    function E() {
      return o("WAWebBizAiRelayClient")
        .fetchQuery(C, {})
        .then(function (e) {
          var t;
          return {
            enabled:
              (e == null ||
              (t = e.xfb_meta_ai_biz_agent_wa_large_screens_gate) == null
                ? void 0
                : t.value) === !0,
            type: "enabled",
          };
        })
        .catch(function (e) {
          return k(e);
        });
    }
    function k(e) {
      return e instanceof
        o("WAWebFetchWithAdAccountToken").FetchAdAccountTokenError
        ? { type: "token-failed" }
        : e instanceof Error &&
            o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
          ? { type: "auth-failed" }
          : e instanceof TypeError
            ? { type: "network-unreachable" }
            : { reason: I(e), type: "network-failed" };
    }
    function I(e) {
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
    function T(e) {
      switch (e.type) {
        case "enabled":
          (o("WAWebBizAiGateCache").cacheBizAiGate(b, e.enabled),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] large-screens gate enabled=",
                  "",
                ])),
              e.enabled,
            ),
            S(e.enabled));
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
            S(!1));
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
            S(!1));
          return;
        case "network-failed":
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] large-screens gate fetch failure reason=",
                "",
              ])),
            e.reason,
          ),
            o("WALogger")
              .WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] large-screens gate fetch failed",
                  ])),
              )
              .sendLogs("maiba-large-screens-gate-fetch-failed-network"),
            S(!1));
          return;
        case "network-unreachable":
          (o("WALogger")
            .WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] large-screens gate fetch could not reach the server",
                ])),
            )
            .verbose(),
            S(!1));
          return;
        case "token-failed":
          (o("WALogger")
            .WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] large-screens gate token fetch failed",
                ])),
            )
            .sendLogs("maiba-large-screens-gate-token-fetch-failed"),
            S(!1));
          return;
        case "unknown-failed":
          (o("WALogger")
            .WARN(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] large-screens gate fetch failed (unknown)",
                ])),
            )
            .sendLogs("maiba-large-screens-gate-fetch-failed-unknown"),
            S(!1));
          return;
      }
    }
    l.fetchBizAiLargeScreensGate = L;
  },
  98,
);
