__d(
  "WAWebBroadcastSystemMsg",
  ["WAWebContactSystemMsg", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebContactSystemMsg").genNotificationMsg(e, {
        kind: o("WAWebMsgType").MsgKind.BroadcastNotification,
        subtype: "create",
        templateParams: [],
        type: "broadcast_notification",
      });
    }
    function s(e) {
      return o("WAWebContactSystemMsg").genNotificationMsg(e, {
        kind: o("WAWebMsgType").MsgKind.BroadcastNotification,
        subtype: "bb_pro_create",
        templateParams: [],
        type: "broadcast_notification",
      });
    }
    ((l.genBroadcastCreateSystemMsg = e),
      (l.genBroadcastProCreateSystemMsg = s));
  },
  98,
);
