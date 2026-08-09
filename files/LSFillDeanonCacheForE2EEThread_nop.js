__d(
  "LSFillDeanonCacheForE2EEThread.nop",
  [
    "I64",
    "LSShape",
    "LSSynchronousPromise",
    "LSVec",
    "MAWFetchDeanonMetadataUsingCache",
    "PromiseOrValue",
    "ReQL",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = function (n, a, i, l) {
        if (!r("gkx")("15959"))
          return o("LSSynchronousPromise").makeSynchronousPromise();
        var t = r("LSVec")
            .toArray(l)
            .map(function (t) {
              var n = o("LSShape").toRecord(t),
                r = n.offline_threading_id,
                a = n.sort_order_ms;
              return {
                externalId: r,
                msgType: "unknown-deanon",
                sortOrderMs: (e || (e = o("I64"))).to_float(a),
              };
            }),
          u = o("ReQL")
            .fromTableAscending(n.mi_act_mapping_table)
            .getKeyRange(i)
            .iterator(new WeakMap());
        return o("LSSynchronousPromise").wrapInSyncPromiseIfNotPromise(
          (s || (s = o("PromiseOrValue"))).map(u.next(), function (e) {
            var n;
            ((n = e.value) == null ? void 0 : n[1].jid) != null &&
              o(
                "MAWFetchDeanonMetadataUsingCache",
              ).initDeanonCacheDescForThread(e.value[1].jid, t);
          }),
        );
      };
    ((u.__nop_name__ = "LSFillDeanonCacheForE2EEThread"), (l.default = u));
  },
  98,
);
