__d(
  "WAWebPostMdDeviceSyncAckMetric",
  [
    "WAWebGetMessageChatTypeFromWid",
    "WAWebMdDeviceSyncAckWamEvent",
    "WAWebSendMsgCommonApi",
    "WAWebWamAddressingModeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, a) {
      var i = new (o("WAWebMdDeviceSyncAckWamEvent").MdDeviceSyncAckWamEvent)({
        revoke: o("WAWebSendMsgCommonApi").isRevokeMsg(n),
      });
      if (
        ((i.chatType = o(
          "WAWebGetMessageChatTypeFromWid",
        ).getMessageChatTypeFromWid(e)),
        e.isGroup() ? (i.isLid = t.data.from.isLid()) : (i.isLid = e.isLid()),
        r != null)
      ) {
        var l = o(
          "WAWebWamAddressingModeUtils",
        ).getAddressingModeMetricsFromGroupMetadata(r);
        l != null && (i.localAddressingMode = l);
      }
      (e.isGroup() &&
        a != null &&
        (i.serverAddressingMode = o(
          "WAWebWamAddressingModeUtils",
        ).getWamAddressingModeFromString(a)),
        i.commit());
    }
    l.postMdDeviceSyncAckMetric = e;
  },
  98,
);
