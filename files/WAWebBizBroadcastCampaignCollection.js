__d(
  "WAWebBizBroadcastCampaignCollection",
  [
    "Promise",
    "WAWebBizBroadcastCampaignModel",
    "WAWebCollectionUtils",
    "WAWebStaleBaseCollection",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function r() {
          for (var r, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          return (
            (r = t.call.apply(t, [this].concat(i)) || this),
            (r.bootstrapped = !1),
            (r.byBroadcastJid = o("WAWebCollectionUtils").aggregated(
              function (e) {
                return e.broadcastJid;
              },
            )),
            (r.byStatus = o("WAWebCollectionUtils").aggregated(
              function (e) {
                return e.status;
              },
              { subscribeToKey: "status" },
            )),
            (r.byDevice = o("WAWebCollectionUtils").aggregated(function (e) {
              return e.deviceId;
            })),
            (r.findImpl = function (t) {
              return (e || (e = n("Promise"))).resolve({ id: t.toString() });
            }),
            babelHelpers.assertThisInitialized(r) ||
              babelHelpers.assertThisInitialized(r)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.markBootstrapped = function () {
            ((this.bootstrapped = !0), this.trigger("bootstrapped"));
          }),
          r
        );
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    ((s.model = o("WAWebBizBroadcastCampaignModel").BizBroadcastCampaign),
      (s.comparator = function (e, t) {
        return t.createdTimestamp - e.createdTimestamp;
      }));
    var u = new s();
    l.default = u;
  },
  98,
);
