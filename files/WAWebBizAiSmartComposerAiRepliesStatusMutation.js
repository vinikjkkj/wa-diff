__d(
  "WAWebBizAiSmartComposerAiRepliesStatusMutation",
  [
    "Promise",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBizAiAgentGating",
    "WAWebBizAiRelayClient",
    "WAWebBizAiSmartComposerAiRepliesStatusMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebLidMigrationUtils",
    "WAWebNetworkStatus",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiSmartComposerAiRepliesStatusMutation.graphql")),
      f = { success: !1 },
      g = 15e3;
    function h(e) {
      var t,
        r,
        a = e.modeChangeSource,
        i = e.status,
        l = e.suggestedRepliesEnabled,
        u = e.wid;
      if (
        !o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() ||
        !u.isUser()
      )
        return (p || (p = n("Promise"))).resolve(f);
      var c =
          (t = o("WAWebLidMigrationUtils").toLid(u)) == null ? void 0 : t.user,
        d = (r = o("WAWebLidMigrationUtils").toPn(u)) == null ? void 0 : r.user;
      return c == null && d == null
        ? (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[SmartComposer] ai-replies-status missing consumer identifier",
                ])),
            )
            .sendLogs("biz-ai-smart-composer-ai-replies-status-missing-id"),
          (p || (p = n("Promise"))).resolve(f))
        : y(d != null ? d : "", c != null ? c : "", i, l, a);
    }
    function y(e, t, n, a, i) {
      return C().then(function (l) {
        return l
          ? o("WAWebBizAiRelayClient")
              .commitMutation(_, {
                consumer_lid: t,
                phone_number: e,
                thread_status: n,
                suggested_replies_enabled: a != null ? a : null,
                mode_change_source: i != null ? i : null,
              })
              .then(function (e) {
                var t =
                  e == null
                    ? void 0
                    : e.xfb_whatsapp_smb_maiba_ai_replies_status_update;
                if ((t == null ? void 0 : t.success) !== !0) {
                  var n = t == null ? void 0 : t.error_code;
                  return n != null ? { errorCode: n, success: !1 } : f;
                }
                return {
                  success: !0,
                  suggestedRepliesEnabled: t.suggested_replies_enabled,
                  updateTimestampMs: v(t.update_timestamp_ms),
                };
              })
              .catch(function (e) {
                return (
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[SmartComposer] ai-replies-status mutation failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("biz-ai-smart-composer-ai-replies-status-fail"),
                  f
                );
              })
          : f;
      });
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield o("WAPromiseTimeout").promiseTimeout(
              r("WAWebNetworkStatus").waitIfOffline(),
              g,
              "Smart Composer mode change timed out waiting for connectivity",
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[SmartComposer] ai-replies-status gave up waiting to reach the server",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("biz-ai-smart-composer-connect-timeout"),
              !1
            );
          }
          try {
            var e = yield o("WAPromiseTimeout").promiseTimeout(
              o("WAWebFetchAdAccountToken").fetchToken(),
              o(
                "WAWebFetchAdAccountToken",
              ).getMaximumAdAccountFetchTimeoutSeconds() * 1e3,
              "Smart Composer mode change timed out fetching credentials",
            );
            return e.type !== "success"
              ? (o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[SmartComposer] ai-replies-status token fetch failed",
                      ])),
                  )
                  .sendLogs("biz-ai-smart-composer-token-fetch-fail"),
                !1)
              : !0;
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[SmartComposer] ai-replies-status token fetch failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("biz-ai-smart-composer-token-fetch-fail"),
              !1
            );
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      if (e == null || e === "") return null;
      var t = Number(e);
      return Number.isFinite(t) ? t : null;
    }
    ((l.CONNECT_TIMEOUT_MS = g), (l.changeAiRepliesStatus = h));
  },
  98,
);
