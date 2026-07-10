__d(
  "WAWebBizAiAgentStatusUtils",
  [
    "WAWebBizAiAgentGating",
    "WAWebBotTypes",
    "WAWebBusinessProfileCollection",
    "WAWebChatGetters",
    "WAWebCommunityGatingUtils",
    "WAWebContactGetters",
    "WAWebFrontendChatGetters",
    "WAWebLabelCollection",
    "WAWebListsGatingUtils",
    "WAWebListsLabelGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebProtobufsE2E.pb",
    "react-compiler-runtime",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e;
      return (
        ((e = o(
          "WAWebBusinessProfileCollection",
        ).BusinessProfileCollection.getMeBusinessProfile()) == null
          ? void 0
          : e.isBizBot1p) === !0
      );
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
      return (
        u(e) &&
        !e.forceDismissAiAgentBlockBar &&
        !o("WAWebContactGetters").getIsAiHub(e.contact)
      );
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
        return null;
      var t = e.capiThreadControl;
      return t ===
        o("WAWebProtobufsE2E.pb")
          .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
          .CONTROL_TAKEN
        ? "responding"
        : t ===
              o("WAWebProtobufsE2E.pb")
                .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                .CONTROL_PASSED &&
            e.isAiHandoff === !0 &&
            !f(o("WAWebFrontendChatGetters").getPreviewMessage(e))
          ? "handoff"
          : null;
    }
    function _(e) {
      return (
        p(e) != null && o("WAWebBizAiAgentGating").isAiRespondingChipEnabled()
      );
    }
    function f(e) {
      return e == null || e.bizBotType === o("WAWebBotTypes").BizBotType.BIZ_1P
        ? !1
        : e.id.fromMe === !0;
    }
    function g(e) {
      return o("WAWebListsGatingUtils").isListsChatListRowPillEnabled()
        ? h(e)
        : !1;
    }
    function h(e) {
      var t = e.labels;
      return t == null ||
        t.length === 0 ||
        !(
          o("WAWebListsLabelGatingUtils").canDisplayLabel() ||
          o("WAWebListsGatingUtils").isListsEnabled()
        )
        ? !1
        : t.some(function (e) {
            var t = o("WAWebLabelCollection").LabelCollection.get(e);
            return t != null && !!t.name;
          });
    }
    function y(e, t) {
      return (
        t === void 0 && (t = !1),
        t &&
        o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(
          e.groupMetadata,
        )
          ? !1
          : _(e) || g(e)
      );
    }
    ((l.hasOnboardedAiAgent = e),
      (l.isChatEligibleForAiAgent = s),
      (l.isChatAiEnabled = u),
      (l.useIsChatAiEnabled = c),
      (l.shouldShowAiAgentBlockBar = d),
      (l.shouldMuteNotification = m),
      (l.resolveAiChatStatus = p),
      (l.shouldShowAiChipsForChat = _),
      (l.hasBusinessRepliedAfterHandoff = f),
      (l.shouldShowLabelPillsForChat = g),
      (l.hasDisplayableLabels = h),
      (l.shouldShowTertiaryRowForChat = y));
  },
  98,
);
