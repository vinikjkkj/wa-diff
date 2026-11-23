__d(
  "WAWebWasaRootSecretDb",
  [
    "WATimeUtils",
    "WAWebAck",
    "WAWebDBMessageSerialization",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.isLid()
        ? o("WAWebUserUtils").getMeLidUserOrThrow()
        : o("WAWebUserUtils").getMePnUserOrThrow_DO_NOT_USE();
    }
    function s(t, n) {
      return new (r("WAWebMsgKey"))({
        from: e(t),
        to: t,
        id: n,
        selfDir: "out",
      });
    }
    function u(t, n, r) {
      return {
        id: n,
        from: e(t),
        to: t,
        type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
        kind: o("WAWebMsgType").MsgKind.Protocol,
        viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
        count: null,
        t: o("WATimeUtils").unixTime(),
        ack: o("WAWebAck").ACK.CLOCK,
        local: !0,
        messageSecret: r,
      };
    }
    async function c(e, t, n) {
      await o("WAWebSchemaMessage")
        .getMessageTable()
        .createOrReplace(
          o("WAWebDBMessageSerialization").dbRowFromMessage(u(e, s(e, t), n)),
        );
    }
    async function d(e, t) {
      t.length !== 0 &&
        (await o("WAWebSchemaMessage")
          .getMessageTable()
          .bulkCreateOrReplace(
            t.map(function (t) {
              var n = t.secret,
                r = t.stanzaId;
              return o("WAWebDBMessageSerialization").dbRowFromMessage(
                u(e, s(e, r), n),
              );
            }),
          ));
    }
    async function m(e, t) {
      var n = s(e, t),
        r = await o("WAWebSchemaMessage").getMessageTable().get(n.toString());
      return r == null
        ? null
        : o("WAWebDBMessageSerialization").messageFromDbRow(r).messageSecret;
    }
    async function p(e, t) {
      var n = s(e, t);
      await o("WAWebSchemaMessage").getMessageTable().remove(n.toString());
    }
    async function _(e, t) {
      t.length !== 0 &&
        (await o("WAWebSchemaMessage")
          .getMessageTable()
          .bulkRemove(
            t.map(function (t) {
              return s(e, t).toString();
            }),
          ));
    }
    ((l.getWasaRootSecretMsgKeyForId = s),
      (l.upsertWasaRootSecretForId = c),
      (l.upsertWasaRootSecretsForIds = d),
      (l.getWasaRootSecretForId = m),
      (l.removeWasaRootSecretForId = p),
      (l.removeWasaRootSecretsForIds = _));
  },
  98,
);
