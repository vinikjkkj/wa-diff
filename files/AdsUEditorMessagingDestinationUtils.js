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
    "ClickToMessageAdDestinationUtils",
    "ODS",
    "adsTargetingLocationEpdAreLocationsEU",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p = new Set(["WHATSAPP_MESSAGE", "INSTAGRAM_MESSAGE", "MESSAGE_PAGE"]);
    function _(e) {
      return e != null && p.has(e);
    }
    function f(e) {
      return (
        e == null ||
        e === r("AdCampaignDestination").UNDEFINED ||
        e === r("AdCampaignDestination").WEBSITE
      );
    }
    var g = new Set([
      (c = r("AdCampaignDestination")).MESSENGER,
      c.INSTAGRAM_DIRECT,
      c.WHATSAPP,
    ]);
    function h(e) {
      return g.has(e);
    }
    function y(e) {
      return (
        o("ClickToMessageAdDestinationUtils").isMultiDestination(e) &&
        e !== r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP
      );
    }
    function C(e) {
      return (
        o("ClickToMessageAdDestinationUtils").isMultiDestination(e) &&
        e !== r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_MESSENGER
      );
    }
    function b(e) {
      return C(e) || e === r("AdCampaignDestination").WHATSAPP;
    }
    function v(e) {
      return (
        o("ClickToMessageAdDestinationUtils").isMultiDestination(e) &&
        e !== r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP
      );
    }
    function S(e) {
      return (
        e === r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP ||
        e ===
          r("AdCampaignDestination")
            .MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP
      );
    }
    function R(e) {
      return (
        v(e) ||
        e === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
        e === r("AdCampaignDestination").LEAD_FROM_IG_DIRECT
      );
    }
    function L(e) {
      return (
        y(e) ||
        e === r("AdCampaignDestination").MESSENGER ||
        e === r("AdCampaignDestination").WEBSITE_AND_MESSAGES
      );
    }
    function E(e, t) {
      return (
        t === "MESSAGE_PAGE" &&
        !o("ClickToMessageAdDestinationUtils").isClickToMessageAdDestination(e)
      );
    }
    function k(e) {
      return (
        e === r("AdCampaignDestination").WHATSAPP ||
        e === r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP
      );
    }
    function I(e) {
      return (
        e === r("AdCampaignDestination").MESSENGER ||
        e === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
        e === r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_MESSENGER
      );
    }
    function T(e) {
      return (
        e === r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_MESSENGER
      );
    }
    var D = {
      MSGR: c.MESSENGER,
      WA: c.WHATSAPP,
      IGD: c.INSTAGRAM_DIRECT,
      "MSGR+WA": c.MESSAGING_MESSENGER_WHATSAPP,
      "MSGR+IGD": c.MESSAGING_INSTAGRAM_DIRECT_MESSENGER,
      "WA+IGD": c.MESSAGING_INSTAGRAM_DIRECT_WHATSAPP,
      "MSGR+WA+IGD": c.MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP,
    };
    function x(e, t, n) {
      var o,
        a = [e ? "MSGR" : null, t ? "WA" : null, n ? "IGD" : null]
          .filter(Boolean)
          .join("+");
      return (o = D[a]) != null ? o : r("AdCampaignDestination").MESSENGER;
    }
    var $ = new Map([
      [c.INSTAGRAM_DIRECT, c.MESSAGING_INSTAGRAM_DIRECT_WHATSAPP],
      [
        c.MESSAGING_INSTAGRAM_DIRECT_MESSENGER,
        c.MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP,
      ],
      [c.MESSENGER, c.MESSAGING_MESSENGER_WHATSAPP],
    ]);
    function P(e) {
      var t;
      return e == null ||
        !o("ClickToMessageAdDestinationUtils").isClickToMessageAdDestination(e)
        ? null
        : (t = $.get(e)) != null
          ? t
          : e;
    }
    function N(e, t) {
      return (
        t === void 0 && (t = !1),
        (e === r("AdCampaignDestination").WHATSAPP ||
          e ===
            r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP) &&
          !t
      );
    }
    function M(e, t, n) {
      var r = L(e) || n === "MESSAGE_PAGE";
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
    var w = function (t) {
        return t === r("AdCampaignDestination").MESSENGER;
      },
      A = function (t) {
        return t === r("AdCampaignDestination").WHATSAPP;
      },
      F = function (t) {
        return t === r("AdCampaignDestination").INSTAGRAM_DIRECT;
      },
      O = function (t) {
        return (
          t === r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_MESSENGER
        );
      },
      B = function (t) {
        return w(t) || O(t);
      },
      W = function (t) {
        return t === r("AdCampaignDestination").ON_AD;
      };
    function q(e) {
      return L(e)
        ? ["MESSENGER"]
        : b(e)
          ? ["WHATSAPP"]
          : e === r("AdCampaignDestination").INSTAGRAM_DIRECT || v(e)
            ? ["INSTAGRAM_DIRECT"]
            : [];
    }
    function U(e) {
      return e === r("AdCampaignDestination").WHATSAPP || !b(e);
    }
    var V = new Map([
      [c.WHATSAPP, (m = r("AdsPromotedObjectTypes")).WHATSAPP],
      [c.MESSAGING_INSTAGRAM_DIRECT_WHATSAPP, m.WHATSAPP],
      [c.INSTAGRAM_DIRECT, m.INSTAGRAM],
      [c.LEAD_FROM_IG_DIRECT, m.LEAD_FROM_IG_DIRECT],
      [c.MESSENGER, m.MESSENGER],
      [c.MESSAGING_MESSENGER_WHATSAPP, m.MESSENGER],
      [c.MESSAGING_INSTAGRAM_DIRECT_MESSENGER, m.MESSENGER],
      [c.MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP, m.MESSENGER],
    ]);
    function H(e) {
      var t = V.get(e);
      return (t != null || s(0, 42080), t);
    }
    var G =
      ((e = {}),
      (e.INSTAGRAM_MESSAGE = c.INSTAGRAM_DIRECT),
      (e.MESSAGE_PAGE = c.MESSENGER),
      (e.WHATSAPP_MESSAGE = c.WHATSAPP),
      e);
    function z(e, t) {
      if (r("isTruthy")(t) && t !== r("AdCampaignDestination").UNDEFINED)
        return t;
      if (e != null) {
        var n = G[e];
        if (n != null) return n;
      }
      return t != null ? t : null;
    }
    function j(e) {
      return (
        (u || (u = o("ODS"))).bumpEntityKey(
          1967,
          "ctwa",
          "eu_dcmo_should_bypass_check_entered",
        ),
        C(e)
          ? !o("AdsWhatsAppFeatureGating").isCtwaMdDcmoEnabled(e, !1)
          : (u.bumpEntityKey(
              1967,
              "ctwa",
              "eu_dcmo_did_not_bypass_switch_to_link_click",
            ),
            !1)
      );
    }
    var K = new Set([
      (d = r("AdsAPIObjectives")).LINK_CLICKS,
      d.OUTCOME_ENGAGEMENT,
      d.OUTCOME_SALES,
      d.OUTCOME_LEADS,
      d.OUTCOME_AWARENESS,
    ]);
    function Q(e, t) {
      var n = t.campaignID,
        a = t.objectiveMap,
        i = t.previouslySelectedLocations,
        l = t.selectedLocations,
        s = e;
      if (
        o("adsTargetingLocationEpdAreLocationsEU").adsTargetingLocationEpdOrTba(
          l,
        ) &&
        C(e.destination_type) &&
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
          b(e.destination_type) &&
          e.optimization_goal === r("AdsAPIOptimizationGoals").CONVERSATIONS,
        c =
          !o(
            "adsTargetingLocationEpdAreLocationsEU",
          ).adsTargetingLocationEpdOrTba(l) &&
          o(
            "adsTargetingLocationEpdAreLocationsEU",
          ).adsTargetingLocationEpdOrTba(i) &&
          o("ClickToMessageAdDestinationUtils").isClickToMessageAdDestination(
            e.destination_type,
          ),
        d = a.get(n, r("AdsAPIObjectives").NONE),
        m = K.has(d);
      return (
        u && m && j(e.destination_type)
          ? (s = r("AdsCampaignRecordAccessors").optimization_goal.set(
              r("AdsAPIOptimizationGoals").LINK_CLICKS,
              e,
            ))
          : c &&
            (d === r("AdsAPIObjectives").LINK_CLICKS ||
              d === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT) &&
            (s = r("AdsCampaignRecordAccessors").optimization_goal.set(
              r("AdsAPIOptimizationGoals").CONVERSATIONS,
              e,
            )),
        s
      );
    }
    ((l.isClickToMessageAdDestination = o(
      "ClickToMessageAdDestinationUtils",
    ).isClickToMessageAdDestination),
      (l.isMultiDestination = o(
        "ClickToMessageAdDestinationUtils",
      ).isMultiDestination),
      (l.isCTXCTAType = _),
      (l.isWebsiteAdDestination = f),
      (l.isSingleDestination = h),
      (l.isMultiDestinationWithMessenger = y),
      (l.isMultiDestinationWithWhatsApp = C),
      (l.destinationIncludesWhatsApp = b),
      (l.isMultiDestinationWithInstagram = v),
      (l.isMultiDestinationWithMessengerAndWhatsApp = S),
      (l.destinationIncludesInstagram = R),
      (l.destinationIncludesMessenger = L),
      (l.isMessagePageCTAOnNonMessagingDestination = E),
      (l.isWhatsAppOrWhatsAppAndIGComboDestination = k),
      (l.isMessengerOrInstagramOrComboDestination = I),
      (l.isMultiDestinationWithMessengerAndInstagram = T),
      (l.getDestinationTypeForCheckboxStatus = x),
      (l.getNewDestinationTypeWithWhatsAppDestination = P),
      (l.shouldAddWhatsAppCTAField = N),
      (l.isCTMAd = M),
      (l.isCTM = w),
      (l.isWA = A),
      (l.isIGDirect = F),
      (l.isMessengerAndIGDirect = O),
      (l.isGenAINudgeEligibleDestination = B),
      (l.isOnAd = W),
      (l.getAppDestinationsFromCampaignDestination = q),
      (l.shouldRenderAdvancedSetup = U),
      (l.getPromotedObjectTypeForDestination = H),
      (l.getDestinationForCallToActionType = z),
      (l.shouldSwitchToLinkClicksForEPDTargeting = j),
      (l.mayBeUpdateCampaignOptimizationGoalForCTXTargetingEPD = Q));
  },
  98,
);
