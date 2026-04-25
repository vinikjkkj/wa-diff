__d(
  "WAWebMessagePluginParseProtobuf",
  [
    "WALogger",
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
      var m = a.pluginsMatched;
      for (var p of c) {
        var _ = p(e);
        if (_ != null) {
          var f;
          (m.push(
            _.msgData.type +
              ":" +
              ((f = _.msgData.subtype) != null ? f : "null"),
          ),
            i == null && (i = _));
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
      return m.length > 1
        ? (o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "parseProtoPlugins: Matched more than 1 plugin types ",
                  "",
                ])),
              m.join(","),
            )
            .sendLogs("parse-protobuf-unexpected-plugin-match"),
          null)
        : i;
    }
    l.parseProtobuf = d;
  },
  98,
);
