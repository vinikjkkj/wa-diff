__d(
  "WAWebDBPinInChatAddOnProvider",
  [
    "WAWebDBUpdateAddOnAcksForTable",
    "WAWebMessageAddOnType",
    "WAWebMsgType",
    "WAWebPinMessageProcessor",
    "WAWebPinMsgGatingUtils",
    "asyncToGeneratorRuntime",
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
      processOrphansForNewMsg: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.map(function (e) {
            return e.parsedMsgPayload;
          });
          yield o("WAWebPinMessageProcessor").processPinMessages(
            e.id.remote,
            n,
          );
        });
        function t(t, n) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
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
