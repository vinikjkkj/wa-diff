__d(
  "AdsConnectedSourcesSiteLinksNoticeReducerPlugins",
  ["AdsCreativeSiteLinksAPICallUtils", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: function (t, n) {
        if (n.defaultOnType != null && n.adgroupIDs.length > 0) {
          var e = n.adgroupIDs[0].toString(),
            a = t.get(e);
          (a == null &&
            (a = babelHelpers.extends(
              {},
              o("AdsCreativeSiteLinksAPICallUtils").defaultSiteLinkNoticeData,
            )),
            (a.defaultOnType = n.defaultOnType),
            (a.defaultOnURL = n.defaultOnURL));
          var i = new Map(t);
          return (i.set(e, a), r("immutable").Map(i));
        }
        return t;
      },
    };
    l.onSiteLinksAddedByDefault = e;
  },
  98,
);
