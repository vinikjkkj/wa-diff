__d(
  "BrandSafetyCampaignPDREnableQueryParameters",
  ["ImmutableRecordWithV4Types", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("ImmutableRecordWithV4Types").Record({
        adAccountID: "",
        campaignGroupIds: r("immutable").Set([]),
        campaignIds: r("immutable").Set([]),
        objectLevel: null,
        startDate: "",
        endDate: "",
      }),
      s = function (n) {
        var t = n.adAccountID,
          r = n.campaignGroupIds,
          o = n.campaignIds,
          a = n.endDate,
          i = n.objectLevel,
          l = n.startDate;
        return e({
          adAccountID: t,
          campaignGroupIds: r,
          campaignIds: o,
          objectLevel: i,
          startDate: l,
          endDate: a,
        });
      };
    l.createBrandSafetyCampaignPDREnableQueryParameters = s;
  },
  98,
);
