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
      c = { marginBottom6: { marginBottom: "xzueoph", $$css: !0 } },
      d = {
        headerTitle: { fontSize: "x6prxxf", fontWeight: "xk50ysn", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(38),
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msg,
        l,
        m;
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
        var h = _;
        if (h) {
          var y;
          t[2] !== i
            ? ((y = o("WAWebMsgGetters").getIsSentByMe(i)),
              (t[2] = i),
              (t[3] = y))
            : (y = t[3]);
          var C;
          (t[4] !== h || t[5] !== y
            ? ((C = u.jsx(r("WAWebNativeFlowPaymentInfoOrderDetailsHeader"), {
                isSentByMe: y,
                orderInfo: h,
              })),
              (t[4] = h),
              (t[5] = y),
              (t[6] = C))
            : (C = t[6]),
            (l = C));
          var b;
          t[7] !== i || t[8] !== h
            ? ((b = g(h, i)), (t[7] = i), (t[8] = h), (t[9] = b))
            : (b = t[9]);
          var v;
          (t[10] !== b ? ((v = [b]), (t[10] = b), (t[11] = v)) : (v = t[11]),
            (m = v));
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
          var k = u.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
              msg: i,
              displayType: a,
            }),
            I;
          (t[17] !== k
            ? ((I = u.jsx("div", babelHelpers.extends({}, E, { children: k }))),
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
            ? ((D = { label: T, onClick: f }), (t[21] = T), (t[22] = D))
            : (D = t[22]),
            (m = [D]));
          var x = S == null ? void 0 : S.type;
          if (!o("WAWebMsgGetters").getIsSentByMe(i)) {
            var $ = o("WAWebGetQuickPayAction").getQuickPayAction(i, x, !L);
            $ && m.push($);
          }
          ((t[12] = a), (t[13] = i), (t[14] = l), (t[15] = m));
        } else ((l = t[14]), (m = t[15]));
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
          ? ((N = u.jsx(
              "div",
              babelHelpers.extends({}, P, {
                children: u.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
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
              : u.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: i.title,
                  selectable: o("WAWebMsgModelPropUtils").isTrusted(i.unsafe()),
                  direction: o("WAWebFrontendMsgGetters").getDir(i),
                  dirMismatch:
                    o("WAWebFrontendMsgGetters").getRtl(i) !==
                    r("WAWebL10N").isRTL(),
                  inferLinesDirection: !0,
                  xstyle: [c.marginBottom6, d.headerTitle],
                })),
            (t[27] = i),
            (t[28] = M))
          : (M = t[28]),
          (l = M));
        var w;
        if (t[29] !== i.nativeFlowButtons) {
          var A;
          ((w = (A = i.nativeFlowButtons) == null ? void 0 : A.map(p)),
            (t[29] = i.nativeFlowButtons),
            (t[30] = w));
        } else w = t[30];
        m = w;
      }
      var F =
          i.nativeFlowName !==
          r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS,
        O;
      return (
        t[31] !== m ||
        t[32] !== n ||
        t[33] !== a ||
        t[34] !== l ||
        t[35] !== i ||
        t[36] !== F
          ? ((O = u.jsx(r("WAWebInteractiveBubble.react"), {
              msg: i,
              displayAuthor: n,
              displayFooter: F,
              header: l,
              displayType: a,
              actions: m,
            })),
            (t[31] = m),
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
    function p(e) {
      var t, n;
      return {
        label:
          (t = (n = e.buttonText) == null ? void 0 : n.displayText) != null
            ? t
            : "",
        onClick: _,
      };
    }
    function _() {
      return r("WAWebShowMessageActionFallbackErrorAction")();
    }
    function f() {
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
    function g(e, t) {
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
            h(t));
        },
        Icon: o("WAWebCopyRefreshedIcon.react").CopyRefreshedIcon,
      };
    }
    function h(e) {
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
    l.default = m;
  },
  226,
);
