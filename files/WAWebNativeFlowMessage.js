__d(
  "WAWebNativeFlowMessage",
  [
    "fbt",
    "WAWebBizFrontendGatingUtils",
    "WAWebBizOrderDetailsParams",
    "WAWebBrazilPixKeyFormattingUtils",
    "WAWebBuyerEventLogger",
    "WAWebContactUtils",
    "WAWebCopyRefreshedIcon.react",
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
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebNativeFlowPaymentInfoOrderDetailsHeader",
    "WAWebOrderDetails",
    "WAWebOrderStatus",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebPsStructuredMessageInteractionWamEvent",
    "WAWebShowMessageActionFallbackErrorAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUserPrefsTypes",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageChatType",
    "WAWebWamEnumStructuredMessageClass",
    "isStringNullOrEmpty",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        headerTitle: { fontSize: "x6prxxf", fontWeight: "xk50ysn", $$css: !0 },
      };
    function d(e) {
      var t = e.displayAuthor,
        n = e.displayType,
        a = e.msg,
        i,
        l;
      if (
        a.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
      ) {
        var d = o("WAWebOrderDetails").getOrderInfo(a);
        d &&
          ((i = u.jsx(r("WAWebNativeFlowPaymentInfoOrderDetailsHeader"), {
            isSentByMe: o("WAWebMsgGetters").getIsSentByMe(a),
            orderInfo: d,
          })),
          (l = [m(d, a)]));
      } else if (
        a.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
      ) {
        var p = o("WAWebOrderDetails").getOrderInfo(a),
          _ = p == null ? void 0 : p.referenceId,
          f =
            _ != null &&
            o("WAWebOrderStatus").findOrderStatus(
              o("WAWebFrontendMsgGetters").getChat(a.unsafe()),
              _,
            ) === o("WAWebOrderStatus").OrderStatus.Pending;
        ((i = u.jsx("div", {
          className: "x1198e8h x1lxpwgx xzueoph xw01apr",
          children: u.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
            msg: a,
            displayType: n,
          }),
        })),
          (l = [
            {
              label: f
                ? s._(/*BTDS*/ "Review and pay")
                : s._(/*BTDS*/ "View details"),
              onClick: function () {
                return r("WAWebShowMessageActionFallbackErrorAction")({
                  title: s._(/*BTDS*/ "Orders can't be viewed on {=m1}", [
                    s._implicitParam(
                      "=m1",
                      u.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
                        children: s._(/*BTDS*/ ""),
                      }),
                    ),
                  ]),
                  body: s._(
                    /*BTDS*/ "Use WhatsApp on your mobile device to view this order.",
                  ),
                });
              },
            },
          ]));
        var g = p == null ? void 0 : p.type;
        if (!o("WAWebMsgGetters").getIsSentByMe(a)) {
          var h = o("WAWebGetQuickPayAction").getQuickPayAction(a, g, !f);
          h && l.push(h);
        }
      } else if (
        a.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
      )
        i = u.jsx("div", {
          className: "x1198e8h x1lxpwgx xzueoph xw01apr",
          children: u.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
            msg: a,
            displayType: n,
          }),
        });
      else {
        var y;
        ((i = r("isStringNullOrEmpty")(a.title)
          ? null
          : u.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: a.title,
              selectable: o("WAWebMsgModelPropUtils").isTrusted(a.unsafe()),
              direction: o("WAWebFrontendMsgGetters").getDir(a),
              dirMismatch:
                o("WAWebFrontendMsgGetters").getRtl(a) !==
                r("WAWebL10N").isRTL(),
              inferLinesDirection: !0,
              xstyle: [o("WAWebUISpacing").uiMargin.bottom6, c.headerTitle],
            })),
          (l =
            (y = a.nativeFlowButtons) == null
              ? void 0
              : y.map(function (e) {
                  var t, n;
                  return {
                    label:
                      (t =
                        (n = e.buttonText) == null ? void 0 : n.displayText) !=
                      null
                        ? t
                        : "",
                    onClick: function () {
                      return r("WAWebShowMessageActionFallbackErrorAction")();
                    },
                  };
                })));
      }
      return u.jsx(r("WAWebInteractiveBubble.react"), {
        msg: a,
        displayAuthor: t,
        displayFooter:
          a.nativeFlowName !==
          r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS,
        header: i,
        displayType: n,
        actions: l,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t) {
      var n = e.paymentSettings;
      return {
        label: s._(/*BTDS*/ "Copy Pix key"),
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
              u.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Couldn't copy Pix key"),
              }),
            );
            return;
          }
          (o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "Pix key copied"),
            }),
          ),
            p(t));
        },
        Icon: o("WAWebCopyRefreshedIcon.react").CopyRefreshedIcon,
      };
    }
    function p(e) {
      var t;
      if (!o("WAWebMsgGetters").getIsSentByMe(e)) {
        var n = r("WAWebPonyfillsCryptoRandomUUID")(),
          a = (t = e.senderObj) == null ? void 0 : t.id.toJid(),
          i = o("WAWebContactUtils").getMaybeBizPlatformForLogging(a),
          l = i === o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN,
          s = o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
          u = Object.keys(o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE)[
            o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(s.id)
          ].toLowerCase(),
          c = new (o(
            "WAWebPsStructuredMessageInteractionWamEvent",
          ).PsStructuredMessageInteractionWamEvent)({
            bizPlatform: l
              ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
              : i,
            businessOwnerJid: a,
            messageClass: o("WAWebWamEnumStructuredMessageClass")
              .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
            messageClassAttributes: JSON.stringify(
              l
                ? {
                    cta: "p2p_pix",
                    flow: "P2P",
                    chat_type: u,
                    is_cta_available: !0,
                    accepted_payment_method: ["pix"],
                    payment_method_choice: "pix",
                    order_funnel_id: n,
                    referral: "chat_attachment",
                  }
                : { order_funnel_id: n },
            ),
            messageInteraction: o("WAWebWamEnumInteractionType")
              .INTERACTION_TYPE.COPY_PIX_KEY,
            messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE,
          });
        (c.commit(),
          o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
            isLoggingEnabled: o(
              "WAWebBizFrontendGatingUtils",
            ).isCopyPixKeyBuyerLoggingEnabled(a),
            psFunnelId: n,
            attributes: l
              ? {
                  cta: "p2p_pix",
                  flow: "P2P",
                  chatType: u,
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
                  chatType: u,
                },
            interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
              .COPY_PIX_KEY,
            bizPlatform: l
              ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
              : i,
          }));
      }
    }
    l.default = d;
  },
  226,
);
