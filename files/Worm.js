__d(
  "Worm",
  [
    "FBLogger",
    "QPLFlow",
    "WormDump",
    "WormReadOnlyStoreAccessor",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e4,
      s = (function () {
        function t(e, t) {
          ((this.$2 = e), (this.$1 = t));
        }
        var a = t.prototype;
        return (
          (a.init = function (t) {
            return this.$2.init(t);
          }),
          (a.close = function () {
            this.$2.close();
          }),
          (a.store = function (t) {
            return new (o("WormReadOnlyStoreAccessor").ReadOnlyStoreAccessor)(
              this.$2,
              t,
              this.$1,
            );
          }),
          (a.dump = function (t) {
            var e = Object.keys(this.$2.getSchema());
            return o("WormDump").dump(t, this, e);
          }),
          (a.runInTransaction = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n, a, i) {
                var l =
                  this.$1 != null
                    ? o("QPLFlow").startQPLFlow(this.$1, {
                        annotations: {
                          bool: { isReadonly: n === "readonly" },
                          string: {
                            dbAlias: this.$2.getDbAlias(),
                            operationType: i,
                          },
                        },
                        timeoutInMs: e,
                      })
                    : void 0;
                try {
                  var s = yield this.$2.runInTransaction(t, n, a, {
                    eventFlow: l,
                  });
                  return (l == null || l.endSuccess(), s);
                } catch (e) {
                  throw (
                    l == null || l.endFail("error"),
                    r("FBLogger")("worm")
                      .catching(r("getErrorSafe")(e))
                      .mustfix("Error performing %s", i),
                    e
                  );
                }
              },
            );
            function a(e, n, r, o) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          t
        );
      })();
    ((l.OP_TIMEOUT_MS = e), (l.WormDatabase = s));
  },
  98,
);
