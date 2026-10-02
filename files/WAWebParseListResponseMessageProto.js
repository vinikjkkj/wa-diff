__d(
  "WAWebParseListResponseMessageProto",
  ["WALogger", "WAWebE2EProtoUtils", "WAWebMsgType", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 256,
      u = 1024;
    function c(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.listResponseMessage;
      if (
        r != null &&
        r.listType ===
          o("WAWebProtobufsE2E.pb").Message$ListResponseMessage$ListType
            .SINGLE_SELECT
      ) {
        if (d(r))
          return {
            msgData: babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: o("WAWebMsgType").MsgKind.Unknown,
              subtype: "phone_only_feature",
            }),
            contextInfo: r.contextInfo,
          };
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
    function d(t) {
      var n,
        r,
        a,
        i,
        l = (n = (r = t.title) == null ? void 0 : r.length) != null ? n : 0,
        c =
          (a = (i = t.description) == null ? void 0 : i.length) != null ? a : 0;
      return l <= s && c <= u
        ? !1
        : (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[List response] over protocol limit: title ",
                  ", description ",
                  "",
                ])),
              l,
              c,
            )
            .sendLogs("wa-web-list-response-over-limit"),
          !0);
    }
    l.default = c;
  },
  98,
);
