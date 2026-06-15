__d(
  "WAWebExportChatGatingUtils",
  [
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebLimitSharingUIUtils",
    "WAWebUserPrefsHistorySync",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue("wa_web_export_chat");
    }
    function s(e) {
      return e.msgs.length > 0 || e.lastReceivedKey != null;
    }
    function u(t) {
      return (
        e() &&
        s(t) &&
        !o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabled(t) &&
        !o("WAWebChatGetters").getIsNewsletter(t) &&
        !o("WAWebChatGetters").getIsPSA(t)
      );
    }
    function c() {
      return o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete();
    }
    ((l.isExportChatEnabled = e),
      (l.chatHasExportableContent = s),
      (l.canExportChat = u),
      (l.isExportChatHistorySyncReady = c));
  },
  98,
);
