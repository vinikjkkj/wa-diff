__d(
  "AdsEditFieldLabels",
  [
    "AdsEditAdFieldLabels",
    "AdsEditAdSetFieldLabels",
    "AdsEditCampaignFieldLabels",
    "AdsEditCreativeFieldLabels",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
      {},
      o("AdsEditAdFieldLabels").FIELD_LABELS,
      o("AdsEditCreativeFieldLabels").FIELD_LABELS,
      o("AdsEditCampaignFieldLabels").FIELD_LABELS,
      o("AdsEditAdSetFieldLabels").FIELD_LABELS,
    );
    function s(e) {
      return e
        .split("_")
        .map(function (e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        })
        .join(" ");
    }
    function u(t) {
      var n;
      return (n = e[t]) != null ? n : s(t);
    }
    l.getFieldLabel = u;
  },
  98,
);
