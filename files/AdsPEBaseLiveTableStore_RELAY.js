__d(
  "AdsPEBaseLiveTableStore_RELAY",
  [
    "AdsDataAtom",
    "AdsDraftDraftPublishCompletedDataActionFlux",
    "AdsMgmtTableObjectFOR_TEST_ONLY_ActionFlux",
    "AdsObjectIDLevelRegistry",
    "AdsObjectTypes",
    "AdsPERefreshTableViewActionFlux",
    "AdsSelectorUtils",
    "AdsStoreReadIDLogger",
    "AdsStoreStrongIDUtils",
    "FBLogger",
    "FluxLoadObjectStore_RELAY",
    "LoadObject",
    "Random",
    "adsCampaignGroupBudgetBatchMutationSelector",
    "adsDraftGetIDsToInvalidateAfterPublish",
    "err",
    "forEachObject",
    "immutable",
    "isValidID",
    "memoizeWithArgsByKey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("Random").coinflip(10),
      c = {
        adgroup: r("AdsObjectTypes").ADGROUP,
        campaign: r("AdsObjectTypes").CAMPAIGN,
        campaignGroup: r("AdsObjectTypes").CAMPAIGN_GROUP,
      },
      d = (function (t) {
        function n(e) {
          var n;
          return (
            (n =
              t.call(this, s || (s = r("AdsDataAtom")), void 0, void 0, e) ||
              this),
            (n.$AdsPEBaseLiveTableStore_RELAY$p_9 = r("memoizeWithArgsByKey")(
              function (e) {
                return e.map(function (e) {
                  return n.__createRecord(e);
                });
              },
            )),
            (n.$AdsPEBaseLiveTableStore_RELAY$p_1 =
              r("immutable").OrderedSet()),
            (n.$AdsPEBaseLiveTableStore_RELAY$p_2 = new Map()),
            (n.$AdsPEBaseLiveTableStore_RELAY$p_3 = new Map()),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.get = function (t) {
            return (
              o("AdsStoreReadIDLogger").logStoreReadID(
                this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                "get",
                "weak",
              ),
              this.$AdsPEBaseLiveTableStore_RELAY$p_5(t)
            );
          }),
          (a.getWithID = function (t) {
            return t.type !== this.$AdsPEBaseLiveTableStore_RELAY$p_6()
              ? o("AdsStoreStrongIDUtils").wrongLevelStrongIDError(
                  t,
                  this.$AdsPEBaseLiveTableStore_RELAY$p_6(),
                  this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                )
              : (o("AdsStoreReadIDLogger").logStoreReadID(
                  this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                  "getWithID",
                  "strong",
                ),
                this.$AdsPEBaseLiveTableStore_RELAY$p_5(t.fbid));
          }),
          (a.$AdsPEBaseLiveTableStore_RELAY$p_5 = function (n) {
            var e = c[this.getLevel()];
            if (
              e != null &&
              o("AdsObjectIDLevelRegistry").shouldBlockOnIDMismatch(
                n,
                e,
                this.constructor.name,
              )
            )
              return r("LoadObject").withError(
                r("err")(
                  "ID level mismatch: %s is not %s in %s",
                  n,
                  e,
                  this.constructor.name,
                ),
                { creatorModuleID: i.id },
              );
            if (!r("isValidID")(n)) {
              var a = this.getLevel();
              if (
                (r("FBLogger")("ads")
                  .blameToPreviousFrame()
                  .warn(
                    "AdsPEBaseLiveTableStore get called with invalid id: %s and level: %s from: %s",
                    n,
                    a,
                    this.__moduleID,
                  ),
                a === "campaignGroup" || a === "campaign" || a === "adgroup")
              )
                return r("LoadObject").withError(
                  r("err")(
                    "Invalid id: %s on level: %s from %s",
                    n,
                    a,
                    this.__moduleID,
                  ),
                  { creatorModuleID: i.id },
                );
            }
            var l = t.prototype.get.call(this, n);
            if (u && l.hasError()) {
              var s;
              r("FBLogger")("ads").warn(
                "AdsPEBaseLiveTableStore get returns error %s for id %s, level %s",
                (s = l.getError()) == null ? void 0 : s.message,
                n,
                this.getLevel(),
              );
            }
            return l;
          }),
          (a.getAll = function (t, n) {
            return (
              o("AdsStoreReadIDLogger").logStoreReadIDs(
                this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                "getAll",
                "weak",
                t,
              ),
              this.$AdsPEBaseLiveTableStore_RELAY$p_7(t, n)
            );
          }),
          (a.getAllWithIDs = function (t, n) {
            var e = o("AdsStoreStrongIDUtils").partitionStrongIDs(
                t,
                this.$AdsPEBaseLiveTableStore_RELAY$p_6(),
              ),
              r = e.fbids,
              a = e.rejected;
            return (
              o("AdsStoreReadIDLogger").logStoreReadIDs(
                this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                "getAllWithIDs",
                "strong",
                r,
              ),
              o("AdsStoreStrongIDUtils").withWrongLevelStrongIDErrors(
                this.$AdsPEBaseLiveTableStore_RELAY$p_7(r, n),
                a,
                this.$AdsPEBaseLiveTableStore_RELAY$p_6(),
                this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
              )
            );
          }),
          (a.$AdsPEBaseLiveTableStore_RELAY$p_7 = function (n, r) {
            return (
              this.$AdsPEBaseLiveTableStore_RELAY$p_8(n),
              t.prototype.getAll.call(this, n, r)
            );
          }),
          (a.getAllCached = function (n, r) {
            return (
              o("AdsStoreReadIDLogger").logStoreReadIDs(
                this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                "getAllCached",
                "weak",
                n,
              ),
              t.prototype.getAllCached.call(this, n, r)
            );
          }),
          (a.getAllCachedWithIDs = function (n, r) {
            var e = o("AdsStoreStrongIDUtils").partitionStrongIDs(
                n,
                this.$AdsPEBaseLiveTableStore_RELAY$p_6(),
              ),
              a = e.fbids,
              i = e.rejected;
            return (
              o("AdsStoreReadIDLogger").logStoreReadIDs(
                this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                "getAllCachedWithIDs",
                "strong",
                a,
              ),
              o("AdsStoreStrongIDUtils").withWrongLevelStrongIDErrors(
                t.prototype.getAllCached.call(this, a, r),
                i,
                this.$AdsPEBaseLiveTableStore_RELAY$p_6(),
                this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
              )
            );
          }),
          (a.$AdsPEBaseLiveTableStore_RELAY$p_8 = function (t) {
            var e,
              n = !1;
            for (var o of t)
              if (!r("isValidID")(o)) {
                ((n = !0), (e = o));
                break;
              }
            n &&
              r("FBLogger")("ads")
                .blameToPreviousFrame()
                .warn(
                  "AdsPEBaseLiveTableStore getAll called with invalid id: %s",
                  e,
                );
          }),
          (a.getRecord = function (t) {
            return (
              o("AdsStoreReadIDLogger").logStoreReadID(
                this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                "getRecord",
                "weak",
              ),
              this.$AdsPEBaseLiveTableStore_RELAY$p_9(
                t,
                this.$AdsPEBaseLiveTableStore_RELAY$p_5(t),
              )
            );
          }),
          (a.getRecordWithID = function (t) {
            return t.type !== this.$AdsPEBaseLiveTableStore_RELAY$p_6()
              ? o("AdsStoreStrongIDUtils").wrongLevelStrongIDError(
                  t,
                  this.$AdsPEBaseLiveTableStore_RELAY$p_6(),
                  this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                )
              : (o("AdsStoreReadIDLogger").logStoreReadID(
                  this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                  "getRecordWithID",
                  "strong",
                ),
                this.$AdsPEBaseLiveTableStore_RELAY$p_9(
                  t.fbid,
                  this.$AdsPEBaseLiveTableStore_RELAY$p_5(t.fbid),
                ));
          }),
          (a.getAllRecords = function (t, n) {
            var e = this;
            return (
              o("AdsStoreReadIDLogger").logStoreReadIDs(
                this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                "getAllRecords",
                "weak",
                t,
              ),
              this.__getAllInternal(
                t,
                n,
                function (t) {
                  return e.$AdsPEBaseLiveTableStore_RELAY$p_9(
                    t,
                    e.__getCachedInternal(t),
                  );
                },
                "getAllRecords",
              )
            );
          }),
          (a.getAllRecordsWithIDs = function (t, n) {
            var e = this,
              r = o("AdsStoreStrongIDUtils").partitionStrongIDs(
                t,
                this.$AdsPEBaseLiveTableStore_RELAY$p_6(),
              ),
              a = r.fbids,
              i = r.rejected;
            return (
              o("AdsStoreReadIDLogger").logStoreReadIDs(
                this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                "getAllRecordsWithIDs",
                "strong",
                a,
              ),
              o("AdsStoreStrongIDUtils").withWrongLevelStrongIDErrors(
                this.__getAllInternal(
                  a,
                  n,
                  function (t) {
                    return e.$AdsPEBaseLiveTableStore_RELAY$p_9(
                      t,
                      e.__getCachedInternal(t),
                    );
                  },
                  "getAllRecords",
                ),
                i,
                this.$AdsPEBaseLiveTableStore_RELAY$p_6(),
                this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
              )
            );
          }),
          (a.getCachedRecord = function (t) {
            return (
              o("AdsStoreReadIDLogger").logStoreReadID(
                this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                "getCachedRecord",
                "weak",
              ),
              this.$AdsPEBaseLiveTableStore_RELAY$p_9(
                t,
                this.__getCachedInternal(t),
              )
            );
          }),
          (a.getCachedRecordWithID = function (t) {
            return t.type !== this.$AdsPEBaseLiveTableStore_RELAY$p_6()
              ? o("AdsStoreStrongIDUtils").wrongLevelStrongIDError(
                  t,
                  this.$AdsPEBaseLiveTableStore_RELAY$p_6(),
                  this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                )
              : (o("AdsStoreReadIDLogger").logStoreReadID(
                  this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                  "getCachedRecordWithID",
                  "strong",
                ),
                this.$AdsPEBaseLiveTableStore_RELAY$p_9(
                  t.fbid,
                  this.__getCachedInternal(t.fbid),
                ));
          }),
          (a.getAllCachedRecords = function (t, n) {
            var e = this;
            return (
              o("AdsStoreReadIDLogger").logStoreReadIDs(
                this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                "getAllCachedRecords",
                "weak",
                t,
              ),
              this.__getAllCachedInternal(
                t,
                n,
                function (t) {
                  return e.$AdsPEBaseLiveTableStore_RELAY$p_9(
                    t,
                    e.__getCachedInternal(t),
                  );
                },
                "getAllRecords",
              )
            );
          }),
          (a.getAllCachedRecordsWithIDs = function (t, n) {
            var e = this,
              r = o("AdsStoreStrongIDUtils").partitionStrongIDs(
                t,
                this.$AdsPEBaseLiveTableStore_RELAY$p_6(),
              ),
              a = r.fbids,
              i = r.rejected;
            return (
              o("AdsStoreReadIDLogger").logStoreReadIDs(
                this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                "getAllCachedRecordsWithIDs",
                "strong",
                a,
              ),
              o("AdsStoreStrongIDUtils").withWrongLevelStrongIDErrors(
                this.__getAllCachedInternal(
                  a,
                  n,
                  function (t) {
                    return e.$AdsPEBaseLiveTableStore_RELAY$p_9(
                      t,
                      e.__getCachedInternal(t),
                    );
                  },
                  "getAllRecords",
                ),
                i,
                this.$AdsPEBaseLiveTableStore_RELAY$p_6(),
                this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
              )
            );
          }),
          (a.getByFields = function (t, n) {
            return (
              o("AdsStoreReadIDLogger").logStoreReadID(
                this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                "getByFields",
                "weak",
              ),
              this.$AdsPEBaseLiveTableStore_RELAY$p_10(t, n)
            );
          }),
          (a.getByFieldsWithID = function (t, n) {
            return t.type !== this.$AdsPEBaseLiveTableStore_RELAY$p_6()
              ? o("AdsStoreStrongIDUtils").wrongLevelStrongIDError(
                  t,
                  this.$AdsPEBaseLiveTableStore_RELAY$p_6(),
                  this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                )
              : (o("AdsStoreReadIDLogger").logStoreReadID(
                  this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                  "getByFieldsWithID",
                  "strong",
                ),
                this.$AdsPEBaseLiveTableStore_RELAY$p_10(t.fbid, n));
          }),
          (a.$AdsPEBaseLiveTableStore_RELAY$p_10 = function (t, n) {
            return this.$AdsPEBaseLiveTableStore_RELAY$p_5(t);
          }),
          (a.getAllByFields = function (t, n) {
            return (
              o("AdsStoreReadIDLogger").logStoreReadIDs(
                this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                "getAllByFields",
                "weak",
                t,
              ),
              this.$AdsPEBaseLiveTableStore_RELAY$p_7(t)
            );
          }),
          (a.getAllByFieldsWithIDs = function (t, n) {
            var e = o("AdsStoreStrongIDUtils").partitionStrongIDs(
                t,
                this.$AdsPEBaseLiveTableStore_RELAY$p_6(),
              ),
              r = e.fbids,
              a = e.rejected;
            return (
              o("AdsStoreReadIDLogger").logStoreReadIDs(
                this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                "getAllByFieldsWithIDs",
                "strong",
                r,
              ),
              o("AdsStoreStrongIDUtils").withWrongLevelStrongIDErrors(
                this.$AdsPEBaseLiveTableStore_RELAY$p_7(r),
                a,
                this.$AdsPEBaseLiveTableStore_RELAY$p_6(),
                this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
              )
            );
          }),
          (a.getCachedByFields = function (t, n) {
            return (
              o("AdsStoreReadIDLogger").logStoreReadID(
                this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                "getCachedByFields",
                "weak",
              ),
              this.$AdsPEBaseLiveTableStore_RELAY$p_11(t, n)
            );
          }),
          (a.getCachedByFieldsWithID = function (t, n) {
            return t.type !== this.$AdsPEBaseLiveTableStore_RELAY$p_6()
              ? o("AdsStoreStrongIDUtils").wrongLevelStrongIDError(
                  t,
                  this.$AdsPEBaseLiveTableStore_RELAY$p_6(),
                  this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                )
              : (o("AdsStoreReadIDLogger").logStoreReadID(
                  this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                  "getCachedByFieldsWithID",
                  "strong",
                ),
                this.$AdsPEBaseLiveTableStore_RELAY$p_11(t.fbid, n));
          }),
          (a.$AdsPEBaseLiveTableStore_RELAY$p_11 = function (t, n) {
            return this.__getCachedInternal(t);
          }),
          (a.$AdsPEBaseLiveTableStore_RELAY$p_6 = function () {
            return c[this.getLevel()];
          }),
          (a.$AdsPEBaseLiveTableStore_RELAY$p_4 = function () {
            var e;
            return (e = this.__moduleID) != null
              ? e
              : "AdsPEBaseLiveTableStore_RELAY";
          }),
          (a.getCached = function (t) {
            return (
              o("AdsStoreReadIDLogger").logStoreReadID(
                this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                "getCached",
                "weak",
              ),
              this.__getCachedInternal(t)
            );
          }),
          (a.getCachedWithID = function (t) {
            return t.type !== this.$AdsPEBaseLiveTableStore_RELAY$p_6()
              ? o("AdsStoreStrongIDUtils").wrongLevelStrongIDError(
                  t,
                  this.$AdsPEBaseLiveTableStore_RELAY$p_6(),
                  this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                )
              : (o("AdsStoreReadIDLogger").logStoreReadID(
                  this.$AdsPEBaseLiveTableStore_RELAY$p_4(),
                  "getCachedWithID",
                  "strong",
                ),
                this.__getCachedInternal(t.fbid));
          }),
          (a.__getCachedInternal = function (n) {
            var e = c[this.getLevel()];
            if (
              e != null &&
              o("AdsObjectIDLevelRegistry").shouldBlockOnIDMismatch(
                n,
                e,
                "AdsPEBaseLiveTableStore_RELAY",
              )
            )
              return r("LoadObject").withError(
                r("err")(
                  "ID level mismatch: %s is not %s in %s",
                  n,
                  e,
                  "AdsPEBaseLiveTableStore_RELAY",
                ),
                { creatorModuleID: i.id },
              );
            var a = this.__getData_FOR_TEST_ONLY().get(n);
            if (a != null) return a;
            var l = this.__getDraftsMap().get(n);
            return l != null ? l : t.prototype.getCached.call(this, n);
          }),
          (a.reduce = function (n, a) {
            var t = this,
              l = a.action;
            e: {
              var u = l;
              if (
                ((typeof u == "object" && u !== null) ||
                  typeof u == "function") &&
                "type" in u &&
                u.type ===
                  o("AdsDraftDraftPublishCompletedDataActionFlux").actionType
              ) {
                var d = u;
                (s || (s = r("AdsDataAtom"))).waitFor(
                  (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens([
                    r("adsCampaignGroupBudgetBatchMutationSelector"),
                  ]),
                );
                var m = r("adsCampaignGroupBudgetBatchMutationSelector")(),
                  p = m.campaignIDsByCampaignGroupID,
                  _ =
                    this.getLevel() === "adgroup"
                      ? r("adsDraftGetIDsToInvalidateAfterPublish")({
                          response: d.response,
                          ancestorIDs: d.ancestorIDs,
                        })
                      : r("adsDraftGetIDsToInvalidateAfterPublish")(
                          { response: d.response, ancestorIDs: d.ancestorIDs },
                          p,
                        ),
                  f = this.$AdsPEBaseLiveTableStore_RELAY$p_12(_, d.response),
                  g = c[this.getLevel()],
                  h = f.filter(function (e) {
                    return !o(
                      "AdsObjectIDLevelRegistry",
                    ).shouldBlockOnIDMismatch(e, g, t.constructor.name);
                  });
                return (
                  this.__refetch(h),
                  h.forEach(function (e) {
                    (t.$AdsPEBaseLiveTableStore_RELAY$p_2.delete(e),
                      t.__deleteError(e),
                      t.markAsDirty(e));
                  }),
                  {}
                );
                break e;
              }
              if (
                ((typeof u == "object" && u !== null) ||
                  typeof u == "function") &&
                "type" in u &&
                u.type === o("AdsPERefreshTableViewActionFlux").actionType
              ) {
                var y = u;
                return y.allLevels === !0 || y.adLevel === this.getLevel()
                  ? (this.__refetchAll(),
                    this.$AdsPEBaseLiveTableStore_RELAY$p_2.clear(),
                    this.__clearErrors(),
                    {})
                  : n;
              }
              if (
                ((typeof u == "object" && u !== null) ||
                  typeof u == "function") &&
                "type" in u &&
                u.type ===
                  r("AdsMgmtTableObjectFOR_TEST_ONLY_ActionFlux").actionType
              ) {
                var C = u,
                  b = C.data,
                  v = C.level;
                return v === this.getLevel() && b != null
                  ? (r("forEachObject")(b, function (e, n) {
                      t.$AdsPEBaseLiveTableStore_RELAY$p_3.set(
                        n,
                        r("LoadObject").withValue(e, { creatorModuleID: i.id }),
                      );
                    }),
                    {})
                  : n;
              }
              return n;
            }
          }),
          (a.__getDraftsMap = function () {
            return this.$AdsPEBaseLiveTableStore_RELAY$p_2;
          }),
          (a.__getData_FOR_TEST_ONLY = function () {
            return this.$AdsPEBaseLiveTableStore_RELAY$p_3;
          }),
          (a.__queueLoadAll = function (n) {
            if (this.__eagerLoadAll()) {
              var e = [];
              for (var r of n)
                this.$AdsPEBaseLiveTableStore_RELAY$p_1.has(r) || e.push(r);
              e.length > 0 &&
                ((this.$AdsPEBaseLiveTableStore_RELAY$p_1 =
                  this.$AdsPEBaseLiveTableStore_RELAY$p_1.union(e)),
                t.prototype.__queueLoadAll.call(this, e));
            } else t.prototype.__queueLoadAll.call(this, n);
          }),
          (a.__getChunkSize = function () {
            return 20;
          }),
          (a.__eagerLoadAll = function () {
            return !0;
          }),
          (a.__lazyRefetch = function () {
            return !1;
          }),
          (a.__startLoading = function (t) {
            this.__lazyRefetch() &&
              (this.$AdsPEBaseLiveTableStore_RELAY$p_1 =
                this.$AdsPEBaseLiveTableStore_RELAY$p_1.subtract(t));
          }),
          (a.getLoadedIDsCount = function () {
            return this.__getLoadedKeys().length;
          }),
          (a.$AdsPEBaseLiveTableStore_RELAY$p_12 = function (t, n) {
            var e,
              r = this,
              o = {
                campaignGroup: "campaign",
                campaign: "ad_set",
                adgroup: "ad",
              },
              a =
                (e = n.fragment_statuses) == null ||
                (e = e.data) == null ||
                (e = e.filter(function (e) {
                  return e.ad_object_type !== o[r.getLevel()];
                })) == null
                  ? void 0
                  : e.map(function (e) {
                      return e.ad_object_id;
                    }),
              i = t.filter(function (e) {
                return !(a != null && a.includes(e));
              });
            return i;
          }),
          n
        );
      })(r("FluxLoadObjectStore_RELAY"));
    ((d.__moduleID = i.id), (l.default = d));
  },
  98,
);
