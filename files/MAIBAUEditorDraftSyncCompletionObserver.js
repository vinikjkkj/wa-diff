__d(
  "MAIBAUEditorDraftSyncCompletionObserver",
  [
    "AdsAdgroupDraftFragmentStore",
    "AdsApplicationIDs",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsDataAtom",
    "AdsDraftDraftSyncCompletedDataActionFlux",
    "AdsDraftDraftSyncRequestSentDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return t.length === 0
        ? []
        : ((e || (e = r("AdsDataAtom"))).waitFor([
            r("AdsAdgroupDraftFragmentStore").getDispatchToken(),
            r("AdsCampaignDraftFragmentStore").getDispatchToken(),
            r("AdsCampaignGroupDraftFragmentStore").getDispatchToken(),
          ]),
          t.filter(function (e) {
            var t = e.adObjectID,
              n = e.level,
              o =
                n === "L1"
                  ? r("AdsAdgroupDraftFragmentStore")
                  : n === "L2"
                    ? r("AdsCampaignDraftFragmentStore")
                    : n === "L3"
                      ? r("AdsCampaignGroupDraftFragmentStore")
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              n,
                          );
                        })();
            return o.getState().dirtyIDs.has(t);
          }));
    }
    function u(t, n, a, i) {
      var l = (e || (e = r("AdsDataAtom"))).register(function (e) {
        var l = e.action;
        if (
          l.type ===
            o("AdsDraftDraftSyncRequestSentDataActionFlux").actionType &&
          l.adsApplicationID === r("AdsApplicationIDs").ADS_POWER_EDITOR
        ) {
          a(s(t));
          return;
        }
        if (
          !(
            l.type !==
              o("AdsDraftDraftSyncCompletedDataActionFlux").actionType ||
            l.adsApplicationID !== r("AdsApplicationIDs").ADS_POWER_EDITOR
          )
        ) {
          var u = l;
          i(!u.syncErrors.isEmpty(), s(n()));
        }
      });
      return function () {
        return (e || (e = r("AdsDataAtom"))).unregister(l);
      };
    }
    l.default = u;
  },
  98,
);
