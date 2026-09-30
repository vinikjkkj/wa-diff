__d(
  "WAWebMessagePluginParseProtobuf",
  [
    "WALogger",
    "WAWebMsgType",
    "WAWebMultipleMessageParserPluginParseProtobuf",
    "WAWebProtobufsE2E.pb",
    "WAWebProtocolRevokeMessageUtils",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWamEnumEditType",
    "cr:37444",
    "gkx",
    "isStringNullOrEmpty",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (e = n("cr:37444")) != null ? e : [];
    function m(e) {
      var t,
        n,
        a = o(
          "WAWebMultipleMessageParserPluginParseProtobuf",
        ).parseProtobufWithMultipleMessageParserPlugin(e),
        i = a.result;
      if (
        (!r("gkx")("26258") || r("justknobx")._("2517")) &&
        e.msgContext === "relay" &&
        (e == null ||
        (t = e.messageProtobuf) == null ||
        (t = t.protocolMessage) == null
          ? void 0
          : t.type) ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT
      ) {
        var l, c;
        if (
          e.editAttr !== o("WAWebWamEnumEditType").EDIT_TYPE.EDITED &&
          r("isStringNullOrEmpty")(
            (l =
              e == null || (c = e.msgBotInfo) == null
                ? void 0
                : c.botEditType) != null
              ? l
              : "",
          )
        )
          return (
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-edit] edit protocol msg with incorrect attribute",
                  ])),
              )
              .sendLogs("message-edit-incorrect-edit-attribute"),
            null
          );
      }
      var m = a.pluginsMatched,
        f = [];
      for (var g of d) {
        var h = g(e);
        if (h != null) {
          var y;
          (m.push(
            h.msgData.type +
              ":" +
              ((y = h.msgData.subtype) != null ? y : "null"),
          ),
            f.push(h),
            i == null && (i = h));
        }
      }
      if (
        m.length === 0 &&
        i === void 0 &&
        (e == null ? void 0 : e.msgContext) === "relay" &&
        (e == null ||
        (n = e.messageProtobuf) == null ||
        (n = n.protocolMessage) == null
          ? void 0
          : n.type) ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE
      )
        throw new (o(
          "WAWebProtocolRevokeMessageUtils",
        ).ProtocolRevokeMessageValidationError)(
          "protocol_revoke_missing_edit_attr",
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
            .INVALID_PROTOCOL_BUFFER,
        );
      if (m.length > 1) {
        var C = p(e.msgContext, m, f);
        return C != null
          ? (_(e.msgContext, m, f, C), C)
          : (o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "parseProtoPlugins: Matched more than 1 plugin types ",
                    "",
                  ])),
                m.join(","),
              )
              .sendLogs("parse-protobuf-unexpected-plugin-match"),
            null);
      }
      return i;
    }
    function p(e, t, n) {
      if (
        (e !== "quoted" && e !== "history_quoted") ||
        t.length !== 2 ||
        n.length !== 2
      )
        return null;
      var a = n.filter(function (e) {
        var t = e.msgData;
        return t.type !== o("WAWebMsgType").MSG_TYPE.CHAT || t.subtype != null;
      });
      return a.length !== 1 || !r("gkx")("26022") ? null : a[0];
    }
    function _(e, t, n, r) {
      var a = n.find(function (e) {
          return e !== r;
        }),
        i = a != null ? a.msgData : null,
        l =
          i != null && i.type === o("WAWebMsgType").MSG_TYPE.CHAT
            ? i.body
            : null;
      o("WALogger")
        .WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "parseProtoPlugins: kept one of two matches for quoted message, matched: ",
              ", kept: ",
              ", dropped: ",
              ", droppedTextEmpty: ",
              ", msgContext: ",
              "",
            ])),
          t.join(","),
          f(r),
          a != null ? f(a) : "none",
          l == null ? "n/a" : String(l === ""),
          e,
        )
        .sendLogs("parse-protobuf-quoted-kept-one-of-two", { sampling: 0.01 });
    }
    function f(e) {
      var t,
        n = e.msgData;
      return n.type + ":" + ((t = n.subtype) != null ? t : "null");
    }
    l.parseProtobuf = m;
  },
  98,
);
