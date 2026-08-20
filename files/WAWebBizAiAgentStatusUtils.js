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
    "WAWebLabelCollection",
    "WAWebListsGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebListener",
    "useWAWebModelValues",
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
      var t = o("WAWebContactGetters").getIsMe(e.contact),
        n = o("WAWebContactGetters").getIsAiHub(e.contact),
        r = e.contact.businessProfile,
        a = r != null && o("WAWebBusinessProfileGetters").getIsBizBot1p(r);
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() &&
        !t &&
        e.id.isUserNotPSA() &&
        u() &&
        !n &&
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
      var t,
        n = o("react-compiler-runtime").c(6),
        r;
      n[0] !== e
        ? ((r = o("WAWebChatCollection").ChatCollection.get(e)),
          (n[0] = e),
          (n[1] = r))
        : (r = n[1]);
      var a = r,
        i = f(e),
        l =
          (t = o("useWAWebModelValues").useOptionalModelValues(a, [
            "forceDismissAiAgentBlockBar",
          ])) != null
            ? t
            : {},
        s = l.forceDismissAiAgentBlockBar,
        u;
      return (
        n[2] !== a || n[3] !== s || n[4] !== i
          ? ((u =
              i &&
              a != null &&
              s !== !0 &&
              !o("WAWebContactGetters").getIsAiHub(a.contact)),
            (n[2] = a),
            (n[3] = s),
            (n[4] = i),
            (n[5] = u))
          : (u = n[5]),
        u
      );
    }
    function y(e) {
      return _(e);
    }
    function C(e) {
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
    function b(e) {
      return (
        C(e) != null && o("WAWebBizAiAgentGating").isAiRespondingChipEnabled()
      );
    }
    function v(e) {
      return o("WAWebListsGatingUtils").isListsChatListRowPillEnabled()
        ? S(e)
        : !1;
    }
    function S(e) {
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
    function R(e, t) {
      return (
        t === void 0 && (t = !1),
        t &&
        o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(
          e.groupMetadata,
        )
          ? !1
          : b(e) || v(e)
      );
    }
    ((l.getAiHubSubtitle = e),
      (l.hasOnboardedAiAgent = u),
      (l.useObserveAiAgentOnboarding = m),
      (l.isChatEligibleForAiAgent = p),
      (l.isChatAiEnabled = _),
      (l.useIsChatAiEnabled = f),
      (l.shouldShowAiAgentBlockBar = g),
      (l.useShouldShowAiAgentBlockBar = h),
      (l.shouldMuteNotification = y),
      (l.resolveAiChatStatus = C),
      (l.shouldShowAiChipsForChat = b),
      (l.shouldShowLabelPillsForChat = v),
      (l.hasDisplayableLabels = S),
      (l.shouldShowTertiaryRowForChat = R));
  },
  226,
);
