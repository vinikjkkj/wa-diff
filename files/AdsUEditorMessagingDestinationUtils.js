__d(
  "AdsUEditorMessagingDestinationUtils",
  [
    "invariant",
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCampaignRecordAccessors",
    "AdsMetadataConnectedSourcesUtils",
    "AdsPromotedObjectTypes",
    "AdsWhatsAppFeatureGating",
    "ClickToMessageDestinationTypes",
    "ODS",
    "adsTargetingLocationEpdAreLocationsEU",
    "isTruthy",
    "qex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = new Set(["WHATSAPP_MESSAGE", "INSTAGRAM_MESSAGE", "MESSAGE_PAGE"]);
    function m(e) {
      return e != null && d.has(e);
    }
    function p(e) {
      return (
        e != null &&
        o("ClickToMessageDestinationTypes").MESSAGING_APP_DESTINATION_TYPES.has(
          e,
        )
      );
    }
    function _(e) {
      return (
        e == null ||
        e === r("AdCampaignDestination").UNDEFINED ||
        e === r("AdCampaignDestination").WEBSITE
      );
    }
    function f(e) {
      return (
        e === r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP ||
        e === r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_MESSENGER ||
        e === r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP ||
        e ===
          r("AdCampaignDestination")
            .MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP
      );
    }
    function g(e) {
      return (
        e === r("AdCampaignDestination").MESSENGER ||
        e === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
        e === r("AdCampaignDestination").WHATSAPP
      );
    }
    function h(e) {
      return (
        f(e) &&
        e !== r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP
      );
    }
    function y(e) {
      return (
        f(e) &&
        e !== r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_MESSENGER
      );
    }
    function C(e) {
      return y(e) || e === r("AdCampaignDestination").WHATSAPP;
    }
    function b(e) {
      return (
        f(e) && e !== r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP
      );
    }
    function v(e) {
      return (
        e === r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP ||
        e ===
          r("AdCampaignDestination")
            .MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP
      );
    }
    function S(e) {
      return (
        b(e) ||
        e === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
        e === r("AdCampaignDestination").LEAD_FROM_IG_DIRECT
      );
    }
    function R(e) {
      return (
        h(e) ||
        e === r("AdCampaignDestination").MESSENGER ||
        e === r("AdCampaignDestination").WEBSITE_AND_MESSAGES
      );
    }
    function L(e) {
      return (
        e === r("AdCampaignDestination").WHATSAPP ||
        e === r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP
      );
    }
    function E(e) {
      return (
        e === r("AdCampaignDestination").MESSENGER ||
        e === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
        e === r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_MESSENGER
      );
    }
    function k(e) {
      return (
        e === r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_MESSENGER
      );
    }
    var I = {
      MSGR: (c = r("AdCampaignDestination")).MESSENGER,
      WA: c.WHATSAPP,
      IGD: c.INSTAGRAM_DIRECT,
      "MSGR+WA": c.MESSAGING_MESSENGER_WHATSAPP,
      "MSGR+IGD": c.MESSAGING_INSTAGRAM_DIRECT_MESSENGER,
      "WA+IGD": c.MESSAGING_INSTAGRAM_DIRECT_WHATSAPP,
      "MSGR+WA+IGD": c.MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP,
    };
    function T(e, t, n) {
      var o,
        a = [e ? "MSGR" : null, t ? "WA" : null, n ? "IGD" : null]
          .filter(Boolean)
          .join("+");
      return (o = I[a]) != null ? o : r("AdCampaignDestination").MESSENGER;
    }
    var D = new Map([
      [c.INSTAGRAM_DIRECT, c.MESSAGING_INSTAGRAM_DIRECT_WHATSAPP],
      [
        c.MESSAGING_INSTAGRAM_DIRECT_MESSENGER,
        c.MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP,
      ],
      [c.MESSENGER, c.MESSAGING_MESSENGER_WHATSAPP],
    ]);
    function x(e) {
      var t;
      return e == null || !p(e) ? null : (t = D.get(e)) != null ? t : e;
    }
    function $(e, t) {
      return (
        t === void 0 && (t = !1),
        (e === r("AdCampaignDestination").WHATSAPP ||
          e ===
            r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP) &&
          !t
      );
    }
    function P(e, t, n) {
      var r = R(e) || n === "MESSAGE_PAGE";
      if (t.length > 0) {
        var a = t[0],
          i = a.campaign,
          l = a.campaignGroup;
        r = o(
          "AdsMetadataConnectedSourcesUtils",
        ).isCTMAdByCampaignGroupAndCampaign(i, l);
      }
      return r;
    }
    var N = function (t) {
        return t === r("AdCampaignDestination").MESSENGER;
      },
      M = function (t) {
        return t === r("AdCampaignDestination").WHATSAPP;
      },
      w = function (t) {
        return t === r("AdCampaignDestination").INSTAGRAM_DIRECT;
      },
      A = function (t) {
        return (
          t === r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_MESSENGER
        );
      },
      F = function (t) {
        return N(t) || h(t);
      },
      O = function (t) {
        return t === r("AdCampaignDestination").ON_AD;
      };
    function B(e) {
      return R(e)
        ? ["MESSENGER"]
        : C(e)
          ? ["WHATSAPP"]
          : e === r("AdCampaignDestination").INSTAGRAM_DIRECT || b(e)
            ? ["INSTAGRAM_DIRECT"]
            : [];
    }
    function W(e) {
      return e === r("AdCampaignDestination").WHATSAPP || !C(e);
    }
    function q(e) {
      switch (e) {
        case r("AdCampaignDestination").WHATSAPP:
        case r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP:
          return r("AdsPromotedObjectTypes").WHATSAPP;
        case r("AdCampaignDestination").INSTAGRAM_DIRECT:
          return r("AdsPromotedObjectTypes").INSTAGRAM;
        case r("AdCampaignDestination").LEAD_FROM_IG_DIRECT:
          return r("AdsPromotedObjectTypes").LEAD_FROM_IG_DIRECT;
        case r("AdCampaignDestination").MESSENGER:
        case r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP:
        case r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_MESSENGER:
        case r("AdCampaignDestination")
          .MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP:
          return r("AdsPromotedObjectTypes").MESSENGER;
        default:
          s(0, 42080);
      }
    }
    var U =
      ((e = {}),
      (e.INSTAGRAM_MESSAGE = c.INSTAGRAM_DIRECT),
      (e.MESSAGE_PAGE = c.MESSENGER),
      (e.WHATSAPP_MESSAGE = c.WHATSAPP),
      e);
    function V(e, t) {
      if (r("isTruthy")(t) && t !== r("AdCampaignDestination").UNDEFINED)
        return t;
      if (e != null) {
        var n = U[e];
        if (n != null) return n;
      }
      return t != null ? t : null;
    }
    function H(e) {
      if (
        ((u || (u = o("ODS"))).bumpEntityKey(
          1967,
          "ctwa",
          "eu_dcmo_should_bypass_check_entered",
        ),
        y(e))
      )
        return !o("AdsWhatsAppFeatureGating").isCtwaMdDcmoEnabled(e, !1);
      var t = M(e) && !r("qex")._("4675");
      return (
        u.bumpEntityKey(
          1967,
          "ctwa",
          t
            ? "eu_dcmo_bypassed_switch_to_link_click"
            : "eu_dcmo_did_not_bypass_switch_to_link_click",
        ),
        t
      );
    }
    function G(e, t) {
      var n = t.campaignID,
        a = t.objectiveMap,
        i = t.previouslySelectedLocations,
        l = t.selectedLocations,
        s = e;
      if (
        o("adsTargetingLocationEpdAreLocationsEU").adsTargetingLocationEpdOrTba(
          l,
        ) &&
        y(e.destination_type) &&
        e.optimization_goal === r("AdsAPIOptimizationGoals").CONVERSATIONS &&
        o("AdsWhatsAppFeatureGating").isCtwaMdDcmoEnabled(
          e.destination_type,
          !1,
        )
      )
        return s;
      var u =
          o(
            "adsTargetingLocationEpdAreLocationsEU",
          ).adsTargetingLocationEpdOrTba(l) &&
          C(e.destination_type) &&
          e.optimization_goal === r("AdsAPIOptimizationGoals").CONVERSATIONS,
        c =
          !o(
            "adsTargetingLocationEpdAreLocationsEU",
          ).adsTargetingLocationEpdOrTba(l) &&
          o(
            "adsTargetingLocationEpdAreLocationsEU",
          ).adsTargetingLocationEpdOrTba(i) &&
          p(e.destination_type),
        d = a.get(n, r("AdsAPIObjectives").NONE),
        m =
          d === r("AdsAPIObjectives").LINK_CLICKS ||
          d === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
          d === r("AdsAPIObjectives").OUTCOME_SALES ||
          d === r("AdsAPIObjectives").OUTCOME_LEADS ||
          d === r("AdsAPIObjectives").OUTCOME_AWARENESS;
      return (
        u && m && H(e.destination_type)
          ? (s = r("AdsCampaignRecordAccessors").optimization_goal.set(
              r("AdsAPIOptimizationGoals").LINK_CLICKS,
              e,
            ))
          : c &&
            (a.get(n, r("AdsAPIObjectives").NONE) ===
              r("AdsAPIObjectives").LINK_CLICKS ||
              a.get(n, r("AdsAPIObjectives").NONE) ===
                r("AdsAPIObjectives").OUTCOME_ENGAGEMENT) &&
            (s = r("AdsCampaignRecordAccessors").optimization_goal.set(
              r("AdsAPIOptimizationGoals").CONVERSATIONS,
              e,
            )),
        s
      );
    }
    ((l.isCTXCTAType = m),
      (l.isClickToMessageAdDestination = p),
      (l.isWebsiteAdDestination = _),
      (l.isMultiDestination = f),
      (l.isSingleDestination = g),
      (l.isMultiDestinationWithMessenger = h),
      (l.isMultiDestinationWithWhatsApp = y),
      (l.destinationIncludesWhatsApp = C),
      (l.isMultiDestinationWithInstagram = b),
      (l.isMultiDestinationWithMessengerAndWhatsApp = v),
      (l.destinationIncludesInstagram = S),
      (l.destinationIncludesMessenger = R),
      (l.isWhatsAppOrWhatsAppAndIGComboDestination = L),
      (l.isMessengerOrInstagramOrComboDestination = E),
      (l.isMultiDestinationWithMessengerAndInstagram = k),
      (l.getDestinationTypeForCheckboxStatus = T),
      (l.getNewDestinationTypeWithWhatsAppDestination = x),
      (l.shouldAddWhatsAppCTAField = $),
      (l.isCTMAd = P),
      (l.isCTM = N),
      (l.isWA = M),
      (l.isIGDirect = w),
      (l.isMessengerAndIGDirect = A),
      (l.isGenAINudgeEligibleDestination = F),
      (l.isOnAd = O),
      (l.getAppDestinationsFromCampaignDestination = B),
      (l.shouldRenderAdvancedSetup = W),
      (l.getPromotedObjectTypeForDestination = q),
      (l.getDestinationForCallToActionType = V),
      (l.shouldSwitchToLinkClicksForEPDTargeting = H),
      (l.mayBeUpdateCampaignOptimizationGoalForCTXTargetingEPD = G));
  },
  98,
);
