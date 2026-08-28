__d(
  "AdsCampaignCombinedStore",
  [
    "AdsAPICampaignRecord",
    "AdsDataAtom",
    "AdsLoadObjectUtils",
    "AdsObjectIDLevelRegistry",
    "AdsObjectTypes",
    "AdsPECampaignPlacementStore",
    "AdsPECampaignRawCombinedTableStore",
    "FluxDerivedStore",
    "adsCreateStoreThunkSelector",
    "adsUEditorSlowSelectorsLogging",
    "memoizeMapImmutableMap",
    "memoizeWithArgsByKey",
    "mergeDeep",
    "mergeHelpers",
    "shallowEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(o)) || this),
            (t.$AdsCampaignCombinedStore$p_1 = r("memoizeWithArgsByKey")(
              function (e) {
                return e.map(function (e) {
                  return new (r("AdsAPICampaignRecord"))(e);
                });
              },
            )),
            (t.$AdsCampaignCombinedStore$p_2 = r("memoizeMapImmutableMap")(
              t.$AdsCampaignCombinedStore$p_1,
            )),
            (t.getSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              function (e) {
                return t.get(e);
              },
            )),
            (t.getCachedSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              function (e) {
                return t.getCached(e);
              },
            )),
            (t.getAllRecordsSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              function (e, n) {
                return t.getAllRecords(e, n);
              },
            )),
            (t.getAllCachedRecordsSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              function (e, n) {
                return t.getAllCachedRecords(e, n);
              },
            )),
            (t.getAllSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              function (e, n) {
                return t.getAll(e, n);
              },
            )),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getRecord = function (t) {
            return this.$AdsCampaignCombinedStore$p_1(t, this.get(t));
          }),
          (n.getCachedRecord = function (t) {
            return this.$AdsCampaignCombinedStore$p_1(t, this.getCached(t));
          }),
          (n.getAllRecords = function (t, n) {
            var e = o(
              "adsUEditorSlowSelectorsLogging",
            ).checkAndLogCampaignStoreOverfetching(this.getAll(t));
            return this.$AdsCampaignCombinedStore$p_2(e, n);
          }),
          (n.getAllCachedRecords = function (t, n) {
            var e = this.getAllCached(t);
            return this.$AdsCampaignCombinedStore$p_2(e, n);
          }),
          (n.getCachedByFields = function (t, n) {
            return this.getCachedObject(t);
          }),
          (n.getByFields = function (t, n) {
            return this.getObject(t);
          }),
          (n.getCachedSingleField = function (t, n) {
            return this.getCached(t).map(function (e) {
              return e[n];
            });
          }),
          (n.getSingleField = function (t, n) {
            return this.get(t).map(function (e) {
              return e[n];
            });
          }),
          (n.getCachedObject = function (t) {
            return this.getCached(t);
          }),
          (n.getObject = function (t) {
            return this.get(t);
          }),
          (n.getAllObjects = function (t) {
            return o(
              "adsUEditorSlowSelectorsLogging",
            ).checkAndLogCampaignStoreOverfetching(this.getAll(t));
          }),
          (n.getAllCachedObjects = function (t) {
            return this.getAllCached(t);
          }),
          (n.getAllByFields = function (t, n) {
            return o(
              "adsUEditorSlowSelectorsLogging",
            ).checkAndLogCampaignStoreOverfetching(this.getAll(t));
          }),
          (n.getAllCachedByFields = function (t, n) {
            return this.getAllCached(t);
          }),
          (n.__getStores = function () {
            return [
              r("AdsPECampaignPlacementStore"),
              r("AdsPECampaignRawCombinedTableStore"),
            ];
          }),
          (n.__areEqual = function (t, n) {
            return r("shallowEqual")(t, n);
          }),
          (n.__getData = function (t) {
            return (
              o("AdsObjectIDLevelRegistry").checkIDLevel(
                t,
                r("AdsObjectTypes").CAMPAIGN,
                "AdsCampaignCombinedStore",
              ),
              this.$AdsCampaignCombinedStore$p_3(t, !0)
            );
          }),
          (n.__getCachedData = function (t) {
            return (
              o("AdsObjectIDLevelRegistry").checkIDLevel(
                t,
                r("AdsObjectTypes").CAMPAIGN,
                "AdsCampaignCombinedStore",
              ),
              this.$AdsCampaignCombinedStore$p_3(t, !1)
            );
          }),
          (n.$AdsCampaignCombinedStore$p_3 = function (t, n) {
            var e = n
                ? r("AdsPECampaignRawCombinedTableStore").getObject(t)
                : r("AdsPECampaignRawCombinedTableStore").getCachedObject(t),
              o = n
                ? r("AdsPECampaignPlacementStore").get(t)
                : r("AdsPECampaignPlacementStore").getCached(t);
            return { rawSpecLoadObject: e, placementSpecLoadObject: o };
          }),
          (n.__computeResult = function (t, n) {
            var e = n.placementSpecLoadObject,
              a = n.rawSpecLoadObject;
            return o("AdsLoadObjectUtils")
              .all([a, e])
              .map(function (e) {
                var t = e[0],
                  n = e[1],
                  o = babelHelpers.extends({}, n),
                  a = t.placement
                    ? { placement: n, targeting: o }
                    : { targeting: o };
                return r("mergeDeep")(
                  t,
                  a,
                  r("mergeHelpers").ArrayStrategies.Clobber,
                );
              });
          }),
          t
        );
      })(r("FluxDerivedStore"));
    s.__moduleID = i.id;
    var u = new s(e || (e = r("AdsDataAtom")));
    l.default = u;
  },
  98,
);
