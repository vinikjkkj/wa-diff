__d(
  "AdsSignalLossLimitsDataProviderPlugin",
  ["AdsGraphAPI", "Promise", "firstx", "loadObjectMapProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(t.adAccountID)
        .edge("ios_fourteen_campaign_limits")
        .get({ app_id: t.appID })
        .then(
          function (e) {
            return r("firstx")(e.data);
          },
          function (t) {
            return (e || (e = n("Promise"))).reject(t);
          },
        )
        .catch(function (t) {
          return (e || (e = n("Promise"))).reject(t);
        });
    }
    var u = {
        initialState: r("loadObjectMapProvider").keyed(s, function (e) {
          return e.adAccountID + "." + e.appID;
        }),
      },
      c = u;
    l.default = c;
  },
  98,
);
