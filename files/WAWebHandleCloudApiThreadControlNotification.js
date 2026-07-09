__d(
  "WAWebHandleCloudApiThreadControlNotification",
  [
    "WALogger",
    "WALongInt",
    "WAWebBackendApi",
    "WAWebBizAiAgentGating",
    "WAWebBizAiThreadControlExtraJson",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t) {
      if (o("WAWebBizAiAgentGating").isAiBulkThreadControlEnabled()) {
        var n,
          r = o("WAWebBizAiThreadControlExtraJson").parseBulkThreadControl(
            (n = t.notificationContent) == null ? void 0 : n.extraJson,
          );
        if (r != null) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[Biz AI] Received bulk thread control notification, count: ",
                "",
              ])),
            r.length,
          ),
            o("WAWebBackendApi").frontendFireAndForget(
              "bulkUpdateChatCapiThreadControl",
              { updates: r },
            ));
          return;
        }
      }
      var a = t.consumerLid,
        i = t.consumerPhoneNumber,
        l = t.senderNotificationTimestampMs,
        c = t.shouldSuppressNotification,
        d = t.status;
      if (i == null && a == null) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[Maiba] thread ctrl missing phone & lid, status=",
              "",
            ])),
          d,
        );
        return;
      }
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[Biz AI] Received thread control notification, status: ",
            "",
          ])),
        d,
      ),
        o("WAWebBackendApi").frontendFireAndForget(
          "updateChatCapiThreadControl",
          {
            consumerPhoneNumber: i,
            consumerLid: a,
            status: d,
            timestampMs: o("WALongInt").maybeNumber(l),
            shouldSuppressNotification: c,
          },
        ));
    }
    l.default = c;
  },
  98,
);
