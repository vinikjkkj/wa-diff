__d(
  "subscribeCombinedStoreLive",
  [
    "AdsAdgroupCombinedStore",
    "AdsCampaignCombinedStore",
    "AdsCampaignGroupCombinedStore",
    "AdsRelayReadInteropHostIDUtils",
    "FluxContainerSubscriptions",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new WeakMap();
    function s(t, n, a) {
      var i,
        l = (i = t.__moduleID) != null ? i : "STORE_WITHOUT_MODULE_ID";
      return {
        read: function () {
          return t.getObject(n).match({
            empty: function (t) {
              return a(t);
            },
            error: function (t) {
              throw t;
            },
            loaded: function (t) {
              return a(t);
            },
            loading: function () {
              return o("relay-runtime").suspenseSentinel();
            },
          });
        },
        subscribe: function (a) {
          var o,
            i = t.getObject(n),
            s =
              (o = e.get(t)) != null
                ? o
                : new (r("FluxContainerSubscriptions"))(l);
          e.has(t) || (e.set(t, s), s.setStores([t]));
          var u = function () {
            var e = t.getObject(n);
            e !== i && ((i = e), a());
          };
          return (
            s.addListener(u),
            function () {
              (s.removeListener(u),
                s.getNumListeners() === 0 && (s.reset(), e.delete(t)));
            }
          );
        },
      };
    }
    function u(e) {
      var t = e.adObjectLevel,
        n = e.hostID,
        a = e.id;
      return s(r("AdsCampaignGroupCombinedStore"), a, function (e) {
        return e == null
          ? null
          : {
              adObjectLevel: t,
              campaignGroup: e,
              hostID: n,
              id: o("AdsRelayReadInteropHostIDUtils").encodeRelayIDWithHostID(
                a,
                n,
                t,
              ),
            };
      });
    }
    function c(e) {
      var t = e.adObjectLevel,
        n = e.hostID,
        a = e.id;
      return s(r("AdsCampaignCombinedStore"), a, function (e) {
        return e == null
          ? null
          : {
              adObjectLevel: t,
              campaign: e,
              hostID: n,
              id: o("AdsRelayReadInteropHostIDUtils").encodeRelayIDWithHostID(
                a,
                n,
                t,
              ),
            };
      });
    }
    function d(e) {
      var t = e.adObjectLevel,
        n = e.hostID,
        a = e.id;
      return s(r("AdsAdgroupCombinedStore"), a, function (e) {
        return e == null
          ? null
          : {
              adgroup: e,
              adObjectLevel: t,
              hostID: n,
              id: o("AdsRelayReadInteropHostIDUtils").encodeRelayIDWithHostID(
                a,
                n,
                t,
              ),
            };
      });
    }
    ((l.subscribeCombinedCampaignGroupStoreLive = u),
      (l.subscribeCombinedCampaignStoreLive = c),
      (l.subscribeCombinedAdgroupStoreLive = d));
  },
  98,
);
