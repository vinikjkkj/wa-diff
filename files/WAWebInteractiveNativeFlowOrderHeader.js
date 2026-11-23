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
        n,
        a = null,
        i = e.msgKey,
        l = o("useWAWebMsgValues").useMsgValues(
          i,
          o("WAWebMsgCasts").castToInteractiveOrNativeFlowMsg,
          [
            (n = o("WAWebMsgGetters")).getType,
            n.getNativeFlowName,
            n.getInteractiveType,
            n.getInteractivePayload,
            n.getNativeFlowButtons,
            n.getInteractiveHeader,
            n.getIsSentByMe,
            n.getIsNewsletterMsg,
            o("WAWebFrontendMsgGetters").getMediaData,
          ],
        ),
        u = l[0],
        d = l[1],
        _ = l[2],
        g = l[3],
        h = l[4],
        y = l[5],
        C = l[6],
        b = l[7],
        v = l[8],
        S =
          (t = o("useWAWebMediaDataValues").useOptionalMediaDataValues(v, [
            o("WAWebMediaDataGetters").getPreview,
          ])) != null
            ? t
            : [null],
        R = S[0],
        L = o("WAWebOrderDetails").getOrderInfoFor({
          interactivePayload: g,
          interactiveType: _,
          nativeFlowButtons: h,
          nativeFlowName: d,
          type: u,
        }),
        E = o("WAWebFrontendMsgGetters").getChatByMsgKey(i, b),
        k = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          E.id,
          L == null ? void 0 : L.referenceId,
          o("WAWebOrderStatus").isSimplifiedOrder(L),
        );
      if (
        u !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        u !== o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW
      )
        return null;
      if (d === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO)
        L &&
          (a = f(
            i,
            o("WAWebPaymentDetailsGating").isPaymentDetailsEnabledFor({
              interactivePayload: g,
              interactiveType: _,
              msgKey: i,
              nativeFlowName: d,
              type: u,
            }),
            L,
            C,
            e.displayType,
          ));
      else if (
        d === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
      ) {
        if (L) {
          var I =
            u === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
            (y == null ? void 0 : y.mediaType) ===
              o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.DOCUMENT;
          if (o("WAWebOrderStatus").isSimplifiedOrder(L) && !I)
            a = p({
              chat: E,
              displayType: e.displayType,
              info: L,
              isPaymentDetailsEnabled: o(
                "WAWebPaymentDetailsGating",
              ).isPaymentDetailsEnabledFor({
                interactivePayload: g,
                interactiveType: _,
                msgKey: i,
                nativeFlowName: d,
                type: u,
              }),
              isSentByMe: C,
              msgKey: i,
              orderPaymentStatus: k,
            });
          else {
            var T, D, x;
            ((T =
              (D = o(
                "WAWebOrdersExpansionCountries",
              ).getOrdersExpansionAllowedCountries()) == null
                ? void 0
                : D.length) != null
              ? T
              : 0) === 0 && (k = null);
            var $ = I
              ? s.jsx(r("WAWebMediaDocumentPreview"), {
                  embedded: !0,
                  msgKey: i,
                })
              : void 0;
            a = s.jsx(r("WAWebNativeFlowOrderDetailsHeader"), {
              amount: o("WAWebCurrencyUtils").formatAmount({
                amount: L.totalAmount,
                currency: L.currency,
              }),
              documentPreview: $,
              quantity: L.quantity,
              orderId: L.referenceId,
              text: o(
                "WAWebOrderDetailProductLabel",
              ).getOrderDetailProductLabel(L.items),
              numberOfItems: L.items.length,
              isSentByMe: C,
              thumbnail:
                (x = c({ interactiveHeader: y, preview: R, type: u })) != null
                  ? x
                  : void 0,
              payIcons: m(E, L),
              orderPaymentStatus: k,
            });
          }
        }
      } else
        d === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
          ? (a = s.jsx(
              o("WAWebInteractiveOrderStatusHeader.react")
                .InteractiveOrderStatusHeader,
              { displayType: e.displayType, msgKey: i, quotedMsg: e.quotedMsg },
            ))
          : (d === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS ||
              d ===
                r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD) &&
            (a = s.jsx(r("WAWebInteractiveOrderQuotedMessage.react"), {
              displayType: e.displayType,
              msgKey: i,
              quotedMsg: e.quotedMsg,
            }));
      return a;
    }
    d.displayName = d.name + " [from " + i.id + "]";
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
    function f(e, t, n, a, i) {
      return s.jsx(
        o("WAWebPaymentDetailsBubbleHeaderLoadable")
          .WAWebPaymentInfoBubbleHeader,
        {
          displayType: i,
          isPaymentDetailsEnabled: t,
          legacyHeader: s.jsx(
            r("WAWebNativeFlowPaymentInfoOrderDetailsHeader"),
            { isSentByMe: a, orderInfo: n },
          ),
          msgKey: e,
        },
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
