__d(
  "WAWebParseRequestPhoneNumberMessageProto",
  ["WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.requestPhoneNumberMessage;
      if (r != null) {
        var a = r.contextInfo,
          i = babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.REQUEST_PHONE_NUMBER,
            kind: o("WAWebMsgType").MsgKind.RequestPhoneNumber,
          });
        return { msgData: i, contextInfo: a };
      }
    }
    l.default = e;
  },
  98,
);
