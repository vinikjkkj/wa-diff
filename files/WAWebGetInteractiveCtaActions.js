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
      return e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE
        ? null
        : u({
            interactivePayload: e.interactivePayload,
            interactiveType: e.interactiveType,
            nativeFlowName: e.nativeFlowName,
            t: e.t,
            type: e.type,
          });
    }
    function u(e) {
      var t = e.interactivePayload,
        n = e.interactiveType,
        a = e.nativeFlowName,
        i = e.t,
        l = e.type;
      if (
        l === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        n === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
        a != null &&
        o(
          "WAWebBizTemplateAndInteractiveMessagesUtils",
        ).supportedNativeFlowButtonNamesForInteractiveMsg.includes(a) &&
        (t == null ? void 0 : t.buttons) != null
      ) {
        var u = [];
        if (
          (t.buttons.forEach(function (e, t) {
            var n = c({
              button: e,
              index: t,
              messageNativeFlowName: a,
              timestamp: i,
            });
            n != null && u.push(n);
          }),
          a === r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP &&
            t.buttons.length > 0)
        ) {
          var d,
            m = (d = t.buttons[0]) == null ? void 0 : d.buttonParamsJson,
            p = o("WAWebInAppSignupConfirmation").parseInAppSignupWebsiteUrl(m);
          p != null &&
            u.push({
              name: "cta_url",
              index: u.length,
              data: {
                label: s._(/*BTDS*/ "Visit website").toString(),
                url: p,
                merchantUrl: p,
              },
            });
        }
        if (u.length > 0) return u;
      }
      return null;
    }
    function c(e) {
      var t,
        n,
        a,
        i = e.button,
        l = e.index,
        u = e.messageNativeFlowName,
        c = e.timestamp,
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
            c,
          );
        case r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS: {
          var y = o("WAWebOrderStatusButton").parseOrderStatusButton(i);
          return y == null
            ? null
            : {
                name: "order_status",
                index: l,
                data: { label: m(y).toString(), orderStatusButton: y },
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
          var L = d().toString();
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
        case r("WAWebInteractiveMessagesNativeFlowName").BR_PAYMENT_STATE:
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
    function d() {
      return o("WAWebSignupCTAExperiment").getSignupCTAExperiment() ===
        o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers
        ? s._(/*BTDS*/ "Get offers")
        : s._(/*BTDS*/ "Sign up");
    }
    function m(e) {
      return o("WAWebOrderStatus").shouldShowTrackingInfo(e)
        ? e.order.status === o("WAWebOrderStatus").OrderStatus.Complete ||
          e.order.status === o("WAWebOrderStatus").OrderStatus.Delivered
          ? s._(/*BTDS*/ "Delivery info")
          : s._(/*BTDS*/ "Track parcel")
        : s._(/*BTDS*/ "View order");
    }
    ((l.getNativeFlowCtasFromInteractiveMsg = e),
      (l.getNativeFlowCtasFor = u),
      (l.nativeFlowButtonToCtaButton = c));
  },
  226,
);
