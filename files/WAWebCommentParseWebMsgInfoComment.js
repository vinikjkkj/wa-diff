__d(
  "WAWebCommentParseWebMsgInfoComment",
  [
    "WALogger",
    "WALongInt",
    "WANullthrows",
    "WAWebAddOnParseWebMsgInfo",
    "WAWebCommentMsgDataConversion",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebParseWebMessageInfoUtils",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      var n,
        a = t.isFromCag,
        i = t.webMsgInfo,
        l = i == null || (n = i.message) == null ? void 0 : n.commentMessage,
        c = i == null ? void 0 : i.commentMetadata,
        d = [];
      if (i == null || (c == null ? void 0 : c.commentParentKey) == null)
        return d;
      var m = r("WANullthrows")(
          o("WAWebAddOnParseWebMsgInfo").buildAddonMsgKey(
            i.key,
            a,
            i.participant,
          ),
        ),
        p = m.msgKey,
        _ = r("WANullthrows")(i.messageTimestamp),
        f;
      if (
        ((l == null ? void 0 : l.message) != null &&
          (f = o("WAWebCommentMsgDataConversion").extractCommentTextFromMessage(
            l.message,
          )),
        f == null)
      ) {
        var g = r("WANullthrows")(
            o("WAWebParseWebMessageInfoUtils").buildMsgKey(
              i,
              r("WANullthrows")(c == null ? void 0 : c.commentParentKey),
            ),
          ),
          h = g.msgKey;
        try {
          var y = o("WAWebParseWebMessageInfoUtils").parseMsgStubProto(i, u),
            C = babelHelpers.extends(
              { id: p, parentMsgKey: h },
              o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
                p,
                o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
              ),
              {
                revokeAddonType: o("WAWebMsgType").MSG_TYPE.COMMENT,
                protocolMessageKey: y.protocolMessageKey,
                subtype: y.subtype,
                kind: o("WAWebMsgType").MsgKind.RevokedAddon,
                revokeTimestamp: o("WALongInt").numberOrThrowIfTooLarge(
                  r("WANullthrows")(i.revokeMessageTimestamp),
                ),
                type: o("WAWebMsgType").MSG_TYPE.REVOKED,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                t: o("WALongInt").numberOrThrowIfTooLarge(_),
              },
            );
          d.push(C);
        } catch (t) {
          var b;
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[parseWebMsgInfoComment] has revoke stub ",
                ", parameters ",
                "",
              ])),
            !!i.messageStubType,
            (b = i.messageStubParameters) == null ? void 0 : b.length,
          ),
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[parseWebMsgInfoComment] revoke parse failed ",
                    " err=",
                    "",
                  ])),
                i.key.id,
                t,
              )
              .sendLogs("parse-comment-revoke", { sampling: 0.01 }));
        }
      } else if (l != null) {
        var v = r("WANullthrows")(l.targetMessageKey),
          S = r("WANullthrows")(
            o("WAWebParseWebMessageInfoUtils").buildMsgKey(i, v),
          ),
          R = S.msgKey;
        d.push(
          babelHelpers.extends(
            { id: p, parentMsgKey: R },
            o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
              p,
              o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
            ),
            {
              body: f,
              type: o("WAWebMsgType").MSG_TYPE.COMMENT,
              read: !0,
              kind: o("WAWebMsgType").MsgKind.CommentDecrypted,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              t: o("WALongInt").numberOrThrowIfTooLarge(_),
            },
          ),
        );
      }
      return d;
    }
    l.parseWebMsgInfoComment = u;
  },
  98,
);
