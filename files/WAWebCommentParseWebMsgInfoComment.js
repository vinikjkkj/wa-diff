__d(
  "WAWebCommentParseWebMsgInfoComment",
  [
    "WALogger",
    "WALongInt",
    "WAWebAddOnParseWebMsgInfo",
    "WAWebCommentMsgDataConversion",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebParseWebMessageInfoUtils",
    "WAWebViewMode.flow",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      var n,
        a = t.webMsgInfo,
        i = a == null || (n = a.message) == null ? void 0 : n.commentMessage,
        l = a == null ? void 0 : a.commentMetadata,
        c = [];
      if (a == null || (l == null ? void 0 : l.commentParentKey) == null)
        return c;
      var d = r("nullthrows")(
          o("WAWebAddOnParseWebMsgInfo").buildAddonMsgKey({
            key: a.key,
            outerParticipant: a.participant,
          }),
        ),
        m = d.msgKey,
        p = r("nullthrows")(a.messageTimestamp),
        _;
      if (
        ((i == null ? void 0 : i.message) != null &&
          (_ = o("WAWebCommentMsgDataConversion").extractCommentTextFromMessage(
            i.message,
          )),
        _ == null)
      ) {
        var f = r("nullthrows")(
            o("WAWebParseWebMessageInfoUtils").buildMsgKey(
              a,
              r("nullthrows")(l == null ? void 0 : l.commentParentKey),
            ),
          ),
          g = f.msgKey;
        try {
          var h = o("WAWebParseWebMessageInfoUtils").parseMsgStubProto(a, u),
            y = babelHelpers.extends(
              { id: m, parentMsgKey: g },
              o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
                m,
                o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
              ),
              {
                revokeAddonType: o("WAWebMsgType").MSG_TYPE.COMMENT,
                protocolMessageKey: h.protocolMessageKey,
                subtype: h.subtype,
                kind: o("WAWebMsgType").MsgKind.RevokedAddon,
                revokeTimestamp: o("WALongInt").numberOrThrowIfTooLarge(
                  r("nullthrows")(a.revokeMessageTimestamp),
                ),
                type: o("WAWebMsgType").MSG_TYPE.REVOKED,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                t: o("WALongInt").numberOrThrowIfTooLarge(p),
              },
            );
          c.push(y);
        } catch (t) {
          var C;
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[parseWebMsgInfoComment] has revoke stub ",
                ", parameters ",
                "",
              ])),
            !!a.messageStubType,
            (C = a.messageStubParameters) == null ? void 0 : C.length,
          ),
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[parseWebMsgInfoComment] revoke parse failed ",
                    " err=",
                    "",
                  ])),
                a.key.id,
                t,
              )
              .sendLogs("parse-comment-revoke", { sampling: 0.01 }));
        }
      } else if (i != null) {
        var b = r("nullthrows")(i.targetMessageKey),
          v = r("nullthrows")(
            o("WAWebParseWebMessageInfoUtils").buildMsgKey(a, b),
          ),
          S = v.msgKey;
        c.push(
          babelHelpers.extends(
            { id: m, parentMsgKey: S },
            o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
              m,
              o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
            ),
            {
              body: _,
              type: o("WAWebMsgType").MSG_TYPE.COMMENT,
              read: !0,
              kind: o("WAWebMsgType").MsgKind.CommentDecrypted,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              t: o("WALongInt").numberOrThrowIfTooLarge(p),
            },
          ),
        );
      }
      return c;
    }
    l.parseWebMsgInfoComment = u;
  },
  98,
);
