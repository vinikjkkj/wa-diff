__d(
  "WAWebSendPlayedReceiptJob",
  [
    "WAWap",
    "WAWebAck",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebPnlessStanzaMigration",
    "WAWebPrivacySettings",
    "WAWebSchemaMessage",
    "WAWebSendReceiptJobCommon",
    "WAWebUserPrefsGeneral",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = e.broadcastId || t,
        r = e.id.id,
        a = n.isUser() ? null : e.author,
        i = s(t),
        l = await o("WAWebPnlessStanzaMigration").getStanzaToFromChatId(n, i),
        u = o("WAWap").wap("receipt", {
          to: o("WAWebCommsWapMd").CHAT_JID(l),
          type: i,
          id: o("WAWap").CUSTOM_STRING(r),
          t: o("WAWap").CUSTOM_STRING(Date.now().toString()),
          participant: a
            ? o("WAWebCommsWapMd").DEVICE_JID(a)
            : o("WAWap").DROP_ATTR,
        });
      return (
        await o(
          "WAWebDeprecatedSendIqWorkerCompatible",
        ).deprecatedSendStanzaAndWaitForAck(
          u,
          o("WAWebCommsAckParser").toCoreAckTemplate({
            id: r,
            class: "receipt",
            type: i,
            from: l,
            participant: a,
          }),
        ),
        o("WAWebSchemaMessage")
          .getMessageTable()
          .merge(e.id.toString(), { ack: o("WAWebAck").ACK.PLAYED })
      );
    }
    function s(e) {
      if (e.isGroup())
        return o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.PLAYED;
      if (e.isNewsletter())
        return o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.PLAYED_SELF;
      var t =
        o("WAWebUserPrefsGeneral").getUserPrivacySettings().readReceipts ===
        o("WAWebPrivacySettings").ALL_NONE.none;
      return t
        ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.PLAYED_SELF
        : o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.PLAYED;
    }
    l.default = e;
  },
  98,
);
