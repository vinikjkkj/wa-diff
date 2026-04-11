__d(
  "WAWebProtocolRevokeMessageUtils",
  [
    "WALogger",
    "WAWebAck",
    "WAWebE2EProtoUtils",
    "WAWebHandleMsgError",
    "WAWebHandleMsgMetaUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumE2eFailureReason",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "ProtocolRevokeMessageValidationError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebHandleMsgError").MessageValidationError);
    function d(t) {
      var n,
        a = t.baseMessage,
        i = t.editAttr,
        l = t.messageProtobuf,
        d = t.msgContext,
        m = t.msgMeta,
        p = l.protocolMessage;
      if (p != null) {
        var _ = p.key,
          f = p.type;
        if (
          !(
            d !== "relay" &&
            f !==
              o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
                .EPHEMERAL_SETTING
          ) &&
          f === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE
        ) {
          var g;
          if (
            ((n = a.author) != null &&
            n.isLid() &&
            o("WAWebHandleMsgMetaUtils").isCommentMsgMeta(m)
              ? (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "found comment revoke",
                    ])),
                ),
                (g = o(
                  "WAWebE2EProtoUtils",
                ).translateAddonMessageKeyToLocalReference(_, a)))
              : (g = o(
                  "WAWebE2EProtoUtils",
                ).translateRegularMessageKeyToLocalReference(_, a)),
            g == null)
          )
            throw (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "missing a revoke message key ",
                    " (",
                    ") for ",
                    " from ",
                    " for ",
                    "",
                  ])),
                _ == null ? void 0 : _.id,
                !!_,
                a.id,
                a.author,
                f,
              ),
              new c(
                "protocol_revoke_missing_key",
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                  .INVALID_PROTOCOL_BUFFER,
              )
            );
          var h;
          if (i === o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE) h = "admin_revoke";
          else if (i === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE)
            h = "sender_revoke";
          else
            throw new c(
              "protocol_revoke_missing_edit_attr",
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_PROTOCOL_BUFFER,
            );
          try {
            return {
              msgData: babelHelpers.extends({}, a, {
                type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                kind: o("WAWebMsgType").MsgKind.ProtocolRevoke,
                subtype: h,
                protocolMessageKey: g,
              }),
              contextInfo: null,
            };
          } catch (e) {
            var y = r("getErrorSafe")(e);
            throw (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "parseProtocolRevokeMessageProto: error:",
                      ", stack: ",
                      "",
                    ])),
                  y.name,
                  y.stack,
                )
                .tags("messaging")
                .sendLogs("ProtocolRevokeParseError"),
              y
            );
          }
        }
      }
    }
    ((l.ProtocolRevokeMessageValidationError = c),
      (l.parseProtocolRevokeMessageProto = d));
  },
  98,
);
