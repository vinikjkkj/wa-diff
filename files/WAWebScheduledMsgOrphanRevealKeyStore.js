__d(
  "WAWebScheduledMsgOrphanRevealKeyStore",
  [
    "WATimeUtils",
    "WAWebScheduledMsgConstants",
    "WAWebSchemaScheduledMsgOrphanRevealKey",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o(
        "WAWebSchemaScheduledMsgOrphanRevealKey",
      ).getScheduledMsgOrphanRevealKeyTable();
      await t.createOrReplace(e);
    }
    async function s(e) {
      var t = o(
        "WAWebSchemaScheduledMsgOrphanRevealKey",
      ).getScheduledMsgOrphanRevealKeyTable();
      return t.get(e);
    }
    async function u(e) {
      var t = o(
        "WAWebSchemaScheduledMsgOrphanRevealKey",
      ).getScheduledMsgOrphanRevealKeyTable();
      await t.remove(e);
    }
    async function c() {
      var e =
          o("WAWebScheduledMsgConstants")
            .SCHEDULED_MSG_ORPHAN_KEY_RETENTION_DAYS *
          o("WATimeUtils").DAY_SECONDS,
        t = o("WATimeUtils").unixTime() - e,
        n = o(
          "WAWebSchemaScheduledMsgOrphanRevealKey",
        ).getScheduledMsgOrphanRevealKeyTable();
      return n.bulkDeleteRange(["createdAt"], 0, t);
    }
    ((l.storeOrphanRevealKey = e),
      (l.getOrphanRevealKeyByRevealKeyId = s),
      (l.deleteOrphanRevealKey = u),
      (l.cleanupExpiredOrphanRevealKeys = c));
  },
  98,
);
