__d(
  "WAWormDB",
  ["Worm", "WormEarSync", "WormIDbDriverEarSync", "WormIDbUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.dbAlias,
        n = e.dbName,
        r = e.earOptions,
        a = e.encKey,
        i = e.odsLogger,
        l = e.options,
        s = e.schema;
      return new (o("WormIDbDriverEarSync").WormIDbDriverEarSync)(
        n,
        t,
        s,
        new (o("WormEarSync").WormEarSync)(s, t, a, r),
        i,
        l,
      );
    }
    ((l.WAWormDatabase = o("Worm").WormDatabase),
      (l.deleteWAWormDatabase = o("WormIDbUtils").deleteWormDatabase),
      (l.makeWAWormEarSyncDriver = e));
  },
  98,
);
