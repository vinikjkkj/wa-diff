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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(16),
        n = null,
        a = e.msg,
        i = o("WAWebOrderDetails").getOrderInfo(a),
        l;
      t[0] !== a
        ? ((l = o("WAWebFrontendMsgGetters").getChat(a.unsafe())),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var u = l,
        d = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          u,
          i == null ? void 0 : i.referenceId,
        );
      if (
        a.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
      ) {
        if (i) {
          var p;
          (t[2] !== a
            ? ((p = o("WAWebMsgGetters").getIsSentByMe(a)),
              (t[2] = a),
              (t[3] = p))
            : (p = t[3]),
            (n = s.jsx(r("WAWebNativeFlowPaymentInfoOrderDetailsHeader"), {
              isSentByMe: p,
              orderInfo: i,
            })));
        }
      } else if (
        a.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
      ) {
        if (i) {
          var _,
            f =
              a.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
              ((_ = a.interactiveHeader) == null ? void 0 : _.mediaType) ===
                o("WAWebInteractiveMessageHeaderMediaType")
                  .InteractiveMessageHeaderMediaType.DOCUMENT;
          if (o("WAWebOrderStatus").isSimplifiedOrder(i) && !f) {
            var g = i.currency,
              h = i.referenceId,
              y;
            (t[4] !== a
              ? ((y = o("WAWebMsgGetters").getIsSentByMe(a)),
                (t[4] = a),
                (t[5] = y))
              : (y = t[5]),
              (n = s.jsx(r("WAWebSimplifiedPaymentHeader.react"), {
                amount1000: i.totalAmount * 1e3,
                currency: g,
                orderId: h,
                isSentByMe: y,
                payIcons: m(u, i),
                orderPaymentStatus: d,
                chat: u,
                isPaymentRequest: o("WAWebOrderStatus").isPaymentRequest(u, i),
                msg: a,
                displayType: e.displayType,
              })));
          } else {
            var C, b;
            ((C =
              (b = o(
                "WAWebOrdersExpansionCountries",
              ).getOrdersExpansionAllowedCountries()) == null
                ? void 0
                : b.length) != null
              ? C
              : 0) === 0 && (d = null);
            var v;
            if (t[6] !== a) {
              var S;
              ((v =
                a.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
                ((S = a.interactiveHeader) == null ? void 0 : S.mediaType) ===
                  o("WAWebInteractiveMessageHeaderMediaType")
                    .InteractiveMessageHeaderMediaType.DOCUMENT
                  ? s.jsx(r("WAWebMediaDocumentPreview"), {
                      embedded: !0,
                      msg: a,
                    })
                  : void 0),
                (t[6] = a),
                (t[7] = v));
            } else v = t[7];
            var R = v,
              L = o("WAWebCurrencyUtils").formatAmount(
                i.currency,
                i.totalAmount,
              ),
              E = i.quantity,
              k = i.referenceId,
              I = o("WAWebOrderDetailProductLabel").getOrderDetailProductLabel(
                i.items,
              ),
              T = i.items.length,
              D;
            t[8] !== a
              ? ((D = o("WAWebMsgGetters").getIsSentByMe(a)),
                (t[8] = a),
                (t[9] = D))
              : (D = t[9]);
            var x;
            if (t[10] !== a) {
              var $;
              ((x = ($ = c(a)) != null ? $ : void 0), (t[10] = a), (t[11] = x));
            } else x = t[11];
            n = s.jsx(r("WAWebNativeFlowOrderDetailsHeader"), {
              amount: L,
              documentPreview: R,
              quantity: E,
              orderId: k,
              text: I,
              numberOfItems: T,
              isSentByMe: D,
              thumbnail: x,
              payIcons: m(u, i),
              orderPaymentStatus: d,
            });
          }
        }
      } else if (
        a.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
      ) {
        var P;
        (t[12] !== e
          ? ((P = s.jsx(
              o("WAWebInteractiveOrderStatusHeader.react")
                .InteractiveOrderStatusHeader,
              babelHelpers.extends({}, e),
            )),
            (t[12] = e),
            (t[13] = P))
          : (P = t[13]),
          (n = P));
      } else if (
        a.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS ||
        a.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD
      ) {
        var N;
        (t[14] !== e
          ? ((N = s.jsx(
              r("WAWebInteractiveOrderQuotedMessage.react"),
              babelHelpers.extends({}, e),
            )),
            (t[14] = e),
            (t[15] = N))
          : (N = t[15]),
          (n = N));
      }
      return n;
    }
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
