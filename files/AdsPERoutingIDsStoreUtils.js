__d(
  "AdsPERoutingIDsStoreUtils",
  [
    "invariant",
    "AdFLEXConfig",
    "AdsAdgroupDraftFragmentStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsInterfacesRouter",
    "AdsObjectTypeUtils",
    "AdsPEAdgroupSelectors",
    "AdsPEAdgroupTablePagingSelectors",
    "AdsPEAdgroupVisibleIDsSelectors",
    "AdsPECampaignGroupTablePagingSelectors",
    "AdsPECampaignGroupVisibleIDsSelectors",
    "AdsPECampaignSelectors",
    "AdsPECampaignTablePagingSelectors",
    "AdsPECampaignVisibleIDsSelectors",
    "AdsPESelectionClickTypes",
    "adsMgmtAdgroupSelectedIdsSelector",
    "adsMgmtAdgroupSelectionSelector",
    "adsMgmtAdsObjectTypeByIdSelector",
    "adsMgmtCampaignGroupSelectedIdsSelector",
    "adsMgmtCampaignSelectedIdsSelector",
    "adsMgmtCampaignSelectionSelector",
    "isFalsey",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = -1,
      u = (function () {
        function t() {
          this.resetAll();
        }
        var n = t.prototype;
        return (
          (n.resetAll = function () {
            this.$1 = null;
          }),
          (n.getNewAdsetIDsWhenParentChanges = function (t) {
            var e = r("adsMgmtCampaignSelectionSelector")(),
              n = [];
            return (
              e.forEach(function (e) {
                var a,
                  l,
                  s = o("AdsPECampaignSelectors")
                    .getCachedByFieldsSelector()(e, { campaign_id: null }, i.id)
                    .getValue();
                if (
                  (t.length > 0 ||
                    ((a =
                      r("AdFLEXConfig") == null ||
                      (l = r("AdFLEXConfig").get()) == null
                        ? void 0
                        : l.shouldClearL2Selection) != null &&
                      a)) &&
                  s &&
                  !t.includes(s.campaign_id)
                ) {
                  n.push(e);
                  return;
                }
              }),
              Array.from(e.subtract(n))
            );
          }),
          (n.getNewAdIDsWhenParentsChange = function (t, n) {
            var e = r("adsMgmtAdgroupSelectionSelector")(),
              a = [];
            return (
              e.forEach(function (e) {
                var r = o("AdsPEAdgroupSelectors")
                  .getCachedByFieldsSelector()(
                    e,
                    { adset_id: null, campaign_id: null },
                    i.id,
                  )
                  .getValue();
                if (r) {
                  if (t.length > 0 && !t.includes(r.campaign_id)) {
                    a.push(e);
                    return;
                  }
                  if (n.length > 0 && !n.includes(r.adset_id)) {
                    a.push(e);
                    return;
                  }
                }
              }),
              Array.from(e.subtract(a))
            );
          }),
          (n.getNewIDsDependingOnCurrentLevel = function (t, n) {
            switch (t) {
              case "campaign": {
                var e = this.getNewAdsetIDsWhenParentChanges(n),
                  r = this.getNewAdIDsWhenParentsChange(n, e || []);
                return {
                  selected_campaign_ids: n,
                  selected_adset_ids: e,
                  selected_ad_ids: r,
                };
              }
              case "ad_set": {
                var o = this.getNewAdIDsWhenParentsChange([], n);
                return { selected_adset_ids: n, selected_ad_ids: o };
              }
              case "ad":
                return { selected_ad_ids: n };
            }
            return {};
          }),
          (n.getNewIDs = function (n, o, a, i) {
            if (r("isFalsey")(o)) return n;
            var t = n.length ? this.$2() : null;
            return (
              this.$3(o),
              a === r("AdsPESelectionClickTypes").MULTI
                ? this.$4(n, o, t, i)
                : n.indexOf(o) === e
                  ? [].concat(n, [o])
                  : a === r("AdsPESelectionClickTypes").ADDITIVE
                    ? n.filter(function (e) {
                        return e !== o;
                      })
                    : n
            );
          }),
          (n.getIDToIndex = function (t, n) {
            switch (n) {
              case "campaign":
                return r(
                  "AdsPECampaignGroupVisibleIDsSelectors",
                ).indexForIDSelector(t);
              case "ad_set":
                return r("AdsPECampaignVisibleIDsSelectors").indexForIDSelector(
                  t,
                );
              case "ad":
                return r("AdsPEAdgroupVisibleIDsSelectors").indexForIDSelector(
                  t,
                );
            }
            return null;
          }),
          (n.getIndexToID = function (t, n) {
            switch (n) {
              case "campaign":
                return r(
                  "AdsPECampaignGroupVisibleIDsSelectors",
                ).idForIndexSelector(t);
              case "ad_set":
                return r("AdsPECampaignVisibleIDsSelectors").idForIndexSelector(
                  t,
                );
              case "ad":
                return r("AdsPEAdgroupVisibleIDsSelectors").idForIndexSelector(
                  t,
                );
            }
            return null;
          }),
          (n.getDraftIDsFrom = function (t, n) {
            switch (t) {
              case "campaign":
                return n.filter(function (e) {
                  return r("AdsCampaignGroupDraftFragmentStore").isNew(e);
                });
              case "ad_set":
                return n.filter(function (e) {
                  return r("AdsCampaignDraftFragmentStore").isNew(e);
                });
              case "ad":
                return n.filter(function (e) {
                  return r("AdsAdgroupDraftFragmentStore").isNew(e);
                });
            }
            return [];
          }),
          (n.updateRouterWithoutAllGivenIDs = function (n, a, i, l) {
            var t = o(
                "adsMgmtCampaignGroupSelectedIdsSelector",
              ).adsMgmtCampaignGroupSelectedIdsSelector(),
              s = o(
                "adsMgmtCampaignSelectedIdsSelector",
              ).adsMgmtCampaignSelectedIdsSelector(),
              u = r("adsMgmtAdgroupSelectionSelector")();
            r("AdsInterfacesRouter")
              .get()
              .updateParams(
                {
                  selected_campaign_ids: t.filter(function (t) {
                    return n.indexOf(t) === e;
                  }),
                  selected_adset_ids: s.filter(function (t) {
                    return a.indexOf(t) === e;
                  }),
                  selected_ad_ids: u.filter(function (t) {
                    return i.indexOf(t) === e;
                  }),
                },
                { replaceState: !0, onComplete: l },
              );
          }),
          (n.updateRouterWithNewIDsBasedOnDirection = function (t, n, o, a) {
            var e = n ? -1 : 1,
              i = this.$2(),
              l = (i != null && this.getIDToIndex(i, t)) || 0,
              s = l + e,
              u = this.$5(s, t);
            u != null &&
              this.updateRouterWithNewIDsDependingOnType(
                u.objectLevel,
                u.id,
                o
                  ? r("AdsPESelectionClickTypes").MULTI
                  : r("AdsPESelectionClickTypes").SINGLE,
                a,
              );
          }),
          (n.updateRouterWithNewIDsDependingOnType = function (t, n, o, a) {
            e: {
              if (o === r("AdsPESelectionClickTypes").SINGLE) {
                (this.$3(n), this.updateRouterWithNewSelectedIDsFor(t, [n], a));
                break e;
              }
              {
                this.updateRouterWithNewIDsFor(t, n, o, a);
                break e;
              }
            }
          }),
          (n.updateRouterWithNewIDsFor = function (t, n, r, a) {
            var e = t,
              i = [];
            if (e === t)
              switch (e) {
                case "campaign":
                  i = o(
                    "adsMgmtCampaignGroupSelectedIdsSelector",
                  ).adsMgmtCampaignGroupSelectedIdsSelector();
                  break;
                case "ad_set":
                  i = o(
                    "adsMgmtCampaignSelectedIdsSelector",
                  ).adsMgmtCampaignSelectedIdsSelector();
                  break;
                case "ad":
                  i = o(
                    "adsMgmtAdgroupSelectedIdsSelector",
                  ).adsMgmtAdgroupSelectedIdsSelector();
                  break;
              }
            var l = this.getNewIDs(i, n, r, t);
            this.updateRouterWithNewSelectedIDsFor(t, l, a);
          }),
          (n.updateRouterWithVisibleIDsIfSelected = function (t, n, o) {
            var e,
              a = [];
            if (n)
              switch (t) {
                case "campaign":
                  a = r(
                    "AdsPECampaignGroupVisibleIDsSelectors",
                  ).visibleIDsSelector();
                  break;
                case "ad_set":
                  a = r(
                    "AdsPECampaignVisibleIDsSelectors",
                  ).visibleIDsSelector();
                  break;
                case "ad":
                  a = r("AdsPEAdgroupVisibleIDsSelectors").visibleIDsSelector();
                  break;
              }
            r("AdsInterfacesRouter")
              .get()
              .updateParams(((e = {}), (e[this.$6(t)] = a), e), {
                replaceState: !0,
                onComplete: o,
              });
          }),
          (n.updateRouterWithResetIDs = function (t) {
            var e;
            r("AdsInterfacesRouter")
              .get()
              .updateParams(
                ((e = {}),
                (e[this.$6("campaign")] = []),
                (e[this.$6("ad_set")] = []),
                (e[this.$6("ad")] = []),
                e),
                { replaceState: !0, onComplete: t },
              );
          }),
          (n.updateRouterWithNewSelectedIDsFor = function (t, n, o) {
            var e = babelHelpers.extends(
              {},
              this.getNewIDsDependingOnCurrentLevel(t, n),
              this.clearAllChildrenPageIDs(t),
            );
            r("AdsInterfacesRouter")
              .get()
              .updateParams(e, { replaceState: !0, onComplete: o });
          }),
          (n.updateRouterWithNoSelectedIDsWhenChangingPage = function (
            t,
            n,
            o,
          ) {
            var e,
              a = null;
            switch (t) {
              case "campaign":
                a = r(
                  "AdsPECampaignGroupTablePagingSelectors",
                ).getCurrentPageSelector();
                break;
              case "ad_set":
                a = r(
                  "AdsPECampaignTablePagingSelectors",
                ).getCurrentPageSelector();
                break;
              case "ad":
                a = r(
                  "AdsPEAdgroupTablePagingSelectors",
                ).getCurrentPageSelector();
                break;
            }
            ((a = (a || 0) + (n ? 1 : -1)),
              r("AdsInterfacesRouter")
                .get()
                .updateParams(
                  ((e = {}), (e[this.$6(t)] = []), (e[this.$7(t)] = a), e),
                  { replaceState: !0, onComplete: o },
                ));
          }),
          (n.clearAllChildrenPageIDs = function (t) {
            e: return t === "campaign"
              ? { adset_page_id: 0, ad_page_id: 0 }
              : t === "ad_set"
                ? { ad_page_id: 0 }
                : {};
          }),
          (n.$7 = function (t) {
            return t === "campaign"
              ? "campaign_page_id"
              : t === "ad_set"
                ? "adset_page_id"
                : t === "ad"
                  ? "ad_page_id"
                  : t === "unique_adcreative"
                    ? "creative_page_id"
                    : s(!1, "Not an acceptable object level: %s", t);
          }),
          (n.$6 = function (t) {
            return t === "campaign"
              ? "selected_campaign_ids"
              : t === "ad_set"
                ? "selected_adset_ids"
                : t === "ad"
                  ? "selected_ad_ids"
                  : t === "unique_adcreative"
                    ? "selected_unique_adcreative_ids"
                    : s(!1, "Not an acceptable object level: %s", t);
          }),
          (n.$4 = function (t, n, r, o) {
            var e = this,
              a = (r != null && this.getIDToIndex(r, o)) || 0,
              i = this.getIDToIndex(n, o) || 0,
              l = this.$8(
                t.map(function (t) {
                  return e.getIDToIndex(t, o) || 0;
                }),
                i,
                a,
              );
            return l
              .map(function (t) {
                return e.getIndexToID(t, o);
              })
              .filter(Boolean);
          }),
          (n.$2 = function () {
            return this.$1;
          }),
          (n.$3 = function (t) {
            this.$1 = t;
          }),
          (n.$8 = function (t, n, r) {
            r === void 0 && (r = n);
            var e = r < n ? [r, n] : [n, r],
              o = e[0],
              a = e[1],
              i = t.filter(function (e) {
                return o > e || e > a;
              });
            return t.includes(n)
              ? i.concat([n])
              : i.concat(
                  Array.from(Array(a - o + 1).keys()).map(function (e) {
                    return e + o;
                  }),
                );
          }),
          (n.$5 = function (t, n) {
            var e = this.getIndexToID(t, n);
            if (e != null) {
              var a = r("adsMgmtAdsObjectTypeByIdSelector")(e);
              if (a != null) {
                var i = r("nullthrows")(
                  o("AdsObjectTypeUtils").toObjectLevel(a),
                );
                return { id: e, objectLevel: i };
              }
            }
          }),
          t
        );
      })(),
      c = new u();
    l.default = c;
  },
  98,
);
