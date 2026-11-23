__d(
  "WAWebBizAiSmartComposerAiRepliesStatusMutation",
  [
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBizAiAgentGating",
    "WAWebBizAiRelayClient",
    "WAWebBizAiSmartComposerAiRepliesStatusMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebLidMigrationUtils",
    "WAWebNetworkStatus",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiSmartComposerAiRepliesStatusMutation.graphql")),
      _ = { success: !1 },
      f = 15e3;
    function g(e) {
      var t,
        n,
        r = e.modeChangeSource,
        a = e.status,
        i = e.suggestedRepliesEnabled,
        l = e.wid;
      if (
        !o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() ||
        !l.isUser()
      )
        return Promise.resolve(_);
      var u =
          (t = o("WAWebLidMigrationUtils").toLid(l)) == null ? void 0 : t.user,
        c = (n = o("WAWebLidMigrationUtils").toPn(l)) == null ? void 0 : n.user;
      return u == null && c == null
        ? (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[SmartComposer] ai-replies-status missing consumer identifier",
                ])),
            )
            .sendLogs("biz-ai-smart-composer-ai-replies-status-missing-id"),
          Promise.resolve(_))
        : h(c != null ? c : "", u != null ? u : "", a, i, r);
    }
    function h(e, t, n, a, i) {
      return y().then(function (l) {
        return l
          ? o("WAWebBizAiRelayClient")
              .commitMutation(p, {
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
                  return n != null ? { errorCode: n, success: !1 } : _;
                }
                return {
                  success: !0,
                  suggestedRepliesEnabled: t.suggested_replies_enabled,
                  updateTimestampMs: C(t.update_timestamp_ms),
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
                  _
                );
              })
          : _;
      });
    }
    async function y() {
      try {
        await o("WAPromiseTimeout").promiseTimeout(
          r("WAWebNetworkStatus").waitIfOffline(),
          f,
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
        var e = await o("WAPromiseTimeout").promiseTimeout(
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
    }
    function C(e) {
      if (e == null || e === "") return null;
      var t = Number(e);
      return Number.isFinite(t) ? t : null;
    }
    ((l.CONNECT_TIMEOUT_MS = f), (l.changeAiRepliesStatus = g));
  },
  98,
);
