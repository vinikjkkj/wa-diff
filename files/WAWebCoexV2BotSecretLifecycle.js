__d(
  "WAWebCoexV2BotSecretLifecycle",
  [
    "WAWebBotMessageSecret",
    "WAWebCoexV2BotSecretStore",
    "WAWebCoexV2GatingUtils",
    "WAWebLidMigrationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      if (!s(e)) return null;
      var t = e.msgInfo,
        n = e.msgMeta,
        r = n.targetId;
      if (r == null) return null;
      var a = o("WAWebBotMessageSecret").getFbidBotResponseTargetMsgKey({
        chat: t.chat,
        targetId: r,
        targetSenderJid: n.targetSenderJid,
      });
      return u(a);
    }
    function s(e) {
      var t = e.msgInfo,
        n = t.author,
        r = t.metaFrom;
      return o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(n, r);
    }
    async function u(e) {
      var t,
        n = e.toString(),
        r = await o("WAWebCoexV2BotSecretStore").getBotMessageSecret(n);
      if (r != null) return r;
      var a =
        (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e)) == null
          ? void 0
          : t.toString();
      return a == null || a === n
        ? null
        : o("WAWebCoexV2BotSecretStore").getBotMessageSecret(a);
    }
    ((l.getRetainedCoexV2BotMessageSecret = e),
      (l.isRetainedCoexV2BotMessageSecretRecoveryApplicable = s));
  },
  98,
);
