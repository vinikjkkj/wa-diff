__d(
  "AdsPECampaignLiveTableStore",
  [
    "AdsAPICampaignRecord",
    "AdsManagerAdObjectTableDataSpecUtils",
    "AdsManagerLiveDataCampaign",
    "AdsManagerLiveDataCampaignQueryPreloadingConfig",
    "AdsPEBaseLiveTableStore_RELAY",
    "AdsPECampaignLiveTableStoreRELAYCampaignFragment.graphql",
    "AdsPECampaignLiveTableStoreRELAYLoadedIDsQuery.graphql",
    "AdsPECampaignLiveTableStoreRELAYLoadedQuery.graphql",
    "FBLogger",
    "LoadObject",
    "RelayModern",
    "amFetchPreloadedQuery",
    "err",
    "isTruthy",
    "readClientFragment",
    "readClientQuery",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = !1,
      d =
        e !== void 0
          ? e
          : (e = n("AdsPECampaignLiveTableStoreRELAYLoadedIDsQuery.graphql")),
      m =
        s !== void 0
          ? s
          : (s = n("AdsPECampaignLiveTableStoreRELAYLoadedQuery.graphql")),
      p =
        u !== void 0
          ? u
          : (u = n("AdsPECampaignLiveTableStoreRELAYCampaignFragment.graphql")),
      _ = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getLevel = function () {
            return "campaign";
          }),
          (n.$AdsPECampaignLiveTableStore_RELAY$p_1 = function (t) {
            var e = this,
              n = Array.from(t).filter(function (e) {
                return r("isTruthy")(e);
              });
            n.length !== 0 &&
              r("amFetchPreloadedQuery")(
                this.getRelayEnvironment(),
                o("AdsManagerLiveDataCampaign").AdsManagerLiveDataCampaignQuery,
                { ids: t, skip_data_transform: c },
                {
                  networkCacheConfig: {
                    metadata: {
                      preloadingConfig: r(
                        "AdsManagerLiveDataCampaignQueryPreloadingConfig",
                      ),
                    },
                  },
                },
              ).subscribe({
                next: function (o) {
                  var n = o.nodes.map(function (e) {
                    var n;
                    return (
                      e == null &&
                        r("FBLogger")("relay_ads_manager").warn(
                          "Received null node while loading L2, these were the IDs requested: %s",
                          t.join(", "),
                        ),
                      e == null || (n = e.ad_object_spec) == null
                        ? void 0
                        : n.id
                    );
                  });
                  e.__handleResponse(t, n);
                },
                error: function (r) {
                  return e.__handleErrors(t, r);
                },
              });
          }),
          (n.__createRecord = function (t) {
            if (t != null) return new (r("AdsAPICampaignRecord"))(t);
          }),
          (n.__loadAll = function (t, n) {
            (n === void 0 && (n = !1),
              n ||
                o("RelayModern").commitLocalUpdate(
                  this.getRelayEnvironment(),
                  function (e) {
                    return o("AdsManagerAdObjectTableDataSpecUtils").updateLink(
                      e,
                      t,
                      "loaded_campaigns",
                      "AdCampaign",
                    );
                  },
                ),
              this.$AdsPECampaignLiveTableStore_RELAY$p_1(t));
          }),
          (n.__handleErrors = function (n, o) {
            (r("FBLogger")("relay_ads_manager").warn(
              "Received error while loading L2 %s",
              o.message,
            ),
              e.prototype.__handleErrors.call(this, n, o));
          }),
          (n.__handleResponse = function (t, n) {
            var e = this,
              a = t.filter(function (e) {
                return !n.includes(e);
              });
            (o("RelayModern").commitLocalUpdate(
              this.getRelayEnvironment(),
              function (e) {
                n.filter(Boolean).forEach(function (t) {
                  var n = e.get(t);
                  n != null &&
                    n.getValue("__placeholder") === !0 &&
                    n.setValue(!1, "__placeholder");
                });
              },
            ),
              a.length > 0 &&
                (r("FBLogger")(
                  "relay_ads_manager",
                  "addrafts_campaign_loaded",
                ).debug("handling drafts in response"),
                o("RelayModern").commitLocalUpdate(
                  this.getRelayEnvironment(),
                  function (t) {
                    var n,
                      o =
                        (n = t
                          .getRoot()
                          .getLinkedRecords("loaded_campaigns")) != null
                          ? n
                          : [];
                    (a.forEach(function (n) {
                      var a = t.get(n),
                        l = a == null ? void 0 : a.getType();
                      (a == null ? void 0 : a.getValue("__placeholder")) ===
                        !0 && l !== "AdCampaign"
                        ? (e
                            .__getDraftsMap()
                            .set(
                              n,
                              r("LoadObject").withError(
                                r("err")(
                                  'Expected GraphQL object type "AdCampaign", got\n                    ' +
                                    (l != null ? l : "null") +
                                    " when loading id " +
                                    n +
                                    ".",
                                ),
                                { creatorModuleID: i.id },
                              ),
                            ),
                          (o = o.filter(function (e) {
                            return (e == null ? void 0 : e.getDataID()) !== n;
                          })))
                        : e
                            .__getDraftsMap()
                            .set(
                              n,
                              r("LoadObject").withValue(null, {
                                creatorModuleID: i.id,
                              }),
                            );
                    }),
                      t.getRoot().setLinkedRecords(o, "loaded_campaigns"));
                  },
                ),
                this.__queueNotify()));
          }),
          (n.__getQuery = function () {
            return m;
          }),
          (n.__getVariables = function () {
            return { skip_data_transform: c };
          }),
          (n.__getLoadedKeys = function () {
            var e,
              t,
              n = r("readClientQuery")(this.getRelayEnvironment(), d, {}),
              o =
                (e =
                  n == null || (t = n.loaded_campaigns) == null
                    ? void 0
                    : t
                        .map(function (e) {
                          return e == null ? void 0 : e.id;
                        })
                        .filter(Boolean)) != null
                  ? e
                  : [];
            return o;
          }),
          (n.__getCachedFromRelayStore = function (t) {
            return r("readClientFragment")(
              this.getRelayEnvironment(),
              o("AdsManagerLiveDataCampaign").AdsManagerLiveDataCampaignQuery,
              p,
              { ids: [t], skip_data_transform: c },
              { skip_data_transform: c },
              t,
              function (e) {
                return e == null ? void 0 : e.ad_object_spec;
              },
            );
          }),
          (n.__refetchAll = function () {
            var e = this.__getLoadedKeys();
            (o("RelayModern").commitLocalUpdate(
              this.getRelayEnvironment(),
              function (t) {
                return o("AdsManagerAdObjectTableDataSpecUtils").updateLink(
                  t,
                  e,
                  "loaded_campaigns",
                  "AdCampaign",
                );
              },
            ),
              this.__clearLoadedKeys());
          }),
          (n.__refetch = function (t) {
            var e = this;
            o("RelayModern").commitLocalUpdate(
              this.getRelayEnvironment(),
              function (n) {
                var r = o(
                  "AdsManagerAdObjectTableDataSpecUtils",
                ).refetchAdObjects(n, t, "AdCampaign");
                (o("AdsManagerAdObjectTableDataSpecUtils").updateLink(
                  n,
                  r,
                  "loaded_campaigns",
                  "AdCampaign",
                ),
                  e.$AdsPECampaignLiveTableStore_RELAY$p_1(r));
              },
            );
          }),
          (n.__lazyRefetch = function () {
            return !0;
          }),
          (n.__getChunkSize = function () {
            return 20;
          }),
          t
        );
      })(r("AdsPEBaseLiveTableStore_RELAY"));
    _.__moduleID = i.id;
    var f = new _();
    l.default = f;
  },
  98,
);
