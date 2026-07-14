__d(
  "WAWebTosGating",
  [
    "WAWebABProps",
    "WAWebABPropsInternalNumber",
    "WAWebBotGating",
    "WAWebBotTos",
    "WAWebBotUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebTos",
    "WAWebTosGatingUtils",
    "WaWebPDFNCommonUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (o("WAWebTosGatingUtils").tos3GatingEnabled()) {
        var t;
        if (
          o("WAWebTos").TosManager.getState(o("WAWebTos").TOS_3_ID) ===
            "NOT_ACCEPTED" &&
          ((t = e.privacyMode) == null ? void 0 : t.hostStorage) ===
            o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook &&
          !o("WAWebABPropsInternalNumber").getFbBrandedNumber(e.id.user)
        )
          return !0;
      }
      return !1;
    }
    function s(e) {
      return (!e.id.isBot() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_bot_tos_check_refiniement",
        )) ||
        o("WAWebBotTos").hasAcceptedNonBlockingBotTos() ||
        o("WaWebPDFNCommonUtils").hasAcceptedTos(
          String(o("WAWebBotGating").getMasterBotNoticeId()),
        ) ||
        o("WAWebBotUtils").isBotChannelFBID(e.id)
        ? !1
        : !!(
            (e.id.isPnBot() &&
              !o("WAWebBotTos").hasSeenAgentTos() &&
              !o("WAWebBotTos").hasSeenShortcutTos() &&
              !o("WAWebBotTos").hasSeenInvokeTos()) ||
            (e.id.isFbidBot() && !o("WAWebBotTos").hasSeenUgcTos())
          );
    }
    ((l.shouldBlockByTos = e), (l.shouldBlockByBotTos = s));
  },
  98,
);
