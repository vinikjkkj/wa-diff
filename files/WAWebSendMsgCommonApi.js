__d(
  "WAWebSendMsgCommonApi",
  [
    "WADeprecatedWapParser",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWap",
    "WAWebABProps",
    "WAWebAck",
    "WAWebAddonRetryRequestUtils",
    "WAWebCriticalEventWamEvent",
    "WAWebDeviceListPk",
    "WAWebHandleMsgError",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebReactionsBEUtils",
    "WAWebSchemaMessage",
    "WAWebSendMsgTypes",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebVerifyProtobufMsgObjectKeys",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "err",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 5;
    function d() {
      return (
        (o("WAWebABProps").getABPropConfigValue(
          "web_e2e_backfill_expire_time",
        ) || c) * 60
      );
    }
    function m(e, t) {
      var n = o("encodeProtobuf").encodeProtobuf(
        o("WAWebProtobufsE2E.pb").MessageSpec,
        e,
      );
      return (
        p(n.size(), t),
        o("WAWebSignalCommonUtils").writeRandomPadMax16(n),
        n.readByteArrayView()
      );
    }
    function p(e, t) {
      var n, a;
      if (
        e === 0 &&
        (new (o("WAWebCriticalEventWamEvent").CriticalEventWamEvent)({
          name: "empty_encoded_message_protobuf",
          context: "encodeAndPad",
          debug: JSON.stringify({
            messageType:
              (n = t == null ? void 0 : t.type) != null
                ? n
                : o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            messageSubtype:
              (a = t == null ? void 0 : t.subtype) != null ? a : null,
            observedAtUnixSeconds: o("WATimeUtils").unixTime(),
          }),
        }).commit(),
        !!r("justknobx")._("6983"))
      )
        throw new (o("WAWebHandleMsgError").MessageProtobufInvalidMessageTypes)(
          [],
        );
    }
    function _(e) {
      return (
        e.protocolMessage != null &&
        e.protocolMessage.type ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE
      );
    }
    function f(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s =
          (t = (n = e.protocolMessage) == null ? void 0 : n.type) != null
            ? t
            : (r = e.editedMessage) == null ||
                (r = r.message) == null ||
                (r = r.protocolMessage) == null
              ? void 0
              : r.type;
      return (
        s ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT ||
        ((a = e.secretEncryptedMessage) == null ? void 0 : a.secretEncType) ===
          o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType
            .EVENT_EDIT ||
        ((i = e.secretEncryptedMessage) == null ? void 0 : i.secretEncType) ===
          o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType
            .MESSAGE_EDIT ||
        ((l = e.secretEncryptedMessage) == null ? void 0 : l.secretEncType) ===
          o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType
            .POLL_EDIT
      );
    }
    function g(e) {
      return (
        e.keepInChatMessage != null &&
        e.keepInChatMessage.key != null &&
        e.keepInChatMessage.key.fromMe === !0 &&
        e.keepInChatMessage.keepType ===
          o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL
      );
    }
    function h(e, t) {
      var n,
        r = o("WAWebVerifyProtobufMsgObjectKeys").getProtobufMessageTypesSet(e),
        a =
          (n = o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).getUnwrappedProtobufMessage(e)) != null
            ? n
            : e;
      if (r.has(o("WAWebMsgType").MSG_TYPE.PROTOCOL)) {
        var i,
          l = (i = a.protocolMessage) == null ? void 0 : i.type;
        if (l === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE)
          return t === "admin_revoke"
            ? o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE
            : o("WAWebAck").EDIT_ATTR.SENDER_REVOKE;
        if (
          l ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT
        )
          return o("WAWebAck").EDIT_ATTR.MESSAGE_EDIT;
        if (
          l ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .MESSAGE_UNSCHEDULE
        )
          return o("WAWebAck").EDIT_ATTR.SENDER_REVOKE;
      } else {
        if (
          r.has(o("WAWebMsgType").MSG_TYPE.EVENT_EDIT_ENCRYPTED) ||
          r.has(o("WAWebMsgType").MSG_TYPE.MESSAGE_EDIT_ENCRYPTED) ||
          r.has(o("WAWebMsgType").MSG_TYPE.POLL_EDIT_ENCRYPTED)
        )
          return o("WAWebAck").EDIT_ATTR.MESSAGE_EDIT;
        if (r.has(o("WAWebMsgType").MSG_TYPE.REACTION)) {
          var s;
          if (
            ((s = a.reactionMessage) == null ? void 0 : s.text) ===
            o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT
          )
            return o("WAWebAck").EDIT_ATTR.SENDER_REVOKE;
        } else if (r.has(o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT)) {
          if (g(a)) return o("WAWebAck").EDIT_ATTR.SENDER_REVOKE;
        } else if (r.has(o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE))
          return o("WAWebAck").EDIT_ATTR.PIN_IN_CHAT;
      }
      return null;
    }
    function y(e, t) {
      var n = h(e, t);
      return n != null
        ? o("WAWap").CUSTOM_STRING(String(n))
        : o("WAWap").DROP_ATTR;
    }
    var C = new (r("WADeprecatedWapParser"))("sendMsgAckSyncParser", function (
      e,
    ) {
      return (
        e.assertTag("ack"),
        {
          t: e.attrTime("t"),
          sync: e.maybeAttrString("sync"),
          phash: e.maybeAttrString("phash"),
          refreshLid: e.hasAttr("refresh_lid")
            ? e.attrString("refresh_lid") === "true"
            : !1,
          addressingMode: e.maybeAttrString("addressing_mode"),
          count: e.maybeAttrInt("count"),
          error: e.maybeAttrInt("error"),
        }
      );
    });
    function b(e) {
      return e.device == null || e.device === o("WAJids").DEFAULT_DEVICE_ID;
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.data.id;
          if (e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Addon) {
            var r = yield o("WAWebAddonRetryRequestUtils").hasSentAddonMsg(n);
            if (r != null)
              return o("WAWebSignalProtocolStore")
                .getPersistSignalProtocolStore()
                .updateIdentityRangeAfterEncryption(
                  "sentAddonRowId",
                  r.rowId,
                  t.map(function (e) {
                    return o("WAWebSignalCommonUtils")
                      .createSignalAddress(e)
                      .toString();
                  }),
                );
          } else if (
            e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message
          ) {
            var a = yield o("WAWebSchemaMessage")
                .getMessageTable()
                .get(String(n), !1),
              i = a == null ? void 0 : a.rowId;
            if (i != null)
              return o("WAWebSignalProtocolStore")
                .getPersistSignalProtocolStore()
                .updateIdentityRangeAfterEncryption(
                  "rowId",
                  i,
                  t.map(function (e) {
                    return o("WAWebSignalCommonUtils")
                      .createSignalAddress(e)
                      .toString();
                  }),
                );
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.data.id;
          if (t.type === o("WAWebSendMsgTypes").SendMessageRecordType.Addon) {
            var r = yield o("WAWebAddonRetryRequestUtils").hasSentAddonMsg(n);
            return (
              r ||
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "filterDeviceWithChangedIdentity: addon not found: ",
                      "",
                    ])),
                  n,
                ),
              r == null ? void 0 : r.rowId
            );
          } else if (
            t.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message
          ) {
            var a = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .get(String(n), !1);
            return (
              a ||
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "filterDeviceWithChangedIdentity: message not found: ",
                      "",
                    ])),
                  n,
                ),
              a == null ? void 0 : a.rowId
            );
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield R(e);
          if (n == null)
            throw (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[filterDeviceWithChangedIdentity] no rowId msg=",
                    " type=",
                    "",
                  ])),
                e.data.id,
                e.data.type,
              ),
              r("err")(
                "filterDeviceWithChangedIdentity: cannot determine message rowId",
              )
            );
          var a = new Map();
          t.forEach(function (e) {
            a.set(o("WAWebDeviceListPk").createDeviceListPK(e), e);
          });
          var i = Array.from(a.values(), function (e) {
              return o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                e.user,
                e.server,
                o("WAJids").DEFAULT_DEVICE_ID,
              );
            }),
            l = yield o("WAWebSignalProtocolStore")
              .getPersistSignalProtocolStore()
              .bulkGetIdentityWithRowId(
                i.map(function (e) {
                  return o("WAWebSignalCommonUtils").createSignalAddress(e);
                }),
              ),
            s = new Set();
          return (
            l.forEach(function (t, r) {
              var a =
                  e.type === o("WAWebSendMsgTypes").SendMessageRecordType.Addon
                    ? t == null
                      ? void 0
                      : t.sentAddonRowId
                    : t == null
                      ? void 0
                      : t.rowId,
                l = i[r];
              (a == null || a > n) &&
                s.add(o("WAWebDeviceListPk").createDeviceListPK(l));
            }),
            t.filter(function (e) {
              return !s.has(o("WAWebDeviceListPk").createDeviceListPK(e));
            })
          );
        })),
        k.apply(this, arguments)
      );
    }
    ((l.getResendTimeoutInSeconds = d),
      (l.encodeAndPad = m),
      (l.isRevokeMsg = _),
      (l.isEditMsg = f),
      (l.getEditAttrValue = h),
      (l.editAttribute = y),
      (l.sendMsgAckSyncParser = C),
      (l.isPrimaryDevice = b),
      (l.updateIdentityRange = v),
      (l.filterDeviceWithChangedIdentity = E));
  },
  98,
);
