__d(
  "AdsDuplicationSetRegulatoryNavigationInfoReducerPlugin",
  ["AdsObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.fragments.map(function (e) {
              return e.ad_object_type;
            }),
            o = null;
          return (
            e.includes("campaign")
              ? (o = r("AdsObjectTypes").CAMPAIGN_GROUP)
              : e.includes("ad_set")
                ? (o = r("AdsObjectTypes").CAMPAIGN)
                : e.includes("ad") && (o = r("AdsObjectTypes").ADGROUP),
            { adObjectType: o, source: n.source }
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
