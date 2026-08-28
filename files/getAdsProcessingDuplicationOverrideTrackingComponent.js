__d(
  "getAdsProcessingDuplicationOverrideTrackingComponent",
  ["AdsCrepePerformanceUtils", "adsDuplicationShouldOpenBulkEditAfterCopy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o(
        "AdsCrepePerformanceUtils",
      ).getDuplicateCreationPackageComponent(e);
      return n != null
        ? n
        : r("adsDuplicationShouldOpenBulkEditAfterCopy")(t, { silent: !0 })
          ? "am.editor.bulk_edit_modal"
          : null;
    }
    l.getAdsProcessingDuplicationOverrideTrackingComponent = e;
  },
  98,
);
