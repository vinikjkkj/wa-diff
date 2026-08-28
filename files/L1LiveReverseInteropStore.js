__d(
  "L1LiveReverseInteropStore",
  [
    "AdsAPIAdgroupRecord",
    "AdsAdgroupLiveStoreDataFields.experimental",
    "AdsDataAtom",
    "AdsDraftDraftPublishCompletedDataActionFlux",
    "AdsInsightsQueryFieldUtil",
    "AdsMgmtTableObjectFOR_TEST_ONLY_ActionFlux",
    "AdsObjectIDLevelRegistry",
    "AdsObjectTypes",
    "AdsPERefreshTableViewActionFlux",
    "AdsSelectorUtils",
    "FBLogger",
    "L1LiveThreeTiersReverseInteropStoreSource",
    "LoadObject",
    "Random",
    "ReverseInteropLoadObjectUtils",
    "ReverseInteropStoreBase",
    "adsCampaignGroupBudgetBatchMutationSelector",
    "adsDraftGetIDsToInvalidateAfterPublish",
    "adsUEditorSlowSelectorsLogging",
    "err",
    "first",
    "gkx",
    "immutable",
    "memoizeWithArgsByKey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("AdsInsightsQueryFieldUtil").toAPIFieldsMap(
        r("AdsAdgroupLiveStoreDataFields.experimental").cheapFields,
        !0,
      ),
      c = o("AdsInsightsQueryFieldUtil").normalizeFields(u),
      d = "FluxLoadObjectStore_RELAY.DATA_UPDATED.",
      m = "ad",
      p = o("Random").coinflip(10),
      _ = (function (t) {
        function n() {
          var e,
            n = new (r("L1LiveThreeTiersReverseInteropStoreSource"))();
          return (
            (e = t.call(this, n, d, { batchSize: 20, eagerLoad: !0 }) || this),
            (e.$L1LiveReverseInteropStore$p_1 = "adgroup"),
            (e.$L1LiveReverseInteropStore$p_2 = new Map()),
            (e.$L1LiveReverseInteropStore$p_5 = r("memoizeWithArgsByKey")(
              function (t) {
                return t.map(function (t) {
                  return e.$L1LiveReverseInteropStore$p_16(t);
                });
              },
            )),
            e
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.reduce = function (n, a) {
            var t = a.action;
            e: {
              var i = t;
              if (
                ((typeof i == "object" && i !== null) ||
                  typeof i == "function") &&
                "type" in i &&
                i.type ===
                  o("AdsDraftDraftPublishCompletedDataActionFlux").actionType &&
                "response" in i &&
                "ancestorIDs" in i
              ) {
                var l = i.response,
                  u = i.ancestorIDs;
                (s || (s = r("AdsDataAtom"))).waitFor(
                  (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens([
                    r("adsCampaignGroupBudgetBatchMutationSelector"),
                  ]),
                );
                var c = r("adsDraftGetIDsToInvalidateAfterPublish")({
                    response: l,
                    ancestorIDs: u,
                  }),
                  d = o("ReverseInteropLoadObjectUtils").filterWrongTypeIds(
                    c,
                    l,
                    m,
                  );
                return (this.$L1LiveReverseInteropStore$p_3(d), {});
                break e;
              }
              if (
                ((typeof i == "object" && i !== null) ||
                  typeof i == "function") &&
                "type" in i &&
                i.type === o("AdsPERefreshTableViewActionFlux").actionType &&
                "allLevels" in i &&
                "adLevel" in i
              ) {
                var p = i.allLevels,
                  _ = i.adLevel;
                return p === !0 || _ === this.$L1LiveReverseInteropStore$p_1
                  ? (this.$L1LiveReverseInteropStore$p_4(), {})
                  : n;
              }
              if (
                ((typeof i == "object" && i !== null) ||
                  typeof i == "function") &&
                "type" in i &&
                i.type ===
                  r("AdsMgmtTableObjectFOR_TEST_ONLY_ActionFlux").actionType
              ) {
                var f = i,
                  g = f.data,
                  h = f.level;
                return h === this.$L1LiveReverseInteropStore$p_1 && g != null
                  ? (this.__setData_FOR_TEST_ONLY(g), {})
                  : n;
              }
              return n;
            }
          }),
          (a.getLevel = function () {
            return this.$L1LiveReverseInteropStore$p_1;
          }),
          (a.get = function (t) {
            var e = this.getByFields(t, c);
            return e;
          }),
          (a.getCached = function (t) {
            var e = this.getCachedByFields(t, c);
            return e;
          }),
          (a.getAll = function (t, n) {
            var e = this.getAllByFields(t, c);
            return e;
          }),
          (a.getAllCached = function (t, n) {
            var e = this.getAllCachedByFields(t, c);
            return e;
          }),
          (a.getRecord = function (t) {
            var e = this.$L1LiveReverseInteropStore$p_5(t, this.get(t));
            return e;
          }),
          (a.getCachedRecord = function (t) {
            var e = this.$L1LiveReverseInteropStore$p_5(t, this.getCached(t));
            return e;
          }),
          (a.getAllRecords = function (t, n) {
            return this.getRecordsByField(t, c, n);
          }),
          (a.getAllCachedRecords = function (t, n) {
            return this.getCachedRecordsByField(t, c, n);
          }),
          (a.getAllByFields = function (t, n, a) {
            var e = [],
              l = [];
            for (var s of t)
              o("AdsObjectIDLevelRegistry").shouldBlockOnIDMismatch(
                s,
                r("AdsObjectTypes").ADGROUP,
                "L1LiveReverseInteropStore",
              )
                ? l.push([
                    s,
                    r("LoadObject").withError(
                      r("err")(
                        "ID level mismatch: %s is not ADGROUP in L1LiveReverseInteropStore",
                        s,
                      ),
                      { creatorModuleID: i.id },
                    ),
                  ])
                : e.push(s);
            if (l.length > 0) {
              var u = this.$L1LiveReverseInteropStore$p_6(
                  "getAllByFields",
                  e,
                  n,
                ),
                c = this.$L1LiveReverseInteropStore$p_7(u);
              if (c != null)
                return o("adsUEditorSlowSelectorsLogging")
                  .checkAndLogAdgroupStoreOverfetching(c)
                  .merge(r("immutable").Map(l));
              var d = this.$L1LiveReverseInteropStore$p_8(e, n);
              return (
                this.$L1LiveReverseInteropStore$p_9(u, d),
                o("adsUEditorSlowSelectorsLogging")
                  .checkAndLogAdgroupStoreOverfetching(d)
                  .merge(r("immutable").Map(l))
              );
            }
            var m = this.$L1LiveReverseInteropStore$p_6("getAllByFields", t, n),
              p = this.$L1LiveReverseInteropStore$p_7(m);
            if (p != null)
              return o(
                "adsUEditorSlowSelectorsLogging",
              ).checkAndLogAdgroupStoreOverfetching(p);
            var _ = this.$L1LiveReverseInteropStore$p_8(t, n);
            return (
              this.$L1LiveReverseInteropStore$p_9(m, _),
              o(
                "adsUEditorSlowSelectorsLogging",
              ).checkAndLogAdgroupStoreOverfetching(_)
            );
          }),
          (a.getByFields = function (t, n, a) {
            var e;
            if (
              o("AdsObjectIDLevelRegistry").shouldBlockOnIDMismatch(
                t,
                r("AdsObjectTypes").ADGROUP,
                "L1LiveReverseInteropStore",
              )
            )
              return r("LoadObject").withError(
                r("err")(
                  "ID level mismatch: %s is not ADGROUP in L1LiveReverseInteropStore",
                  t,
                ),
                { creatorModuleID: i.id },
              );
            var l = this.GetIdsWithFieldsMemoized(Array.from([t]), n, null),
              s = (e = r("first")(l)) == null ? void 0 : e.value;
            return s == null
              ? r("LoadObject").empty({ creatorModuleID: i.id })
              : (this.$L1LiveReverseInteropStore$p_10(t, s), s);
          }),
          (a.getCachedByFields = function (t, n) {
            var e;
            if (
              o("AdsObjectIDLevelRegistry").shouldBlockOnIDMismatch(
                t,
                r("AdsObjectTypes").ADGROUP,
                "L1LiveReverseInteropStore",
              )
            )
              return r("LoadObject").withError(
                r("err")(
                  "ID level mismatch: %s is not ADGROUP in L1LiveReverseInteropStore",
                  t,
                ),
                { creatorModuleID: i.id },
              );
            var a = this.GetCachedIdsWithFieldsMemoized(Array.from([t]), n),
              l = (e = r("first")(a)) == null ? void 0 : e.value;
            return l != null
              ? l
              : r("LoadObject").empty({ creatorModuleID: i.id });
          }),
          (a.getAllCachedByFields = function (t, n) {
            var e = [],
              a = [];
            for (var l of t)
              o("AdsObjectIDLevelRegistry").shouldBlockOnIDMismatch(
                l,
                r("AdsObjectTypes").ADGROUP,
                "L1LiveReverseInteropStore",
              )
                ? a.push([
                    l,
                    r("LoadObject").withError(
                      r("err")(
                        "ID level mismatch: %s is not ADGROUP in L1LiveReverseInteropStore",
                        l,
                      ),
                      { creatorModuleID: i.id },
                    ),
                  ])
                : e.push(l);
            if (a.length > 0) {
              var s = this.$L1LiveReverseInteropStore$p_6(
                  "getAllCachedByFields",
                  e,
                  n,
                ),
                u = this.$L1LiveReverseInteropStore$p_7(s);
              if (u != null) return u.merge(r("immutable").Map(a));
              var c = this.$L1LiveReverseInteropStore$p_11(e, n);
              return (
                this.$L1LiveReverseInteropStore$p_9(s, c),
                this.$L1LiveReverseInteropStore$p_12(e, c),
                c.merge(r("immutable").Map(a))
              );
            }
            var d = this.$L1LiveReverseInteropStore$p_6(
                "getAllCachedByFields",
                t,
                n,
              ),
              m = this.$L1LiveReverseInteropStore$p_7(d);
            if (m != null) return m;
            var p = this.$L1LiveReverseInteropStore$p_11(t, n);
            return (
              this.$L1LiveReverseInteropStore$p_9(d, p),
              this.$L1LiveReverseInteropStore$p_12(t, p),
              p
            );
          }),
          (a.getSingleField = function (n, a) {
            if (
              o("AdsObjectIDLevelRegistry").shouldBlockOnIDMismatch(
                n,
                r("AdsObjectTypes").ADGROUP,
                "L1LiveReverseInteropStore",
              )
            )
              return r("LoadObject").withError(
                r("err")(
                  "ID level mismatch: %s is not ADGROUP in L1LiveReverseInteropStore",
                  n,
                ),
                { creatorModuleID: i.id },
              );
            var e = t.prototype.getSingleField.call(this, n, a);
            return (this.$L1LiveReverseInteropStore$p_10(n, e), e);
          }),
          (a.getRecordsByField = function (t, n, r) {
            var e = this.$L1LiveReverseInteropStore$p_6(
                "getRecordsByField",
                t,
                n,
              ),
              o = this.$L1LiveReverseInteropStore$p_7(e);
            if (o != null) return o;
            var a = this.$L1LiveReverseInteropStore$p_13(t, n);
            return (this.$L1LiveReverseInteropStore$p_9(e, a), a);
          }),
          (a.getCachedRecordsByField = function (t, n, r) {
            var e = this.$L1LiveReverseInteropStore$p_6(
                "getCachedRecordsByField",
                t,
                n,
              ),
              o = this.$L1LiveReverseInteropStore$p_7(e);
            if (o != null) return o;
            var a = this.$L1LiveReverseInteropStore$p_14(t, n);
            return (this.$L1LiveReverseInteropStore$p_9(e, a), a);
          }),
          (a.__notifyPreProcessing = function () {
            this.$L1LiveReverseInteropStore$p_15();
          }),
          (a.$L1LiveReverseInteropStore$p_15 = function () {
            this.$L1LiveReverseInteropStore$p_2.clear();
          }),
          (a.$L1LiveReverseInteropStore$p_4 = function () {
            this.refetchAll();
          }),
          (a.$L1LiveReverseInteropStore$p_3 = function (t) {
            this.refetchKeys(t);
          }),
          (a.$L1LiveReverseInteropStore$p_16 = function (t) {
            if (t != null) return new (r("AdsAPIAdgroupRecord"))(t);
          }),
          (a.$L1LiveReverseInteropStore$p_6 = function (t, n, r) {
            return (
              t + ":" + Array.from(n).join(",") + ":" + Object.keys(r).join(",")
            );
          }),
          (a.$L1LiveReverseInteropStore$p_7 = function (t) {
            var e = this.$L1LiveReverseInteropStore$p_2.get(t);
            return e;
          }),
          (a.$L1LiveReverseInteropStore$p_9 = function (t, n) {
            this.$L1LiveReverseInteropStore$p_2.set(t, n);
          }),
          (a.$L1LiveReverseInteropStore$p_12 = function (t, n) {
            if (r("gkx")("8695")) {
              var e = n.some(function (e) {
                return e.hasError();
              });
              if (p && e) {
                var o = n
                    .filter(function (e) {
                      return e.hasError();
                    })
                    .map(function (e) {
                      return e.getError();
                    }),
                  a = o
                    .map(function (e) {
                      return e == null ? void 0 : e.message;
                    })
                    .join(",");
                this.$L1LiveReverseInteropStore$p_17(Array.from(t), a);
              }
            }
          }),
          (a.$L1LiveReverseInteropStore$p_10 = function (t, n) {
            if (r("gkx")("8695")) {
              var e = n.hasError();
              if (p && e) {
                var o;
                this.$L1LiveReverseInteropStore$p_17(
                  [t],
                  (o = n.getError()) == null ? void 0 : o.message,
                );
              }
            }
          }),
          (a.$L1LiveReverseInteropStore$p_17 = function (t, n) {
            r("FBLogger")("ads").warn(
              "Live AdObject Store %s returns error %s for ids %s",
              i.id,
              n,
              t.join(","),
            );
          }),
          (a.$L1LiveReverseInteropStore$p_8 = function (t, n, o) {
            var e = Array.from(t),
              a = this.GetIdsWithFieldsMemoized(e, n);
            return r("immutable").Map(
              a.map(function (e) {
                var t = e.key,
                  n = e.value;
                return [
                  t,
                  n != null
                    ? n
                    : r("LoadObject").empty({ creatorModuleID: i.id }),
                ];
              }),
            );
          }),
          (a.$L1LiveReverseInteropStore$p_11 = function (t, n) {
            var e = Array.from(t),
              o = this.GetCachedIdsWithFieldsMemoized(e, n);
            return r("immutable").Map(
              o.map(function (e) {
                var t = e.key,
                  n = e.value;
                return [
                  t,
                  n != null
                    ? n
                    : r("LoadObject").empty({ creatorModuleID: i.id }),
                ];
              }),
            );
          }),
          (a.$L1LiveReverseInteropStore$p_13 = function (t, n, o) {
            var e = this,
              a = Array.from(t),
              l = this.GetIdsWithFieldsMemoized(a, n),
              s = r("immutable").Map(
                l.map(function (t) {
                  var n = t.key,
                    o = t.value;
                  return [
                    n,
                    e.$L1LiveReverseInteropStore$p_5(
                      n,
                      o != null
                        ? o
                        : r("LoadObject").empty({ creatorModuleID: i.id }),
                    ),
                  ];
                }),
              );
            return s;
          }),
          (a.$L1LiveReverseInteropStore$p_14 = function (t, n, o) {
            var e = this,
              a = Array.from(t),
              l = this.GetCachedIdsWithFieldsMemoized(a, n),
              s = r("immutable").Map(
                l.map(function (t) {
                  var n = t.key,
                    o = t.value;
                  return [
                    n,
                    e.$L1LiveReverseInteropStore$p_5(
                      n,
                      o != null
                        ? o
                        : r("LoadObject").empty({ creatorModuleID: i.id }),
                    ),
                  ];
                }),
              );
            return s;
          }),
          n
        );
      })(r("ReverseInteropStoreBase"));
    _.__moduleID = i.id;
    var f = new _();
    l.default = f;
  },
  98,
);
