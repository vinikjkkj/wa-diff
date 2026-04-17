__d(
  "WAWebGetInteractiveHeaderAction",
  [
    "fbt",
    "WAWebBizEntryPoint",
    "WAWebBizOrderDetailAction",
    "WAWebBizSignupConfirmationPopup.react",
    "WAWebGetInteractiveActions",
    "WAWebInAppSignupConfirmation",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebSignupFlowLoggerLazy",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      var n = [];
      return (
        n.push({
          label: s._(/*BTDS*/ "Open Details Drawer"),
          onClick: function () {
            o("WAWebBizOrderDetailAction").openOrderDetailDrawer(
              e,
              t,
              r("WAWebBizEntryPoint").FROM_CHAT,
            );
          },
        }),
        n
      );
    }
    function u(t) {
      var n;
      switch (t.msg.interactiveType) {
        case r("WAWebInteractiveMessageType").SHOPS_STOREFRONT:
          return (n = r("WAWebGetInteractiveActions")(
            babelHelpers.extends({}, t),
          )) == null
            ? void 0
            : n[0];
        case r("WAWebInteractiveMessageType").NATIVE_FLOW:
          if (
            t.msg.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
          ) {
            var a;
            return (a = r("WAWebGetInteractiveActions")(
              babelHelpers.extends({}, t),
            )) == null
              ? void 0
              : a[0];
          } else {
            if (
              t.msg.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
            )
              return e(t.msg, t.uimContext)[0];
            if (
              t.msg.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP
            )
              return {
                label: s._(/*BTDS*/ "View details"),
                onClick: function () {
                  var e = o(
                    "WAWebInAppSignupConfirmation",
                  ).getInAppSignupConfirmationInfo(t.msg);
                  (e != null &&
                    o("WAWebSignupFlowLoggerLazy").logSignupOp({
                      operation: o("WAWebSignupFlowLoggerLazy")
                        .SIGNUP_USER_JOURNEY_OPERATION
                        .SIGNUP_CONFIRMATION_VIEW_DETAILS_CLICKED,
                      signupId: e.signupId,
                      businessWid: t.msg.id.remote,
                    }),
                    o(
                      "WAWebBizSignupConfirmationPopup.react",
                    ).openSignupConfirmationPopup(t.msg));
                },
              };
          }
          return null;
        default:
          return null;
      }
    }
    l.default = u;
  },
  226,
);
