__d(
  "WAWebInteractiveNativeFlowOrderHeader",
  [
    "WAWebABProps",
    "WAWebBrPaymentSettingsUtils",
    "WAWebBrazilPaymentsGeoGating",
    "WAWebCurrencyUtils",
    "WAWebFrontendMsgGetters",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebInteractiveOrderQuotedMessage.react",
    "WAWebInteractiveOrderStatusHeader.react",
    "WAWebMastercardLogoIcon.react",
    "WAWebMediaDataGetters",
    "WAWebMediaDocumentPreview",
    "WAWebMediaOpaqueData",
    "WAWebMsgCasts",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNativeFlowOrderDetailsHeader",
    "WAWebNativeFlowPaymentInfoOrderDetailsHeader",
    "WAWebOrderDetailProductLabel",
    "WAWebOrderDetails",
    "WAWebOrderStatus",
    "WAWebOrdersExpansionCountries",
    "WAWebPaymentBoletoLogoIcon.react",
    "WAWebPaymentDetailsBubbleHeaderLoadable",
    "WAWebPaymentDetailsGating",
    "WAWebPaymentDetailsPixCodeBubbleHeader.react",
    "WAWebPaymentVisaLogoIcon.react",
    "WAWebPaymentsGatingUtils",
    "WAWebSimplifiedPaymentHeader.react",
    "WAWebThemeContext",
    "WDSIconWdsSmbPaymentsPixFilled.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues",
    "useWAWebOrderPaymentStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        paywithIcon: {
          borderTopColor: "xnj1f2r",
          borderInlineEndColor: "x2uibgs",
          borderBottomColor: "xkveyfu",
          borderInlineStartColor: "x12llq9",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          verticalAlign: "xxymvpz",
          width: "x1xp8n7a",
          height: "xlup9mm",
          $$css: !0,
        },
        pixLogo: {
          backgroundColor: "xv9nkwm",
          borderTopColor: "x1v8p93f",
          borderInlineEndColor: "x1o3jo1z",
          borderBottomColor: "x16stqrj",
          borderInlineStartColor: "xv5lvn5",
          color: "x17t9dm2",
          $$css: !0,
        },
        iconDarkBackground: { backgroundColor: "xb1i3fl", $$css: !0 },
        marginStart4: { marginInlineStart: "x1wbi8v6", $$css: !0 },
        paddingAll4: {
          paddingTop: "x1tiyuxx",
          paddingInlineEnd: "x1uc92m",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "x181vq82",
          $$css: !0,
        },
      };
    function c(e) {
      var t = e.interactiveHeader,
        n = e.preview,
        a = e.type;
      if (
        a === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        (t == null ? void 0 : t.thumbnail) != null
      )
        return "data:image/jpeg;base64," + t.thumbnail;
      if (n instanceof r("WAWebMediaOpaqueData")) return n.url();
    }
    function d(e) {
      var t,
        n = o("react-compiler-runtime").c(20),
        a = null,
        i = e.msgKey,
        l;
      if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
        var u;
        ((l = [
          (u = o("WAWebMsgGetters")).getType,
          u.getNativeFlowName,
          u.getInteractiveType,
          u.getInteractivePayload,
          u.getNativeFlowButtons,
          u.getInteractiveHeader,
          u.getIsSentByMe,
          u.getIsNewsletterMsg,
        ]),
          (n[0] = l));
      } else l = n[0];
      var d = o("useWAWebMsgValues").useMsgValues(
          i,
          o("WAWebMsgCasts").castToInteractiveOrNativeFlowMsg,
          l,
        ),
        _ = d[0],
        g = d[1],
        h = d[2],
        y = d[3],
        C = d[4],
        b = d[5],
        v = d[6],
        S = d[7],
        R;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = [o("WAWebFrontendMsgGetters").getMediaData]), (n[1] = R))
        : (R = n[1]);
      var L = o("useWAWebMsgValues").useMsgValues(i, R),
        E = L[0],
        k =
          (t = o("useWAWebMediaDataValues").useOptionalMediaDataValues(E, [
            o("WAWebMediaDataGetters").getPreview,
          ])) != null
            ? t
            : [null],
        I = k[0],
        T = o("WAWebOrderDetails").getOrderInfoFor({
          interactivePayload: y,
          interactiveType: h,
          nativeFlowButtons: C,
          nativeFlowName: g,
          type: _,
        }),
        D;
      n[2] !== S || n[3] !== i
        ? ((D = o("WAWebFrontendMsgGetters").getChatByMsgKey(i, S)),
          (n[2] = S),
          (n[3] = i),
          (n[4] = D))
        : (D = n[4]);
      var x = D,
        $ = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          x,
          T == null ? void 0 : T.referenceId,
          o("WAWebOrderStatus").isSimplifiedOrder(T),
        );
      if (
        _ !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        _ !== o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW
      )
        return null;
      if (g === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO)
        T &&
          (a = f(
            i,
            o("WAWebPaymentDetailsGating").isPaymentDetailsEnabledFor({
              interactivePayload: y,
              interactiveType: h,
              msgKey: i,
              nativeFlowName: g,
              type: _,
            }),
            T,
            v,
          ));
      else if (
        g === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
      ) {
        if (T) {
          var P =
            _ === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
            (b == null ? void 0 : b.mediaType) ===
              o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.DOCUMENT;
          if (o("WAWebOrderStatus").isSimplifiedOrder(T) && !P)
            a = p({
              chat: x,
              displayType: e.displayType,
              info: T,
              isPaymentDetailsEnabled: o(
                "WAWebPaymentDetailsGating",
              ).isPaymentDetailsEnabledFor({
                interactivePayload: y,
                interactiveType: h,
                msgKey: i,
                nativeFlowName: g,
                type: _,
              }),
              isSentByMe: v,
              msgKey: i,
              orderPaymentStatus: $,
            });
          else {
            var N, M;
            ((N =
              (M = o(
                "WAWebOrdersExpansionCountries",
              ).getOrdersExpansionAllowedCountries()) == null
                ? void 0
                : M.length) != null
              ? N
              : 0) === 0 && ($ = null);
            var w;
            n[5] !== P || n[6] !== i
              ? ((w = P
                  ? s.jsx(r("WAWebMediaDocumentPreview"), {
                      embedded: !0,
                      msgKey: i,
                    })
                  : void 0),
                (n[5] = P),
                (n[6] = i),
                (n[7] = w))
              : (w = n[7]);
            var A = w,
              F;
            if (n[8] !== b || n[9] !== I || n[10] !== _) {
              var O;
              ((F =
                (O = c({ interactiveHeader: b, preview: I, type: _ })) != null
                  ? O
                  : void 0),
                (n[8] = b),
                (n[9] = I),
                (n[10] = _),
                (n[11] = F));
            } else F = n[11];
            a = s.jsx(r("WAWebNativeFlowOrderDetailsHeader"), {
              amount: o("WAWebCurrencyUtils").formatAmount({
                amount: T.totalAmount,
                currency: T.currency,
              }),
              documentPreview: A,
              quantity: T.quantity,
              orderId: T.referenceId,
              text: o(
                "WAWebOrderDetailProductLabel",
              ).getOrderDetailProductLabel(T.items),
              numberOfItems: T.items.length,
              isSentByMe: v,
              thumbnail: F,
              payIcons: m(x, T),
              orderPaymentStatus: $,
            });
          }
        }
      } else if (
        g === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
      ) {
        var B;
        (n[12] !== i || n[13] !== e.displayType || n[14] !== e.quotedMsg
          ? ((B = s.jsx(
              o("WAWebInteractiveOrderStatusHeader.react")
                .InteractiveOrderStatusHeader,
              { displayType: e.displayType, msgKey: i, quotedMsg: e.quotedMsg },
            )),
            (n[12] = i),
            (n[13] = e.displayType),
            (n[14] = e.quotedMsg),
            (n[15] = B))
          : (B = n[15]),
          (a = B));
      } else if (
        g === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS ||
        g === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD
      ) {
        var W;
        (n[16] !== i || n[17] !== e.displayType || n[18] !== e.quotedMsg
          ? ((W = s.jsx(r("WAWebInteractiveOrderQuotedMessage.react"), {
              displayType: e.displayType,
              msgKey: i,
              quotedMsg: e.quotedMsg,
            })),
            (n[16] = i),
            (n[17] = e.displayType),
            (n[18] = e.quotedMsg),
            (n[19] = W))
          : (W = n[19]),
          (a = W));
      }
      return a;
    }
    function m(e, t) {
      if (
        t == null ||
        !o("WAWebABProps").getABPropConfigValue(
          "br_enable_payment_logos_on_bubble",
        ) ||
        !o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(e)
      )
        return [];
      var n = [];
      if (e.contact.isEnterprise) {
        var a = o("WAWebThemeContext").isDarkTheme(),
          i = [
            u.paywithIcon,
            u.paddingAll4,
            u.marginStart4,
            a && u.iconDarkBackground,
          ];
        (o("WAWebBrPaymentSettingsUtils").hasValidDynamicPix(t) &&
          n.push(
            s.jsx(r("WDSIconWdsSmbPaymentsPixFilled.react"), {
              iconXstyle: [i, u.pixLogo],
              testid: "payment-logo-pix",
            }),
          ),
          o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(e) &&
            o("WAWebBrPaymentSettingsUtils").hasValidPaymentLink(t) &&
            n.push(
              s.jsx(o("WAWebPaymentVisaLogoIcon.react").PaymentVisaLogoIcon, {
                iconXstyle: i,
              }),
            ) &&
            n.push(
              s.jsx(o("WAWebMastercardLogoIcon.react").MastercardLogoIcon, {
                iconXstyle: i,
              }),
            ),
          o("WAWebBrazilPaymentsGeoGating").isBoletoEnabled(e) &&
            o("WAWebBrPaymentSettingsUtils").hasValidBoletoCode(t) &&
            n.push(
              s.jsx(
                o("WAWebPaymentBoletoLogoIcon.react").PaymentBoletoLogoIcon,
                { iconXstyle: i },
              ),
            ));
      } else {
        var l = [
          u.paywithIcon,
          u.paddingAll4,
          u.marginStart4,
          u.iconDarkBackground,
        ];
        o("WAWebOrderStatus").isSimplifiedOrder(t) &&
          o("WAWebBrPaymentSettingsUtils").hasValidStaticPix(t) &&
          n.push(
            s.jsx(r("WDSIconWdsSmbPaymentsPixFilled.react"), {
              iconXstyle: [l, u.pixLogo],
              testid: "payment-logo-pix",
            }),
          );
      }
      return n;
    }
    function p(e) {
      var t = e.chat,
        n = e.displayType,
        a = e.info,
        i = e.isPaymentDetailsEnabled,
        l = e.isSentByMe,
        u = e.msgKey,
        c = e.orderPaymentStatus;
      return o("WAWebOrderStatus").isPaymentRequest(t, a) && !_(t) && i
        ? s.jsx(r("WAWebPaymentDetailsPixCodeBubbleHeader.react"), {
            displayType: n,
            msgKey: u,
          })
        : s.jsx(r("WAWebSimplifiedPaymentHeader.react"), {
            amount1000: a.totalAmount * 1e3,
            currency: a.currency,
            isSentByMe: l,
            payIcons: m(t, a),
            orderPaymentStatus: c,
            chatId: t.id,
            isPaymentRequest: o("WAWebOrderStatus").isPaymentRequest(t, a),
            msgKey: u,
            paymentSettings: a.paymentSettings,
            displayType: n,
          });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t;
      return (
        (e.contact.isEnterprise ||
          ((t = e.contact) == null ? void 0 : t.isHosted) === !0) &&
        o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(e)
      );
    }
    function f(e, t, n, a) {
      return t
        ? s.jsx(
            o("WAWebPaymentDetailsBubbleHeaderLoadable")
              .WAWebPaymentDetailsBubbleHeaderLoadable,
            { msgKey: e },
          )
        : s.jsx(r("WAWebNativeFlowPaymentInfoOrderDetailsHeader"), {
            isSentByMe: a,
            orderInfo: n,
          });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
