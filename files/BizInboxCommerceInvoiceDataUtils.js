__d(
  "BizInboxCommerceInvoiceDataUtils",
  ["useBizInboxCommerceInvoiceData"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return {
        showInComposer: !1,
        showConfirmPayment: !1,
        showRequestPayment: !1,
        showPaymentOnboarding: !1,
        commerceInvoiceButtonIcon: "currency",
      };
    }
    function s(e) {
      var t, n, r, a, i;
      return o(
        "useBizInboxCommerceInvoiceData",
      ).parseBizInboxCommerceInvoiceDataImpl({
        show_commerce_invoice_button_in_composer:
          (t = e.xfb_biz_inbox_unified_thread_list) == null ||
          (t = t.selected_thread) == null ||
          (t = t.selected_thread_biz_inbox_feature_config) == null ||
          (t = t.gating_config) == null
            ? void 0
            : t.show_commerce_invoice_button_in_composer,
        show_confirm_payment:
          (n = e.xfb_biz_inbox_unified_thread_list) == null ||
          (n = n.selected_thread) == null ||
          (n = n.selected_thread_biz_inbox_feature_config) == null ||
          (n = n.commerce_invoice_button_config) == null
            ? void 0
            : n.show_confirm_payment,
        show_request_payment:
          (r = e.xfb_biz_inbox_unified_thread_list) == null ||
          (r = r.selected_thread) == null ||
          (r = r.selected_thread_biz_inbox_feature_config) == null ||
          (r = r.commerce_invoice_button_config) == null
            ? void 0
            : r.show_request_payment,
        show_payment_onboarding:
          (a = e.xfb_biz_inbox_unified_thread_list) == null ||
          (a = a.selected_thread) == null ||
          (a = a.selected_thread_biz_inbox_feature_config) == null ||
          (a = a.commerce_invoice_button_config) == null
            ? void 0
            : a.show_payment_onboarding,
        commerce_invoice_button_icon:
          (i = e.xfb_biz_inbox_unified_thread_list) == null ||
          (i = i.selected_thread) == null ||
          (i = i.selected_thread_biz_inbox_feature_config) == null ||
          (i = i.commerce_invoice_button_config) == null
            ? void 0
            : i.commerce_invoice_button_icon,
      });
    }
    ((l.getDefaultBizInboxCommerceInvoiceData = e),
      (l.parseBizInboxCommerceInvoiceData = s));
  },
  98,
);
