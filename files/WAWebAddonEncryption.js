__d(
  "WAWebAddonEncryption",
  [
    "WACryptoAesGcm",
    "WALogger",
    "WANullthrows",
    "WAUseCaseSecret",
    "WAWebAddonEncryptionError",
    "WAWebApiContact",
    "WAWebLidMigrationUtils",
    "WAWebMessagingGatingUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebReportingTokenConfig",
    "WAWebReportingTokenContent",
    "WAWebWidToJid",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e, t) {
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
    function f(e) {
      var t = e.addOnSender,
        n = e.originalMessageSender,
        r = g(n, "message-sender"),
        o = g(t, "addon-sender");
      return { originalMessageSenderJid: r, addOnSenderJid: o };
    }
    function g(t, n) {
      var r = o("WAWebWidToJid").widToUserJid(t);
      if (
        !t.isRegularUserPn() ||
        !o("WAWebLidMigrationUtils").shouldHaveAccountLid(t)
      )
        return r;
      var a = o("WAWebApiContact").getCurrentLid(t);
      return a
        ? o("WAWebWidToJid").widToUserJid(a)
        : (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "PN to LID Mapping not found for ",
                  "",
                ])),
              n,
            )
            .tags("pnless-stanzas")
            .sendLogs("missing-pn-to-lid-mapping"),
          r);
    }
    async function h(e, t) {
      var n = t.addOnSender,
        r = t.iv,
        o = t.messageSecret,
        a = t.originalMessageSender,
        i = t.stanzaId,
        l = f({ addOnSender: n, originalMessageSender: a }),
        s = l.addOnSenderJid,
        u = l.originalMessageSenderJid;
      return y(e, {
        iv: r,
        messageSecret: o,
        stanzaId: i,
        originalMessageSenderJid: u,
        addOnSenderJid: s,
      });
    }
    async function y(e, t) {
      var n = t.addOnSenderJid,
        a = t.iv,
        i = t.messageSecret,
        l = t.originalMessageSenderJid,
        u = t.stanzaId;
      try {
        var c = r("WANullthrows")(v(e.type)),
          d = c.spec,
          m = c.usecase,
          p = await o("WAUseCaseSecret").createUseCaseSecret({
            messageSecret: i,
            stanzaId: u,
            parentMsgOriginalSender: l,
            modificationSender: n,
            modificationType: m,
          }),
          f = o("encodeProtobuf").encodeProtobuf(d, e.encode).readBuffer(),
          g = await o("WACryptoAesGcm").gcmEncrypt(
            p,
            a,
            f,
            _(e.type, { stanzaId: u, addOnSenderJid: n }),
          ),
          h =
            e.type === o("WAWebMsgType").MsgKind.CommentDecrypted ||
            e.type === o("WAWebMsgType").MsgKind.EventEditDecrypted ||
            e.type === o("WAWebMsgType").MsgKind.MessageEditDecrypted
              ? new (o(
                  "WAWebReportingTokenContent",
                ).ReportingTokenContentCalculator)(
                  new Uint8Array(f),
                  o("WAWebReportingTokenConfig").getReportingTokenConfig(
                    o(
                      "WAWebMessagingGatingUtils",
                    ).getSenderReportingTokenVersion(),
                  ),
                ).getReportingTokenContent()
              : null;
        return babelHelpers.extends(
          { encPayload: g },
          h != null && { reportingTokenContent: h },
        );
      } catch (t) {
        throw (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Failed encrypting an addon ",
                " ",
                " ",
                "",
              ])),
            u,
            e.type,
            t,
          ),
          new (o("WAWebAddonEncryptionError").DualEncryptionValidationError)(
            e.type,
            o("WAWebAddonEncryptionError").DualEncryptionValidationErrorCode
              .ENCRYPTION_ERROR,
          )
        );
      }
    }
    async function C(e, t) {
      var n = t.addOnSenderJid,
        a = t.iv,
        i = t.messageSecret,
        l = t.originalMessageSenderJid,
        s = t.stanzaId,
        u = r("WANullthrows")(v(e.type)),
        c = u.usecase,
        d = await o("WAUseCaseSecret").createUseCaseSecret({
          messageSecret: i,
          stanzaId: s,
          parentMsgOriginalSender: l,
          modificationSender: n,
          modificationType: c,
        });
      return o("WACryptoAesGcm").gcmDecrypt(
        d,
        a,
        e.encryptedAddOn,
        _(e.type, { stanzaId: s, addOnSenderJid: n }),
      );
    }
    async function b(e, t) {
      var n = t.addOnSender,
        r = t.iv,
        a = t.messageSecret,
        i = t.originalMessageSender,
        l = t.stanzaId,
        s = { messageSecret: a, iv: r, stanzaId: l },
        _ = o("WAWebLidMigrationUtils").toUserLid(i),
        f = o("WAWebLidMigrationUtils").toUserLid(n);
      if (_ != null && f != null)
        try {
          return await C(
            e,
            babelHelpers.extends({}, s, {
              originalMessageSenderJid: o("WAWebWidToJid").widToUserJid(_),
              addOnSenderJid: o("WAWebWidToJid").widToUserJid(f),
            }),
          );
        } catch (t) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "decryptAddOn: LID attempt failed for ",
                " ",
                ", trying PN",
              ])),
            l,
            e.type,
          );
        }
      var g = o("WAWebLidMigrationUtils").toPn(i),
        h = o("WAWebLidMigrationUtils").toPn(n);
      if (g != null && h != null)
        try {
          return await C(
            e,
            babelHelpers.extends({}, s, {
              originalMessageSenderJid: o("WAWebWidToJid").widToUserJid(g),
              addOnSenderJid: o("WAWebWidToJid").widToUserJid(h),
            }),
          );
        } catch (t) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "decryptAddOn: PN attempt failed for ",
                " ",
                ", trying original",
              ])),
            l,
            e.type,
          );
        }
      try {
        var y = await C(
          e,
          babelHelpers.extends({}, s, {
            originalMessageSenderJid: o("WAWebWidToJid").widToUserJid(i),
            addOnSenderJid: o("WAWebWidToJid").widToUserJid(n),
          }),
        );
        return (
          i.isLid() && !n.isLid()
            ? o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "decryptAddOn: fallback orig=LID addon=PN ",
                      " ",
                      "",
                    ])),
                  i.toLogString(),
                  n.toLogString(),
                )
                .sendLogs("addon-asymmetric-decryption-original-lid-addon-pn", {
                  sampling: 0.01,
                })
            : !i.isLid() &&
              n.isLid() &&
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "decryptAddOn: fallback orig=PN addon=LID ",
                      " ",
                      "",
                    ])),
                  i.toLogString(),
                  n.toLogString(),
                )
                .sendLogs("addon-asymmetric-decryption-original-pn-addon-lid", {
                  sampling: 0.01,
                }),
          y
        );
      } catch (t) {
        o("WALogger")
          .ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "decryptAddOn: original WIDs failed ",
                " ",
                " ",
                " ",
                " ",
                "",
              ])),
            l,
            e.type,
            i.toLogString(),
            n.toLogString(),
            t,
          )
          .sendLogs("addon-decryption-original-wid-failed");
      }
      throw new (o("WAWebAddonEncryptionError").DualEncryptionValidationError)(
        e.type,
        o("WAWebAddonEncryptionError").DualEncryptionValidationErrorCode
          .DECRYPTION_ERROR,
      );
    }
    function v(e) {
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
    ((l.encryptAddOn = h),
      (l.encryptAddOnRaw_DONT_CALL_DIRECTLY = y),
      (l.decryptAddOn = b));
  },
  98,
);
