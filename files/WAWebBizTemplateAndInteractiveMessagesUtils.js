__d(
  "WAWebBizTemplateAndInteractiveMessagesUtils",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 10,
      c = 3,
      d = [
        (s = r("WAWebInteractiveMessagesNativeFlowName")).QUICK_REPLY,
        s.CTA_CALL,
        s.CTA_URL,
        s.CTA_CATALOG,
        s.CATALOG_MESSAGE,
        s.CTA_COPY_CODE,
        s.CTA_FLOW,
        s.ORDER_STATUS,
        s.PAYMENT_REMINDER,
        s.BOOKING_CONFIRMATION,
        s.PAYMENT_REQUEST,
        s.API_SIGNUP,
        s.INAPP_SIGNUP,
        s.CTA_APP,
        s.FORM_MESSAGE,
      ];
    function m(e) {
      return e === "review_and_pay"
        ? r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
        : e === "payment_info"
          ? r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
          : e === "review_order" || e === "order_status"
            ? r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
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
                                  ? r("WAWebInteractiveMessagesNativeFlowName")
                                      .CTA_FLOW
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
                                              : e === "cta_app"
                                                ? r(
                                                    "WAWebInteractiveMessagesNativeFlowName",
                                                  ).CTA_APP
                                                : e === "form_message"
                                                  ? o(
                                                      "WAWebABProps",
                                                    ).getABPropConfigValue(
                                                      "im_nfm_multi_step_form_killswitch",
                                                    )
                                                    ? null
                                                    : r(
                                                        "WAWebInteractiveMessagesNativeFlowName",
                                                      ).FORM_MESSAGE
                                                  : void 0;
    }
    function p(e, t, n) {
      return o("WAWebMsgGetters").isBizSourceFromMarketingMessage(n)
        ? o("WAWebABProps").getABPropConfigValue(
            "web_premium_messages_interactivity_rendering_enabled",
          )
        : (n === "quoted_carousel_card" &&
              e === r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY) ||
            y(e)
          ? !0
          : t === !0
            ? o("WAWebABProps").getABPropConfigValue(
                "web_premium_messages_interactivity_rendering_enabled",
              )
            : !1;
    }
    var _ = function (t) {
      return t.hydratedTemplateButton != null
        ? t.hydratedTemplateButton.quickReplyButton != null
        : t.nativeFlowButton != null
          ? t.nativeFlowButton.name ===
            String(r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY)
          : !1;
    };
    function f(e) {
      if (e.length === 0) return !1;
      var t = _(e[0]),
        n = e[0].hydratedTemplateButton != null;
      return g(e, n, t)
        ? !0
        : !e.slice(1).every(function (e) {
            return h(e, n, t);
          });
    }
    function g(t, n, r) {
      if (n) {
        var a = t.filter(_).length,
          i = t.length - a,
          l = t.length > u || i > c;
        return (
          l &&
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Template button limits exceeded: total=",
                    ", cta=",
                    "",
                  ])),
                t.length,
                i,
              )
              .sendLogs("template-button-limit-exceeded"),
          l
        );
      }
      var s = r ? u : c;
      return t.length > s;
    }
    function h(e, t, n) {
      var r,
        o = _(e),
        a = (r = e.nativeFlowButton) == null ? void 0 : r.name,
        i = m(a),
        l = i != null ? d.includes(i) : !0;
      return l && (t || n === o);
    }
    function y(e) {
      return d.includes(e);
    }
    ((l.supportedNativeFlowButtonNamesForInteractiveMsg = d),
      (l.getNativeFlowNameByButtonName = m),
      (l.isInteractiveCtaMessageEnabled = p),
      (l.buttonsViolateButtonImprovementsConstraints = f));
  },
  98,
);
