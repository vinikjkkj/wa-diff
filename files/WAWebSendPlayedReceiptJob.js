__d(
  "WAWebSendPlayedReceiptJob",
  [
    "WADeprecatedSendIq",
    "WAWap",
    "WAWebAck",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebPnlessStanzaMigration",
    "WAWebPrivacySettings",
    "WAWebSchemaMessage",
    "WAWebSendReceiptJobCommon",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.broadcastId || t,
            r = e.id.id,
            a = n.isUser() ? null : e.author,
            i = u(t),
            l = yield o("WAWebPnlessStanzaMigration").getStanzaToFromChatId(
              n,
              i,
            ),
            s = o("WAWap").wap("receipt", {
              to: o("WAWebCommsWapMd").CHAT_JID(l),
              type: i,
              id: o("WAWap").CUSTOM_STRING(r),
              t: o("WAWap").CUSTOM_STRING(Date.now().toString()),
              participant: a
                ? o("WAWebCommsWapMd").DEVICE_JID(a)
                : o("WAWap").DROP_ATTR,
            });
          return (
            yield o("WADeprecatedSendIq").deprecatedSendStanzaAndWaitForAck(
              s,
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
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
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
