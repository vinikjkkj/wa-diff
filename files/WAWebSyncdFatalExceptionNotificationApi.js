__d(
  "WAWebSyncdFatalExceptionNotificationApi",
  [
    "WATimeUtils",
    "WAWebApiPeerMessageStore",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOutgoingPeerMsgKey",
    "WAWebSendAppStateSyncMsgJob",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = { collectionNames: e, timestamp: o("WATimeUtils").unixTimeMs() },
        n = o("WAWebOutgoingPeerMsgKey").buildOutgoingPeerMsgKey(
          await r("WAWebMsgKey").newId(),
        ),
        a = {
          id: n,
          to: o("WAWebUserUtils").getMyPrimaryForOutgoingPeerMessage(),
          type: "protocol",
          subtype: "app_state_fatal_exception_notification",
          kind: o("WAWebMsgType").MsgKind.PeerMessage,
          appStateFatalExceptionNotification: t,
        };
      return (
        await o("WAWebApiPeerMessageStore").storePeerMessages([a]),
        o("WAWebSendAppStateSyncMsgJob").encryptAndSendKeyMsg({ msg: a })
      );
    }
    l.sendAppStateFatalExceptionNotification = e;
  },
  98,
);
