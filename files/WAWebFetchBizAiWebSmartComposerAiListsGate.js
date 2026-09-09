__d(
  "WAWebFetchBizAiWebSmartComposerAiListsGate",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebFetchAdAccountToken",
    "WAWebFetchBizAiWebSmartComposerAiListsGateQuery.graphql",
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
          : (e = n("WAWebFetchBizAiWebSmartComposerAiListsGateQuery.graphql")),
      h = "biz_ai_web_smart_composer_ai_lists_gate",
      y = 360 * 60,
      C = 1e4,
      b = 2;
    function v(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "loadedBizAiWebSmartComposerAiListsGate",
        { enabled: e },
      );
    }
    function S() {
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
    function R(e) {
      r("WAWebUserPrefsStore").setUser(h, {
        enabled: e,
        ts: o("WATimeUtils").unixTime(),
      });
    }
    function L() {
      return (
        b *
        (o(
          "WAWebFetchAdAccountToken",
        ).getMaximumAdAccountFetchTimeoutSeconds() *
          1e3 +
          C)
      );
    }
    function E(e) {
      if (!o("WAWebMobilePlatforms").isSMB())
        return (f || (f = n("Promise"))).resolve();
      if (e !== "debug") {
        var t = S();
        if (t != null)
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] Smart Composer and AI Lists gate cache hit enabled=",
                  "",
                ])),
              t,
            ),
            v(t),
            (f || (f = n("Promise"))).resolve()
          );
      }
      return (
        o("WALogger").LOG(
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
          .then(T)
          .catch(function (e) {
            T(
              e instanceof o("WACustomError").TimeoutError
                ? { type: "timeout" }
                : { type: "network-failed" },
            );
          })
      );
    }
    function k() {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (e) {
          return e.type !== "success"
            ? { type: "token-failed" }
            : I(e.token).then(function (e) {
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
                            : I(e.token).then(function (e) {
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
    function I(e) {
      return o("WAWebRelayClient")
        .fetchQuery(g, {}, { accessToken: e, environmentType: "facebook" })
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
            type: "ok",
          };
        })
        .catch(function (e) {
          return o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
            ? { type: "auth" }
            : { type: "error" };
        });
    }
    function T(e) {
      e: {
        var t = e;
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "enabled" &&
          "enabled" in t
        ) {
          var n = t.enabled;
          (R(n),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] Smart Composer and AI Lists gate enabled=",
                  "",
                ])),
              n,
            ),
            v(n));
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
                  "[BizAI] Smart Composer and AI Lists gate fetch timed out",
                ])),
            )
            .sendLogs("maiba-web-smart-composer-ai-lists-gate-fetch-timeout"),
            v(!1));
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
                  "[BizAI] Smart Composer and AI Lists gate fetch failed (auth)",
                ])),
            )
            .sendLogs(
              "maiba-web-smart-composer-ai-lists-gate-fetch-failed-auth",
            ),
            v(!1));
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
                  "[BizAI] Smart Composer and AI Lists gate fetch failed",
                ])),
            )
            .sendLogs(
              "maiba-web-smart-composer-ai-lists-gate-fetch-failed-network",
            ),
            v(!1));
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
                  "[BizAI] Smart Composer and AI Lists gate token fetch failed",
                ])),
            )
            .sendLogs(
              "maiba-web-smart-composer-ai-lists-gate-token-fetch-failed",
            ),
            v(!1));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    l.fetchBizAiWebSmartComposerAiListsGate = E;
  },
  98,
);
