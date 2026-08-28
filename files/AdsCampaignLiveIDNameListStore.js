__d(
  "AdsCampaignLiveIDNameListStore",
  [
    "AdsCampaignListBatchLoadedActionFlux",
    "AdsCampaignLiveListDataManager",
    "AdsDataAtom",
    "FluxLoadObjectStore",
    "adsCFGetAccountAPIState_HACK",
    "adsDraftIsApplicationIDPowerEditor",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["campaign_id"],
      s,
      u = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.__getActionTypes = function () {
            return [
              this.getActionTypeStartLoad(),
              o("AdsCampaignListBatchLoadedActionFlux").actionType,
            ];
          }),
          (a.reduce = function (n, a) {
            var t = this,
              i = a.action;
            if (!r("adsDraftIsApplicationIDPowerEditor")(i.adsApplicationID))
              return n;
            e: {
              if (
                i.actionType ===
                o("AdsCampaignListBatchLoadedActionFlux").actionType
              ) {
                var l = n;
                return (
                  i.responses.forEach(function (n, r) {
                    if (n[0] && n[0].campaign_id) {
                      var o = n.map(function (t) {
                        var n = t.campaign_id,
                          r = babelHelpers.objectWithoutPropertiesLoose(t, e);
                        return r;
                      });
                      l = t.__handleOne(l, r, o);
                    }
                    n.length === 0 && (l = t.__handleOne(l, r, []));
                  }),
                  l
                );
                break e;
              }
              return n;
            }
          }),
          (a.__loadAll = function (t) {
            var e = r("adsCFGetAccountAPIState_HACK")().account_id;
            r("AdsCampaignLiveListDataManager").loadForCampaignGroups(e, t);
          }),
          (a.getForCampaignGroup = function (t, n) {
            return this.get(n);
          }),
          (a.getForCampaignGroups = function (t, n) {
            return this.getAll(n);
          }),
          (a.__getChunkSize = function () {
            return 1e3;
          }),
          n
        );
      })(r("FluxLoadObjectStore"));
    u.__moduleID = i.id;
    var c = new u(s || (s = r("AdsDataAtom")));
    l.default = c;
  },
  98,
);
