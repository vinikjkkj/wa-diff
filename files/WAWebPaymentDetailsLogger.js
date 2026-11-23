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
      return M(
        e,
        o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW,
        t,
      );
    }
    function S(e, t) {
      return M(
        e,
        o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK,
        t,
      );
    }
    var R = new Set();
    async function L(t) {
      var n = o("WAWebMsgCollection").MsgCollection.get(t),
        a = t.toString();
      if (
        !(
          n == null ||
          R.has(a) ||
          !o("WAWebPaymentDetailsGating").canLogPaymentBubbleView(n)
        )
      ) {
        var i = o("WAWebBrazilPaymentState").getReceiptAndStateBubbleVersion(
          n.interactivePayload,
        );
        if (i != null) {
          R.add(a);
          var l = !1;
          try {
            var s = await o(
                "WAWebSyncdMdSyncFieldstatMeta",
              ).MdSyncFieldStatsMeta.getMdSessionId(),
              u = await o(
                "WAWebBrazilPaymentStateDb",
              ).markStoredBubbleViewLogged(t, function () {
                (E(n, i, s), (l = !0));
              });
            u != null ? n.set({ interactivePayload: u }) : l || R.delete(a);
          } catch (t) {
            (l || R.delete(a),
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[br-payment-details] could not log the payment bubble view",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("br-payment-bubble-view-logging-failed"));
          }
        }
      }
    }
    function E(e, t, n) {
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
            : D(e),
          flow_type: x(e),
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
    async function k(e, t, n) {
      try {
        var a = e.safe();
        if (a.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) return;
        await $(a, e, t, n);
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
    }
    function I(e) {
      var t = e.change,
        n = e.paymentMsg,
        r = e.paymentStatus;
      P(function () {
        var e = n.id.fromMe ? null : n.id.remote.toJid();
        return {
          bizPlatform:
            e != null
              ? o("WAWebContactUtils").getMaybeBizPlatformForLogging(e)
              : void 0,
          businessOwnerJid: e != null ? e : void 0,
          change: t,
          flowType: x(n),
          paymentFlow: D(n),
          paymentStatus: r,
        };
      });
    }
    function T(e) {
      P(function () {
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
    function D(e) {
      var t = e.interactivePayload;
      return o("WAWebBrazilPaymentState").isPixCodeRequestPayload(t)
        ? o("WAWebBrazilPaymentState").getPaymentDetailsFlow(t) ===
          o("WAWebPaymentDetailsModels").PaymentDetailsFlow.APP_SWITCH
          ? g.APP_SWITCH
          : g.PIX_CODE
        : g.PIX_KEY;
    }
    function x(e) {
      var t = e.id.fromMe
        ? o("WAWebMobilePlatforms").isSMB()
        : o("WAWebContactUtils").getMaybeBizPlatformForLogging(
            e.id.remote.toJid(),
          ) !== o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN;
      return t ? C.P2M : C.P2P;
    }
    async function $(e, t, n, r) {
      var a,
        i = await o("WAWebBrPixRequestRowAttributes").genOrderFunnelId(
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
        m = D(t),
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
              ? o("WAWebBrPixRequestRowAttributes").getCopyPixCodeAttributes(
                  c,
                  d,
                  i,
                  N(t),
                )
              : o("WAWebBrPixRequestRowAttributes").getCopyPixKeyAttributes(
                  c,
                  d,
                  i,
                ),
            { payment_flow: m, status: _ },
          ),
        ),
        messageInteraction: n,
        messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE,
      }).commit(),
        !l &&
          (await o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
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
    }
    function P(e) {
      try {
        var t = e(),
          n = t.bizPlatform,
          a = t.businessOwnerJid,
          i = t.change,
          l = t.flowType,
          s = t.paymentFlow,
          c = t.paymentStatus;
        new (o(
          "WAWebPsStructuredMessageInteractionWamEvent",
        ).PsStructuredMessageInteractionWamEvent)({
          bizPlatform: n != null ? n : void 0,
          businessOwnerJid: a != null ? a : void 0,
          messageClass: o("WAWebWamEnumStructuredMessageClass")
            .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
          messageClassAttributes: JSON.stringify({
            flow_type: l,
            payment_flow: s,
            change: i,
            payment_status: c,
            origin: p,
          }),
          messageInteraction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
            .PAYMENT_STATE_CHANGED,
          messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE,
        }).commit();
      } catch (e) {
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payment-details] could not log a payment state change",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("br-payment-details-state-logging-failed");
      }
    }
    function N(e) {
      var t = o("WAWebPaymentDetailsModelFactory").getPaymentDetailsModel({
          isPaymentFromMe: e.id.fromMe,
          payload: e.interactivePayload,
        }),
        n = t.requestedAmount;
      return n != null ? n.amount1000 / 1e3 : null;
    }
    async function M(e, t, n) {
      var a = e.paymentMsg,
        i = e.referral,
        l = n.actionTarget,
        s = n.previousScreen,
        u = n.screen;
      try {
        var d = JSON.stringify({
          payment_flow: D(a),
          flow_type: x(a),
          is_requester: a.id.fromMe,
        });
        new (o("WAWebPaymentsUserActionWamEvent").PaymentsUserActionWamEvent)({
          actionTarget: l,
          paymentActionType: t,
          paymentsCountryCode: m,
          paymentsEventId: await o(
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
      (l.logPaymentDetailsMessageInteraction = k),
      (l.logLocalPaymentStateChange = I),
      (l.logLocalPaymentRequestCreated = T),
      (l.getPaymentFlow = D),
      (l.getPaymentFlowType = x));
  },
  98,
);
