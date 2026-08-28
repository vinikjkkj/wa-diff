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
    "FBLogger",
    "FluxLoadObjectStore_RELAY",
    "LoadObject",
    "Random",
    "abstractMethod",
    "adsCampaignGroupBudgetBatchMutationSelector",
    "adsDraftGetIDsToInvalidateAfterPublish",
    "err",
    "forEachObject",
    "immutable",
    "isValidID",
    "memoizeWithArgsByKey",
    "vulture",
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
        function n() {
          var e;
          return (
            (e = t.call(this, s || (s = r("AdsDataAtom"))) || this),
            (e.$AdsPEBaseLiveTableStore_RELAY$p_5 = r("memoizeWithArgsByKey")(
              function (t) {
                return t.map(function (t) {
                  return e.__createRecord(t);
                });
              },
            )),
            (e.$AdsPEBaseLiveTableStore_RELAY$p_1 =
              r("immutable").OrderedSet()),
            (e.$AdsPEBaseLiveTableStore_RELAY$p_2 = new Map()),
            (e.$AdsPEBaseLiveTableStore_RELAY$p_3 = new Map()),
            e
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.get = function (n) {
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
          (a.getAll = function (n, r) {
            return (
              this.$AdsPEBaseLiveTableStore_RELAY$p_4(n),
              t.prototype.getAll.call(this, n, r)
            );
          }),
          (a.$AdsPEBaseLiveTableStore_RELAY$p_4 = function (t) {
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
            return this.$AdsPEBaseLiveTableStore_RELAY$p_5(t, this.get(t));
          }),
          (a.getAllRecords = function (t, n) {
            var e = this;
            return this.__getAllInternal(
              t,
              n,
              function (t) {
                return e.$AdsPEBaseLiveTableStore_RELAY$p_5(t, e.getCached(t));
              },
              "getAllRecords",
            );
          }),
          (a.getCachedRecord = function (t) {
            return this.$AdsPEBaseLiveTableStore_RELAY$p_5(
              t,
              this.getCached(t),
            );
          }),
          (a.getAllCachedRecords = function (t, n) {
            var e = this;
            return this.__getAllCachedInternal(
              t,
              n,
              function (t) {
                return e.$AdsPEBaseLiveTableStore_RELAY$p_5(t, e.getCached(t));
              },
              "getAllRecords",
            );
          }),
          (a.getByFields = function (t, n) {
            return this.get(t);
          }),
          (a.getAllByFields = function (t, n) {
            return this.getAll(t);
          }),
          (a.getCachedByFields = function (t, n) {
            return this.getCached(t);
          }),
          (a.__createRecord = function (t) {
            return r("abstractMethod")(this.constructor.name, "__createRecord");
          }),
          (a.getLevel = function () {
            return r("abstractMethod")(this.constructor.name, "getLevel");
          }),
          (a.getCached = function (n) {
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
                  f = this.$AdsPEBaseLiveTableStore_RELAY$p_6(_, d.response),
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
          (a.__loadAll = function (t) {
            return r("abstractMethod")(this.constructor.name, "__loadAll");
          }),
          (a.__refetchAll = function () {
            return (
              r("vulture")("17KlRdOO7tbqs3nNV2NDCi8DfFs="),
              r("abstractMethod")(this.constructor.name, "__refetchAll")
            );
          }),
          (a.__refetch = function (t) {
            return r("abstractMethod")(this.constructor.name, "__refetch");
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
          (a.__getLoadedKeys = function () {
            return r("abstractMethod")(
              this.constructor.name,
              "__getLoadedKeys",
            );
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
          (a.$AdsPEBaseLiveTableStore_RELAY$p_6 = function (t, n) {
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
