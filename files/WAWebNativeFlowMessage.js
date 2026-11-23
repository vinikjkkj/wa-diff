__d(
  "WAWebNativeFlowMessage",
  [
    "fbt",
    "WALogger",
    "WAWebBizFrontendGatingUtils",
    "WAWebBizOrderDetailsParams",
    "WAWebBrazilPixKeyFormattingUtils",
    "WAWebBuyerEventLogger",
    "WAWebContactUtils",
    "WAWebCopyToClipboard",
    "WAWebEmojiText.react",
    "WAWebFbtAppName",
    "WAWebFrontendMsgGetters",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebGetQuickPayAction",
    "WAWebInteractiveBubble.react",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebInteractiveNativeFlowOrderHeader",
    "WAWebL10N",
    "WAWebMsgCasts",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebNativeFlowPaymentInfoOrderDetailsHeader",
    "WAWebOrderDetails",
    "WAWebOrderStatus",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebPsStructuredMessageInteractionWamEvent",
    "WAWebShowMessageActionFallbackErrorAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsTypes",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageChatType",
    "WAWebWamEnumStructuredMessageClass",
    "WDSIconIcContentCopy.react",
    "isStringNullOrEmpty",
    "react",
    "useWAWebIsMsgTrusted",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = ["menu"],
      d,
      m = d || (d = o("react")),
      p = { marginBottom6: { marginBottom: "xzueoph", $$css: !0 } },
      _ = {
        headerTitle: { fontSize: "x6prxxf", fontWeight: "xk50ysn", $$css: !0 },
      };
    function f(e) {
      var t,
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msgKey,
        l = o("useWAWebMsgValues").useMsgValues(
          i,
          o("WAWebMsgCasts").castToNativeFlowMsg,
          [
            (t = o("WAWebMsgGetters")).getType,
            t.getNativeFlowName,
            t.getNativeFlowButtons,
            t.getInteractiveType,
            t.getInteractivePayload,
            t.getTitle,
            t.getIsSentByMe,
            t.getIsNewsletterMsg,
            o("WAWebFrontendMsgGetters").getRtl,
            o("WAWebFrontendMsgGetters").getDir,
          ],
        ),
        u = l[0],
        d = l[1],
        f = l[2],
        h = l[3],
        y = l[4],
        C = l[5],
        b = l[6],
        v = l[7],
        S = l[8],
        R = l[9],
        L = r("useWAWebIsMsgTrusted")(i),
        E = o("WAWebOrderDetails").getOrderInfoFor({
          interactivePayload: y,
          interactiveType: h,
          nativeFlowButtons: f,
          nativeFlowName: d,
          type: u,
        }),
        k,
        I;
      if (d === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO)
        E &&
          ((k = m.jsx(r("WAWebNativeFlowPaymentInfoOrderDetailsHeader"), {
            isSentByMe: b,
            orderInfo: E,
          })),
          (I = [g(E, i)]));
      else if (
        d === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
      ) {
        var T = E == null ? void 0 : E.referenceId,
          D = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(i, v),
          x =
            T != null &&
            D != null &&
            o("WAWebOrderStatus").findOrderStatus(D, T) ===
              o("WAWebOrderStatus").OrderStatus.Pending;
        ((k = m.jsx("div", {
          className: "x1198e8h x1lxpwgx xzueoph xw01apr",
          children: m.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
            msgKey: i,
            displayType: a,
          }),
        })),
          (I = [
            {
              label: x ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
              onClick: function () {
                return r("WAWebShowMessageActionFallbackErrorAction")({
                  title: s._(/*BTDS*/ "", [
                    s._implicitParam(
                      "=m1",
                      m.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
                        children: s._(/*BTDS*/ ""),
                      }),
                    ),
                  ]),
                  body: s._(/*BTDS*/ ""),
                });
              },
            },
          ]));
        var $ = E == null ? void 0 : E.type;
        if (!b) {
          var P = o("WAWebGetQuickPayAction").getQuickPayAction($, !x);
          if (P != null) {
            var N = P.menu,
              M = babelHelpers.objectWithoutPropertiesLoose(P, c);
            I.push(M);
          }
        }
      } else
        d === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
          ? (k = m.jsx("div", {
              className: "x1198e8h x1lxpwgx xzueoph xw01apr",
              children: m.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
                msgKey: i,
                displayType: a,
              }),
            }))
          : ((k = r("isStringNullOrEmpty")(C)
              ? null
              : m.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: C,
                  selectable: L,
                  direction: R,
                  dirMismatch: S !== r("WAWebL10N").isRTL(),
                  inferLinesDirection: !0,
                  xstyle: [p.marginBottom6, _.headerTitle],
                })),
            (I =
              f == null
                ? void 0
                : f.map(function (e) {
                    var t, n;
                    return {
                      label:
                        (t =
                          (n = e.buttonText) == null
                            ? void 0
                            : n.displayText) != null
                          ? t
                          : "",
                      onClick: function () {
                        return r("WAWebShowMessageActionFallbackErrorAction")();
                      },
                    };
                  })));
      return m.jsx(r("WAWebInteractiveBubble.react"), {
        msgKey: i,
        displayAuthor: n,
        displayFooter:
          d !== r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS,
        header: k,
        displayType: a,
        actions: I,
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e, t) {
      var n = e.paymentSettings;
      return {
        label: s._(/*BTDS*/ ""),
        onClick: function () {
          var e,
            r,
            a =
              n == null ||
              (e = n.at(0)) == null ||
              (e =
                e[
                  o("WAWebBizOrderDetailsParams").PaymentSettingType
                    .PIX_STATIC_CODE
                ]) == null
                ? void 0
                : e.key,
            i = o("WAWebUserPrefsTypes").PixKeyType.cast(
              n == null ||
                (r = n.at(0)) == null ||
                (r =
                  r[
                    o("WAWebBizOrderDetailsParams").PaymentSettingType
                      .PIX_STATIC_CODE
                  ]) == null
                ? void 0
                : r.keyType,
            );
          if (
            a == null ||
            !o("WAWebCopyToClipboard").copyTextToClipboard(
              o("WAWebBrazilPixKeyFormattingUtils").getCopiedPixKey(a, i),
            )
          ) {
            o("WAWebToastManager").ToastManager.open(
              m.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
            );
            return;
          }
          (o("WAWebToastManager").ToastManager.open(
            m.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
          ),
            h(t));
        },
        Icon: r("WDSIconIcContentCopy.react"),
      };
    }
    function h(t) {
      var n,
        a = o("WAWebMsgCollection").MsgCollection.get(t);
      if (a == null) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[native-flow] copy Pix key log skipped, message left the collection",
            ])),
        );
        return;
      }
      if (!o("WAWebMsgGetters").getIsSentByMe(a)) {
        var i = r("WAWebPonyfillsCryptoRandomUUID")(),
          l = (n = a.senderObj) == null ? void 0 : n.id.toJid(),
          s = o("WAWebContactUtils").getMaybeBizPlatformForLogging(l),
          c = s === o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN,
          d = o("WAWebFrontendMsgGetters").getChat(a),
          m = Object.keys(o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE)[
            o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(d.id)
          ].toLowerCase(),
          p = new (o(
            "WAWebPsStructuredMessageInteractionWamEvent",
          ).PsStructuredMessageInteractionWamEvent)({
            bizPlatform: c
              ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
              : s,
            businessOwnerJid: l,
            messageClass: o("WAWebWamEnumStructuredMessageClass")
              .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
            messageClassAttributes: JSON.stringify(
              c
                ? {
                    cta: "p2p_pix",
                    flow: "P2P",
                    chat_type: m,
                    is_cta_available: !0,
                    accepted_payment_method: ["pix"],
                    payment_method_choice: "pix",
                    order_funnel_id: i,
                    referral: "chat_attachment",
                  }
                : { order_funnel_id: i },
            ),
            messageInteraction: o("WAWebWamEnumInteractionType")
              .INTERACTION_TYPE.COPY_PIX_KEY,
            messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE,
          });
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose(["CopyPixKey Log"])),
        ),
          p.commit(),
          o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
            isLoggingEnabled: o(
              "WAWebBizFrontendGatingUtils",
            ).isCopyPixKeyBuyerLoggingEnabled(l),
            psFunnelId: i,
            attributes: c
              ? {
                  cta: "p2p_pix",
                  flow: "P2P",
                  chatType: m,
                  isCtaAvailable: !0,
                  acceptedPaymentMethod: ["pix"],
                  paymentMethodChoice: "pix",
                  referral: "chat_attachment",
                }
              : {
                  cta: "copy_pix_key",
                  isCtaAvailable: !0,
                  paymentMethodChoice: "pix",
                  p2pFlow: "PIX_KEY",
                  currency: "BRL",
                  isTemplate: !1,
                  acceptedPaymentMethod: ["pix"],
                  messageType: "payment_info",
                  chatType: m,
                },
            interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
              .COPY_PIX_KEY,
            bizPlatform: c
              ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
              : s,
          }));
      }
    }
    l.default = f;
  },
  226,
);
