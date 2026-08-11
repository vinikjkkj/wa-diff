__d(
  "WAWebNativeFlowValidation",
  [
    "WAWebBizTemplateAndInteractiveMessagesUtils",
    "WAWebBookingConfirmation",
    "WAWebBrPaymentRequest",
    "WAWebGalaxyFlowFeatureSupport",
    "WAWebInAppSignupConfirmation",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMsgType",
    "WAWebMultiStepFormButton",
    "WAWebOrderDetails",
    "WAWebOrderPaymentStatus",
    "WAWebOrderStatus",
    "WAWebPaymentsGatingUtils",
    "WAWebSignupGating",
    "WAWebVoipGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.bizSource,
        a = e.fromMe,
        i = e.msg;
      return i.nativeFlowName == null
        ? !1
        : i.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO ||
            i.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
          ? o("WAWebOrderDetails").getOrderInfo(i) != null
          : i.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
            ? o("WAWebOrderStatus").getOrderStatusInfo(i) != null
            : i.nativeFlowName ===
                  r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS ||
                i.nativeFlowName ===
                  r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD
              ? o(
                  "WAWebOrderPaymentStatus",
                ).getOrderPaymentStatusInfoFromNativeFlow(i) != null
              : i.nativeFlowName ===
                  r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER
                ? !1
                : i.nativeFlowName ===
                    r("WAWebInteractiveMessagesNativeFlowName")
                      .BOOKING_CONFIRMATION
                  ? o("WAWebBookingConfirmation").getBookingConfirmationInfo(
                      i,
                    ) != null
                  : i.nativeFlowName ===
                      r("WAWebInteractiveMessagesNativeFlowName")
                        .MESSAGE_WITH_LINK
                    ? s(i) !== !1
                    : i.nativeFlowName ===
                        r("WAWebInteractiveMessagesNativeFlowName")
                          .MESSAGE_WITH_LINK_STATUS
                      ? o(
                          "WAWebPaymentsGatingUtils",
                        ).isMessageWithLinkNfmEnabled()
                      : i.nativeFlowName ===
                          r("WAWebInteractiveMessagesNativeFlowName").CTA_CALL
                        ? o(
                            "WAWebBizTemplateAndInteractiveMessagesUtils",
                          ).isInteractiveCtaMessageEnabled(
                            r("WAWebInteractiveMessagesNativeFlowName")
                              .CTA_CALL,
                            a,
                            n,
                          ) && u(i) != null
                        : i.nativeFlowName ===
                            r("WAWebInteractiveMessagesNativeFlowName").CTA_URL
                          ? o(
                              "WAWebBizTemplateAndInteractiveMessagesUtils",
                            ).isInteractiveCtaMessageEnabled(
                              r("WAWebInteractiveMessagesNativeFlowName")
                                .CTA_URL,
                              a,
                              n,
                            ) && u(i) != null
                          : i.nativeFlowName ===
                              r("WAWebInteractiveMessagesNativeFlowName")
                                .QUICK_REPLY
                            ? o(
                                "WAWebBizTemplateAndInteractiveMessagesUtils",
                              ).isInteractiveCtaMessageEnabled(
                                r("WAWebInteractiveMessagesNativeFlowName")
                                  .QUICK_REPLY,
                                a,
                                n,
                              ) && u(i) != null
                            : i.nativeFlowName ===
                                r("WAWebInteractiveMessagesNativeFlowName")
                                  .CTA_CATALOG
                              ? o(
                                  "WAWebBizTemplateAndInteractiveMessagesUtils",
                                ).isInteractiveCtaMessageEnabled(
                                  r("WAWebInteractiveMessagesNativeFlowName")
                                    .CTA_CATALOG,
                                  a,
                                  n,
                                ) && u(i) != null
                              : i.nativeFlowName ===
                                  r("WAWebInteractiveMessagesNativeFlowName")
                                    .CATALOG_MESSAGE
                                ? o(
                                    "WAWebBizTemplateAndInteractiveMessagesUtils",
                                  ).isInteractiveCtaMessageEnabled(
                                    r("WAWebInteractiveMessagesNativeFlowName")
                                      .CATALOG_MESSAGE,
                                    a,
                                    n,
                                  ) && u(i) != null
                                : i.nativeFlowName ===
                                    r("WAWebInteractiveMessagesNativeFlowName")
                                      .CTA_COPY_CODE
                                  ? o(
                                      "WAWebBizTemplateAndInteractiveMessagesUtils",
                                    ).isInteractiveCtaMessageEnabled(
                                      r(
                                        "WAWebInteractiveMessagesNativeFlowName",
                                      ).CTA_COPY_CODE,
                                      a,
                                      n,
                                    ) && u(i) != null
                                  : i.nativeFlowName ===
                                      r(
                                        "WAWebInteractiveMessagesNativeFlowName",
                                      ).MIXED
                                    ? !0
                                    : i.nativeFlowName ===
                                        r(
                                          "WAWebInteractiveMessagesNativeFlowName",
                                        ).CTA_APP
                                      ? u(i) != null &&
                                        o(
                                          "WAWebMmSignalSharingGatingUtils",
                                        ).isMmSignalSharingAppCtaEnabled()
                                      : i.nativeFlowName ===
                                          r(
                                            "WAWebInteractiveMessagesNativeFlowName",
                                          ).CTA_FLOW
                                        ? o(
                                            "WAWebGalaxyFlowFeatureSupport",
                                          ).isFlowSupported(i, null, t)
                                        : i.nativeFlowName ===
                                            r(
                                              "WAWebInteractiveMessagesNativeFlowName",
                                            ).CALL_PERMISSION_REQUEST
                                          ? o(
                                              "WAWebVoipGatingUtils",
                                            ).isCoexCallingPermissionsEnabled()
                                          : i.nativeFlowName ===
                                              r(
                                                "WAWebInteractiveMessagesNativeFlowName",
                                              ).PAYMENT_REQUEST
                                            ? o(
                                                "WAWebBrPaymentRequest",
                                              ).getPaymentRequestInfo(i) != null
                                            : i.nativeFlowName ===
                                                r(
                                                  "WAWebInteractiveMessagesNativeFlowName",
                                                ).API_SIGNUP
                                              ? !0
                                              : i.nativeFlowName ===
                                                  r(
                                                    "WAWebInteractiveMessagesNativeFlowName",
                                                  ).INAPP_SIGNUP
                                                ? o(
                                                    "WAWebSignupGating",
                                                  ).isSignupAGMEnabled() &&
                                                  o(
                                                    "WAWebInAppSignupConfirmation",
                                                  ).getInAppSignupConfirmationInfo(
                                                    i,
                                                  ) != null
                                                : i.nativeFlowName ===
                                                    r(
                                                      "WAWebInteractiveMessagesNativeFlowName",
                                                    ).FORM_MESSAGE
                                                  ? o(
                                                      "WAWebMultiStepFormButton",
                                                    ).getMultiStepFormInfo(i) !=
                                                    null
                                                  : i.nativeFlowName ===
                                                        r(
                                                          "WAWebInteractiveMessagesNativeFlowName",
                                                        ).MENU_OPTIONS ||
                                                      i.nativeFlowName ===
                                                        r(
                                                          "WAWebInteractiveMessagesNativeFlowName",
                                                        ).A2UI_REPLY_ACTION
                                                    ? !1
                                                    : (function () {
                                                        throw Error(
                                                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                                            i.nativeFlowName,
                                                        );
                                                      })();
    }
    function s(e) {
      if (o("WAWebPaymentsGatingUtils").isMessageWithLinkNfmEnabled()) {
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
      return e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
        e.nativeFlowName != null &&
        o(
          "WAWebBizTemplateAndInteractiveMessagesUtils",
        ).supportedNativeFlowButtonNamesForInteractiveMsg.includes(
          e.nativeFlowName,
        ) &&
        ((t = e.interactivePayload) == null ? void 0 : t.buttons) != null
        ? e.interactivePayload.buttons.some(function (e) {
            return c(e);
          })
        : !1;
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
