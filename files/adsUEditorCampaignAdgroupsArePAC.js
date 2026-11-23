__d(
  "adsUEditorCampaignAdgroupsArePAC",
  [
    "AdsAssetFeedUtils",
    "adsCreateSelector",
    "adsUEditorAdgroupsForSelectedCampaignsSelector_SLOW",
    "adsUEditorSelectedCampaignIDsSelector",
    "firstx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAdgroupsForSelectedCampaignsSelector_SLOW"),
          r("adsUEditorSelectedCampaignIDsSelector"),
        ],
        function (t, n) {
          return t.match({
            loaded: function (t) {
              var e = {};
              return (
                t.forEach(function (t) {
                  if (t) {
                    var a = t.adset_id || r("firstx")(n),
                      i = e[a];
                    e[a] =
                      i || o("AdsAssetFeedUtils").isPACAdgroupFromRecord(t);
                  }
                }),
                Object.values(e)
              );
            },
            error: function () {
              return [];
            },
            loading: function () {
              return [];
            },
          });
        },
        { name: i.id + ".adsUEditorCampaignAdgroupsArePAC" },
      ),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          return (
            t.some(function (e) {
              return e;
            }) &&
            t.some(function (e) {
              return !e;
            })
          );
        },
        { name: i.id + ".adsUEditorCampaignsAreMixedPAC" },
      );
    l.adsUEditorCampaignsAreMixedPAC = s;
  },
  98,
);
