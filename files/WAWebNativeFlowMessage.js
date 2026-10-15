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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(49),
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msgKey,
        l;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var u;
        ((l = [
          (u = o("WAWebMsgGetters")).getType,
          u.getNativeFlowName,
          u.getNativeFlowButtons,
          u.getInteractiveType,
          u.getInteractivePayload,
          u.getTitle,
          u.getIsSentByMe,
          u.getIsNewsletterMsg,
          o("WAWebFrontendMsgGetters").getRtl,
          o("WAWebFrontendMsgGetters").getDir,
        ]),
          (t[0] = l));
      } else l = t[0];
      var d = o("useWAWebMsgValues").useMsgValues(i, l),
        f = d[0],
        h = d[1],
        b = d[2],
        v = d[3],
        S = d[4],
        R = d[5],
        L = d[6],
        E = d[7],
        k = d[8],
        I = d[9],
        T = r("useWAWebIsMsgTrusted")(i),
        D,
        x;
      if (
        t[1] !== I ||
        t[2] !== a ||
        t[3] !== S ||
        t[4] !== v ||
        t[5] !== E ||
        t[6] !== L ||
        t[7] !== i ||
        t[8] !== b ||
        t[9] !== h ||
        t[10] !== k ||
        t[11] !== R ||
        t[12] !== T ||
        t[13] !== f
      ) {
        var $ = o("WAWebOrderDetails").getOrderInfoFor({
          interactivePayload: S,
          interactiveType: v,
          nativeFlowButtons: b,
          nativeFlowName: h,
          type: f,
        });
        if (h === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO) {
          if ($) {
            x = m.jsx(r("WAWebNativeFlowPaymentInfoOrderDetailsHeader"), {
              isSentByMe: L,
              orderInfo: $,
            });
            var P;
            t[16] !== i || t[17] !== $
              ? ((P = C($, i)), (t[16] = i), (t[17] = $), (t[18] = P))
              : (P = t[18]);
            var N;
            (t[19] !== P ? ((N = [P]), (t[19] = P), (t[20] = N)) : (N = t[20]),
              (D = N));
          }
        } else if (
          h === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
        ) {
          var M = $ == null ? void 0 : $.referenceId,
            w = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(i, E),
            A =
              M != null &&
              w != null &&
              o("WAWebOrderStatus").findOrderStatus(w, M) ===
                o("WAWebOrderStatus").OrderStatus.Pending,
            F;
          t[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((F = { className: "x1198e8h x1lxpwgx xzueoph xw01apr" }),
              (t[21] = F))
            : (F = t[21]);
          var O;
          (t[22] !== a || t[23] !== i
            ? ((O = m.jsx(
                "div",
                babelHelpers.extends({}, F, {
                  children: m.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
                    msgKey: i,
                    displayType: a,
                  }),
                }),
              )),
              (t[22] = a),
              (t[23] = i),
              (t[24] = O))
            : (O = t[24]),
            (x = O));
          var B;
          t[25] !== A
            ? ((B = A
                ? s._(/*BTDS*/ "Review and pay")
                : s._(/*BTDS*/ "View details")),
              (t[25] = A),
              (t[26] = B))
            : (B = t[26]);
          var W;
          (t[27] !== B
            ? ((W = { label: B, onClick: y }), (t[27] = B), (t[28] = W))
            : (W = t[28]),
            (D = [W]));
          var q = $ == null ? void 0 : $.type;
          if (!L) {
            var U = o("WAWebGetQuickPayAction").getQuickPayAction(q, !A);
            if (U != null) {
              var V;
              if (t[29] !== U) {
                var H = U.menu,
                  G = babelHelpers.objectWithoutPropertiesLoose(U, c);
                ((V = G), (t[29] = U), (t[30] = V));
              } else V = t[30];
              D.push(V);
            }
          }
        } else if (
          h === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
        ) {
          var z;
          t[31] === Symbol.for("react.memo_cache_sentinel")
            ? ((z = { className: "x1198e8h x1lxpwgx xzueoph xw01apr" }),
              (t[31] = z))
            : (z = t[31]);
          var j;
          (t[32] !== a || t[33] !== i
            ? ((j = m.jsx(
                "div",
                babelHelpers.extends({}, z, {
                  children: m.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
                    msgKey: i,
                    displayType: a,
                  }),
                }),
              )),
              (t[32] = a),
              (t[33] = i),
              (t[34] = j))
            : (j = t[34]),
            (x = j));
        } else {
          var K;
          (t[35] !== I || t[36] !== k || t[37] !== R || t[38] !== T
            ? ((K = r("isStringNullOrEmpty")(R)
                ? null
                : m.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: R,
                    selectable: T,
                    direction: I,
                    dirMismatch: k !== r("WAWebL10N").isRTL(),
                    inferLinesDirection: !0,
                    xstyle: [p.marginBottom6, _.headerTitle],
                  })),
              (t[35] = I),
              (t[36] = k),
              (t[37] = R),
              (t[38] = T),
              (t[39] = K))
            : (K = t[39]),
            (x = K));
          var Q;
          (t[40] !== b
            ? ((Q = b == null ? void 0 : b.map(g)), (t[40] = b), (t[41] = Q))
            : (Q = t[41]),
            (D = Q));
        }
        ((t[1] = I),
          (t[2] = a),
          (t[3] = S),
          (t[4] = v),
          (t[5] = E),
          (t[6] = L),
          (t[7] = i),
          (t[8] = b),
          (t[9] = h),
          (t[10] = k),
          (t[11] = R),
          (t[12] = T),
          (t[13] = f),
          (t[14] = D),
          (t[15] = x));
      } else ((D = t[14]), (x = t[15]));
      var X = h !== r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS,
        Y;
      return (
        t[42] !== D ||
        t[43] !== n ||
        t[44] !== a ||
        t[45] !== x ||
        t[46] !== i ||
        t[47] !== X
          ? ((Y = m.jsx(r("WAWebInteractiveBubble.react"), {
              msgKey: i,
              displayAuthor: n,
              displayFooter: X,
              header: x,
              displayType: a,
              actions: D,
            })),
            (t[42] = D),
            (t[43] = n),
            (t[44] = a),
            (t[45] = x),
            (t[46] = i),
            (t[47] = X),
            (t[48] = Y))
          : (Y = t[48]),
        Y
      );
    }
    function g(e) {
      var t, n;
      return {
        label:
          (t = (n = e.buttonText) == null ? void 0 : n.displayText) != null
            ? t
            : "",
        onClick: h,
      };
    }
    function h() {
      return r("WAWebShowMessageActionFallbackErrorAction")();
    }
    function y() {
      return r("WAWebShowMessageActionFallbackErrorAction")({
        title: s._(/*BTDS*/ "Orders can't be viewed on {=m1}", [
          s._implicitParam(
            "=m1",
            m.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
              children: s._(/*BTDS*/ ""),
            }),
          ),
        ]),
        body: s._(/*BTDS*/ "Use WhatsApp on your phone to view this order."),
      });
    }
    function C(e, t) {
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
              m.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Couldn't copy Pix key"),
              }),
            );
            return;
          }
          (o("WAWebToastManager").ToastManager.open(
            m.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "Pix key copied"),
            }),
          ),
            b(t));
        },
        Icon: r("WDSIconIcContentCopy.react"),
      };
    }
    function b(t) {
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
