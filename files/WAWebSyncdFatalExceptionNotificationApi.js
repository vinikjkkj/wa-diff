__d(
  "WAWebSyncdFatalExceptionNotificationApi",
  [
    "WATimeUtils",
    "WAWebApiPeerMessageStore",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOutgoingPeerMsgKey",
    "WAWebSendAppStateSyncMsgJob",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = {
              collectionNames: e,
              timestamp: o("WATimeUtils").unixTimeMs(),
            },
            n = o("WAWebOutgoingPeerMsgKey").buildOutgoingPeerMsgKey(
              yield r("WAWebMsgKey").newId(),
            ),
            a = {
              id: n,
              to: o(
                "WAWebUserPrefsMeUser",
              ).getMyPrimaryForOutgoingPeerMessage(),
              type: "protocol",
              subtype: "app_state_fatal_exception_notification",
              kind: o("WAWebMsgType").MsgKind.PeerMessage,
              appStateFatalExceptionNotification: t,
            };
          return (
            yield o("WAWebApiPeerMessageStore").storePeerMessages([a]),
            o("WAWebSendAppStateSyncMsgJob").encryptAndSendKeyMsg({ msg: a })
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendAppStateFatalExceptionNotification = e;
  },
  98,
);
