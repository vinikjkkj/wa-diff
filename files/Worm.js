__d(
  "Worm",
  [
    "FBLogger",
    "QPLFlow",
    "WormDump",
    "WormReadOnlyStoreAccessor",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e4,
      s = (function () {
        function t(e, t) {
          ((this.$2 = e), (this.$1 = t));
        }
        var n = t.prototype;
        return (
          (n.init = function (t) {
            return this.$2.init(t);
          }),
          (n.close = function () {
            this.$2.close();
          }),
          (n.store = function (t) {
            return new (o("WormReadOnlyStoreAccessor").ReadOnlyStoreAccessor)(
              this.$2,
              t,
              this.$1,
            );
          }),
          (n.dump = function (t) {
            var e = Object.keys(this.$2.getSchema());
            return o("WormDump").dump(t, this, e);
          }),
          (n.runInTransaction = async function (n, a, i, l) {
            var t =
              this.$1 != null
                ? o("QPLFlow").startQPLFlow(this.$1, {
                    annotations: {
                      bool: { isReadonly: a === "readonly" },
                      string: {
                        dbAlias: this.$2.getDbAlias(),
                        operationType: l,
                      },
                    },
                    timeoutInMs: e,
                  })
                : void 0;
            try {
              var s = await this.$2.runInTransaction(n, a, i, { eventFlow: t });
              return (t == null || t.endSuccess(), s);
            } catch (e) {
              throw (
                t == null || t.endFail("error"),
                r("FBLogger")("worm")
                  .catching(r("getErrorSafe")(e))
                  .mustfix("Error performing %s", l),
                e
              );
            }
          }),
          t
        );
      })();
    ((l.OP_TIMEOUT_MS = e), (l.WormDatabase = s));
  },
  98,
);
