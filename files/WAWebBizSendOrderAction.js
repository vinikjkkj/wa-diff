__d(
  "WAWebBizSendOrderAction",
  [
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
    "WAWebAck",
    "WAWebBizFrontendGatingUtils",
    "WAWebBizOrderDetailsParams",
    "WAWebBizOrderGetFriendlyRandomIdAction",
    "WAWebCatalogCollection",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMediaOpaqueData",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOrderCollection",
    "WAWebOrderDetailMath",
    "WAWebOrderStatus",
    "WAWebPaymentsPixBannerUtils",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsPaymentInfo",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      var n, a;
      if (t == null) return "";
      var i = o("WAWebCatalogCollection").CatalogCollection.get(
          o("WAWebWidFactory").createWid(e),
        ),
        l = i == null ? void 0 : i.productCollection.get(t),
        s =
          l == null || (n = l.getProductImageCollectionHead()) == null
            ? void 0
            : n.mediaData.preview;
      return s instanceof r("WAWebMediaOpaqueData") &&
        (a = s.getBase64()) != null
        ? a
        : "";
    }
    async function c(t) {
      var n = t.buttonName,
        a = t.buttonParamsJson,
        i = t.caption,
        l = t.chat,
        u = t.contextInfo,
        c = t.errorMessage,
        d = t.nativeFlowName,
        m = t.nfmInteractiveMsg,
        p = t.thumbnail,
        _ = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        f = p
          ? {
              title: void 0,
              subtitle: void 0,
              mediaType: void 0,
              hasMediaAttachment: !1,
              thumbnail: p,
            }
          : void 0,
        g = babelHelpers.extends(
          {
            type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
            ack: o("WAWebAck").ACK.CLOCK,
            from: _,
            id: new (r("WAWebMsgKey"))({
              from: _,
              to: l.id,
              id: await r("WAWebMsgKey").newId(),
              participant: void 0,
              selfDir: "out",
            }),
            local: !0,
            isNewMsg: !0,
            t: o("WATimeUtils").unixTime(),
            to: l.id,
            caption: i,
            nativeFlowName: d,
            interactiveHeader: f,
            interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
            nativeFlowInteractiveMsg: m,
            interactivePayload: {
              buttons: [{ name: n, buttonParamsJson: a }],
              messageVersion: 1,
            },
          },
          u,
        );
      if (o("WAWebUserPrefsMeUser").isMeAccount(l.id))
        try {
          await o("WAWebSendMsgChatAction").addAndSendMsgToChat(l, g)[0];
          return;
        } catch (t) {
          throw (
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose(["", ": ", ""])),
              c,
              t,
            ),
            t
          );
        }
      try {
        var h = await o("WAWebSendMsgChatAction").addAndSendMsgToChat(l, g)[1];
        if (
          !h ||
          h.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK
        )
          throw r("err")("Order message SendMsgResult failure status");
      } catch (e) {
        throw (
          o("WALogger").WARN(
            s || (s = babelHelpers.taggedTemplateLiteralLoose(["", ": ", ""])),
            c,
            e,
          ),
          e
        );
      }
    }
    async function d(e, t, n, a) {
      var i,
        l = o("WAWebOrderCollection").OrderCollection.addOrder(),
        s = {
          reference_id: r("WAWebBizOrderGetFriendlyRandomIdAction")(),
          type: "physical-goods",
          payment_configuration: "merchant_categorization_code",
          payment_settings: [
            ((i = {
              type: o("WAWebBizOrderDetailsParams").PaymentSettingType
                .PIX_STATIC_CODE,
            }),
            (i[
              o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE
            ] = {
              merchant_name: t.display_name,
              key: t.key,
              key_type: t.key_type,
            }),
            i),
          ],
          currency: "BRL",
          total_amount: { value: n, offset: a },
          order_request_id: l.id,
        };
      await c({
        caption: null,
        chat: e,
        nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
          .ORDER_DETAILS,
        buttonParamsJson: o("WAWebBizOrderDetailsParams").stringify(s),
        errorMessage: "Pix payment request send to chat failure",
        thumbnail: "",
        buttonName: "review_and_pay",
        nfmInteractiveMsg: !0,
      });
    }
    async function m(e, t) {
      (t === void 0 && (t = null),
        await p(e, t),
        o("WAWebBizFrontendGatingUtils").isCustomPaymentMethodsSyncEnabled() &&
          o("WAWebPaymentsPixBannerUtils").shouldDismissTryItPixKeyPromo());
    }
    async function p(e, t) {
      var n;
      t === void 0 && (t = null);
      var a = o("WAWebOrderCollection").OrderCollection.addOrder(),
        i = o("WAWebUserPrefsCustomPaymentMethods").getPIX();
      if (!i) throw r("err")("pix key not found");
      var l = babelHelpers.extends(
        {
          reference_id: r("WAWebBizOrderGetFriendlyRandomIdAction")(),
          type: "physical-goods",
          payment_configuration: "merchant_categorization_code",
          payment_settings: [
            ((n = {
              type: o("WAWebBizOrderDetailsParams").PaymentSettingType
                .PIX_STATIC_CODE,
            }),
            (n[
              o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE
            ] = {
              merchant_name: i.display_name,
              key: i.key,
              key_type: i.key_type,
            }),
            n),
          ],
          currency: a.currency,
          total_amount: {
            value: 0,
            offset: o("WAWebOrderDetailMath").DEFAULT_OFFSET,
          },
          order_request_id: a.id,
          order: {
            status: o("WAWebOrderStatus").getDefaultOrderStatus(),
            items: [
              {
                quantity: 0,
                retailer_id: r("WAWebBizOrderGetFriendlyRandomIdAction")(),
                amount: {
                  offset: o("WAWebOrderDetailMath").DEFAULT_OFFSET,
                  value: 0,
                },
                name: "",
                product_id: "",
                isCustomItem: !1,
                isQuantitySet: !1,
              },
            ],
            subtotal: {
              value: 0,
              offset: o("WAWebOrderDetailMath").DEFAULT_OFFSET,
            },
            tax: null,
            shipping: null,
            discount: null,
          },
        },
        t != null && { referral: t },
      );
      await c({
        caption: null,
        chat: e,
        nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
          .PAYMENT_INFO,
        buttonParamsJson: o("WAWebBizOrderDetailsParams").stringify(l),
        errorMessage: "Pix Order message send to chat failure",
        thumbnail: "",
        buttonName: "payment_info",
        nfmInteractiveMsg: !0,
      });
    }
    async function _(e) {
      var t,
        n = e.chat,
        a = e.discount,
        i = e.offset,
        l = e.order,
        s = e.orderNote,
        d = e.shipping,
        m = e.tax,
        p = e.total,
        _ = (t = l.orderItemCollection.head()) == null ? void 0 : t.id,
        f = u(l.sellerJid, _),
        g = l.orderItemCollection.map(function (e) {
          var t;
          return {
            retailer_id: e.id,
            name: e.name,
            amount: { value: e.price, offset: i },
            quantity: e.quantity,
            isCustomItem: e.isCustomItem,
            isQuantitySet: e.isQuantitySet,
            variant_info_list:
              (t = e.properties) == null
                ? void 0
                : t.map(function (e) {
                    return { name: e[0], value: e[1] };
                  }),
          };
        }),
        h = {
          reference_id: r("WAWebBizOrderGetFriendlyRandomIdAction")(),
          type: "physical-goods",
          payment_configuration: "merchant_categorization_code",
          currency: l.currency,
          total_amount: { value: p, offset: i },
          order_request_id: l.id,
          order: {
            status: o("WAWebOrderStatus").getDefaultOrderStatus(),
            items: g,
            subtotal: { value: Number(l.subtotal), offset: i },
            tax: m == null ? void 0 : { value: m, offset: i },
            shipping: d == null ? void 0 : { value: d, offset: i },
            discount: a == null ? void 0 : { value: a, offset: i },
          },
        };
      if (
        o(
          "WAWebBizFrontendGatingUtils",
        ).isOrderDetailsPaymentInstructionsSyncEnabled() &&
        o("WAWebUserPrefsPaymentInfo").isCPIInfoValid()
      ) {
        var y = o("WAWebUserPrefsPaymentInfo").getCPIInfo();
        h = babelHelpers.extends({}, h, {
          external_payment_configurations: [
            {
              type: "payment_instruction",
              payment_instruction: r("WANullthrows")(y),
            },
          ],
        });
      }
      if (
        o("WAWebBizFrontendGatingUtils").isCustomPaymentMethodsSyncEnabled()
      ) {
        var C = o("WAWebUserPrefsCustomPaymentMethods").getPIX();
        if (C != null) {
          var b, v;
          h = babelHelpers.extends({}, h, {
            payment_settings: [
              ((b = {
                type: o("WAWebBizOrderDetailsParams").PaymentSettingType
                  .PIX_STATIC_CODE,
              }),
              (b[
                o(
                  "WAWebBizOrderDetailsParams",
                ).PaymentSettingType.PIX_STATIC_CODE
              ] = {
                merchant_name: C.display_name,
                key: C.key,
                key_type: C.key_type,
              }),
              b),
            ].concat(
              o("WAWebBizFrontendGatingUtils").isForceCopyPixCTAEnabled()
                ? [
                    ((v = {
                      type: o("WAWebBizOrderDetailsParams").PaymentSettingType
                        .CARDS,
                    }),
                    (v[
                      o("WAWebBizOrderDetailsParams").PaymentSettingType.CARDS
                    ] = { enabled: !1 }),
                    v),
                  ]
                : [],
            ),
          });
        }
      }
      await c({
        caption: s,
        chat: n,
        nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
          .ORDER_DETAILS,
        buttonParamsJson: o("WAWebBizOrderDetailsParams").stringify(h),
        errorMessage: "Order message send to chat failure",
        thumbnail: f,
        buttonName: "review_and_pay",
        nfmInteractiveMsg: !1,
      });
    }
    async function f(e) {
      var t = e.chat,
        n = e.offset,
        a = e.orderInfo,
        i = e.orderNote,
        l = e.orderStatus,
        s = e.paymentMethod,
        d = e.paymentStatus,
        m = e.sellerJid,
        p = a.items,
        _ = a.referenceId,
        f = p[0].id,
        h = u(m, f),
        y = g(a, l, _, n, d, s),
        C = o("WAWebOrderStatus").findOrderDetailsMessage(t, _),
        b = C == null ? void 0 : C.msgContextInfo(t.id);
      await c({
        caption: i,
        chat: t,
        nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
          .ORDER_STATUS,
        buttonParamsJson: o(
          "WAWebBizOrderDetailsParams",
        ).stringifyPaymentStatus(y),
        errorMessage: "Order message sent to chat failure",
        thumbnail: h,
        buttonName: "review_order",
        contextInfo: b,
        nfmInteractiveMsg: !1,
      });
    }
    var g = function (t, n, r, a, i, l) {
      var e = t.items.map(function (e) {
          var t;
          return {
            retailer_id: e.id,
            name: e.name,
            amount: { value: (t = e.amount) != null ? t : 0, offset: a },
            quantity: e.quantity,
            isCustomItem: e.isCustomItem,
            isQuantitySet: e.isQuantitySet,
          };
        }),
        s = {
          reference_id: r,
          payment_timestamp: o("WATimeUtils").unixTime(),
          currency: t.currency,
          payment_status: i,
          total_amount: { value: t.totalAmount, offset: a },
          order: {
            status: n,
            items: e,
            subtotal: { value: Number(t.subtotal), offset: a },
            tax: t.tax == null ? void 0 : { value: t.tax, offset: a },
            shipping:
              t.shipping == null ? void 0 : { value: t.shipping, offset: a },
            discount:
              t.discount == null ? void 0 : { value: t.discount, offset: a },
          },
        };
      return (
        l != null && (s = babelHelpers.extends({}, s, { payment_method: l })),
        s
      );
    };
    async function h(e) {
      var t,
        n = e.chat,
        a = e.offset,
        i = e.orderInfo,
        l = e.orderNote,
        s = e.orderStatus,
        d = e.paymentMethod,
        m = e.paymentStatus,
        p = e.sellerJid,
        _ = i.referenceId,
        f = (t = i.items.at(0)) == null ? void 0 : t.id,
        h = u(p, f),
        y = g(i, s, _, a, m, d),
        C = o("WAWebOrderStatus").findOrderDetailsMessage(n, _),
        b = C == null ? void 0 : C.msgContextInfo(n.id);
      await c({
        caption: l,
        chat: n,
        nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
          .PAYMENT_STATUS,
        buttonParamsJson: o(
          "WAWebBizOrderDetailsParams",
        ).stringifyPaymentStatus(y),
        errorMessage: "Order message send to chat failure",
        thumbnail: h,
        buttonName: "payment_status",
        contextInfo: b,
        nfmInteractiveMsg: !1,
      });
    }
    async function y(e) {
      var t,
        n = e.chat,
        a = e.offset,
        i = e.orderInfo,
        l = e.orderStatus,
        s = e.paymentMethod,
        d = e.paymentStatus,
        m = e.sellerJid,
        p = i.referenceId,
        _ = (t = i.items.at(0)) == null ? void 0 : t.id,
        f = u(m, _),
        h = g(i, l, p, a, d, s),
        y = o("WAWebOrderStatus").findOrderDetailsMessage(n, p),
        C = y == null ? void 0 : y.msgContextInfo(n.id);
      await c({
        chat: n,
        caption: null,
        nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
          .PAYMENT_METHOD,
        buttonParamsJson: o(
          "WAWebBizOrderDetailsParams",
        ).stringifyPaymentStatus(h),
        errorMessage: "Order message send to chat failure",
        thumbnail: f,
        buttonName: "payment_method",
        contextInfo: C,
        nfmInteractiveMsg: !1,
      });
    }
    ((l.sendPixPaymentRequestMessage = d),
      (l.sendPixQuickReplyMessageAndDismissTryItPixKeyPromoBanner = m),
      (l.sendPixKeyPaymentInfoMessage = p),
      (l.sendOrderDetailsMessageAsMerchant = _),
      (l.sendOrderStatusMessageAsMerchant = f),
      (l.sendOrderPaymentStatusMessageAsMerchant = h),
      (l.sendOrderPaymentMethodUpdate = y));
  },
  98,
);
