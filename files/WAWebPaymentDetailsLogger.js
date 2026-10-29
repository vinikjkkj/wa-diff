__d(
  "WAWebPaymentDetailsLogger",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebBizFrontendGatingUtils",
    "WAWebBrPixRequestRowAttributes",
    "WAWebBrazilPaymentState",
    "WAWebBuyerEventLogger",
    "WAWebContactUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMobilePlatforms",
    "WAWebMsgType",
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
      d = "BR",
      m = "local",
      p = (c = n("$InternalEnum"))({
        CHAT_BUBBLE: "chat_bubble",
        SYSTEM_MESSAGE: "system_message",
      }),
      _ = c({
        CHAT: "chat",
        PAYMENT_DETAILS: "pix_payment_details",
        MARK_AS_PAID_DIALOG: "pix_mark_as_paid_dialog",
        ADD_RECEIPT_SHEET: "pix_add_receipt_sheet",
        PAYMENT_RECEIPT: "pix_payment_receipt",
        DELETE_RECEIPT_DIALOG: "pix_delete_receipt_dialog",
      }),
      f = c({ PIX_KEY: "pix_key", PIX_CODE: "pix_code" }),
      g = c({ SUCCESS: "success", FAILURE: "failure" }),
      h = c({
        CREATED: "created",
        STATUS: "status",
        RECEIPT_REMOVED: "receipt_removed",
      }),
      y = c.Mirrored(["P2P", "P2M"]),
      C = { referral: p.CHAT_BUBBLE, screen: _.CHAT };
    function b(e, t) {
      return P(
        e,
        o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW,
        t,
      );
    }
    function v(e, t) {
      return P(
        e,
        o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK,
        t,
      );
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            var a = e.safe();
            if (a.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) return;
            yield T(a, e, t, n);
          } catch (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-details] could not log a payment message interaction",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("br-payment-details-message-logging-failed");
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      var t = e.change,
        n = e.paymentMsg,
        r = e.paymentStatus;
      x(function () {
        var e = n.id.fromMe ? null : n.id.remote.toJid();
        return {
          bizPlatform:
            e != null
              ? o("WAWebContactUtils").getMaybeBizPlatformForLogging(e)
              : void 0,
          businessOwnerJid: e != null ? e : void 0,
          change: t,
          flowType: I(n),
          paymentFlow: k(n),
          paymentStatus: r,
        };
      });
    }
    function E(e) {
      x(function () {
        return {
          bizPlatform: void 0,
          businessOwnerJid: void 0,
          change: h.CREATED,
          flowType: o("WAWebMobilePlatforms").isSMB() ? y.P2M : y.P2P,
          paymentFlow: e,
          paymentStatus: o("WAWebPaymentDetailsModels").PaymentDetailsStatus
            .NOT_CONFIRMED,
        };
      });
    }
    function k(e) {
      return o("WAWebBrazilPaymentState").isPixCodeRequestPayload(
        e.interactivePayload,
      )
        ? f.PIX_CODE
        : f.PIX_KEY;
    }
    function I(e) {
      var t = e.id.fromMe
        ? o("WAWebMobilePlatforms").isSMB()
        : o("WAWebContactUtils").getMaybeBizPlatformForLogging(
            e.id.remote.toJid(),
          ) !== o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN;
      return t ? y.P2M : y.P2P;
    }
    function T(e, t, n, r) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              m = k(t),
              p = m === f.PIX_CODE,
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
                      ).getCopyPixCodeAttributes(c, d, i, $(t))
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
        D.apply(this, arguments)
      );
    }
    function x(t) {
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
            origin: m,
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
    function $(e) {
      var t = o("WAWebPaymentDetailsModelFactory").getPaymentDetailsModel({
          isPaymentFromMe: e.id.fromMe,
          payload: e.interactivePayload,
        }),
        n = t.requestedAmount;
      return n != null ? n.amount1000 / 1e3 : null;
    }
    function P(e, t, n) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = e.paymentMsg,
            i = e.referral,
            l = n.actionTarget,
            s = n.previousScreen,
            c = n.screen;
          try {
            var m = JSON.stringify({
              payment_flow: k(a),
              flow_type: I(a),
              is_requester: a.id.fromMe,
            });
            new (o(
              "WAWebPaymentsUserActionWamEvent",
            ).PaymentsUserActionWamEvent)({
              actionTarget: l,
              paymentActionType: t,
              paymentsCountryCode: d,
              paymentsEventId: yield o(
                "WAWebSyncdMdSyncFieldstatMeta",
              ).MdSyncFieldStatsMeta.getMdSessionId(),
              previousScreenName: s != null ? s : void 0,
              queryParams: m,
              referral: i,
              screen: c,
            }).commit();
          } catch (e) {
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-details] could not log a payment details action",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("br-payment-details-logging-failed");
          }
        })),
        N.apply(this, arguments)
      );
    }
    ((l.PaymentDetailsReferral = p),
      (l.PaymentDetailsScreen = _),
      (l.PaymentFlow = f),
      (l.ReceiptAttachStatus = g),
      (l.PaymentStateChange = h),
      (l.PaymentFlowType = y),
      (l.BUBBLE_ORIGIN = C),
      (l.logPaymentDetailsView = b),
      (l.logPaymentDetailsClick = v),
      (l.logPaymentDetailsMessageInteraction = S),
      (l.logLocalPaymentStateChange = L),
      (l.logLocalPaymentRequestCreated = E),
      (l.getPaymentFlow = k),
      (l.getPaymentFlowType = I));
  },
  98,
);
