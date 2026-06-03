__d(
  "WAWebProcessEncryptedEventResponseMsgs",
  [
    "Promise",
    "WALogger",
    "WALongInt",
    "WANullthrows",
    "WAWebAddonEncryption",
    "WAWebAddonEncryptionError",
    "WAWebEventResponseMsgDataConversion",
    "WAWebEventsValidationError",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = [],
            l = new Map();
          if (
            (t.forEach(function (e) {
              if (e.addonEncrypted) {
                var t = a.getForAddon(e);
                l.set(e, t);
              } else i.push(e);
            }),
            l.size === 0)
          )
            return i;
          var c = yield (u || (u = n("Promise"))).allSettled(
            Array.from(l.entries(), function (e) {
              var t = e[0],
                n = e[1];
              return m(t, n);
            }),
          );
          return i.concat(
            r("compactMap")(c, function (t) {
              switch (t.status) {
                case "fulfilled":
                  return t.value;
                case "rejected": {
                  var n = t.reason;
                  if (
                    n instanceof
                      o("WAWebEventsValidationError")
                        .EventCreationValidationError ||
                    n instanceof
                      o("WAWebEventsValidationError")
                        .EncryptedEventResponseValidationError
                  ) {
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Processing encrypted event response failed: ",
                            "",
                          ])),
                        n.code,
                      )
                      .sendLogs(n.code);
                    return;
                  }
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose(
                          [
                            "Processing encrypted event response failed: ",
                            "\n",
                            "",
                          ],
                          [
                            "Processing encrypted event response failed: ",
                            "\\n",
                            "",
                          ],
                        )),
                      n.message,
                      n.stack,
                    )
                    .sendLogs("unknown-error");
                }
              }
            }),
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = e.encIv,
            i = e.encPayload,
            l = o("WAWebAddonEncryptionError").getValidatedMessageSecret(
              o("WAWebMsgType").MsgKind.EventResponseEncrypted,
              t,
            ),
            s = o("WAWebMsgGetters").getOriginalSender(t),
            u = o("WAWebMsgGetters").getSender(e);
          if (u == null)
            throw new (o(
              "WAWebEventsValidationError",
            ).EncryptedEventResponseValidationError)(
              o("WAWebEventsValidationError")
                .EncryptedEventResponseValidationErrorCode
                .EVENT_RESPONSE_MISSING_MESSAGE_SENDER,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (s == null)
            throw new (o(
              "WAWebEventsValidationError",
            ).EventCreationValidationError)(
              o("WAWebEventsValidationError").EventCreationValidationErrorCode
                .EVENT_CREATION_MISSING_MESSAGE_SENDER,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (a == null)
            throw new (o(
              "WAWebEventsValidationError",
            ).EncryptedEventResponseValidationError)(
              o("WAWebEventsValidationError")
                .EncryptedEventResponseValidationErrorCode
                .EVENT_RESPONSE_MISSING_ENC_IV,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (i == null)
            throw new (o(
              "WAWebEventsValidationError",
            ).EncryptedEventResponseValidationError)(
              o("WAWebEventsValidationError")
                .EncryptedEventResponseValidationErrorCode
                .EVENT_RESPONSE_MISSING_ENC_PAYLOAD,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          var c = {
              type: o("WAWebMsgType").MsgKind.EventResponseEncrypted,
              encryptedAddOn: i,
            },
            d = o("WAWebWidFactory").asUserWidOrThrow(u),
            m = yield o("WAWebAddonEncryption").decryptAddOn(c, {
              messageSecret: l,
              iv: a,
              stanzaId: t.id.id,
              originalMessageSender: s,
              addOnSender: d,
            }),
            p = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").Message$EventResponseMessageSpec,
              m,
            );
          return o(
            "WAWebEventResponseMsgDataConversion",
          ).protobufToEventResponseMsgData({
            responseProtobuf: p,
            parentMsgKey: e.targetMessageKey,
            id: e.id,
            senderTimestampMs: o("WALongInt").numberOrThrowIfTooLarge(
              r("WANullthrows")(p.timestampMs),
            ),
            t: o("WAWebMsgGetters").getT(e),
            ack: (n = e.ack) != null ? n : null,
            read: o("WAWebUserPrefsMeUser").isMeAccount(d),
          });
        })),
        p.apply(this, arguments)
      );
    }
    ((l.processEncryptedEventResponseMsgs = c),
      (l.decryptEncryptedEventResponseMsg = m));
  },
  98,
);
