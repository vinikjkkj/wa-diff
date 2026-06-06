__d(
  "WAWebDBKeepInChatAddOnProvider",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebMessageAddOnType",
    "WAWebMsgDataFromModel",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        type: o("WAWebMessageAddOnType").MessageAddOnType.KeepInChat,
        matches: function (t) {
          return t.type === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT;
        },
        matchesFutureproof: function (t) {
          return (
            t.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
            t.futureproofType === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT
          );
        },
        canRenderInUi: function () {
          return !0;
        },
        processOrphansForNewMsg: async function (n, r) {
          var t = r.map(function (e) {
              return e.parsedMsgPayload;
            }),
            a = o("WAWebEphemeralKeepInChatUtils").runKeepInChatTieBreaker(t);
          if (
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "keepInChatAddOnProvider: found orphan",
                ])),
            ),
            a != null)
          ) {
            var i = o("WAWebMsgDataFromModel").msgDataFromMsgModel(a);
            await o("WAWebBackendApi").frontendSendAndReceive(
              "processKeepInChatMessage",
              { keepInChatMessage: i, allowNotification: !1 },
            );
          }
        },
      };
    l.keepInChatAddOnProvider = s;
  },
  98,
);
