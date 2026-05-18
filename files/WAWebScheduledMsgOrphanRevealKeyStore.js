__d(
  "WAWebScheduledMsgOrphanRevealKeyStore",
  [
    "WATimeUtils",
    "WAWebScheduledMsgConstants",
    "WAWebSchemaScheduledMsgOrphanRevealKey",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebSchemaScheduledMsgOrphanRevealKey",
          ).getScheduledMsgOrphanRevealKeyTable();
          yield t.createOrReplace(e);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebSchemaScheduledMsgOrphanRevealKey",
          ).getScheduledMsgOrphanRevealKeyTable();
          return t.get(e);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebSchemaScheduledMsgOrphanRevealKey",
          ).getScheduledMsgOrphanRevealKeyTable();
          yield t.remove(e);
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e =
              o("WAWebScheduledMsgConstants")
                .SCHEDULED_MSG_ORPHAN_KEY_RETENTION_DAYS *
              o("WATimeUtils").DAY_SECONDS,
            t = o("WATimeUtils").unixTime() - e,
            n = o(
              "WAWebSchemaScheduledMsgOrphanRevealKey",
            ).getScheduledMsgOrphanRevealKeyTable();
          return n.bulkDeleteRange(["createdAt"], 0, t);
        })),
        _.apply(this, arguments)
      );
    }
    ((l.storeOrphanRevealKey = e),
      (l.getOrphanRevealKeyByRevealKeyId = u),
      (l.deleteOrphanRevealKey = d),
      (l.cleanupExpiredOrphanRevealKeys = p));
  },
  98,
);
