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
    function u(e, t, n) {
      var a,
        i,
        l,
        u = o(
          "WAWebBizTemplateAndInteractiveMessagesUtils",
        ).getNativeFlowNameByButtonName(e.name);
      if (u == null) return null;
      var d = (a = e.buttonParamsJson) != null ? a : "",
        m;
      try {
        m = JSON.parse(d);
      } catch (e) {
        return null;
      }
      var p =
          m.catalog_product_id != null
            ? s._(/*BTDS*/ "View product")
            : s._(/*BTDS*/ "View catalog"),
        _ =
          m.catalog_product_id != null
            ? o("WAWebCatalogShortLinkUtils").createProductLink(
                m.business_phone_number,
                m.catalog_product_id,
              )
            : o("WAWebCatalogShortLinkUtils").createCatalogLink(
                m.business_phone_number,
              );
      switch (u) {
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_URL:
          return {
            name: "cta_url",
            index: t,
            data: {
              label: (i = m.display_text) != null ? i : m.title,
              url: m.url,
              merchantUrl: m.merchant_url,
            },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_CALL:
          return {
            name: "cta_call",
            index: t,
            data: { label: m.display_text, selectionId: m.id },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY:
          return {
            name: "quick_reply",
            index: t,
            data: {
              label: (l = m.display_text) != null ? l : m.title,
              selectionId: m.id,
              disabled: m.disabled,
              buttonParamsJson: d,
            },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_CATALOG:
        case r("WAWebInteractiveMessagesNativeFlowName").CATALOG_MESSAGE:
          return {
            name: "cta_catalog",
            index: t,
            data: {
              label: p.toString(),
              catalogUrl: _,
              businessPhoneNumber: m.business_phone_number,
              catalogProductId: m.catalog_product_id,
            },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_COPY_CODE:
          return {
            name: "cta_copy",
            index: t,
            data: { label: m.display_text, copyCode: m.copy_code },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_APP:
          return {
            name: "cta_app",
            index: t,
            data: { label: m.display_text, url: m.url, buttonParamsJson: d },
          };
        case r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW:
          return o("WAWebGetGalaxyFlowCtaButton").getGalaxyFlowCtaButton(
            d,
            t,
            n,
          );
        case r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS: {
          var f = o("WAWebOrderStatusButton").parseOrderStatusButton(e);
          return f == null
            ? null
            : {
                name: "order_status",
                index: t,
                data: { label: c(f).toString(), orderStatusButton: f },
              };
        }
        case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER: {
          var g = o("WAWebPaymentReminder").parsePaymentReminderButton(e);
          return g == null
            ? null
            : {
                name: "payment_reminder",
                index: t,
                data: {
                  label: s._(/*BTDS*/ "Pay now").toString(),
                  paymentReminderInfo: g,
                },
              };
        }
        case r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION: {
          var h = o("WAWebBookingConfirmation").parseBookingConfirmationButton(
            e,
          );
          return h == null
            ? null
            : {
                name: "booking_confirmation",
                index: t,
                data: {
                  label: s._(/*BTDS*/ "View details").toString(),
                  bookingInfo: h,
                },
              };
        }
        case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST: {
          var y,
            C = o("WAWebBrPaymentRequest").parsePaymentRequestButton(e);
          return C == null
            ? null
            : {
                name: "payment_request",
                index: t,
                data: {
                  label: (y = m.display_text) != null ? y : "",
                  paymentRequestInfo: C,
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
        case r("WAWebInteractiveMessagesNativeFlowName").MENU_OPTIONS:
        case r("WAWebInteractiveMessagesNativeFlowName").A2UI_REPLY_ACTION:
          break;
        case r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP: {
          var b = o("WAWebInAppSignupConfirmation").parseInAppSignupPromoCode(
            e.buttonParamsJson,
          );
          if (b != null)
            return {
              name: "cta_copy",
              index: t,
              data: {
                label: s._(/*BTDS*/ "Copy code").toString(),
                copyCode: b,
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
