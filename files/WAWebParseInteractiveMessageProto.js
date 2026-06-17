__d(
  "WAWebParseInteractiveMessageProto",
  [
    "WAWebABProps",
    "WAWebBotUtils",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebHandleMsgError",
    "WAWebHsmGatingUtils",
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
    var e = o("WAWebABProps").getABPropConfigValue(
        "enable_product_carousel_message",
      ),
      s = "im_a2ui";
    function u(e) {
      var t,
        n,
        a = e.baseMessage,
        i = e.bizInfo,
        l = e.bizSource,
        u = e.messageProtobuf,
        m = e.msgContext,
        f = u.interactiveMessage;
      if (f != null) {
        var g = o("WAWebE2EProtoUtils").getInteractiveMessageTypeForProto(f);
        if (!g || !o("WAWebE2EProtoUtils").isInteractiveMessageTypeEnabled(g))
          return _(a, f);
        var h = f.body,
          y = f.footer,
          C = o("WAWebE2EProtoUtils").getInteractiveMessageFieldNameForType(g),
          b = {
            type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
            kind: o("WAWebMsgType").MsgKind.Interactive,
            caption:
              (t = o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
                h == null ? void 0 : h.text,
              )) != null
                ? t
                : "",
            interactiveType: g,
            interactivePayload: f[C],
            pmCampaignId: i == null ? void 0 : i.campaignId,
            bizSource: l,
          };
        if (
          !o("WAWebE2EProtoUtils").isSupportedInteractiveMessageVersion(g, f[C])
        )
          return _(a, f);
        var v = p(f),
          S =
            (v == null ? void 0 : v.type) === s &&
            o("WAWebHsmGatingUtils").isBloksWidgetEnabled(),
          R = null,
          L = f.carouselMessage;
        if (L != null && ((R = d(a, L, m, i, l)), R == null)) return _(a, f);
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
                (a == null || (k = a.id) == null ? void 0 : k.remote) != null &&
                (o("WAWebBotUtils").isAnyMetaAiBot(a.id.remote) ||
                  o("WAWebMaibaWASSMigration").isMaibaAiHubLid(a.id.remote)),
              D =
                T ||
                o("WAWebE2EProtoUtils").isValidNativeFlowName({
                  name: E,
                  bizInfo: i,
                  msgContext: m,
                });
            if (
              !D ||
              !o("WAWebNativeFlowValidation").isValidNativeFlowMessage(
                b,
                l,
                a == null || (I = a.id) == null ? void 0 : I.fromMe,
                a,
              )
            )
              return _(a, f);
          }
        }
        var x = f.header != null ? c(f.header, a, m) : void 0;
        return {
          msgData: babelHelpers.extends(
            {},
            a,
            (n = x == null ? void 0 : x.headerMessage) != null ? n : {},
            b,
            {
              interactiveHeader: x == null ? void 0 : x.interactiveHeader,
              footer: y
                ? o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
                    y.text,
                  )
                : a.footer,
              carouselCardsParsed: R != null ? R : void 0,
              bloksWidget: v,
            },
          ),
          contextInfo: f.contextInfo,
        };
      }
    }
    function c(t, n, a) {
      var i = function () {
          if (t.imageMessage) {
            var i,
              l =
                (i = r("WAWebParseImageMessageProto")({
                  messageProtobuf: { imageMessage: t.imageMessage },
                  baseMessage: n,
                  msgContext: a,
                })) == null
                  ? void 0
                  : i.msgData;
            if (l && l.kind !== o("WAWebMsgType").MsgKind.Image)
              throw new (o("WAWebHandleMsgError").MessageValidationError)(
                "parseInteractiveHeaderMessageProto: header imageMessage is not an ImageMsgData",
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                  .INVALID_MESSAGE,
              );
            return {
              headerMessage: l,
              mediaType: o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.IMAGE,
            };
          }
          if (t.documentMessage) {
            var s;
            return {
              headerMessage:
                (s = r("WAWebParseDocumentMessageProto")({
                  messageProtobuf: { documentMessage: t.documentMessage },
                  baseMessage: n,
                  msgContext: a,
                })) == null
                  ? void 0
                  : s.msgData,
              mediaType: o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.DOCUMENT,
            };
          }
          if (t.videoMessage) {
            var u,
              c =
                (u = r("WAWebParseVideoMessageProto")({
                  messageProtobuf: { videoMessage: t.videoMessage },
                  baseMessage: n,
                  msgContext: a,
                })) == null
                  ? void 0
                  : u.msgData;
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
          if (e && t.productMessage) {
            var d,
              m =
                (d = r("WAWebParseProductMessageProto")({
                  messageProtobuf: { productMessage: t.productMessage },
                  baseMessage: n,
                  msgContext: a,
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
        l = t.hasMediaAttachment === !0 ? i() : void 0;
      return {
        headerMessage: l == null ? void 0 : l.headerMessage,
        interactiveHeader: {
          title: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
            t.title,
          ),
          subtitle: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
            t.subtitle,
          ),
          thumbnail: o("WAWebE2EProtoParserApi").decodeBytes(t.jpegThumbnail),
          hasMediaAttachment: !!t.hasMediaAttachment,
          mediaType: l == null ? void 0 : l.mediaType,
        },
      };
    }
    function d(e, t, n, o, a) {
      var i = t.cards.map(function (t) {
          return m(t, e, n, o, a);
        }),
        l = r("filterNulls")(i);
      return l.length === 0 ? null : l;
    }
    function m(t, n, a, i, l) {
      var s,
        u = t.body,
        d = t.header,
        m = o("WAWebE2EProtoUtils").getInteractiveMessageTypeForProto(t);
      if (!m || !o("WAWebE2EProtoUtils").isInteractiveMessageTypeEnabled(m))
        return null;
      var p = babelHelpers.extends({}, d, {
          type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
          kind: o("WAWebMsgType").MsgKind.Interactive,
          caption:
            (s = o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
              u == null ? void 0 : u.text,
            )) != null
              ? s
              : "",
          interactiveType: m,
          interactivePayload: t.nativeFlowMessage,
          pmCampaignId: i == null ? void 0 : i.campaignId,
          bizSource: l,
        }),
        _ = d != null ? c(d, n, a) : void 0,
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
      if (e && f.type === o("WAWebMsgType").MSG_TYPE.PRODUCT)
        return babelHelpers.extends({}, f, p, {
          id: h,
          interactiveHeader: g,
          footer: null,
          isCarouselCard: !0,
          parentMsgId: n.id.clone(),
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
    l.default = u;
  },
  98,
);
