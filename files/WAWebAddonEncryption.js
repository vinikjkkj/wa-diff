__d(
  "WAWebAddonEncryption",
  [
    "WACryptoAesGcm",
    "WALogger",
    "WANullthrows",
    "WAUseCaseSecret",
    "WAWebABProps",
    "WAWebAddonEncryptionError",
    "WAWebApiContact",
    "WAWebLidMigrationUtils",
    "WAWebMessagingGatingUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebReportingTokenConfig",
    "WAWebReportingTokenContent",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t) {
      switch (e) {
        case o("WAWebMsgType").MsgKind.PollVoteEncrypted:
        case o("WAWebMsgType").MsgKind.PollVoteDecrypted:
          return t.stanzaId + "\0" + t.addOnSenderJid;
        case o("WAWebMsgType").MsgKind.EventResponseEncrypted:
        case o("WAWebMsgType").MsgKind.EventResponseDecrypted:
          return t.stanzaId + "\0" + t.addOnSenderJid;
        default:
          return;
      }
    }
    function p(t, n, r, a) {
      var i = o("WAWebWidToJid").widToUserJid(n),
        l = o("WAWebWidToJid").widToUserJid(r);
      if (
        o("WAWebABProps").getABPropConfigValue(
          "lid_one_to_one_migration_event_response_force_pn_jid",
        ) &&
        a != null &&
        a.isRegularUser() &&
        (t === o("WAWebMsgType").MsgKind.EventResponseDecrypted ||
          t === o("WAWebMsgType").MsgKind.EventEditDecrypted)
      ) {
        if (n.isLid()) {
          var u = o("WAWebApiContact").getPhoneNumber(n);
          u
            ? (i = o("WAWebWidToJid").widToUserJid(u))
            : o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "LID to PN Mapping not found for message sender",
                    ])),
                )
                .sendLogs("missing-lid-to-pn-mapping-for-message-sender");
        }
        if (r.isLid()) {
          var c = o("WAWebApiContact").getPhoneNumber(r);
          c
            ? (l = o("WAWebWidToJid").widToUserJid(c))
            : o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "LID to PN Mapping not found for addon sender",
                    ])),
                )
                .sendLogs("missing-lid-to-pn-mapping-for-addon-sender");
        }
      }
      return (
        o("WAWebABProps").getABPropConfigValue("web_pnless_stanzas") &&
          ((i = _(n, "message-sender")), (l = _(r, "addon-sender"))),
        { originalMessageSenderJid: i, addOnSenderJid: l }
      );
    }
    function _(e, t) {
      var n = o("WAWebWidToJid").widToUserJid(e);
      if (
        !e.isRegularUserPn() ||
        !o("WAWebLidMigrationUtils").shouldHaveAccountLid(e)
      )
        return n;
      var r = o("WAWebApiContact").getCurrentLid(e);
      return r
        ? o("WAWebWidToJid").widToUserJid(r)
        : (o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "PN to LID Mapping not found for ",
                  "",
                ])),
              t,
            )
            .tags("pnless-stanzas")
            .sendLogs("missing-pn-to-lid-mapping"),
          n);
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.addOnSender,
            a = t.iv,
            i = t.messageSecret,
            l = t.originalMessageSender,
            s = t.parentWid,
            u = t.stanzaId;
          try {
            var d = p(e.type, l, n, s),
              _ = d.addOnSenderJid,
              f = d.originalMessageSenderJid,
              g = r("WANullthrows")(C(e.type)),
              h = g.spec,
              y = g.usecase,
              b = yield o("WAUseCaseSecret").createUseCaseSecret({
                messageSecret: i,
                stanzaId: u,
                parentMsgOriginalSender: f,
                modificationSender: _,
                modificationType: y,
              }),
              v = o("encodeProtobuf").encodeProtobuf(h, e.encode).readBuffer(),
              S = yield o("WACryptoAesGcm").gcmEncrypt(
                b,
                a,
                v,
                m(e.type, { stanzaId: u, addOnSenderJid: _ }),
              ),
              R =
                (e.type === o("WAWebMsgType").MsgKind.CommentDecrypted ||
                  e.type === o("WAWebMsgType").MsgKind.EventEditDecrypted ||
                  e.type === o("WAWebMsgType").MsgKind.MessageEditDecrypted) &&
                o(
                  "WAWebMessagingGatingUtils",
                ).isDualEncryptedReportingTokenSendingEnabled()
                  ? new (o(
                      "WAWebReportingTokenContent",
                    ).ReportingTokenContentCalculator)(
                      new Uint8Array(v),
                      o("WAWebReportingTokenConfig").getReportingTokenConfig(
                        o(
                          "WAWebMessagingGatingUtils",
                        ).getSenderReportingTokenVersion(),
                      ),
                    ).getReportingTokenContent()
                  : null;
            return babelHelpers.extends(
              { encPayload: S },
              R != null && { reportingTokenContent: R },
            );
          } catch (t) {
            throw (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed encrypting an addon ",
                    " ",
                    " ",
                    "",
                  ])),
                u,
                e.type,
                t,
              ),
              new (o(
                "WAWebAddonEncryptionError",
              ).DualEncryptionValidationError)(
                e.type,
                o("WAWebAddonEncryptionError").DualEncryptionValidationErrorCode
                  .ENCRYPTION_ERROR,
              )
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.addOnSender,
            a = t.iv,
            i = t.messageSecret,
            l = t.originalMessageSender,
            s = t.stanzaId;
          try {
            var u = o("WAWebWidToJid").widToUserJid(n),
              c = r("WANullthrows")(C(e.type)),
              p = c.usecase,
              _ = yield o("WAUseCaseSecret").createUseCaseSecret({
                messageSecret: i,
                stanzaId: s,
                parentMsgOriginalSender: o("WAWebWidToJid").widToUserJid(l),
                modificationSender: u,
                modificationType: p,
              }),
              f = yield o("WACryptoAesGcm").gcmDecrypt(
                _,
                a,
                e.encryptedAddOn,
                m(e.type, { stanzaId: s, addOnSenderJid: u }),
              );
            return f;
          } catch (t) {
            throw (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed decrypting an addon ",
                    " ",
                    " ",
                    "",
                  ])),
                s,
                e.type,
                t,
              ),
              new (o(
                "WAWebAddonEncryptionError",
              ).DualEncryptionValidationError)(
                e.type,
                o("WAWebAddonEncryptionError").DualEncryptionValidationErrorCode
                  .DECRYPTION_ERROR,
              )
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      switch (e) {
        case o("WAWebMsgType").MsgKind.ReactionEncrypted:
        case o("WAWebMsgType").MsgKind.ReactionDecrypted:
          return {
            spec: o("WAWebProtobufsE2E.pb").Message$ReactionMessageSpec,
            usecase:
              o("WAUseCaseSecret").UseCaseSecretModificationType.ENC_REACTION,
          };
        case o("WAWebMsgType").MsgKind.PollVoteEncrypted:
        case o("WAWebMsgType").MsgKind.PollVoteDecrypted:
          return {
            spec: o("WAWebProtobufsE2E.pb").Message$PollVoteMessageSpec,
            usecase:
              o("WAUseCaseSecret").UseCaseSecretModificationType.POLL_VOTE,
          };
        case o("WAWebMsgType").MsgKind.CommentEncrypted:
        case o("WAWebMsgType").MsgKind.CommentDecrypted:
          return {
            spec: o("WAWebProtobufsE2E.pb").MessageSpec,
            usecase:
              o("WAUseCaseSecret").UseCaseSecretModificationType.ENC_COMMENT,
          };
        case o("WAWebMsgType").MsgKind.EventResponseEncrypted:
        case o("WAWebMsgType").MsgKind.EventResponseDecrypted:
          return {
            spec: o("WAWebProtobufsE2E.pb").Message$EventResponseMessageSpec,
            usecase:
              o("WAUseCaseSecret").UseCaseSecretModificationType.EVENT_RESPONSE,
          };
        case o("WAWebMsgType").MsgKind.EventEditEncrypted:
        case o("WAWebMsgType").MsgKind.EventEditDecrypted:
          return {
            spec: o("WAWebProtobufsE2E.pb").MessageSpec,
            usecase:
              o("WAUseCaseSecret").UseCaseSecretModificationType
                .EVENT_EDIT_ENCRYPTED,
          };
        case o("WAWebMsgType").MsgKind.PollEditEncrypted:
        case o("WAWebMsgType").MsgKind.PollEditDecrypted:
          return {
            spec: o("WAWebProtobufsE2E.pb").MessageSpec,
            usecase:
              o("WAUseCaseSecret").UseCaseSecretModificationType
                .POLL_EDIT_ENCRYPTED,
          };
        case o("WAWebMsgType").MsgKind.PollAddOptionEncrypted:
        case o("WAWebMsgType").MsgKind.PollAddOptionDecrypted:
          return {
            spec: o("WAWebProtobufsE2E.pb").MessageSpec,
            usecase:
              o("WAUseCaseSecret").UseCaseSecretModificationType
                .POLL_ADD_OPTION,
          };
        case o("WAWebMsgType").MsgKind.MessageEditEncrypted:
        case o("WAWebMsgType").MsgKind.MessageEditDecrypted:
          return {
            spec: o("WAWebProtobufsE2E.pb").MessageSpec,
            usecase:
              o("WAUseCaseSecret").UseCaseSecretModificationType.MESSAGE_EDIT,
          };
      }
    }
    ((l.encryptAddOn = f), (l.decryptAddOn = h));
  },
  98,
);
