__d(
  "ReStoreDbVersion",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e;
    }
    function s(e, t) {
      if (t in e) return e[t];
      throw r("FBLogger")("restore_db_migrations").mustfixThrow(
        "Cannot find version: %s",
        t,
      );
    }
    ((l.cast = e), (l.castVersion = s));
  },
  98,
);
