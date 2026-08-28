__d(
  "AdsPreFlightHVSGuidanceUtils",
  ["AdCampaignDestination", "AdsAPIObjectives", "AdsPromotedObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = r("AdCampaignDestination")).MESSENGER,
        e.INSTAGRAM_DIRECT,
        e.WHATSAPP,
        e.MESSAGING_INSTAGRAM_DIRECT_MESSENGER,
        e.MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP,
        e.MESSAGING_INSTAGRAM_DIRECT_WHATSAPP,
        e.MESSAGING_MESSENGER_WHATSAPP,
      ];
    function u(e) {
      return e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT;
    }
    function c(e) {
      return e === r("AdsAPIObjectives").OUTCOME_LEADS;
    }
    function d(e, t) {
      var n = !1;
      return (
        ((e === r("AdsAPIObjectives").OUTCOME_LEADS &&
          !(
            t === r("AdsPromotedObjectTypes").ON_AD ||
            t === r("AdsPromotedObjectTypes").LEAD_FORM_MESSENGER
          )) ||
          (e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
            (t == null || !s.includes(t)))) &&
          (n = !0),
        n
      );
    }
    function m(e, t) {
      return (
        e != null &&
        t != null &&
        e !== t &&
        (u(t) || (e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT && c(t)))
      );
    }
    ((l.SUPPORTED_DESTINATION_TYPES = s),
      (l.isHVSCTXGuidance = u),
      (l.isHVSLeadsGuidance = c),
      (l.shouldShowHVSConversionLocationGuidanceCard = d),
      (l.shouldShowHVSObjectiveGuidanceCard = m));
  },
  98,
);
