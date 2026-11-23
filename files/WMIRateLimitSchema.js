__d(
  "WMIRateLimitSchema",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        autoIncrement: !0,
        indexes: {
          by_key_and_timestamp: { fields: ["key", "timestamp"], unique: !1 },
          key: { fields: ["key"], unique: !1 },
        },
        primaryKey: "id",
        secure: !1,
      },
      l = { rateLimitAttempts: e };
    i.schemaConfig = l;
  },
  66,
);
