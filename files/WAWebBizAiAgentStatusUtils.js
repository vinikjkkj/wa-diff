__d(
  "WAWebBizAiAgentStatusUtils",
  [
    "fbt",
    "WAWebBizAiAgentGating",
    "WAWebBizAiHandoffRemoval",
    "WAWebBusinessProfileCollection",
    "WAWebChatGetters",
    "WAWebCommunityGatingUtils",
    "WAWebContactGetters",
    "WAWebLabelCollection",
    "WAWebListsGatingUtils",
    "WAWebListsLabelGatingUtils",
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
      var e;
      return (
        ((e = o(
          "WAWebBusinessProfileCollection",
        ).BusinessProfileCollection.getMeBusinessProfile()) == null
          ? void 0
          : e.isBizBot1p) === !0
      );
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
        (!a || _(e))
      );
    }
    function _(e) {
      return (
        e.capiThreadControl ===
        o("WAWebProtobufsE2E.pb")
          .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
          .CONTROL_TAKEN
      );
    }
    function f(e) {
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
    function g(e) {
      return (
        _(e) &&
        !e.forceDismissAiAgentBlockBar &&
        !o("WAWebContactGetters").getIsAiHub(e.contact)
      );
    }
    function h(e) {
      return _(e);
    }
    function y(e) {
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
            o("WAWebBizAiHandoffRemoval").isHandoffChatRetained(e)
          ? "handoff"
          : null;
    }
    function C(e) {
      return (
        y(e) != null && o("WAWebBizAiAgentGating").isAiRespondingChipEnabled()
      );
    }
    function b(e) {
      return o("WAWebListsGatingUtils").isListsChatListRowPillEnabled()
        ? v(e)
        : !1;
    }
    function v(e) {
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
    function S(e, t) {
      return (
        t === void 0 && (t = !1),
        t &&
        o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(
          e.groupMetadata,
        )
          ? !1
          : C(e) || b(e)
      );
    }
    ((l.getAiHubSubtitle = e),
      (l.hasOnboardedAiAgent = u),
      (l.useObserveAiAgentOnboarding = m),
      (l.isChatEligibleForAiAgent = p),
      (l.isChatAiEnabled = _),
      (l.useIsChatAiEnabled = f),
      (l.shouldShowAiAgentBlockBar = g),
      (l.shouldMuteNotification = h),
      (l.resolveAiChatStatus = y),
      (l.shouldShowAiChipsForChat = C),
      (l.shouldShowLabelPillsForChat = b),
      (l.hasDisplayableLabels = v),
      (l.shouldShowTertiaryRowForChat = S));
  },
  226,
);
