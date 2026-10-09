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
      c = (e = n("cr:37444")) != null ? e : [];
    function d(e) {
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
        var l, d;
        if (
          e.editAttr !== o("WAWebWamEnumEditType").EDIT_TYPE.EDITED &&
          r("isStringNullOrEmpty")(
            (l =
              e == null || (d = e.msgBotInfo) == null
                ? void 0
                : d.botEditType) != null
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
      var p = a.pluginsMatched,
        _ = [];
      for (var f of c) {
        var g = f(e);
        if (g != null) {
          var h;
          (p.push(
            g.msgData.type +
              ":" +
              ((h = g.msgData.subtype) != null ? h : "null"),
          ),
            _.push(g),
            i == null && (i = g));
        }
      }
      if (
        p.length === 0 &&
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
      if (p.length > 1) {
        var y = m(e.msgContext, p, _);
        return y != null
          ? y
          : (o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "parseProtoPlugins: Matched more than 1 plugin types ",
                    "",
                  ])),
                p.join(","),
              )
              .sendLogs("parse-protobuf-unexpected-plugin-match"),
            null);
      }
      return i;
    }
    function m(e, t, n) {
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
    l.parseProtobuf = d;
  },
  98,
);
