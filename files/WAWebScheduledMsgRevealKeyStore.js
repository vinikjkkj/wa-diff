__d(
  "WAWebScheduledMsgRevealKeyStore",
  ["WAWebBackendApi", "WAWebSchemaScheduledMsgRevealKey"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o(
        "WAWebSchemaScheduledMsgRevealKey",
      ).getScheduledMsgRevealKeyTable();
      await t.createOrReplace(e);
    }
    async function s(e) {
      var t = o(
        "WAWebSchemaScheduledMsgRevealKey",
      ).getScheduledMsgRevealKeyTable();
      return t.get(e);
    }
    async function u(e) {
      var t,
        n = o(
          "WAWebSchemaScheduledMsgRevealKey",
        ).getScheduledMsgRevealKeyTable(),
        r = await n.equals(["revealKeyId"], e);
      return (t = r[0]) != null ? t : null;
    }
    async function c(e) {
      var t = o(
        "WAWebSchemaScheduledMsgRevealKey",
      ).getScheduledMsgRevealKeyTable();
      return t.equals(["chatId"], e);
    }
    async function d(e, t) {
      var n = o(
        "WAWebSchemaScheduledMsgRevealKey",
      ).getScheduledMsgRevealKeyTable();
      await n.merge(e, { status: t });
    }
    async function m(e) {
      var t = o(
        "WAWebSchemaScheduledMsgRevealKey",
      ).getScheduledMsgRevealKeyTable();
      (await t.remove(e),
        o("WAWebBackendApi").frontendFireAndForget(
          "triggerScheduledMsgRevealedFromBridge",
          { msgId: e },
        ));
    }
    ((l.storeRevealKey = e),
      (l.getRevealKeyByMsgId = s),
      (l.getRevealKeyByRevealKeyId = u),
      (l.getRevealKeysForChat = c),
      (l.updateRevealKeyStatus = d),
      (l.deleteRevealKey = m));
  },
  98,
);
