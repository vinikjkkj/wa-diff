__d(
  "WAWebHatchApprovalRecordDecoder",
  [
    "WALogger",
    "WAWebHatchApprovalRequestPreview",
    "WAWebHatchCredentialSelection",
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
      m = "rich",
      p = "purchase_preapproval",
      _ = new Set([
        "connector",
        "network",
        "device",
        "browser_action",
        "outgoing_media",
      ]),
      f = "deny",
      g = "background";
    function h(t) {
      var n = y(t),
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
      if (
        !o("WAWebHatchJsonReaders").isBlankText(a) ||
        (!o("WAWebHatchJsonReaders").isBlankText(l) && l !== u)
      ) {
        var s = o("WAWebHatchJsonReaders").readStringOrEmpty(
          o("WAWebHatchJsonReaders").readField(n, "display"),
          "outcome_label",
        );
        return babelHelpers.extends(
          {
            approvalId: r,
            resolvedDecision: o("WAWebHatchJsonReaders").isBlankText(a) ? l : a,
            record: null,
          },
          o("WAWebHatchJsonReaders").isBlankText(s)
            ? null
            : { outcomeLabel: s },
        );
      }
      return {
        approvalId: r,
        resolvedDecision: null,
        record: C(
          n,
          r,
          o("WAWebHatchSecureMediaDecoder").decodeSecureMediaMap(
            o("WAWebHatchJsonReaders").readField(t, "secure_media"),
          ),
        ),
      };
    }
    function y(e) {
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
    function C(e, t, n) {
      var r,
        a,
        i,
        l = (i = o("WAWebHatchJsonReaders")).readField(e, "display"),
        u = i.readField(e, "payload"),
        c = i.readStringOrEmpty(u, "type"),
        d = U(c),
        p = i.readStringOrEmpty(l, "presentation_kind") === m,
        _ = babelHelpers.extends(
          {},
          I(p ? u : null, d),
          k(
            p && d === "shopify_checkout" ? u : null,
            o("WAWebHatchJsonReaders").readStringOrEmpty(l, "icon_url"),
          ),
          E(p && d === "browser_task_confirmation" ? u : null),
        ),
        f = W(o("WAWebHatchJsonReaders").readArray(e, "decision_options")),
        h = o(
          "WAWebHatchCredentialSelection",
        ).readHatchCredentialSelectionMarker(u),
        y = v(c, d, p, _, n),
        C = b(f, R(h, y));
      return C.length === 0
        ? (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-approval: dropping record without decision options approvalId=",
                  " payloadType=",
                  "",
                ])),
              t,
              c,
            )
            .sendLogs("hatch-approval-no-decision-options"),
          null)
        : babelHelpers.extends(
            {
              approvalId: t,
              isExclusive:
                o("WAWebHatchJsonReaders").readBool(e, "is_exclusive") === !0,
              attentionMode:
                o("WAWebHatchJsonReaders").readStringOrEmpty(
                  l,
                  "attention_mode",
                ) === g
                  ? "background"
                  : "foreground",
              threadId: o("WAWebHatchJsonReaders").readStringOrEmpty(
                o("WAWebHatchJsonReaders").readField(e, "scope"),
                "thread_id",
              ),
              requestedAtMs:
                (r = o("WAWebHatchJsonReaders").readNumber(
                  e,
                  "requested_at_ms",
                )) != null
                  ? r
                  : 0,
              requestExpiresAtMs:
                (a = o("WAWebHatchJsonReaders").readNumber(
                  e,
                  "request_expires_at_ms",
                )) != null
                  ? a
                  : 0,
              permissionCaption: o("WAWebHatchJsonReaders").readStringOrEmpty(
                l,
                "permission_caption",
              ),
              attentionLabel: o("WAWebHatchJsonReaders").readStringOrEmpty(
                l,
                "attention_label",
              ),
              totalPromoCaption: o("WAWebHatchJsonReaders").readStringOrEmpty(
                l,
                "total_promo_caption",
              ),
              reviewText: o("WAWebHatchJsonReaders").readStringOrEmpty(
                l,
                "review_text",
              ),
              iconKey: o("WAWebHatchJsonReaders").readStringOrEmpty(
                l,
                "icon_key",
              ),
              summaryTitle: o("WAWebHatchJsonReaders").readStringOrEmpty(
                l,
                "summary_title",
              ),
              requestPresentation: o("WAWebHatchJsonReaders").readStringOrEmpty(
                l,
                "request_presentation",
              ),
              permissionQuestion: o("WAWebHatchJsonReaders").readStringOrEmpty(
                o("WAWebHatchJsonReaders").readField(l, "permission_question"),
                "text",
              ),
              cardTitle: o("WAWebHatchJsonReaders").readStringOrEmpty(
                l,
                "card_title",
              ),
              purposeSummary: o("WAWebHatchJsonReaders").readStringOrEmpty(
                l,
                "purpose_summary",
              ),
              richExplanation: o("WAWebHatchJsonReaders").readStringOrEmpty(
                l,
                "rich_explanation",
              ),
              detailRows: q(
                o("WAWebHatchJsonReaders").readArray(l, "detail_rows"),
              ),
              requestPreview: o(
                "WAWebHatchApprovalRequestPreview",
              ).decodeHatchApprovalRequestPreview(
                o("WAWebHatchJsonReaders").readField(
                  l,
                  "request_preview_document",
                ),
              ),
              requestPreviewText: o(
                "WAWebHatchApprovalRequestPreview",
              ).hatchApprovalFlatPreview(u),
              payloadType: d,
              rawPayloadType: c,
              connectorHost: o("WAWebHatchJsonReaders").readStringOrEmpty(
                o("WAWebHatchJsonReaders").readObject(u, "connector_payload"),
                "host",
              ),
              connectorMethod: o("WAWebHatchJsonReaders").readStringOrEmpty(
                o("WAWebHatchJsonReaders").readObject(u, "connector_payload"),
                "method",
              ),
              iconUrl: o("WAWebHatchJsonReaders").readStringOrEmpty(
                l,
                "icon_url",
              ),
              decisionOptions: C,
            },
            _,
            L(h, f, y),
            { secureMedia: n },
          );
    }
    function b(e, t) {
      return t
        ? e
        : e.filter(function (e) {
            return e.kind === f;
          });
    }
    function v(e, t, n, r, o) {
      return e === p
        ? !1
        : !n ||
            _.has(t) ||
            r.browserCheckout != null ||
            r.shopifyCheckout != null ||
            S(r.browserTaskConfirmation, o);
    }
    function S(e, t) {
      var n,
        r,
        o = e == null || (n = e.screenshot) == null ? void 0 : n.url;
      return (
        o != null && ((r = t.get(o)) == null ? void 0 : r.mediaType) === "image"
      );
    }
    function R(e, t) {
      return e !== "required" && t;
    }
    function L(e, t, n) {
      return e == null
        ? {}
        : { credentialSelection: { marker: e, decisionOptions: b(t, n) } };
    }
    function E(e) {
      var t = o("WAWebHatchJsonReaders").readObject(
        e,
        "browser_task_confirmation_payload",
      );
      return t == null
        ? {}
        : {
            browserTaskConfirmation: {
              title: o("WAWebHatchJsonReaders").readStringOrEmpty(t, "title"),
              body: o("WAWebHatchJsonReaders").readStringOrEmpty(t, "body"),
              actionLabel: o("WAWebHatchJsonReaders").readStringOrEmpty(
                t,
                "browser_action_label",
              ),
              screenshot: B(
                o("WAWebHatchJsonReaders").readField(t, "screenshot"),
              ),
            },
          };
    }
    function k(e, t) {
      var n = e != null ? T(e, t) : null;
      return n != null ? { shopifyCheckout: n } : {};
    }
    function I(e, t) {
      var n = e != null ? A(e, t) : null;
      return n != null ? { browserCheckout: n } : {};
    }
    function T(e, t) {
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
        merchantIconUrl: w(
          o("WAWebHatchJsonReaders").readStringOrEmpty(a, "icon_url"),
          t,
        ),
        items: D(o("WAWebHatchJsonReaders").readArray(r, "items")),
        deliveryLabel: o("WAWebHatchJsonReaders").readStringOrEmpty(i, "label"),
        estimatedDelivery: o("WAWebHatchJsonReaders").readStringOrEmpty(
          i,
          "estimated_delivery",
        ),
        recipientName: P(
          o("WAWebHatchJsonReaders").readField(r, "shipping_address"),
        ),
        shippingAddress: N(
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
        totals: x(o("WAWebHatchJsonReaders").readArray(r, "totals")),
        cardExpiresInMs:
          (n = o("WAWebHatchJsonReaders").readNumber(
            r,
            "card_expires_in_ms",
          )) != null
            ? n
            : 0,
        paymentId: F(r),
        paymentOptions: O(
          o("WAWebHatchJsonReaders").readArray(r, "payment_options"),
        ),
        legalLinks: $(o("WAWebHatchJsonReaders").readArray(r, "legal_links")),
      };
    }
    function D(e) {
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
            quantity: o("WAWebHatchJsonReaders").readTextOrNumber(
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
    function x(e) {
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
    function $(e) {
      if (e == null) return [];
      var t = [];
      for (var n of e) {
        var a = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "label"),
          i = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "url");
        !o("WAWebHatchJsonReaders").isBlankText(a) &&
          r("WAWebURLUtils").isHttps(i) === !0 &&
          t.push({ label: a, url: i });
      }
      return t;
    }
    function P(e) {
      return M(
        [
          o("WAWebHatchJsonReaders").readStringOrEmpty(e, "first_name"),
          o("WAWebHatchJsonReaders").readStringOrEmpty(e, "last_name"),
        ],
        " ",
      );
    }
    function N(e) {
      var t,
        n = M(
          [
            (t = o("WAWebHatchJsonReaders")).readStringOrEmpty(e, "city"),
            t.readStringOrEmpty(e, "state"),
            t.readStringOrEmpty(e, "postal_code"),
          ],
          " ",
        );
      return M(
        [
          t.readStringOrEmpty(e, "street1"),
          t.readStringOrEmpty(e, "street2"),
          n,
          t.readStringOrEmpty(e, "country"),
        ],
        ", ",
      );
    }
    function M(e, t) {
      return e
        .map(function (e) {
          return e.trim();
        })
        .filter(function (e) {
          return e !== "";
        })
        .join(t);
    }
    function w(e, t) {
      return o("WAWebHatchJsonReaders").isBlankText(e) ? t : e;
    }
    function A(e, t) {
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
        screenshot: B(o("WAWebHatchJsonReaders").readField(a, "screenshot")),
        paymentId: F(a),
        paymentOptions: O(
          o("WAWebHatchJsonReaders").readArray(a, "payment_options"),
        ),
      };
    }
    function F(e) {
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
    function O(e) {
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
    function B(e) {
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
    function W(e) {
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
    function q(e) {
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
    function U(e) {
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
                      : e === "browser_task_confirmation"
                        ? "browser_task_confirmation"
                        : "unknown";
    }
    l.decodeHatchApprovalRecordEvent = h;
  },
  98,
);
