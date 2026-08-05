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
      u,
      c = u || (u = o("react")),
      d = { marginBottom6: { marginBottom: "xzueoph", $$css: !0 } },
      m = {
        headerTitle: { fontSize: "x6prxxf", fontWeight: "xk50ysn", $$css: !0 },
      };
    function p(e) {
      var t = o("react-compiler-runtime").c(38),
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msg,
        l,
        u;
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
        var f = p;
        if (f) {
          var y;
          t[2] !== i
            ? ((y = o("WAWebMsgGetters").getIsSentByMe(i)),
              (t[2] = i),
              (t[3] = y))
            : (y = t[3]);
          var C;
          (t[4] !== f || t[5] !== y
            ? ((C = c.jsx(r("WAWebNativeFlowPaymentInfoOrderDetailsHeader"), {
                isSentByMe: y,
                orderInfo: f,
              })),
              (t[4] = f),
              (t[5] = y),
              (t[6] = C))
            : (C = t[6]),
            (l = C));
          var b;
          t[7] !== i || t[8] !== f
            ? ((b = h(f, i)), (t[7] = i), (t[8] = f), (t[9] = b))
            : (b = t[9]);
          var v;
          (t[10] !== b ? ((v = [b]), (t[10] = b), (t[11] = v)) : (v = t[11]),
            (u = v));
        }
      } else if (
        i.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
      )
        if (t[12] !== a || t[13] !== i) {
          var S = o("WAWebOrderDetails").getOrderInfo(i),
            R = S == null ? void 0 : S.referenceId,
            L =
              R != null &&
              o("WAWebOrderStatus").findOrderStatus(
                o("WAWebFrontendMsgGetters").getChat(i.unsafe()),
                R,
              ) === o("WAWebOrderStatus").OrderStatus.Pending,
            E;
          t[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((E = { className: "x1198e8h x1lxpwgx xzueoph xw01apr" }),
              (t[16] = E))
            : (E = t[16]);
          var k = c.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
              msg: i,
              displayType: a,
            }),
            I;
          (t[17] !== k
            ? ((I = c.jsx("div", babelHelpers.extends({}, E, { children: k }))),
              (t[17] = k),
              (t[18] = I))
            : (I = t[18]),
            (l = I));
          var T;
          t[19] !== L
            ? ((T = L
                ? s._(/*BTDS*/ "Review and pay")
                : s._(/*BTDS*/ "View details")),
              (t[19] = L),
              (t[20] = T))
            : (T = t[20]);
          var D;
          (t[21] !== T
            ? ((D = { label: T, onClick: g }), (t[21] = T), (t[22] = D))
            : (D = t[22]),
            (u = [D]));
          var x = S == null ? void 0 : S.type;
          if (!o("WAWebMsgGetters").getIsSentByMe(i)) {
            var $ = o("WAWebGetQuickPayAction").getQuickPayAction(i, x, !L);
            $ && u.push($);
          }
          ((t[12] = a), (t[13] = i), (t[14] = l), (t[15] = u));
        } else ((l = t[14]), (u = t[15]));
      else if (
        i.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
      ) {
        var P;
        t[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = { className: "x1198e8h x1lxpwgx xzueoph xw01apr" }),
            (t[23] = P))
          : (P = t[23]);
        var N;
        (t[24] !== a || t[25] !== i
          ? ((N = c.jsx(
              "div",
              babelHelpers.extends({}, P, {
                children: c.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
                  msg: i,
                  displayType: a,
                }),
              }),
            )),
            (t[24] = a),
            (t[25] = i),
            (t[26] = N))
          : (N = t[26]),
          (l = N));
      } else {
        var M;
        (t[27] !== i
          ? ((M = r("isStringNullOrEmpty")(i.title)
              ? null
              : c.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: i.title,
                  selectable: o("WAWebMsgModelPropUtils").isTrusted(i.unsafe()),
                  direction: o("WAWebFrontendMsgGetters").getDir(i),
                  dirMismatch:
                    o("WAWebFrontendMsgGetters").getRtl(i) !==
                    r("WAWebL10N").isRTL(),
                  inferLinesDirection: !0,
                  xstyle: [d.marginBottom6, m.headerTitle],
                })),
            (t[27] = i),
            (t[28] = M))
          : (M = t[28]),
          (l = M));
        var w;
        if (t[29] !== i.nativeFlowButtons) {
          var A;
          ((w = (A = i.nativeFlowButtons) == null ? void 0 : A.map(_)),
            (t[29] = i.nativeFlowButtons),
            (t[30] = w));
        } else w = t[30];
        u = w;
      }
      var F =
          i.nativeFlowName !==
          r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS,
        O;
      return (
        t[31] !== u ||
        t[32] !== n ||
        t[33] !== a ||
        t[34] !== l ||
        t[35] !== i ||
        t[36] !== F
          ? ((O = c.jsx(r("WAWebInteractiveBubble.react"), {
              msg: i,
              displayAuthor: n,
              displayFooter: F,
              header: l,
              displayType: a,
              actions: u,
            })),
            (t[31] = u),
            (t[32] = n),
            (t[33] = a),
            (t[34] = l),
            (t[35] = i),
            (t[36] = F),
            (t[37] = O))
          : (O = t[37]),
        O
      );
    }
    function _(e) {
      var t, n;
      return {
        label:
          (t = (n = e.buttonText) == null ? void 0 : n.displayText) != null
            ? t
            : "",
        onClick: f,
      };
    }
    function f() {
      return r("WAWebShowMessageActionFallbackErrorAction")();
    }
    function g() {
      return r("WAWebShowMessageActionFallbackErrorAction")({
        title: s._(/*BTDS*/ "Orders can't be viewed on {=m1}", [
          s._implicitParam(
            "=m1",
            c.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
              children: s._(/*BTDS*/ ""),
            }),
          ),
        ]),
        body: s._(/*BTDS*/ "Use WhatsApp on your phone to view this order."),
      });
    }
    function h(e, t) {
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
              c.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Couldn't copy Pix key"),
              }),
            );
            return;
          }
          (o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "Pix key copied"),
            }),
          ),
            y(t));
        },
        Icon: r("WDSIconIcContentCopy.react"),
      };
    }
    function y(t) {
      var n;
      if (!o("WAWebMsgGetters").getIsSentByMe(t)) {
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
    l.default = p;
  },
  226,
);
