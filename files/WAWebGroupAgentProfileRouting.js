__d(
  "WAWebGroupAgentProfileRouting",
  [
    "$InternalEnum",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotProfileCollection",
    "WAWebBotStaticProfiles",
    "WAWebBotUtils",
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
      return (n === void 0 && (n = v(e)), c(e, t == null ? void 0 : t.id, n));
    }
    function c(e, t, n) {
      return (n === void 0 && (n = v(e)), R(e, t) ? S(e, n) : null);
    }
    function d(e, t) {
      return (t === void 0 && (t = v(e)), L(e) ? S(e, t) : null);
    }
    function m(e, t) {
      if (!R(e, t == null ? void 0 : t.id)) return !1;
      var n = v(e);
      return x(e, E(n), n == null ? void 0 : n.creatorLid);
    }
    function p(e) {
      if (!L(e)) return !1;
      var t = v(e);
      return t == null || t.isDeleted === !0 || t.isDeprecated === !0
        ? !1
        : x(e, E(t), t.creatorLid);
    }
    function _(e, t) {
      var n = o("WAWebBotProfileCollection").BotProfileCollection.get(e);
      if (
        (n == null ? void 0 : n.lastFetchedTimeMs) == null ||
        n.isDeleted === !0 ||
        n.isDeprecated === !0 ||
        !R(e, t == null ? void 0 : t.id)
      )
        return !1;
      var r = o("WAWebBotProduct").botProductFromServerValue(n.product);
      return r != null &&
        r !== o("WAWebBotProduct").BotProduct.THIRD_PARTY &&
        !T(e, r)
        ? !1
        : o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    function f(e, t, n) {
      return g(e, t == null ? void 0 : t.id, n);
    }
    function g(e, t, n) {
      return h(c(e, t), n);
    }
    function h(t, n) {
      return t == null ? null : { info: t === e.OWNER_CARD, remove: n };
    }
    function y(e) {
      return e.info || e.remove;
    }
    function C(e, t) {
      return b(e, t == null ? void 0 : t.id);
    }
    function b(t, n) {
      return (function (t) {
        if (t === e.OWNER_CARD) return s.HATCH_CHAT;
        if (t === e.BASIC_CARD) return s.NONE;
        if (t == null) return null;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })(c(t, n));
    }
    function v(e) {
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
    function S(t, n) {
      var r = E(n);
      return (r != null && !T(t, r)) ||
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? null
        : D(t, r, n == null ? void 0 : n.creatorLid)
          ? e.OWNER_CARD
          : e.BASIC_CARD;
    }
    function R(e, t) {
      return t == null ? !1 : t.isGroup() && L(e);
    }
    function L(e) {
      return e.isFbidBot() && !o("WAWebBotStaticProfiles").isStaticProfile(e);
    }
    function E(e) {
      return e == null || e.lastFetchedTimeMs == null
        ? null
        : o("WAWebBotProduct").botProductFromServerValue(e.product);
    }
    function k(e, t) {
      return o("WAWebBotProduct").isMuseAgentProduct(e, t);
    }
    function I(e, t, n) {
      return !o(
        "WAWebBotGroupGatingUtils",
      ).isStandardBotProfileGroupEnabled() ||
        !o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) ||
        o("WAWebBotStaticProfiles").isStaticProfile(e)
        ? !1
        : n == null || k(e, t);
    }
    function T(e, t) {
      return k(e, t);
    }
    function D(e, t, n) {
      return (
        x(e, t, n) && o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()
      );
    }
    function x(e, t, n) {
      var r = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      return (
        k(e, t) &&
        n != null &&
        r != null &&
        n === r.user &&
        o("WAWebBotGroupGatingUtils").isMuseGroupAgentRenderingEnabled()
      );
    }
    ((l.GroupAgentProfileDestination = e),
      (l.GroupAgentOneToOneTarget = s),
      (l.getGroupAgentProfileDestination = u),
      (l.getGroupAgentProfileDestinationFor = c),
      (l.getMuseAgentProfileDestinationOutsideGroup = d),
      (l.isViewerOwnMuseGroupAgent = m),
      (l.isViewerOwnLiveMuseAgent = p),
      (l.isOpenGroupAiAgent = _),
      (l.getGroupAgentParticipantActions = f),
      (l.getGroupAgentParticipantActionsFor = g),
      (l.getGroupAgentParticipantActionsForDestination = h),
      (l.hasGroupAgentParticipantAction = y),
      (l.getGroupAgentOneToOneTarget = C),
      (l.getGroupAgentOneToOneTargetFor = b),
      (l.isMuseGroupAgentProfileProduct = k),
      (l.isMuseGroupAgentProfileState = I));
  },
  98,
);
