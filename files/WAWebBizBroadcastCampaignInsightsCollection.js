__d(
  "WAWebBizBroadcastCampaignInsightsCollection",
  [
    "Promise",
    "WAWebBizBroadcastCampaignInsightsModel",
    "WAWebStaleBaseCollection",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function r() {
          for (var r, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
            a[i] = arguments[i];
          return (
            (r = t.call.apply(t, [this].concat(a)) || this),
            (r.bootstrapped = !1),
            (r.findImpl = function (t) {
              return (e || (e = n("Promise"))).resolve({ id: t.toString() });
            }),
            babelHelpers.assertThisInitialized(r) ||
              babelHelpers.assertThisInitialized(r)
          );
        }
        return (babelHelpers.inheritsLoose(r, t), r);
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    s.model = o(
      "WAWebBizBroadcastCampaignInsightsModel",
    ).BizBroadcastCampaignInsights;
    var u = new s();
    l.default = u;
  },
  98,
);
