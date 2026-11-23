__d(
  "WAWebCoexV2MessagingStoreCleanup",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebApiCoexV2RelayReceiptStore",
    "WAWebCoexV2BotSecretStore",
    "WAWebSchemaCoexV2BotSecret",
    "WAWebSchemaCoexV2RelayReceipt",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e) {
      (e === void 0 && (e = o("WATimeUtils").unixTime()),
        await Promise.all([c(e), d(e)]));
    }
    async function c(t) {
      if (o("WAWebSchemaCoexV2RelayReceipt").canUseCoexV2RelayReceiptTable())
        try {
          await o(
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
    }
    async function d(e) {
      if (o("WAWebSchemaCoexV2BotSecret").canUseCoexV2BotSecretTable())
        try {
          await o("WAWebCoexV2BotSecretStore").purgeExpiredBotMessageSecrets(e);
        } catch (e) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] failed to purge expired retained bot secrets",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("coexv2-bot-secret-cleanup-failed", { sampling: 0.01 });
        }
    }
    l.cleanupCoexV2MessagingStores = u;
  },
  98,
);
