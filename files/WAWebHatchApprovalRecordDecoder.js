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
      c = "rich";
    function d(t) {
      var n = p(t),
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
            record: _(
              n,
              r,
              m(o("WAWebHatchJsonReaders").readField(t, "secure_media")),
            ),
          };
    }
    function m(e) {
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
    function p(e) {
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
    function _(e, t, n) {
      var r = E(o("WAWebHatchJsonReaders").readArray(e, "decision_options"));
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
        l = I(o("WAWebHatchJsonReaders").readStringOrEmpty(i, "type")),
        u =
          o("WAWebHatchJsonReaders").readStringOrEmpty(
            a,
            "presentation_kind",
          ) === c;
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
          detailRows: k(o("WAWebHatchJsonReaders").readArray(a, "detail_rows")),
          payloadType: l,
          iconUrl: o("WAWebHatchJsonReaders").readStringOrEmpty(a, "icon_url"),
          decisionOptions: r,
        },
        g(u ? i : null, l),
        f(
          u && l === "shopify_checkout" ? i : null,
          o("WAWebHatchJsonReaders").readStringOrEmpty(a, "icon_url"),
        ),
        { secureMedia: n },
      );
    }
    function f(e, t) {
      var n = e != null ? h(e, t) : null;
      return n != null ? { shopifyCheckout: n } : {};
    }
    function g(e, t) {
      var n = e != null ? L(e, t) : null;
      return n != null ? { browserCheckout: n } : {};
    }
    function h(e, t) {
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
        merchantIconUrl: R(
          o("WAWebHatchJsonReaders").readStringOrEmpty(a, "icon_url"),
          t,
        ),
        items: y(o("WAWebHatchJsonReaders").readArray(r, "items")),
        deliveryLabel: o("WAWebHatchJsonReaders").readStringOrEmpty(i, "label"),
        estimatedDelivery: o("WAWebHatchJsonReaders").readStringOrEmpty(
          i,
          "estimated_delivery",
        ),
        shippingAddress: v(
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
        totals: C(o("WAWebHatchJsonReaders").readArray(r, "totals")),
        cardExpiresInMs:
          (n = o("WAWebHatchJsonReaders").readNumber(
            r,
            "card_expires_in_ms",
          )) != null
            ? n
            : 0,
        legalLinks: b(o("WAWebHatchJsonReaders").readArray(r, "legal_links")),
      };
    }
    function y(e) {
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
    function C(e) {
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
    function b(e) {
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
    function v(e) {
      var t,
        n = S(
          [
            (t = o("WAWebHatchJsonReaders")).readStringOrEmpty(e, "city"),
            t.readStringOrEmpty(e, "state"),
            t.readStringOrEmpty(e, "postal_code"),
          ],
          " ",
        );
      return S(
        [
          t.readStringOrEmpty(e, "street1"),
          t.readStringOrEmpty(e, "street2"),
          n,
          t.readStringOrEmpty(e, "country"),
        ],
        ", ",
      );
    }
    function S(e, t) {
      return e
        .map(function (e) {
          return e.trim();
        })
        .filter(function (e) {
          return e !== "";
        })
        .join(t);
    }
    function R(e, t) {
      return o("WAWebHatchJsonReaders").isBlankText(e) ? t : e;
    }
    function L(e, t) {
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
      };
    }
    function E(e) {
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
    function k(e) {
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
    function I(e) {
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
    l.decodeHatchApprovalRecordEvent = d;
  },
  98,
);
