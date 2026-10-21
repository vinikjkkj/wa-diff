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
    function S(e) {
      var t = r("WAWebUserPrefsStore").getUser(e);
      if (t == null || typeof t != "object") return null;
      var n = t.enabled,
        a = t.ts;
      if (typeof n != "boolean" || typeof a != "number") return null;
      var i = !o("WATimeUtils").isInFuture(
        o("WATimeUtils").futureUnixTime(y, o("WATimeUtils").castToUnixTime(a)),
      );
      return i ? null : n;
    }
    function R(e, t) {
      r("WAWebUserPrefsStore").setUser(e, {
        enabled: t,
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
      var t = e === "debug" ? null : S(h);
      return t != null
        ? (v(t),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] Smart Composer and AI Lists gate cache hit",
              ])),
          ),
          (f || (f = n("Promise"))).resolve())
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
            .then(function (e) {
              return T(e, t);
            })
            .catch(function (e) {
              T(
                e instanceof o("WACustomError").TimeoutError
                  ? { type: "timeout" }
                  : { type: "network-failed" },
                t,
              );
            }));
    }
    function k() {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (e) {
          return e.type !== "success"
            ? { type: "token-failed" }
            : I(e.token).then(function (e) {
                return e.type === "ok"
                  ? babelHelpers.extends({}, e, { type: "enabled" })
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
                                  ? babelHelpers.extends({}, e, {
                                      type: "enabled",
                                    })
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
    function T(e, t) {
      e: {
        var n = e;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "enabled" &&
          "enabled" in n
        ) {
          var r = n.enabled;
          (R(h, r),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] Smart Composer and AI Lists gate loaded",
                ])),
            ),
            v(r));
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
            v(t != null ? t : !1));
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
            v(t != null ? t : !1));
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "network-failed"
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
            v(t != null ? t : !1));
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "token-failed"
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
            v(t != null ? t : !1));
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
