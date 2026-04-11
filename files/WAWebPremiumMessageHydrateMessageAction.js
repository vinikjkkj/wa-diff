__d(
  "WAWebPremiumMessageHydrateMessageAction",
  [
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebMsgType",
    "WAWebProtobufSyncAction.pb",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebContactCollection").ContactCollection.get(e.id.remote);
      if (n != null)
        switch (t.type) {
          case o("WAWebProtobufSyncAction.pb")
            .SyncActionValue$MarketingMessageAction$MarketingMessagePrototypeType
            .PERSONALIZED: {
            var r = s(t, n);
            e.mediaData == null ? e.set("body", r) : e.set("caption", r);
            break;
          }
          default:
            e.type = o("WAWebMsgType").MSG_TYPE.UNKNOWN;
            break;
        }
    }
    function s(e, t) {
      return u(e, t);
    }
    function u(e, t) {
      var n = o("WAWebContactGetters").getPremiumMessageName(t);
      return n === ""
        ? e.message.replaceAll(/ ?<<customer_name>>/g, "")
        : e.message.replace(/<<customer_name>>/g, n);
    }
    l.hydratePremiumMessage = e;
  },
  98,
);
