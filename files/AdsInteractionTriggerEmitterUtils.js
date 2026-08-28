__d(
  "AdsInteractionTriggerEmitterUtils",
  ["AdsObjectTypes", "adsObjectTypeFromAdLevel", "requireWeak"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = null,
      c = null,
      d = null;
    ((e = r("requireWeak"))(
      "adsMgmtCampaignGroupSelectionSelector",
      function (e) {
        s = e;
      },
    ),
      e("adsMgmtCampaignSelectionSelector", function (e) {
        u = e;
      }),
      e("adsMgmtAdgroupSelectionSelector", function (e) {
        c = e;
      }),
      e("adsMgmtCurrentLevelSelector", function (e) {
        d = e;
      }));
    function m() {
      return d != null ? r("adsObjectTypeFromAdLevel")(d()) : null;
    }
    function p(e) {
      var t = [];
      switch (e || m()) {
        case r("AdsObjectTypes").CAMPAIGN_GROUP: {
          s != null && (t = s().toArray());
          break;
        }
        case r("AdsObjectTypes").CAMPAIGN: {
          u != null && (t = u().toArray());
          break;
        }
        case r("AdsObjectTypes").ADGROUP: {
          c != null && (t = c().toArray());
          break;
        }
      }
      return t;
    }
    ((l.getSelectedObjectType = m), (l.getSelectedObjectIDs = p));
  },
  98,
);
