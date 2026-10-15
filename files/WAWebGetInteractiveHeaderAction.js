__d(
  "WAWebGetInteractiveHeaderAction",
  [
    "fbt",
    "WALogger",
    "WAWebBizEntryPoint",
    "WAWebBizOrderDetailAction",
    "WAWebBizSignupConfirmationPopup.react",
    "WAWebGetBrazilnteractiveActions",
    "WAWebGetShopStorefrontInteractiveAction",
    "WAWebInAppSignupConfirmation",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebPaymentDetailsGating",
    "WAWebSignupFlowLoggerLazy",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(e) {
      var t = e.interactivePayload,
        n = e.interactiveType,
        o = e.nativeFlowName;
      return n === r("WAWebInteractiveMessageType").SHOPS_STOREFRONT
        ? t == null
          ? null
          : r("WAWebGetShopStorefrontInteractiveAction")(t)
        : n !== r("WAWebInteractiveMessageType").NATIVE_FLOW
          ? null
          : o === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
            ? c(e)
            : o === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
              ? d(e.msgKey, e.uimContext)
              : o === r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP
                ? m(e.msgKey)
                : null;
    }
    function c(e) {
      var t = e.canCompose,
        n = e.interactivePayload,
        r = e.interactiveType,
        a = e.msgKey,
        i = e.nativeFlowName,
        l = e.orderInfo,
        s = e.type;
      return !t ||
        l == null ||
        o("WAWebPaymentDetailsGating").isPaymentDetailsEnabledFor({
          interactivePayload: n,
          interactiveType: r,
          msgKey: a,
          nativeFlowName: i,
          type: s,
        })
        ? null
        : o(
            "WAWebGetBrazilnteractiveActions",
          ).getPaymentInfoOrderDetailsInteractiveAction(l, a);
    }
    function d(e, t) {
      return {
        label: s._(/*BTDS*/ "Open Details Drawer"),
        onClick: function () {
          var n = p(e);
          n != null &&
            o("WAWebBizOrderDetailAction").openOrderDetailDrawer(
              n,
              t,
              r("WAWebBizEntryPoint").FROM_CHAT,
            );
        },
      };
    }
    function m(e) {
      return {
        label: s._(/*BTDS*/ "View details"),
        onClick: function () {
          var t = p(e);
          if (t != null) {
            var n = o(
              "WAWebInAppSignupConfirmation",
            ).getInAppSignupConfirmationInfo(t);
            (n != null &&
              o("WAWebSignupFlowLoggerLazy").logSignupOp({
                operation: o("WAWebSignupFlowLoggerLazy")
                  .SIGNUP_USER_JOURNEY_OPERATION
                  .SIGNUP_CONFIRMATION_VIEW_DETAILS_CLICKED,
                signupId: n.signupId,
                businessWid: e.remote,
              }),
              o(
                "WAWebBizSignupConfirmationPopup.react",
              ).openSignupConfirmationPopup(t));
          }
        },
      };
    }
    function p(t) {
      var n,
        r =
          (n = o("WAWebMsgCollection").MsgCollection.get(t)) == null
            ? void 0
            : n.safe();
      return r != null && r.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
        ? r
        : (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[interactive-header] header click skipped, message is not in the collection",
              ])),
          ),
          null);
    }
    l.default = u;
  },
  226,
);
