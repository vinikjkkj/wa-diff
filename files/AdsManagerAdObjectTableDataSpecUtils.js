__d(
  "AdsManagerAdObjectTableDataSpecUtils",
  [
    "AdsManagerAdObjectTableDataSpecUtilsPreloadingConfig",
    "AdsManagerLiveData",
    "AdsManagerRelayEnvironment",
    "FBLogger",
    "amFetchPreloadedQuery",
    "performanceAbsoluteNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n, r) {
      var o,
        a = (o = e.getRoot().getLinkedRecords(n)) != null ? o : [],
        i = function (n) {
          var t = e.get(n);
          if (t == null) {
            var o = e.create(n, r);
            (o.setValue(n, "id"), o.setValue(!0, "__placeholder"), a.push(o));
          } else {
            if (t.getType() !== r && !t.getValue("__placeholder")) return 1;
            (a.some(function (e) {
              return (e == null ? void 0 : e.getDataID()) === n;
            }) || a.push(t),
              t.setValue(void 0, "is_existing__graphql_on_flux_only"));
          }
        };
      for (var l of t) i(l);
      e.getRoot().setLinkedRecords(a, n);
    }
    function u(e, t) {
      s(e, t, "loaded_campaign_groups", "AdCampaignGroup");
    }
    function c(e, t, n) {
      var r = [];
      for (var o of t) {
        var a = e.get(o);
        (n == null ||
          (a == null ? void 0 : a.getType()) === n ||
          (a == null ? void 0 : a.getValue("__placeholder")) === !0) &&
          (r.push(o),
          a == null || a.setValue(void 0, "is_existing__graphql_on_flux_only"));
      }
      return r;
    }
    function d(t) {
      var n = (e || (e = r("performanceAbsoluteNow")))(),
        a = { ids: t };
      return r("amFetchPreloadedQuery")(
        r("AdsManagerRelayEnvironment"),
        o("AdsManagerLiveData").AdsManagerLiveDataCampaignGroupNewQuery,
        a,
        {
          networkCacheConfig: {
            metadata: {
              preloadingConfig: r(
                "AdsManagerAdObjectTableDataSpecUtilsPreloadingConfig",
              ),
            },
          },
        },
      )
        .toPromise()
        .then(
          function (t) {
            var o = (e || (e = r("performanceAbsoluteNow")))() - n,
              a =
                t == null
                  ? void 0
                  : t.nodes.reduce(function (e, t) {
                      return (
                        t.ad_object_spec != null &&
                          (e[t.ad_object_spec.id] = t.ad_object_spec),
                        e
                      );
                    }, {});
            return { duration: o, response: a };
          },
          function (e) {
            throw (
              r("FBLogger")("relay_ads_manager").warn(
                "Received error %s",
                e.message,
              ),
              e
            );
          },
        );
    }
    ((l.updateLink = s),
      (l.updateCampaignGroupLink = u),
      (l.refetchAdObjects = c),
      (l.fetchCampaignGroupSpec = d));
  },
  98,
);
