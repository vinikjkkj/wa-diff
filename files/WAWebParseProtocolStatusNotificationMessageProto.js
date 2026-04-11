__d(
  "WAWebParseProtocolStatusNotificationMessageProto",
  ["WAWebMsgType", "WAWebViewMode.flow"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = e.msgContext,
        a = n.associatedChildMessage,
        i = n.statusNotificationMessage;
      if (
        !((a == null || (a == null ? void 0 : a.message) == null) && i == null)
      ) {
        var l = i;
        if (a != null && a.message != null && i == null) {
          var s;
          l = (s = a.message) == null ? void 0 : s.statusNotificationMessage;
        }
        if (l != null)
          return {
            msgData: babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.STATUS_NOTIFICATION,
              kind: o("WAWebMsgType").MsgKind.Unknown,
              viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
              futureproofSubtype: "status_notification_message",
            }),
            contextInfo: null,
          };
      }
    }
    l.default = e;
  },
  98,
);
