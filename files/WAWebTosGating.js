__d(
  "WAWebTosGating",
  [
    "WAWebABProps",
    "WAWebABPropsInternalNumber",
    "WAWebBotGating",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebBotUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebPDFNCommonUtils",
    "WAWebTos",
    "WAWebTosGatingUtils",
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
      if (
        (!e.id.isBot() &&
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_bot_tos_check_refiniement",
          )) ||
        o("WAWebBotTos").hasAcceptedNonBlockingBotTos() ||
        o("WAWebPDFNCommonUtils").hasAcceptedTos(
          String(o("WAWebBotGating").getMasterBotNoticeId()),
        )
      )
        return !1;
      var t = o("WAWebBotTosIds").getBusinessAssistantLegacyNoticeId();
      return (t != null &&
        o("WAWebPDFNCommonUtils").hasAcceptedTos(String(t))) ||
        o("WAWebBotUtils").isBotChannelFBID(e.id)
        ? !1
        : !!(
            e.id.isPnBot() &&
            !o("WAWebBotTos").hasSeenAgentTos() &&
            !o("WAWebBotTos").hasSeenShortcutTos() &&
            !o("WAWebBotTos").hasSeenInvokeTos()
          );
    }
    ((l.shouldBlockByTos = e), (l.shouldBlockByBotTos = s));
  },
  98,
);
