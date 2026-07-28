__d(
  "WAWebParseInteractiveMessageProto",
  [
    "WAWebABProps",
    "WAWebBotUtils",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebHandleMsgError",
    "WAWebHsmGatingUtils",
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
        u = t.messageProtobuf,
        m = t.msgContext,
        f = u.interactiveMessage;
      if (f != null) {
        var g = o("WAWebE2EProtoUtils").getInteractiveMessageTypeForProto(f);
        if (!g || !o("WAWebE2EProtoUtils").isInteractiveMessageTypeEnabled(g))
          return _(i, f);
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
          return _(i, f);
        var v = p(f),
          S =
            (v == null ? void 0 : v.type) === e &&
            o("WAWebHsmGatingUtils").isBloksWidgetEnabled(),
          R = null,
          L = f.carouselMessage;
        if (L != null && ((R = d(i, L, m, l, s)), R == null)) return _(i, f);
        if (g === r("WAWebInteractiveMessageType").NATIVE_FLOW) {
          var E = r("WAWebInteractiveMessagesNativeFlowName").cast(
            o("WAWebE2EProtoUtils").getBizNativeFlowName({
              interactiveMessage: f,
            }),
          );
          if (
            ((b = babelHelpers.extends({}, b, { nativeFlowName: E })),
            !S && (m === "relay" || m === "history"))
          ) {
            var k,
              I,
              T =
                (i == null || (k = i.id) == null ? void 0 : k.remote) != null &&
                (o("WAWebBotUtils").isAnyMetaAiBot(i.id.remote) ||
                  o("WAWebMaibaWASSMigration").isMaibaAiHubLid(i.id.remote)),
              D =
                T ||
                o("WAWebE2EProtoUtils").isValidNativeFlowName({
                  name: E,
                  bizInfo: l,
                  msgContext: m,
                });
            if (
              !D ||
              !o("WAWebNativeFlowValidation").isValidNativeFlowMessage(
                b,
                s,
                i == null || (I = i.id) == null ? void 0 : I.fromMe,
                i,
              )
            )
              return _(i, f);
          }
        }
        var x = f.header != null ? c(f.header, i, m) : void 0;
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
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_product_carousel_message",
      );
    }
    function c(e, t, n) {
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
              c =
                (s = r("WAWebParseVideoMessageProto")({
                  messageProtobuf: { videoMessage: e.videoMessage },
                  baseMessage: t,
                  msgContext: n,
                })) == null
                  ? void 0
                  : s.msgData;
            if (c && c.kind !== o("WAWebMsgType").MsgKind.Video)
              throw new (o("WAWebHandleMsgError").MessageValidationError)(
                "parseInteractiveHeaderMessageProto: header videoMessage is not an VideoMsgData",
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                  .INVALID_MESSAGE,
              );
            return {
              headerMessage: c,
              mediaType: o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.VIDEO,
            };
          }
          if (u() && e.productMessage) {
            var d,
              m =
                (d = r("WAWebParseProductMessageProto")({
                  messageProtobuf: { productMessage: e.productMessage },
                  baseMessage: t,
                  msgContext: n,
                })) == null
                  ? void 0
                  : d.msgData;
            return {
              headerMessage: m,
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
    function d(e, t, n, a, i) {
      if (
        t.cards.length >
        o("WAWebInteractiveMessageCarouselConstants").MAX_CAROUSEL_CARDS
      )
        return null;
      var l = t.cards.map(function (t) {
          return m(t, e, n, a, i);
        }),
        s = r("filterNulls")(l);
      return s.length === 0 ? null : s;
    }
    function m(e, t, n, a, i) {
      var l,
        s = e.body,
        d = e.header,
        m = o("WAWebE2EProtoUtils").getInteractiveMessageTypeForProto(e);
      if (!m || !o("WAWebE2EProtoUtils").isInteractiveMessageTypeEnabled(m))
        return null;
      var p = babelHelpers.extends({}, d, {
          type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
          kind: o("WAWebMsgType").MsgKind.Interactive,
          caption:
            (l = o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
              s == null ? void 0 : s.text,
            )) != null
              ? l
              : "",
          interactiveType: m,
          interactivePayload: e.nativeFlowMessage,
          pmCampaignId: a == null ? void 0 : a.campaignId,
          bizSource: i,
        }),
        _ = d != null ? c(d, t, n) : void 0,
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
          parentMsgId: t.id.clone(),
          bloksWidget: null,
        });
      if (f.type === o("WAWebMsgType").MSG_TYPE.IMAGE)
        return babelHelpers.extends({}, f, p, {
          id: h,
          interactiveHeader: g,
          footer: null,
          isCarouselCard: !0,
          parentMsgId: t.id.clone(),
          bloksWidget: null,
        });
      if (u() && f.type === o("WAWebMsgType").MSG_TYPE.PRODUCT)
        return babelHelpers.extends({}, f, p, {
          id: h,
          interactiveHeader: g,
          footer: null,
          isCarouselCard: !0,
          parentMsgId: t.id.clone(),
          bloksWidget: null,
        });
    }
    function p(e) {
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
    function _(e, t) {
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
