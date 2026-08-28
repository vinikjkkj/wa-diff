__d(
  "AdsPEFilteredDraftFragmentStore",
  [
    "ActionFilterUtils",
    "AdFLEXPreloaderFilterConfig",
    "AdsAccountStore",
    "AdsAdgroupCombinedStore",
    "AdsAdgroupDraftFragmentStore",
    "AdsCampaignCombinedStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupCombinedStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsDataAtom",
    "AdsDraftSelectionStore",
    "AdsGenericFilterSet",
    "AdsGenericFilterSetUtil",
    "AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils",
    "AdsPEAdgroupNewlyCreatedIDStore",
    "AdsPECampaignGroupNewlyCreatedIDStore",
    "AdsPECampaignNewlyCreatedIDStore",
    "AdsPEFilterAndSortProvider",
    "AdsPEFilterIdsVerifiedActionFlux",
    "AdsPEFilterLiveDataManager",
    "AdsPEFilterSetToAPIUtil",
    "AdsTableInteractionStartActionFlux",
    "FluxStore",
    "adsCreateStoreSelector",
    "adsMgmtFilterAdjustedForParentSelectionForCurrentLevelSelector",
    "adsPEManageAdsSectionSelector",
    "applyFilterFunctionsToAdObjects",
    "createLevelFiltersFromFilterSet",
    "filterObjectsWithoutChildren",
    "filterObjectsWithoutParents",
    "forEachObject",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("AdsPEFilterAndSortProvider").toFluxStore(),
      u = ["campaignGroup", "campaign", "adgroup"],
      c = [
        r("AdsAccountStore"),
        r("AdsAdgroupDraftFragmentStore"),
        r("AdsCampaignDraftFragmentStore"),
        r("AdsCampaignGroupDraftFragmentStore"),
        r("AdsPEAdgroupNewlyCreatedIDStore"),
        r("AdsPECampaignNewlyCreatedIDStore"),
        r("AdsPECampaignGroupNewlyCreatedIDStore"),
      ],
      d = c.map(function (e) {
        return e.getDispatchToken();
      }),
      m = r("immutable").Map([
        ["campaignGroup", r("AdsCampaignGroupCombinedStore")],
        ["campaign", r("AdsCampaignCombinedStore")],
        ["adgroup", r("AdsAdgroupCombinedStore")],
      ]),
      p = r("immutable").Map([
        ["campaignGroup", r("AdsPECampaignGroupNewlyCreatedIDStore")],
        ["campaign", r("AdsPECampaignNewlyCreatedIDStore")],
        ["adgroup", r("AdsPEAdgroupNewlyCreatedIDStore")],
      ]),
      _ = r("immutable").Map([
        ["campaignGroup", r("AdsCampaignGroupDraftFragmentStore")],
        ["campaign", r("AdsCampaignDraftFragmentStore")],
        ["adgroup", r("AdsAdgroupDraftFragmentStore")],
      ]),
      f = [
        "CAMPAIGN_GROUP_DELIVERY_STATUS",
        "CAMPAIGN_DELIVERY_STATUS",
        "ADGROUP_DELIVERY_STATUS",
      ],
      g = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.getFilteredDraftIDs = r("adsCreateStoreSelector")(
              [n],
              function () {
                return n.$AdsPEFilteredDraftFragmentStore$p_2;
              },
              { name: i.id },
            )),
            (n.$AdsPEFilteredDraftFragmentStore$p_2 =
              n.$AdsPEFilteredDraftFragmentStore$p_6()),
            (n.$AdsPEFilteredDraftFragmentStore$p_3 =
              n.$AdsPEFilteredDraftFragmentStore$p_6()),
            (n.$AdsPEFilteredDraftFragmentStore$p_1 =
              n.$AdsPEFilteredDraftFragmentStore$p_6()),
            (n.$AdsPEFilteredDraftFragmentStore$p_4 = r(
              "adsMgmtFilterAdjustedForParentSelectionForCurrentLevelSelector",
            )()),
            (n.$AdsPEFilteredDraftFragmentStore$p_5 = r(
              "adsPEManageAdsSectionSelector",
            )()),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getFilteredDraftIDsByLevel = function (t) {
            return (
              this.$AdsPEFilteredDraftFragmentStore$p_2[t] ||
              r("immutable").OrderedSet()
            );
          }),
          (a.getNonDraftParentIDsByLevel = function (t) {
            return (
              this.$AdsPEFilteredDraftFragmentStore$p_3[t] ||
              r("immutable").OrderedSet()
            );
          }),
          (a.__onDispatch = function (n) {
            var t = n.action;
            if (t.type !== o("AdsTableInteractionStartActionFlux").actionType) {
              if (t.type === o("AdsPEFilterIdsVerifiedActionFlux").actionType) {
                this.reconcileFilteredDrafts(
                  t.idsByLevel,
                  t.partiallyFilteredObjects,
                );
                return;
              }
              (e || (e = r("AdsDataAtom"))).waitFor(d);
              var a = r("AdsAccountStore").getSelectedAccountID();
              a == null ||
                a === "" ||
                (this.$AdsPEFilteredDraftFragmentStore$p_7(a) &&
                  this.$AdsPEFilteredDraftFragmentStore$p_8(a));
            }
          }),
          (a.$AdsPEFilteredDraftFragmentStore$p_9 = function (t, n) {
            var e = ["campaignGroup", "campaign", "adgroup"];
            return e.every(function (e) {
              return t[e].equals(n[e]);
            });
          }),
          (a.$AdsPEFilteredDraftFragmentStore$p_10 = function (t) {
            if (!t) return [];
            var e =
              t == null
                ? void 0
                : t.values.filter(function (e) {
                    return (
                      (f.includes(e.field.name) && e.operator === "NOT_IN") ||
                      e.field.name === "IS_MESSAGE_CAMPAIGN" ||
                      (o("ActionFilterUtils").ACTION_FILTER_TYPES_LIST.includes(
                        e.field.name,
                      ) &&
                        e.operator === "ANY" &&
                        Array.isArray(e.value) &&
                        e.value.length === 1 &&
                        o("ActionFilterUtils").RECOMMENDATION_FILTER_VALUES.has(
                          e.value[0],
                        ))
                    );
                  });
            return e;
          }),
          (a.$AdsPEFilteredDraftFragmentStore$p_8 = function (t) {
            var e = this.$AdsPEFilteredDraftFragmentStore$p_11(t),
              n,
              a,
              i,
              l = null;
            if (
              o(
                "AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils",
              ).getDraftBehaviorVariantForAccount() ===
              o("AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils")
                .AdsInsightsDraftBehaviorVariant.MOVE_AND_FILTER_DRAFTS
            )
              l = this.$AdsPEFilteredDraftFragmentStore$p_4;
            else {
              var s = this.$AdsPEFilteredDraftFragmentStore$p_10(
                this.$AdsPEFilteredDraftFragmentStore$p_4,
              );
              (s == null ? void 0 : s.length) > 0 &&
                (l = new (r("AdsGenericFilterSet"))(s));
            }
            if (!l) {
              this.$AdsPEFilteredDraftFragmentStore$p_9(
                this.$AdsPEFilteredDraftFragmentStore$p_2,
                e,
              ) ||
                ((this.$AdsPEFilteredDraftFragmentStore$p_2 = e),
                this.__emitChange());
              return;
            }
            var u = this.$AdsPEFilteredDraftFragmentStore$p_12(e),
              c = r("createLevelFiltersFromFilterSet")(l),
              d = this.$AdsPEFilteredDraftFragmentStore$p_13(u, c),
              m = r("filterObjectsWithoutChildren")(
                d.campaignGroup,
                d.campaign,
                d.adgroup,
                c,
              );
            ((i = m.filteredAdgroups),
              (n = m.filteredCampaignGroups),
              (a = m.filteredCampaigns));
            var p = this.$AdsPEFilteredDraftFragmentStore$p_14(n, a, i, u);
            ((i = p.filteredAdgroups),
              (n = p.filteredCampaignGroups),
              (a = p.filteredCampaigns));
            var _ = this.$AdsPEFilteredDraftFragmentStore$p_15(n, a, i);
            (r("AdsPEFilterLiveDataManager").checkFilteredIDs(
              t,
              r("AdsDraftSelectionStore").getCached(t),
              c,
              l,
              _,
              { campaignGroup: n, campaign: a, adgroup: i },
            ),
              this.__emitChange());
          }),
          (a.reconcileFilteredDrafts = function (t, n) {
            var e = n.campaignGroup,
              o = n.campaign,
              a = n.adgroup;
            ((t.campaign = this.$AdsPEFilteredDraftFragmentStore$p_16(t, a)),
              (e = e.concat(t.campaignGroup || [])),
              (o = o.concat(t.campaign || [])));
            var i = r("filterObjectsWithoutParents")(e, o, a);
            ((a = i.filteredAdgroups),
              (e = i.filteredCampaignGroups),
              (o = i.filteredCampaigns));
            var l = this.$AdsPEFilteredDraftFragmentStore$p_17(e, o);
            ((e = l.filteredCampaignGroups),
              (o = l.filteredCampaigns),
              (this.$AdsPEFilteredDraftFragmentStore$p_3 =
                this.$AdsPEFilteredDraftFragmentStore$p_18(t, o, a)));
            var s = this.$AdsPEFilteredDraftFragmentStore$p_14(e, o, a, n);
            ((a = s.filteredAdgroups),
              (e = s.filteredCampaignGroups),
              (o = s.filteredCampaigns),
              this.$AdsPEFilteredDraftFragmentStore$p_19(e, o, a),
              this.__emitChange());
          }),
          (a.$AdsPEFilteredDraftFragmentStore$p_14 = function (t, n, r, o) {
            return {
              filteredCampaignGroups:
                this.$AdsPEFilteredDraftFragmentStore$p_20(
                  t,
                  o.campaignGroup,
                  "campaignGroup",
                ),
              filteredCampaigns: this.$AdsPEFilteredDraftFragmentStore$p_20(
                n,
                o.campaign,
                "campaign",
              ),
              filteredAdgroups: this.$AdsPEFilteredDraftFragmentStore$p_20(
                r,
                o.adgroup,
                "adgroup",
              ),
            };
          }),
          (a.$AdsPEFilteredDraftFragmentStore$p_20 = function (t, n, r) {
            var e = p.get(r).getNewlyCreatedIDs();
            if (e.size === 0) return t;
            var o = t.map(function (e) {
                return e.id;
              }),
              a = e.subtract(o);
            if (a.size === 0) return t;
            var i = _.get(r),
              l = n.filter(function (e) {
                return a.has(e.id);
              });
            return t.concat(l).sort(function (e, t) {
              return i.getRaw(e.id).timeUpdated > i.getRaw(t.id).timeUpdated
                ? 1
                : -1;
            });
          }),
          (a.$AdsPEFilteredDraftFragmentStore$p_13 = function (t, n) {
            var e = {};
            return (
              u.forEach(function (o) {
                e[o] = r("applyFilterFunctionsToAdObjects")(
                  t[o],
                  n.getFiltersFor(o),
                );
              }),
              e
            );
          }),
          (a.$AdsPEFilteredDraftFragmentStore$p_15 = function (t, n, r) {
            var e = new Set(),
              o = new Set();
            return (
              n.forEach(function (t) {
                t.campaign_id && e.add(t.campaign_id);
              }),
              r.forEach(function (t) {
                (t.campaign_id && e.add(t.campaign_id),
                  t.adset_id && o.add(t.adset_id));
              }),
              t.forEach(function (t) {
                return e.delete(t.id);
              }),
              n.forEach(function (e) {
                return o.delete(e.id);
              }),
              { campaignGroup: e, campaign: o }
            );
          }),
          (a.$AdsPEFilteredDraftFragmentStore$p_17 = function (t, n) {
            var e = t.filter(function (e) {
                return r("AdsCampaignGroupDraftFragmentStore").isNew(e.id);
              }),
              o = n.filter(function (e) {
                return r("AdsCampaignDraftFragmentStore").isNew(e.id);
              });
            return { filteredCampaignGroups: e, filteredCampaigns: o };
          }),
          (a.$AdsPEFilteredDraftFragmentStore$p_16 = function (t, n) {
            return t.campaign.map(function (e) {
              var t = n.find(function (t) {
                return t.adset_id === e.id;
              });
              return t != null
                ? babelHelpers.extends({}, e, { campaign_id: t.campaign_id })
                : e;
            });
          }),
          (a.$AdsPEFilteredDraftFragmentStore$p_18 = function (t, n, o) {
            var e = new Set(),
              a = new Set();
            (t.campaignGroup.forEach(function (t) {
              e.add(t.id);
            }),
              t.campaign.forEach(function (e) {
                a.add(e.id);
              }));
            var i = new Set(),
              l = new Set();
            (t.campaignGroupMultiLevel.forEach(function (e) {
              i.add(e.id);
            }),
              t.campaignMultiLevel.forEach(function (e) {
                l.add(e.id);
              }));
            var s = new Set(),
              u = new Set();
            return (
              n.forEach(function (e) {
                r("AdsCampaignGroupDraftFragmentStore").isNew(e.campaign_id) ||
                  s.add(e.campaign_id);
              }),
              o.forEach(function (e) {
                (r("AdsCampaignGroupDraftFragmentStore").isNew(e.campaign_id) ||
                  s.add(e.campaign_id),
                  r("AdsCampaignDraftFragmentStore").isNew(e.adset_id) ||
                    u.add(e.adset_id));
              }),
              {
                campaignGroup: r("immutable")
                  .OrderedSet(e)
                  .subtract(i)
                  .intersect(s),
                campaign: r("immutable").OrderedSet(a).subtract(l).intersect(u),
              }
            );
          }),
          (a.$AdsPEFilteredDraftFragmentStore$p_19 = function (t, n, o) {
            this.$AdsPEFilteredDraftFragmentStore$p_2 = {
              campaignGroup: r("immutable").OrderedSet(
                t.map(function (e) {
                  return e.id;
                }),
              ),
              campaign: r("immutable").OrderedSet(
                n.map(function (e) {
                  return e.id;
                }),
              ),
              adgroup: r("immutable").OrderedSet(
                o.map(function (e) {
                  return e.id;
                }),
              ),
            };
          }),
          (a.$AdsPEFilteredDraftFragmentStore$p_7 = function (t) {
            var e =
                r("AdsAccountStore").hasChanged() ||
                this.$AdsPEFilteredDraftFragmentStore$p_21() ||
                this.$AdsPEFilteredDraftFragmentStore$p_22() ||
                this.$AdsPEFilteredDraftFragmentStore$p_23(),
              n = this.$AdsPEFilteredDraftFragmentStore$p_11(t),
              a = !this.$AdsPEFilteredDraftFragmentStore$p_9(
                this.$AdsPEFilteredDraftFragmentStore$p_1,
                n,
              );
            if ((a && (this.$AdsPEFilteredDraftFragmentStore$p_1 = n), e)) {
              var i,
                l = r(
                  "adsMgmtFilterAdjustedForParentSelectionForCurrentLevelSelector",
                )(),
                s =
                  r("AdFLEXPreloaderFilterConfig") == null ||
                  (i = r("AdFLEXPreloaderFilterConfig").get()) == null
                    ? void 0
                    : i.toolBasedFilter;
              (s != null &&
                r("gkx")("21201") &&
                (l = o("AdsPEFilterSetToAPIUtil").addFilterToFilterSet(s, l)),
                (this.$AdsPEFilteredDraftFragmentStore$p_4 = l),
                (this.$AdsPEFilteredDraftFragmentStore$p_5 = r(
                  "adsPEManageAdsSectionSelector",
                )()));
            }
            return e || a;
          }),
          (a.$AdsPEFilteredDraftFragmentStore$p_23 = function () {
            return (
              r("AdsPECampaignGroupNewlyCreatedIDStore").hasChanged() ||
              r("AdsPECampaignNewlyCreatedIDStore").hasChanged() ||
              r("AdsPEAdgroupNewlyCreatedIDStore").hasChanged()
            );
          }),
          (a.$AdsPEFilteredDraftFragmentStore$p_22 = function () {
            var e = r("adsPEManageAdsSectionSelector")();
            return (
              this.$AdsPEFilteredDraftFragmentStore$p_5 !== e &&
              (e === "L1" || e === "L2" || e === "L3")
            );
          }),
          (a.$AdsPEFilteredDraftFragmentStore$p_21 = function () {
            var e = r(
                "adsMgmtFilterAdjustedForParentSelectionForCurrentLevelSelector",
              )(),
              t = o("ActionFilterUtils").isRecommendationFilter(e),
              n = o("ActionFilterUtils").isDeliveryStatusNotInDraftsFilter(e),
              a = o("ActionFilterUtils").isDeliveryStatusNotInDraftsFilter(
                this.$AdsPEFilteredDraftFragmentStore$p_4,
              ),
              i = a && !n;
            return t
              ? s.getState().error == null
              : i || n
                ? !0
                : o(
                      "AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils",
                    ).getDraftBehaviorVariantForAccountWithoutExposure() ===
                    o("AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils")
                      .AdsInsightsDraftBehaviorVariant.MOVE_AND_FILTER_DRAFTS
                  ? e === null ||
                    !o("AdsGenericFilterSetUtil").completeMatchesExactly(
                      this.$AdsPEFilteredDraftFragmentStore$p_4,
                      e,
                    )
                  : e === null ||
                    (s.hasChanged() &&
                      s.getState().error == null &&
                      !o("AdsGenericFilterSetUtil").completeMatchesExactly(
                        this.$AdsPEFilteredDraftFragmentStore$p_4,
                        e,
                      ));
          }),
          (a.$AdsPEFilteredDraftFragmentStore$p_24 = function () {
            return { campaignGroup: [], campaign: [], adgroup: [] };
          }),
          (a.$AdsPEFilteredDraftFragmentStore$p_12 = function (t) {
            var e = this.$AdsPEFilteredDraftFragmentStore$p_24();
            return (
              r("forEachObject")(t, function (t, n) {
                e[n] = m
                  .get(n)
                  .getAllCachedObjects(t.toArray())
                  .map(function (e) {
                    return e.getValue();
                  })
                  .filter(Boolean)
                  .toArray();
              }),
              e
            );
          }),
          (a.$AdsPEFilteredDraftFragmentStore$p_11 = function (t) {
            return {
              campaignGroup: r(
                "AdsCampaignGroupDraftFragmentStore",
              ).getNewIDsFor(t),
              campaign: r("AdsCampaignDraftFragmentStore").getNewIDsFor(t),
              adgroup: r("AdsAdgroupDraftFragmentStore").getNewIDsFor(t),
            };
          }),
          (a.$AdsPEFilteredDraftFragmentStore$p_6 = function () {
            return {
              campaignGroup: r("immutable").OrderedSet(),
              campaign: r("immutable").OrderedSet(),
              adgroup: r("immutable").OrderedSet(),
            };
          }),
          n
        );
      })(r("FluxStore"));
    g.__moduleID = i.id;
    var h = new g();
    l.default = h;
  },
  98,
);
