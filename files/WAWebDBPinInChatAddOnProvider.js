__d(
  "WAWebDBPinInChatAddOnProvider",
  [
    "WAWebDBUpdateAddOnAcksForTable",
    "WAWebMessageAddOnType",
    "WAWebMsgType",
    "WAWebPinMessageProcessor",
    "WAWebPinMsgGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      type: o("WAWebMessageAddOnType").MessageAddOnType.PinMessage,
      matches: function (t) {
        return t.type === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE;
      },
      matchesFutureproof: function (t) {
        return (
          t.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
          t.futureproofType === o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE
        );
      },
      canRenderInUi: function () {
        return o("WAWebPinMsgGatingUtils").isPinnedMessagesM1ReceiverEnabled();
      },
      processOrphansForNewMsg: async function (t, n) {
        var e = n.map(function (e) {
          return e.parsedMsgPayload;
        });
        await o("WAWebPinMessageProcessor").processPinMessages(t.id.remote, e);
      },
      updateAcks: function (t, n) {
        return o("WAWebDBUpdateAddOnAcksForTable").updateAddOnAcksForTable(
          "pinned-messages",
          t,
          n,
        );
      },
    };
    l.pinInChatAddOnProvider = e;
  },
  98,
);
