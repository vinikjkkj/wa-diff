__d(
  "WAWebHatchApprovalRecordDecoder",
  [
    "WALogger",
    "WAWebHatchJsonReaders",
    "WAWebHatchSecureMediaDecoder",
    "WAWebURLUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "pending",
      c = 16,
      d = 9,
      m = "rich";
    function p(t) {
      var n = f(t),
        r = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "approval_id");
      if (o("WAWebHatchJsonReaders").isBlankText(r))
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-approval: dropping record with no approval id",
                ])),
            )
            .sendLogs("hatch-approval-no-approval-id"),
          null
        );
      var a = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "decision"),
        i = o("WAWebHatchJsonReaders").readStringOrEmpty(t, "lifecycle"),
        l = o("WAWebHatchJsonReaders").isBlankText(i)
          ? o("WAWebHatchJsonReaders").readStringOrEmpty(n, "status")
          : i;
      return !o("WAWebHatchJsonReaders").isBlankText(a) ||
        (!o("WAWebHatchJsonReaders").isBlankText(l) && l !== u)
        ? {
            approvalId: r,
            resolvedDecision: o("WAWebHatchJsonReaders").isBlankText(a) ? l : a,
            record: null,
          }
        : {
            approvalId: r,
            resolvedDecision: null,
            record: g(
              n,
              r,
              _(o("WAWebHatchJsonReaders").readField(t, "secure_media")),
            ),
          };
    }
    function _(e) {
      var t = new Map();
      if (e == null || typeof e != "object") return t;
      for (var n of Object.keys(e))
        o("WAWebHatchJsonReaders").isBlankText(n) ||
          t.set(
            n,
            o("WAWebHatchSecureMediaDecoder").decodeHatchSecureMedia(
              o("WAWebHatchJsonReaders").readField(e, n),
            ),
          );
      return t;
    }
    function f(e) {
      var t,
        n,
        r =
          (t =
            (n = o("WAWebHatchJsonReaders").readObject(e, "record")) != null
              ? n
              : o("WAWebHatchJsonReaders").readObject(e, "approval_record")) !=
          null
            ? t
            : o("WAWebHatchJsonReaders").readObject(e, "approval");
      return r != null ? r : e;
    }
    function g(e, t, n) {
      var r = x(o("WAWebHatchJsonReaders").readArray(e, "decision_options"));
      if (r.length === 0)
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-approval: dropping record without decision options approvalId=",
                  "",
                ])),
              t,
            )
            .sendLogs("hatch-approval-no-decision-options"),
          null
        );
      var a = o("WAWebHatchJsonReaders").readField(e, "display"),
        i = o("WAWebHatchJsonReaders").readField(e, "payload"),
        l = o("WAWebHatchJsonReaders").readStringOrEmpty(i, "type"),
        u = P(l),
        c =
          o("WAWebHatchJsonReaders").readStringOrEmpty(
            a,
            "presentation_kind",
          ) === m;
      return babelHelpers.extends(
        {
          approvalId: t,
          isExclusive:
            o("WAWebHatchJsonReaders").readBool(e, "is_exclusive") === !0,
          permissionQuestion: o("WAWebHatchJsonReaders").readStringOrEmpty(
            o("WAWebHatchJsonReaders").readField(a, "permission_question"),
            "text",
          ),
          purposeSummary: o("WAWebHatchJsonReaders").readStringOrEmpty(
            a,
            "purpose_summary",
          ),
          richExplanation: o("WAWebHatchJsonReaders").readStringOrEmpty(
            a,
            "rich_explanation",
          ),
          detailRows: $(o("WAWebHatchJsonReaders").readArray(a, "detail_rows")),
          payloadType: u,
          rawPayloadType: l,
          iconUrl: o("WAWebHatchJsonReaders").readStringOrEmpty(a, "icon_url"),
          decisionOptions: r,
        },
        y(c ? i : null, u),
        h(
          c && u === "shopify_checkout" ? i : null,
          o("WAWebHatchJsonReaders").readStringOrEmpty(a, "icon_url"),
        ),
        { secureMedia: n },
      );
    }
    function h(e, t) {
      var n = e != null ? C(e, t) : null;
      return n != null ? { shopifyCheckout: n } : {};
    }
    function y(e, t) {
      var n = e != null ? k(e, t) : null;
      return n != null ? { browserCheckout: n } : {};
    }
    function C(e, t) {
      var n,
        r = o("WAWebHatchJsonReaders").readObject(
          e,
          "shopify_checkout_payload",
        );
      if (r == null) return null;
      var a = o("WAWebHatchJsonReaders").readField(r, "merchant"),
        i = o("WAWebHatchJsonReaders").readField(r, "delivery"),
        l = o("WAWebHatchJsonReaders").readField(r, "contact");
      return {
        merchantName: o("WAWebHatchJsonReaders").readStringOrEmpty(a, "name"),
        merchantUrl: o("WAWebHatchJsonReaders").readStringOrEmpty(a, "url"),
        merchantIconUrl: E(
          o("WAWebHatchJsonReaders").readStringOrEmpty(a, "icon_url"),
          t,
        ),
        items: b(o("WAWebHatchJsonReaders").readArray(r, "items")),
        deliveryLabel: o("WAWebHatchJsonReaders").readStringOrEmpty(i, "label"),
        estimatedDelivery: o("WAWebHatchJsonReaders").readStringOrEmpty(
          i,
          "estimated_delivery",
        ),
        shippingAddress: R(
          o("WAWebHatchJsonReaders").readField(r, "shipping_address"),
        ),
        contactEmail: o("WAWebHatchJsonReaders").readStringOrEmpty(l, "email"),
        contactPhoneNumber: o("WAWebHatchJsonReaders").readStringOrEmpty(
          l,
          "phone_number",
        ),
        paymentMethodLabel: o("WAWebHatchJsonReaders").readStringOrEmpty(
          r,
          "payment_method_label",
        ),
        cardBrand: o("WAWebHatchJsonReaders").readStringOrEmpty(
          r,
          "card_brand",
        ),
        cardLast4: o("WAWebHatchJsonReaders").readStringOrEmpty(
          r,
          "card_last4",
        ),
        amount: o("WAWebHatchJsonReaders").readStringOrEmpty(r, "amount"),
        currency: o("WAWebHatchJsonReaders").readStringOrEmpty(r, "currency"),
        totals: v(o("WAWebHatchJsonReaders").readArray(r, "totals")),
        cardExpiresInMs:
          (n = o("WAWebHatchJsonReaders").readNumber(
            r,
            "card_expires_in_ms",
          )) != null
            ? n
            : 0,
        paymentId: I(r),
        paymentOptions: T(
          o("WAWebHatchJsonReaders").readArray(r, "payment_options"),
        ),
        legalLinks: S(o("WAWebHatchJsonReaders").readArray(r, "legal_links")),
      };
    }
    function b(e) {
      if (e == null) return [];
      var t = [];
      for (var n of e) {
        var r = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "name");
        o("WAWebHatchJsonReaders").isBlankText(r) ||
          t.push({
            name: r,
            imageUrl: o("WAWebHatchJsonReaders").readStringOrEmpty(
              n,
              "image_url",
            ),
            quantity: o("WAWebHatchJsonReaders").readStringOrEmpty(
              n,
              "quantity",
            ),
            unitAmount: o("WAWebHatchJsonReaders").readStringOrEmpty(
              n,
              "unit_amount",
            ),
          });
      }
      return t;
    }
    function v(e) {
      if (e == null) return [];
      var t = [];
      for (var n of e) {
        var r = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "display_text"),
          a = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "amount");
        o("WAWebHatchJsonReaders").isBlankText(r) ||
          o("WAWebHatchJsonReaders").isBlankText(a) ||
          t.push({
            displayText: r,
            amount: a,
            currency: o("WAWebHatchJsonReaders").readStringOrEmpty(
              n,
              "currency",
            ),
            type: o("WAWebHatchJsonReaders")
              .readStringOrEmpty(n, "type")
              .trim()
              .toLowerCase(),
          });
      }
      return t;
    }
    function S(e) {
      if (e == null) return [];
      var t = [];
      for (var n of e) {
        var a = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "label"),
          i = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "url");
        !o("WAWebHatchJsonReaders").isBlankText(a) &&
          r("WAWebURLUtils").isHttp(i) === !0 &&
          t.push({ label: a, url: i });
      }
      return t;
    }
    function R(e) {
      var t,
        n = L(
          [
            (t = o("WAWebHatchJsonReaders")).readStringOrEmpty(e, "city"),
            t.readStringOrEmpty(e, "state"),
            t.readStringOrEmpty(e, "postal_code"),
          ],
          " ",
        );
      return L(
        [
          t.readStringOrEmpty(e, "street1"),
          t.readStringOrEmpty(e, "street2"),
          n,
          t.readStringOrEmpty(e, "country"),
        ],
        ", ",
      );
    }
    function L(e, t) {
      return e
        .map(function (e) {
          return e.trim();
        })
        .filter(function (e) {
          return e !== "";
        })
        .join(t);
    }
    function E(e, t) {
      return o("WAWebHatchJsonReaders").isBlankText(e) ? t : e;
    }
    function k(e, t) {
      var n,
        r =
          t === "browser_checkout"
            ? "browser_checkout_payload"
            : t === "stripe_link_checkout"
              ? "stripe_link_checkout_payload"
              : null;
      if (r == null) return null;
      var a = o("WAWebHatchJsonReaders").readObject(e, r);
      if (a == null) return null;
      var i = o("WAWebHatchJsonReaders").readField(a, "tab");
      return {
        merchantUrl: o("WAWebHatchJsonReaders").readStringOrEmpty(
          a,
          "merchant_url",
        ),
        paymentMethodLabel: o("WAWebHatchJsonReaders").readStringOrEmpty(
          a,
          "payment_method_label",
        ),
        cardBrand: o("WAWebHatchJsonReaders").readStringOrEmpty(
          a,
          "card_brand",
        ),
        cardLast4: o("WAWebHatchJsonReaders").readStringOrEmpty(
          a,
          "card_last4",
        ),
        amount: o("WAWebHatchJsonReaders").readStringOrEmpty(a, "amount"),
        currency: o("WAWebHatchJsonReaders").readStringOrEmpty(a, "currency"),
        cardExpiresInMs:
          (n = o("WAWebHatchJsonReaders").readNumber(
            a,
            "card_expires_in_ms",
          )) != null
            ? n
            : 0,
        networkTokenEligible: o("WAWebHatchJsonReaders").readBool(
          a,
          "network_token_eligible",
        ),
        tabTitle: o("WAWebHatchJsonReaders").readStringOrEmpty(i, "title"),
        tabDomain: o("WAWebHatchJsonReaders").readStringOrEmpty(i, "domain"),
        screenshot: D(o("WAWebHatchJsonReaders").readField(a, "screenshot")),
        paymentId: I(a),
        paymentOptions: T(
          o("WAWebHatchJsonReaders").readArray(a, "payment_options"),
        ),
      };
    }
    function I(e) {
      var t = o("WAWebHatchJsonReaders")
        .readStringOrEmpty(
          o("WAWebHatchJsonReaders").readField(e, "payment_selection"),
          "payment_id",
        )
        .trim();
      return t !== ""
        ? t
        : o("WAWebHatchJsonReaders").readStringOrEmpty(e, "payment_id").trim();
    }
    function T(e) {
      if (e == null) return [];
      var t = [];
      for (var n of e) {
        var r = o("WAWebHatchJsonReaders")
            .readStringOrEmpty(n, "payment_method")
            .trim(),
          a = o("WAWebHatchJsonReaders")
            .readStringOrEmpty(n, "payment_id")
            .trim();
        r === "" ||
          a === "" ||
          t.push({
            paymentMethod: r,
            paymentId: a,
            paymentMethodLabel: o("WAWebHatchJsonReaders")
              .readStringOrEmpty(n, "payment_method_label")
              .trim(),
            cardBrand: o("WAWebHatchJsonReaders")
              .readStringOrEmpty(n, "card_brand")
              .trim(),
            cardLast4: o("WAWebHatchJsonReaders")
              .readStringOrEmpty(n, "card_last4")
              .trim(),
          });
      }
      return t;
    }
    function D(e) {
      var t,
        n,
        r = o("WAWebHatchJsonReaders").readStringOrEmpty(e, "url");
      if (o("WAWebHatchJsonReaders").isBlankText(r)) return null;
      var a =
          (t = o("WAWebHatchJsonReaders").readNumber(e, "width")) != null
            ? t
            : 0,
        i =
          (n = o("WAWebHatchJsonReaders").readNumber(e, "height")) != null
            ? n
            : 0,
        l = a > 0 && i > 0;
      return { url: r, width: l ? a : c, height: l ? i : d };
    }
    function x(e) {
      if (e == null) return [];
      var t = [];
      for (var n of e) {
        var r = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "kind"),
          a = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "label_text");
        o("WAWebHatchJsonReaders").isBlankText(r) ||
          o("WAWebHatchJsonReaders").isBlankText(a) ||
          t.push({
            kind: r,
            labelText: a,
            alwaysScope: o("WAWebHatchJsonReaders").readStringOrEmpty(
              o("WAWebHatchJsonReaders").readField(n, "label"),
              "scope",
            ),
          });
      }
      return t;
    }
    function $(e) {
      if (e == null) return [];
      var t = [];
      for (var n of e) {
        var r = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "label"),
          a = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "value");
        !o("WAWebHatchJsonReaders").isBlankText(r) &&
          !o("WAWebHatchJsonReaders").isBlankText(a) &&
          t.push({ label: r, value: a });
      }
      return t;
    }
    function P(e) {
      return e === "connector"
        ? "connector"
        : e === "network"
          ? "network"
          : e === "device"
            ? "device"
            : e === "browser_action"
              ? "browser_action"
              : e === "browser_checkout"
                ? "browser_checkout"
                : e === "stripe_link_checkout"
                  ? "stripe_link_checkout"
                  : e === "shopify_checkout"
                    ? "shopify_checkout"
                    : e === "outgoing_media"
                      ? "outgoing_media"
                      : "unknown";
    }
    l.decodeHatchApprovalRecordEvent = p;
  },
  98,
);
