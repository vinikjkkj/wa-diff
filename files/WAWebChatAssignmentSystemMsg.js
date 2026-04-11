__d(
  "WAWebChatAssignmentSystemMsg",
  ["WAWebMsgKey", "WAWebMsgType", "WAWebUserPrefsMeUser", "WAWebViewMode.flow"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var a = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        i = r("WAWebMsgKey").newId_DEPRECATED(),
        l = new (r("WAWebMsgKey"))({
          fromMe: o("WAWebUserPrefsMeUser").isMeAccount(e),
          remote: e,
          id: i,
        });
      return {
        id: l,
        t: n,
        type: "notification_template",
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        subtype: t == null ? "chat_assignment_unassign" : "chat_assignment",
        from: e,
        to: a,
        templateParams: t == null ? [] : [t.name],
      };
    }
    l.genChatAssignmentNotificationTemplateMsg = e;
  },
  98,
);
