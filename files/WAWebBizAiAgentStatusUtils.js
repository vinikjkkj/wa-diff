__d(
  "WAWebBizAiAgentStatusUtils",
  [
    "WAWebBizAiAgentGating",
    "WAWebBizGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebFrontendChatGetters",
    "WAWebLabelCollection",
    "WAWebListsGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(1),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [o("WAWebChatGetters").getCapiThreadControl]), (t[0] = n))
        : (n = t[0]);
      var r = o("useWAWebChatValues").useChatValues(e, n),
        a = r[0];
      return (
        a ===
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
    function p(e) {
      if (
        !o("WAWebMobilePlatforms").isSMB() ||
        !e.id.isUserNotPSA() ||
        o("WAWebContactGetters").getIsMe(e.contact) ||
        o("WAWebContactGetters").getIsAiHub(e.contact)
      )
        return !1;
      var t = e.capiThreadControl;
      if (
        t ===
        o("WAWebProtobufsE2E.pb")
          .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
          .CONTROL_TAKEN
      )
        return o("WAWebBizAiAgentGating").isAiRespondingChipEnabled();
      if (
        t ===
          o("WAWebProtobufsE2E.pb")
            .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
            .CONTROL_PASSED &&
        o("WAWebBizAiAgentGating").isAiHandoffListEnabled()
      ) {
        var n = o("WAWebFrontendChatGetters").getPreviewMessage(e);
        return (n == null ? void 0 : n.id.fromMe) !== !0;
      }
      return !1;
    }
    function _(e) {
      return o("WAWebListsGatingUtils").isListsChatListRowPillEnabled()
        ? f(e)
        : !1;
    }
    function f(e) {
      var t = e.labels;
      return t == null ||
        t.length === 0 ||
        !(
          o("WAWebBizGatingUtils").canDisplayLabel() ||
          o("WAWebListsGatingUtils").isListsEnabled()
        )
        ? !1
        : t.some(function (e) {
            var t = o("WAWebLabelCollection").LabelCollection.get(e);
            return t != null && !!t.name;
          });
    }
    function g(e) {
      return o("WAWebListsGatingUtils").isListsChatListRowPillEnabled()
        ? p(e) || _(e)
        : !1;
    }
    ((l.hasOnboardedAiAgent = e),
      (l.isChatEligibleForAiAgent = s),
      (l.isChatAiEnabled = u),
      (l.useIsChatAiEnabled = c),
      (l.shouldShowAiAgentBlockBar = d),
      (l.shouldMuteNotification = m),
      (l.shouldShowAiChipsForChat = p),
      (l.shouldShowLabelPillsForChat = _),
      (l.hasDisplayableLabels = f),
      (l.shouldShowTertiaryRowForChat = g));
  },
  98,
);
