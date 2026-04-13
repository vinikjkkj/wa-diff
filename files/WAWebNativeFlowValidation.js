__d(
  "WAWebNativeFlowValidation",
  [
    "WAWebBizGatingUtils",
    "WAWebBizTemplateAndInteractiveMessagesUtils",
    "WAWebBookingConfirmation",
    "WAWebBrPaymentRequest",
    "WAWebGalaxyFlowFeatureSupport",
    "WAWebInAppSignupConfirmation",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMsgType",
    "WAWebOrderDetails",
    "WAWebOrderPaymentStatus",
    "WAWebOrderStatus",
    "WAWebPaymentReminder",
    "WAWebSignupGating",
    "WAWebVoipGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a) {
      return e.nativeFlowName == null
        ? !1
        : e.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO ||
            e.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
          ? o("WAWebOrderDetails").getOrderInfo(e) != null
          : e.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
            ? o("WAWebOrderStatus").getOrderStatusInfo(e) != null
            : e.nativeFlowName ===
                  r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS ||
                e.nativeFlowName ===
                  r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD
              ? o(
                  "WAWebOrderPaymentStatus",
                ).getOrderPaymentStatusInfoFromNativeFlow(e) != null
              : e.nativeFlowName ===
                  r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER
                ? o("WAWebPaymentReminder").isPaymentReminderEnabled() &&
                  o("WAWebPaymentReminder").getPaymentReminderInfo(e) != null
                : e.nativeFlowName ===
                    r("WAWebInteractiveMessagesNativeFlowName")
                      .BOOKING_CONFIRMATION
                  ? o(
                      "WAWebBookingConfirmation",
                    ).isBookingConfirmationEnabled() &&
                    o("WAWebBookingConfirmation").getBookingConfirmationInfo(
                      e,
                    ) != null
                  : e.nativeFlowName ===
                      r("WAWebInteractiveMessagesNativeFlowName")
                        .MESSAGE_WITH_LINK
                    ? s(e) !== !1
                    : e.nativeFlowName ===
                        r("WAWebInteractiveMessagesNativeFlowName")
                          .MESSAGE_WITH_LINK_STATUS
                      ? o("WAWebBizGatingUtils").isMessageWithLinkNfmEnabled()
                      : e.nativeFlowName ===
                          r("WAWebInteractiveMessagesNativeFlowName").CTA_CALL
                        ? o(
                            "WAWebBizTemplateAndInteractiveMessagesUtils",
                          ).isInteractiveCtaMessageEnabled(
                            r("WAWebInteractiveMessagesNativeFlowName")
                              .CTA_CALL,
                            n,
                            t,
                          ) && u(e) != null
                        : e.nativeFlowName ===
                            r("WAWebInteractiveMessagesNativeFlowName").CTA_URL
                          ? o(
                              "WAWebBizTemplateAndInteractiveMessagesUtils",
                            ).isInteractiveCtaMessageEnabled(
                              r("WAWebInteractiveMessagesNativeFlowName")
                                .CTA_URL,
                              n,
                              t,
                            ) && u(e) != null
                          : e.nativeFlowName ===
                              r("WAWebInteractiveMessagesNativeFlowName")
                                .QUICK_REPLY
                            ? o(
                                "WAWebBizTemplateAndInteractiveMessagesUtils",
                              ).isInteractiveCtaMessageEnabled(
                                r("WAWebInteractiveMessagesNativeFlowName")
                                  .QUICK_REPLY,
                                n,
                                t,
                              ) && u(e) != null
                            : e.nativeFlowName ===
                                r("WAWebInteractiveMessagesNativeFlowName")
                                  .CTA_CATALOG
                              ? o(
                                  "WAWebBizTemplateAndInteractiveMessagesUtils",
                                ).isInteractiveCtaMessageEnabled(
                                  r("WAWebInteractiveMessagesNativeFlowName")
                                    .CTA_CATALOG,
                                  n,
                                  t,
                                ) && u(e) != null
                              : e.nativeFlowName ===
                                  r("WAWebInteractiveMessagesNativeFlowName")
                                    .CATALOG_MESSAGE
                                ? o(
                                    "WAWebBizTemplateAndInteractiveMessagesUtils",
                                  ).isInteractiveCtaMessageEnabled(
                                    r("WAWebInteractiveMessagesNativeFlowName")
                                      .CATALOG_MESSAGE,
                                    n,
                                    t,
                                  ) && u(e) != null
                                : e.nativeFlowName ===
                                    r("WAWebInteractiveMessagesNativeFlowName")
                                      .CTA_COPY_CODE
                                  ? o(
                                      "WAWebBizTemplateAndInteractiveMessagesUtils",
                                    ).isInteractiveCtaMessageEnabled(
                                      r(
                                        "WAWebInteractiveMessagesNativeFlowName",
                                      ).CTA_COPY_CODE,
                                      n,
                                      t,
                                    ) && u(e) != null
                                  : e.nativeFlowName ===
                                      r(
                                        "WAWebInteractiveMessagesNativeFlowName",
                                      ).MIXED
                                    ? !0
                                    : e.nativeFlowName ===
                                        r(
                                          "WAWebInteractiveMessagesNativeFlowName",
                                        ).CTA_APP
                                      ? o(
                                          "WAWebMmSignalSharingGatingUtils",
                                        ).isMmSignalSharingAppCtaEnabled() &&
                                        u(e) != null
                                      : e.nativeFlowName ===
                                          r(
                                            "WAWebInteractiveMessagesNativeFlowName",
                                          ).CTA_FLOW
                                        ? o(
                                            "WAWebGalaxyFlowFeatureSupport",
                                          ).isFlowSupported(e, null, a)
                                        : e.nativeFlowName ===
                                            r(
                                              "WAWebInteractiveMessagesNativeFlowName",
                                            ).CALL_PERMISSION_REQUEST
                                          ? o(
                                              "WAWebVoipGatingUtils",
                                            ).isCoexCallingPermissionsEnabled()
                                          : e.nativeFlowName ===
                                              r(
                                                "WAWebInteractiveMessagesNativeFlowName",
                                              ).PAYMENT_REQUEST
                                            ? o(
                                                "WAWebBrPaymentRequest",
                                              ).getPaymentRequestInfo(e) != null
                                            : e.nativeFlowName ===
                                                r(
                                                  "WAWebInteractiveMessagesNativeFlowName",
                                                ).API_SIGNUP
                                              ? !0
                                              : e.nativeFlowName ===
                                                  r(
                                                    "WAWebInteractiveMessagesNativeFlowName",
                                                  ).INAPP_SIGNUP
                                                ? o(
                                                    "WAWebSignupGating",
                                                  ).isSignupAGMEnabled() &&
                                                  o(
                                                    "WAWebInAppSignupConfirmation",
                                                  ).getInAppSignupConfirmationInfo(
                                                    e,
                                                  ) != null
                                                : (function () {
                                                    throw Error(
                                                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                                        e.nativeFlowName,
                                                    );
                                                  })();
    }
    function s(e) {
      if (o("WAWebBizGatingUtils").isMessageWithLinkNfmEnabled()) {
        if (
          e.nativeFlowName !==
            r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK ||
          e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
          e.interactiveType !== r("WAWebInteractiveMessageType").NATIVE_FLOW ||
          e.interactivePayload == null
        )
          return !1;
        var t = e.interactivePayload;
        if (t != null && t.buttons && t.buttons.length > 0) {
          var n = t.buttons[0],
            a = n.buttonParamsJson,
            i = n.name;
          if (i === "open_webview" && a != null) return !0;
        }
      }
      return !1;
    }
    function u(e) {
      var t;
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
          e.nativeFlowName != null &&
          o(
            "WAWebBizTemplateAndInteractiveMessagesUtils",
          ).supportedNativeFlowButtonNamesForInteractiveMsg.includes(
            e.nativeFlowName,
          ) &&
          ((t = e.interactivePayload) == null ? void 0 : t.buttons) != null &&
          e.interactivePayload.buttons.forEach(function (e) {
            var t = c(e);
            if (t) return !0;
          }),
        !1
      );
    }
    function c(e) {
      var t = o(
        "WAWebBizTemplateAndInteractiveMessagesUtils",
      ).getNativeFlowNameByButtonName(e.name);
      return (
        t != null &&
        o(
          "WAWebBizTemplateAndInteractiveMessagesUtils",
        ).supportedNativeFlowButtonNamesForInteractiveMsg.includes(t)
      );
    }
    l.isValidNativeFlowMessage = e;
  },
  98,
);
