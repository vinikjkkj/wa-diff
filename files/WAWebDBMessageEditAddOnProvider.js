__d(
  "WAWebDBMessageEditAddOnProvider",
  [
    "WALogger",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebMessageAddOnType",
    "WAWebMessageEditUtils",
    "WAWebMsgType",
    "WAWebQuarantineDataStore",
    "WAWebSchemaMessage",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        type: o("WAWebMessageAddOnType").MessageAddOnType.MessageEdit,
        matches: function (t) {
          return (
            t.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
            t.subtype === "message_edit"
          );
        },
        matchesFutureproof: function (t) {
          return (
            t.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN &&
            t.futureproofType === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
            t.futureproofSubtype === "message_edit"
          );
        },
        canRenderInUi: function (t) {
          var e = t.editMsgType
            ? o("WAWebMessageEditUtils").getMsgEditType(t.editMsgType)
            : o("WAWebMessageEditUtils").MsgEditType.TextEdit;
          if (!e) return !1;
          switch (e) {
            case o("WAWebMessageEditUtils").MsgEditType.EventEdit:
            case o("WAWebMessageEditUtils").MsgEditType.PollEdit:
              return !1;
            case o("WAWebMessageEditUtils").MsgEditType.CaptionEdit:
            case o("WAWebMessageEditUtils").MsgEditType.TextEdit:
            case o("WAWebMessageEditUtils").MsgEditType.RichResponseEdit:
            case o("WAWebMessageEditUtils").MsgEditType.LoadingMediaEdit:
              return !0;
          }
        },
        processOrphansForNewMsg: async function (t, n) {
          var e,
            r = await o(
              "WAWebDBProcessEditProtocolMsgs",
            ).processEditProtocolMsgsWithOutcomes(
              n.map(function (e) {
                return e.parsedMsgPayload;
              }),
            ),
            a = r.consumedProtocolMsgs,
            i = r.latestMessageEdits,
            l =
              (e = i.find(function (e) {
                return e.parentMsg.id.equals(t.id);
              })) == null
                ? void 0
                : e.editedMsgData;
          return (l && Object.assign(t, l), u(n, a));
        },
      };
    async function u(e, t) {
      if (r("justknobx")._("572")) {
        var n = new Set(
            t.map(function (e) {
              return e.id.toString();
            }),
          ),
          o = await Promise.all(
            e.map(function (e) {
              return c(e, n);
            }),
          );
        return {
          retainedOrphanMsgKeys: o.filter(function (e) {
            return e != null;
          }),
        };
      }
    }
    async function c(t, n) {
      try {
        return (await o("WAWebQuarantineDataStore").getQuarantineData(
          t.msgKey,
        )) == null
          ? null
          : n.has(t.parsedMsgPayload.id.toString())
            ? ((await o("WAWebSchemaMessage")
                .getMessageTable()
                .get(t.msgKey)) == null &&
                (await o("WAWebQuarantineDataStore").deleteQuarantineData(
                  t.msgKey,
                )),
              null)
            : t.msgKey;
      } catch (n) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "cleanupQuarantinedEditOrphans: cleanup failed, retaining orphan",
                ])),
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("quarantine-edit-orphan-cleanup-failed", {
              sampling: 0.01,
            }),
          t.msgKey
        );
      }
    }
    l.messageEditAddOnProvider = s;
  },
  98,
);
