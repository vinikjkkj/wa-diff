__d(
  "WAConvertAppData",
  [
    "WAAppData",
    "WAArmadilloApplication.pb",
    "WAJids",
    "WALogger",
    "WAStanzaUtils",
    "WATimeUtils",
    "decodeProtobuf",
    "encodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g, h, y;
    function C(e) {
      var t = o("WAJids").interpretAndValidateJid(e);
      if (t.jidType === "msgrUser") return t.userJid;
      if (t.jidType === "group") return t.groupJid;
      throw (t.jidType, r("err")("Incorrect jid type: " + t.jidType));
    }
    function b(e) {
      var t = o("WAJids").interpretAndValidateJid(e);
      if (t.jidType === "msgrUser") return t.userJid;
      if (t.jidType === "msgrDevice")
        return o("WAJids").extractUserJid(t.deviceJid);
      throw (t.jidType, r("err")("Incorrect jid type: " + t.jidType));
    }
    function v(e) {
      return e != null
        ? typeof e == "number" && e > o("WATimeUtils").MAX_INT
          ? o("WATimeUtils").castMilliSecondsToUnixTime(e)
          : o("WATimeUtils").castLongIntToUnixTime(e)
        : void 0;
    }
    function S(e) {
      return e == null
        ? void 0
        : {
            lastMessageTimestamp: v(e.lastMessageTimestamp),
            lastSystemMessageTimestamp: v(e.lastSystemMessageTimestamp),
            messages:
              e.messages == null
                ? []
                : e.messages.map(function (e) {
                    return {
                      key:
                        e.key == null
                          ? void 0
                          : { fromMe: e.key.fromMe, id: e.key.id },
                      ts: v(e.timestamp),
                    };
                  }),
          };
    }
    function R(t, n) {
      var r = t.chatId;
      if (r == null)
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Missing chatId in chat action: ",
                "",
              ])),
            t,
          ),
          null
        );
      if (t.chatArchive != null) {
        var a = t.chatArchive,
          i = S(a.messageRange);
        return { chatJid: C(r), messageRange: i, ts: n, type: "chat_archive" };
      } else if (t.chatDelete != null) {
        var l = t.chatDelete,
          u = S(l.messageRange);
        return { chatJid: C(r), messageRange: u, ts: n, type: "chat_delete" };
      } else if (t.chatRead != null) {
        var c = t.chatRead,
          d = S(c.messageRange);
        return {
          chatJid: C(r),
          messageRange: d,
          read: c.read,
          ts: n,
          type: "chat_read",
        };
      } else
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Unknown appdata sync action type: ",
                "",
              ])),
            t,
          ),
          null
        );
    }
    function L(e) {
      var t = e.key,
        n = t == null ? void 0 : t.remoteJid,
        r = t == null ? void 0 : t.id,
        a = t == null ? void 0 : t.fromMe;
      if (t == null || n == null || a == null || r == null)
        return (
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Missing messageKey in message action: ",
                "",
              ])),
            e,
          ),
          null
        );
      var i = C(n),
        l = o("WAJids").interpretAsGroupJid(i) != null,
        s;
      if (l && !a) {
        if ((t == null ? void 0 : t.participant) == null)
          return (
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "No participant in messageKey in message action when it is group chat and message is not fromMe: ",
                  "",
                ])),
              e,
            ),
            null
          );
        s = b(t.participant);
      } else a ? (s = o("WAJids").AUTHOR_ME) : (s = b(n));
      var m = {
        author: s,
        chat: i,
        externalId: o("WAStanzaUtils").toStanzaId(r),
      };
      return e.messageDelete != null
        ? { protocolMsgId: m, type: "delete_for_me" }
        : (o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "Unknown appdata sync action type: ",
                "",
              ])),
            e,
          ),
          null);
    }
    function E(e) {
      var t = [];
      for (var n of e) {
        var r = v(n.actionTimestamp);
        if (n.chatAction != null) {
          var a = R(n.chatAction, r);
          a != null && t.push({ chatAction: a });
        } else if (n.messageAction != null) {
          var i = L(n.messageAction);
          i != null && t.push({ messageAction: i });
        } else
          o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "Unknown appdata sync action type: ",
                "",
              ])),
            n,
          );
      }
      return t;
    }
    function k(e) {
      var t = e.anonId,
        n = e.id,
        r = e.rootKey,
        a = e.status;
      if (a == null || n == null || t == null || r == null)
        return (
          o("WALogger").WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "missing keys in EncryptedBackupsSecretsEpoch",
              ])),
          ),
          null
        );
      var i;
      if (
        a ===
        o("WAArmadilloApplication.pb")
          .ARMADILLO_SIGNAL_ENCRYPTED_BACKUPS_SECRETS_EPOCH_EPOCH_STATUS.ES_OPEN
      )
        i = o("WAAppData").EPOCH_STATUS_OPEN;
      else if (
        a ===
        o("WAArmadilloApplication.pb")
          .ARMADILLO_SIGNAL_ENCRYPTED_BACKUPS_SECRETS_EPOCH_EPOCH_STATUS
          .ES_CLOSE
      )
        i = o("WAAppData").EPOCH_STATUS_CLOSE;
      else
        return (
          o("WALogger").WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "status in EncryptedBackupsSecretsEpoch has invalid value",
              ])),
          ),
          null
        );
      return { anonId: t, id: n, rootKey: r, status: i };
    }
    function I(e) {
      var t = e.backupId,
        n = e.epoch,
        r = e.mailboxRootKey,
        a = e.obliviousValidationToken,
        i = e.serverDataId,
        l = e.tempOcmfClientState;
      return t == null || i == null || l == null || r == null || a == null
        ? (o("WALogger").WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "missing keys in EncryptedBackupsSecrets",
              ])),
          ),
          null)
        : {
            backupId: t,
            epoch: n.map(k).reduce(function (e, t) {
              return t != null ? e.concat([t]) : e;
            }, []),
            mailboxRootKey: r,
            obliviousValidationToken: a,
            serverDataId: i,
            tempOcmfClientState: l,
          };
    }
    function T(e) {
      var t, n;
      if (
        ((t = e.applicationData) == null || (t = t.metadataSync) == null
          ? void 0
          : t.actions) != null
      ) {
        var r;
        return {
          actions: E(
            (r = e.applicationData) == null || (r = r.metadataSync) == null
              ? void 0
              : r.actions,
          ),
          type: "meta_sync",
        };
      } else if (
        ((n = e.signal) == null ? void 0 : n.encryptedBackupsSecrets) != null
      ) {
        var a = I(e.signal.encryptedBackupsSecrets);
        return a == null
          ? null
          : { encryptedBackupsSecrets: a, type: "backups_secrets" };
      } else
        return (
          o("WALogger").WARN(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "Unknown appdata type: ",
                "",
              ])),
            e,
          ),
          null
        );
    }
    function D(e) {
      if (e.subprotocolType === "armadillo") {
        var t = o("decodeProtobuf").decodeProtobufWithUnknowns(
          o("WAArmadilloApplication.pb").ArmadilloSpec,
          e.payload,
        );
        if (t.payload == null)
          throw r("err")("Appdata contains unparseable armadillo data.");
        return T(t.payload);
      } else
        throw r("err")(
          "Appdata contains unexpected message application: " +
            e.subprotocolType,
        );
    }
    function x(e) {
      return e == null
        ? void 0
        : {
            lastMessageTimestamp: e.lastMessageTimestamp,
            lastSystemMessageTimestamp: e.lastSystemMessageTimestamp,
            messages: e.messages.map(function (e) {
              return {
                key:
                  e.key == null
                    ? void 0
                    : { fromMe: e.key.fromMe, id: e.key.id },
                timestamp: e.ts,
              };
            }),
          };
    }
    function $(e) {
      switch (e.type) {
        case "meta_sync":
          return { payload: { applicationData: w(e) } };
        case "backups_secrets":
          return {
            payload: {
              signal: { encryptedBackupsSecrets: N(e.encryptedBackupsSecrets) },
            },
          };
        default:
          return (
            e.type,
            o("WALogger").WARN(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "Unknown appdata type: ",
                  "",
                ])),
              e.type,
            ),
            {}
          );
      }
    }
    function P(e) {
      var t;
      switch (e.type) {
        case "meta_sync":
        case "backups_secrets": {
          var n = o("encodeProtobuf").encodeProtobuf(
            o("WAArmadilloApplication.pb").ArmadilloSpec,
            $(e),
          );
          t = { armadillo: { payload: n.readByteArrayView(), version: 1 } };
          break;
        }
        default:
          (e.type,
            o("WALogger").WARN(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "Unknown appdata type: ",
                  "",
                ])),
              e.type,
            ),
            (t = {}));
      }
      return { payload: { subProtocol: t } };
    }
    function N(e) {
      return {
        backupId: e.backupId,
        epoch: e.epoch.map(M),
        mailboxRootKey: e.mailboxRootKey,
        obliviousValidationToken: e.obliviousValidationToken,
        serverDataId: e.serverDataId,
        tempOcmfClientState: e.tempOcmfClientState,
      };
    }
    function M(e) {
      var t;
      return (
        e.status === o("WAAppData").EPOCH_STATUS_OPEN
          ? (t = o("WAArmadilloApplication.pb")
              .ARMADILLO_SIGNAL_ENCRYPTED_BACKUPS_SECRETS_EPOCH_EPOCH_STATUS
              .ES_OPEN)
          : e.status === o("WAAppData").EPOCH_STATUS_CLOSE &&
            (t = o("WAArmadilloApplication.pb")
              .ARMADILLO_SIGNAL_ENCRYPTED_BACKUPS_SECRETS_EPOCH_EPOCH_STATUS
              .ES_CLOSE),
        { anonId: e.anonId, id: e.id, rootKey: e.rootKey, status: t }
      );
    }
    function w(e) {
      return {
        metadataSync: {
          actions: e.actions.map(function (e) {
            return e.chatAction
              ? {
                  actionTimestamp: e.chatAction.ts,
                  chatAction: A(e.chatAction),
                }
              : { messageAction: F(e.messageAction) };
          }),
        },
      };
    }
    function A(e) {
      var t = x(e.messageRange),
        n = e.chatJid;
      switch (e.type) {
        case "chat_archive":
          return {
            chatArchive: { archived: e.archived, messageRange: t },
            chatId: n,
          };
        case "chat_delete":
          return { chatDelete: { messageRange: t }, chatId: n };
        default:
          return (
            e.type,
            { chatId: n, chatRead: { messageRange: t, read: e.read } }
          );
      }
    }
    function F(e) {
      if (e.type === "delete_for_me") {
        var t = e.protocolMsgId.chat,
          n = o("WAJids").interpretAsGroupJid(t) != null;
        return {
          key: {
            fromMe: o("WAJids").isAuthorMe(e.protocolMsgId.author),
            id: e.protocolMsgId.externalId,
            participant:
              !o("WAJids").isAuthorMe(e.protocolMsgId.author) && n
                ? e.protocolMsgId.author
                : void 0,
            remoteJid: t,
          },
          messageDelete: {},
        };
      } else throw r("err")("No other available type");
    }
    ((l.parseArmadilloAppData = T),
      (l.parseAppData = D),
      (l.convertArmadilloAppData = $),
      (l.convertAppData = P));
  },
  98,
);
