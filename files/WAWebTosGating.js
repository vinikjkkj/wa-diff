__d(
  "WAWebTosGating",
  [
    "WAWebABPropsInternalNumber",
    "WAWebBizGatingUtils",
    "WAWebBotGating",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebBotUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebTos",
    "WaWebPDFNCommonUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (o("WAWebBizGatingUtils").tos3GatingEnabled()) {
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
      return o("WAWebBotTos").hasAcceptedNonBlockingBotTos() ||
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
    function u() {
      return o("WAWebBotTos").hasSeenInvokeTos()
        ? !1
        : !o("WAWebBotTos").canShowBotTos(
            o("WAWebBotTosIds").getBotInvokeTosId(),
          );
    }
    ((l.shouldBlockByTos = e),
      (l.shouldBlockByBotTos = s),
      (l.shouldBlockBotInvokeAsTosNotAvailable = u));
  },
  98,
);
