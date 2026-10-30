__d(
  "WAWebCallUserJourneyCallStartBlocked",
  [
    "WAWebCallUserJourneyLogger",
    "WAWebVoipCallFromUiStore",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Map([
        [
          (e = o("WAWebWamEnumCallFromUi")).CALL_FROM_UI.CALLS_TAB_MISSED,
          (s = o("WAWebWamEnumTsSurface")).TS_SURFACE.CALLS_HOME_TAB,
        ],
        [e.CALL_FROM_UI.CALLS_TAB_OUTGOING, s.TS_SURFACE.CALLS_HOME_TAB],
        [e.CALL_FROM_UI.CALLS_TAB_INCOMING, s.TS_SURFACE.CALLS_HOME_TAB],
        [e.CALL_FROM_UI.CALLS_TAB_NEW_CALL, s.TS_SURFACE.CALLS_HOME_TAB],
        [e.CALL_FROM_UI.CALLS_TAB_PLUS_BUTTON, s.TS_SURFACE.CALLS_HOME_TAB],
        [e.CALL_FROM_UI.CALL_LOG_SEARCH, s.TS_SURFACE.CALLS_HOME_TAB],
        [e.CALL_FROM_UI.FAVORITES, s.TS_SURFACE.CALLS_HOME_TAB],
        [e.CALL_FROM_UI.DIALER_CONTACT, s.TS_SURFACE.CALLS_HOME_TAB],
        [e.CALL_FROM_UI.DIALER_NON_CONTACT, s.TS_SURFACE.CALLS_HOME_TAB],
        [e.CALL_FROM_UI.CALL_INFO, s.TS_SURFACE.CALL_INFO_PAGE],
        [e.CALL_FROM_UI.GROUP_CALL_INFO, s.TS_SURFACE.CALL_INFO_PAGE],
        [e.CALL_FROM_UI.CALL_INFO_1X1, s.TS_SURFACE.CALL_INFO_PAGE],
        [e.CALL_FROM_UI.CALL_INFO_AHGC, s.TS_SURFACE.CALL_INFO_PAGE],
        [e.CALL_FROM_UI.CALL_INFO_LGC, s.TS_SURFACE.CALL_INFO_PAGE],
        [e.CALL_FROM_UI.CALL_INFO_CALL_LINK, s.TS_SURFACE.CALL_INFO_PAGE],
        [e.CALL_FROM_UI.CONVERSATION, s.TS_SURFACE.CHAT_THREAD],
        [e.CALL_FROM_UI.CALL_LOG_MESSAGE_MISSED, s.TS_SURFACE.CHAT_THREAD],
        [e.CALL_FROM_UI.CALL_LOG_MESSAGE_ENDED, s.TS_SURFACE.CHAT_THREAD],
        [e.CALL_FROM_UI.CALL_LOG_MESSAGE_FAILED, s.TS_SURFACE.CHAT_THREAD],
        [e.CALL_FROM_UI.GROUP_CHAT_DIRECT, s.TS_SURFACE.CHAT_THREAD],
        [e.CALL_FROM_UI.GROUP_CHAT_PICKER, s.TS_SURFACE.CHAT_THREAD],
        [e.CALL_FROM_UI.LARGE_GROUP_CHAT_PICKER, s.TS_SURFACE.CHAT_THREAD],
        [e.CALL_FROM_UI.CHAT_LIST, s.TS_SURFACE.CHAT_LIST],
      ]);
    function c(e) {
      var t;
      o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.logOutOfCallAction({
        callActionType:
          e === "microphone"
            ? o("WAWebCallUserJourneyLogger").M2_OUT_OF_CALL_ACTION_TYPE
                .CALL_START_BLOCKED_BY_MIC_PERMISSION
            : o("WAWebCallUserJourneyLogger").M2_OUT_OF_CALL_ACTION_TYPE
                .CALL_START_BLOCKED_BY_CAMERA_PERMISSION,
        uiSurface:
          (t = u.get(o("WAWebVoipCallFromUiStore").getCallFromUi())) != null
            ? t
            : o("WAWebWamEnumTsSurface").TS_SURFACE.UNKNOWN,
      });
    }
    l.default = c;
  },
  98,
);
