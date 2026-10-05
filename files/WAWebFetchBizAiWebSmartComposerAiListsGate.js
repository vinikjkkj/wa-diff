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
      y = "biz_ai_web_editing_coaching_gate",
      C = 360 * 60,
      b = 1e4,
      v = 2;
    function S(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "loadedBizAiWebSmartComposerAiListsGate",
        { enabled: e },
      );
    }
    function R(e) {
      o("WAWebBackendApi").frontendFireAndForget(
        "loadedBizAiWebEditingCoachingGate",
        { enabled: e },
      );
    }
    function L(e) {
      var t = r("WAWebUserPrefsStore").getUser(e);
      if (t == null || typeof t != "object") return null;
      var n = t.enabled,
        a = t.ts;
      if (typeof n != "boolean" || typeof a != "number") return null;
      var i = !o("WATimeUtils").isInFuture(
        o("WATimeUtils").futureUnixTime(C, o("WATimeUtils").castToUnixTime(a)),
      );
      return i ? null : n;
    }
    function E(e, t) {
      r("WAWebUserPrefsStore").setUser(e, {
        enabled: t,
        ts: o("WATimeUtils").unixTime(),
      });
    }
    function k() {
      return (
        v *
        (o(
          "WAWebFetchAdAccountToken",
        ).getMaximumAdAccountFetchTimeoutSeconds() *
          1e3 +
          b)
      );
    }
    function I(e) {
      if (!o("WAWebMobilePlatforms").isSMB())
        return (f || (f = n("Promise"))).resolve();
      var t = e === "debug" ? null : L(h),
        a = e === "debug" ? null : L(y);
      return e !== "debug" &&
        (t != null && S(t), a != null && R(a), t != null && a != null)
        ? (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] Web experiment gate caches hit",
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
              return o("WAPromiseTimeout").promiseTimeout(T(), k());
            })
            .then(function (e) {
              return x(e, t, a);
            })
            .catch(function (e) {
              x(
                e instanceof o("WACustomError").TimeoutError
                  ? { type: "timeout" }
                  : { type: "network-failed" },
                t,
                a,
              );
            }));
    }
    function T() {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (e) {
          return e.type !== "success"
            ? { type: "token-failed" }
            : D(e.token).then(function (e) {
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
                            : D(e.token).then(function (e) {
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
    function D(e) {
      return o("WAWebRelayClient")
        .fetchQuery(g, {}, { accessToken: e, environmentType: "facebook" })
        .then(function (e) {
          var t, n;
          return {
            editingCoachingEnabled:
              (e == null ||
              (t = e.xfb_meta_ai_biz_agent_wa_web_ai_editing_coaching_gate) ==
                null
                ? void 0
                : t.value) === !0,
            enabled:
              (e == null ||
              (n =
                e.xfb_meta_ai_biz_agent_wa_web_smart_composer_ai_lists_gate) ==
                null
                ? void 0
                : n.value) === !0,
            type: "ok",
          };
        })
        .catch(function (e) {
          return o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
            ? { type: "auth" }
            : { type: "error" };
        });
    }
    function x(e, t, n) {
      e: {
        var r = e;
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.type === "enabled" &&
          "editingCoachingEnabled" in r &&
          "enabled" in r
        ) {
          var a = r.editingCoachingEnabled,
            i = r.enabled;
          (E(h, i),
            E(y, a),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] Web experiment gates loaded",
                ])),
            ),
            S(i),
            R(a));
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.type === "timeout"
        ) {
          (o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] Smart Composer and AI Lists gate fetch timed out",
                ])),
            )
            .sendLogs("maiba-web-smart-composer-ai-lists-gate-fetch-timeout"),
            S(t != null ? t : !1),
            R(n != null ? n : !1));
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.type === "auth-failed"
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
            S(t != null ? t : !1),
            R(n != null ? n : !1));
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.type === "network-failed"
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
            S(t != null ? t : !1),
            R(n != null ? n : !1));
          break e;
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.type === "token-failed"
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
            S(t != null ? t : !1),
            R(n != null ? n : !1));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            r,
        );
      }
    }
    l.fetchBizAiWebSmartComposerAiListsGate = I;
  },
  98,
);
