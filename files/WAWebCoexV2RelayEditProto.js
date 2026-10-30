__d(
  "WAWebCoexV2RelayEditProto",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAddonEncryption",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = ["messageSecret"];
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = t.secretEncryptedMessage;
          if (
            a == null ||
            a.secretEncType !==
              o("WAWebProtobufsE2E.pb")
                .Message$SecretEncryptedMessage$SecretEncType.MESSAGE_EDIT ||
            o("WAWebABProps").getABPropConfigValue(
              "disable_message_secret_for_edit_to_bot",
            ) !== !0
          )
            return t;
          try {
            var i = yield p(a, n);
            return d(i, t);
          } catch (n) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] failed to unwrap edit for relay; keeping encrypted copy",
                    ])),
                )
                .catching(r("getErrorSafe")(n))
                .sendLogs("coexv2-relay-edit-decrypt-failed"),
              t
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
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
            messageContextInfo: m(t.messageContextInfo),
          });
    }
    function m(e) {
      if (e == null) return null;
      var t = e.messageSecret,
        n = babelHelpers.objectWithoutPropertiesLoose(e, s);
      return Object.values(n).some(function (e) {
        return e != null;
      })
        ? n
        : null;
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.encIv,
            a = e.encPayload,
            i = e.targetMessageKey,
            l = i == null ? void 0 : i.id;
          if (n == null || a == null || l == null || t == null)
            throw r("err")("[coexv2] incomplete secret-encrypted edit");
          var s = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            u = yield o("WAWebAddonEncryption").decryptAddOn(
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
        })),
        _.apply(this, arguments)
      );
    }
    l.genCoexV2RelayProtobuf = u;
  },
  98,
);
