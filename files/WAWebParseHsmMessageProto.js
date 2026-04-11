__d(
  "WAWebParseHsmMessageProto",
  ["WAWebE2EProtoUtils", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.baseMessage,
        r = e.messageProtobuf,
        a = r.highlyStructuredMessage;
      if (a != null) {
        var i = (t = a.hydratedHsm) == null ? void 0 : t.hydratedTemplate;
        return {
          msgData: babelHelpers.extends({}, n, {
            type: o("WAWebMsgType").MSG_TYPE.HSM,
            kind: o("WAWebMsgType").MsgKind.Hsm,
            body: i
              ? o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
                  i.hydratedContentText,
                )
              : n.body,
          }),
          contextInfo: void 0,
        };
      }
    }
    l.default = e;
  },
  98,
);
