__d(
  "WAWebParseMultiVcardMessageProto",
  [
    "WAWebMsgType",
    "WAWebMultiVcardMessageValidationError",
    "WAWebWamEnumE2eFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = e.msgContext,
        a = n.contactsArrayMessage;
      if (a != null) {
        var i = a.contacts,
          l = a.contextInfo,
          s = a.displayName;
        if (
          (r === "relay" || r === "outgoing") &&
          (i == null || i.length === 0)
        )
          throw new (o(
            "WAWebMultiVcardMessageValidationError",
          ).MultiVcardMessageValidationError)(
            o("WAWebMultiVcardMessageValidationError")
              .MultiVcardValidationErrorCode.EMPTY_LIST,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_PROTOCOL_BUFFER,
          );
        var u = babelHelpers.extends({}, t, {
          type: o("WAWebMsgType").MSG_TYPE.MULTI_VCARD,
          kind: o("WAWebMsgType").MsgKind.MultiVcard,
          vcardFormattedName: s,
          vcardList: Array.isArray(i)
            ? i.map(function (e) {
                return {
                  displayName: e.displayName,
                  vcard: e.vcard,
                  isMultiVcard: !1,
                };
              })
            : [],
        });
        return { msgData: u, contextInfo: l };
      }
    }
    l.default = e;
  },
  98,
);
