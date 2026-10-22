__d(
  "WAWebParseInteractiveMessageProto",
  [
    "WAWebBotUtils",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebHandleMsgError",
    "WAWebInteractiveMessageCarouselConstants",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMaibaWASSMigration",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNativeFlowValidation",
    "WAWebParseDocumentMessageProto",
    "WAWebParseImageMessageProto",
    "WAWebParseProductMessageProto",
    "WAWebParseVideoMessageProto",
    "WAWebStripBrazilPaymentState",
    "WAWebWamEnumE2eFailureReason",
    "filterNulls",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "im_a2ui";
    function s(t) {
      var n,
        a,
        i = t.baseMessage,
        l = t.bizInfo,
        s = t.bizSource,
        d = t.messageProtobuf,
        _ = t.msgContext,
        f = d.interactiveMessage;
      if (f != null) {
        var g = o("WAWebE2EProtoUtils").getInteractiveMessageTypeForProto(f);
        if (!g || !o("WAWebE2EProtoUtils").isInteractiveMessageTypeEnabled(g))
          return p(i, f);
        var h = f.body,
          y = f.footer,
          C = o("WAWebE2EProtoUtils").getInteractiveMessageFieldNameForType(g),
          b = {
            type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
            kind: o("WAWebMsgType").MsgKind.Interactive,
            caption:
              (n = o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
                h == null ? void 0 : h.text,
              )) != null
                ? n
                : "",
            interactiveType: g,
            interactivePayload: f[C],
            pmCampaignId: l == null ? void 0 : l.campaignId,
            bizSource: s,
          };
        if (
          !o("WAWebE2EProtoUtils").isSupportedInteractiveMessageVersion(g, f[C])
        )
          return p(i, f);
        var v = m(f),
          S = (v == null ? void 0 : v.type) === e,
          R = null,
          L = f.carouselMessage;
        if (
          L != null &&
          ((R = c({
            baseMessage: i,
            bizInfo: l,
            bizSource: s,
            carouselMessage: L,
            msgContext: _,
          })),
          R == null)
        )
          return p(i, f);
        if (g === r("WAWebInteractiveMessageType").NATIVE_FLOW) {
          var E = r("WAWebInteractiveMessagesNativeFlowName").cast(
            o("WAWebE2EProtoUtils").getBizNativeFlowName({
              interactiveMessage: f,
            }),
          );
          if (
            ((b = babelHelpers.extends({}, b, {
              nativeFlowName: E,
              interactivePayload: o(
                "WAWebStripBrazilPaymentState",
              ).stripBrazilPaymentState(f.nativeFlowMessage),
            })),
            !S && (_ === "relay" || _ === "history"))
          ) {
            var k,
              I,
              T =
                (i == null || (k = i.id) == null ? void 0 : k.remote) != null &&
                (o("WAWebBotUtils").isAnyMetaAiBot(i.id.remote) ||
                  o("WAWebMaibaWASSMigration").isMaibaAiHubLid(i.id.remote) ||
                  i.id.remote.isSupportAgentBot()),
              D =
                T ||
                o("WAWebE2EProtoUtils").isValidNativeFlowName({
                  name: E,
                  bizInfo: l,
                  msgContext: _,
                });
            if (
              !D ||
              !o("WAWebNativeFlowValidation").isValidNativeFlowMessage({
                baseMessage: i,
                bizSource: s,
                fromMe: i == null || (I = i.id) == null ? void 0 : I.fromMe,
                msg: b,
              })
            )
              return p(i, f);
          }
        }
        var x = f.header != null ? u(f.header, i, _) : void 0;
        return {
          msgData: babelHelpers.extends(
            {},
            i,
            (a = x == null ? void 0 : x.headerMessage) != null ? a : {},
            b,
            {
              interactiveHeader: x == null ? void 0 : x.interactiveHeader,
              footer: y
                ? o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
                    y.text,
                  )
                : i.footer,
              carouselCardsParsed: R != null ? R : void 0,
              bloksWidget: v,
            },
          ),
          contextInfo: f.contextInfo,
        };
      }
    }
    function u(e, t, n) {
      var a = function () {
          if (e.imageMessage) {
            var a,
              i =
                (a = r("WAWebParseImageMessageProto")({
                  messageProtobuf: { imageMessage: e.imageMessage },
                  baseMessage: t,
                  msgContext: n,
                })) == null
                  ? void 0
                  : a.msgData;
            if (i && i.kind !== o("WAWebMsgType").MsgKind.Image)
              throw new (o("WAWebHandleMsgError").MessageValidationError)(
                "parseInteractiveHeaderMessageProto: header imageMessage is not an ImageMsgData",
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                  .INVALID_MESSAGE,
              );
            return {
              headerMessage: i,
              mediaType: o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.IMAGE,
            };
          }
          if (e.documentMessage) {
            var l;
            return {
              headerMessage:
                (l = r("WAWebParseDocumentMessageProto")({
                  messageProtobuf: { documentMessage: e.documentMessage },
                  baseMessage: t,
                  msgContext: n,
                })) == null
                  ? void 0
                  : l.msgData,
              mediaType: o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.DOCUMENT,
            };
          }
          if (e.videoMessage) {
            var s,
              u =
                (s = r("WAWebParseVideoMessageProto")({
                  messageProtobuf: { videoMessage: e.videoMessage },
                  baseMessage: t,
                  msgContext: n,
                })) == null
                  ? void 0
                  : s.msgData;
            if (u && u.kind !== o("WAWebMsgType").MsgKind.Video)
              throw new (o("WAWebHandleMsgError").MessageValidationError)(
                "parseInteractiveHeaderMessageProto: header videoMessage is not an VideoMsgData",
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                  .INVALID_MESSAGE,
              );
            return {
              headerMessage: u,
              mediaType: o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.VIDEO,
            };
          }
          if (e.productMessage) {
            var c,
              d =
                (c = r("WAWebParseProductMessageProto")({
                  messageProtobuf: { productMessage: e.productMessage },
                  baseMessage: t,
                  msgContext: n,
                })) == null
                  ? void 0
                  : c.msgData;
            return {
              headerMessage: d,
              mediaType: o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.PRODUCT,
            };
          }
        },
        i = e.hasMediaAttachment === !0 ? a() : void 0;
      return {
        headerMessage: i == null ? void 0 : i.headerMessage,
        interactiveHeader: {
          title: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
            e.title,
          ),
          subtitle: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
            e.subtitle,
          ),
          thumbnail: o("WAWebE2EProtoParserApi").decodeBytes(e.jpegThumbnail),
          hasMediaAttachment: !!e.hasMediaAttachment,
          mediaType: i == null ? void 0 : i.mediaType,
        },
      };
    }
    function c(e) {
      var t = e.baseMessage,
        n = e.bizInfo,
        a = e.bizSource,
        i = e.carouselMessage,
        l = e.msgContext;
      if (
        i.cards.length >
        o("WAWebInteractiveMessageCarouselConstants").MAX_CAROUSEL_CARDS
      )
        return null;
      var s = i.cards.map(function (e) {
          return d({
            baseMessage: t,
            bizInfo: n,
            bizSource: a,
            card: e,
            msgContext: l,
          });
        }),
        u = r("filterNulls")(s);
      return u.length === 0 ? null : u;
    }
    function d(e) {
      var t,
        n = e.baseMessage,
        a = e.bizInfo,
        i = e.bizSource,
        l = e.card,
        s = e.msgContext,
        c = l.body,
        d = l.header,
        m = o("WAWebE2EProtoUtils").getInteractiveMessageTypeForProto(l);
      if (!m || !o("WAWebE2EProtoUtils").isInteractiveMessageTypeEnabled(m))
        return null;
      var p = babelHelpers.extends({}, d, {
          type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
          kind: o("WAWebMsgType").MsgKind.Interactive,
          caption:
            (t = o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
              c == null ? void 0 : c.text,
            )) != null
              ? t
              : "",
          interactiveType: m,
          interactivePayload: l.nativeFlowMessage,
          pmCampaignId: a == null ? void 0 : a.campaignId,
          bizSource: i,
        }),
        _ = d != null ? u(d, n, s) : void 0,
        f = _ == null ? void 0 : _.headerMessage;
      if (_ == null || f == null) return null;
      var g = babelHelpers.extends({}, _.interactiveHeader, {
          title: null,
          subtitle: null,
        }),
        h = new (r("WAWebMsgKey"))({
          fromMe: f.id.fromMe,
          remote: f.id.remote,
          participant: f.id.participant,
          id: r("WAWebMsgKey").newId_DEPRECATED(),
        });
      if (f.type === o("WAWebMsgType").MSG_TYPE.VIDEO)
        return babelHelpers.extends({}, f, p, {
          id: h,
          interactiveHeader: g,
          footer: null,
          isCarouselCard: !0,
          parentMsgId: n.id.clone(),
          bloksWidget: null,
        });
      if (f.type === o("WAWebMsgType").MSG_TYPE.IMAGE)
        return babelHelpers.extends({}, f, p, {
          id: h,
          interactiveHeader: g,
          footer: null,
          isCarouselCard: !0,
          parentMsgId: n.id.clone(),
          bloksWidget: null,
        });
      if (f.type === o("WAWebMsgType").MSG_TYPE.PRODUCT)
        return babelHelpers.extends({}, f, p, {
          id: h,
          interactiveHeader: g,
          footer: null,
          isCarouselCard: !0,
          parentMsgId: n.id.clone(),
          bloksWidget: null,
        });
    }
    function m(e) {
      var t;
      if (e.bloksWidget != null) {
        var n, r, o, a;
        return {
          uuid: (n = e.bloksWidget.uuid) != null ? n : null,
          data: (r = e.bloksWidget.data) != null ? r : null,
          type: (o = e.bloksWidget.type) != null ? o : null,
          fallback: (a = e.bloksWidget.fallback) != null ? a : null,
        };
      }
      if (((t = e.header) == null ? void 0 : t.bloksWidget) != null) {
        var i, l, s, u;
        return {
          uuid: (i = e.header.bloksWidget.uuid) != null ? i : null,
          data: (l = e.header.bloksWidget.data) != null ? l : null,
          type: (s = e.header.bloksWidget.type) != null ? s : null,
          fallback: (u = e.header.bloksWidget.fallback) != null ? u : null,
        };
      }
      return null;
    }
    function p(e, t) {
      return {
        msgData: babelHelpers.extends({}, e, {
          type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
          kind: o("WAWebMsgType").MsgKind.Unknown,
          subtype: "phone_only_feature",
        }),
        contextInfo: t.contextInfo,
      };
    }
    l.default = s;
  },
  98,
);
