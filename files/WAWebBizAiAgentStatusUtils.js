__d(
  "WAWebBizAiAgentStatusUtils",
  [
    "WAWebBizAiAgentGating",
    "WAWebBusinessProfileCollection",
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebMobilePlatforms",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        t = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
          e,
        );
      return (t == null ? void 0 : t.isBizBot1p) === !0;
    }
    function s(t) {
      var n = o("WAWebContactGetters").getIsMe(t.contact),
        r = o("WAWebContactGetters").getIsAiHub(t.contact);
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() &&
        !n &&
        t.id.isUserNotPSA() &&
        e() &&
        !r
      );
    }
    function u(e) {
      return (
        e.capiThreadControl ===
        o("WAWebProtobufsE2E.pb")
          .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
          .CONTROL_TAKEN
      );
    }
    function c(e) {
      var t = o("useWAWebChatValues").useChatValues(e, [
          o("WAWebChatGetters").getCapiThreadControl,
        ]),
        n = t[0];
      return (
        n ===
        o("WAWebProtobufsE2E.pb")
          .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
          .CONTROL_TAKEN
      );
    }
    function d(e) {
      return u(e) && !e.forceDismissAiAgentBlockBar;
    }
    function m(e) {
      return u(e);
    }
    ((l.hasOnboardedAiAgent = e),
      (l.isChatEligibleForAiAgent = s),
      (l.isChatAiEnabled = u),
      (l.useIsChatAiEnabled = c),
      (l.shouldShowAiAgentBlockBar = d),
      (l.shouldMuteNotification = m));
  },
  98,
);
