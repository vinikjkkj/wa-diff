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
      var n,
        r = t.consumerLid,
        a = t.consumerPhoneNumber,
        i = t.senderNotificationTimestampMs,
        l = t.shouldSuppressNotification,
        c = t.status,
        _ = o("WALongInt").maybeNumber(i),
        f = o("WAWebBizAiThreadControlExtraJson").parseBulkThreadControl({
          raw: (n = t.notificationContent) == null ? void 0 : n.extraJson,
          notificationTimestampMs: _,
        });
      if (f != null) {
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[Biz AI] Received bulk thread control notification, count: ",
              "",
            ])),
          f.length,
        ),
          o("WAWebBackendApi").frontendFireAndForget(
            "bulkUpdateChatCapiThreadControl",
            { updates: f },
          ));
        return;
      }
      if (
        !(
          c !==
            o("WAWebProtobufsE2E.pb")
              .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
              .CONTROL_PASSED &&
          c !==
            o("WAWebProtobufsE2E.pb")
              .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
              .CONTROL_TAKEN &&
          o("WAWebBizAiAgentGating").isCompanionThreadSyncFixEnabled()
        )
      ) {
        if (a == null && r == null) {
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[Maiba] thread ctrl missing phone & lid, status=",
                "",
              ])),
            c,
          );
          return;
        }
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[Biz AI] Received thread control notification, status: ",
              "",
            ])),
          c,
        ),
          o("WAWebBackendApi").frontendFireAndForget(
            "updateChatCapiThreadControl",
            {
              consumerPhoneNumber: a,
              consumerLid: r,
              status: c,
              timestampMs: _,
              shouldSuppressNotification: l,
              suggestedRepliesEnabled: d(t, c),
              lastHandoffActor: m(t, c),
              handoffReason: p(t, c),
            },
          ));
      }
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
    function m(e, t) {
      var n;
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
        return {
          actor: o("WAWebBizAiThreadControlExtraJson").parseLastHandoffActor(
            (n = e.notificationContent) == null ? void 0 : n.extraJson,
          ),
        };
    }
    function p(e, t) {
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
        return (n = o("WAWebBizAiThreadControlExtraJson").parseHandoffReason(
          (r = e.notificationContent) == null ? void 0 : r.extraJson,
        )) != null
          ? n
          : void 0;
    }
    l.default = c;
  },
  98,
);
