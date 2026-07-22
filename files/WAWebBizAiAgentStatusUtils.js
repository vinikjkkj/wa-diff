__d(
  "WAWebBizAiAgentStatusUtils",
  [
    "fbt",
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
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "Your AI Agent");
    }
    function u() {
      var e;
      return (
        ((e = o(
          "WAWebBusinessProfileCollection",
        ).BusinessProfileCollection.getMeBusinessProfile()) == null
          ? void 0
          : e.isBizBot1p) === !0
      );
    }
    function c(e) {
      var t,
        n = o("WAWebContactGetters").getIsMe(e.contact),
        r = o("WAWebContactGetters").getIsAiHub(e.contact),
        a =
          ((t = e.contact.businessProfile) == null ? void 0 : t.isBizBot1p) ===
          !0;
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() &&
        !n &&
        e.id.isUserNotPSA() &&
        u() &&
        !r &&
        (!a || d(e))
      );
    }
    function d(e) {
      return (
        e.capiThreadControl ===
        o("WAWebProtobufsE2E.pb")
          .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
          .CONTROL_TAKEN
      );
    }
    function m(e) {
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
    function p(e) {
      return (
        d(e) &&
        !e.forceDismissAiAgentBlockBar &&
        !o("WAWebContactGetters").getIsAiHub(e.contact)
      );
    }
    function _(e) {
      return d(e);
    }
    function f(e) {
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
            !h(o("WAWebFrontendChatGetters").getPreviewMessage(e))
          ? "handoff"
          : null;
    }
    function g(e) {
      return (
        f(e) != null && o("WAWebBizAiAgentGating").isAiRespondingChipEnabled()
      );
    }
    function h(e) {
      return e == null || e.bizBotType === o("WAWebBotTypes").BizBotType.BIZ_1P
        ? !1
        : e.id.fromMe === !0;
    }
    function y(e) {
      return o("WAWebListsGatingUtils").isListsChatListRowPillEnabled()
        ? C(e)
        : !1;
    }
    function C(e) {
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
    function b(e, t) {
      return (
        t === void 0 && (t = !1),
        t &&
        o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(
          e.groupMetadata,
        )
          ? !1
          : g(e) || y(e)
      );
    }
    ((l.getAiHubSubtitle = e),
      (l.hasOnboardedAiAgent = u),
      (l.isChatEligibleForAiAgent = c),
      (l.isChatAiEnabled = d),
      (l.useIsChatAiEnabled = m),
      (l.shouldShowAiAgentBlockBar = p),
      (l.shouldMuteNotification = _),
      (l.resolveAiChatStatus = f),
      (l.shouldShowAiChipsForChat = g),
      (l.hasBusinessRepliedAfterHandoff = h),
      (l.shouldShowLabelPillsForChat = y),
      (l.hasDisplayableLabels = C),
      (l.shouldShowTertiaryRowForChat = b));
  },
  226,
);
