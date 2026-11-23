__d(
  "MAWMpsMutateMessagePreprocessor",
  [
    "FBLogger",
    "MAWMpsTypes",
    "MAWProtobufDeserializers",
    "MpsErrors",
    "MpsPreprocessor",
    "MpsTypes",
    "WAArmadilloApplication.pb",
    "WAArmadilloBackupMessage.pb",
    "WAJids",
    "WAMsgApplication.pb",
    "WmiErrorFixesGate",
    "WmiErrorReport",
    "WmiMapIsolated",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [m, c, u];
    function s(e, t, n) {
      var r = { ephemeralType: n },
        a = { payload: { content: { ravenMessage: r } } },
        i = {
          metadata: t.metadata,
          payload: {
            subProtocol: {
              armadillo: {
                payload: o("encodeProtobuf")
                  .encodeProtobuf(
                    o("WAArmadilloApplication.pb").ArmadilloSpec,
                    a,
                  )
                  .readBuffer(),
                version: 1,
              },
            },
          },
        },
        l = o("encodeProtobuf")
          .encodeProtobuf(o("WAMsgApplication.pb").MessageApplicationSpec, i)
          .readBuffer(),
        s = { encryptedTransportMessage: l, metadata: e.proto.metadata };
      return o("MpsTypes").toBytes(
        o("encodeProtobuf")
          .encodeProtobuf(o("WAArmadilloBackupMessage.pb").BackupMessageSpec, s)
          .readBuffer(),
      );
    }
    function u(e, t) {
      var n,
        r = e.directive,
        a = e.insertionSource,
        i = e.message,
        l =
          (n = t.encryptedTransportMessage()) == null ||
          (n = n.armadillo()) == null ||
          (n = n.payload) == null ||
          (n = n.content) == null
            ? void 0
            : n.ravenActionNotifMessage;
      if (l != null) {
        var s = r.targetMessageId,
          u = {
            actionType: o("MpsTypes").ActionType.UpsertSupplemental,
            debugFlags: r.debugFlags,
            isLocalOnly: !1,
            isTransportErrorPlaceholder: !1,
            supplementalKey: r == null ? void 0 : r.supplementalKey,
            tags: [],
            targetMessageId: s,
          },
          c = {
            actionType: o("MpsTypes").ActionType.DeleteSupplemental,
            debugFlags: r.debugFlags,
            isLocalOnly: !0,
            isTransportErrorPlaceholder: !1,
            supplementalKey: o("MpsTypes").toSupplementalKey(
              o("MAWMpsTypes").SupplementalKeyPrefixMps.RAVEN_ORIGINAL_MESSAGE,
            ),
            tags: [],
            targetMessageId: s,
          },
          d = {
            messageId: s,
            payload: i.payload,
            senderId: i.senderId,
            threadId: i.threadId,
            timestampMs: i.timestampMs,
          };
        return [
          { directive: u, insertionSource: a, message: i },
          { directive: c, insertionSource: a, message: d },
        ];
      }
    }
    function c(e, t) {
      var n,
        r = e.directive,
        a = e.insertionSource,
        i = e.message,
        l = t.encryptedTransportMessage(),
        u =
          (n = t.encryptedTransportMessage()) == null ||
          (n = n.armadillo()) == null ||
          (n = n.payload) == null ||
          (n = n.content) == null ||
          (n = n.ravenMessageMsgr) == null
            ? void 0
            : n.ephemeralType;
      if (!(l == null || u == null)) {
        var c = [],
          d = {
            messageId: i.messageId,
            payload: s(t, l.proto, u),
            senderId: i.senderId,
            threadId: i.threadId,
            timestampMs: i.timestampMs,
          },
          m = {
            actionType: o("MpsTypes").ActionType.UpsertTopLevel,
            debugFlags: r.debugFlags,
            isLocalOnly: !1,
            isTransportErrorPlaceholder: !1,
            tags: [],
            targetMessageId: i.messageId,
          },
          p = {
            actionType: o("MpsTypes").ActionType.UpsertSupplemental,
            debugFlags: r.debugFlags,
            isLocalOnly: !0,
            isTransportErrorPlaceholder: !1,
            supplementalKey: o("MpsTypes").toSupplementalKey(
              o("MAWMpsTypes").SupplementalKeyPrefixMps.RAVEN_ORIGINAL_MESSAGE,
            ),
            tags: [],
            targetMessageId: i.messageId,
          };
        return (
          c.push(
            { directive: m, insertionSource: a, message: d },
            { directive: p, insertionSource: a, message: i },
          ),
          c
        );
      }
    }
    function d(e) {
      if (e == null) return null;
      var t = o("WAJids").interpretAndValidateJid(e);
      return t.jidType === "msgrUser"
        ? t.userJid
        : t.jidType === "group"
          ? t.groupJid
          : (t.jidType, null);
    }
    function m(e, t) {
      var n,
        r,
        o =
          (n = t.encryptedTransportMessage()) == null ||
          (n = n.armadillo()) == null ||
          (n = n.payload) == null
            ? void 0
            : n.applicationData;
      if (o != null) {
        var a = [];
        if (((r = o.metadataSync) == null ? void 0 : r.actions) != null) {
          var i;
          (i = o.metadataSync) == null ||
            i.actions.forEach(function (t) {
              return p(a, e, t);
            });
        }
        return a;
      }
    }
    function p(e, t, n) {
      if (n.chatAction != null) return _(e, t, n.chatAction);
      if (n.messageAction != null) return f(e, t, n.messageAction);
    }
    function _(e, t, n) {
      var r = t.directive,
        a = t.insertionSource,
        i = t.message;
      if (n.chatId == null) {
        o("WmiErrorReport").reportWmiError(
          o("MpsErrors").MpsErrors.error(
            "payload_incomplete",
            "appdata chat action chatId",
          ),
        );
        return;
      }
      if (
        (n.chatDelete != null &&
          e.push({
            directive: {
              actionType: o("MpsTypes").ActionType.DeleteThread,
              debugFlags: r.debugFlags,
              isLocalOnly: !0,
              isTransportErrorPlaceholder: !1,
              tags: [],
              targetMessageId: i.messageId,
            },
            insertionSource: a,
            message: babelHelpers.extends({}, i, {
              threadId: o("MpsTypes").toThreadId(n.chatId),
            }),
          }),
        n.chatArchive != null)
      ) {
        o("WmiErrorReport").reportWmiError(
          o("MpsErrors").MpsErrors.error(
            "unsupported_payload",
            "appdata chat archive",
          ),
        );
        return;
      }
      if (n.chatRead != null) {
        o("WmiErrorReport").reportWmiError(
          o("MpsErrors").MpsErrors.error(
            "unsupported_payload",
            "appdata chat read",
          ),
        );
        return;
      }
    }
    function f(e, t, n) {
      var r = t.directive,
        a = t.insertionSource,
        i = t.message;
      if (n.key == null) {
        o("WmiErrorReport").reportWmiError(
          o("MpsErrors").MpsErrors.error(
            "payload_incomplete",
            "appdata message key",
          ),
        );
        return;
      }
      var l = n.key.id,
        s = d(n.key.remoteJid);
      if (s == null) {
        o("WmiErrorReport").reportWmiError(
          o("MpsErrors").MpsErrors.error(
            "payload_incomplete",
            "appdata message key remoteJid",
          ),
        );
        return;
      }
      if (l == null) {
        o("WmiErrorReport").reportWmiError(
          o("MpsErrors").MpsErrors.error(
            "payload_incomplete",
            "appdata message key id",
          ),
        );
        return;
      }
      n.messageDelete != null &&
        e.push({
          directive: {
            actionType: o("MpsTypes").ActionType.DeleteTopLevel,
            debugFlags: r.debugFlags,
            isLocalOnly: !1,
            isTransportErrorPlaceholder: !1,
            tags: [],
            targetMessageId: o("MpsTypes").toMessageId(l),
          },
          insertionSource: a,
          message: babelHelpers.extends({}, i, {
            threadId: o("MpsTypes").toThreadId(s),
          }),
        });
    }
    function g(t) {
      for (var n of e) {
        var a = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(
            t.message.payload,
          ),
          i = n(t, a);
        if (i != null) return i;
      }
      if (o("WmiErrorFixesGate").isWmiErrorFixEnabled())
        throw o("MpsErrors").MpsErrors.error(
          "unsupported_payload",
          "no mutator for the payload",
        );
      return (
        r("FBLogger")("mps").debug(
          "mutate preprocessor left the payload unchanged",
        ),
        [t]
      );
    }
    var h = o("MpsPreprocessor").preprocessor(function (e) {
      var t = e.ctx,
        n = e.payloadList,
        r = o("WmiMapIsolated").wmiMapSettled(
          n,
          function (e) {
            return e.message.messageId;
          },
          function (e) {
            if (e.directive.actionType !== o("MpsTypes").ActionType.Preprocess)
              return [e];
            var n = g(e);
            return (
              n.length === 0 && t.messageToQpl.endSuccess(e.message.messageId),
              n
            );
          },
          function (e, t) {
            return o("MpsErrors").MpsErrors.classify(e, t, "write_failed");
          },
          "mutate_payload",
        ),
        a = r.errors,
        i = r.results;
      return { ctx: t, errors: a, payloadList: i.flat() };
    }, "mutate_message");
    l.MAWMpsMutateMessagePreprocessor = h;
  },
  98,
);
