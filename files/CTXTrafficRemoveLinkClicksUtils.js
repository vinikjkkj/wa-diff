__d(
  "CTXTrafficRemoveLinkClicksUtils",
  [
    "AdsAPIObjectives",
    "AdsPromotedObjectTypes",
    "AdsUEditorMessagingDestinationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === r("AdsPromotedObjectTypes").MESSENGER ||
        e === r("AdsPromotedObjectTypes").WHATSAPP ||
        e === r("AdsPromotedObjectTypes").INSTAGRAM_DIRECT
      );
    }
    function s(t, n, a) {
      return (
        (o("AdsUEditorMessagingDestinationUtils").isClickToMessageAdDestination(
          t,
        ) ||
          e(a)) &&
        n === r("AdsAPIObjectives").LINK_CLICKS
      );
    }
    function u(e, t) {
      return (t === void 0 && (t = ""), !0);
    }
    ((l.isCTXTrafficEligible = s), (l.shouldRemoveLinkClicksOptimization = u));
  },
  98,
);
