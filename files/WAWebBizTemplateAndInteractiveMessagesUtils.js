__d(
  "WAWebBizTemplateAndInteractiveMessagesUtils",
  [
    "WAWebABProps",
    "WAWebBizGatingUtils",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 3,
      u = [
        (e = r("WAWebInteractiveMessagesNativeFlowName")).QUICK_REPLY,
        e.CTA_CALL,
        e.CTA_URL,
        e.CTA_CATALOG,
        e.CATALOG_MESSAGE,
        e.CTA_COPY_CODE,
        e.CTA_FLOW,
        e.ORDER_STATUS,
        e.PAYMENT_REMINDER,
        e.BOOKING_CONFIRMATION,
        e.PAYMENT_REQUEST,
        e.API_SIGNUP,
        e.INAPP_SIGNUP,
      ];
    function c(e) {
      return e === "review_and_pay"
        ? r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
        : e === "payment_info"
          ? r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
          : e === "review_order"
            ? r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
            : e === "order_status"
              ? o("WAWebABProps").getABPropConfigValue(
                  "rich_order_status_wa_web",
                )
                ? r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
                : null
              : e === "payment_status"
                ? r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS
                : e === "payment_method"
                  ? r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD
                  : e === "open_webview"
                    ? r("WAWebInteractiveMessagesNativeFlowName")
                        .MESSAGE_WITH_LINK
                    : e === "message_with_link_status"
                      ? r("WAWebInteractiveMessagesNativeFlowName")
                          .MESSAGE_WITH_LINK_STATUS
                      : e === "cta_url"
                        ? r("WAWebInteractiveMessagesNativeFlowName").CTA_URL
                        : e === "cta_call"
                          ? r("WAWebInteractiveMessagesNativeFlowName").CTA_CALL
                          : e === "quick_reply"
                            ? r("WAWebInteractiveMessagesNativeFlowName")
                                .QUICK_REPLY
                            : e === "catalog_message"
                              ? r("WAWebInteractiveMessagesNativeFlowName")
                                  .CATALOG_MESSAGE
                              : e === "cta_catalog"
                                ? r("WAWebInteractiveMessagesNativeFlowName")
                                    .CTA_CATALOG
                                : e === "cta_copy"
                                  ? r("WAWebInteractiveMessagesNativeFlowName")
                                      .CTA_COPY_CODE
                                  : e === "galaxy_message"
                                    ? r(
                                        "WAWebInteractiveMessagesNativeFlowName",
                                      ).CTA_FLOW
                                    : e === "payment_reminder"
                                      ? r(
                                          "WAWebInteractiveMessagesNativeFlowName",
                                        ).PAYMENT_REMINDER
                                      : e === "booking_confirmation"
                                        ? r(
                                            "WAWebInteractiveMessagesNativeFlowName",
                                          ).BOOKING_CONFIRMATION
                                        : e === "call_permission_request"
                                          ? r(
                                              "WAWebInteractiveMessagesNativeFlowName",
                                            ).CALL_PERMISSION_REQUEST
                                          : e === "payment_request"
                                            ? r(
                                                "WAWebInteractiveMessagesNativeFlowName",
                                              ).PAYMENT_REQUEST
                                            : e === "api_signup"
                                              ? r(
                                                  "WAWebInteractiveMessagesNativeFlowName",
                                                ).API_SIGNUP
                                              : e === "inapp_signup"
                                                ? r(
                                                    "WAWebInteractiveMessagesNativeFlowName",
                                                  ).INAPP_SIGNUP
                                                : void 0;
    }
    function d(e, t, n) {
      return o("WAWebMsgGetters").isBizSourceFromMarketingMessage(n)
        ? o("WAWebABProps").getABPropConfigValue(
            "web_premium_messages_interactivity_rendering_enabled",
          )
        : n === "quoted_carousel_card" &&
            e === r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY
          ? o("WAWebBizGatingUtils").carouselsEnabled()
          : _(e)
            ? !0
            : t === !0
              ? o("WAWebABProps").getABPropConfigValue(
                  "web_premium_messages_interactivity_rendering_enabled",
                )
              : !1;
    }
    var m = function (t) {
      return t.hydratedTemplateButton != null
        ? t.hydratedTemplateButton.quickReplyButton != null
        : t.nativeFlowButton != null
          ? t.nativeFlowButton.name ===
            String(r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY)
          : !1;
    };
    function p(e) {
      if (e.length > s) return !0;
      if (e.length > 0) {
        var t = m(e[0]);
        if (
          !e.slice(1).every(function (e) {
            var n,
              r = m(e),
              o = (n = e.nativeFlowButton) == null ? void 0 : n.name,
              a = c(o),
              i = a != null ? u.includes(a) : !0;
            return i && t === r;
          })
        )
          return !0;
      }
      return !1;
    }
    function _(e) {
      return u.includes(e);
    }
    ((l.supportedNativeFlowButtonNamesForInteractiveMsg = u),
      (l.getNativeFlowNameByButtonName = c),
      (l.isInteractiveCtaMessageEnabled = d),
      (l.buttonsViolateButtonImprovementsConstraints = p));
  },
  98,
);
