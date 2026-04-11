__d(
  "WAWebSyncdFatalExceptionNotificationApi",
  [
    "WATimeUtils",
    "WAWebApiPeerMessageStore",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendAppStateSyncMsgJob",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
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
            n = new (r("WAWebMsgKey"))({
              fromMe: !0,
              remote: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              id: yield r("WAWebMsgKey").newId(),
            }),
            a = {
              id: n,
              to: o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE()
                  .user,
                o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE()
                  .server,
                0,
              ),
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
