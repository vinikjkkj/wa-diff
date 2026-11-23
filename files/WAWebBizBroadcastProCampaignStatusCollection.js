__d(
  "WAWebBizBroadcastProCampaignStatusCollection",
  [
    "CometRelay",
    "WAWebBizBroadcastProCampaignStatusModel",
    "WAWebBizBroadcastProCampaignStatusRefreshQuery",
    "WAWebBizBroadcastProRelayEnvironment",
    "WAWebStaleBaseCollection",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
          a[i] = arguments[i];
        return (
          (t = e.call.apply(e, [this].concat(a)) || this),
          (t.findImpl = async function (e) {
            var t,
              n = e.toString(),
              a = await r("WAWebBizBroadcastProRelayEnvironment")(),
              i = await o("CometRelay")
                .fetchQuery(
                  a,
                  o("WAWebBizBroadcastProCampaignStatusRefreshQuery")
                    .proCampaignStatusRefreshQuery,
                  { campaignId: n },
                  { fetchPolicy: "network-only" },
                )
                .toPromise(),
              l =
                i == null || (t = i.node) == null
                  ? void 0
                  : t.WAWebBizBroadcastProCampaignStatusRefreshQuery_campaign;
            return {
              displayStatus:
                l == null
                  ? null
                  : o(
                      "WAWebBizBroadcastProCampaignStatusRefreshQuery",
                    ).readProCampaignStatus(l).displayStatus,
              id: n,
            };
          }),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    e.model = o(
      "WAWebBizBroadcastProCampaignStatusModel",
    ).BizBroadcastProCampaignStatus;
    var s = new e();
    l.default = s;
  },
  98,
);
