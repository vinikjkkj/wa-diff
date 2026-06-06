__d(
  "WAWebMLModelCacheManager",
  ["WAResultOrError", "asyncToGeneratorRuntime"],
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
        (t.storeModel = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              return this.isReady()
                ? (yield this.$1.write(e, t, n),
                  o("WAResultOrError").makeResult(void 0))
                : o("WAResultOrError").makeError("Cache not ready");
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
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
        (t.deleteModel = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              return this.isReady()
                ? (yield this.$1.delete(e, t),
                  o("WAResultOrError").makeResult(void 0))
                : o("WAResultOrError").makeError("Cache not ready");
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.deleteMultipleModels = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            return this.isReady()
              ? e.length === 0
                ? o("WAResultOrError").makeResult(0)
                : (yield this.$1.deleteMultiple(e),
                  o("WAResultOrError").makeResult(e.length))
              : o("WAResultOrError").makeError("Cache not ready");
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
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
        (t.clearAllModels = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (!this.isReady())
              return o("WAResultOrError").makeError("Cache not ready");
            var e = this.$1.list(),
              t = e.map(function (e) {
                return { modelName: e.modelName, version: e.version };
              });
            return (
              yield this.$1.deleteMultiple(t),
              o("WAResultOrError").makeResult(e.length)
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
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
