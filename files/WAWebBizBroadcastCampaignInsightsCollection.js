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
        babelHelpers.inheritsLoose(r, t);
        var o = r.prototype;
        return (
          (o.markBootstrapped = function () {
            ((this.bootstrapped = !0), this.trigger("bootstrapped"));
          }),
          r
        );
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    s.model = o(
      "WAWebBizBroadcastCampaignInsightsModel",
    ).BizBroadcastCampaignInsights;
    var u = new s();
    l.default = u;
  },
  98,
);
