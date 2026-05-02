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
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebOrderStatus",
    "WAWebOrderStatusButton",
    "WAWebPaymentReminder",
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
            var r = u(t, n, e.t);
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
          if (c != null) {
            var d =
                o("WAWebInAppSignupConfirmation").parseInAppSignupPromoCode(
                  l,
                ) != null,
              m = d
                ? s._(/*BTDS*/ "Redeem on website")
                : s._(/*BTDS*/ "Visit website");
            a.push({
              name: "cta_url",
              index: a.length,
              data: { label: m.toString(), url: c, merchantUrl: c },
            });
          }
        }
        if (a.length > 0) return a;
      }
      return null;
    }
    function u(e, t, n) {
      var a,
        i = o(
          "WAWebBizTemplateAndInteractiveMessagesUtils",
        ).getNativeFlowNameByButtonName(e.name);
      if (i == null) return null;
      var l = (a = e.buttonParamsJson) != null ? a : "",
        u;
      try {
        u = JSON.parse(l);
      } catch (e) {
        return null;
      }
      var d =
          u.catalog_product_id != null
            ? s._(/*BTDS*/ "View product")
            : s._(/*BTDS*/ "View catalog"),
        m =
          u.catalog_product_id != null
            ? o("WAWebCatalogShortLinkUtils").createProductLink(
                u.business_phone_number,
                u.catalog_product_id,
              )
            : o("WAWebCatalogShortLinkUtils").createCatalogLink(
                u.business_phone_number,
              );
      switch (i) {
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_URL:
          return {
            name: "cta_url",
            index: t,
            data: {
              label: u.display_text,
              url: u.url,
              merchantUrl: u.merchant_url,
            },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_CALL:
          return {
            name: "cta_call",
            index: t,
            data: { label: u.display_text, selectionId: u.id },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY:
          return {
            name: "quick_reply",
            index: t,
            data: {
              label: u.display_text,
              selectionId: u.id,
              disabled: u.disabled,
              buttonParamsJson: l,
            },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_CATALOG:
        case r("WAWebInteractiveMessagesNativeFlowName").CATALOG_MESSAGE:
          return {
            name: "cta_catalog",
            index: t,
            data: {
              label: d.toString(),
              catalogUrl: m,
              businessPhoneNumber: u.business_phone_number,
              catalogProductId: u.catalog_product_id,
            },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_COPY_CODE:
          return {
            name: "cta_copy",
            index: t,
            data: { label: u.display_text, copyCode: u.copy_code },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_APP:
          return {
            name: "cta_app",
            index: t,
            data: { label: u.display_text, url: u.url, buttonParamsJson: l },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW:
          return o("WAWebGetGalaxyFlowCtaButton").getGalaxyFlowCtaButton(
            l,
            t,
            n,
          );
        case r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS: {
          var p = o("WAWebOrderStatusButton").parseOrderStatusButton(e);
          return p == null
            ? null
            : {
                name: "order_status",
                index: t,
                data: { label: c(p).toString(), orderStatusButton: p },
              };
        }
        case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER: {
          var _ = o("WAWebPaymentReminder").parsePaymentReminderButton(e);
          return _ == null
            ? null
            : {
                name: "payment_reminder",
                index: t,
                data: {
                  label: s._(/*BTDS*/ "Pay now").toString(),
                  paymentReminderInfo: _,
                },
              };
        }
        case r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION: {
          var f = o("WAWebBookingConfirmation").parseBookingConfirmationButton(
            e,
          );
          return f == null
            ? null
            : {
                name: "booking_confirmation",
                index: t,
                data: {
                  label: s._(/*BTDS*/ "View details").toString(),
                  bookingInfo: f,
                },
              };
        }
        case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST: {
          var g,
            h = o("WAWebBrPaymentRequest").parsePaymentRequestButton(e);
          return h == null
            ? null
            : {
                name: "payment_request",
                index: t,
                data: {
                  label: (g = u.display_text) != null ? g : "",
                  paymentRequestInfo: h,
                },
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
        case r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP:
          break;
        case r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP: {
          var y = o("WAWebInAppSignupConfirmation").parseInAppSignupPromoCode(
            e.buttonParamsJson,
          );
          if (y != null)
            return {
              name: "cta_copy",
              index: t,
              data: {
                label: s._(/*BTDS*/ "Copy code").toString(),
                copyCode: y,
              },
            };
          break;
        }
      }
    }
    function c(e) {
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
