__d(
  "WAWebExportChatGatingUtils",
  [
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebLimitSharingUIUtils",
    "WAWebProductFeature",
    "WAWebUserPrefsHistorySync",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        !o("WAWebProductFeature").isInternalProduct() &&
        o("WAWebABProps").getABPropConfigValue("wa_web_export_chat")
      );
    }
    function s(e) {
      return u({
        acp2Setting: e.acp2Setting,
        chatId: e.id,
        hasLoadedMsgs: e.msgs.length > 0,
        isNewsletter: o("WAWebChatGetters").getIsNewsletter(e),
        isPSA: o("WAWebChatGetters").getIsPSA(e),
        lastReceivedKey: e.lastReceivedKey,
        limitSharing: e.limitSharing,
      });
    }
    function u(t) {
      var n = t.acp2Setting,
        r = t.chatId,
        a = t.hasLoadedMsgs,
        i = t.isNewsletter,
        l = t.isPSA,
        s = t.lastReceivedKey,
        u = t.limitSharing;
      return (
        e() &&
        (a || s != null) &&
        !o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabledFor({
          acp2Setting: n,
          chatId: r,
          limitSharing: u,
        }) &&
        !i &&
        !l
      );
    }
    function c() {
      return o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete();
    }
    ((l.isExportChatEnabled = e),
      (l.canExportChat = s),
      (l.canExportChatFor = u),
      (l.isExportChatHistorySyncReady = c));
  },
  98,
);
