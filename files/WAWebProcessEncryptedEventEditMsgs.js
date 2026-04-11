__d(
  "WAWebProcessEncryptedEventEditMsgs",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebAddonEncryption",
    "WAWebAddonEncryptionError",
    "WAWebAddonInfraError",
    "WAWebApiContact",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebEventEditDecryptedMsgDataConversion",
    "WAWebEventsValidationError",
    "WAWebHandleMsgValidate",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebVerifyProtobufMsgObjectKeys",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWid",
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
          var i = new Map();
          if (
            (t.forEach(function (e) {
              if (e.kind !== o("WAWebMsgType").MsgKind.EventEditEncrypted)
                throw new (o("WAWebAddonInfraError").AddonInfraError)(
                  o("WAWebAddonInfraError").AddonInfraErrorCode
                    .UnexpectedMsgType,
                );
              var t = a.getForAddon(e);
              i.set(e, t);
            }),
            i.size === 0)
          )
            return [];
          var l = yield (u || (u = n("Promise"))).allSettled(
            Array.from(i.entries(), function (e) {
              var t = e[0],
                n = e[1];
              return m(t, n);
            }),
          );
          return r("compactMap")(l, function (t) {
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
                      .EncryptedEventEditValidationError ||
                  n instanceof
                    o("WAWebAddonEncryptionError").DualEncryptionValidationError
                ) {
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Processing encrypted event edit failed: ",
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
                        ["Processing encrypted event edit failed: ", "\n", ""],
                        ["Processing encrypted event edit failed: ", "\\n", ""],
                      )),
                    n.message,
                    n.stack,
                  )
                  .sendLogs("event_edit_unknown_error");
              }
            }
          });
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
            a,
            i,
            l = e.encIv,
            s = e.encPayload,
            u = o("WAWebAddonEncryptionError").getValidatedMessageSecret(
              o("WAWebMsgType").MsgKind.EventEditEncrypted,
              t,
            ),
            c = o("WAWebMsgGetters").getOriginalSender(t),
            d = o("WAWebMsgGetters").getSender(e);
          if (d == null)
            throw new (o(
              "WAWebEventsValidationError",
            ).EncryptedEventEditValidationError)(
              o("WAWebEventsValidationError")
                .EncryptedEventEditValidationErrorCode
                .EVENT_EDIT_MISSING_MESSAGE_SENDER,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (c == null)
            throw new (o(
              "WAWebEventsValidationError",
            ).EventCreationValidationError)(
              o("WAWebEventsValidationError").EventCreationValidationErrorCode
                .EVENT_CREATION_MISSING_MESSAGE_SENDER,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (l == null)
            throw new (o(
              "WAWebEventsValidationError",
            ).EncryptedEventEditValidationError)(
              o("WAWebEventsValidationError")
                .EncryptedEventEditValidationErrorCode
                .EVENT_EDIT_MISSING_ENC_IV,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (s == null)
            throw new (o(
              "WAWebEventsValidationError",
            ).EncryptedEventEditValidationError)(
              o("WAWebEventsValidationError")
                .EncryptedEventEditValidationErrorCode
                .EVENT_EDIT_MISSING_ENC_PAYLOAD,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (
            !r("WAWebWid").equals.apply(
              r("WAWebWid"),
              o("WAWebLidMigrationUtils").toCommonAddressingMode(d, c),
            )
          )
            throw new (o(
              "WAWebEventsValidationError",
            ).EncryptedEventEditValidationError)(
              o("WAWebEventsValidationError")
                .EncryptedEventEditValidationErrorCode
                .EVENT_EDIT_PARENT_SENDER_MISMATCH,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          var m = {
              type: o("WAWebMsgType").MsgKind.EventEditEncrypted,
              encryptedAddOn: s,
            },
            p = o("WAWebWidFactory").asUserWidOrThrow(d),
            _ = c,
            f = p;
          if (
            o("WAWebABProps").getABPropConfigValue(
              "lid_one_to_one_migration_event_response_force_pn_jid",
            ) &&
            t.from.isRegularUser()
          ) {
            if (c.isLid()) {
              var g;
              _ = (g = o("WAWebApiContact").getPhoneNumber(c)) != null ? g : c;
            }
            if (p.isLid()) {
              var h;
              f = (h = o("WAWebApiContact").getPhoneNumber(p)) != null ? h : p;
            }
          }
          var y;
          try {
            y = yield o("WAWebAddonEncryption").decryptAddOn(m, {
              messageSecret: u,
              iv: l,
              stanzaId: t.id.id,
              originalMessageSender: _,
              addOnSender: f,
            });
          } catch (e) {
            if (
              e instanceof
                o("WAWebAddonEncryptionError").DualEncryptionValidationError &&
              (c !== _ || p !== f)
            )
              y = yield o("WAWebAddonEncryption").decryptAddOn(m, {
                messageSecret: u,
                iv: l,
                stanzaId: t.id.id,
                originalMessageSender: c,
                addOnSender: p,
              });
            else throw e;
          }
          var C = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSpec,
              y,
            ),
            b = o(
              "WAWebEventEditDecryptedMsgDataConversion",
            ).protobufToEventEditDecryptedMsgData(
              (n = o(
                "WAWebVerifyProtobufMsgObjectKeys",
              ).getUnwrappedProtobufMessage(C)) != null
                ? n
                : C,
              e,
              u,
            ),
            v =
              (a =
                (i = C.messageContextInfo) == null
                  ? void 0
                  : i.messageSecret) != null
                ? a
                : e.messageSecret,
            S = babelHelpers.extends({}, b, {
              plainProtobufBytes: new Uint8Array(y),
            });
          return (
            v != null && (S.messageSecret = new Uint8Array(v)),
            yield o(
              "WAWebHandleMsgValidate",
            ).validateAndProcessReportingTokenInfo({
              renderableMsgs: [S],
              forceDualEncryptedValidation: !0,
            }),
            o("WAWebDBProcessEditProtocolMsgs").generateMessageEdit(t, b)
          );
        })),
        p.apply(this, arguments)
      );
    }
    l.processEncryptedEventEditMsgs = c;
  },
  98,
);
