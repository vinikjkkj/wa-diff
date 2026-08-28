__d(
  "AdsPEBaseAvailableIDStore",
  [
    "AdDraftPublishStatuses",
    "AdsAccountStore",
    "AdsAdgroupDraftFragmentStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsDataAtom",
    "AdsDraftDraftPublishCompletedDataActionFlux",
    "AdsDraftDraftPublishFailedErrorDataActionFlux",
    "AdsMgmt2026H1LBRExperimentUtils",
    "AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils",
    "AdsPEAvailableIDStoreUtil",
    "AdsPEFilterAppliedActionFlux",
    "AdsPEFilteredDraftFragmentStore",
    "AdsPEInstantDeleteActionFlux",
    "AdsPESortLiveUtils",
    "AdsSettingsAdsSettingsLoadedActionFlux",
    "AdsSettingsAdsSettingsUpdatedActionFlux",
    "DateConsts",
    "DateTime",
    "FluxStore",
    "Instant",
    "abstractMethod",
    "adsCreateStoreSelector",
    "adsMgmtPinnedAdObjectIDsExperimentSelector",
    "expectationViolation",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "AdsPEBaseAvailableIDStore",
      u = 200,
      c = 21;
    function d(e) {
      var t = [
          ["campaignGroup", r("AdsCampaignGroupDraftFragmentStore")],
          ["campaign", r("AdsCampaignDraftFragmentStore")],
          ["adgroup", r("AdsAdgroupDraftFragmentStore")],
        ],
        n = [],
        o = function () {
          var t = a[0],
            r = a[1];
          r.getFragmentsInDraftFor(e).forEach(function (e, r) {
            if (e.hasValue()) {
              var o = e.getValueEnforcing();
              n.push({
                level: t,
                objectID: r,
                parentID: o.parentAdObjectID,
                timeUpdated: o.timeUpdated,
              });
            }
          });
        };
      for (var a of t) o();
      return n;
    }
    var m = (function (t) {
      function n() {
        var n;
        return (
          (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
          (n.getAvailableIDs = r("adsCreateStoreSelector")(
            [n],
            function () {
              return n.__getAvailableIDsImpl();
            },
            { name: i.id },
          )),
          (n.getAvailableCount = r("adsCreateStoreSelector")(
            [n],
            function () {
              return n.__getAvailableCountImpl();
            },
            { name: i.id },
          )),
          (n.getCreatedCount = r("adsCreateStoreSelector")(
            [n],
            function () {
              return n.$AdsPEBaseAvailableIDStore$p_2.size;
            },
            { name: i.id },
          )),
          n.$AdsPEBaseAvailableIDStore$p_15(),
          n
        );
      }
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.$AdsPEBaseAvailableIDStore$p_16 = function () {
          if (this.$AdsPEBaseAvailableIDStore$p_13 == null) {
            var e,
              t,
              n = this.__getSortInfoSelector().getStores(),
              o =
                (e =
                  (t = this.__getCombinedErrorsForAdAccountSelector()) == null
                    ? void 0
                    : t.getStores()) != null
                  ? e
                  : [];
            this.$AdsPEBaseAvailableIDStore$p_13 = [
              r("AdsAccountStore").getDispatchToken(),
              r("AdsPEFilteredDraftFragmentStore").getDispatchToken(),
              r("AdsCampaignGroupDraftFragmentStore").getDispatchToken(),
              r("AdsCampaignDraftFragmentStore").getDispatchToken(),
              r("AdsAdgroupDraftFragmentStore").getDispatchToken(),
            ]
              .concat(
                n.map(function (e) {
                  return e.getDispatchToken();
                }),
                o.map(function (e) {
                  return e.getDispatchToken();
                }),
                r("adsMgmtPinnedAdObjectIDsExperimentSelector")
                  .getStores()
                  .map(function (e) {
                    return e.getDispatchToken();
                  }),
              )
              .filter(Boolean);
          }
          return this.$AdsPEBaseAvailableIDStore$p_13;
        }),
        (a.$AdsPEBaseAvailableIDStore$p_15 = function () {
          var e;
          ((this.$AdsPEBaseAvailableIDStore$p_1 = (e =
            r("immutable")).OrderedSet()),
            (this.$AdsPEBaseAvailableIDStore$p_2 = e.OrderedSet()),
            (this.$AdsPEBaseAvailableIDStore$p_3 = e.Set()),
            (this.$AdsPEBaseAvailableIDStore$p_5 = e.Set()),
            (this.$AdsPEBaseAvailableIDStore$p_4 = !1),
            (this.$AdsPEBaseAvailableIDStore$p_7 = e.OrderedSet()),
            (this.$AdsPEBaseAvailableIDStore$p_8 = null),
            (this.$AdsPEBaseAvailableIDStore$p_9 = null),
            (this.$AdsPEBaseAvailableIDStore$p_11 = 0),
            (this.$AdsPEBaseAvailableIDStore$p_6 = 0),
            (this.$AdsPEBaseAvailableIDStore$p_10 = null),
            (this.$AdsPEBaseAvailableIDStore$p_12 = null));
        }),
        (a.$AdsPEBaseAvailableIDStore$p_17 = function () {
          var e = this.$AdsPEBaseAvailableIDStore$p_10,
            t =
              this.$AdsPEBaseAvailableIDStore$p_2.size > 0 &&
              o("AdsPESortLiveUtils").isSortByDeliveryInfoDescending(e) &&
              o(
                "AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils",
              ).getDraftBehaviorVariantForAccount() !==
                o("AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils")
                  .AdsInsightsDraftBehaviorVariant.CONTROL,
            n;
          if (t)
            n = this.$AdsPEBaseAvailableIDStore$p_1
              .union(this.$AdsPEBaseAvailableIDStore$p_7)
              .union(this.$AdsPEBaseAvailableIDStore$p_2.reverse())
              .subtract(this.$AdsPEBaseAvailableIDStore$p_3);
          else {
            var a = this.$AdsPEBaseAvailableIDStore$p_18(),
              i = a.oldDrafts,
              l = a.recentDrafts;
            n = l
              .reverse()
              .union(this.$AdsPEBaseAvailableIDStore$p_7)
              .union(this.$AdsPEBaseAvailableIDStore$p_1)
              .union(i.reverse())
              .subtract(this.$AdsPEBaseAvailableIDStore$p_3);
          }
          var s = this.__getDraftFragmentStore(),
            u = this.__getCombinedErrorsForAdAccountSelector();
          (this.__getAdLevel() !== "adgroup" &&
            this.__getAdLevel() !== "campaign" &&
            ((!s && u) || (s && !u)) &&
            r("expectationViolation")(
              "Should define both DraftFragementStore and combinedErrorsForSelector",
            ),
            e &&
              s &&
              u &&
              (n = o("AdsPEAvailableIDStoreUtil").sortDraftFragments(
                this.$AdsPEBaseAvailableIDStore$p_12,
                e,
                n,
                s,
                u,
              )),
            (this.$AdsPEBaseAvailableIDStore$p_14 = n),
            (n = this.$AdsPEBaseAvailableIDStore$p_19(
              n,
              this.$AdsPEBaseAvailableIDStore$p_5,
            )),
            (this.$AdsPEBaseAvailableIDStore$p_8 = n.toArray()));
        }),
        (a.$AdsPEBaseAvailableIDStore$p_18 = function () {
          return (
            this.$AdsPEBaseAvailableIDStore$p_9 == null &&
              (this.$AdsPEBaseAvailableIDStore$p_9 =
                this.$AdsPEBaseAvailableIDStore$p_20()),
            this.$AdsPEBaseAvailableIDStore$p_9
          );
        }),
        (a.$AdsPEBaseAvailableIDStore$p_20 = function () {
          var e = this.__getDraftFragmentStore(),
            t = this.$AdsPEBaseAvailableIDStore$p_12;
          if (
            this.$AdsPEBaseAvailableIDStore$p_2.size === 0 ||
            e == null ||
            t == null ||
            !o(
              "AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils",
            ).getIsAccountInDraftAgeSplit()
          )
            return {
              oldDrafts: r("immutable").OrderedSet(),
              recentDrafts: this.$AdsPEBaseAvailableIDStore$p_2,
            };
          var n = r("AdsAccountStore").getTimezoneID(),
            a = r("DateTime").create(
              o("Instant").now() - c * o("DateConsts").SEC_PER_DAY,
              n,
            );
          return o(
            "AdsPEAvailableIDStoreUtil",
          ).partitionDraftsByCampaignFamilyRecency(
            this.$AdsPEBaseAvailableIDStore$p_2,
            d(t),
            a,
          );
        }),
        (a.getCreatedIDsPartitionedByAge = function () {
          return this.$AdsPEBaseAvailableIDStore$p_18();
        }),
        (a.$AdsPEBaseAvailableIDStore$p_19 = function (t, n) {
          var e = t;
          if (!n.isEmpty()) {
            var r = e.intersect(n);
            e = r.concat(e);
          }
          return e;
        }),
        (a.__getAvailableIDsImpl = function () {
          return (
            this.$AdsPEBaseAvailableIDStore$p_8 ||
              this.$AdsPEBaseAvailableIDStore$p_17(),
            r("nullthrows")(this.$AdsPEBaseAvailableIDStore$p_8)
          );
        }),
        (a.__getAvailableCountImpl = function () {
          return (
            this.$AdsPEBaseAvailableIDStore$p_11 +
            this.$AdsPEBaseAvailableIDStore$p_2.size +
            this.$AdsPEBaseAvailableIDStore$p_7.size -
            this.$AdsPEBaseAvailableIDStore$p_6
          );
        }),
        (a.getCreatedIDSet = function () {
          return this.$AdsPEBaseAvailableIDStore$p_2;
        }),
        (a.getPinnedAdObjectIDs = function () {
          return this.$AdsPEBaseAvailableIDStore$p_5;
        }),
        (a.__getAdLevel = function () {
          return r("abstractMethod")(s, "__getAdLevel");
        }),
        (a.__getIDKey = function () {
          return r("abstractMethod")(s, "__getIDKey");
        }),
        (a.__getObjectLevel = function () {
          return r("abstractMethod")(s, "__getObjectLevel");
        }),
        (a.__getDraftFragmentStore = function () {
          return r("abstractMethod")(s, "__getDraftFragmentStore");
        }),
        (a.__getSortInfoSelector = function () {
          return r("abstractMethod")(s, "__getSortInfoSelector");
        }),
        (a.__getCombinedErrorsForAdAccountSelector = function () {
          return r("abstractMethod")(
            s,
            "__getCombinedErrorsForAdAccountSelector",
          );
        }),
        (a.__handleDeletionStart = function (t) {
          return r("abstractMethod")(s, "__handleDeletionStart");
        }),
        (a.__onDispatch = function (n) {
          var t,
            a,
            i = n.action,
            l = this.__getSortInfoSelector().getStores(),
            s =
              (t =
                (a = this.__getCombinedErrorsForAdAccountSelector()) == null
                  ? void 0
                  : a.getStores()) != null
                ? t
                : [];
          switch (
            ((e || (e = r("AdsDataAtom"))).waitFor(
              this.$AdsPEBaseAvailableIDStore$p_16(),
            ),
            i.type)
          ) {
            case o("AdsPEFilterAppliedActionFlux").actionType:
              this.$AdsPEBaseAvailableIDStore$p_21(
                i.filteredIDs,
                i.totalCounts,
              );
              break;
            case o("AdsPEInstantDeleteActionFlux").actionType:
              this.__handleDeletionStart(i);
              break;
            case o("AdsDraftDraftPublishCompletedDataActionFlux").actionType:
              (i.response && this.$AdsPEBaseAvailableIDStore$p_22(i.response),
                this.$AdsPEBaseAvailableIDStore$p_23());
              break;
            case o("AdsDraftDraftPublishFailedErrorDataActionFlux").actionType:
              this.$AdsPEBaseAvailableIDStore$p_24();
              break;
            case r("AdsSettingsAdsSettingsLoadedActionFlux").actionType:
            case r("AdsSettingsAdsSettingsUpdatedActionFlux").actionType:
              this.$AdsPEBaseAvailableIDStore$p_25();
              break;
          }
          (r("AdsAccountStore").hasChanged() ||
            this.$AdsPEBaseAvailableIDStore$p_12 == null) &&
            this.$AdsPEBaseAvailableIDStore$p_26();
          var u = !1;
          (r("AdsPEFilteredDraftFragmentStore").hasChanged() &&
            (u = this.$AdsPEBaseAvailableIDStore$p_27()),
            !u &&
              (r("AdsCampaignGroupDraftFragmentStore").hasChanged() ||
                r("AdsCampaignDraftFragmentStore").hasChanged() ||
                r("AdsAdgroupDraftFragmentStore").hasChanged()) &&
              this.$AdsPEBaseAvailableIDStore$p_2.size > 0 &&
              o(
                "AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils",
              ).getIsAccountInDraftAgeSplit() &&
              (this.$AdsPEBaseAvailableIDStore$p_28(), this.__emitChange()),
            l.some(function (e) {
              return e.hasChanged();
            }) && this.$AdsPEBaseAvailableIDStore$p_29(),
            s.some(function (e) {
              return e.hasChanged();
            }) &&
              this.$AdsPEBaseAvailableIDStore$p_10 != null &&
              o("AdsPESortLiveUtils").isSortByError(
                this.$AdsPEBaseAvailableIDStore$p_10,
              ) &&
              (this.$AdsPEBaseAvailableIDStore$p_28(), this.__emitChange()));
        }),
        (a.__updateDeletedIDList = function (t) {
          var e = r("immutable").Set(t);
          this.$AdsPEBaseAvailableIDStore$p_3.equals(e) ||
            (this.$AdsPEBaseAvailableIDStore$p_30(),
            (this.$AdsPEBaseAvailableIDStore$p_3 =
              this.$AdsPEBaseAvailableIDStore$p_3.concat(e)),
            this.$AdsPEBaseAvailableIDStore$p_31(),
            this.$AdsPEBaseAvailableIDStore$p_28(),
            this.__emitChange());
        }),
        (a.$AdsPEBaseAvailableIDStore$p_26 = function () {
          var e = r("AdsAccountStore").getSelectedAccountID();
          e !== this.$AdsPEBaseAvailableIDStore$p_12 &&
            (this.$AdsPEBaseAvailableIDStore$p_15(),
            (this.$AdsPEBaseAvailableIDStore$p_12 = e),
            this.__emitChange());
        }),
        (a.$AdsPEBaseAvailableIDStore$p_29 = function () {
          var e = this.__getSortInfoSelector()();
          r("immutable").is(this.$AdsPEBaseAvailableIDStore$p_10, e) ||
            (this.$AdsPEBaseAvailableIDStore$p_10 == null &&
              !o("AdsPESortLiveUtils").isSortByError(e) &&
              !o("AdsPESortLiveUtils").isSortByChanged(e) &&
              !(
                o("AdsPESortLiveUtils").isSortByDeliveryInfoDescending(e) &&
                o(
                  "AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils",
                ).getDraftBehaviorVariantForAccount() !==
                  o("AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils")
                    .AdsInsightsDraftBehaviorVariant.CONTROL
              )) ||
            ((this.$AdsPEBaseAvailableIDStore$p_10 = e),
            this.$AdsPEBaseAvailableIDStore$p_28(),
            this.__emitChange());
        }),
        (a.$AdsPEBaseAvailableIDStore$p_27 = function () {
          var e = this.__getAdLevel(),
            t = !1,
            n = r("AdsPEFilteredDraftFragmentStore").getFilteredDraftIDsByLevel(
              e,
            ),
            o = r(
              "AdsPEFilteredDraftFragmentStore",
            ).getNonDraftParentIDsByLevel(e);
          return (
            this.$AdsPEBaseAvailableIDStore$p_2.equals(n) ||
              ((this.$AdsPEBaseAvailableIDStore$p_2 = n), (t = !0)),
            this.$AdsPEBaseAvailableIDStore$p_7.equals(o) ||
              ((this.$AdsPEBaseAvailableIDStore$p_7 = o), (t = !0)),
            t && (this.$AdsPEBaseAvailableIDStore$p_28(), this.__emitChange()),
            t
          );
        }),
        (a.$AdsPEBaseAvailableIDStore$p_28 = function () {
          ((this.$AdsPEBaseAvailableIDStore$p_8 = null),
            (this.$AdsPEBaseAvailableIDStore$p_9 = null),
            (this.$AdsPEBaseAvailableIDStore$p_14 = null));
        }),
        (a.$AdsPEBaseAvailableIDStore$p_31 = function () {
          var e = this;
          this.$AdsPEBaseAvailableIDStore$p_6 =
            this.$AdsPEBaseAvailableIDStore$p_3.filter(function (t) {
              return e.$AdsPEBaseAvailableIDStore$p_1
                .union(e.$AdsPEBaseAvailableIDStore$p_2)
                .union(e.$AdsPEBaseAvailableIDStore$p_7)
                .contains(t);
            }).size;
        }),
        (a.$AdsPEBaseAvailableIDStore$p_21 = function (t, n) {
          var e = !1,
            r = !1,
            o = this.$AdsPEBaseAvailableIDStore$p_32(t) || [],
            a = this.$AdsPEBaseAvailableIDStore$p_33(n);
          ((!(o.length === 0 && a != null && a > 0) || n == null) &&
            (e = this.$AdsPEBaseAvailableIDStore$p_34(o)),
            (r = this.$AdsPEBaseAvailableIDStore$p_35(a, o)),
            (e || r) && this.__emitChange());
        }),
        (a.$AdsPEBaseAvailableIDStore$p_33 = function (t) {
          return t[this.__getAdLevel()];
        }),
        (a.$AdsPEBaseAvailableIDStore$p_32 = function (t) {
          var e = this.__getObjectLevel(),
            n = this.__getIDKey();
          return Object.prototype.hasOwnProperty.call(t, e)
            ? t[e]
            : Object.prototype.hasOwnProperty.call(t, n)
              ? t[n]
              : null;
        }),
        (a.$AdsPEBaseAvailableIDStore$p_34 = function (t) {
          var e = r("immutable").OrderedSet(t);
          return this.$AdsPEBaseAvailableIDStore$p_1.equals(e)
            ? !1
            : (this.$AdsPEBaseAvailableIDStore$p_4 ||
                this.$AdsPEBaseAvailableIDStore$p_36(),
              (this.$AdsPEBaseAvailableIDStore$p_1 = e),
              this.$AdsPEBaseAvailableIDStore$p_31(),
              this.$AdsPEBaseAvailableIDStore$p_28(),
              !0);
        }),
        (a.$AdsPEBaseAvailableIDStore$p_35 = function (t, n) {
          return t === this.$AdsPEBaseAvailableIDStore$p_11
            ? !1
            : t == null
              ? (n.length <= u || this.$AdsPEBaseAvailableIDStore$p_11 <= u) &&
                o(
                  "AdsMgmt2026H1LBRExperimentUtils",
                ).getIsAccountInLightEdgeSummaryOptimizationTestGroupWithoutExposure()
                ? ((this.$AdsPEBaseAvailableIDStore$p_11 = n.length), !0)
                : !1
              : ((this.$AdsPEBaseAvailableIDStore$p_11 = t), !0);
        }),
        (a.$AdsPEBaseAvailableIDStore$p_22 = function (t) {
          var e = t.status;
          e === r("AdDraftPublishStatuses").FAILED
            ? this.$AdsPEBaseAvailableIDStore$p_24()
            : this.$AdsPEBaseAvailableIDStore$p_23();
        }),
        (a.$AdsPEBaseAvailableIDStore$p_24 = function () {
          (this.$AdsPEBaseAvailableIDStore$p_23(),
            this.$AdsPEBaseAvailableIDStore$p_36(),
            this.$AdsPEBaseAvailableIDStore$p_28(),
            this.__emitChange());
        }),
        (a.$AdsPEBaseAvailableIDStore$p_30 = function () {
          this.$AdsPEBaseAvailableIDStore$p_4 ||
            (this.$AdsPEBaseAvailableIDStore$p_4 = !0);
        }),
        (a.$AdsPEBaseAvailableIDStore$p_23 = function () {
          this.$AdsPEBaseAvailableIDStore$p_4 &&
            (this.$AdsPEBaseAvailableIDStore$p_4 = !1);
        }),
        (a.$AdsPEBaseAvailableIDStore$p_36 = function () {
          this.$AdsPEBaseAvailableIDStore$p_3.size !== 0 &&
            ((this.$AdsPEBaseAvailableIDStore$p_3 = r("immutable").Set()),
            this.$AdsPEBaseAvailableIDStore$p_31());
        }),
        (a.$AdsPEBaseAvailableIDStore$p_25 = function () {
          var e = r("adsMgmtPinnedAdObjectIDsExperimentSelector")(),
            t = this.$AdsPEBaseAvailableIDStore$p_5;
          if (!t.equals(e)) {
            this.$AdsPEBaseAvailableIDStore$p_5 = e;
            var n = this.$AdsPEBaseAvailableIDStore$p_14;
            if (n != null && e.subtract(t).size === 1) {
              var o = this.$AdsPEBaseAvailableIDStore$p_19(
                n,
                this.$AdsPEBaseAvailableIDStore$p_5,
              );
              this.$AdsPEBaseAvailableIDStore$p_8 = o.toArray();
            } else this.$AdsPEBaseAvailableIDStore$p_28();
            this.__emitChange();
          }
        }),
        n
      );
    })(r("FluxStore"));
    ((m.__moduleID = i.id), (l.default = m));
  },
  98,
);
