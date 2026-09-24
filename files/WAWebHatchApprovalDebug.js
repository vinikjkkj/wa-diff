__d(
  "WAWebHatchApprovalDebug",
  ["WAWebHandleHatchMetadataSync"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "hitl.approval_record",
      s = "notification",
      u = 1;
    function c() {
      return "debug-approval-" + u++;
    }
    function d(e) {
      var t,
        n = (t = e == null ? void 0 : e.approvalId) != null ? t : c();
      return (I(n, null, e), n);
    }
    function m(e, t) {
      (t === void 0 && (t = "allow_once"), I(e, t));
    }
    function p(e) {
      var t,
        n,
        r,
        a,
        i,
        l = (t = e == null ? void 0 : e.subjectId) != null ? t : c();
      (e == null ? void 0 : e.withApproval) === !0 && I(l, null);
      var u = {
        type: "event",
        requestId: null,
        event: {
          seq: null,
          timestamp: null,
          index: s,
          opKey: s,
          operation: "SET",
          payload: babelHelpers.extends(
            {
              deduplication_key:
                (n = e == null ? void 0 : e.deduplicationKey) != null
                  ? n
                  : "debug-notification-" + l,
              channel_notification_type:
                (r = e == null ? void 0 : e.notificationType) != null
                  ? r
                  : "approval_request",
              source_subject_id: l,
              presentation: {
                title:
                  (a = e == null ? void 0 : e.title) != null
                    ? a
                    : "Approval needed",
                body:
                  (i = e == null ? void 0 : e.body) != null
                    ? i
                    : "Hatch wants to send an email in Gmail",
              },
            },
            (e == null ? void 0 : e.expiresAtMs) != null
              ? { notification_expires_at_ms: e.expiresAtMs }
              : null,
          ),
          sessionId: null,
        },
      };
      return (
        o("WAWebHandleHatchMetadataSync").handleHatchMetadataSync(
          u,
          "debug-" + l,
        ),
        l
      );
    }
    var _ = [
        {
          payment_method: "stripe_link",
          payment_id: "debug-pm-visa",
          payment_method_label: "Chase Sapphire",
          card_brand: "visa",
          card_last4: "4242",
        },
        {
          payment_method: "stripe_link",
          payment_id: "debug-pm-mastercard",
          payment_method_label: "Amazon Rewards",
          card_brand: "mastercard",
          card_last4: "5678",
        },
        {
          payment_method: "stripe_link",
          payment_id: "debug-pm-amex",
          payment_method_label: "Amex Gold",
          card_brand: "amex",
          card_last4: "9876",
        },
        {
          payment_method: "shop_pay",
          payment_id: "debug-pm-discover",
          payment_method_label: "Discover it",
          card_brand: "discover",
          card_last4: "1117",
        },
        {
          payment_method: "shop_pay",
          payment_id: "debug-pm-unnamed",
          payment_method_label: "",
          card_brand: "visa",
          card_last4: "3333",
        },
      ],
      f = {
        payment_id: "debug-pm-elsewhere",
        payment_method_label: "Card on another device",
        card_brand: "jcb",
        card_last4: "7777",
      },
      g = [
        {
          name: "Nike Air Zoom Pegasus 41",
          quantity: 1,
          unit_amount: "$129.00",
        },
        {
          name: "Merino wool socks (3-pack)",
          quantity: 2,
          unit_amount: "$24.00",
        },
        {
          name: "Insulated water bottle, 750ml",
          quantity: 1,
          unit_amount: "$18.50",
        },
        { name: "Reflective running cap", quantity: 1, unit_amount: "$22.00" },
      ],
      h = 24,
      y = 60;
    function C(e) {
      return Array.from({ length: e }, function (e, t) {
        var n = _[t % _.length];
        if (t < _.length) return n;
        var r = Math.floor(t / _.length);
        return babelHelpers.extends({}, n, {
          payment_id: n.payment_id + "-" + r,
          payment_method_label:
            n.payment_method_label === ""
              ? ""
              : n.payment_method_label + " " + (r + 1),
          card_last4: String(1e3 + t).slice(-4),
        });
      });
    }
    function b(e) {
      return Array.from({ length: e }, function (e, t) {
        var n = g[t % g.length];
        return t < g.length
          ? n
          : babelHelpers.extends({}, n, {
              name: n.name + " (" + (Math.floor(t / g.length) + 1) + ")",
            });
      });
    }
    function v(e) {
      var t = e != null ? e : {},
        n = t.cards,
        r = n === void 0 ? 2 : n,
        o = t.funding,
        a = o === void 0 ? "offered" : o,
        i = t.items,
        l = i === void 0 ? 3 : i,
        s = t.kind,
        u = s === void 0 ? "browser" : s,
        d = c(),
        m = C(k(r, 0, h)),
        p = a === "unmatched" ? f : S(m[0]),
        _ = u === "shopify" ? L(m, p, l) : R(m, p);
      return (E(d, u, _), d);
    }
    function S(e) {
      return e == null
        ? {}
        : {
            payment_id: e.payment_id,
            payment_method_label: e.payment_method_label,
            card_brand: e.card_brand,
            card_last4: e.card_last4,
          };
    }
    function R(e, t) {
      return {
        type: "browser_checkout",
        browser_checkout_payload: babelHelpers.extends(
          {
            merchant_url: "https://shop.example.com/checkout",
            amount: "$194.18",
            currency: "USD",
            card_expires_in_ms: 720 * 60 * 1e3,
            network_token_eligible: !0,
            tab: {
              title: "Checkout \u2014 Example Shop",
              domain: "shop.example.com",
            },
          },
          t,
          { payment_options: e },
        ),
      };
    }
    function L(e, t, n) {
      var r = b(k(n, 1, y));
      return {
        type: "shopify_checkout",
        shopify_checkout_payload: babelHelpers.extends(
          {
            merchant: {
              name: "Example Running Co.",
              url: "https://example.com",
            },
            items: r,
            delivery: {
              label: "Standard shipping",
              estimated_delivery: "3\u20135 days",
            },
            shipping_address: {
              street1: "1 Hacker Way",
              city: "Menlo Park",
              state: "CA",
              postal_code: "94025",
              country: "USA",
            },
            contact: {
              email: "buyer@example.com",
              phone_number: "+1 650 555 0100",
            },
            amount: "$194.18",
            currency: "USD",
            totals: [
              { display_text: "Subtotal", amount: "$177.00", currency: "USD" },
              { display_text: "Shipping", amount: "$5.00", currency: "USD" },
              { display_text: "Tax", amount: "$12.18", currency: "USD" },
              {
                display_text: "Total",
                amount: "$194.18",
                currency: "USD",
                type: "total",
              },
            ],
            legal_links: [
              { label: "Refund policy", url: "https://example.com/refunds" },
              { label: "Terms of service", url: "https://example.com/terms" },
            ],
          },
          t,
          { payment_options: e },
        ),
      };
    }
    function E(t, n, r) {
      var a = n === "shopify" ? "Example Running Co." : "Example Shop",
        i = {
          type: "event",
          requestId: null,
          event: {
            seq: null,
            timestamp: null,
            index: e,
            opKey: e,
            operation: "SET",
            payload: {
              lifecycle: "pending",
              record: {
                approval_id: t,
                is_exclusive: !0,
                display: {
                  permission_question: {
                    text: "{assistant} wants to place an order at " + a,
                  },
                  purpose_summary: "Place an order at " + a,
                  rich_explanation:
                    "You asked Hatch to complete this purchase at " + a + ".",
                  presentation_kind: "rich",
                },
                payload: r,
                decision_options: [
                  { kind: "allow_once", label_text: "Confirm purchase" },
                  { kind: "deny", label_text: "Cancel" },
                ],
              },
            },
            sessionId: null,
          },
        };
      o("WAWebHandleHatchMetadataSync").handleHatchMetadataSync(
        i,
        "debug-" + t,
      );
    }
    function k(e, t, n) {
      return Math.max(t, Math.min(Math.floor(e), n));
    }
    function I(t, n, r) {
      var a,
        i,
        l,
        s = {
          type: "event",
          requestId: null,
          event: {
            seq: null,
            timestamp: null,
            index: e,
            opKey: e,
            operation: "SET",
            payload: {
              lifecycle: n != null ? "decided" : "pending",
              record: babelHelpers.extends(
                { approval_id: t },
                n != null ? { decision: n } : null,
                {
                  display: {
                    permission_question: {
                      text:
                        (a = r == null ? void 0 : r.permissionQuestion) != null
                          ? a
                          : "{assistant} wants to send an email in Gmail",
                    },
                    purpose_summary:
                      (i = r == null ? void 0 : r.purposeSummary) != null
                        ? i
                        : "Send an email on your behalf",
                    rich_explanation:
                      (l = r == null ? void 0 : r.richExplanation) != null
                        ? l
                        : "Create an email draft to your teammate",
                    presentation_kind: "generic",
                  },
                  payload: { type: "connector" },
                  decision_options: [
                    { kind: "allow_once", label_text: "Allow once" },
                    { kind: "allow_always", label_text: "Always allow" },
                    { kind: "deny", label_text: "Deny" },
                  ],
                },
              ),
            },
            sessionId: null,
          },
        };
      o("WAWebHandleHatchMetadataSync").handleHatchMetadataSync(
        s,
        "debug-" + t,
      );
    }
    ((l.nextDebugApprovalId = c),
      (l.debugInjectHatchApprovalRequest = d),
      (l.debugResolveHatchApproval = m),
      (l.debugInjectHatchNotification = p),
      (l.debugInjectHatchCheckout = v));
  },
  98,
);
