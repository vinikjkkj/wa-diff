__d(
  "WAWebAddBotTransparencyNotice",
  [
    "WAWebBotSystemMsg",
    "WAWebHandleSingleMsgFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
            "WAWebBotSystemMsg",
          ).genBotSessionTransparencyNoticeSystemMsg(e, t);
          yield o("WAWebHandleSingleMsgFactory").handleSingleMsg({
            chatId: e,
            newMsg: n,
            handleSingleMsgOrigin: "limitSharing",
          });
        })),
        s.apply(this, arguments)
      );
    }
    l.addBotSessionTransparencyNotice = e;
  },
  98,
);
