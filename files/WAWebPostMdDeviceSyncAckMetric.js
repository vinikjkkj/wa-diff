__d(
  "WAWebPostMdDeviceSyncAckMetric",
  [
    "WAWebGetMessageChatTypeFromWid",
    "WAWebMdDeviceSyncAckWamEvent",
    "WAWebSendMsgCommonApi",
    "WAWebWamAddressingModeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.chatWid,
        n = e.groupData,
        r = e.msgProtobuf,
        a = e.msgRecord,
        i = e.serverAddressingMode,
        l = new (o("WAWebMdDeviceSyncAckWamEvent").MdDeviceSyncAckWamEvent)({
          revoke: o("WAWebSendMsgCommonApi").isRevokeMsg(r),
        });
      if (
        ((l.chatType = o(
          "WAWebGetMessageChatTypeFromWid",
        ).getMessageChatTypeFromWid(t)),
        t.isGroup() ? (l.isLid = a.data.from.isLid()) : (l.isLid = t.isLid()),
        n != null)
      ) {
        var s = o(
          "WAWebWamAddressingModeUtils",
        ).getAddressingModeMetricsFromGroupMetadata(n);
        s != null && (l.localAddressingMode = s);
      }
      (t.isGroup() &&
        i != null &&
        (l.serverAddressingMode = o(
          "WAWebWamAddressingModeUtils",
        ).getWamAddressingModeFromString(i)),
        l.commit());
    }
    l.postMdDeviceSyncAckMetric = e;
  },
  98,
);
