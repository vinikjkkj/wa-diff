__d(
  "ReverseInteropStoreSourceBase",
  [
    "AdsInteropConfig.experimental",
    "AdsManagerRelayClientStateUtils",
    "AdsManagerRelayEnvironment",
    "AndromedaSVLog",
    "LoadObject",
    "abstractMethod",
    "gkx",
    "relay-runtime",
    "shadowValidateReverseInteropUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("gkx")("14552"),
      s = r("gkx")("23791"),
      u = (function () {
        function t(e) {
          var t = this;
          ((this.$1 = function () {}),
            (this.$2 = new Map()),
            (this.$3 = new Map()),
            (this.$4 = new Set()),
            (this.__environment =
              e != null ? e : r("AdsManagerRelayEnvironment")));
          var n = this.__getQuery(),
            a = this.__getVariables(),
            i = o("relay-runtime").createOperationDescriptor(
              o("relay-runtime").getRequest(n),
              a,
            ),
            l = this.__environment.lookup(i.fragment);
          this.__environment.subscribe(l, function (e) {
            t.notifyDataChange();
          });
        }
        var n = t.prototype;
        return (
          (n.getTierFields = function (t) {
            return t;
          }),
          (n.getEnvironment = function () {
            return this.__environment;
          }),
          (n.isTiered = function () {
            return !1;
          }),
          (n.load = function (t, n, r) {
            (r === void 0 && (r = !1), r && this.$5(t, n));
            var e = this.$6(t, n);
            e == null && this.__fetchQuery(t, n, r);
          }),
          (n.__getCached = function (t, n) {
            return [];
          }),
          (n.getCached = function (t, n) {
            var e = this.$6(t, n);
            return e != null
              ? t.map(function (t) {
                  return {
                    key: t,
                    value: r("LoadObject").withError(e, {
                      creatorModuleID: i.id,
                    }),
                  };
                })
              : this.__getCached(t, n);
          }),
          (n.subscribeToChanges = function (t) {
            this.$1 = t;
          }),
          (n.notifyDataChange = function () {
            this.$1();
          }),
          (n.refetch = function (t) {
            (this.__deleteRelayCacheRecords(t), this.addRefetchingKeys(t));
          }),
          (n.addRefetchingKeys = function (t) {
            var e = this;
            t.forEach(function (t) {
              return e.$4.add(t);
            });
          }),
          (n.hasRefetchingKey = function (t) {
            return this.$4.has(t);
          }),
          (n.removeRefetchingKeys = function (t) {
            var e = this;
            t.forEach(function (t) {
              return e.$4.delete(t);
            });
          }),
          (n.createLoadingRecordsInRelayStore = function (t) {
            this.__createLoadingRecordsInRelayStore(t);
          }),
          (n.deleteRecordsInRelayStore = function (t) {
            this.__deleteRelayCacheRecords(t);
          }),
          (n.__deleteRelayCacheRecords = function (t) {}),
          (n.__createLoadingRecordsInRelayStore = function (t) {}),
          (n.__getQuery = function () {
            return r("abstractMethod")(this.constructor.name, "__getQuery");
          }),
          (n.__getVariables = function () {
            return r("abstractMethod")(this.constructor.name, "__getVariables");
          }),
          (n.__fetchQuery = function (t, n, o) {
            return r("abstractMethod")(this.constructor.name, "__fetchQuery");
          }),
          (n.shouldShadowValidate = function () {
            var e = r(
              "AdsInteropConfig.experimental",
            ).XCONTROLLERS_SHADOW_VALIDATION_SAMPLE_RATE;
            return Math.random() < e;
          }),
          (n.shadowValidate = function (t, n, r, a) {
            if ((a === void 0 && (a = i.id), !!this.shouldShadowValidate())) {
              var e = function (t, n) {
                return { current: { value: t }, shadow: { value: n } };
              };
              o("shadowValidateReverseInteropUtil").shadowValidate({
                ids: t.map(function (e) {
                  return String(e);
                }),
                moduleId: a,
                fetchCurrentValuePromise: n,
                fetchShadowValidationPromise: r(),
                getComparisonObjects: e,
              });
            }
          }),
          (n.__serializeKey = function (t) {
            return t;
          }),
          (n.__shouldThrowOnFieldError = function () {
            return !1;
          }),
          (n.$7 = function (n, r, o) {
            var t = this.$8(n, r),
              a = this.__shouldThrowOnFieldError();
            (this.$9(t, o), (e || a) && this.$10(n, r, o));
          }),
          (n.$10 = function (t, n, r) {
            for (var e of t) {
              var o = this.$3.has(e);
              if (!o) this.$3.set(e, { error: r, fields: new Set(n) });
              else {
                var a = this.$3.get(e);
                if (a != null) {
                  var i;
                  (i = a.fields).add.apply(i, n);
                }
              }
            }
          }),
          (n.$6 = function (n, r) {
            var t = this.$8(n, r),
              o = this.$11(t);
            return o != null
              ? o
              : e || this.__shouldThrowOnFieldError()
                ? this.$12(n, r)
                : null;
          }),
          (n.$12 = function (t, n) {
            var e = this,
              r,
              o = Array.from(t).find(function (t) {
                var r = e.$3.get(t);
                if (r == null) return !1;
                var o = n.some(function (e) {
                  return r.fields.has(e);
                });
                if (o) return !0;
              });
            return o == null
              ? null
              : (r = this.$3.get(o)) == null
                ? void 0
                : r.error;
          }),
          (n.$8 = function (t, n) {
            var e = this,
              r = Array.from(t).map(function (t) {
                return e.__serializeKey(t);
              });
            return r.join(",") + ":" + n.join(",");
          }),
          (n.$11 = function (t) {
            return this.$2.get(t);
          }),
          (n.$9 = function (t, n) {
            this.$2.set(t, n);
          }),
          (n.clearErrorCache = function () {
            (this.$2.clear(),
              (e || this.__shouldThrowOnFieldError()) && this.$3.clear());
          }),
          (n.$5 = function (n, r) {
            var t = this.$8(n, r);
            if ((this.$2.delete(t), e || this.__shouldThrowOnFieldError()))
              for (var o of n) this.$3.delete(o);
          }),
          (n.getErrorKeysFromCache = function () {
            return Array.from(this.$2.keys());
          }),
          (n.handleFetchQueryError = function (t, n, r) {
            (this.$7(t, n, r), this.notifyDataChange());
          }),
          (n.updateRecords = function (t, n, r) {
            o("relay-runtime").commitLocalUpdate(
              this.__environment,
              function (e) {
                var a,
                  i = (a = e.getRoot().getLinkedRecords(n)) != null ? a : [],
                  l = o(
                    "AdsManagerRelayClientStateUtils",
                  ).createAndAppendRecords(e, t, r, i);
                (!s || l) && e.getRoot().setLinkedRecords(i, n);
              },
            );
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
