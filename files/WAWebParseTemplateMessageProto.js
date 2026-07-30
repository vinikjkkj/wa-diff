__d(
  "WAWebParseTemplateMessageProto",
  [
    "WAWebBizTemplateAndInteractiveMessagesUtils",
    "WAWebE2EProtoUtils",
    "WAWebMmSignalSharingContextInfo",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMsgType",
    "WAWebParseDocumentMessageProto",
    "WAWebParseImageMessageProto",
    "WAWebParseInteractiveMessageProto",
    "WAWebParseLocationMessageProto",
    "WAWebParseVideoMessageProto",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.baseMessage,
        a = e.bizInfo,
        i = e.messageProtobuf,
        l = e.msgContext,
        u = i.templateMessage;
      if (
        u != null &&
        !(l === "relay" && (a == null ? void 0 : a.verifiedHsmEnvelope) !== !0)
      ) {
        var c = u.interactiveMessageTemplate;
        if (c)
          return s({
            baseMessage: n,
            bizInfo: a,
            msgContext: l,
            templateMessage: u,
          });
        var d =
            (t = u.hydratedTemplate) != null
              ? t
              : r("nullthrows")(u.hydratedFourRowTemplate),
          m = d.documentMessage,
          p = d.hydratedButtons,
          _ = d.hydratedContentText,
          f = d.hydratedFooterText,
          g = d.hydratedTitleText,
          h = d.imageMessage,
          y = d.locationMessage,
          C = d.templateId,
          b = d.videoMessage,
          v = function () {
            var e = babelHelpers.extends(
              {},
              n,
              {
                type: o("WAWebMsgType").MSG_TYPE.CHAT,
                kind: o("WAWebMsgType").MsgKind.Chat,
              },
              !!_ && {
                body: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
                  _,
                ),
              },
            );
            if (h) {
              var t, a;
              return (t =
                (a = r("WAWebParseImageMessageProto")({
                  messageProtobuf: { imageMessage: h },
                  baseMessage: n,
                  msgContext: l,
                })) == null
                  ? void 0
                  : a.msgData) != null
                ? t
                : e;
            }
            if (m) {
              var i, s;
              return (i =
                (s = r("WAWebParseDocumentMessageProto")({
                  messageProtobuf: { documentMessage: m },
                  baseMessage: n,
                  msgContext: l,
                })) == null
                  ? void 0
                  : s.msgData) != null
                ? i
                : e;
            }
            if (y) {
              var u, c;
              return (u =
                (c = r("WAWebParseLocationMessageProto")({
                  messageProtobuf: { locationMessage: y },
                  baseMessage: n,
                  msgContext: l,
                })) == null
                  ? void 0
                  : c.msgData) != null
                ? u
                : e;
            }
            if (b) {
              var d, p;
              return (d =
                (p = r("WAWebParseVideoMessageProto")({
                  messageProtobuf: { videoMessage: b },
                  baseMessage: n,
                  msgContext: l,
                })) == null
                  ? void 0
                  : p.msgData) != null
                ? d
                : e;
            }
            return e;
          };
        if (
          o(
            "WAWebBizTemplateAndInteractiveMessagesUtils",
          ).buttonsViolateButtonImprovementsConstraints(
            p.map(function (e) {
              return { hydratedTemplateButton: e };
            }),
          )
        )
          return {
            msgData: babelHelpers.extends({}, n, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: o("WAWebMsgType").MsgKind.Unknown,
              subtype: "phone_only_feature",
            }),
            contextInfo: void 0,
          };
        var S = v();
        return {
          msgData: babelHelpers.extends(
            {},
            S,
            {
              templateId: C,
              isFromTemplate: !0,
              caption: _
                ? o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(_)
                : S.caption,
              footer: f
                ? o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(f)
                : S.footer,
              title: g
                ? o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(g)
                : S.title,
            },
            p.length > 0 && { hydratedButtons: p },
          ),
          contextInfo: void 0,
        };
      }
    }
    function s(e) {
      var t,
        n,
        a,
        i,
        l = e.baseMessage,
        s = e.bizInfo,
        u = e.msgContext,
        c = e.templateMessage,
        d = c.contextInfo,
        m = c.interactiveMessageTemplate,
        p = c.templateId,
        _ = babelHelpers.extends(
          {},
          l,
          {
            type: o("WAWebMsgType").MSG_TYPE.CHAT,
            kind: o("WAWebMsgType").MsgKind.Chat,
          },
          !!(!(m == null || (t = m.body) == null) && t.text) && {
            body: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
              m == null || (n = m.body) == null ? void 0 : n.text,
            ),
          },
        ),
        f =
          (a =
            (i = r("WAWebParseInteractiveMessageProto")({
              messageProtobuf: { interactiveMessage: m },
              baseMessage: l,
              msgContext: u,
              bizSource: l.bizSource || "",
              bizInfo: s,
            })) == null
              ? void 0
              : i.msgData) != null
            ? a
            : _;
      return {
        msgData: babelHelpers.extends({}, f, {
          templateId: p,
          isFromTemplate: !0,
          caption: f.caption,
          footer: f.footer,
          title: f.title,
        }),
        contextInfo:
          o(
            "WAWebMmSignalSharingGatingUtils",
          ).isMmSignalSharingDisclosureEnabled() &&
          (o(
            "WAWebMmSignalSharingContextInfo",
          ).existsMmSignalSharingContextInfoDisclosureFlag() ||
            o(
              "WAWebMmSignalSharingContextInfo",
            ).existsMmSignalSharingURlTrackingMapElements() != null)
            ? d
            : void 0,
      };
    }
    l.default = e;
  },
  98,
);
