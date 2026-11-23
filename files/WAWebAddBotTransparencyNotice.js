__d(
  "WAWebAddBotTransparencyNotice",
  ["WAWebBotSystemMsg", "WAWebHandleSingleMsgWorkerCompatible"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      var n = o("WAWebBotSystemMsg").genBotSessionTransparencyNoticeSystemMsg(
        e,
        t,
      );
      await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
        chatId: e,
        newMsg: n,
        handleSingleMsgOrigin: "limitSharing",
      });
    }
    l.addBotSessionTransparencyNotice = e;
  },
  98,
);
