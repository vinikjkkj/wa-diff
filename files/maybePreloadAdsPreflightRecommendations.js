__d(
  "maybePreloadAdsPreflightRecommendations",
  ["AdsAdObjectUtils", "ifRequireable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      r("ifRequireable")("preloadAdsPreflightRecommendations", function (n) {
        var a = new Set(
          e
            .filter(function (e) {
              var t = e.ad_object_type;
              return t === "campaign";
            })
            .map(function (e) {
              var t = e.ad_object_id;
              return t;
            }),
        );
        if (a.size === 0) {
          var i = new Set(
              e
                .filter(function (e) {
                  var t = e.ad_object_type;
                  return t === "ad";
                })
                .map(function (e) {
                  var t = e.ad_object_id;
                  return t;
                }),
            ),
            l = new Set(
              e
                .filter(function (e) {
                  var t = e.ad_object_type;
                  return t === "ad_set";
                })
                .map(function (e) {
                  var t = e.ad_object_id;
                  return t;
                }),
            );
          if (i.size > 0) {
            var s = o("AdsAdObjectUtils").getCampaignGroupID(
              "ad",
              Array.from(i)[0],
            );
            s != null && a.add(s);
          } else if (l.size > 0) {
            var u = o("AdsAdObjectUtils").getCampaignGroupID(
              "ad_set",
              Array.from(l)[0],
            );
            u != null && a.add(u);
          }
        }
        r("ifRequireable")("getCampaignStructureTreeFromId", function (e) {
          a.forEach(function (r) {
            return n(e(r), t);
          });
        });
      });
    }
    l.default = e;
  },
  98,
);
