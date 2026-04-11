__d(
  "WAWebParseVcardMessageProto",
  ["WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.contactMessage;
      if (r != null) {
        var a = r.contextInfo,
          i = r.displayName,
          l = r.vcard,
          s = babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.VCARD,
            kind: o("WAWebMsgType").MsgKind.Vcard,
            body: l,
            vcardFormattedName: i,
          });
        return { msgData: s, contextInfo: a };
      }
    }
    l.default = e;
  },
  98,
);
