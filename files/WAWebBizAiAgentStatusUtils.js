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
    "WAWebCommunityGatingUtils",
    "WAWebContactGetters",
    "WAWebFrontendChatGetters",
    "WAWebLabelCollection",
    "WAWebListUtils",
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
      return e != null && o("WAWebBusinessProfileGetters").getIsBizBot1p(e);
    }
    var c = ["change:automatedType", "change:dataSource"],
      d = ["add"].concat(c);
    function m(e) {
      "use no forget";
      return r("useWAWebEventTargetValue")(
        e
          ? o("WAWebBusinessProfileCollection").BusinessProfileCollection
          : null,
        d,
        function () {
          return e && u();
        },
        [e],
      );
    }
    function p(e, t) {
      "use no forget";
      o("useWAWebListener").useListener(
        e
          ? o("WAWebBusinessProfileCollection").BusinessProfileCollection
          : null,
        d,
        function (e) {
          o("WAWebUserPrefsMeUser").isMeAccount(e.id) && t();
        },
      );
    }
    function _(e) {
      return (
        e.id.isRegularUser() &&
        !e.id.isIAS() &&
        !o("WAWebContactGetters").getIsMe(e.contact) &&
        !o("WAWebContactGetters").getIsAiHub(e.contact)
      );
    }
    function f(e) {
      return _(e) && !e.id.isSupportAccount() && !e.id.isCAPISupportAccount();
    }
    function g(e, t) {
      var n;
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() &&
        f(e) &&
        ((n = t == null ? void 0 : t.hasOnboardedAiAgent) != null ? n : u()) &&
        !h(e, t)
      );
    }
    function h(e, t) {
      if (t != null)
        return y(
          t.recipientRunsAiAgent,
          t.recipientIsEnterprise,
          t.recipientIsHosted,
        );
      var n = e.contact,
        r = n.businessProfile;
      return y(
        r != null && o("WAWebBusinessProfileGetters").getIsBizBot1p(r),
        o("WAWebContactGetters").getIsEnterprise(n),
        o("WAWebContactGetters").getIsHosted(n),
      );
    }
    function y(e, t, n) {
      return e || (t && n !== !0);
    }
    function C(e) {
      return (
        e.capiThreadControl ===
        o("WAWebProtobufsE2E.pb")
          .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
          .CONTROL_TAKEN
      );
    }
    function b(e) {
      return C(e) && _(e);
    }
    function v(e) {
      return g(e) || b(e);
    }
    function S(e) {
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
    function R(e) {
      return E(e, C(e), e.forceDismissAiAgentBlockBar);
    }
    function L(e) {
      var t,
        n = o("WAWebChatCollection").ChatCollection.get(e),
        r = S(e),
        a =
          (t = o("useWAWebChatValues").useOptionalChatValues(e, [
            o("WAWebFrontendChatGetters").getForceDismissAiAgentBlockBar,
          ])) != null
            ? t
            : [],
        i = a[0];
      return n != null && E(n, r, i);
    }
    function E(e, t, n) {
      return t && _(e) && n !== !0;
    }
    function k(e) {
      return C(e);
    }
    function I(e) {
      if (!o("WAWebMobilePlatforms").isSMB() || (!f(e) && !b(e))) return null;
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
    function T(e) {
      return I(e) != null && o("WAWebBizAiAgentGating").isAiListsWebUIEnabled();
    }
    function D(e) {
      return o("WAWebListsGatingUtils").isListsChatListRowPillEnabled()
        ? x(e)
        : !1;
    }
    function x(e) {
      var t = e.labels;
      return t == null ||
        t.length === 0 ||
        !o("WAWebListsGatingUtils").isListsEnabled()
        ? !1
        : t.some(function (e) {
            var t = o("WAWebLabelCollection").LabelCollection.get(e);
            return (
              t != null &&
              !!t.name &&
              (!o("WAWebListUtils").isAiList(t.type) ||
                o("WAWebBizAiAgentGating").isAiListsWebUIEnabled())
            );
          });
    }
    function $(e, t) {
      return (
        t === void 0 && (t = !1),
        t &&
        o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(
          e.groupMetadata,
        )
          ? !1
          : T(e) || D(e)
      );
    }
    ((l.getAiHubSubtitle = e),
      (l.hasOnboardedAiAgent = u),
      (l.ONBOARDING_EVENTS = c),
      (l.useHasOnboardedAiAgent = m),
      (l.useObserveAiAgentOnboarding = p),
      (l.isChatEligibleForAiAgent = g),
      (l.isChatAiEnabled = C),
      (l.canChangeAiReplyStatus = v),
      (l.useIsChatAiEnabled = S),
      (l.shouldShowAiAgentBlockBar = R),
      (l.useShouldShowAiAgentBlockBar = L),
      (l.shouldMuteNotification = k),
      (l.resolveAiChatStatus = I),
      (l.shouldShowAiChipsForChat = T),
      (l.shouldShowLabelPillsForChat = D),
      (l.hasDisplayableLabels = x),
      (l.shouldShowTertiaryRowForChat = $));
  },
  226,
);
