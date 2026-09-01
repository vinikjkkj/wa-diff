__d(
  "WormQueueEarSyncDriver",
  ["WormEarSync", "WormIDbDriverEarSync"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.dbAlias,
        n = e.dbName,
        r = e.encKey,
        a = e.odsLogger,
        i = e.options,
        l = e.schema;
      return new (o("WormIDbDriverEarSync").WormIDbDriverEarSync)(
        n,
        t,
        l,
        new (o("WormEarSync").WormEarSync)(l, t, r),
        a,
        i,
      );
    }
    l.makeWormQueueEarSyncDriver = e;
  },
  98,
);
