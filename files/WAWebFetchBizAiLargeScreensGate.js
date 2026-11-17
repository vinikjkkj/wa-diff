__d(
  "WAWebFetchBizAiLargeScreensGate",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBizAiRelayClient",
    "WAWebFetchAdAccountToken",
    "WAWebFetchBizAiLargeScreensGateQuery.graphql",
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
          : (e = n("WAWebFetchBizAiLargeScreensGateQuery.graphql")),
      b = "biz_ai_large_screens_gate",
      v = 360 * 60,
      S = 1e4;
    function R(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "loadedBizAiLargeScreensGate",
        { enabled: e },
      );
    }
    function L() {
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
    function E(e) {
      r("WAWebUserPrefsStore").setUser(b, {
        enabled: e,
        ts: o("WATimeUtils").unixTime(),
      });
    }
    function k() {
      return (
        o("WAWebFetchAdAccountToken").getMaximumAdAccountFetchTimeoutSeconds() *
          1e3 +
        S
      );
    }
    function I(e) {
      if (!o("WAWebMobilePlatforms").isSMB())
        return (y || (y = n("Promise"))).resolve();
      if (e !== "debug") {
        var t = L();
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
            R(t),
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
            return o("WAPromiseTimeout").promiseTimeout(T(), k());
          })
          .then($)
          .catch(function (e) {
            $(
              e instanceof o("WACustomError").TimeoutError
                ? { type: "timeout" }
                : { type: "unknown-failed" },
            );
          })
      );
    }
    function T() {
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
          return D(e);
        });
    }
    function D(e) {
      return e instanceof
        o("WAWebFetchWithAdAccountToken").FetchAdAccountTokenError
        ? { type: "token-failed" }
        : e instanceof Error &&
            o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
          ? { type: "auth-failed" }
          : e instanceof TypeError
            ? { type: "network-unreachable" }
            : { reason: x(e), type: "network-failed" };
    }
    function x(e) {
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
    function $(e) {
      switch (e.type) {
        case "enabled":
          (E(e.enabled),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] large-screens gate enabled=",
                  "",
                ])),
              e.enabled,
            ),
            R(e.enabled));
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
            R(!1));
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
            R(!1));
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
            R(!1));
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
            R(!1));
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
            R(!1));
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
            R(!1));
          return;
      }
    }
    l.fetchBizAiLargeScreensGate = I;
  },
  98,
);
