__d(
  "WAWebCoexV2BotSecretStore",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebSchemaCoexV2BotSecret",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return f("set")
            ? (yield o("WAWebSchemaCoexV2BotSecret")
                .getCoexV2BotSecretTable()
                .createOrMerge(e, {
                  msgKey: e,
                  botMessageSecret: t,
                  expiry: n,
                }),
              !0)
            : !1;
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
          if (!f("get")) return null;
          var t = o("WAWebSchemaCoexV2BotSecret").getCoexV2BotSecretTable(),
            n = yield t.get(e);
          if (n == null) return null;
          if (n.expiry <= o("WATimeUtils").unixTime()) {
            try {
              yield t.bulkRemove([e]);
            } catch (e) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] failed to remove an expired retained bot secret",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("coexv2-bot-secret-expiry-cleanup-failed", {
                  sampling: 0.01,
                });
            }
            return null;
          }
          return n.botMessageSecret;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebSchemaCoexV2BotSecret").canUseCoexV2BotSecretTable()) {
            var t = o("WAWebSchemaCoexV2BotSecret").getCoexV2BotSecretTable();
            yield t.bulkDeleteRange(["expiry"], 0, e);
            var n = yield t.equalsPrimaryKeys(["expiry"], e);
            n.length > 0 && (yield t.bulkRemove(n));
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(t) {
      return o("WAWebSchemaCoexV2BotSecret").canUseCoexV2BotSecretTable()
        ? !0
        : (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] bot-secret table unavailable for ",
                  "",
                ])),
              t,
            )
            .sendLogs("coexv2-bot-secret-table-unavailable", {
              sampling: 0.01,
            }),
          !1);
    }
    ((l.setBotMessageSecret = u),
      (l.getBotMessageSecret = d),
      (l.purgeExpiredBotMessageSecrets = p));
  },
  98,
);
