__d(
  "ReverseInteropStoreBase",
  [
    "AdsDataAtom",
    "FBLogger",
    "FluxReduceStore",
    "Laminar",
    "LoadObject",
    "ReverseInteropFeatureFlags",
    "ReverseInteropStoreHandler",
    "ReverseInteropUtil",
    "adsUEditorSlowSelectorsLogging",
    "clearTimeout",
    "first",
    "forEachObject",
    "gkx",
    "immutable",
    "isValidID",
    "setTimeout",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 0,
      u = new Set();
    function c(e) {
      for (var t = e; u.has(t); ) t = "" + e + s++;
      return (u.add(t), t);
    }
    var d = (function (t) {
      function n(n, o, a) {
        var i;
        ((i = t.call(this, e || (e = r("AdsDataAtom"))) || this),
          (i.$ReverseInteropStoreBase$p_3 = new Map()),
          (i.$ReverseInteropStoreBase$p_4 = new Map()),
          (i.$ReverseInteropStoreBase$p_5 = new Map()));
        var l = a != null ? a : {},
          s = l.batchSize,
          u = s === void 0 ? 1 : s,
          c = l.eagerLoad,
          d = c === void 0 ? !1 : c,
          m = l.storeName;
        i.$ReverseInteropStoreBase$p_1 = i.getDataUpdatedAction(o, m);
        var p = i.reduce.bind(i);
        return (
          (i.reduce = function (e, t) {
            return t.action &&
              t.action.type === i.$ReverseInteropStoreBase$p_1.actionType
              ? {}
              : p(e, t);
          }),
          (i.__reverseInteropHandler = new (r("ReverseInteropStoreHandler"))(
            n,
            function () {
              return i.__onDataChange();
            },
            u,
            d,
            i.__className,
          )),
          i
        );
      }
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.getInitialState = function () {
          return {};
        }),
        (a.reduce = function (t, n) {
          return t;
        }),
        (a.getDataUpdatedAction = function (t, n) {
          if (!this.$ReverseInteropStoreBase$p_1) {
            var e =
              n != null
                ? n
                : this.__moduleID != null
                  ? this.__moduleID
                  : this.getDispatchToken();
            this.$ReverseInteropStoreBase$p_1 = o("Laminar").__createAction(
              function () {
                return [];
              },
              function () {
                return [];
              },
              t + c(e),
            );
          }
          return this.$ReverseInteropStoreBase$p_1;
        }),
        (a.__onDataChange = function () {
          this.__dispatchDataUpdatedAction();
        }),
        (a.__dispatchDataUpdatedAction = function () {
          var e = this;
          this.$ReverseInteropStoreBase$p_2 == null &&
            (this.$ReverseInteropStoreBase$p_2 = r("setTimeout")(function () {
              (e.$ReverseInteropStoreBase$p_6(),
                e.$ReverseInteropStoreBase$p_7());
            }, 0));
        }),
        (a.$ReverseInteropStoreBase$p_7 = function () {
          (this.__notifyPreProcessing(),
            this.__clearLocalBaseCache(),
            this.$ReverseInteropStoreBase$p_1.dispatch({}));
        }),
        (a.__notifyPreProcessing = function () {}),
        (a.__serializeKey = function (t) {
          var e;
          return (e = JSON.stringify(t)) != null ? e : t;
        }),
        (a.$ReverseInteropStoreBase$p_6 = function () {
          (r("clearTimeout")(this.$ReverseInteropStoreBase$p_2),
            (this.$ReverseInteropStoreBase$p_2 = null));
        }),
        (a.__clearLocalBaseCache = function () {
          this.$ReverseInteropStoreBase$p_3.clear();
        }),
        (a.__getCachedData = function () {
          return this.$ReverseInteropStoreBase$p_3;
        }),
        (a.$ReverseInteropStoreBase$p_8 = function (t, n, r) {
          var e = Object.keys(n),
            o = this.$ReverseInteropStoreBase$p_9(t);
          if (o != null) {
            var a = o.remainingKeys,
              i = o.results;
            return a.length === 0
              ? i
              : [].concat(i, this.__reverseInteropHandler.get(a, e, r));
          }
          return this.__reverseInteropHandler.get(t, e, r);
        }),
        (a.$ReverseInteropStoreBase$p_10 = function (t, n) {
          var e = Object.keys(n),
            o = this.$ReverseInteropStoreBase$p_9(t);
          if (o != null && o.remainingKeys.length === 0) return o.results;
          var a = o != null ? o.remainingKeys : t,
            l = o == null ? void 0 : o.results,
            s = this.__reverseInteropHandler.getCached(a, e),
            u = a.filter(function (e) {
              return !s.some(function (t) {
                return t.key === e;
              });
            });
          if (u.length === 0) return l == null ? s : [].concat(l, s);
          var c = u.map(function (e) {
            return {
              key: e,
              value: r("LoadObject").empty({ creatorModuleID: i.id }),
            };
          });
          return l == null ? [].concat(s, c) : [].concat(l, s, c);
        }),
        (a.$ReverseInteropStoreBase$p_9 = function (t) {
          if (this.$ReverseInteropStoreBase$p_5.size === 0) return null;
          var e = [],
            n = [];
          for (var o of t) {
            var a = this.$ReverseInteropStoreBase$p_5.get(String(o));
            if (a == null) {
              n.push(o);
              continue;
            }
            e.push({
              key: o,
              value: r("unsafeCast")(
                r("LoadObject").withValue(a, { creatorModuleID: i.id }),
              ),
            });
          }
          return e.length === 0 ? null : { remainingKeys: n, results: e };
        }),
        (a.__setData_FOR_TEST_ONLY = function (t) {
          var e = this;
          (this.$ReverseInteropStoreBase$p_5.clear(),
            r("forEachObject")(t, function (t, n) {
              t != null &&
                !(t instanceof Error) &&
                e.$ReverseInteropStoreBase$p_5.set(n, r("unsafeCast")(t));
            }),
            this.__notifyPreProcessing(),
            this.__clearLocalBaseCache());
        }),
        (a.__getData_FOR_TEST_ONLY = function () {
          return this.$ReverseInteropStoreBase$p_5;
        }),
        (a.refetchAll = function () {
          this.__reverseInteropHandler.refetchAll();
        }),
        (a.refetchKeys = function (t) {
          this.__reverseInteropHandler.refetchKeys(t);
        }),
        (a.getSingleField = function (t, n) {
          var e,
            o,
            a = ((e = {}), (e[n] = null), e),
            l = this.$ReverseInteropStoreBase$p_11("getSingleField", [t], a),
            s = this.$ReverseInteropStoreBase$p_12(l);
          if (s != null) return s;
          var u = this.GetIdsWithFieldsMemoized([t], a),
            c = (o = r("first")(u)) == null ? void 0 : o.value;
          if (c == null)
            return r("LoadObject").empty({ creatorModuleID: i.id });
          if (!c.hasValue()) return c;
          var d = c.getValueEnforcing(),
            m = d == null ? void 0 : d[n],
            p = r("LoadObject").withValue(m, { creatorModuleID: i.id });
          return (this.$ReverseInteropStoreBase$p_13(l, p), p);
        }),
        (a.getCachedSingleField = function (t, n) {
          var e,
            o,
            a = ((e = {}), (e[n] = null), e),
            l = this.$ReverseInteropStoreBase$p_11(
              "getCachedSingleField",
              [t],
              a,
            ),
            s = this.$ReverseInteropStoreBase$p_12(l);
          if (s != null) return s;
          var u = this.GetCachedIdsWithFieldsMemoized([t], a),
            c = (o = r("first")(u)) == null ? void 0 : o.value;
          if (c == null)
            return r("LoadObject").empty({ creatorModuleID: i.id });
          if (!c.hasValue()) return c;
          var d = c.getValueEnforcing(),
            m = d == null ? void 0 : d[n],
            p = r("LoadObject").withValue(m, { creatorModuleID: i.id });
          return (this.$ReverseInteropStoreBase$p_13(l, p), p);
        }),
        (a.getSingleValue = function (t, n) {
          var e,
            a = this,
            l = this.$ReverseInteropStoreBase$p_11("getSingleValue", [t], n),
            s = this.$ReverseInteropStoreBase$p_12(l);
          if (s != null) return s;
          var u = this.GetIdsWithFieldsMemoized([t], n),
            c = (e = r("first")(u)) == null ? void 0 : e.value;
          if (c == null)
            return r("LoadObject").empty({ creatorModuleID: i.id });
          var d =
              r("gkx")("5814") &&
              o("ReverseInteropFeatureFlags").shouldLogOverFetching(),
            m = d
              ? c.map(function (e) {
                  if (e != null) {
                    var t, n;
                    (o("ReverseInteropUtil").setStoreName(
                      e,
                      (t = a.__moduleID) != null ? t : "unknown",
                    ),
                      o("ReverseInteropUtil").setStoreFullFields(
                        (n = a.__moduleID) != null ? n : "unknown",
                        Object.keys(e),
                      ));
                  }
                  return new Proxy(
                    e,
                    o("ReverseInteropUtil").storeFieldsProxyHandler,
                  );
                })
              : c;
          return (this.$ReverseInteropStoreBase$p_13(l, m), m);
        }),
        (a.getCachedSingleValue = function (t, n) {
          var e,
            o = this.$ReverseInteropStoreBase$p_11(
              "getCachedSingleValue",
              [t],
              n,
            ),
            a = this.$ReverseInteropStoreBase$p_12(o);
          if (a != null) return a;
          var l = this.GetCachedIdsWithFieldsMemoized([t], n),
            s = (e = r("first")(l)) == null ? void 0 : e.value;
          return s == null
            ? r("LoadObject").empty({ creatorModuleID: i.id })
            : (this.$ReverseInteropStoreBase$p_13(o, s), s);
        }),
        (a.setCachedValue = function (t, n, r) {
          var e = this.$ReverseInteropStoreBase$p_11("getSingleValue", [t], r);
          this.$ReverseInteropStoreBase$p_13(e, n);
        }),
        (a.loadData = function (t, n, r) {
          (r === void 0 && (r = !1),
            this.__reverseInteropHandler.loadData(t, n, r));
        }),
        (a.getAllImpl = function (t) {
          var e,
            n = this;
          return (
            o("adsUEditorSlowSelectorsLogging").checkAndLogObjectsOverfetching(
              t,
              (e = this.__moduleID) != null ? e : "unknown",
            ),
            this.__getAllInternal(
              t,
              function (e) {
                return n.getCachedSingleValue(e, {});
              },
              "getAll",
            )
          );
        }),
        (a.__getAllInternal = function (t, n, r) {
          var e = Array.from(t).filter(function (e) {
            return n(e).isEmpty();
          });
          return (
            e.length > 0 &&
              (this.__reverseInteropHandler.addKeysAndFieldsToLoadedKeysAndFields(
                e,
                [],
              ),
              this.__reverseInteropHandler.queueLoad(Array.from(e), [])),
            this.__getAllCachedInternal(t, n, r)
          );
        }),
        (a.__getAllCachedInternal = function (t, n, o) {
          var e = new Set(t),
            a =
              this.$ReverseInteropStoreBase$p_4.get(o) || r("immutable").Map(),
            i = a.withMutations(function (t) {
              for (var r of a.keys()) e.has(r) || t.delete(r);
              for (var o of e) t.set(o, n(o));
            });
          return (this.$ReverseInteropStoreBase$p_4.set(o, i), i);
        }),
        (a.GetIdsWithFieldsMemoized = function (t, n, r) {
          var e = this.$ReverseInteropStoreBase$p_11("GetIdsWithFields", t, n),
            o = this.$ReverseInteropStoreBase$p_12(e);
          if (o != null) return o;
          var a = this.$ReverseInteropStoreBase$p_8(t, n, r);
          return (this.$ReverseInteropStoreBase$p_13(e, a), a);
        }),
        (a.GetCachedIdsWithFieldsMemoized = function (t, n) {
          var e = this.$ReverseInteropStoreBase$p_11(
              "GetCachedIdsWithFields",
              t,
              n,
            ),
            r = this.$ReverseInteropStoreBase$p_12(e);
          if (r != null) return r;
          var o = this.$ReverseInteropStoreBase$p_10(t, n);
          return (this.$ReverseInteropStoreBase$p_13(e, o), o);
        }),
        (a.getLoadedIDsCount = function () {
          return this.__reverseInteropHandler.getLoadedKeysAndFields().size;
        }),
        (a.$ReverseInteropStoreBase$p_11 = function (t, n, r) {
          var e = this,
            o = Array.from(n).map(function (t) {
              return e.__serializeKey(t);
            });
          return t + ":" + o.join(",") + ":" + Object.keys(r).join(",");
        }),
        (a.$ReverseInteropStoreBase$p_12 = function (t) {
          return this.$ReverseInteropStoreBase$p_3.get(t);
        }),
        (a.$ReverseInteropStoreBase$p_13 = function (t, n) {
          this.$ReverseInteropStoreBase$p_3.set(t, n);
        }),
        (a.isValidKey = function (t, n) {
          return typeof t != "string" || !r("isValidID")(t)
            ? (r("FBLogger")("ads")
                .blameToPreviousFrame()
                .warn(
                  "get called with invalid id: %s from: %s",
                  JSON.stringify(t),
                  n != null ? n : this.__moduleID,
                ),
              !1)
            : !0;
        }),
        (a.clearStoreCache__TEST_ONLY = function () {
          this.__clearLocalBaseCache();
        }),
        n
      );
    })(r("FluxReduceStore"));
    ((d.__moduleID = i.id), (l.default = d));
  },
  98,
);
