__d(
  "WAWebBizBroadcastProCampaignStatusCollection",
  [
    "CometRelay",
    "WAWebBizBroadcastProCampaignStatusModel",
    "WAWebBizBroadcastProCampaignStatusRefreshQuery",
    "WAWebBizBroadcastProRelayEnvironment",
    "WAWebStaleBaseCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
          i[l] = arguments[l];
        return (
          (t = e.call.apply(e, [this].concat(i)) || this),
          (t.findImpl = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n = e.toString(),
                  a = yield r("WAWebBizBroadcastProRelayEnvironment")(),
                  i = yield o("CometRelay")
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
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
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
