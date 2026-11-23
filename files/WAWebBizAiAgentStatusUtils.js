__d(
  "WAWebBizAiAgentStatusUtils",
  [
    "fbt",
    "WAWebBizAiAgentGating",
    "WAWebBizAiHandoffRemoval",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileGetters",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatListPillUtils",
    "WAWebCommunityGatingUtils",
    "WAWebContactGetters",
    "WAWebFrontendChatGetters",
    "WAWebLabelCollection",
    "WAWebListsGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebProtobufsE2E.pb",
    "WAWebUserUtils",
    "useWAWebChatValues",
    "useWAWebEventTargetValue",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "");
    }
    function u() {
      var e = o(
        "WAWebBusinessProfileCollection",
      ).BusinessProfileCollection.getMeBusinessProfile();
      return e == null || e.dataSource === "placeholder"
        ? null
        : o("WAWebBusinessProfileGetters").getIsBizBot1p(e);
    }
    function c() {
      var e = o(
        "WAWebBusinessProfileCollection",
      ).BusinessProfileCollection.getMeBusinessProfile();
      return e != null && o("WAWebBusinessProfileGetters").getIsBizBot1p(e);
    }
    var d = ["change:automatedType", "change:dataSource"],
      m = ["add"].concat(d);
    function p(e) {
      return r("useWAWebEventTargetValue")(
        e
          ? o("WAWebBusinessProfileCollection").BusinessProfileCollection
          : null,
        m,
        function () {
          return e && c();
        },
        [e],
      );
    }
    function _(e, t) {
      o("useWAWebListener").useListener(
        e
          ? o("WAWebBusinessProfileCollection").BusinessProfileCollection
          : null,
        m,
        function (e) {
          o("WAWebUserUtils").isMeAccount(e.id) && t();
        },
      );
    }
    function f(e) {
      return g(e.id, e.contact);
    }
    function g(e, t) {
      return (
        e.isRegularUser() &&
        !e.isIAS() &&
        !o("WAWebContactGetters").getIsMe(t) &&
        !o("WAWebContactGetters").getIsAiHub(t)
      );
    }
    function h(e) {
      return y(e.id, e.contact);
    }
    function y(e, t) {
      return g(e, t) && !e.isSupportAccount() && !e.isCAPISupportAccount();
    }
    function C(e, t) {
      return b(e.id, e.contact, t);
    }
    function b(e, t, n) {
      var r;
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() &&
        y(e, t) &&
        ((r = n == null ? void 0 : n.hasOnboardedAiAgent) != null ? r : c()) &&
        !v(t, n)
      );
    }
    function v(e, t) {
      if (t != null)
        return S(
          t.recipientRunsAiAgent,
          t.recipientIsEnterprise,
          t.recipientIsHosted,
        );
      var n = e.businessProfile;
      return S(
        n != null && o("WAWebBusinessProfileGetters").getIsBizBot1p(n),
        o("WAWebContactGetters").getIsEnterprise(e),
        o("WAWebContactGetters").getIsHosted(e),
      );
    }
    function S(e, t, n) {
      return e || (t && n !== !0);
    }
    function R(e) {
      return (
        e.capiThreadControl ===
        o("WAWebProtobufsE2E.pb")
          .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
          .CONTROL_TAKEN
      );
    }
    function L(e) {
      return R(e) && f(e);
    }
    function E(e) {
      return k({
        capiThreadControl: e.capiThreadControl,
        chatId: e.id,
        contact: e.contact,
      });
    }
    function k(e) {
      var t = e.capiThreadControl,
        n = e.chatId,
        r = e.contact;
      return (
        b(n, r) ||
        (t ===
          o("WAWebProtobufsE2E.pb")
            .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
            .CONTROL_TAKEN &&
          g(n, r))
      );
    }
    function I(e) {
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
    function T(e) {
      return x(e, R(e), e.forceDismissAiAgentBlockBar);
    }
    function D(e) {
      var t,
        n = o("WAWebChatCollection").ChatCollection.get(e),
        r = I(e),
        a =
          (t = o("useWAWebChatValues").useOptionalChatValues(e, [
            o("WAWebFrontendChatGetters").getForceDismissAiAgentBlockBar,
          ])) != null
            ? t
            : [],
        i = a[0];
      return n != null && x(n, r, i);
    }
    function x(e, t, n) {
      return t && f(e) && n !== !0;
    }
    function $(e) {
      return R(e);
    }
    function P(e) {
      if (!o("WAWebMobilePlatforms").isSMB() || (!h(e) && !L(e))) return null;
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
            o("WAWebBizAiHandoffRemoval").isHandoffChatRetained(e)
          ? "handoff"
          : null;
    }
    function N(e) {
      return P(e) != null && o("WAWebBizAiAgentGating").isAiListsWebUIEnabled();
    }
    function M(e) {
      return o("WAWebListsGatingUtils").isListsChatListRowPillEnabled()
        ? w(e)
        : !1;
    }
    function w(e) {
      var t = e.labels;
      if (t == null || t.length === 0) return !1;
      var n = o("WAWebBizAiAgentGating").isAiListsWebUIEnabled();
      return t.some(function (e) {
        var t = o("WAWebLabelCollection").LabelCollection.get(e);
        return (
          t != null &&
          !!t.name &&
          o("WAWebChatListPillUtils").isPillEligibleListType(t.type, n)
        );
      });
    }
    function A(e, t) {
      return (
        t === void 0 && (t = !1),
        t &&
        o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(
          e.groupMetadata,
        )
          ? !1
          : N(e) || M(e)
      );
    }
    ((l.getAiHubSubtitle = e),
      (l.getAiAgentOnboardingState = u),
      (l.hasOnboardedAiAgent = c),
      (l.ONBOARDING_EVENTS = d),
      (l.useHasOnboardedAiAgent = p),
      (l.useObserveAiAgentOnboarding = _),
      (l.isChatEligibleForAiAgent = C),
      (l.isChatAiEnabled = R),
      (l.canChangeAiReplyStatus = E),
      (l.canChangeAiReplyStatusFor = k),
      (l.useIsChatAiEnabled = I),
      (l.shouldShowAiAgentBlockBar = T),
      (l.useShouldShowAiAgentBlockBar = D),
      (l.shouldMuteNotification = $),
      (l.resolveAiChatStatus = P),
      (l.shouldShowAiChipsForChat = N),
      (l.shouldShowLabelPillsForChat = M),
      (l.hasDisplayableLabels = w),
      (l.shouldShowTertiaryRowForChat = A));
  },
  226,
);
