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
    var e, s, u, c, d, m, p, _, f;
    function g(e, t) {
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
    function h(t) {
      var n = t.addOnSender,
        r = t.addonType,
        a = t.originalMessageSender,
        i = t.parentWid,
        l = o("WAWebWidToJid").widToUserJid(a),
        u = o("WAWebWidToJid").widToUserJid(n);
      if (
        o("WAWebABProps").getABPropConfigValue(
          "lid_one_to_one_migration_event_response_force_pn_jid",
        ) &&
        i != null &&
        i.isRegularUser() &&
        (r === o("WAWebMsgType").MsgKind.EventResponseDecrypted ||
          r === o("WAWebMsgType").MsgKind.EventEditDecrypted)
      ) {
        if (a.isLid()) {
          var c = o("WAWebApiContact").getPhoneNumber(a);
          c
            ? (l = o("WAWebWidToJid").widToUserJid(c))
            : o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "LID to PN Mapping not found for message sender",
                    ])),
                )
                .sendLogs("missing-lid-to-pn-mapping-for-message-sender");
        }
        if (n.isLid()) {
          var d = o("WAWebApiContact").getPhoneNumber(n);
          d
            ? (u = o("WAWebWidToJid").widToUserJid(d))
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
          ((l = y(a, "message-sender")), (u = y(n, "addon-sender"))),
        { originalMessageSenderJid: l, addOnSenderJid: u }
      );
    }
    function y(e, t) {
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
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.addOnSender,
            a = t.iv,
            i = t.messageSecret,
            l = t.originalMessageSender,
            s = t.parentWid,
            u = t.stanzaId;
          try {
            var d = h({
                addOnSender: n,
                addonType: e.type,
                originalMessageSender: l,
                parentWid: s,
              }),
              m = d.addOnSenderJid,
              p = d.originalMessageSenderJid,
              _ = r("WANullthrows")(E(e.type)),
              f = _.spec,
              y = _.usecase,
              C = yield o("WAUseCaseSecret").createUseCaseSecret({
                messageSecret: i,
                stanzaId: u,
                parentMsgOriginalSender: p,
                modificationSender: m,
                modificationType: y,
              }),
              b = o("encodeProtobuf").encodeProtobuf(f, e.encode).readBuffer(),
              v = yield o("WACryptoAesGcm").gcmEncrypt(
                C,
                a,
                b,
                g(e.type, { stanzaId: u, addOnSenderJid: m }),
              ),
              S =
                (e.type === o("WAWebMsgType").MsgKind.CommentDecrypted ||
                  e.type === o("WAWebMsgType").MsgKind.EventEditDecrypted ||
                  e.type === o("WAWebMsgType").MsgKind.MessageEditDecrypted) &&
                o(
                  "WAWebMessagingGatingUtils",
                ).isDualEncryptedReportingTokenSendingEnabled()
                  ? new (o(
                      "WAWebReportingTokenContent",
                    ).ReportingTokenContentCalculator)(
                      new Uint8Array(b),
                      o("WAWebReportingTokenConfig").getReportingTokenConfig(
                        o(
                          "WAWebMessagingGatingUtils",
                        ).getSenderReportingTokenVersion(),
                      ),
                    ).getReportingTokenContent()
                  : null;
            return babelHelpers.extends(
              { encPayload: v },
              S != null && { reportingTokenContent: S },
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
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.addOnSenderJid,
            a = t.iv,
            i = t.messageSecret,
            l = t.originalMessageSenderJid,
            s = t.stanzaId,
            u = r("WANullthrows")(E(e.type)),
            c = u.usecase,
            d = yield o("WAUseCaseSecret").createUseCaseSecret({
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
            g(e.type, { stanzaId: s, addOnSenderJid: n }),
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.addOnSender,
            r = t.iv,
            a = t.messageSecret,
            i = t.originalMessageSender,
            l = t.stanzaId,
            s = { messageSecret: a, iv: r, stanzaId: l },
            u = o("WAWebLidMigrationUtils").toUserLid(i),
            c = o("WAWebLidMigrationUtils").toUserLid(n);
          if (u != null && c != null)
            try {
              return yield v(
                e,
                babelHelpers.extends({}, s, {
                  originalMessageSenderJid: o("WAWebWidToJid").widToUserJid(u),
                  addOnSenderJid: o("WAWebWidToJid").widToUserJid(c),
                }),
              );
            } catch (t) {
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
              return yield v(
                e,
                babelHelpers.extends({}, s, {
                  originalMessageSenderJid: o("WAWebWidToJid").widToUserJid(g),
                  addOnSenderJid: o("WAWebWidToJid").widToUserJid(h),
                }),
              );
            } catch (t) {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "decryptAddOn: PN attempt failed for ",
                    " ",
                    ", trying original",
                  ])),
                l,
                e.type,
              );
            }
          try {
            var y = yield v(
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
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "decryptAddOn: fallback orig=LID addon=PN ",
                          " ",
                          "",
                        ])),
                      i.toLogString(),
                      n.toLogString(),
                    )
                    .sendLogs(
                      "addon-asymmetric-decryption-original-lid-addon-pn",
                      { sampling: 0.01 },
                    )
                : !i.isLid() &&
                  n.isLid() &&
                  o("WALogger")
                    .WARN(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "decryptAddOn: fallback orig=PN addon=LID ",
                          " ",
                          "",
                        ])),
                      i.toLogString(),
                      n.toLogString(),
                    )
                    .sendLogs(
                      "addon-asymmetric-decryption-original-pn-addon-lid",
                      { sampling: 0.01 },
                    ),
              y
            );
          } catch (t) {
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
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
          throw new (o(
            "WAWebAddonEncryptionError",
          ).DualEncryptionValidationError)(
            e.type,
            o("WAWebAddonEncryptionError").DualEncryptionValidationErrorCode
              .DECRYPTION_ERROR,
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
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
    ((l.encryptAddOn = C), (l.decryptAddOn = R));
  },
  98,
);
