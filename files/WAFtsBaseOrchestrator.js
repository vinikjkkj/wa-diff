__d(
  "WAFtsBaseOrchestrator",
  ["WACustomError", "WAFtsIndexerSelector", "WANullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        ((this.$3 = new (r("WAFtsIndexerSelector"))(n)),
          (this.$2 = e),
          (this.$1 = t));
      }
      var t = e.prototype;
      return (
        (t.__initVersions = async function (t) {
          return (
            t === void 0 && (t = !1),
            (this.$4 == null || t) && (this.$4 = await this.$2.versions()),
            this.$4
          );
        }),
        (t.__handleFullIndexerProgress = async function (t, n, o, a) {
          if (
            (o != null && (await this.$1.updateLastFullIndexBatch(t, o)),
            n === 1 && (await this.$1.markFullIndexingComplete(t), !t))
          ) {
            (await this.$1.upgradeVersion(), await this.__initVersions(!0));
            var e = await this.$3.select(r("WANullthrows")(this.$4).previous);
            await r("WANullthrows")(e).eraseIndex();
          }
          a && (await a(n, o));
        }),
        (t.__startFullIndexingForVersion = async function (t, n) {
          var e = this;
          if (t == null) return Promise.resolve([]);
          var r = t.isCurrent,
            o = t.isFullIndexingComplete,
            a = t.lastMsgKeyViaFullIndexer;
          if (o) r || this.__handleFullIndexerProgress(!1, 1, null, null);
          else {
            var i = await this.__getIndexer(r);
            if (i)
              return i.full(function (t, o) {
                return e.__handleFullIndexerProgress(r, t, o, n);
              }, a);
          }
          return Promise.resolve([]);
        }),
        (t.__getIndexer = async function (t) {
          return (
            t === void 0 && (t = !0),
            await this.__initVersions(),
            t
              ? this.$3.select(r("WANullthrows")(this.$4).current)
              : this.$3.select(r("WANullthrows")(this.$4).next)
          );
        }),
        (t.purge = function (t) {
          return Promise.reject(
            new (o("WACustomError").UnimplementedMethod)("purge"),
          );
        }),
        (t.purge__DEPRECATED_DO_NOT_USE = function (t, n, r) {
          return Promise.reject(
            new (o("WACustomError").UnimplementedMethod)("purge"),
          );
        }),
        (t.purgeChat = function (t) {
          return Promise.reject(
            new (o("WACustomError").UnimplementedMethod)("purge"),
          );
        }),
        (t.search = function (t, n) {
          return Promise.reject(
            new (o("WACustomError").UnimplementedMethod)("search"),
          );
        }),
        (t.incremental = function (t, n) {
          return Promise.reject(
            new (o("WACustomError").UnimplementedMethod)("incremental"),
          );
        }),
        (t.full = function (t, n) {
          return Promise.reject(
            new (o("WACustomError").UnimplementedMethod)("full"),
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
