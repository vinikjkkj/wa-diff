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
        i,
        l = t.baseMessage,
        s = t.bizInfo,
        d = t.bizSource,
        _ = t.messageProtobuf,
        f = t.msgContext,
        g = _.interactiveMessage;
      if (g != null) {
        var h = o("WAWebE2EProtoUtils").getInteractiveMessageTypeForProto(g);
        if (!h || !o("WAWebE2EProtoUtils").isInteractiveMessageTypeEnabled(h))
          return p(l, g);
        var y = g.body,
          C = g.footer,
          b = o("WAWebE2EProtoUtils").getInteractiveMessageFieldNameForType(h),
          v = {
            type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
            kind: o("WAWebMsgType").MsgKind.Interactive,
            caption:
              (n = o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
                y == null ? void 0 : y.text,
              )) != null
                ? n
                : "",
            interactiveType: h,
            interactivePayload: g[b],
            pmCampaignId:
              (a = s == null ? void 0 : s.campaignId) != null
                ? a
                : l.pmCampaignId,
            bizSource: d,
          };
        if (
          !o("WAWebE2EProtoUtils").isSupportedInteractiveMessageVersion(h, g[b])
        )
          return p(l, g);
        var S = m(g),
          R = (S == null ? void 0 : S.type) === e,
          L = null,
          E = g.carouselMessage;
        if (
          E != null &&
          ((L = c({
            baseMessage: l,
            bizInfo: s,
            bizSource: d,
            carouselMessage: E,
            msgContext: f,
          })),
          L == null)
        )
          return p(l, g);
        if (h === r("WAWebInteractiveMessageType").NATIVE_FLOW) {
          var k = r("WAWebInteractiveMessagesNativeFlowName").cast(
            o("WAWebE2EProtoUtils").getBizNativeFlowName({
              interactiveMessage: g,
            }),
          );
          if (
            ((v = babelHelpers.extends({}, v, {
              nativeFlowName: k,
              interactivePayload: o(
                "WAWebStripBrazilPaymentState",
              ).stripBrazilPaymentState(g.nativeFlowMessage),
            })),
            !R && (f === "relay" || f === "history"))
          ) {
            var I,
              T,
              D =
                (l == null || (I = l.id) == null ? void 0 : I.remote) != null &&
                (o("WAWebBotUtils").isAnyMetaAiBot(l.id.remote) ||
                  o("WAWebMaibaWASSMigration").isMaibaAiHubLid(l.id.remote) ||
                  l.id.remote.isSupportAgentBot()),
              x =
                D ||
                o("WAWebE2EProtoUtils").isValidNativeFlowName({
                  name: k,
                  bizInfo: s,
                  msgContext: f,
                });
            if (
              !x ||
              !o("WAWebNativeFlowValidation").isValidNativeFlowMessage({
                baseMessage: l,
                bizSource: d,
                fromMe: l == null || (T = l.id) == null ? void 0 : T.fromMe,
                msg: v,
              })
            )
              return p(l, g);
          }
        }
        var $ = g.header != null ? u(g.header, l, f) : void 0;
        return {
          msgData: babelHelpers.extends(
            {},
            l,
            (i = $ == null ? void 0 : $.headerMessage) != null ? i : {},
            v,
            {
              interactiveHeader: $ == null ? void 0 : $.interactiveHeader,
              footer: C
                ? o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
                    C.text,
                  )
                : l.footer,
              carouselCardsParsed: L != null ? L : void 0,
              bloksWidget: S,
            },
          ),
          contextInfo: g.contextInfo,
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
        n,
        a = e.baseMessage,
        i = e.bizInfo,
        l = e.bizSource,
        s = e.card,
        c = e.msgContext,
        d = s.body,
        m = s.header,
        p = o("WAWebE2EProtoUtils").getInteractiveMessageTypeForProto(s);
      if (!p || !o("WAWebE2EProtoUtils").isInteractiveMessageTypeEnabled(p))
        return null;
      var _ = babelHelpers.extends({}, m, {
          type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
          kind: o("WAWebMsgType").MsgKind.Interactive,
          caption:
            (t = o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
              d == null ? void 0 : d.text,
            )) != null
              ? t
              : "",
          interactiveType: p,
          interactivePayload: s.nativeFlowMessage,
          pmCampaignId:
            (n = i == null ? void 0 : i.campaignId) != null
              ? n
              : a.pmCampaignId,
          bizSource: l,
        }),
        f = m != null ? u(m, a, c) : void 0,
        g = f == null ? void 0 : f.headerMessage;
      if (f == null || g == null) return null;
      var h = babelHelpers.extends({}, f.interactiveHeader, {
          title: null,
          subtitle: null,
        }),
        y = new (r("WAWebMsgKey"))({
          fromMe: g.id.fromMe,
          remote: g.id.remote,
          participant: g.id.participant,
          id: r("WAWebMsgKey").newId_DEPRECATED(),
        });
      if (g.type === o("WAWebMsgType").MSG_TYPE.VIDEO)
        return babelHelpers.extends({}, g, _, {
          id: y,
          interactiveHeader: h,
          footer: null,
          isCarouselCard: !0,
          parentMsgId: a.id.clone(),
          bloksWidget: null,
        });
      if (g.type === o("WAWebMsgType").MSG_TYPE.IMAGE)
        return babelHelpers.extends({}, g, _, {
          id: y,
          interactiveHeader: h,
          footer: null,
          isCarouselCard: !0,
          parentMsgId: a.id.clone(),
          bloksWidget: null,
        });
      if (g.type === o("WAWebMsgType").MSG_TYPE.PRODUCT)
        return babelHelpers.extends({}, g, _, {
          id: y,
          interactiveHeader: h,
          footer: null,
          isCarouselCard: !0,
          parentMsgId: a.id.clone(),
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
