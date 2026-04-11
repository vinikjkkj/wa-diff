__d(
  "WAWebParseInteractiveMessageProto",
  [
    "WAWebABProps",
    "WAWebBotUtils",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebHandleMsgError",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
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
    );
    function s(e) {
      var t,
        n,
        a = e.baseMessage,
        i = e.bizInfo,
        l = e.bizSource,
        s = e.messageProtobuf,
        d = e.msgContext,
        _ = s.interactiveMessage;
      if (_ != null) {
        var f = o("WAWebE2EProtoUtils").getInteractiveMessageTypeForProto(_);
        if (!f || !o("WAWebE2EProtoUtils").isInteractiveMessageTypeEnabled(f))
          return p(a, _);
        var g = _.body,
          h = _.footer,
          y = o("WAWebE2EProtoUtils").getInteractiveMessageFieldNameForType(f),
          C = {
            type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
            kind: o("WAWebMsgType").MsgKind.Interactive,
            caption:
              (t = o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
                g == null ? void 0 : g.text,
              )) != null
                ? t
                : "",
            interactiveType: f,
            interactivePayload: _[y],
            pmCampaignId: i == null ? void 0 : i.campaignId,
            bizSource: l,
          };
        if (
          !o("WAWebE2EProtoUtils").isSupportedInteractiveMessageVersion(f, _[y])
        )
          return p(a, _);
        var b = null,
          v = _.carouselMessage;
        if (v != null && ((b = c(a, v, d, i, l)), b == null)) return p(a, _);
        if (f === r("WAWebInteractiveMessageType").NATIVE_FLOW) {
          var S,
            R = r("WAWebInteractiveMessagesNativeFlowName").cast(
              o("WAWebE2EProtoUtils").getBizNativeFlowName({
                interactiveMessage: _,
              }),
            );
          C = babelHelpers.extends({}, C, { nativeFlowName: R });
          var L =
            (a == null || (S = a.id) == null ? void 0 : S.remote) != null &&
            o("WAWebBotUtils").isBotChannelFBID(a.id.remote);
          if ((d === "relay" || d === "history") && !L) {
            var E;
            if (
              !o("WAWebE2EProtoUtils").isValidNativeFlowName({
                name: R,
                bizInfo: i,
                msgContext: d,
              }) ||
              !o("WAWebNativeFlowValidation").isValidNativeFlowMessage(
                C,
                l,
                a == null || (E = a.id) == null ? void 0 : E.fromMe,
                a,
              )
            )
              return p(a, _);
          }
        }
        var k = _.header != null ? u(_.header, a, d) : void 0,
          I = m(_);
        return {
          msgData: babelHelpers.extends(
            {},
            a,
            (n = k == null ? void 0 : k.headerMessage) != null ? n : {},
            C,
            {
              interactiveHeader: k == null ? void 0 : k.interactiveHeader,
              footer: h
                ? o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
                    h.text,
                  )
                : a.footer,
              carouselCardsParsed: b != null ? b : void 0,
              bloksWidget: I,
            },
          ),
          contextInfo: _.contextInfo,
        };
      }
    }
    function u(t, n, a) {
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
    function c(e, t, n, o, a) {
      var i = t.cards.map(function (t) {
          return d(t, e, n, o, a);
        }),
        l = r("filterNulls")(i);
      return l.length === 0 ? null : l;
    }
    function d(t, n, a, i, l) {
      var s,
        c = t.body,
        d = t.header,
        m = o("WAWebE2EProtoUtils").getInteractiveMessageTypeForProto(t);
      if (!m || !o("WAWebE2EProtoUtils").isInteractiveMessageTypeEnabled(m))
        return null;
      var p = babelHelpers.extends({}, d, {
          type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
          kind: o("WAWebMsgType").MsgKind.Interactive,
          caption:
            (s = o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
              c == null ? void 0 : c.text,
            )) != null
              ? s
              : "",
          interactiveType: m,
          interactivePayload: t.nativeFlowMessage,
          pmCampaignId: i == null ? void 0 : i.campaignId,
          bizSource: l,
        }),
        _ = d != null ? u(d, n, a) : void 0,
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
    function m(e) {
      var t;
      if (e.bloksWidget != null) {
        var n, r, o;
        return {
          uuid: (n = e.bloksWidget.uuid) != null ? n : null,
          data: (r = e.bloksWidget.data) != null ? r : null,
          type: (o = e.bloksWidget.type) != null ? o : null,
        };
      }
      if (((t = e.header) == null ? void 0 : t.bloksWidget) != null) {
        var a, i, l;
        return {
          uuid: (a = e.header.bloksWidget.uuid) != null ? a : null,
          data: (i = e.header.bloksWidget.data) != null ? i : null,
          type: (l = e.header.bloksWidget.type) != null ? l : null,
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
