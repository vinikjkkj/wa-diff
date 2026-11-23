__d(
  "WmiMediaServiceDb",
  ["MpsErrors", "WAResolvable", "WmiMediaServiceSchema"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new (o("WAResolvable").Resolvable)();
    async function u(t) {
      try {
        var n = o("WmiMediaServiceSchema").makeSchema(t);
        return ((e = n), await n.init(), s.resolve(n), n);
      } catch (e) {
        throw o("MpsErrors").MpsErrors.classify(
          e,
          "media_service_db_init",
          "store_init_failed",
        );
      }
    }
    function c() {
      if (e == null)
        throw o("MpsErrors").MpsErrors.error(
          "used_before_init",
          "Media Service DB is not initialized",
        );
      return e;
    }
    ((l.makeMediaServiceDb = u), (l.getDb = c));
  },
  98,
);
