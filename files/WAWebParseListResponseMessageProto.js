__d(
  "WAWebParseListResponseMessageProto",
  ["WAWebE2EProtoUtils", "WAWebMsgType", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.listResponseMessage;
      if (
        r != null &&
        r.listType ===
          o("WAWebProtobufsE2E.pb").Message$ListResponseMessage$ListType
            .SINGLE_SELECT
      ) {
        var a = babelHelpers.extends({}, r, { contextInfo: void 0 }),
          i = r.title || "";
        r.description != null &&
          r.description !== "" &&
          (i += "\n" + r.description);
        var l = babelHelpers.extends({}, t, {
          type: o("WAWebMsgType").MSG_TYPE.LIST_RESPONSE,
          kind: o("WAWebMsgType").MsgKind.ListResponse,
          listResponse: a,
          body: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(i),
        });
        return { msgData: l, contextInfo: r.contextInfo };
      }
    }
    l.default = e;
  },
  98,
);
