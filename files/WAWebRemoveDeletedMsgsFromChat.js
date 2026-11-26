__d(
  "WAWebRemoveDeletedMsgsFromChat",
  [
    "WALogger",
    "WAWebApiChat",
    "WAWebMsgCollection",
    "WAWebNotificationController",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n) {
      var a = n
          .map(function (e) {
            return o("WAWebMsgCollection").MsgCollection.get(e);
          })
          .filter(Boolean),
        i = a.filter(function (e) {
          return t.isUnreadMsg(e);
        }).length,
        l =
          t.activeUnreadCount > 0
            ? a.filter(function (e) {
                return t.isActiveUnreadMsg(e);
              }).length
            : 0;
      (n.forEach(function (e) {
        return o(
          "WAWebNotificationController",
        ).WANotificationController.closeOrCancelNotification("msg:" + e);
      }),
        a.forEach(function (e) {
          return e.delete({
            skipUpdatingSortTime: !0,
            doNotResetLastReceived: !0,
          });
        }),
        t.trigger("msgs:deleted"),
        l > 0 && (t.activeUnreadCount = Math.max(t.activeUnreadCount - l, 0)),
        i !== 0 &&
          ((t.unreadCount = Math.max(t.unreadCount - i, 0)),
          o("WAWebApiChat")
            .reduceChatUnreadCount(t.id.toString(), i, !1)
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "removeDeletedMsgsFromChat: failed to reduce chat unread count",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("deleted-msgs-unread-count-failed");
            })));
    }
    l.removeDeletedMsgsFromChat = s;
  },
  98,
);
