__d(
  "WAWebBizAiHandoffNotificationLogEvents",
  [
    "WALogger",
    "WAWebBizAiAgentGating",
    "WAWebBizAiHandoffNotificationWamEvent",
    "WAWebChatThreadLogging",
    "WAWebWamEnumHandoffNotifActionType",
    "asyncToGeneratorRuntime",
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
    function c(e, t, n, r) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i) {
            if (o("WAWebBizAiAgentGating").isAiRespondingChipEnabled())
              try {
                var l = yield o("WAWebChatThreadLogging").getChatThreadID(
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
          },
        )),
        d.apply(this, arguments)
      );
    }
    ((l.logAiHandoffNotificationClick = u),
      (l.logAiHandoffNotificationAction = c));
  },
  98,
);
