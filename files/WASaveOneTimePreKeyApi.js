__d(
  "WASaveOneTimePreKeyApi",
  ["WADbSignal", "WAResultOrError", "WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["meta", "prekey"],
          "readwrite",
          async function (e) {
            var n = await e.stores.meta.get(
                o("WADbSignal").MetaKeysEnum.lastPrekeyId,
              ),
              r = n == null ? void 0 : n.value.lastPrekeyId;
            return r == null
              ? o("WAResultOrError").makeError("missing_last_prekey")
              : (await Promise.all([
                  e.stores.prekey.bulkPut([
                    babelHelpers.extends({}, t, { isDeleted: !1 }),
                  ]),
                  e.stores.meta.bulkPut([
                    {
                      key: o("WADbSignal").MetaKeysEnum.lastPrekeyId,
                      value: { lastPrekeyId: t.keyId },
                    },
                  ]),
                ]),
                o("WAResultOrError").makeResult());
          },
          o("WASignalDB").signalOp("saveOneTimePreKey"),
        );
    };
    l.saveOneTimePreKey = e;
  },
  98,
);
