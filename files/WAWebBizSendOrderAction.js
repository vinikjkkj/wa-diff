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
    "WAWebOrderStatus",
    "WAWebPaymentsGatingUtils",
    "WAWebPaymentsPixBannerUtils",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebUprPaymentRequestParams",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsPaymentInfo",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.buttonName,
            n = e.buttonParamsJson,
            a = e.caption,
            i = e.chat,
            l = e.contextInfo,
            c = e.errorMessage,
            d = e.nativeFlowName,
            m = e.nfmInteractiveMsg,
            p = e.thumbnail,
            _ = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
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
                  to: i.id,
                  id: yield r("WAWebMsgKey").newId(),
                  participant: void 0,
                  selfDir: "out",
                }),
                local: !0,
                isNewMsg: !0,
                t: o("WATimeUtils").unixTime(),
                to: i.id,
                caption: a,
                nativeFlowName: d,
                interactiveHeader: f,
                interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
                nativeFlowInteractiveMsg: m,
                interactivePayload: {
                  buttons: [{ name: t, buttonParamsJson: n }],
                  messageVersion: 1,
                },
              },
              l,
            );
          if (o("WAWebUserPrefsMeUser").isMeAccount(i.id))
            try {
              yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(i, g)[0];
              return;
            } catch (e) {
              throw (
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      ": ",
                      "",
                    ])),
                  c,
                  e,
                ),
                e
              );
            }
          try {
            var h = yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(
              i,
              g,
            )[1];
            if (
              !h ||
              h.messageSendResult !==
                o("WAWebSendMsgResultAction").SendMsgResult.OK
            )
              throw r("err")("Order message SendMsgResult failure status");
          } catch (e) {
            throw (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose(["", ": ", ""])),
                c,
                e,
              ),
              e
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n, r) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i,
              l =
                o("WAWebPaymentsGatingUtils").isReceiptAndStateP2mEligibleChat(
                  e,
                ) &&
                (yield L(e)) &&
                o(
                  "WAWebPaymentsGatingUtils",
                ).isPixCodeReceiptAndStateP2mEnabled(),
              s =
                o(
                  "WAWebPaymentsGatingUtils",
                ).isPixCodeReceiptAndStateAssignedOnSend(e) || l,
              u = o("WAWebOrderCollection").OrderCollection.addOrder(),
              c = {
                reference_id: r("WAWebBizOrderGetFriendlyRandomIdAction")(),
                type: "physical-goods",
                payment_configuration: "merchant_categorization_code",
                payment_settings: [
                  ((i = {
                    type: o("WAWebBizOrderDetailsParams").PaymentSettingType
                      .PIX_STATIC_CODE,
                  }),
                  (i[
                    o(
                      "WAWebBizOrderDetailsParams",
                    ).PaymentSettingType.PIX_STATIC_CODE
                  ] = {
                    merchant_name: t.display_name,
                    key: t.key,
                    key_type: t.key_type,
                  }),
                  i),
                ],
                currency: "BRL",
                total_amount: { value: n, offset: a },
                order_request_id: u.id,
                br_receipt_and_state_enabled: s ? !0 : void 0,
              };
            (yield m({
              caption: null,
              chat: e,
              nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
                .ORDER_DETAILS,
              buttonParamsJson: o("WAWebBizOrderDetailsParams").stringify(c),
              errorMessage: "Pix payment request send to chat failure",
              thumbnail: "",
              buttonName: "review_and_pay",
              nfmInteractiveMsg: !0,
            }),
              s && R(!0));
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n, r, o) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            if (t.length === 0)
              throw r("err")(
                "UPR payment request attempted with no payment keys",
              );
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
            yield m({
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
          },
        )),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (t === void 0 && (t = null),
            yield b(e, t),
            o(
              "WAWebBizFrontendGatingUtils",
            ).isCustomPaymentMethodsSyncEnabled() &&
              o("WAWebPaymentsPixBannerUtils").shouldDismissTryItPixKeyPromo());
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          t === void 0 && (t = null);
          var a = o("WAWebOrderCollection").OrderCollection.addOrder(),
            i = o("WAWebUserPrefsCustomPaymentMethods").getPIX();
          if (!i) throw r("err")("pix key not found");
          var l =
              o("WAWebPaymentsGatingUtils").isReceiptAndStateP2mEligibleChat(
                e,
              ) &&
              (yield L(e)) &&
              o("WAWebPaymentsGatingUtils").isPixKeyReceiptAndStateP2mEnabled(),
            s =
              o(
                "WAWebPaymentsGatingUtils",
              ).isPixKeyReceiptAndStateAssignedOnSend(e) || l,
            u = babelHelpers.extends(
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
                    o(
                      "WAWebBizOrderDetailsParams",
                    ).PaymentSettingType.PIX_STATIC_CODE
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
                  offset: o("WAWebOrderDetailMathDefaultOffset").DEFAULT_OFFSET,
                },
                order_request_id: a.id,
                order: {
                  status: o("WAWebOrderStatus").getDefaultOrderStatus(),
                  items: [
                    {
                      quantity: 0,
                      retailer_id: r(
                        "WAWebBizOrderGetFriendlyRandomIdAction",
                      )(),
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
                    offset: o("WAWebOrderDetailMathDefaultOffset")
                      .DEFAULT_OFFSET,
                  },
                  tax: null,
                  shipping: null,
                  discount: null,
                },
              },
              t != null && { referral: t },
              { br_receipt_and_state_enabled: s ? !0 : void 0 },
            );
          (yield m({
            caption: null,
            chat: e,
            nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
              .PAYMENT_INFO,
            buttonParamsJson: o("WAWebBizOrderDetailsParams").stringify(u),
            errorMessage: "Pix Order message send to chat failure",
            thumbnail: "",
            buttonName: "payment_info",
            nfmInteractiveMsg: !0,
          }),
            s && R(!1));
        })),
        v.apply(this, arguments)
      );
    }
    var S = r("WAWebLazyLoadedRetriable")(function () {
      return r("JSResourceForInteraction")("WAWebPaymentDetailsLogger")
        .__setRef("WAWebBizSendOrderAction")
        .load();
    }, "WAWebPaymentDetailsLogger");
    function R(t) {
      S()
        .then(function (e) {
          var n = e.PaymentFlow,
            r = e.logLocalPaymentRequestCreated;
          return r(t ? n.PIX_CODE : n.PIX_KEY);
        })
        .catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] could not log a created payment request",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("br-payment-request-created-logging-failed");
        });
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.contact.isContactSyncCompleted === 1)
            return !e.contact.isBusiness;
          try {
            var t = yield r("WAWebLidAwareContactsDB").get(
              e.contact.id.toJid(),
            );
            return (
              (t == null ? void 0 : t.isContactSyncCompleted) === 1 &&
              !t.isBusiness
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
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                          type: o("WAWebBizOrderDetailsParams")
                            .PaymentSettingType.CARDS,
                        }),
                        (v[
                          o(
                            "WAWebBizOrderDetailsParams",
                          ).PaymentSettingType.CARDS
                        ] = { enabled: !1 }),
                        v),
                      ]
                    : [],
                ),
              });
            }
          }
          yield m({
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
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            h = x(a, l, _, n, u, s),
            y = o("WAWebOrderStatus").findOrderDetailsMessage(t, _),
            C = y == null ? void 0 : y.msgContextInfo(t.id);
          yield m({
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
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n, r, a, i) {
      var l = e.items.map(function (e) {
          var t;
          return {
            retailer_id: e.id,
            name: e.name,
            amount: { value: (t = e.amount) != null ? t : 0, offset: r },
            quantity: e.quantity,
            isCustomItem: e.isCustomItem,
            isQuantitySet: e.isQuantitySet,
          };
        }),
        s = {
          reference_id: n,
          payment_timestamp: o("WATimeUtils").unixTime(),
          currency: e.currency,
          payment_status: a,
          total_amount: { value: e.totalAmount, offset: r },
          order: {
            status: t,
            items: l,
            subtotal: { value: Number(e.subtotal), offset: r },
            tax: e.tax == null ? void 0 : { value: e.tax, offset: r },
            shipping:
              e.shipping == null ? void 0 : { value: e.shipping, offset: r },
            discount:
              e.discount == null ? void 0 : { value: e.discount, offset: r },
          },
        };
      return (
        i != null && (s = babelHelpers.extends({}, s, { payment_method: i })),
        s
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            h = x(i, s, _, a, c, u),
            y = o("WAWebOrderStatus").findOrderDetailsMessage(n, _),
            C = y == null ? void 0 : y.msgContextInfo(n.id);
          yield m({
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
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            g = x(i, l, p, a, u, s),
            h = o("WAWebOrderStatus").findOrderDetailsMessage(n, p),
            y = h == null ? void 0 : h.msgContextInfo(n.id);
          yield m({
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
        })),
        M.apply(this, arguments)
      );
    }
    ((l.sendPixPaymentRequestMessage = _),
      (l.sendUprPaymentRequestMessage = g),
      (l.sendPixQuickReplyMessageAndDismissTryItPixKeyPromoBanner = y),
      (l.sendPixKeyPaymentInfoMessage = b),
      (l.sendOrderDetailsMessageAsMerchant = k),
      (l.sendOrderStatusMessageAsMerchant = T),
      (l.sendOrderPaymentStatusMessageAsMerchant = $),
      (l.sendOrderPaymentMethodUpdate = N));
  },
  98,
);
