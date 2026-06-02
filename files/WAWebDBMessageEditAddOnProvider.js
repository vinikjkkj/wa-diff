__d(
  "WAWebDBMessageEditAddOnProvider",
  [
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebMessageAddOnType",
    "WAWebMessageEditUtils",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
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
          r = await o("WAWebDBProcessEditProtocolMsgs").processEditProtocolMsgs(
            n.map(function (e) {
              return e.parsedMsgPayload;
            }),
          ),
          a =
            (e = r.find(function (e) {
              return e.parentMsg.id.equals(t.id);
            })) == null
              ? void 0
              : e.editedMsgData;
        a && Object.assign(t, a);
      },
    };
    l.messageEditAddOnProvider = e;
  },
  98,
);
