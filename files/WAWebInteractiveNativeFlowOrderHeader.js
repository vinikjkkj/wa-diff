__d(
  "WAWebInteractiveNativeFlowOrderHeader",
  [
    "WAWebBizFrontendGatingUtils",
    "WAWebBizGatingUtils",
    "WAWebBrazilPaymentsGeoGating",
    "WAWebCurrencyUtils",
    "WAWebFrontendMsgGetters",
    "WAWebGetBrazilnteractiveActions",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebInteractiveOrderQuotedMessage.react",
    "WAWebInteractiveOrderStatusHeader.react",
    "WAWebMastercardLogoIcon.react",
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
    "WAWebPaymentLogoPixIcon.react",
    "WAWebPaymentVisaLogoIcon.react",
    "WAWebSimplifiedPaymentHeader.react",
    "WAWebThemeContext",
    "react",
    "useWAWebOrderPaymentStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        paywithIcon: {
          borderTopColor: "xugmkjn",
          borderInlineEndColor: "x1q71z5y",
          borderBottomColor: "x1d3wcft",
          borderInlineStartColor: "x7oa2jg",
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
        iconDarkBackground: { backgroundColor: "x163g9ad", $$css: !0 },
        marginStart4: { marginInlineStart: "x1wbi8v6", $$css: !0 },
        paddingAll4: {
          paddingTop: "x1tiyuxx",
          paddingInlineEnd: "x1uc92m",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "x181vq82",
          $$css: !0,
        },
      },
      c = function (t) {
        var e;
        if (
          t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          ((e = t.interactiveHeader) == null ? void 0 : e.thumbnail) != null
        )
          return "data:image/jpeg;base64," + t.interactiveHeader.thumbnail;
        if (t.mediaData) {
          var n = t.mediaData.preview;
          if (n instanceof r("WAWebMediaOpaqueData")) return n.url();
        }
      };
    function d(e) {
      var t = null,
        n = e.msg,
        a = o("WAWebOrderDetails").getOrderInfo(n),
        i = o("WAWebFrontendMsgGetters").getChat(n.unsafe()),
        l = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          i,
          a == null ? void 0 : a.referenceId,
        );
      if (
        n.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
      )
        a &&
          (t = s.jsx(r("WAWebNativeFlowPaymentInfoOrderDetailsHeader"), {
            isSentByMe: o("WAWebMsgGetters").getIsSentByMe(n),
            orderInfo: a,
          }));
      else if (
        n.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
      ) {
        if (a) {
          var u,
            d =
              n.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
              ((u = n.interactiveHeader) == null ? void 0 : u.mediaType) ===
                o("WAWebInteractiveMessageHeaderMediaType")
                  .InteractiveMessageHeaderMediaType.DOCUMENT;
          if (o("WAWebOrderStatus").isSimplifiedOrder(a) && !d)
            t = s.jsx(r("WAWebSimplifiedPaymentHeader.react"), {
              amount1000: a.totalAmount * 1e3,
              currency: a.currency,
              orderId: a.referenceId,
              isSentByMe: o("WAWebMsgGetters").getIsSentByMe(n),
              payIcons: m(i, a),
              orderPaymentStatus: l,
              chat: i,
              isPaymentRequest: o("WAWebOrderStatus").isPaymentRequest(i, a),
              msg: n,
              displayType: e.displayType,
            });
          else {
            var p, _, f, g;
            ((p =
              (_ = o(
                "WAWebOrdersExpansionCountries",
              ).getOrdersExpansionAllowedCountries()) == null
                ? void 0
                : _.length) != null
              ? p
              : 0) === 0 && (l = null);
            var h =
              n.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
              ((f = n.interactiveHeader) == null ? void 0 : f.mediaType) ===
                o("WAWebInteractiveMessageHeaderMediaType")
                  .InteractiveMessageHeaderMediaType.DOCUMENT
                ? s.jsx(r("WAWebMediaDocumentPreview"), {
                    embedded: !0,
                    msg: n,
                  })
                : void 0;
            t = s.jsx(r("WAWebNativeFlowOrderDetailsHeader"), {
              amount: o("WAWebCurrencyUtils").formatAmount(
                a.currency,
                a.totalAmount,
              ),
              documentPreview: h,
              quantity: a.quantity,
              orderId: a.referenceId,
              text: o(
                "WAWebOrderDetailProductLabel",
              ).getOrderDetailProductLabel(a.items),
              numberOfItems: a.items.length,
              isSentByMe: o("WAWebMsgGetters").getIsSentByMe(n),
              thumbnail: (g = c(n)) != null ? g : void 0,
              payIcons: m(i, a),
              orderPaymentStatus: l,
            });
          }
        }
      } else
        n.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
          ? (t = s.jsx(
              o("WAWebInteractiveOrderStatusHeader.react")
                .InteractiveOrderStatusHeader,
              babelHelpers.extends({}, e),
            ))
          : (n.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS ||
              n.nativeFlowName ===
                r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD) &&
            (t = s.jsx(
              r("WAWebInteractiveOrderQuotedMessage.react"),
              babelHelpers.extends({}, e),
            ));
      return t;
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t) {
      if (
        t == null ||
        !o("WAWebBrazilPaymentsGeoGating").isPaymentLogoEnabled() ||
        !o("WAWebBizGatingUtils").isBrazilToBrazilOrder(e)
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
        (o("WAWebBizFrontendGatingUtils").isAPICopyPixCTAEnabled() &&
          o("WAWebGetBrazilnteractiveActions").hasValidDynamicPix(t) &&
          n.push(
            s.jsx(o("WAWebPaymentLogoPixIcon.react").PaymentLogoPixIcon, {
              iconXstyle: a,
            }),
          ),
          o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(e) &&
            o("WAWebGetBrazilnteractiveActions").hasValidPaymentLink(t) &&
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
            o("WAWebGetBrazilnteractiveActions").hasValidBoletoCode(t) &&
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
          o("WAWebGetBrazilnteractiveActions").hasValidStaticPix(t) &&
          n.push(
            s.jsx(o("WAWebPaymentLogoPixIcon.react").PaymentLogoPixIcon, {
              iconXstyle: i,
            }),
          );
      }
      return n;
    }
    l.default = d;
  },
  98,
);
