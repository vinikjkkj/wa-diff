__d(
  "WAWebMessagePluginParseProtobuf",
  [
    "WALogger",
    "WAWebMessagePluginParseProtobufRegistry",
    "WAWebMultipleMessageParserPluginParseProtobuf",
    "WAWebProtobufsE2E.pb",
    "WAWebProtocolRevokeMessageUtils",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWamEnumEditType",
    "gkx",
    "isStringNullOrEmpty",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      var n,
        a,
        i = o(
          "WAWebMultipleMessageParserPluginParseProtobuf",
        ).parseProtobufWithMultipleMessageParserPlugin(t),
        l = i.result;
      if (
        (!r("gkx")("26258") || r("justknobx")._("2517")) &&
        t.msgContext === "relay" &&
        (t == null ||
        (n = t.messageProtobuf) == null ||
        (n = n.protocolMessage) == null
          ? void 0
          : n.type) ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT
      ) {
        var u, c;
        if (
          t.editAttr !== o("WAWebWamEnumEditType").EDIT_TYPE.EDITED &&
          r("isStringNullOrEmpty")(
            (u =
              t == null || (c = t.msgBotInfo) == null
                ? void 0
                : c.botEditType) != null
              ? u
              : "",
          )
        )
          return (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-edit] edit protocol msg with incorrect attribute",
                  ])),
              )
              .sendLogs("message-edit-incorrect-edit-attribute"),
            null
          );
      }
      var d = i.pluginsMatched;
      for (var m of r("WAWebMessagePluginParseProtobufRegistry")) {
        var p = m(t);
        if (p != null) {
          var _;
          (d.push(
            p.msgData.type +
              ":" +
              ((_ = p.msgData.subtype) != null ? _ : "null"),
          ),
            l == null && (l = p));
        }
      }
      if (
        d.length === 0 &&
        l === void 0 &&
        (t == null ? void 0 : t.msgContext) === "relay" &&
        (t == null ||
        (a = t.messageProtobuf) == null ||
        (a = a.protocolMessage) == null
          ? void 0
          : a.type) ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE
      )
        throw new (o(
          "WAWebProtocolRevokeMessageUtils",
        ).ProtocolRevokeMessageValidationError)(
          "protocol_revoke_missing_edit_attr",
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
            .INVALID_PROTOCOL_BUFFER,
        );
      return d.length > 1
        ? (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "parseProtoPlugins: Matched more than 1 plugin types ",
                  "",
                ])),
              d.join(","),
            )
            .sendLogs("parse-protobuf-unexpected-plugin-match"),
          null)
        : l;
    }
    l.parseProtobuf = u;
  },
  98,
);
