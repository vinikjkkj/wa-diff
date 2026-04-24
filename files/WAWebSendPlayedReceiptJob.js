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
    function e(e) {
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
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = t.broadcastId || n,
            a = t.id.id,
            i = r.isUser() ? null : t.author,
            l = e(n),
            s = yield o("WAWebPnlessStanzaMigration").getStanzaToFromChatId(
              r,
              l,
            ),
            u = o("WAWap").wap("receipt", {
              to: o("WAWebCommsWapMd").CHAT_JID(s),
              type: l,
              id: o("WAWap").CUSTOM_STRING(a),
              t: o("WAWap").CUSTOM_STRING(Date.now().toString()),
              participant: i
                ? o("WAWebCommsWapMd").DEVICE_JID(i)
                : o("WAWap").DROP_ATTR,
            });
          return (
            yield o("WADeprecatedSendIq").deprecatedSendStanzaAndWaitForAck(
              u,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: a,
                class: "receipt",
                type: l,
                from: s,
                participant: i,
              }),
            ),
            o("WAWebSchemaMessage")
              .getMessageTable()
              .merge(t.id.toString(), { ack: o("WAWebAck").ACK.PLAYED })
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
