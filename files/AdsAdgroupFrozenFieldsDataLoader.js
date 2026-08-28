__d(
  "AdsAdgroupFrozenFieldsDataLoader",
  [
    "AsyncTypedRequest",
    "Promise",
    "XAdsManagerAdgroupFrozenFieldsControllerRouteBuilder",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return new (e || (e = n("Promise")))(function (e) {
        return new (r("AsyncTypedRequest"))(
          r("XAdsManagerAdgroupFrozenFieldsControllerRouteBuilder").buildUri({
            adgroup_id: t,
          }),
        )
          .setPayloadHandler(function (t) {
            var n = t.adgroup_name,
              o = t.campaign_group_name,
              a = t.campaign_name,
              i = t.id;
            return r("isFalsey")(i) ||
              o == null ||
              o === "" ||
              a == null ||
              a === "" ||
              n == null ||
              n === ""
              ? e(null)
              : e({
                  id: i,
                  campaignGroupName: o,
                  campaignName: a,
                  adgroupName: n,
                });
          })
          .send();
      });
    }
    l.genFrozenFieldsData = s;
  },
  98,
);
