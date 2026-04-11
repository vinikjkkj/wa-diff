__d(
  "WAWebParseBizContentPlaceholderProto",
  [
    "WAWebBizContentPlaceholderMsgData.flow",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.placeholderMessage;
      if (!(r == null || r.type == null)) {
        var a = s(r.type);
        return {
          msgData: babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.BIZ_CONTENT_PLACEHOLDER,
            kind: o("WAWebMsgType").MsgKind.BizContentPlaceholder,
            bizContentPlaceholderType: a,
          }),
          contextInfo: void 0,
        };
      }
    }
    function s(e) {
      switch (e) {
        case o("WAWebProtobufsE2E.pb")
          .Message$PlaceholderMessage$PlaceholderType.MASK_LINKED_DEVICES:
          return o("WAWebBizContentPlaceholderMsgData.flow")
            .BizContentPlaceholderType.MASK_LINKED_DEVICES;
      }
    }
    l.default = e;
  },
  98,
);
