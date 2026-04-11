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
    function s(t) {
      return (
        e() &&
        !o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabled(t) &&
        !o("WAWebChatGetters").getIsNewsletter(t) &&
        !o("WAWebChatGetters").getIsPSA(t)
      );
    }
    function u() {
      return o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete();
    }
    ((l.isExportChatEnabled = e),
      (l.canExportChat = s),
      (l.isExportChatHistorySyncReady = u));
  },
  98,
);
