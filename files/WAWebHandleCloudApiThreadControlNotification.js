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
        p = o("WALongInt").maybeNumber(i),
        _ = o("WAWebBizAiThreadControlExtraJson").parseBulkThreadControl({
          raw: (n = t.notificationContent) == null ? void 0 : n.extraJson,
          isSmartComposerEnabled: o("WAWebBizAiAgentGating")
            .isSmartComposerWebEnabled,
          notificationTimestampMs: p,
        });
      if (_ != null) {
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[Biz AI] Received bulk thread control notification, count: ",
              "",
            ])),
          _.length,
        ),
          o("WAWebBackendApi").frontendFireAndForget(
            "bulkUpdateChatCapiThreadControl",
            { updates: _ },
          ));
        return;
      }
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
            timestampMs: p,
            shouldSuppressNotification: l,
            suggestedRepliesEnabled: d(t, c),
            lastHandoffActor: m(t, c),
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
    l.default = c;
  },
  98,
);
