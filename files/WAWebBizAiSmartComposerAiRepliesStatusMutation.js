__d(
  "WAWebBizAiSmartComposerAiRepliesStatusMutation",
  [
    "Promise",
    "WALogger",
    "WAWebBizAiAgentGating",
    "WAWebBizAiSmartComposerAiRepliesStatusMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebLidMigrationUtils",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiSmartComposerAiRepliesStatusMutation.graphql")),
      p = { success: !1 };
    function _(e, t, r) {
      var a, i;
      if (!o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled())
        return (d || (d = n("Promise"))).resolve(p);
      var l =
          (a = o("WAWebLidMigrationUtils").toLid(e)) == null ? void 0 : a.user,
        u = (i = o("WAWebLidMigrationUtils").toPn(e)) == null ? void 0 : i.user;
      return l == null || u == null
        ? (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[SmartComposer] ai-replies-status missing consumer identifier",
                ])),
            )
            .sendLogs("biz-ai-smart-composer-ai-replies-status-missing-id"),
          (d || (d = n("Promise"))).resolve(p))
        : f(u, l, t, r);
    }
    function f(e, t, n, a) {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (i) {
          return i.type !== "success"
            ? (o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[SmartComposer] ai-replies-status token fetch failed",
                    ])),
                )
                .sendLogs("biz-ai-smart-composer-token-fetch-fail"),
              p)
            : r("WAWebNetworkStatus")
                .waitIfOffline()
                .then(function () {
                  return o("WAWebRelayClient")
                    .commitMutation(
                      m,
                      {
                        consumer_lid: t,
                        phone_number: e,
                        thread_status: n,
                        suggested_replies_enabled: a != null ? a : null,
                      },
                      { environmentType: "facebook", accessToken: i.token },
                    )
                    .then(function (e) {
                      var t =
                        e == null
                          ? void 0
                          : e.xfb_whatsapp_smb_maiba_ai_replies_status_update;
                      return (t == null ? void 0 : t.success) !== !0
                        ? p
                        : {
                            success: !0,
                            suggestedRepliesEnabled:
                              t.suggested_replies_enabled,
                            updateTimestampMs: g(t.update_timestamp_ms),
                          };
                    })
                    .catch(function (e) {
                      return (
                        o("WALogger")
                          .ERROR(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "[SmartComposer] ai-replies-status mutation failed",
                              ])),
                          )
                          .catching(r("getErrorSafe")(e))
                          .sendLogs(
                            "biz-ai-smart-composer-ai-replies-status-fail",
                          ),
                        p
                      );
                    });
                });
        });
    }
    function g(e) {
      if (e == null || e === "") return null;
      var t = Number(e);
      return Number.isFinite(t) ? t : null;
    }
    l.changeAiRepliesStatus = _;
  },
  98,
);
