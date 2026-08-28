__d(
  "AdsPEBaseFieldGranularCombinedTableStore",
  [
    "AdsCombinedStoreUtils",
    "FieldGranularDerivedStore",
    "LoadObject",
    "abstractMethod",
    "adsCreateStoreThunkSelector",
    "memoizeMapImmutableMap",
    "memoizeWithArgsByKey",
    "shallowEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t) || this),
          (n.$AdsPEBaseFieldGranularCombinedTableStore$p_2 = r(
            "memoizeWithArgsByKey",
          )(function (e) {
            return e.map(function (e) {
              return n.__createRecord(e);
            });
          })),
          (n.$AdsPEBaseFieldGranularCombinedTableStore$p_3 = r(
            "memoizeMapImmutableMap",
          )(n.$AdsPEBaseFieldGranularCombinedTableStore$p_2)),
          (n.getAllRecordsSelector = r("adsCreateStoreThunkSelector")(
            n,
            function (e, t) {
              return n.getAllRecords(e, t);
            },
          )),
          (n.$AdsPEBaseFieldGranularCombinedTableStore$p_1 = new Map()),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getRecord = function (t) {
          return this.$AdsPEBaseFieldGranularCombinedTableStore$p_2(
            t,
            this.getObject(t),
          );
        }),
        (n.getCachedRecord = function (t) {
          return this.$AdsPEBaseFieldGranularCombinedTableStore$p_2(
            t,
            this.getCachedObject(t),
          );
        }),
        (n.getAllRecords = function (t, n) {
          return this.$AdsPEBaseFieldGranularCombinedTableStore$p_3(
            this.getAllObjects(t),
            n,
          );
        }),
        (n.getAllCachedRecords = function (t, n) {
          return this.$AdsPEBaseFieldGranularCombinedTableStore$p_3(
            this.getAllCachedObjects(t),
            n,
          );
        }),
        (n.$AdsPEBaseFieldGranularCombinedTableStore$p_4 = function (t) {
          var e,
            n =
              (e = this.$AdsPEBaseFieldGranularCombinedTableStore$p_1.get(t)) !=
              null
                ? e
                : this.$AdsPEBaseFieldGranularCombinedTableStore$p_5(t);
          return (
            this.$AdsPEBaseFieldGranularCombinedTableStore$p_1.has(t) ||
              this.$AdsPEBaseFieldGranularCombinedTableStore$p_1.set(t, n),
            n
          );
        }),
        (n.$AdsPEBaseFieldGranularCombinedTableStore$p_5 = function (t) {
          var e = this.__getDraftFragmentStore(),
            n = e.get(t),
            r = n.isLoading();
          return {
            draftFragment: n,
            draftIsLoading: r,
            isNew: !r && e.isNew(t),
          };
        }),
        (n.__createRecord = function (t) {
          return r("abstractMethod")(this.constructor.name, "__createRecord");
        }),
        (n.__getData = function (t, n) {
          return this.$AdsPEBaseFieldGranularCombinedTableStore$p_6(t, !0);
        }),
        (n.__getCachedData = function (t) {
          return this.$AdsPEBaseFieldGranularCombinedTableStore$p_6(t, !1);
        }),
        (n.$AdsPEBaseFieldGranularCombinedTableStore$p_6 = function (t, n) {
          var e = this.__deserializeSingleFieldKey(t),
            o = e[0],
            a = e[1],
            l = this.__getAllLiveFields(),
            s = this.$AdsPEBaseFieldGranularCombinedTableStore$p_4(o),
            u = s.draftFragment,
            c = s.draftIsLoading,
            d = s.isNew,
            m;
          if (c) m = r("LoadObject").loading({ creatorModuleID: i.id });
          else if (d || !Object.prototype.hasOwnProperty.call(l, a))
            m = r("LoadObject").withValue(null, { creatorModuleID: i.id });
          else {
            var p = this.__getLiveTableStore(),
              _ = this.__getLevel();
            if (_ === "adgroup") {
              var f = p;
              m = n ? f.getSingleField(o, a) : f.getCachedSingleField(o, a);
            } else {
              var g = p.getState();
              m = n ? g.getSingleField(o, a) : g.getCachedSingleField(o, a);
            }
          }
          return { draftFragment: u, liveObject: m, field: a };
        }),
        (n.__getLevel = function () {
          return null;
        }),
        (n.__areEqual = function (t, n) {
          return r("shallowEqual")(t, n);
        }),
        (n.__computeResult = function (t, n) {
          return o("AdsCombinedStoreUtils").combineSingleFieldData(
            n.liveObject,
            n.draftFragment,
            n.field,
          );
        }),
        (n.__invalidateCache = function () {
          (e.prototype.__invalidateCache.call(this),
            this.$AdsPEBaseFieldGranularCombinedTableStore$p_1.clear());
        }),
        (n.__getDraftFragmentStore = function () {
          return r("abstractMethod")(
            "AdsPEBaseFieldGranularCombinedTableStore",
            "__getDraftFragmentStore",
          );
        }),
        (n.__getLiveTableStore = function () {
          return r("abstractMethod")(
            "AdsPEBaseFieldGranularCombinedTableStore",
            "__getLiveTableStore",
          );
        }),
        (n.__getAllLiveFields = function () {
          return r("abstractMethod")(
            "AdsPEBaseFieldGranularCombinedTableStore",
            "__getAllLiveFields",
          );
        }),
        t
      );
    })(r("FieldGranularDerivedStore"));
    l.default = e;
  },
  98,
);
