__d(
  "ObjectTypeToIDsMapSelector",
  [
    "AdsObjectTypeUtils",
    "AdsObjectTypes",
    "LoadObject",
    "adObjectIDsForSelectionBranchSelector",
    "adsCreateSelector",
    "currentLevelBranchSelector",
    "immutable",
    "selectedIDsBranchSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      return t === o("AdsObjectTypeUtils").toObjectLevel(e) ? n : r.getValue();
    }
    var s = r("adsCreateSelector")(
      [
        r("adObjectIDsForSelectionBranchSelector"),
        r("selectedIDsBranchSelector"),
        r("currentLevelBranchSelector"),
      ],
      function (n, o, a) {
        var t;
        return n.adgroupIDs.isLoading() ||
          n.campaignIDs.isLoading() ||
          n.campaignGroupIDs.isLoading()
          ? r("LoadObject").loading({ creatorModuleID: i.id })
          : r("LoadObject").withValue(
              r("immutable").Map(
                ((t = {}),
                (t[r("AdsObjectTypes").ADGROUP] = e(
                  r("AdsObjectTypes").ADGROUP,
                  a,
                  o,
                  n.adgroupIDs,
                )),
                (t[r("AdsObjectTypes").CAMPAIGN] = e(
                  r("AdsObjectTypes").CAMPAIGN,
                  a,
                  o,
                  n.campaignIDs,
                )),
                (t[r("AdsObjectTypes").CAMPAIGN_GROUP] = e(
                  r("AdsObjectTypes").CAMPAIGN_GROUP,
                  a,
                  o,
                  n.campaignGroupIDs,
                )),
                t),
              ),
              { creatorModuleID: i.id },
            );
      },
      { name: i.id + ".objectTypeToIDsMapSelector" },
    );
    l.objectTypeToIDsMapSelector = s;
  },
  98,
);
