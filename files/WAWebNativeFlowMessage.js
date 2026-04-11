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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        headerTitle: { fontSize: "x6prxxf", fontWeight: "xk50ysn", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(38),
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msg,
        l,
        d;
      if (
        i.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
      ) {
        var p;
        t[0] !== i
          ? ((p = o("WAWebOrderDetails").getOrderInfo(i)),
            (t[0] = i),
            (t[1] = p))
          : (p = t[1]);
        var g = p;
        if (g) {
          var h;
          t[2] !== i
            ? ((h = o("WAWebMsgGetters").getIsSentByMe(i)),
              (t[2] = i),
              (t[3] = h))
            : (h = t[3]);
          var y;
          (t[4] !== g || t[5] !== h
            ? ((y = u.jsx(r("WAWebNativeFlowPaymentInfoOrderDetailsHeader"), {
                isSentByMe: h,
                orderInfo: g,
              })),
              (t[4] = g),
              (t[5] = h),
              (t[6] = y))
            : (y = t[6]),
            (l = y));
          var C;
          t[7] !== i || t[8] !== g
            ? ((C = f(g, i)), (t[7] = i), (t[8] = g), (t[9] = C))
            : (C = t[9]);
          var b;
          (t[10] !== C ? ((b = [C]), (t[10] = C), (t[11] = b)) : (b = t[11]),
            (d = b));
        }
      } else if (
        i.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
      )
        if (t[12] !== a || t[13] !== i) {
          var v = o("WAWebOrderDetails").getOrderInfo(i),
            S = v == null ? void 0 : v.referenceId,
            R =
              S != null &&
              o("WAWebOrderStatus").findOrderStatus(
                o("WAWebFrontendMsgGetters").getChat(i.unsafe()),
                S,
              ) === o("WAWebOrderStatus").OrderStatus.Pending,
            L;
          t[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((L = { className: "x1198e8h x1lxpwgx xzueoph xw01apr" }),
              (t[16] = L))
            : (L = t[16]);
          var E = u.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
              msg: i,
              displayType: a,
            }),
            k;
          (t[17] !== E
            ? ((k = u.jsx("div", babelHelpers.extends({}, L, { children: E }))),
              (t[17] = E),
              (t[18] = k))
            : (k = t[18]),
            (l = k));
          var I;
          t[19] !== R
            ? ((I = R
                ? s._(/*BTDS*/ "Review and pay")
                : s._(/*BTDS*/ "View details")),
              (t[19] = R),
              (t[20] = I))
            : (I = t[20]);
          var T;
          (t[21] !== I
            ? ((T = { label: I, onClick: _ }), (t[21] = I), (t[22] = T))
            : (T = t[22]),
            (d = [T]));
          var D = v == null ? void 0 : v.type;
          if (!o("WAWebMsgGetters").getIsSentByMe(i)) {
            var x = o("WAWebGetQuickPayAction").getQuickPayAction(i, D, !R);
            x && d.push(x);
          }
          ((t[12] = a), (t[13] = i), (t[14] = l), (t[15] = d));
        } else ((l = t[14]), (d = t[15]));
      else if (
        i.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
      ) {
        var $;
        t[23] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = { className: "x1198e8h x1lxpwgx xzueoph xw01apr" }),
            (t[23] = $))
          : ($ = t[23]);
        var P;
        (t[24] !== a || t[25] !== i
          ? ((P = u.jsx(
              "div",
              babelHelpers.extends({}, $, {
                children: u.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
                  msg: i,
                  displayType: a,
                }),
              }),
            )),
            (t[24] = a),
            (t[25] = i),
            (t[26] = P))
          : (P = t[26]),
          (l = P));
      } else {
        var N;
        (t[27] !== i
          ? ((N = r("isStringNullOrEmpty")(i.title)
              ? null
              : u.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: i.title,
                  selectable: o("WAWebMsgModelPropUtils").isTrusted(i.unsafe()),
                  direction: o("WAWebFrontendMsgGetters").getDir(i),
                  dirMismatch:
                    o("WAWebFrontendMsgGetters").getRtl(i) !==
                    r("WAWebL10N").isRTL(),
                  inferLinesDirection: !0,
                  xstyle: [o("WAWebUISpacing").uiMargin.bottom6, c.headerTitle],
                })),
            (t[27] = i),
            (t[28] = N))
          : (N = t[28]),
          (l = N));
        var M;
        if (t[29] !== i.nativeFlowButtons) {
          var w;
          ((M = (w = i.nativeFlowButtons) == null ? void 0 : w.map(m)),
            (t[29] = i.nativeFlowButtons),
            (t[30] = M));
        } else M = t[30];
        d = M;
      }
      var A =
          i.nativeFlowName !==
          r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS,
        F;
      return (
        t[31] !== d ||
        t[32] !== n ||
        t[33] !== a ||
        t[34] !== l ||
        t[35] !== i ||
        t[36] !== A
          ? ((F = u.jsx(r("WAWebInteractiveBubble.react"), {
              msg: i,
              displayAuthor: n,
              displayFooter: A,
              header: l,
              displayType: a,
              actions: d,
            })),
            (t[31] = d),
            (t[32] = n),
            (t[33] = a),
            (t[34] = l),
            (t[35] = i),
            (t[36] = A),
            (t[37] = F))
          : (F = t[37]),
        F
      );
    }
    function m(e) {
      var t, n;
      return {
        label:
          (t = (n = e.buttonText) == null ? void 0 : n.displayText) != null
            ? t
            : "",
        onClick: p,
      };
    }
    function p() {
      return r("WAWebShowMessageActionFallbackErrorAction")();
    }
    function _() {
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
    }
    function f(e, t) {
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
            g(t));
        },
        Icon: o("WAWebCopyRefreshedIcon.react").CopyRefreshedIcon,
      };
    }
    function g(e) {
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
