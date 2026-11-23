__d(
  "WAAsMessageTransport",
  ["WABinary", "WACryptoPkcs7", "WAJids", "WAMsgTransport.pb"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e.type) {
        case "text":
          return {
            actionType:
              o("WAMsgTransport.pb")
                .MESSAGE_TRANSPORT_PROTOCOL_ANCILLARY_BACKUP_DIRECTIVE_ACTION_TYPE
                .UPSERT,
            messageId: e.externalId,
            supplementalKey: null,
          };
        case "media":
          return {
            actionType:
              o("WAMsgTransport.pb")
                .MESSAGE_TRANSPORT_PROTOCOL_ANCILLARY_BACKUP_DIRECTIVE_ACTION_TYPE
                .UPSERT,
            messageId: e.externalId,
            supplementalKey: null,
          };
        case "reaction":
          return {
            actionType:
              o("WAMsgTransport.pb")
                .MESSAGE_TRANSPORT_PROTOCOL_ANCILLARY_BACKUP_DIRECTIVE_ACTION_TYPE
                .UPSERT,
            messageId: e.originalMsgExternalId,
            supplementalKey:
              "reaction:" + o("WAJids").extractChatId__DANGEROUS(e.chatJid),
          };
        case "edit":
          return {
            actionType:
              o("WAMsgTransport.pb")
                .MESSAGE_TRANSPORT_PROTOCOL_ANCILLARY_BACKUP_DIRECTIVE_ACTION_TYPE
                .UPSERT,
            messageId: e.originalMsgExternalId,
            supplementalKey:
              "edit:" +
              o("WAJids").extractChatId__DANGEROUS(e.chatJid) +
              ":" +
              (e.timestamp * 1e3).toString(),
          };
      }
    }
    function s(e, t, n, r, a) {
      a === void 0 && (a = 2);
      var i;
      t != null && (i = { destinationJid: t });
      var l;
      e != null && (l = { applicationPayload: { payload: e, version: a } });
      var s = new (o("WABinary").Binary)();
      return (
        o("WACryptoPkcs7").writeRandomPadMax16(s),
        {
          payload: l,
          protocol: {
            integral: { padding: s.readBuffer(), dsm: i },
            ancillary: {
              skdm: n == null ? void 0 : n,
              backupDirective:
                r == null
                  ? void 0
                  : {
                      actionType: r.actionType,
                      messageId: r.messageId,
                      supplementalKey: r.supplementalKey,
                    },
            },
          },
        }
      );
    }
    ((l.backupDirectiveActionType =
      o(
        "WAMsgTransport.pb",
      ).MESSAGE_TRANSPORT_PROTOCOL_ANCILLARY_BACKUP_DIRECTIVE_ACTION_TYPE),
      (l.constructBackupDirective = e),
      (l.asMessageTransport = s));
  },
  98,
);
