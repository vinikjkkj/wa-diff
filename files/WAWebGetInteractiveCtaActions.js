__d(
  "WAWebGetInteractiveCtaActions",
  [
    "fbt",
    "WAWebBizTemplateAndInteractiveMessagesUtils",
    "WAWebBookingConfirmation",
    "WAWebBrPaymentRequest",
    "WAWebCatalogShortLinkUtils",
    "WAWebGetGalaxyFlowCtaButton",
    "WAWebInAppSignupConfirmation",
    "WAWebInAppSignupPrompt",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebOrderStatus",
    "WAWebOrderStatusButton",
    "WAWebPaymentReminder",
    "WAWebSignupCTAExperiment",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t;
      if (
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
        e.nativeFlowName != null &&
        o(
          "WAWebBizTemplateAndInteractiveMessagesUtils",
        ).supportedNativeFlowButtonNamesForInteractiveMsg.includes(
          e.nativeFlowName,
        ) &&
        ((t = e.interactivePayload) == null ? void 0 : t.buttons) != null
      ) {
        var n,
          a = [];
        if (
          (e.interactivePayload.buttons.forEach(function (t, n) {
            var r = u(t, n, e.t, e.nativeFlowName);
            r != null && a.push(r);
          }),
          e.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP &&
            ((n = e.interactivePayload) == null ? void 0 : n.buttons) != null &&
            e.interactivePayload.buttons.length > 0)
        ) {
          var i,
            l =
              (i = e.interactivePayload.buttons[0]) == null
                ? void 0
                : i.buttonParamsJson,
            c = o("WAWebInAppSignupConfirmation").parseInAppSignupWebsiteUrl(l);
          c != null &&
            a.push({
              name: "cta_url",
              index: a.length,
              data: {
                label: s._(/*BTDS*/ "Visit website").toString(),
                url: c,
                merchantUrl: c,
              },
            });
        }
        if (a.length > 0) return a;
      }
      return null;
    }
    function u(e, t, n, a) {
      var i,
        l,
        u,
        m = o(
          "WAWebBizTemplateAndInteractiveMessagesUtils",
        ).getNativeFlowNameByButtonName(e.name);
      if (
        m == null ||
        (m === r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP &&
          a !== r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP)
      )
        return null;
      var p = (i = e.buttonParamsJson) != null ? i : "",
        _;
      try {
        _ = JSON.parse(p);
      } catch (e) {
        return null;
      }
      var f =
          _.catalog_product_id != null
            ? s._(/*BTDS*/ "View product")
            : s._(/*BTDS*/ "View catalog"),
        g =
          _.catalog_product_id != null
            ? o("WAWebCatalogShortLinkUtils").createProductLink(
                _.business_phone_number,
                _.catalog_product_id,
              )
            : o("WAWebCatalogShortLinkUtils").createCatalogLink(
                _.business_phone_number,
              );
      switch (m) {
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_URL:
          return {
            name: "cta_url",
            index: t,
            data: {
              label: (l = _.display_text) != null ? l : _.title,
              url: _.url,
              merchantUrl: _.merchant_url,
            },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_CALL:
          return {
            name: "cta_call",
            index: t,
            data: { label: _.display_text, selectionId: _.id },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY:
          return {
            name: "quick_reply",
            index: t,
            data: {
              label: (u = _.display_text) != null ? u : _.title,
              selectionId: _.id,
              disabled: _.disabled,
              buttonParamsJson: p,
            },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_CATALOG:
        case r("WAWebInteractiveMessagesNativeFlowName").CATALOG_MESSAGE:
          return {
            name: "cta_catalog",
            index: t,
            data: {
              label: f.toString(),
              catalogUrl: g,
              businessPhoneNumber: _.business_phone_number,
              catalogProductId: _.catalog_product_id,
            },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_COPY_CODE:
          return {
            name: "cta_copy",
            index: t,
            data: { label: _.display_text, copyCode: _.copy_code },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_APP:
          return {
            name: "cta_app",
            index: t,
            data: { label: _.display_text, url: _.url, buttonParamsJson: p },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW:
          return o("WAWebGetGalaxyFlowCtaButton").getGalaxyFlowCtaButton(
            p,
            t,
            n,
          );
        case r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS: {
          var h = o("WAWebOrderStatusButton").parseOrderStatusButton(e);
          return h == null
            ? null
            : {
                name: "order_status",
                index: t,
                data: { label: d(h).toString(), orderStatusButton: h },
              };
        }
        case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER: {
          var y = o("WAWebPaymentReminder").parsePaymentReminderButton(e);
          return y == null
            ? null
            : {
                name: "payment_reminder",
                index: t,
                data: {
                  label: s._(/*BTDS*/ "Pay now").toString(),
                  paymentReminderInfo: y,
                },
              };
        }
        case r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION: {
          var C = o("WAWebBookingConfirmation").parseBookingConfirmationButton(
            e,
          );
          return C == null
            ? null
            : {
                name: "booking_confirmation",
                index: t,
                data: {
                  label: s._(/*BTDS*/ "View details").toString(),
                  bookingInfo: C,
                },
              };
        }
        case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST: {
          var b,
            v = o("WAWebBrPaymentRequest").parsePaymentRequestButton(e);
          return v == null
            ? null
            : {
                name: "payment_request",
                index: t,
                data: {
                  label: (b = _.display_text) != null ? b : "",
                  paymentRequestInfo: v,
                },
              };
        }
        case r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP: {
          var S = o(
            "WAWebInAppSignupPrompt",
          ).parseInAppSignupPromptButtonParams(p);
          if (S == null) break;
          var R = c().toString();
          return {
            name: "api_signup",
            index: t,
            data: { label: R, signupId: S.signupId },
          };
        }
        case r("WAWebInteractiveMessagesNativeFlowName").FORM_MESSAGE:
        case r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS:
        case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS:
        case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD:
        case r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK:
        case r("WAWebInteractiveMessagesNativeFlowName")
          .MESSAGE_WITH_LINK_STATUS:
        case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO:
        case r("WAWebInteractiveMessagesNativeFlowName").MIXED:
        case r("WAWebInteractiveMessagesNativeFlowName")
          .CALL_PERMISSION_REQUEST:
        case r("WAWebInteractiveMessagesNativeFlowName").MENU_OPTIONS:
        case r("WAWebInteractiveMessagesNativeFlowName").A2UI_REPLY_ACTION:
          break;
        case r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP: {
          var L = o("WAWebInAppSignupConfirmation").parseInAppSignupPromoCode(
            e.buttonParamsJson,
          );
          if (L != null)
            return {
              name: "cta_copy",
              index: t,
              data: {
                label: s._(/*BTDS*/ "Copy code").toString(),
                copyCode: L,
              },
            };
          break;
        }
      }
    }
    function c() {
      return o("WAWebSignupCTAExperiment").getSignupCTAExperiment() ===
        o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers
        ? s._(/*BTDS*/ "Get offers")
        : s._(/*BTDS*/ "Sign up");
    }
    function d(e) {
      return o("WAWebOrderStatus").shouldShowTrackingInfo(e)
        ? e.order.status === o("WAWebOrderStatus").OrderStatus.Complete ||
          e.order.status === o("WAWebOrderStatus").OrderStatus.Delivered
          ? s._(/*BTDS*/ "Delivery info")
          : s._(/*BTDS*/ "Track parcel")
        : s._(/*BTDS*/ "View order");
    }
    ((l.getNativeFlowCtasFromInteractiveMsg = e),
      (l.nativeFlowButtonToCtaButton = u));
  },
  226,
);
