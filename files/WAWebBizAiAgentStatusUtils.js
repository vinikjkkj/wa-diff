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
    "WAWebListsGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "react-compiler-runtime",
    "useWAWebChatValues",
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
    var c = ["change:automatedType", "change:dataSource"];
    function d(e) {
      try {
        return e();
      } catch (e) {
        return null;
      }
    }
    function m(e, t) {
      var n = e ? d(o("WAWebUserPrefsMeUser").getMaybeMeLidUser) : null,
        r = e ? d(o("WAWebUserPrefsMeUser").getMaybeMePnUser) : null;
      (o("useWAWebListener").useListener(
        n == null
          ? null
          : o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
              n,
            ),
        c,
        t,
      ),
        o("useWAWebListener").useListener(
          r == null
            ? null
            : o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
                r,
              ),
          c,
          t,
        ));
    }
    function p(e) {
      return (
        e.id.isRegularUser() &&
        !e.id.isIAS() &&
        !o("WAWebContactGetters").getIsMe(e.contact) &&
        !o("WAWebContactGetters").getIsAiHub(e.contact)
      );
    }
    function _(e) {
      return p(e) && !e.id.isSupportAccount() && !e.id.isCAPISupportAccount();
    }
    function f(e) {
      var t = e.contact.businessProfile,
        n = t != null && o("WAWebBusinessProfileGetters").getIsBizBot1p(t);
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() &&
        _(e) &&
        u() &&
        (!n || g(e))
      );
    }
    function g(e) {
      return (
        e.capiThreadControl ===
        o("WAWebProtobufsE2E.pb")
          .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
          .CONTROL_TAKEN
      );
    }
    function h(e) {
      return g(e) && p(e);
    }
    function y(e) {
      return f(e) || h(e);
    }
    function C(e) {
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
    function b(e) {
      return (
        g(e) &&
        !e.forceDismissAiAgentBlockBar &&
        !o("WAWebContactGetters").getIsAiHub(e.contact)
      );
    }
    function v(e) {
      var t,
        n = o("WAWebChatCollection").ChatCollection.get(e),
        r = C(e),
        a =
          (t = o("useWAWebChatValues").useOptionalChatValues(e, [
            o("WAWebFrontendChatGetters").getForceDismissAiAgentBlockBar,
          ])) != null
            ? t
            : [],
        i = a[0];
      return (
        r &&
        n != null &&
        i !== !0 &&
        !o("WAWebContactGetters").getIsAiHub(n.contact)
      );
    }
    function S(e) {
      return g(e);
    }
    function R(e) {
      if (!o("WAWebMobilePlatforms").isSMB() || (!_(e) && !h(e))) return null;
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
    function L(e) {
      return (
        R(e) != null && o("WAWebBizAiAgentGating").isAiRespondingChipEnabled()
      );
    }
    function E(e) {
      return o("WAWebListsGatingUtils").isListsChatListRowPillEnabled()
        ? k(e)
        : !1;
    }
    function k(e) {
      var t = e.labels;
      return t == null ||
        t.length === 0 ||
        !o("WAWebListsGatingUtils").isListsEnabled()
        ? !1
        : t.some(function (e) {
            var t = o("WAWebLabelCollection").LabelCollection.get(e);
            return t != null && !!t.name;
          });
    }
    function I(e, t) {
      return (
        t === void 0 && (t = !1),
        t &&
        o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(
          e.groupMetadata,
        )
          ? !1
          : L(e) || E(e)
      );
    }
    ((l.getAiHubSubtitle = e),
      (l.hasOnboardedAiAgent = u),
      (l.ONBOARDING_EVENTS = c),
      (l.useObserveAiAgentOnboarding = m),
      (l.isChatEligibleForAiAgent = f),
      (l.isChatAiEnabled = g),
      (l.canChangeAiReplyStatus = y),
      (l.useIsChatAiEnabled = C),
      (l.shouldShowAiAgentBlockBar = b),
      (l.useShouldShowAiAgentBlockBar = v),
      (l.shouldMuteNotification = S),
      (l.resolveAiChatStatus = R),
      (l.shouldShowAiChipsForChat = L),
      (l.shouldShowLabelPillsForChat = E),
      (l.hasDisplayableLabels = k),
      (l.shouldShowTertiaryRowForChat = I));
  },
  226,
);
