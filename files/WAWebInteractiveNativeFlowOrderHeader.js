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
        f = d[1],
        g = d[2],
        h = d[3],
        y = d[4],
        C = d[5],
        b = d[6],
        v = d[7],
        S = d[8],
        R =
          (t = o("useWAWebMediaDataValues").useOptionalMediaDataValues(b, [
            o("WAWebMediaDataGetters").getPreview,
          ])) != null
            ? t
            : [null],
        L = R[0],
        E = o("WAWebOrderDetails").getOrderInfoFor({
          interactivePayload: h,
          interactiveType: g,
          nativeFlowButtons: y,
          nativeFlowName: f,
          type: _,
        }),
        k;
      n[1] !== S || n[2] !== i
        ? ((k = o("WAWebFrontendMsgGetters").getChatByMsgKey(i, S)),
          (n[1] = S),
          (n[2] = i),
          (n[3] = k))
        : (k = n[3]);
      var I = k,
        T = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          I,
          E == null ? void 0 : E.referenceId,
          o("WAWebOrderStatus").isSimplifiedOrder(E),
        );
      if (
        _ !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        _ !== o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW
      )
        return null;
      if (f === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO)
        E &&
          (a = p(
            i,
            o("WAWebPaymentDetailsGating").isPaymentDetailsEnabledFor({
              interactivePayload: h,
              interactiveType: g,
              msgKey: i,
              nativeFlowName: f,
              type: _,
            }),
            E,
            v,
          ));
      else if (
        f === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
      ) {
        if (E) {
          var D =
            _ === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
            (C == null ? void 0 : C.mediaType) ===
              o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.DOCUMENT;
          if (o("WAWebOrderStatus").isSimplifiedOrder(E) && !D)
            a = s.jsx(r("WAWebSimplifiedPaymentHeader.react"), {
              amount1000: E.totalAmount * 1e3,
              currency: E.currency,
              isSentByMe: v,
              payIcons: m(I, E),
              orderPaymentStatus: T,
              chat: I,
              isPaymentRequest: o("WAWebOrderStatus").isPaymentRequest(I, E),
              msgKey: i,
              paymentSettings: E.paymentSettings,
              displayType: e.displayType,
            });
          else {
            var x, $;
            ((x =
              ($ = o(
                "WAWebOrdersExpansionCountries",
              ).getOrdersExpansionAllowedCountries()) == null
                ? void 0
                : $.length) != null
              ? x
              : 0) === 0 && (T = null);
            var P;
            n[4] !== D || n[5] !== i
              ? ((P = D
                  ? s.jsx(r("WAWebMediaDocumentPreview"), {
                      embedded: !0,
                      msgKey: i,
                    })
                  : void 0),
                (n[4] = D),
                (n[5] = i),
                (n[6] = P))
              : (P = n[6]);
            var N = P,
              M;
            if (n[7] !== C || n[8] !== L || n[9] !== _) {
              var w;
              ((M =
                (w = c({ interactiveHeader: C, preview: L, type: _ })) != null
                  ? w
                  : void 0),
                (n[7] = C),
                (n[8] = L),
                (n[9] = _),
                (n[10] = M));
            } else M = n[10];
            a = s.jsx(r("WAWebNativeFlowOrderDetailsHeader"), {
              amount: o("WAWebCurrencyUtils").formatAmount({
                amount: E.totalAmount,
                currency: E.currency,
              }),
              documentPreview: N,
              quantity: E.quantity,
              orderId: E.referenceId,
              text: o(
                "WAWebOrderDetailProductLabel",
              ).getOrderDetailProductLabel(E.items),
              numberOfItems: E.items.length,
              isSentByMe: v,
              thumbnail: M,
              payIcons: m(I, E),
              orderPaymentStatus: T,
            });
          }
        }
      } else if (
        f === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
      ) {
        var A;
        (n[11] !== i || n[12] !== e.displayType || n[13] !== e.quotedMsg
          ? ((A = s.jsx(
              o("WAWebInteractiveOrderStatusHeader.react")
                .InteractiveOrderStatusHeader,
              { displayType: e.displayType, msgKey: i, quotedMsg: e.quotedMsg },
            )),
            (n[11] = i),
            (n[12] = e.displayType),
            (n[13] = e.quotedMsg),
            (n[14] = A))
          : (A = n[14]),
          (a = A));
      } else if (
        f === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS ||
        f === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD
      ) {
        var F;
        (n[15] !== i || n[16] !== e.displayType || n[17] !== e.quotedMsg
          ? ((F = s.jsx(r("WAWebInteractiveOrderQuotedMessage.react"), {
              displayType: e.displayType,
              msgKey: i,
              quotedMsg: e.quotedMsg,
            })),
            (n[15] = i),
            (n[16] = e.displayType),
            (n[17] = e.quotedMsg),
            (n[18] = F))
          : (F = n[18]),
          (a = F));
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
    function p(e, t, n, a) {
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
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
