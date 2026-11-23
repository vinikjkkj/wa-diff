__d(
  "WAWebCoexV2RelayEditProto",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAddonEncryption",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebUserUtils",
    "decodeProtobuf",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["messageSecret"],
      s;
    async function u(e, t) {
      var n = e.secretEncryptedMessage;
      if (
        n == null ||
        n.secretEncType !==
          o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType
            .MESSAGE_EDIT ||
        o("WAWebABProps").getABPropConfigValue(
          "disable_message_secret_for_edit_to_bot",
        ) !== !0
      )
        return e;
      try {
        var a = await m(n, t);
        return c(a, e);
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] failed to unwrap edit for relay; keeping encrypted copy",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("coexv2-relay-edit-decrypt-failed"),
          e
        );
      }
    }
    function c(e, t) {
      var n = e.protocolMessage;
      if (
        (n == null ? void 0 : n.type) !==
        o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT
      )
        throw r("err")("[coexv2] decrypted payload is not a message edit");
      var a = n == null ? void 0 : n.editedMessage;
      return (a == null ? void 0 : a.conversation) == null &&
        (a == null ? void 0 : a.extendedTextMessage) == null
        ? t
        : babelHelpers.extends({}, e, {
            messageContextInfo: d(t.messageContextInfo),
          });
    }
    function d(t) {
      if (t == null) return null;
      var n = t.messageSecret,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return Object.values(r).some(function (e) {
        return e != null;
      })
        ? r
        : null;
    }
    async function m(e, t) {
      var n = e.encIv,
        a = e.encPayload,
        i = e.targetMessageKey,
        l = i == null ? void 0 : i.id;
      if (n == null || a == null || l == null || t == null)
        throw r("err")("[coexv2] incomplete secret-encrypted edit");
      var s = o("WAWebUserUtils").getMeUserOrThrow(),
        u = await o("WAWebAddonEncryption").decryptAddOn(
          {
            type: o("WAWebMsgType").MsgKind.MessageEditEncrypted,
            encryptedAddOn: a,
          },
          {
            addOnSender: s,
            iv: n,
            messageSecret: t,
            originalMessageSender: s,
            stanzaId: l,
          },
        );
      return o("decodeProtobuf").decodeProtobuf(
        o("WAWebProtobufsE2E.pb").MessageSpec,
        u,
      );
    }
    l.genCoexV2RelayProtobuf = u;
  },
  98,
);
