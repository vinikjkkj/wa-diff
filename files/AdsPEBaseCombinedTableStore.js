__d(
  "AdsPEBaseCombinedTableStore",
  [
    "AdsCombinedStoreUtils",
    "AdsInteropConfig.experimental",
    "AndromedaValidatorConfigReverseInterop",
    "FBLogger",
    "FluxDerivedStore",
    "LoadObject",
    "Random",
    "abstractMethod",
    "adsCreateStoreThunkSelector",
    "clearImmediate",
    "memoizeMapImmutableMap",
    "memoizeWithArgsByKey",
    "setImmediate",
    "shallowEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("Random").coinflip(10),
      s = {},
      u = null;
    function c(e) {
      return {
        value: e.getValue(),
        isLoading: e.isLoading() || e.isEmpty(),
        hasError: e.hasError(),
      };
    }
    var d = (function (t) {
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
        (a.__createRecord = function (t) {
          return r("abstractMethod")(this.constructor.name, "__createRecord");
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
          var e = this,
            o = this.__getDraftFragmentStore(),
            a = o.get(t),
            l;
          if (a.isLoading())
            l = r("LoadObject").loading({ creatorModuleID: i.id });
          else if (o.isNew(t))
            l = r("LoadObject").withValue(null, { creatorModuleID: i.id });
          else {
            ((l =
              n || this.__alwaysFetch()
                ? this.__getLiveTableStore().get(t)
                : this.__getLiveTableStore().getCached(t)),
              l.hasValue() &&
                l.getValue() == null &&
                r("FBLogger")("ads").warn(
                  "Live table store returns LoadObject with null value on id %s",
                  t,
                ));
            var c = this.__getLiveTableShadowStore();
            if (
              c != null &&
              (n || this.__alwaysFetch()) &&
              Math.random() <
                r("AdsInteropConfig.experimental")
                  .GENERIC_REVERSE_INTEROP_SHADOW_VALIDATION_SAMPLE_RATE
            ) {
              var d = c.getLevel();
              (this.$AdsPEBaseCombinedTableStore$p_4(t),
                s[d] == null && (s[d] = new Set()),
                s[d].add(t),
                u == null &&
                  (u = r("setImmediate")(function () {
                    (r("clearImmediate")(u), (u = null));
                    var t = Array.from(s[d]);
                    (s[d].clear(), e.$AdsPEBaseCombinedTableStore$p_5(t));
                  })));
            }
          }
          return { draftFragment: a, liveObject: l };
        }),
        (a.$AdsPEBaseCombinedTableStore$p_5 = function (t) {
          var e = this.__getLiveTableShadowStore();
          if (e != null) {
            var n = Object.fromEntries(
                this.__getLiveTableStore()
                  .getAll(t)
                  .map(function (e) {
                    return c(e);
                  }),
              ),
              o = Object.fromEntries(
                e.getAll(t).map(function (e) {
                  return c(e);
                }),
              );
            r("AndromedaValidatorConfigReverseInterop").compareState(
              i.id,
              t,
              n,
              o,
              { bool: { batching: !0 } },
            );
          }
        }),
        (a.$AdsPEBaseCombinedTableStore$p_4 = function (t) {
          var e = this.__getLiveTableShadowStore();
          if (e != null) {
            var n = this.__getLiveTableStore().get(t),
              o = e.get(t);
            r("AndromedaValidatorConfigReverseInterop").compareState(
              i.id,
              [t],
              c(n),
              c(o),
              { bool: { batching: !1 } },
            );
          }
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
        (a.__getDraftFragmentStore = function () {
          return r("abstractMethod")(
            "AdsPEBaseCombinedTableStore",
            "__getDraftFragmentStore",
          );
        }),
        (a.__getLiveTableStore = function () {
          return r("abstractMethod")(
            "AdsPEBaseCombinedTableStore",
            "__getLiveTableStore",
          );
        }),
        (a.__getLiveTableShadowStore = function () {
          return null;
        }),
        n
      );
    })(r("FluxDerivedStore"));
    ((d.__moduleID = i.id), (l.default = d));
  },
  98,
);
