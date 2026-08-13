__d(
  "WAWebHandleCloudApiThreadControlNotification",
  [
    "WALogger",
    "WALongInt",
    "WAWebBackendApi",
    "WAWebBizAiAgentGating",
    "WAWebBizAiThreadControlExtraJson",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t) {
      var n = t.consumerLid,
        r = t.consumerPhoneNumber,
        a = t.senderNotificationTimestampMs,
        i = t.shouldSuppressNotification,
        l = t.status,
        c = o("WALongInt").maybeNumber(a);
      if (o("WAWebBizAiAgentGating").isAiBulkThreadControlEnabled()) {
        var m,
          p = o("WAWebBizAiThreadControlExtraJson").parseBulkThreadControl({
            raw: (m = t.notificationContent) == null ? void 0 : m.extraJson,
            isSmartComposerEnabled: o("WAWebBizAiAgentGating")
              .isSmartComposerWebEnabled,
            notificationTimestampMs: c,
          });
        if (p != null) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[Biz AI] Received bulk thread control notification, count: ",
                "",
              ])),
            p.length,
          ),
            o("WAWebBackendApi").frontendFireAndForget(
              "bulkUpdateChatCapiThreadControl",
              { updates: p },
            ));
          return;
        }
      }
      if (r == null && n == null) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[Maiba] thread ctrl missing phone & lid, status=",
              "",
            ])),
          l,
        );
        return;
      }
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[Biz AI] Received thread control notification, status: ",
            "",
          ])),
        l,
      ),
        o("WAWebBackendApi").frontendFireAndForget(
          "updateChatCapiThreadControl",
          {
            consumerPhoneNumber: r,
            consumerLid: n,
            status: l,
            timestampMs: c,
            shouldSuppressNotification: i,
            suggestedRepliesEnabled: d(t, l),
          },
        ));
    }
    function d(e, t) {
      var n, r;
      if (
        !(
          t !==
            o("WAWebProtobufsE2E.pb")
              .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
              .CONTROL_TAKEN &&
          t !==
            o("WAWebProtobufsE2E.pb")
              .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
              .CONTROL_PASSED
        )
      )
        return t ===
          o("WAWebProtobufsE2E.pb")
            .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
            .CONTROL_TAKEN
          ? !1
          : (n = o(
                "WAWebBizAiThreadControlExtraJson",
              ).parseSuggestedRepliesFromUpdateState(
                (r = e.notificationContent) == null ? void 0 : r.extraJson,
              )) != null
            ? n
            : void 0;
    }
    l.default = c;
  },
  98,
);
