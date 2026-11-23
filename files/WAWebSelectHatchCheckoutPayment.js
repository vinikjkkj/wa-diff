__d(
  "WAWebSelectHatchCheckoutPayment",
  [
    "WALogger",
    "WAWebHatchApprovalManager",
    "WAWebHatchCheckoutWalletGroups",
    "WAWebHatchJsonReaders",
    "WAWebHatchLogging",
    "WAWebSendHatchMetadataRequest",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = new Map(),
      g = 0,
      h = 3e4;
    async function y(t, n, a) {
      var i;
      if (!r("WAWebHatchApprovalManager").hasCheckoutPaymentOption(t, n))
        return (S(t, n), "unavailable");
      var l = o("WAWebHatchCheckoutWalletGroups").fundingOptionId(
        r("WAWebHatchApprovalManager").getFundedCheckout(t),
      );
      if (l === n) return "applied";
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "hatch-approval: selecting payment approvalId=",
            " paymentId=",
            "",
          ])),
        t,
        n,
      ),
        (g += 1));
      var d = g;
      f.set(t, d);
      var m = o("WAWebHatchCheckoutWalletGroups").fundingOptionId(
          r("WAWebHatchApprovalManager").getFundedCheckout(t),
        ),
        p = new Set(
          (i = r("WAWebHatchApprovalManager").getFundedCheckout(t)) == null
            ? void 0
            : i.paymentOptions.map(function (e) {
                return e.paymentId;
              }),
        ),
        _ = await o("WAWebSendHatchMetadataRequest")
          .sendHatchMetadataRequest(
            { method: "hitl.payment.select", approvalId: t, paymentId: n },
            h,
          )
          .catch(function (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-approval: payment select threw approvalId=",
                      "",
                    ])),
                  t,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("hatch-payment-select-threw"),
              { outcome: "send_failed" }
            );
          }),
        y = f.get(t) === d;
      if (
        (y && f.delete(t),
        _.outcome !== "response" || _.response.status !== "ok")
      )
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-approval: payment select refused approvalId=",
                  " outcome=",
                  "",
                ])),
              t,
              _.outcome,
            )
            .sendLogs("hatch-payment-select-failed"),
          "refused"
        );
      if (!y)
        return (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-approval: payment select superseded approvalId=",
                  "",
                ])),
              t,
            )
            .sendLogs("hatch-payment-select-superseded"),
          "superseded"
        );
      var b = C(_.response.body, t, n, p);
      if (b == null) return "refused";
      var v = r("WAWebHatchApprovalManager").applyCheckoutPaymentOption(t, b);
      return v
        ? (b !== m && o("WAWebHatchLogging").logHatchHitlWalletCardSelected(a),
          "applied")
        : "unavailable";
    }
    function C(e, t, n, a) {
      var i = b({ approvalId: t, body: e, requestedPaymentId: n });
      return i.kind === "mismatch"
        ? (o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-approval: payment select ack named approvalId=",
                  " for approvalId=",
                  "",
                ])),
              i.ackApprovalId,
              t,
            )
            .sendLogs("hatch-payment-select-ack-mismatch"),
          null)
        : i.paymentId !== n &&
            !a.has(i.paymentId) &&
            !r("WAWebHatchApprovalManager").hasCheckoutPaymentOption(
              t,
              i.paymentId,
            )
          ? (o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-approval: payment select ack named an unoffered card approvalId=",
                    "",
                  ])),
                t,
              )
              .sendLogs("hatch-payment-select-ack-unoffered"),
            null)
          : i.paymentId;
    }
    function b(e) {
      var t,
        n = e.approvalId,
        r = e.body,
        a = e.requestedPaymentId,
        i = v(r, "approval_id");
      if (i != null && i !== n) return { kind: "mismatch", ackApprovalId: i };
      var l =
        (t = v(
          o("WAWebHatchJsonReaders").readField(r, "payment_selection"),
          "payment_id",
        )) != null
          ? t
          : v(r, "payment_id");
      return { kind: "confirmed", paymentId: l != null ? l : a };
    }
    function v(e, t) {
      var n = o("WAWebHatchJsonReaders").readString(e, t);
      return n == null || o("WAWebHatchJsonReaders").isBlankText(n) ? null : n;
    }
    function S(e, t) {
      if (r("WAWebHatchApprovalManager").getApproval(e) == null) {
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-approval: payment select dropped, approval gone approvalId=",
              "",
            ])),
          e,
        );
        return;
      }
      o("WALogger")
        .ERROR(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-approval: cannot fund approvalId=",
              " with paymentId=",
              "",
            ])),
          e,
          t,
        )
        .sendLogs("hatch-payment-select-unknown-option");
    }
    l.selectHatchCheckoutPayment = y;
  },
  98,
);
