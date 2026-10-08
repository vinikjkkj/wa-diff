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
    "WAWebUserPrefsTypes",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageChatType",
    "WAWebWamEnumStructuredMessageClass",
    "WDSIconIcContentCopy.react",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["menu"],
      c,
      d = c || (c = o("react")),
      m = { marginBottom6: { marginBottom: "xzueoph", $$css: !0 } },
      p = {
        headerTitle: { fontSize: "x6prxxf", fontWeight: "xk50ysn", $$css: !0 },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(40),
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msg,
        l,
        c;
      if (
        i.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
      ) {
        var _;
        t[0] !== i
          ? ((_ = o("WAWebOrderDetails").getOrderInfo(i)),
            (t[0] = i),
            (t[1] = _))
          : (_ = t[1]);
        var g = _;
        if (g) {
          var C;
          t[2] !== i
            ? ((C = o("WAWebMsgGetters").getIsSentByMe(i.unsafe())),
              (t[2] = i),
              (t[3] = C))
            : (C = t[3]);
          var b;
          (t[4] !== g || t[5] !== C
            ? ((b = d.jsx(r("WAWebNativeFlowPaymentInfoOrderDetailsHeader"), {
                isSentByMe: C,
                orderInfo: g,
              })),
              (t[4] = g),
              (t[5] = C),
              (t[6] = b))
            : (b = t[6]),
            (l = b));
          var v;
          t[7] !== i || t[8] !== g
            ? ((v = y(g, i)), (t[7] = i), (t[8] = g), (t[9] = v))
            : (v = t[9]);
          var S;
          (t[10] !== v ? ((S = [v]), (t[10] = v), (t[11] = S)) : (S = t[11]),
            (c = S));
        }
      } else if (
        i.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
      )
        if (t[12] !== a || t[13] !== i) {
          var R = o("WAWebOrderDetails").getOrderInfo(i),
            L = R == null ? void 0 : R.referenceId,
            E =
              L != null &&
              o("WAWebOrderStatus").findOrderStatus(
                o("WAWebFrontendMsgGetters").getChat(i.unsafe()),
                L,
              ) === o("WAWebOrderStatus").OrderStatus.Pending,
            k;
          t[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((k = { className: "x1198e8h x1lxpwgx xzueoph xw01apr" }),
              (t[16] = k))
            : (k = t[16]);
          var I = d.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
              msg: i,
              displayType: a,
            }),
            T;
          (t[17] !== I
            ? ((T = d.jsx("div", babelHelpers.extends({}, k, { children: I }))),
              (t[17] = I),
              (t[18] = T))
            : (T = t[18]),
            (l = T));
          var D;
          t[19] !== E
            ? ((D = E
                ? s._(/*BTDS*/ "Review and pay")
                : s._(/*BTDS*/ "View details")),
              (t[19] = E),
              (t[20] = D))
            : (D = t[20]);
          var x;
          (t[21] !== D
            ? ((x = { label: D, onClick: h }), (t[21] = D), (t[22] = x))
            : (x = t[22]),
            (c = [x]));
          var $ = R == null ? void 0 : R.type;
          if (!o("WAWebMsgGetters").getIsSentByMe(i.unsafe())) {
            var P = o("WAWebGetQuickPayAction").getQuickPayAction(i, $, !E);
            if (P != null) {
              var N;
              if (t[23] !== P) {
                var M = P.menu,
                  w = babelHelpers.objectWithoutPropertiesLoose(P, u);
                ((N = w), (t[23] = P), (t[24] = N));
              } else N = t[24];
              c.push(N);
            }
          }
          ((t[12] = a), (t[13] = i), (t[14] = l), (t[15] = c));
        } else ((l = t[14]), (c = t[15]));
      else if (
        i.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
      ) {
        var A;
        t[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = { className: "x1198e8h x1lxpwgx xzueoph xw01apr" }),
            (t[25] = A))
          : (A = t[25]);
        var F;
        (t[26] !== a || t[27] !== i
          ? ((F = d.jsx(
              "div",
              babelHelpers.extends({}, A, {
                children: d.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
                  msg: i,
                  displayType: a,
                }),
              }),
            )),
            (t[26] = a),
            (t[27] = i),
            (t[28] = F))
          : (F = t[28]),
          (l = F));
      } else {
        var O;
        (t[29] !== i
          ? ((O = r("isStringNullOrEmpty")(i.title)
              ? null
              : d.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: i.title,
                  selectable: o("WAWebMsgModelPropUtils").isTrusted(i.unsafe()),
                  direction: o("WAWebFrontendMsgGetters").getDir(i.unsafe()),
                  dirMismatch:
                    o("WAWebFrontendMsgGetters").getRtl(i.unsafe()) !==
                    r("WAWebL10N").isRTL(),
                  inferLinesDirection: !0,
                  xstyle: [m.marginBottom6, p.headerTitle],
                })),
            (t[29] = i),
            (t[30] = O))
          : (O = t[30]),
          (l = O));
        var B;
        if (t[31] !== i.nativeFlowButtons) {
          var W;
          ((B = (W = i.nativeFlowButtons) == null ? void 0 : W.map(f)),
            (t[31] = i.nativeFlowButtons),
            (t[32] = B));
        } else B = t[32];
        c = B;
      }
      var q =
          i.nativeFlowName !==
          r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS,
        U;
      return (
        t[33] !== c ||
        t[34] !== n ||
        t[35] !== a ||
        t[36] !== l ||
        t[37] !== i ||
        t[38] !== q
          ? ((U = d.jsx(r("WAWebInteractiveBubble.react"), {
              msg: i,
              displayAuthor: n,
              displayFooter: q,
              header: l,
              displayType: a,
              actions: c,
            })),
            (t[33] = c),
            (t[34] = n),
            (t[35] = a),
            (t[36] = l),
            (t[37] = i),
            (t[38] = q),
            (t[39] = U))
          : (U = t[39]),
        U
      );
    }
    function f(e) {
      var t, n;
      return {
        label:
          (t = (n = e.buttonText) == null ? void 0 : n.displayText) != null
            ? t
            : "",
        onClick: g,
      };
    }
    function g() {
      return r("WAWebShowMessageActionFallbackErrorAction")();
    }
    function h() {
      return r("WAWebShowMessageActionFallbackErrorAction")({
        title: s._(/*BTDS*/ "Orders can't be viewed on {=m1}", [
          s._implicitParam(
            "=m1",
            d.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
              children: s._(/*BTDS*/ ""),
            }),
          ),
        ]),
        body: s._(/*BTDS*/ "Use WhatsApp on your phone to view this order."),
      });
    }
    function y(e, t) {
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
              d.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Couldn't copy Pix key"),
              }),
            );
            return;
          }
          (o("WAWebToastManager").ToastManager.open(
            d.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "Pix key copied"),
            }),
          ),
            C(t));
        },
        Icon: r("WDSIconIcContentCopy.react"),
      };
    }
    function C(t) {
      var n;
      if (!o("WAWebMsgGetters").getIsSentByMe(t.unsafe())) {
        var a = r("WAWebPonyfillsCryptoRandomUUID")(),
          i = (n = t.senderObj) == null ? void 0 : n.id.toJid(),
          l = o("WAWebContactUtils").getMaybeBizPlatformForLogging(i),
          s = l === o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN,
          u = o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
          c = Object.keys(o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE)[
            o("WAWebGetMessageChatTypeFromWid").getMessageChatTypeFromWid(u.id)
          ].toLowerCase(),
          d = new (o(
            "WAWebPsStructuredMessageInteractionWamEvent",
          ).PsStructuredMessageInteractionWamEvent)({
            bizPlatform: s
              ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
              : l,
            businessOwnerJid: i,
            messageClass: o("WAWebWamEnumStructuredMessageClass")
              .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
            messageClassAttributes: JSON.stringify(
              s
                ? {
                    cta: "p2p_pix",
                    flow: "P2P",
                    chat_type: c,
                    is_cta_available: !0,
                    accepted_payment_method: ["pix"],
                    payment_method_choice: "pix",
                    order_funnel_id: a,
                    referral: "chat_attachment",
                  }
                : { order_funnel_id: a },
            ),
            messageInteraction: o("WAWebWamEnumInteractionType")
              .INTERACTION_TYPE.COPY_PIX_KEY,
            messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE,
          });
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose(["CopyPixKey Log"])),
        ),
          d.commit(),
          o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
            isLoggingEnabled: o(
              "WAWebBizFrontendGatingUtils",
            ).isCopyPixKeyBuyerLoggingEnabled(i),
            psFunnelId: a,
            attributes: s
              ? {
                  cta: "p2p_pix",
                  flow: "P2P",
                  chatType: c,
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
                  chatType: c,
                },
            interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
              .COPY_PIX_KEY,
            bizPlatform: s
              ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
              : l,
          }));
      }
    }
    l.default = _;
  },
  226,
);
