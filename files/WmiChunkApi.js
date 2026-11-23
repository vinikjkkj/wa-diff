__d(
  "WmiChunkApi",
  [
    "CoalescingLoader",
    "MAWDbChunkTxns",
    "MAWDexieTable",
    "MAWHMACPlaintextHash",
    "MAWIndexedDb",
    "MAWTransactionMode",
    "emptyFunction",
    "memoizeWithArgsLFUCache",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s() {
      var e,
        t = o("MAWIndexedDb").makeMsgrTransactor(
          { chunk: o("MAWTransactionMode").READONLY },
          "wms_getCachedChunkResult",
          function (e) {
            return function (t) {
              return o("MAWDbChunkTxns").maybeBulkGetChunksFromPlaintextHash(
                e,
                t,
              );
            };
          },
        ),
        n = o("MAWIndexedDb").makeMsgrTransactor(
          { chunk: o("MAWTransactionMode").READWRITE },
          "wms_storeChunk",
          function (t) {
            return function (n) {
              return (
                n.map(function (t) {
                  return e(t[0]);
                }),
                o("MAWDexieTable")
                  .dexieAll(
                    n.map(function (e) {
                      return o(
                        "MAWDbChunkTxns",
                      ).getOrCreateMediaChunkWithPlaintextHash(
                        t,
                        e[0],
                        e[1],
                        e[2],
                        e[3],
                      );
                    }),
                  )
                  .then(r("emptyFunction"))
              );
            };
          },
        ),
        a = new (o("CoalescingLoader").CoalescingLoader)(async function (n) {
          var r = await t(n);
          return n.map(function (t) {
            var n = r.get(t);
            return (n == null && e(t), n);
          });
        }),
        i = new (o("CoalescingLoader").CoalescingLoader)(async function (e) {
          return (await n(e), []);
        }),
        l = r("memoizeWithArgsLFUCache")(
          function (e) {
            return a.gen(e);
          },
          function (e) {
            return e;
          },
          1,
          function (t) {
            e = t;
          },
        ),
        s = o("MAWIndexedDb").makeMsgrTransactor(
          { chunk: o("MAWTransactionMode").READWRITE },
          "wms_deleteChunk",
          function (t) {
            return function (n) {
              n.map(e);
              var r = n.map(o("MAWHMACPlaintextHash").genHMACPlaintextHash);
              return t.chunk.where("hashedPlaintextHash").anyOf(r).delete();
            };
          },
        );
      return {
        delete: s,
        get: l,
        store: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return i.gen(t);
        },
      };
    }
    function u() {
      return (e == null && (e = s()), e);
    }
    function c() {
      e = null;
    }
    ((l.getChunkApi = u), (l.clearChunkApi__TESTONLY = c));
  },
  98,
);
