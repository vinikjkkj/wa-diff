__d(
  "WAWebBizSendOrderAction",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebBizFrontendGatingUtils",
    "WAWebBizOrderDetailsParams",
    "WAWebBizOrderGetFriendlyRandomIdAction",
    "WAWebCatalogCollection",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebLazyLoadedRetriable",
    "WAWebLidAwareContactsDB",
    "WAWebMediaOpaqueData",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOrderCollection",
    "WAWebOrderDetailMathDefaultOffset",
    "WAWebOrderMessageSendResultError",
    "WAWebOrderStatus",
    "WAWebPaymentsGatingUtils",
    "WAWebPaymentsPixBannerUtils",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebUprPaymentRequestParams",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebUserPrefsPaymentInfo",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "err",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t) {
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
    async function m(t) {
      var n = t.buttonName,
        a = t.buttonParamsJson,
        i = t.caption,
        l = t.chat,
        u = t.contextInfo,
        c = t.errorMessage,
        d = t.nativeFlowName,
        m = t.nfmInteractiveMsg,
        p = t.thumbnail,
        _ = o("WAWebUserUtils").getMeUserOrThrow(),
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
      if (o("WAWebUserUtils").isMeAccount(l.id))
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
          throw new (r("WAWebOrderMessageSendResultError"))(
            h == null ? void 0 : h.messageSendResult,
            h == null ? void 0 : h.failureReason,
            h == null ? void 0 : h.ackErrorCode,
            h == null ? void 0 : h.failureErrorName,
          );
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
    async function p(e, t, n, a) {
      var i,
        l,
        s =
          (i = o(
            "WAWebPaymentsGatingUtils",
          ).getPixCodeReceiptAndStateBubbleVersionOnSend(e)) != null
            ? i
            : await C(
                e,
                o("WAWebPaymentsGatingUtils")
                  .isPixCodeReceiptAndStateP2mEnabled,
              ),
        u = o("WAWebPaymentsGatingUtils").isTreatmentBubbleVersion(s),
        c = o("WAWebOrderCollection").OrderCollection.addOrder(),
        d = {
          reference_id: r("WAWebBizOrderGetFriendlyRandomIdAction")(),
          type: "physical-goods",
          payment_configuration: "merchant_categorization_code",
          payment_settings: [
            ((l = {
              type: o("WAWebBizOrderDetailsParams").PaymentSettingType
                .PIX_STATIC_CODE,
            }),
            (l[
              o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE
            ] = {
              merchant_name: t.display_name,
              key: t.key,
              key_type: t.key_type,
            }),
            l),
          ],
          currency: "BRL",
          total_amount: { value: n, offset: a },
          order_request_id: c.id,
          br_receipt_and_state_enabled: u ? !0 : void 0,
          br_receipt_and_state_bubble_version: s != null ? s : void 0,
        };
      (await m({
        caption: null,
        chat: e,
        nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
          .ORDER_DETAILS,
        buttonParamsJson: o("WAWebBizOrderDetailsParams").stringify(d),
        errorMessage: "Pix payment request send to chat failure",
        thumbnail: "",
        buttonName: "review_and_pay",
        nfmInteractiveMsg: !0,
      }),
        u && y(!0));
    }
    async function _(e, t, n, a, i) {
      if (t.length === 0)
        throw r("err")("UPR payment request attempted with no payment keys");
      var l = o("WAWebOrderCollection").OrderCollection.addOrder(),
        s = babelHelpers.extends(
          {},
          o("WAWebUprPaymentRequestParams").buildUprPaymentRequestParams({
            currency: n,
            paymentKeys: t,
            amount: a,
            offset: i,
            referenceId: r("WAWebBizOrderGetFriendlyRandomIdAction")(),
          }),
          { order_request_id: l.id },
        );
      await m({
        caption: null,
        chat: e,
        nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
          .ORDER_DETAILS,
        buttonParamsJson: JSON.stringify(s),
        errorMessage: "UPR payment request send to chat failure",
        thumbnail: "",
        buttonName: "review_and_pay",
        nfmInteractiveMsg: !0,
      });
    }
    async function f(e, t) {
      (t === void 0 && (t = null),
        await g(e, t),
        o("WAWebBizFrontendGatingUtils").isCustomPaymentMethodsSyncEnabled() &&
          o("WAWebPaymentsPixBannerUtils").shouldDismissTryItPixKeyPromo());
    }
    async function g(e, t) {
      var n, a;
      t === void 0 && (t = null);
      var i = o("WAWebOrderCollection").OrderCollection.addOrder(),
        l = o("WAWebUserPrefsCustomPaymentMethods").getPIX();
      if (!l) throw r("err")("pix key not found");
      var s =
          (n = o(
            "WAWebPaymentsGatingUtils",
          ).getPixKeyReceiptAndStateBubbleVersionOnSend(e)) != null
            ? n
            : await C(
                e,
                o("WAWebPaymentsGatingUtils").isPixKeyReceiptAndStateP2mEnabled,
              ),
        u = o("WAWebPaymentsGatingUtils").isTreatmentBubbleVersion(s),
        c = babelHelpers.extends(
          {
            reference_id: r("WAWebBizOrderGetFriendlyRandomIdAction")(),
            type: "physical-goods",
            payment_configuration: "merchant_categorization_code",
            payment_settings: [
              ((a = {
                type: o("WAWebBizOrderDetailsParams").PaymentSettingType
                  .PIX_STATIC_CODE,
              }),
              (a[
                o(
                  "WAWebBizOrderDetailsParams",
                ).PaymentSettingType.PIX_STATIC_CODE
              ] = {
                merchant_name: l.display_name,
                key: l.key,
                key_type: l.key_type,
              }),
              a),
            ],
            currency: i.currency,
            total_amount: {
              value: 0,
              offset: o("WAWebOrderDetailMathDefaultOffset").DEFAULT_OFFSET,
            },
            order_request_id: i.id,
            order: {
              status: o("WAWebOrderStatus").getDefaultOrderStatus(),
              items: [
                {
                  quantity: 0,
                  retailer_id: r("WAWebBizOrderGetFriendlyRandomIdAction")(),
                  amount: {
                    offset: o("WAWebOrderDetailMathDefaultOffset")
                      .DEFAULT_OFFSET,
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
                offset: o("WAWebOrderDetailMathDefaultOffset").DEFAULT_OFFSET,
              },
              tax: null,
              shipping: null,
              discount: null,
            },
          },
          t != null && { referral: t },
          {
            br_receipt_and_state_enabled: u ? !0 : void 0,
            br_receipt_and_state_bubble_version: s != null ? s : void 0,
          },
        );
      (await m({
        caption: null,
        chat: e,
        nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
          .PAYMENT_INFO,
        buttonParamsJson: o("WAWebBizOrderDetailsParams").stringify(c),
        errorMessage: "Pix Order message send to chat failure",
        thumbnail: "",
        buttonName: "payment_info",
        nfmInteractiveMsg: !0,
      }),
        u && y(!1));
    }
    var h = r("WAWebLazyLoadedRetriable")(function () {
      return r("JSResourceForInteraction")("WAWebPaymentDetailsLogger")
        .__setRef("WAWebBizSendOrderAction")
        .load();
    }, "WAWebPaymentDetailsLogger");
    function y(e) {
      h()
        .then(function (t) {
          var n = t.PaymentFlow,
            r = t.logLocalPaymentRequestCreated;
          return r(e ? n.PIX_CODE : n.PIX_KEY);
        })
        .catch(function (e) {
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] could not log a created payment request",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("br-payment-request-created-logging-failed");
        });
    }
    async function C(e, t) {
      return !o("WAWebPaymentsGatingUtils").isReceiptAndStateP2mEligibleChat(
        e,
      ) || !(await b(e))
        ? null
        : o("WAWebPaymentsGatingUtils").getReceiptAndStateBubbleVersionOnSend(
            t(),
          );
    }
    async function b(e) {
      if (e.contact.isContactSyncCompleted === 1) return !e.contact.isBusiness;
      try {
        var t = await r("WAWebLidAwareContactsDB").get(e.contact.id.toJid());
        return (
          (t == null ? void 0 : t.isContactSyncCompleted) === 1 && !t.isBusiness
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] could not read the contact sync state",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("br-payment-state-contact-sync-read-failed"),
          !1
        );
      }
    }
    async function v(e) {
      var t,
        n = e.chat,
        a = e.discount,
        i = e.offset,
        l = e.order,
        s = e.orderNote,
        u = e.shipping,
        c = e.tax,
        p = e.total,
        _ = (t = l.orderItemCollection.head()) == null ? void 0 : t.id,
        f = d(l.sellerJid, _),
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
            tax: c == null ? void 0 : { value: c, offset: i },
            shipping: u == null ? void 0 : { value: u, offset: i },
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
              payment_instruction: r("nullthrows")(y),
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
      await m({
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
    async function S(e) {
      var t = e.chat,
        n = e.offset,
        a = e.orderInfo,
        i = e.orderNote,
        l = e.orderStatus,
        s = e.paymentMethod,
        u = e.paymentStatus,
        c = e.sellerJid,
        p = a.items,
        _ = a.referenceId,
        f = p[0].id,
        g = d(c, f),
        h = R({
          offset: n,
          orderInfo: a,
          orderStatus: l,
          paymentMethod: s,
          paymentStatus: u,
          referenceId: _,
        }),
        y = o("WAWebOrderStatus").findOrderDetailsMessage(t, _),
        C = y == null ? void 0 : y.msgContextInfo(t.id);
      await m({
        caption: i,
        chat: t,
        nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
          .ORDER_STATUS,
        buttonParamsJson: o(
          "WAWebBizOrderDetailsParams",
        ).stringifyPaymentStatus(h),
        errorMessage: "Order message sent to chat failure",
        thumbnail: g,
        buttonName: "review_order",
        contextInfo: C,
        nfmInteractiveMsg: !1,
      });
    }
    function R(e) {
      var t = e.offset,
        n = e.orderInfo,
        r = e.orderStatus,
        a = e.paymentMethod,
        i = e.paymentStatus,
        l = e.referenceId,
        s = n.items.map(function (e) {
          var n;
          return {
            retailer_id: e.id,
            name: e.name,
            amount: { value: (n = e.amount) != null ? n : 0, offset: t },
            quantity: e.quantity,
            isCustomItem: e.isCustomItem,
            isQuantitySet: e.isQuantitySet,
          };
        }),
        u = {
          reference_id: l,
          payment_timestamp: o("WATimeUtils").unixTime(),
          currency: n.currency,
          payment_status: i,
          total_amount: { value: n.totalAmount, offset: t },
          order: {
            status: r,
            items: s,
            subtotal: { value: Number(n.subtotal), offset: t },
            tax: n.tax == null ? void 0 : { value: n.tax, offset: t },
            shipping:
              n.shipping == null ? void 0 : { value: n.shipping, offset: t },
            discount:
              n.discount == null ? void 0 : { value: n.discount, offset: t },
          },
        };
      return (
        a != null && (u = babelHelpers.extends({}, u, { payment_method: a })),
        u
      );
    }
    async function L(e) {
      var t,
        n = e.chat,
        a = e.offset,
        i = e.orderInfo,
        l = e.orderNote,
        s = e.orderStatus,
        u = e.paymentMethod,
        c = e.paymentStatus,
        p = e.sellerJid,
        _ = i.referenceId,
        f = (t = i.items.at(0)) == null ? void 0 : t.id,
        g = d(p, f),
        h = R({
          offset: a,
          orderInfo: i,
          orderStatus: s,
          paymentMethod: u,
          paymentStatus: c,
          referenceId: _,
        }),
        y = o("WAWebOrderStatus").findOrderDetailsMessage(n, _),
        C = y == null ? void 0 : y.msgContextInfo(n.id);
      await m({
        caption: l,
        chat: n,
        nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
          .PAYMENT_STATUS,
        buttonParamsJson: o(
          "WAWebBizOrderDetailsParams",
        ).stringifyPaymentStatus(h),
        errorMessage: "Order message send to chat failure",
        thumbnail: g,
        buttonName: "payment_status",
        contextInfo: C,
        nfmInteractiveMsg: !1,
      });
    }
    async function E(e) {
      var t,
        n = e.chat,
        a = e.offset,
        i = e.orderInfo,
        l = e.orderStatus,
        s = e.paymentMethod,
        u = e.paymentStatus,
        c = e.sellerJid,
        p = i.referenceId,
        _ = (t = i.items.at(0)) == null ? void 0 : t.id,
        f = d(c, _),
        g = R({
          offset: a,
          orderInfo: i,
          orderStatus: l,
          paymentMethod: s,
          paymentStatus: u,
          referenceId: p,
        }),
        h = o("WAWebOrderStatus").findOrderDetailsMessage(n, p),
        y = h == null ? void 0 : h.msgContextInfo(n.id);
      await m({
        chat: n,
        caption: null,
        nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
          .PAYMENT_METHOD,
        buttonParamsJson: o(
          "WAWebBizOrderDetailsParams",
        ).stringifyPaymentStatus(g),
        errorMessage: "Order message send to chat failure",
        thumbnail: f,
        buttonName: "payment_method",
        contextInfo: y,
        nfmInteractiveMsg: !1,
      });
    }
    ((l.sendPixPaymentRequestMessage = p),
      (l.sendUprPaymentRequestMessage = _),
      (l.sendPixQuickReplyMessageAndDismissTryItPixKeyPromoBanner = f),
      (l.sendPixKeyPaymentInfoMessage = g),
      (l.sendOrderDetailsMessageAsMerchant = v),
      (l.sendOrderStatusMessageAsMerchant = S),
      (l.sendOrderPaymentStatusMessageAsMerchant = L),
      (l.sendOrderPaymentMethodUpdate = E));
  },
  98,
);
