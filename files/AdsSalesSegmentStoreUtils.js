__d(
  "AdsSalesSegmentStoreUtils",
  ["AdsAPlusCFastTrackV2Utils", "AdsAccountStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e,
        t =
          (e = r("AdsAccountStore").getSelectedAccount().getValue()) == null
            ? void 0
            : e.sales_segment_v2;
      return (
        o("AdsAPlusCFastTrackV2Utils").isGBGUnmanagedSegment(t) ||
        o("AdsAPlusCFastTrackV2Utils").isGBGScaleSegment(t) ||
        o("AdsAPlusCFastTrackV2Utils").isGBGInMarketSegment(t)
      );
    }
    function s() {
      var e;
      return o("AdsAPlusCFastTrackV2Utils").isSBGSegment(
        (e = r("AdsAccountStore").getSelectedAccount().getValue()) == null
          ? void 0
          : e.sales_segment_v2,
      );
    }
    ((l.isSelectedAdAccountGBG = e), (l.isSelectedAdAccountSBG = s));
  },
  98,
);
