__d(
  "WAWebCoexV2MessagingStoreCleanup",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebApiCoexV2RelayReceiptStore",
    "WAWebCoexV2BotSecretStore",
    "WAWebSchemaCoexV2BotSecret",
    "WAWebSchemaCoexV2RelayReceipt",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (e === void 0 && (e = o("WATimeUtils").unixTime()),
            yield (u || (u = n("Promise"))).all([m(e), _(e)]));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            o("WAWebSchemaCoexV2RelayReceipt").canUseCoexV2RelayReceiptTable()
          )
            try {
              yield o(
                "WAWebApiCoexV2RelayReceiptStore",
              ).purgeCoexV2RelayReceiptsBefore(
                t -
                  o("WAWebApiCoexV2RelayReceiptStore")
                    .COEX_V2_RELAY_RECEIPT_RETENTION_SECONDS,
              );
            } catch (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] failed to purge expired relay receipts",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("coexv2-relay-receipt-cleanup-failed", {
                  sampling: 0.01,
                });
            }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebSchemaCoexV2BotSecret").canUseCoexV2BotSecretTable())
            try {
              yield o(
                "WAWebCoexV2BotSecretStore",
              ).purgeExpiredBotMessageSecrets(e);
            } catch (e) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] failed to purge expired retained bot secrets",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("coexv2-bot-secret-cleanup-failed", {
                  sampling: 0.01,
                });
            }
        })),
        f.apply(this, arguments)
      );
    }
    l.cleanupCoexV2MessagingStores = c;
  },
  98,
);
