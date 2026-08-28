__d(
  "AudienceLabelsGKUtils",
  ["gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("11004");
    }
    function s() {
      return r("gkx")("25365");
    }
    function u() {
      return r("qex")._("1589") === !0;
    }
    function c() {
      return r("gkx")("1420") || u();
    }
    function d() {
      return s() ? r("gkx")("9270") || u() : !1;
    }
    function m() {
      return r("gkx")("255") || u();
    }
    function p() {
      return r("gkx")("19004");
    }
    ((l.isAudienceLabelsTaxonomyExpansionGKEnabled = e),
      (l.isAudienceLabelsAdoptionGKEnabled = s),
      (l.isNCALabelsExclusionQEEnabled = u),
      (l.isL2CustomAudienceLabelingGKEnabled = c),
      (l.isL2CustomAudienceLabelSelectionGKEnabled = d),
      (l.isLabelingConfirmationModalCLSGKEnabled = m),
      (l.isAudienceLabelsVARBetaGKEnabled = p));
  },
  98,
);
