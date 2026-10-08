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
    "WAWebMuseCtaLinkOverride",
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
            var r = u({
              button: t,
              index: n,
              messageNativeFlowName: e.nativeFlowName,
              timestamp: e.t,
            });
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
    function u(e) {
      var t,
        n,
        a,
        i = e.button,
        l = e.index,
        u = e.messageNativeFlowName,
        m = e.timestamp,
        p = o(
          "WAWebBizTemplateAndInteractiveMessagesUtils",
        ).getNativeFlowNameByButtonName(i.name);
      if (
        p == null ||
        (p === r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP &&
          u !== r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP)
      )
        return null;
      var _ = (t = i.buttonParamsJson) != null ? t : "",
        f;
      try {
        f = JSON.parse(_);
      } catch (e) {
        return null;
      }
      var g =
          f.catalog_product_id != null
            ? s._(/*BTDS*/ "View product")
            : s._(/*BTDS*/ "View catalog"),
        h =
          f.catalog_product_id != null
            ? o("WAWebCatalogShortLinkUtils").createProductLink(
                f.business_phone_number,
                f.catalog_product_id,
              )
            : o("WAWebCatalogShortLinkUtils").createCatalogLink(
                f.business_phone_number,
              );
      switch (p) {
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_URL:
          return {
            name: "cta_url",
            index: l,
            data: {
              label: (n = f.display_text) != null ? n : f.title,
              url: o("WAWebMuseCtaLinkOverride").overrideCtaUrlIfNeeded(f.url),
              merchantUrl: f.merchant_url,
            },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_CALL:
          return {
            name: "cta_call",
            index: l,
            data: { label: f.display_text, selectionId: f.id },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY:
          return {
            name: "quick_reply",
            index: l,
            data: {
              label: (a = f.display_text) != null ? a : f.title,
              selectionId: f.id,
              disabled: f.disabled,
              buttonParamsJson: _,
            },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_CATALOG:
        case r("WAWebInteractiveMessagesNativeFlowName").CATALOG_MESSAGE:
          return {
            name: "cta_catalog",
            index: l,
            data: {
              label: g.toString(),
              catalogUrl: h,
              businessPhoneNumber: f.business_phone_number,
              catalogProductId: f.catalog_product_id,
            },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_COPY_CODE:
          return {
            name: "cta_copy",
            index: l,
            data: { label: f.display_text, copyCode: f.copy_code },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_APP:
          return {
            name: "cta_app",
            index: l,
            data: { label: f.display_text, url: f.url, buttonParamsJson: _ },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW:
          return o("WAWebGetGalaxyFlowCtaButton").getGalaxyFlowCtaButton(
            _,
            l,
            m,
          );
        case r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS: {
          var y = o("WAWebOrderStatusButton").parseOrderStatusButton(i);
          return y == null
            ? null
            : {
                name: "order_status",
                index: l,
                data: { label: d(y).toString(), orderStatusButton: y },
              };
        }
        case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER: {
          var C = o("WAWebPaymentReminder").parsePaymentReminderButton(i);
          return C == null
            ? null
            : {
                name: "payment_reminder",
                index: l,
                data: {
                  label: s._(/*BTDS*/ "Pay now").toString(),
                  paymentReminderInfo: C,
                },
              };
        }
        case r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION: {
          var b = o("WAWebBookingConfirmation").parseBookingConfirmationButton(
            i,
          );
          return b == null
            ? null
            : {
                name: "booking_confirmation",
                index: l,
                data: {
                  label: s._(/*BTDS*/ "View details").toString(),
                  bookingInfo: b,
                },
              };
        }
        case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST: {
          var v,
            S = o("WAWebBrPaymentRequest").parsePaymentRequestButton(i);
          return S == null
            ? null
            : {
                name: "payment_request",
                index: l,
                data: {
                  label: (v = f.display_text) != null ? v : "",
                  paymentRequestInfo: S,
                },
              };
        }
        case r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP: {
          var R = o(
            "WAWebInAppSignupPrompt",
          ).parseInAppSignupPromptButtonParams(_);
          if (R == null) break;
          var L = c().toString();
          return {
            name: "api_signup",
            index: l,
            data: { label: L, signupId: R.signupId },
          };
        }
        case r("WAWebInteractiveMessagesNativeFlowName").OFFER_PAYMENT_ACCOUNT:
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
          var E = o("WAWebInAppSignupConfirmation").parseInAppSignupPromoCode(
            i.buttonParamsJson,
          );
          if (E != null)
            return {
              name: "cta_copy",
              index: l,
              data: {
                label: s._(/*BTDS*/ "Copy code").toString(),
                copyCode: E,
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
