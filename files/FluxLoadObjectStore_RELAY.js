__d(
  "FluxLoadObjectStore_RELAY",
  [
    "invariant",
    "AdsManagerRelayEnvironment",
    "FBLogger",
    "FluxReduceStore",
    "Laminar",
    "LoadObject",
    "abstractMethod",
    "clearImmediate",
    "clearTimeout",
    "immutable",
    "relay-runtime",
    "relay-runtime/util/recycleNodesInto",
    "setImmediate",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 0,
      u = new Set();
    function c(t) {
      for (var n = t; u.has(n); ) n = "" + t + e++;
      return (u.add(n), n);
    }
    function d(e, t, n) {
      for (var r = Object.getPrototypeOf(e); r != null && r !== t; ) {
        if (Object.getOwnPropertyDescriptor(r, n) != null) return !0;
        r = Object.getPrototypeOf(r);
      }
      return !1;
    }
    var m = "FluxLoadObjectStore_RELAY.DATA_UPDATED.",
      p = (function (e) {
        function t(n, a, i) {
          var l;
          ((l = e.call(this, n) || this),
            (l.$FluxLoadObjectStore_RELAY$p_6 = new Map()),
            (l.$FluxLoadObjectStore_RELAY$p_11 = function () {
              (r("clearTimeout")(l.$FluxLoadObjectStore_RELAY$p_8),
                (l.$FluxLoadObjectStore_RELAY$p_8 = void 0),
                l.__dispatchDataUpdatedAction());
            }),
            (l.$FluxLoadObjectStore_RELAY$p_13 = function () {
              var e = l.$FluxLoadObjectStore_RELAY$p_1;
              ((l.$FluxLoadObjectStore_RELAY$p_1 = r("immutable").OrderedSet()),
                r("clearImmediate")(l.$FluxLoadObjectStore_RELAY$p_2),
                (l.$FluxLoadObjectStore_RELAY$p_2 = void 0),
                l.__startLoading(e),
                l.__doLoadAllImpl(e));
            }),
            (l.$FluxLoadObjectStore_RELAY$p_10 = c(
              i || l.__moduleID || l.getDispatchToken(),
            )),
            (l.$FluxLoadObjectStore_RELAY$p_7 = l.getDataUpdatedAction(i)),
            (l.__environment = a != null ? a : r("AdsManagerRelayEnvironment")),
            (l.$FluxLoadObjectStore_RELAY$p_1 = r("immutable").OrderedSet()),
            (l.$FluxLoadObjectStore_RELAY$p_9 = new Set()),
            (l.$FluxLoadObjectStore_RELAY$p_3 = new Map()),
            (l.$FluxLoadObjectStore_RELAY$p_4 = new Map()),
            d(l, t.prototype, "__load") ||
              d(l, t.prototype, "__loadAll") ||
              s(0, 88624, l.$FluxLoadObjectStore_RELAY$p_10));
          var u = l.reduce.bind(l);
          ((l.reduce = function (e, t) {
            return t.action &&
              t.action.type === l.$FluxLoadObjectStore_RELAY$p_7.actionType
              ? {}
              : u(e, t);
          }),
            (l.$FluxLoadObjectStore_RELAY$p_5 = l.__getChunkSize()),
            l.$FluxLoadObjectStore_RELAY$p_5 != null &&
              l.$FluxLoadObjectStore_RELAY$p_5 <= 0 &&
              (l.$FluxLoadObjectStore_RELAY$p_5 = void 0));
          var m = l.__getQuery(),
            p = l.__getVariables(),
            _ = o("relay-runtime").createOperationDescriptor(
              o("relay-runtime").getRequest(m),
              p,
            ),
            f = l.__environment.lookup(_.fragment);
          return (
            l.__environment.subscribe(f, function (e) {
              for (var t of l.$FluxLoadObjectStore_RELAY$p_4) {
                var n = t[0],
                  r = t[1];
                r.dirty = !0;
              }
              l.__queueNotify();
            }),
            l
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__load = function (t) {
            this.__loadAll(r("immutable").List([t]));
          }),
          (n.__loadAll = function (t, n) {
            for (var e of t) this.__load(e);
          }),
          (n.getInitialState = function () {
            return {};
          }),
          (n.getDataUpdatedAction = function (t) {
            return (
              this.$FluxLoadObjectStore_RELAY$p_7 ||
                (this.$FluxLoadObjectStore_RELAY$p_7 = o(
                  "Laminar",
                ).__createAction(
                  function () {
                    return [];
                  },
                  function () {
                    return [];
                  },
                  m + c(t || this.__moduleID || this.getDispatchToken()),
                )),
              this.$FluxLoadObjectStore_RELAY$p_7
            );
          }),
          (n.reduce = function (t, n) {
            return r("abstractMethod")("FluxLoadObjectStore_RELAY", "reduce");
          }),
          (n.__queueNotify = function () {
            this.$FluxLoadObjectStore_RELAY$p_8 == null &&
              (this.$FluxLoadObjectStore_RELAY$p_8 = r("setTimeout")(
                this.$FluxLoadObjectStore_RELAY$p_11,
                0,
              ));
          }),
          (n.__getChunkSize = function () {}),
          (n.__eagerLoadAll = function () {
            return !1;
          }),
          (n.getRelayEnvironment = function () {
            return this.__environment;
          }),
          (n.__getQuery = function () {
            return r("abstractMethod")(
              "FluxLoadObjectStore_RELAY",
              "__getQuery",
            );
          }),
          (n.__getVariables = function () {
            return r("abstractMethod")(
              "FluxLoadObjectStore_RELAY",
              "__getVariables",
            );
          }),
          (n.__dispatchDataUpdatedAction = function () {
            this.$FluxLoadObjectStore_RELAY$p_7.dispatch({});
          }),
          (n.__handleErrors = function (t, n) {
            var e = this;
            (t.forEach(function (t) {
              return e.$FluxLoadObjectStore_RELAY$p_3.set(
                t,
                r("LoadObject").withError(n, { creatorModuleID: i.id }),
              );
            }),
              this.__dispatchDataUpdatedAction());
          }),
          (n.__clearErrors = function () {
            this.$FluxLoadObjectStore_RELAY$p_3.clear();
          }),
          (n.__deleteError = function (t) {
            this.$FluxLoadObjectStore_RELAY$p_3.delete(t);
          }),
          (n.__isKeyPendingLoad = function (t) {
            return this.$FluxLoadObjectStore_RELAY$p_1.has(t);
          }),
          (n.__serializeKey = function (t) {
            return t;
          }),
          (n.__emitChange = function () {
            this.__changed || (this.__changed = !0);
          }),
          (n.__isKeyLoaded = function (t) {
            var e = this.__serializeKey(t);
            return this.$FluxLoadObjectStore_RELAY$p_9.has(e);
          }),
          (n.__clearLoadedKeys = function () {
            this.$FluxLoadObjectStore_RELAY$p_9.clear();
          }),
          (n.get = function (t) {
            var e = this.__isKeyLoaded(t);
            if (!e) {
              var n = this.getCached(t);
              n.hasError() &&
                r("FBLogger")("relay_ads_manager").warn(
                  "Not loaded key has an error",
                );
              var o = r("immutable").List.of(t);
              this.__queueLoadAll(o);
            }
            return this.getCached(t);
          }),
          (n.$FluxLoadObjectStore_RELAY$p_12 = function (t, n) {
            var e = this.__getCachedFromRelayStore(t),
              o;
            if (n != null && n.dirty) {
              var a = n.data;
              o = r("relay-runtime/util/recycleNodesInto")(a, e);
            } else o = e;
            return (
              this.$FluxLoadObjectStore_RELAY$p_4.set(t, {
                data: o,
                dirty: !1,
              }),
              o
            );
          }),
          (n.getCached = function (t) {
            var e = this.$FluxLoadObjectStore_RELAY$p_3.get(t);
            if (e != null) return e;
            var n = this.$FluxLoadObjectStore_RELAY$p_4.get(t);
            if (n != null && !n.dirty) return n.data;
            var o = this.__isKeyLoaded(t);
            return o
              ? this.$FluxLoadObjectStore_RELAY$p_12(t, n)
              : r("LoadObject").empty({ creatorModuleID: i.id });
          }),
          (n.markAsDirty = function (t) {
            var e = this.$FluxLoadObjectStore_RELAY$p_4.get(t);
            e != null && (e.dirty = !0);
          }),
          (n.setLoadedKeys_FOR_TEST_ONLY = function (t) {
            var e = this;
            this.$FluxLoadObjectStore_RELAY$p_9 = new Set(
              Array.from(t).map(function (t) {
                return e.__serializeKey(t);
              }),
            );
          }),
          (n.__getCachedFromRelayStore = function (t) {
            return r("abstractMethod")(
              "FluxLoadObjectStore_RELAY",
              "__getCachedFromRelayStore",
            );
          }),
          (n.getAll = function (t, n) {
            var e = this;
            return this.__getAllInternal(
              t,
              n,
              function (t) {
                return e.getCached(t);
              },
              "getAll",
            );
          }),
          (n.__getAllInternal = function (t, n, o, a) {
            var e = Array.from(t).filter(function (e) {
              return o(e).isEmpty();
            });
            if (e.length > 0) {
              var i = r("immutable").List(e);
              this.__queueLoadAll(i);
            }
            return this.__getAllCachedInternal(t, n, o, a);
          }),
          (n.getAllCached = function (t, n) {
            var e = this;
            return this.__getAllCachedInternal(
              t,
              n,
              function (t) {
                return e.getCached(t);
              },
              "getAll",
            );
          }),
          (n.__getAllCachedInternal = function (t, n, o, a) {
            var e = new Set(t),
              i =
                n ||
                this.$FluxLoadObjectStore_RELAY$p_6.get(a) ||
                r("immutable").Map(),
              l = i.withMutations(function (t) {
                for (var n of i.keys()) e.has(n) || t.delete(n);
                for (var r of e) t.set(r, o(r));
              });
            return (this.$FluxLoadObjectStore_RELAY$p_6.set(a, l), l);
          }),
          (n.__queueLoadAll = function (t) {
            (this.$FluxLoadObjectStore_RELAY$p_2 ||
              (this.$FluxLoadObjectStore_RELAY$p_2 = r("setImmediate")(
                this.$FluxLoadObjectStore_RELAY$p_13,
              )),
              (this.$FluxLoadObjectStore_RELAY$p_1 =
                this.$FluxLoadObjectStore_RELAY$p_1.union(t)),
              this.__eagerLoadAll() &&
                this.$FluxLoadObjectStore_RELAY$p_5 != null &&
                this.$FluxLoadObjectStore_RELAY$p_1.size >=
                  this.$FluxLoadObjectStore_RELAY$p_5 &&
                this.$FluxLoadObjectStore_RELAY$p_13());
          }),
          (n.__doLoadAllImpl = function (t, n) {
            n === void 0 && (n = !1);
            var e = this.$FluxLoadObjectStore_RELAY$p_5;
            for (var r of t) {
              var o = this.__serializeKey(r);
              this.$FluxLoadObjectStore_RELAY$p_9.add(o);
            }
            if ((this.__updateSoreToShowLoadingState(t), e)) {
              var a = [];
              for (var i of t)
                (a.push(i), a.length >= e && (this.__loadAll(a, n), (a = [])));
              a.length > 0 && this.__loadAll(a, n);
            } else this.__loadAll(t, n);
          }),
          (n.__startLoading = function (t) {}),
          (n.__updateSoreToShowLoadingState = function (t) {}),
          t
        );
      })(r("FluxReduceStore"));
    ((p.__moduleID = i.id), (l.default = p));
  },
  98,
);
