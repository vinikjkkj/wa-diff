__d(
  "WAWebPostSenderKeyExpiredMetric",
  [
    "WAWebGetMessageChatTypeFromWid",
    "WAWebSenderKeyExpiredWamEvent",
    "WAWebWamNumberToSizeBucket",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.chatId,
        n = e.deviceCount,
        a = e.expiryReason,
        i = new (o("WAWebSenderKeyExpiredWamEvent").SenderKeyExpiredWamEvent)();
      if ((a != null && (i.expiryReason = a), t != null)) {
        var l = o("WAWebWidFactory").createWidFromWidLike(t);
        i.chatType = o(
          "WAWebGetMessageChatTypeFromWid",
        ).getMessageChatTypeFromWid(l);
      }
      (n != null &&
        n > 0 &&
        (i.deviceSizeBucket = r("WAWebWamNumberToSizeBucket")(n)),
        i.commit());
    }
    l.postSenderKeyExpiredMetric = e;
  },
  98,
);
