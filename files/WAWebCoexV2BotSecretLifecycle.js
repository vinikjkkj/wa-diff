__d(
  "WAWebCoexV2BotSecretLifecycle",
  [
    "WAWebBotMessageSecret",
    "WAWebCoexV2BotSecretStore",
    "WAWebCoexV2GatingUtils",
    "WAWebLidMigrationUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!u(e)) return null;
          var t = e.msgInfo,
            n = e.msgMeta,
            r = n.targetId;
          if (r == null) return null;
          var a = o("WAWebBotMessageSecret").getFbidBotResponseTargetMsgKey({
            chat: t.chat,
            targetId: r,
            targetSenderJid: n.targetSenderJid,
          });
          return c(a);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      var t = e.msgInfo,
        n = t.author,
        r = t.metaFrom;
      return o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(n, r);
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.toString(),
            r = yield o("WAWebCoexV2BotSecretStore").getBotMessageSecret(n);
          if (r != null) return r;
          var a =
            (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e)) == null
              ? void 0
              : t.toString();
          return a == null || a === n
            ? null
            : o("WAWebCoexV2BotSecretStore").getBotMessageSecret(a);
        })),
        d.apply(this, arguments)
      );
    }
    ((l.getRetainedCoexV2BotMessageSecret = e),
      (l.isRetainedCoexV2BotMessageSecretRecoveryApplicable = u));
  },
  98,
);
