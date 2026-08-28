__d(
  "AdsPECampaignGroupLiveTableStore",
  [
    "AdsAPICampaignGroupRecord",
    "AdsCampaignGroupLiveFields",
    "AdsManagerAdObjectTableDataSpecUtils",
    "AdsManagerLiveData",
    "AdsPEAdObjectTableDataManager",
    "AdsPEBaseLiveTableStore_RELAY",
    "AdsPECampaignGroupLiveTableStoreNamespacedLoadedIDsQuery.graphql",
    "AdsPECampaignGroupLiveTableStoreNamespacedLoadedQuery.graphql",
    "AdsPECampaignGroupLiveTableStoreRELAYNEWCampaignGroupFragment.graphql",
    "AdsPECampaignGroupLiveTableStoreRELAYNEWLoadedIDsQuery.graphql",
    "AdsPECampaignGroupLiveTableStoreRELAYNEWLoadedQuery.graphql",
    "FBLogger",
    "LoadObject",
    "RelayModern",
    "err",
    "filterObject",
    "gkx",
    "isTruthy",
    "promiseDone",
    "readClientFragment",
    "readClientQuery",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = r("AdsCampaignGroupLiveFields").cheapFields.filter(function (e) {
        return e !== "campaign_structure_tree";
      }),
      p =
        e !== void 0
          ? e
          : (e = n(
              "AdsPECampaignGroupLiveTableStoreRELAYNEWLoadedIDsQuery.graphql",
            )),
      _ =
        s !== void 0
          ? s
          : (s = n(
              "AdsPECampaignGroupLiveTableStoreRELAYNEWLoadedQuery.graphql",
            )),
      f =
        u !== void 0
          ? u
          : (u = n(
              "AdsPECampaignGroupLiveTableStoreNamespacedLoadedIDsQuery.graphql",
            )),
      g =
        c !== void 0
          ? c
          : (c = n(
              "AdsPECampaignGroupLiveTableStoreNamespacedLoadedQuery.graphql",
            )),
      h =
        d !== void 0
          ? d
          : (d = n(
              "AdsPECampaignGroupLiveTableStoreRELAYNEWCampaignGroupFragment.graphql",
            )),
      y = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getLevel = function () {
            return "campaignGroup";
          }),
          (n.$AdsPECampaignGroupLiveTableStore_RELAY_NEW$p_1 = function (t) {
            var e = this,
              n = Array.from(t).filter(function (e) {
                return r("isTruthy")(e);
              });
            n.length !== 0 &&
              r("promiseDone")(
                o("AdsPEAdObjectTableDataManager").getAdObjects(
                  n,
                  "campaignGroup",
                  m,
                  !0,
                ),
                function (n) {
                  var o = Object.keys(
                    r("filterObject")(n, function (e) {
                      return e != null;
                    }),
                  ).filter(Boolean);
                  e.__handleResponse(t, o);
                },
                function (n) {
                  return e.__handleErrors(t, n);
                },
              );
          }),
          (n.$AdsPECampaignGroupLiveTableStore_RELAY_NEW$p_2 = function (t) {
            var e = t.getRoot().getLinkedRecord("ads_manager_loaded_objects");
            return (
              e == null &&
                ((e = t.create(
                  "client:root:ads_manager_loaded_objects",
                  "AdsManagerLoadedObjects",
                )),
                t.getRoot().setLinkedRecord(e, "ads_manager_loaded_objects")),
              e
            );
          }),
          (n.$AdsPECampaignGroupLiveTableStore_RELAY_NEW$p_3 = function (t, n) {
            var e,
              r = this.$AdsPECampaignGroupLiveTableStore_RELAY_NEW$p_2(t),
              o = (e = r.getLinkedRecords("campaign_groups")) != null ? e : [],
              a = function (n) {
                var e = t.get(n);
                if (e == null) {
                  var r = t.create(n, "AdCampaignGroup");
                  (r.setValue(n, "id"),
                    r.setValue(!0, "__placeholder"),
                    o.push(r));
                } else {
                  if (
                    e.getType() !== "AdCampaignGroup" &&
                    !e.getValue("__placeholder")
                  )
                    return 1;
                  (o.some(function (e) {
                    return (e == null ? void 0 : e.getDataID()) === n;
                  }) || o.push(e),
                    e.setValue(void 0, "is_existing__graphql_on_flux_only"));
                }
              };
            for (var i of n) a(i);
            r.setLinkedRecords(o, "campaign_groups");
          }),
          (n.__createRecord = function (t) {
            if (t != null) return new (r("AdsAPICampaignGroupRecord"))(t);
          }),
          (n.__loadAll = function (t) {
            var e = this;
            (r("gkx")("15786")
              ? o("RelayModern").commitLocalUpdate(
                  this.getRelayEnvironment(),
                  function (n) {
                    return e.$AdsPECampaignGroupLiveTableStore_RELAY_NEW$p_3(
                      n,
                      t,
                    );
                  },
                )
              : o("RelayModern").commitLocalUpdate(
                  this.getRelayEnvironment(),
                  function (e) {
                    return o(
                      "AdsManagerAdObjectTableDataSpecUtils",
                    ).updateCampaignGroupLink(e, t);
                  },
                ),
              this.$AdsPECampaignGroupLiveTableStore_RELAY_NEW$p_1(t));
          }),
          (n.__handleErrors = function (n, o) {
            (r("FBLogger")("relay_ads_manager").warn(
              "Received error %s",
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
                (r("FBLogger")("relay_ads_manager", "drafts_loaded").debug(
                  "handling drafts in response",
                ),
                o("RelayModern").commitLocalUpdate(
                  this.getRelayEnvironment(),
                  function (t) {
                    var n;
                    if (r("gkx")("15786")) {
                      var o;
                      n =
                        (o = e
                          .$AdsPECampaignGroupLiveTableStore_RELAY_NEW$p_2(t)
                          .getLinkedRecords("campaign_groups")) != null
                          ? o
                          : [];
                    } else {
                      var l;
                      n =
                        (l = t
                          .getRoot()
                          .getLinkedRecords("loaded_campaign_groups")) != null
                          ? l
                          : [];
                    }
                    (a.forEach(function (o) {
                      var a = t.get(o),
                        l = a == null ? void 0 : a.getType();
                      (a == null ? void 0 : a.getValue("__placeholder")) ===
                        !0 && l !== "AdCampaignGroup"
                        ? (e
                            .__getDraftsMap()
                            .set(
                              o,
                              r("LoadObject").withError(
                                r("err")(
                                  'Expected GraphQL object type "AdCampaignGroup", got\n                    ' +
                                    (l != null ? l : "null") +
                                    " when loading id " +
                                    o +
                                    ".",
                                ),
                                { creatorModuleID: i.id },
                              ),
                            ),
                          (n = n.filter(function (e) {
                            return (e == null ? void 0 : e.getDataID()) !== o;
                          })))
                        : e
                            .__getDraftsMap()
                            .set(
                              o,
                              r("LoadObject").withValue(null, {
                                creatorModuleID: i.id,
                              }),
                            );
                    }),
                      r("gkx")("15786")
                        ? e
                            .$AdsPECampaignGroupLiveTableStore_RELAY_NEW$p_2(t)
                            .setLinkedRecords(n, "campaign_groups")
                        : t
                            .getRoot()
                            .setLinkedRecords(n, "loaded_campaign_groups"));
                  },
                ),
                this.__queueNotify()));
          }),
          (n.__getQuery = function () {
            return r("gkx")("15786") ? g : _;
          }),
          (n.__getVariables = function () {
            return {};
          }),
          (n.__getLoadedKeys = function () {
            var e, t;
            if (r("gkx")("15786")) {
              var n,
                o,
                a = r("readClientQuery")(this.getRelayEnvironment(), f, {});
              return (n =
                a == null ||
                (o = a.ads_manager_loaded_objects) == null ||
                (o = o.campaign_groups) == null
                  ? void 0
                  : o
                      .map(function (e) {
                        return e == null ? void 0 : e.id;
                      })
                      .filter(Boolean)) != null
                ? n
                : [];
            }
            var i = r("readClientQuery")(this.getRelayEnvironment(), p, {});
            return (e =
              i == null || (t = i.loaded_campaign_groups) == null
                ? void 0
                : t
                    .map(function (e) {
                      return e == null ? void 0 : e.id;
                    })
                    .filter(Boolean)) != null
              ? e
              : [];
          }),
          (n.__getCachedFromRelayStore = function (t) {
            return r("readClientFragment")(
              this.getRelayEnvironment(),
              o("AdsManagerLiveData").AdsManagerLiveDataCampaignGroupNewQuery,
              h,
              { ids: [t] },
              {},
              t,
              function (e) {
                return e == null ? void 0 : e.ad_object_spec;
              },
            );
          }),
          (n.__refetchAll = function () {
            var e = this.__getLoadedKeys();
            this.__doLoadAllImpl(e, !0);
          }),
          (n.__refetch = function (t) {
            var e = this;
            o("RelayModern").commitLocalUpdate(
              this.getRelayEnvironment(),
              function (n) {
                var a = o(
                  "AdsManagerAdObjectTableDataSpecUtils",
                ).refetchAdObjects(n, t, "AdCampaignGroup");
                (r("gkx")("15786")
                  ? e.$AdsPECampaignGroupLiveTableStore_RELAY_NEW$p_3(n, a)
                  : o(
                      "AdsManagerAdObjectTableDataSpecUtils",
                    ).updateCampaignGroupLink(n, a),
                  e.$AdsPECampaignGroupLiveTableStore_RELAY_NEW$p_1(a));
              },
            );
          }),
          t
        );
      })(r("AdsPEBaseLiveTableStore_RELAY"));
    y.__moduleID = i.id;
    var C = new y();
    l.default = C;
  },
  98,
);
