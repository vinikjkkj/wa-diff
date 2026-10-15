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
    "WAWebPaymentLogoPixIcon.react",
    "WAWebPaymentVisaLogoIcon.react",
    "WAWebPaymentsGatingUtils",
    "WAWebSimplifiedPaymentHeader.react",
    "WAWebThemeContext",
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
        n = o("react-compiler-runtime").c(19),
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
          o("WAWebFrontendMsgGetters").getMediaData,
          u.getIsSentByMe,
          u.getIsNewsletterMsg,
        ]),
          (n[0] = l));
      } else l = n[0];
      var d = o("useWAWebMsgValues").useMsgValues(i, l),
        _ = d[0],
        g = d[1],
        h = d[2],
        y = d[3],
        C = d[4],
        b = d[5],
        v = d[6],
        S = d[7],
        R = d[8],
        L =
          (t = o("useWAWebMediaDataValues").useOptionalMediaDataValues(v, [
            o("WAWebMediaDataGetters").getPreview,
          ])) != null
            ? t
            : [null],
        E = L[0],
        k = o("WAWebOrderDetails").getOrderInfoFor({
          interactivePayload: y,
          interactiveType: h,
          nativeFlowButtons: C,
          nativeFlowName: g,
          type: _,
        }),
        I;
      n[1] !== R || n[2] !== i
        ? ((I = o("WAWebFrontendMsgGetters").getChatByMsgKey(i, R)),
          (n[1] = R),
          (n[2] = i),
          (n[3] = I))
        : (I = n[3]);
      var T = I,
        D = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          T,
          k == null ? void 0 : k.referenceId,
          o("WAWebOrderStatus").isSimplifiedOrder(k),
        );
      if (
        _ !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        _ !== o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW
      )
        return null;
      if (g === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO)
        k &&
          (a = f(
            i,
            o("WAWebPaymentDetailsGating").isPaymentDetailsEnabledFor({
              interactivePayload: y,
              interactiveType: h,
              msgKey: i,
              nativeFlowName: g,
              type: _,
            }),
            k,
            S,
          ));
      else if (
        g === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
      ) {
        if (k) {
          var x =
            _ === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
            (b == null ? void 0 : b.mediaType) ===
              o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.DOCUMENT;
          if (o("WAWebOrderStatus").isSimplifiedOrder(k) && !x)
            a = p({
              chat: T,
              displayType: e.displayType,
              info: k,
              isPaymentDetailsEnabled: o(
                "WAWebPaymentDetailsGating",
              ).isPaymentDetailsEnabledFor({
                interactivePayload: y,
                interactiveType: h,
                msgKey: i,
                nativeFlowName: g,
                type: _,
              }),
              isSentByMe: S,
              msgKey: i,
              orderPaymentStatus: D,
            });
          else {
            var $, P;
            (($ =
              (P = o(
                "WAWebOrdersExpansionCountries",
              ).getOrdersExpansionAllowedCountries()) == null
                ? void 0
                : P.length) != null
              ? $
              : 0) === 0 && (D = null);
            var N;
            n[4] !== x || n[5] !== i
              ? ((N = x
                  ? s.jsx(r("WAWebMediaDocumentPreview"), {
                      embedded: !0,
                      msgKey: i,
                    })
                  : void 0),
                (n[4] = x),
                (n[5] = i),
                (n[6] = N))
              : (N = n[6]);
            var M = N,
              w;
            if (n[7] !== b || n[8] !== E || n[9] !== _) {
              var A;
              ((w =
                (A = c({ interactiveHeader: b, preview: E, type: _ })) != null
                  ? A
                  : void 0),
                (n[7] = b),
                (n[8] = E),
                (n[9] = _),
                (n[10] = w));
            } else w = n[10];
            a = s.jsx(r("WAWebNativeFlowOrderDetailsHeader"), {
              amount: o("WAWebCurrencyUtils").formatAmount({
                amount: k.totalAmount,
                currency: k.currency,
              }),
              documentPreview: M,
              quantity: k.quantity,
              orderId: k.referenceId,
              text: o(
                "WAWebOrderDetailProductLabel",
              ).getOrderDetailProductLabel(k.items),
              numberOfItems: k.items.length,
              isSentByMe: S,
              thumbnail: w,
              payIcons: m(T, k),
              orderPaymentStatus: D,
            });
          }
        }
      } else if (
        g === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
      ) {
        var F;
        (n[11] !== i || n[12] !== e.displayType || n[13] !== e.quotedMsg
          ? ((F = s.jsx(
              o("WAWebInteractiveOrderStatusHeader.react")
                .InteractiveOrderStatusHeader,
              { displayType: e.displayType, msgKey: i, quotedMsg: e.quotedMsg },
            )),
            (n[11] = i),
            (n[12] = e.displayType),
            (n[13] = e.quotedMsg),
            (n[14] = F))
          : (F = n[14]),
          (a = F));
      } else if (
        g === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS ||
        g === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD
      ) {
        var O;
        (n[15] !== i || n[16] !== e.displayType || n[17] !== e.quotedMsg
          ? ((O = s.jsx(r("WAWebInteractiveOrderQuotedMessage.react"), {
              displayType: e.displayType,
              msgKey: i,
              quotedMsg: e.quotedMsg,
            })),
            (n[15] = i),
            (n[16] = e.displayType),
            (n[17] = e.quotedMsg),
            (n[18] = O))
          : (O = n[18]),
          (a = O));
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
        var r = o("WAWebThemeContext").isDarkTheme(),
          a = [
            u.paywithIcon,
            u.paddingAll4,
            u.marginStart4,
            r && u.iconDarkBackground,
          ];
        (o("WAWebBrPaymentSettingsUtils").hasValidDynamicPix(t) &&
          n.push(
            s.jsx(o("WAWebPaymentLogoPixIcon.react").PaymentLogoPixIcon, {
              iconXstyle: a,
            }),
          ),
          o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(e) &&
            o("WAWebBrPaymentSettingsUtils").hasValidPaymentLink(t) &&
            n.push(
              s.jsx(o("WAWebPaymentVisaLogoIcon.react").PaymentVisaLogoIcon, {
                iconXstyle: a,
              }),
            ) &&
            n.push(
              s.jsx(o("WAWebMastercardLogoIcon.react").MastercardLogoIcon, {
                iconXstyle: a,
              }),
            ),
          o("WAWebBrazilPaymentsGeoGating").isBoletoEnabled(e) &&
            o("WAWebBrPaymentSettingsUtils").hasValidBoletoCode(t) &&
            n.push(
              s.jsx(
                o("WAWebPaymentBoletoLogoIcon.react").PaymentBoletoLogoIcon,
                { iconXstyle: a },
              ),
            ));
      } else {
        var i = [
          u.paywithIcon,
          u.paddingAll4,
          u.marginStart4,
          u.iconDarkBackground,
        ];
        o("WAWebOrderStatus").isSimplifiedOrder(t) &&
          o("WAWebBrPaymentSettingsUtils").hasValidStaticPix(t) &&
          n.push(
            s.jsx(o("WAWebPaymentLogoPixIcon.react").PaymentLogoPixIcon, {
              iconXstyle: i,
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
            chat: t,
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
