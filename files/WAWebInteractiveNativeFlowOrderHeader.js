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
    "WAWebPaymentsGatingUtils",
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
      var t;
      if (
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        ((t = e.interactiveHeader) == null ? void 0 : t.thumbnail) != null
      )
        return "data:image/jpeg;base64," + e.interactiveHeader.thumbnail;
      if (e.mediaData) {
        var n = e.mediaData.preview;
        if (n instanceof r("WAWebMediaOpaqueData")) return n.url();
      }
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(18),
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
          o("WAWebOrderStatus").isSimplifiedOrder(i),
        );
      if (
        a.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
      ) {
        if (i) {
          var p;
          (t[2] !== a
            ? ((p = o("WAWebMsgGetters").getIsSentByMe(a.unsafe())),
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
              h;
            (t[4] !== a
              ? ((h = o("WAWebMsgGetters").getIsSentByMe(a.unsafe())),
                (t[4] = a),
                (t[5] = h))
              : (h = t[5]),
              (n = s.jsx(r("WAWebSimplifiedPaymentHeader.react"), {
                amount1000: i.totalAmount * 1e3,
                currency: g,
                isSentByMe: h,
                payIcons: m(u, i),
                orderPaymentStatus: d,
                chat: u,
                isPaymentRequest: o("WAWebOrderStatus").isPaymentRequest(u, i),
                msg: a,
                paymentSettings: i.paymentSettings,
                displayType: e.displayType,
              })));
          } else {
            var y, C, b;
            ((y =
              (C = o(
                "WAWebOrdersExpansionCountries",
              ).getOrdersExpansionAllowedCountries()) == null
                ? void 0
                : C.length) != null
              ? y
              : 0) === 0 && (d = null);
            var v;
            if (
              t[6] !== a.id ||
              t[7] !==
                ((b = a.interactiveHeader) == null ? void 0 : b.mediaType) ||
              t[8] !== a.type
            ) {
              var S, R;
              ((v =
                a.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
                ((S = a.interactiveHeader) == null ? void 0 : S.mediaType) ===
                  o("WAWebInteractiveMessageHeaderMediaType")
                    .InteractiveMessageHeaderMediaType.DOCUMENT
                  ? s.jsx(r("WAWebMediaDocumentPreview"), {
                      embedded: !0,
                      msgKey: a.id,
                    })
                  : void 0),
                (t[6] = a.id),
                (t[7] =
                  (R = a.interactiveHeader) == null ? void 0 : R.mediaType),
                (t[8] = a.type),
                (t[9] = v));
            } else v = t[9];
            var L = v,
              E = o("WAWebCurrencyUtils").formatAmount({
                amount: i.totalAmount,
                currency: i.currency,
              }),
              k = i.quantity,
              I = i.referenceId,
              T = o("WAWebOrderDetailProductLabel").getOrderDetailProductLabel(
                i.items,
              ),
              D = i.items.length,
              x;
            t[10] !== a
              ? ((x = o("WAWebMsgGetters").getIsSentByMe(a.unsafe())),
                (t[10] = a),
                (t[11] = x))
              : (x = t[11]);
            var $;
            if (t[12] !== a) {
              var P;
              (($ = (P = c(a)) != null ? P : void 0), (t[12] = a), (t[13] = $));
            } else $ = t[13];
            n = s.jsx(r("WAWebNativeFlowOrderDetailsHeader"), {
              amount: E,
              documentPreview: L,
              quantity: k,
              orderId: I,
              text: T,
              numberOfItems: D,
              isSentByMe: x,
              thumbnail: $,
              payIcons: m(u, i),
              orderPaymentStatus: d,
            });
          }
        }
      } else if (
        a.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
      ) {
        var N;
        (t[14] !== e
          ? ((N = s.jsx(
              o("WAWebInteractiveOrderStatusHeader.react")
                .InteractiveOrderStatusHeader,
              babelHelpers.extends({}, e),
            )),
            (t[14] = e),
            (t[15] = N))
          : (N = t[15]),
          (n = N));
      } else if (
        a.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS ||
        a.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD
      ) {
        var M;
        (t[16] !== e
          ? ((M = s.jsx(
              r("WAWebInteractiveOrderQuotedMessage.react"),
              babelHelpers.extends({}, e),
            )),
            (t[16] = e),
            (t[17] = M))
          : (M = t[17]),
          (n = M));
      }
      return n;
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
    l.default = d;
  },
  98,
);
