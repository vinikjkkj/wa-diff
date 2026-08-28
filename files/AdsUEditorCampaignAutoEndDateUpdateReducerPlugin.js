__d(
  "AdsUEditorCampaignAutoEndDateUpdateReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e;
          if (
            ((e = n.responses[0]) == null || (e = e.extraData) == null
              ? void 0
              : e.customEndDate) != null
          )
            return t;
          var r = n.fragments
              .filter(function (e) {
                var t = e.ad_object_type;
                return t === "ad_set";
              })
              .map(function (e) {
                var t = e.ad_object_id,
                  n = e.source_ad_object_id;
                return { campaignID: t, sourceCampaignID: n };
              }),
            o = new Map(t);
          return (
            r.forEach(function (e) {
              var t = e.campaignID,
                n = e.sourceCampaignID;
              n != null && o.set(t, n);
            }),
            o
          );
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
