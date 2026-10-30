__d(
  "WAWebHatchCvmReadOnlyCanSend",
  [
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebHatchCvmReadOnlyState",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      (o("WAWebHatchCvmReadOnlyState").subscribeToHatchCvmReadOnly(s), s());
    }
    function s() {
      var e = o("WAWebChatCollection").ChatCollection.get(
        o("WAWebBotUtils").HATCH_BOT_FBID_WID,
      );
      e != null && o("WAWebChatGroupUtils").updateCanSend(e);
    }
    l.watchHatchCvmReadOnlyCanSend = e;
  },
  98,
);
