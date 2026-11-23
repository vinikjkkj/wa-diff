__d(
  "WAWebBizAiHandoffNotificationLogEvents",
  [
    "WALogger",
    "WAWebBizAiAgentGating",
    "WAWebBizAiHandoffNotificationWamEvent",
    "WAWebChatThreadLogging",
    "WAWebWamEnumHandoffNotifActionType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 0;
    function u(e, t, n) {
      return c(
        e,
        o("WAWebWamEnumHandoffNotifActionType").HANDOFF_NOTIF_ACTION_TYPE
          .NOTIF_CLICKED_BODY,
        t,
        n,
      );
    }
    async function c(t, n, a, i) {
      if (o("WAWebBizAiAgentGating").isHandoffRemovalTimingSyncEnabled())
        try {
          var l = await o("WAWebChatThreadLogging").getChatThreadID(
            t.id.toJid(),
            i,
          );
          if (l == null) return;
          new (o(
            "WAWebBizAiHandoffNotificationWamEvent",
          ).BizAiHandoffNotificationWamEvent)({
            handoffNotifAction: n,
            handoffNotifVersion: s,
            notificationId: a,
            threadId: l,
          }).commit();
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "biz ai handoff notification logging failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("biz-ai-handoff-notification-wam");
        }
    }
    ((l.logAiHandoffNotificationClick = u),
      (l.logAiHandoffNotificationAction = c));
  },
  98,
);
