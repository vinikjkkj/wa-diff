__d(
  "AdsPEBaseCombinedTableStore",
  [
    "AdsCombinedStoreUtils",
    "FBLogger",
    "FluxDerivedStore",
    "LoadObject",
    "Random",
    "adsCreateStoreThunkSelector",
    "memoizeMapImmutableMap",
    "memoizeWithArgsByKey",
    "shallowEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("Random").coinflip(10),
      s = (function (t) {
        function n() {
          for (var e, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(o)) || this),
            (e.$AdsPEBaseCombinedTableStore$p_1 = r("memoizeWithArgsByKey")(
              function (t) {
                return t.map(function (t) {
                  return e.__createRecord(t);
                });
              },
            )),
            (e.$AdsPEBaseCombinedTableStore$p_2 = r("memoizeMapImmutableMap")(
              e.$AdsPEBaseCombinedTableStore$p_1,
            )),
            (e.getAllRecordsSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(e),
              function (t, n) {
                return e.getAllRecords(t, n);
              },
            )),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getRecord = function (t) {
            return this.$AdsPEBaseCombinedTableStore$p_1(t, this.get(t));
          }),
          (a.getCachedRecord = function (t) {
            return this.$AdsPEBaseCombinedTableStore$p_1(t, this.getCached(t));
          }),
          (a.getAllRecords = function (t, n) {
            var e = this.getAll(t);
            return this.$AdsPEBaseCombinedTableStore$p_2(e, n);
          }),
          (a.getAllCachedRecords = function (t, n) {
            var e = this.getAllCached(t);
            return this.$AdsPEBaseCombinedTableStore$p_2(e, n);
          }),
          (a.getCachedByFields = function (t, n) {
            return this.getCachedObject(t);
          }),
          (a.getByFields = function (t, n) {
            return this.getObject(t);
          }),
          (a.getCachedSingleField = function (t, n) {
            return this.getCached(t).map(function (e) {
              return e[n];
            });
          }),
          (a.getSingleField = function (t, n) {
            return this.get(t).map(function (e) {
              return e[n];
            });
          }),
          (a.getCachedObject = function (n) {
            var t = this.getCached(n);
            if (e && t.hasError()) {
              var o;
              r("FBLogger")("ads").warn(
                "AdsPEBaseCombinedTableStore getCachedObject returns error %s for id %s, moduleID %s",
                (o = t.getError()) == null ? void 0 : o.message,
                n,
                this.__moduleID,
              );
            }
            return t;
          }),
          (a.getObject = function (n) {
            var t = this.get(n);
            if (e && t.hasError()) {
              var o;
              r("FBLogger")("ads").warn(
                "AdsPEBaseCombinedTableStore getObject returns error %s for id %s, moduleID %s",
                (o = t.getError()) == null ? void 0 : o.message,
                n,
                this.__moduleID,
              );
            }
            return t;
          }),
          (a.getAllObjects = function (t) {
            return this.getAll(t);
          }),
          (a.getAllCachedObjects = function (t) {
            return this.getAllCached(t);
          }),
          (a.getAllByFields = function (t, n) {
            return this.getAll(t);
          }),
          (a.getAllCachedByFields = function (t, n) {
            return this.getAllCached(t);
          }),
          (a.__getData = function (t, n) {
            return this.$AdsPEBaseCombinedTableStore$p_3(t, !0);
          }),
          (a.__getCachedData = function (t) {
            return this.$AdsPEBaseCombinedTableStore$p_3(t, !1);
          }),
          (a.__alwaysFetch = function () {
            return !1;
          }),
          (a.$AdsPEBaseCombinedTableStore$p_3 = function (t, n) {
            var e = this.__getDraftFragmentStore(),
              o = e.get(t),
              a;
            return (
              o.isLoading()
                ? (a = r("LoadObject").loading(
                    r("LoadObject").forwardMetadata(o, i.id),
                  ))
                : e.isNew(t)
                  ? (a = r("LoadObject").withValue(null, {
                      creatorModuleID: i.id,
                    }))
                  : ((a =
                      n || this.__alwaysFetch()
                        ? this.__getLiveTableStore().get(t)
                        : this.__getLiveTableStore().getCached(t)),
                    a.hasValue() &&
                      a.getValue() == null &&
                      r("FBLogger")("ads").warn(
                        "Live table store returns LoadObject with null value on id %s",
                        t,
                      )),
              { draftFragment: o, liveObject: a }
            );
          }),
          (a.__areEqual = function (t, n) {
            return r("shallowEqual")(t, n);
          }),
          (a.__computeResult = function (t, n) {
            return o("AdsCombinedStoreUtils").combineData(
              n.liveObject,
              n.draftFragment,
            );
          }),
          n
        );
      })(r("FluxDerivedStore"));
    ((s.__moduleID = i.id), (l.default = s));
  },
  98,
);
