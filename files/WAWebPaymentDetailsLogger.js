__d(
  "WAWebPaymentDetailsLogger",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebBizFrontendGatingUtils",
    "WAWebBrPixRequestRowAttributes",
    "WAWebBrazilPaymentState",
    "WAWebBrazilPaymentStateDb",
    "WAWebBrazilPaymentStateKeys",
    "WAWebBuyerEventLogger",
    "WAWebContactUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMobilePlatforms",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebPaymentDetailsGating",
    "WAWebPaymentDetailsModelFactory",
    "WAWebPaymentDetailsModels",
    "WAWebPaymentsUserActionWamEvent",
    "WAWebPsStructuredMessageInteractionWamEvent",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumPaymentActionTypes",
    "WAWebWamEnumStructuredMessageClass",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = "BR",
      p = "local",
      _ = (d = n("$InternalEnum"))({
        CHAT_BUBBLE: "chat_bubble",
        SYSTEM_MESSAGE: "system_message",
      }),
      f = d({
        CHAT: "chat",
        PAYMENT_DETAILS: "pix_payment_details",
        MARK_AS_PAID_DIALOG: "pix_mark_as_paid_dialog",
        ADD_RECEIPT_SHEET: "pix_add_receipt_sheet",
        PAYMENT_RECEIPT: "pix_payment_receipt",
        DELETE_RECEIPT_DIALOG: "pix_delete_receipt_dialog",
        PAYMENT_BUBBLE: "pix_payment_bubble",
      }),
      g = d({
        PIX_KEY: "pix_key",
        PIX_CODE: "pix_code",
        APP_SWITCH: "app_switch",
      }),
      h = d({ SUCCESS: "success", FAILURE: "failure" }),
      y = d({
        CREATED: "created",
        STATUS: "status",
        RECEIPT_REMOVED: "receipt_removed",
      }),
      C = d.Mirrored(["P2P", "P2M"]),
      b = { referral: _.CHAT_BUBBLE, screen: f.CHAT };
    function v(e, t) {
      return F(
        e,
        o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW,
        t,
      );
    }
    function S(e, t) {
      return F(
        e,
        o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK,
        t,
      );
    }
    var R = new Set();
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebMsgCollection").MsgCollection.get(e),
            n = e.toString();
          if (
            !(
              t == null ||
              R.has(n) ||
              !o("WAWebPaymentDetailsGating").canLogPaymentBubbleView(t)
            )
          ) {
            var a = o(
              "WAWebBrazilPaymentState",
            ).getReceiptAndStateBubbleVersion(t.interactivePayload);
            if (a != null) {
              R.add(n);
              var i = !1;
              try {
                var l = yield o(
                    "WAWebSyncdMdSyncFieldstatMeta",
                  ).MdSyncFieldStatsMeta.getMdSessionId(),
                  u = yield o(
                    "WAWebBrazilPaymentStateDb",
                  ).markStoredBubbleViewLogged(e, function () {
                    (k(t, a, l), (i = !0));
                  });
                u != null ? t.set({ interactivePayload: u }) : i || R.delete(n);
              } catch (e) {
                (i || R.delete(n),
                  o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[br-payment-details] could not log the payment bubble view",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("br-payment-bubble-view-logging-failed"));
              }
            }
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      new (o("WAWebPaymentsUserActionWamEvent").PaymentsUserActionWamEvent)({
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.VIEW,
        paymentsCountryCode: m,
        paymentsEventId: n,
        queryParams: JSON.stringify({
          payment_flow: o("WAWebBrazilPaymentState").isAppSwitchPaymentRequest(
            e.interactivePayload,
          )
            ? g.APP_SWITCH
            : $(e),
          flow_type: P(e),
          is_requester: !1,
          variant:
            t === o("WAWebBrazilPaymentStateKeys").CONTROL_BUBBLE_VERSION
              ? "control"
              : "test",
          bubble_version: t,
        }),
        screen: f.PAYMENT_BUBBLE,
      }).commit();
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            var a = e.safe();
            if (a.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) return;
            yield N(a, e, t, n);
          } catch (e) {
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-details] could not log a payment message interaction",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("br-payment-details-message-logging-failed");
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      var t = e.change,
        n = e.paymentMsg,
        r = e.paymentStatus;
      w(function () {
        var e = n.id.fromMe ? null : n.id.remote.toJid();
        return {
          bizPlatform:
            e != null
              ? o("WAWebContactUtils").getMaybeBizPlatformForLogging(e)
              : void 0,
          businessOwnerJid: e != null ? e : void 0,
          change: t,
          flowType: P(n),
          paymentFlow: $(n),
          paymentStatus: r,
        };
      });
    }
    function x(e) {
      w(function () {
        return {
          bizPlatform: void 0,
          businessOwnerJid: void 0,
          change: y.CREATED,
          flowType: o("WAWebMobilePlatforms").isSMB() ? C.P2M : C.P2P,
          paymentFlow: e,
          paymentStatus: o("WAWebPaymentDetailsModels").PaymentDetailsStatus
            .NOT_CONFIRMED,
        };
      });
    }
    function $(e) {
      var t = e.interactivePayload;
      return o("WAWebBrazilPaymentState").isPixCodeRequestPayload(t)
        ? o("WAWebBrazilPaymentState").getPaymentDetailsFlow(t) ===
          o("WAWebPaymentDetailsModels").PaymentDetailsFlow.APP_SWITCH
          ? g.APP_SWITCH
          : g.PIX_CODE
        : g.PIX_KEY;
    }
    function P(e) {
      var t = e.id.fromMe
        ? o("WAWebMobilePlatforms").isSMB()
        : o("WAWebContactUtils").getMaybeBizPlatformForLogging(
            e.id.remote.toJid(),
          ) !== o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN;
      return t ? C.P2M : C.P2P;
    }
    function N(e, t, n, r) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a,
              i = yield o("WAWebBrPixRequestRowAttributes").genOrderFunnelId(
                e,
                o("WAWebBrPixRequestRowAttributes").RECEIVER_EVENT_LOG_KEY,
              ),
              l = t.id.fromMe,
              s = (a = e.senderObj) == null ? void 0 : a.id.toJid(),
              u = o("WAWebContactUtils").getMaybeBizPlatformForLogging(s),
              c = l
                ? !o("WAWebMobilePlatforms").isSMB()
                : u === o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN,
              d = o("WAWebBrPixRequestRowAttributes").getChatTypeString(
                o("WAWebFrontendMsgGetters").getChat(t),
              ),
              m = $(t),
              p = m !== g.PIX_KEY,
              _ = r != null ? r : void 0;
            (new (o(
              "WAWebPsStructuredMessageInteractionWamEvent",
            ).PsStructuredMessageInteractionWamEvent)({
              bizPlatform: l ? void 0 : u,
              businessOwnerJid: l ? void 0 : s,
              messageClass: o("WAWebWamEnumStructuredMessageClass")
                .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
              messageClassAttributes: JSON.stringify(
                babelHelpers.extends(
                  {},
                  p
                    ? o(
                        "WAWebBrPixRequestRowAttributes",
                      ).getCopyPixCodeAttributes(c, d, i, A(t))
                    : o(
                        "WAWebBrPixRequestRowAttributes",
                      ).getCopyPixKeyAttributes(c, d, i),
                  { payment_flow: m, status: _ },
                ),
              ),
              messageInteraction: n,
              messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE,
            }).commit(),
              !l &&
                (yield o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
                  isLoggingEnabled: o(
                    "WAWebBizFrontendGatingUtils",
                  ).isCopyPixKeyBuyerLoggingEnabled(s),
                  psFunnelId: i,
                  attributes: babelHelpers.extends(
                    {},
                    p
                      ? o(
                          "WAWebBrPixRequestRowAttributes",
                        ).getCopyPixCodeBuyerAttributes(c, d)
                      : o(
                          "WAWebBrPixRequestRowAttributes",
                        ).getCopyPixKeyBuyerAttributes(c, d),
                    { status: _ },
                  ),
                  interaction: n,
                  bizPlatform: u,
                })));
          },
        )),
        M.apply(this, arguments)
      );
    }
    function w(t) {
      try {
        var n = t(),
          a = n.bizPlatform,
          i = n.businessOwnerJid,
          l = n.change,
          s = n.flowType,
          u = n.paymentFlow,
          c = n.paymentStatus;
        new (o(
          "WAWebPsStructuredMessageInteractionWamEvent",
        ).PsStructuredMessageInteractionWamEvent)({
          bizPlatform: a != null ? a : void 0,
          businessOwnerJid: i != null ? i : void 0,
          messageClass: o("WAWebWamEnumStructuredMessageClass")
            .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
          messageClassAttributes: JSON.stringify({
            flow_type: s,
            payment_flow: u,
            change: l,
            payment_status: c,
            origin: p,
          }),
          messageInteraction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
            .PAYMENT_STATE_CHANGED,
          messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE,
        }).commit();
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payment-details] could not log a payment state change",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("br-payment-details-state-logging-failed");
      }
    }
    function A(e) {
      var t = o("WAWebPaymentDetailsModelFactory").getPaymentDetailsModel({
          isPaymentFromMe: e.id.fromMe,
          payload: e.interactivePayload,
        }),
        n = t.requestedAmount;
      return n != null ? n.amount1000 / 1e3 : null;
    }
    function F(e, t, n) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = e.paymentMsg,
            i = e.referral,
            l = n.actionTarget,
            s = n.previousScreen,
            u = n.screen;
          try {
            var d = JSON.stringify({
              payment_flow: $(a),
              flow_type: P(a),
              is_requester: a.id.fromMe,
            });
            new (o(
              "WAWebPaymentsUserActionWamEvent",
            ).PaymentsUserActionWamEvent)({
              actionTarget: l,
              paymentActionType: t,
              paymentsCountryCode: m,
              paymentsEventId: yield o(
                "WAWebSyncdMdSyncFieldstatMeta",
              ).MdSyncFieldStatsMeta.getMdSessionId(),
              previousScreenName: s != null ? s : void 0,
              queryParams: d,
              referral: i,
              screen: u,
            }).commit();
          } catch (e) {
            o("WALogger")
              .WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-details] could not log a payment details action",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("br-payment-details-logging-failed");
          }
        })),
        O.apply(this, arguments)
      );
    }
    ((l.PaymentDetailsReferral = _),
      (l.PaymentDetailsScreen = f),
      (l.PaymentFlow = g),
      (l.ReceiptAttachStatus = h),
      (l.PaymentStateChange = y),
      (l.PaymentFlowType = C),
      (l.BUBBLE_ORIGIN = b),
      (l.logPaymentDetailsView = v),
      (l.logPaymentDetailsClick = S),
      (l.logPaymentBubbleViewOnce = L),
      (l.logPaymentDetailsMessageInteraction = I),
      (l.logLocalPaymentStateChange = D),
      (l.logLocalPaymentRequestCreated = x),
      (l.getPaymentFlow = $),
      (l.getPaymentFlowType = P));
  },
  98,
);
