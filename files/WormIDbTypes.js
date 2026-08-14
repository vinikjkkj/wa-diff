__d(
  "WormIDbTypes",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "_worm_db_version_",
      l = "_worm_ear_",
      s = "schema_hash",
      u = "creation_ts",
      c = { indexes: {}, primaryKey: "key" },
      d = { indexes: {}, primaryKey: "version" },
      m = { _worm_db_version_: c, _worm_ear_: d };
    ((i.DB_VERSION_STORE = e),
      (i.EAR_STORE = l),
      (i.SCHEMA_HASH_KEY = s),
      (i.DB_CREATION_TS = u),
      (i.sysSchema = m));
  },
  66,
);
