__d(
  "WAWebBroadcastNotification.react",
  ["WAWebFormatBroadcastNotification", "WAWebMsgGetters", "useWAWebMsgValues"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.clickable,
        n = e.msg,
        r = o("useWAWebMsgValues").useMsgValues(n.id, [
          o("WAWebMsgGetters").getType,
          o("WAWebMsgGetters").getSubtype,
          o("WAWebMsgGetters").getRecipients,
        ]),
        a = r[0],
        i = r[1],
        l = r[2];
      return i === "create"
        ? o("WAWebFormatBroadcastNotification").getAudienceCreateMessage()
        : i === "add"
          ? o("WAWebFormatBroadcastNotification").getBroadcastAddMessage(l)
          : i === "remove"
            ? o("WAWebFormatBroadcastNotification").getBroadcastRemoveMessage(l)
            : null;
    }
    l.default = e;
  },
  98,
);
