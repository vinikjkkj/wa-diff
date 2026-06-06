__d(
  "WAWebUnquarantineMessageJob",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBMessageSerialization",
    "WAWebE2EProtoParser",
    "WAWebProtobufsE2E.pb",
    "WAWebQuarantineDataStore",
    "WAWebSchemaMessage",
    "decodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t, n) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "unquarantineMessageJob: Starting unquarantine for message ",
            "",
          ])),
        t.toString(),
      );
      var a = o("WAWebSchemaMessage").getMessageTable(),
        i = await a.get(t.toString());
      if (i == null)
        throw r("err")("unquarantineMessageJob: Message not found in database");
      var l =
        n != null
          ? n
          : await o("WAWebQuarantineDataStore").getQuarantineData(t.toString());
      if (l == null)
        throw r("err")("unquarantineMessageJob: Quarantine data not found");
      var c = l.originalProtobuf,
        m;
      try {
        m = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsE2E.pb").MessageSpec,
          new Uint8Array(c),
        );
      } catch (e) {
        throw (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "unquarantineMessageJob: Failed to decode protobuf",
              ])),
          ),
          r("err")("unquarantineMessageJob: Failed to decode original protobuf")
        );
      }
      var p = o("WAWebDBMessageSerialization").messageFromDbRow(i),
        _ = d(p),
        f = o("WAWebE2EProtoParser").parseMsgProto({
          message: _,
          messageProtobuf: m,
          msgContext: "relay",
        }),
        g = babelHelpers.extends({}, f, { quarantineExtractedText: null }),
        h = o("WAWebDBMessageSerialization").dbRowFromMessage(g);
      ((h.rowId = i.rowId),
        (h.internalId = i.internalId),
        await a.createOrReplace(h),
        await o("WAWebQuarantineDataStore").deleteQuarantineData(t.toString()),
        await o("WAWebBackendApi").frontendSendAndReceive("updateMessageUI", {
          chatId: t.remote,
          msg: g,
        }),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "unquarantineMessageJob: Successfully unquarantined message ",
              "",
            ])),
          t.toString(),
        ));
    }
    function d(e) {
      return {
        id: e.id,
        from: e.from,
        to: e.to,
        author: e.author,
        broadcastId: e.broadcastId,
        type: e.type,
        viewMode: e.viewMode,
        subtype: e.subtype,
        count: e.count,
        notifyName: e.notifyName,
        ack: e.ack,
        t: e.t,
        clientReceivedTsMillis: e.clientReceivedTsMillis,
        invis: e.invis,
        local: e.local,
        hostedBizEncStateMismatch: e.hostedBizEncStateMismatch,
        placeholderCreatedWhenAccountIsHosted:
          e.placeholderCreatedWhenAccountIsHosted,
        senderOrRecipientAccountTypeHosted:
          e.senderOrRecipientAccountTypeHosted,
        limitSharing: e.limitSharing,
        mmSignalSharing: e.mmSignalSharing,
      };
    }
    l.unquarantineMessageJob = c;
  },
  98,
);
