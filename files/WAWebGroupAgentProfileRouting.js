__d(
  "WAWebGroupAgentProfileRouting",
  [
    "$InternalEnum",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotProfileCollection",
    "WAWebBotStaticProfiles",
    "WAWebChatGetters",
    "WAWebHatchFrontendGating",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        BASIC_CARD: "basic_card",
        OWNER_CARD: "owner_card",
      }),
      s = n("$InternalEnum")({ HATCH_CHAT: "hatch_chat", NONE: "none" });
    function u(e, t, n) {
      return (n === void 0 && (n = h(e)), C(e, t) ? y(e, n) : null);
    }
    function c(e, t) {
      return (t === void 0 && (t = h(e)), b(e) ? y(e, t) : null);
    }
    function d(e, t) {
      if (!C(e, t)) return !1;
      var n = h(e);
      return E(e, v(n), n == null ? void 0 : n.creatorLid);
    }
    function m(e, t) {
      var n = o("WAWebBotProfileCollection").BotProfileCollection.get(e);
      if (
        (n == null ? void 0 : n.lastFetchedTimeMs) == null ||
        n.isDeleted === !0 ||
        n.isDeprecated === !0 ||
        !C(e, t)
      )
        return !1;
      var r = o("WAWebBotProduct").botProductFromServerValue(n.product);
      return r != null &&
        r !== o("WAWebBotProduct").BotProduct.THIRD_PARTY &&
        !R(e, r)
        ? !1
        : o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    function p(e, t, n) {
      return _(u(e, t), n);
    }
    function _(t, n) {
      return t == null ? null : { info: t === e.OWNER_CARD, remove: n };
    }
    function f(e) {
      return e.info || e.remove;
    }
    function g(t, n) {
      return (function (t) {
        if (t === e.OWNER_CARD) return s.HATCH_CHAT;
        if (t === e.BASIC_CARD) return s.NONE;
        if (t == null) return null;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })(u(t, n));
    }
    function h(e) {
      var t = o("WAWebBotProfileCollection").BotProfileCollection.get(e);
      return t == null
        ? null
        : {
            creatorLid: t.creatorLid,
            isDeleted: t.isDeleted,
            isDeprecated: t.isDeprecated,
            lastFetchedTimeMs: t.lastFetchedTimeMs,
            product: t.product,
          };
    }
    function y(t, n) {
      var r = v(n);
      return (r != null && !R(t, r)) ||
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? null
        : L(t, r, n == null ? void 0 : n.creatorLid)
          ? e.OWNER_CARD
          : e.BASIC_CARD;
    }
    function C(e, t) {
      return t == null ? !1 : o("WAWebChatGetters").getIsGroup(t) && b(e);
    }
    function b(e) {
      return e.isFbidBot() && !o("WAWebBotStaticProfiles").isStaticProfile(e);
    }
    function v(e) {
      return e == null || e.lastFetchedTimeMs == null
        ? null
        : o("WAWebBotProduct").botProductFromServerValue(e.product);
    }
    function S(e, t) {
      return o("WAWebBotProduct").isMuseAgentProduct(e, t);
    }
    function R(e, t) {
      return S(e, t);
    }
    function L(e, t, n) {
      return (
        E(e, t, n) && o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()
      );
    }
    function E(e, t, n) {
      var r = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      return (
        S(e, t) &&
        n != null &&
        r != null &&
        n === r.user &&
        o("WAWebBotGroupGatingUtils").isMuseGroupAgentRenderingEnabled()
      );
    }
    ((l.GroupAgentProfileDestination = e),
      (l.GroupAgentOneToOneTarget = s),
      (l.getGroupAgentProfileDestination = u),
      (l.getMuseAgentProfileDestinationOutsideGroup = c),
      (l.isViewerOwnMuseGroupAgent = d),
      (l.isOpenGroupAiAgent = m),
      (l.getGroupAgentParticipantActions = p),
      (l.getGroupAgentParticipantActionsForDestination = _),
      (l.hasGroupAgentParticipantAction = f),
      (l.getGroupAgentOneToOneTarget = g),
      (l.isMuseGroupAgentProfileProduct = S));
  },
  98,
);
