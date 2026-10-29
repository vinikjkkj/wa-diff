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
    "WAWebUserPrefsMeUser",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebEventTargetValue",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "Your AI Agent");
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
      "use no forget";
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
      "use no forget";
      o("useWAWebListener").useListener(
        e
          ? o("WAWebBusinessProfileCollection").BusinessProfileCollection
          : null,
        m,
        function (e) {
          o("WAWebUserPrefsMeUser").isMeAccount(e.id) && t();
        },
      );
    }
    function f(e) {
      return (
        e.id.isRegularUser() &&
        !e.id.isIAS() &&
        !o("WAWebContactGetters").getIsMe(e.contact) &&
        !o("WAWebContactGetters").getIsAiHub(e.contact)
      );
    }
    function g(e) {
      return f(e) && !e.id.isSupportAccount() && !e.id.isCAPISupportAccount();
    }
    function h(e, t) {
      var n;
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() &&
        g(e) &&
        ((n = t == null ? void 0 : t.hasOnboardedAiAgent) != null ? n : c()) &&
        !y(e, t)
      );
    }
    function y(e, t) {
      if (t != null)
        return C(
          t.recipientRunsAiAgent,
          t.recipientIsEnterprise,
          t.recipientIsHosted,
        );
      var n = e.contact,
        r = n.businessProfile;
      return C(
        r != null && o("WAWebBusinessProfileGetters").getIsBizBot1p(r),
        o("WAWebContactGetters").getIsEnterprise(n),
        o("WAWebContactGetters").getIsHosted(n),
      );
    }
    function C(e, t, n) {
      return e || (t && n !== !0);
    }
    function b(e) {
      return (
        e.capiThreadControl ===
        o("WAWebProtobufsE2E.pb")
          .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
          .CONTROL_TAKEN
      );
    }
    function v(e) {
      return b(e) && f(e);
    }
    function S(e) {
      return h(e) || v(e);
    }
    function R(e) {
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
    function L(e) {
      return k(e, b(e), e.forceDismissAiAgentBlockBar);
    }
    function E(e) {
      var t,
        n = o("WAWebChatCollection").ChatCollection.get(e),
        r = R(e),
        a =
          (t = o("useWAWebChatValues").useOptionalChatValues(e, [
            o("WAWebFrontendChatGetters").getForceDismissAiAgentBlockBar,
          ])) != null
            ? t
            : [],
        i = a[0];
      return n != null && k(n, r, i);
    }
    function k(e, t, n) {
      return t && f(e) && n !== !0;
    }
    function I(e) {
      return b(e);
    }
    function T(e) {
      if (!o("WAWebMobilePlatforms").isSMB() || (!g(e) && !v(e))) return null;
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
    function D(e) {
      return T(e) != null && o("WAWebBizAiAgentGating").isAiListsWebUIEnabled();
    }
    function x(e) {
      return o("WAWebListsGatingUtils").isListsChatListRowPillEnabled()
        ? $(e)
        : !1;
    }
    function $(e) {
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
    function P(e, t) {
      return (
        t === void 0 && (t = !1),
        t &&
        o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(
          e.groupMetadata,
        )
          ? !1
          : D(e) || x(e)
      );
    }
    ((l.getAiHubSubtitle = e),
      (l.getAiAgentOnboardingState = u),
      (l.hasOnboardedAiAgent = c),
      (l.ONBOARDING_EVENTS = d),
      (l.useHasOnboardedAiAgent = p),
      (l.useObserveAiAgentOnboarding = _),
      (l.isChatEligibleForAiAgent = h),
      (l.isChatAiEnabled = b),
      (l.canChangeAiReplyStatus = S),
      (l.useIsChatAiEnabled = R),
      (l.shouldShowAiAgentBlockBar = L),
      (l.useShouldShowAiAgentBlockBar = E),
      (l.shouldMuteNotification = I),
      (l.resolveAiChatStatus = T),
      (l.shouldShowAiChipsForChat = D),
      (l.shouldShowLabelPillsForChat = x),
      (l.hasDisplayableLabels = $),
      (l.shouldShowTertiaryRowForChat = P));
  },
  226,
);
