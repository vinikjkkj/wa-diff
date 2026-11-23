__d(
  "WAWebCoexV2BotSecretStore",
  ["WALogger", "WATimeUtils", "WAWebSchemaCoexV2BotSecret", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e, t, n) {
      return m("set")
        ? (await o("WAWebSchemaCoexV2BotSecret")
            .getCoexV2BotSecretTable()
            .createOrMerge(e, { msgKey: e, botMessageSecret: t, expiry: n }),
          !0)
        : !1;
    }
    async function c(t) {
      if (!m("get")) return null;
      var n = o("WAWebSchemaCoexV2BotSecret").getCoexV2BotSecretTable(),
        a = await n.get(t);
      if (a == null) return null;
      if (a.expiry <= o("WATimeUtils").unixTime()) {
        try {
          await n.bulkRemove([t]);
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] failed to remove an expired retained bot secret",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("coexv2-bot-secret-expiry-cleanup-failed", {
              sampling: 0.01,
            });
        }
        return null;
      }
      return a.botMessageSecret;
    }
    async function d(e) {
      if (o("WAWebSchemaCoexV2BotSecret").canUseCoexV2BotSecretTable()) {
        var t = o("WAWebSchemaCoexV2BotSecret").getCoexV2BotSecretTable();
        await t.bulkDeleteRange(["expiry"], 0, e);
        var n = await t.equalsPrimaryKeys(["expiry"], e);
        n.length > 0 && (await t.bulkRemove(n));
      }
    }
    function m(e) {
      return o("WAWebSchemaCoexV2BotSecret").canUseCoexV2BotSecretTable()
        ? !0
        : (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] bot-secret table unavailable for ",
                  "",
                ])),
              e,
            )
            .sendLogs("coexv2-bot-secret-table-unavailable", {
              sampling: 0.01,
            }),
          !1);
    }
    ((l.setBotMessageSecret = u),
      (l.getBotMessageSecret = c),
      (l.purgeExpiredBotMessageSecrets = d));
  },
  98,
);
