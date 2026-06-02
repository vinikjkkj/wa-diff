__d(
  "WAWebBizBroadcastCampaignCollection",
  [
    "WAWebBizBroadcastCampaignModel",
    "WAWebCollectionUtils",
    "WAWebStaleBaseCollection",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.bootstrapped = !1),
          (t.byBroadcastJid = o("WAWebCollectionUtils").aggregated(
            function (e) {
              return e.broadcastJid;
            },
          )),
          (t.byStatus = o("WAWebCollectionUtils").aggregated(
            function (e) {
              return e.status;
            },
            { subscribeToKey: "status" },
          )),
          (t.byDevice = o("WAWebCollectionUtils").aggregated(function (e) {
            return e.deviceId;
          })),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    ((e.model = o("WAWebBizBroadcastCampaignModel").BizBroadcastCampaign),
      (e.comparator = function (e, t) {
        return t.createdTimestamp - e.createdTimestamp;
      }));
    var s = new e();
    l.default = s;
  },
  98,
);
