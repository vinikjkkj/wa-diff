__d(
  "WAWebMLModelCacheManager",
  ["WAResultOrError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.isReady = function () {
          return this.$1.isReady();
        }),
        (t.storeModel = async function (t, n, r) {
          return this.isReady()
            ? (await this.$1.write(t, n, r),
              o("WAResultOrError").makeResult(void 0))
            : o("WAResultOrError").makeError("Cache not ready");
        }),
        (t.getModel = function (t, n) {
          if (!this.isReady())
            return o("WAResultOrError").makeError("Cache not ready");
          var e = this.$1.read(t, n);
          if (e != null) {
            var r = { modelName: t, version: n, data: e };
            return o("WAResultOrError").makeResult(r);
          }
          return o("WAResultOrError").makeError("read failed");
        }),
        (t.deleteModel = async function (t, n) {
          return this.isReady()
            ? (await this.$1.delete(t, n),
              o("WAResultOrError").makeResult(void 0))
            : o("WAResultOrError").makeError("Cache not ready");
        }),
        (t.deleteMultipleModels = async function (t) {
          return this.isReady()
            ? t.length === 0
              ? o("WAResultOrError").makeResult(0)
              : (await this.$1.deleteMultiple(t),
                o("WAResultOrError").makeResult(t.length))
            : o("WAResultOrError").makeError("Cache not ready");
        }),
        (t.listAllModels = function () {
          if (!this.isReady())
            return o("WAResultOrError").makeError("Cache not ready");
          var e = this.$1.list(),
            t = e.map(function (e) {
              return {
                modelName: e.modelName,
                version: e.version,
                fileSizeBytes: e.fileSizeBytes,
              };
            });
          return o("WAResultOrError").makeResult(t);
        }),
        (t.getTotalCacheSize = function () {
          if (!this.isReady())
            return o("WAResultOrError").makeError("Cache not ready");
          var e = this.$1.list(),
            t = 0;
          for (var n of e) t += n.fileSizeBytes;
          return o("WAResultOrError").makeResult(t);
        }),
        (t.getModelFilePath = function (t, n) {
          return this.isReady() ? this.$1.getFilePath(t, n) : null;
        }),
        (t.clearAllModels = async function () {
          if (!this.isReady())
            return o("WAResultOrError").makeError("Cache not ready");
          var e = this.$1.list(),
            t = e.map(function (e) {
              return { modelName: e.modelName, version: e.version };
            });
          return (
            await this.$1.deleteMultiple(t),
            o("WAResultOrError").makeResult(e.length)
          );
        }),
        e
      );
    })();
    function s(t) {
      return new e(t);
    }
    ((l.MLModelCacheManager = e), (l.createMLModelCacheManager = s));
  },
  98,
);
