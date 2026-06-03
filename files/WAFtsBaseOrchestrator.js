__d(
  "WAFtsBaseOrchestrator",
  [
    "Promise",
    "WACustomError",
    "WAFtsIndexerSelector",
    "WANullthrows",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e, t, n) {
          ((this.$3 = new (r("WAFtsIndexerSelector"))(n)),
            (this.$2 = e),
            (this.$1 = t));
        }
        var a = t.prototype;
        return (
          (a.__initVersions = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (
                  e === void 0 && (e = !1),
                  (this.$4 == null || e) &&
                    (this.$4 = yield this.$2.versions()),
                  this.$4
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.__handleFullIndexerProgress = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, o) {
                if (
                  (n != null && (yield this.$1.updateLastFullIndexBatch(e, n)),
                  t === 1 && (yield this.$1.markFullIndexingComplete(e), !e))
                ) {
                  (yield this.$1.upgradeVersion(),
                    yield this.__initVersions(!0));
                  var a = yield this.$3.select(
                    r("WANullthrows")(this.$4).previous,
                  );
                  yield r("WANullthrows")(a).eraseIndex();
                }
                o && (yield o(t, n));
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.__startFullIndexingForVersion = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, r) {
                var o = this;
                if (t == null) return (e || (e = n("Promise"))).resolve([]);
                var a = t.isCurrent,
                  i = t.isFullIndexingComplete,
                  l = t.lastMsgKeyViaFullIndexer;
                if (i) a || this.__handleFullIndexerProgress(!1, 1, null, null);
                else {
                  var s = yield this.__getIndexer(a);
                  if (s)
                    return s.full(function (e, t) {
                      return o.__handleFullIndexerProgress(a, e, t, r);
                    }, l);
                }
                return (e || (e = n("Promise"))).resolve([]);
              },
            );
            function r(e, n) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.__getIndexer = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (
                  e === void 0 && (e = !0),
                  yield this.__initVersions(),
                  e
                    ? this.$3.select(r("WANullthrows")(this.$4).current)
                    : this.$3.select(r("WANullthrows")(this.$4).next)
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.purge = function (r) {
            return (e || (e = n("Promise"))).reject(
              new (o("WACustomError").UnimplementedMethod)("purge"),
            );
          }),
          (a.purge__DEPRECATED_DO_NOT_USE = function (r, a, i) {
            return (e || (e = n("Promise"))).reject(
              new (o("WACustomError").UnimplementedMethod)("purge"),
            );
          }),
          (a.purgeChat = function (r) {
            return (e || (e = n("Promise"))).reject(
              new (o("WACustomError").UnimplementedMethod)("purge"),
            );
          }),
          (a.search = function (r, a) {
            return (e || (e = n("Promise"))).reject(
              new (o("WACustomError").UnimplementedMethod)("search"),
            );
          }),
          (a.incremental = function (r, a) {
            return (e || (e = n("Promise"))).reject(
              new (o("WACustomError").UnimplementedMethod)("incremental"),
            );
          }),
          (a.full = function (r, a) {
            return (e || (e = n("Promise"))).reject(
              new (o("WACustomError").UnimplementedMethod)("full"),
            );
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
