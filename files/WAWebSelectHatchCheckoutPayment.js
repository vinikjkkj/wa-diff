__d(
  "WAWebSelectHatchCheckoutPayment",
  [
    "WALogger",
    "WAWebHatchApprovalManager",
    "WAWebHatchCheckoutWalletGroups",
    "WAWebHatchJsonReaders",
    "WAWebHatchLogging",
    "WAWebSendHatchMetadataRequest",
    "asyncToGeneratorRuntime",
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
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a;
          if (!r("WAWebHatchApprovalManager").hasCheckoutPaymentOption(e, t))
            return (R(e, t), "unavailable");
          var i = o("WAWebHatchCheckoutWalletGroups").fundingOptionId(
            r("WAWebHatchApprovalManager").getFundedCheckout(e),
          );
          if (i === t) return "applied";
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-approval: selecting payment approvalId=",
                " paymentId=",
                "",
              ])),
            e,
            t,
          ),
            (g += 1));
          var l = g;
          f.set(e, l);
          var s = o("WAWebHatchCheckoutWalletGroups").fundingOptionId(
              r("WAWebHatchApprovalManager").getFundedCheckout(e),
            ),
            u = new Set(
              (a = r("WAWebHatchApprovalManager").getFundedCheckout(e)) == null
                ? void 0
                : a.paymentOptions.map(function (e) {
                    return e.paymentId;
                  }),
            ),
            c = yield o("WAWebSendHatchMetadataRequest")
              .sendHatchMetadataRequest(
                { method: "hitl.payment.select", approvalId: e, paymentId: t },
                h,
              )
              .catch(function (t) {
                return (
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "hatch-approval: payment select threw approvalId=",
                          "",
                        ])),
                      e,
                    )
                    .catching(r("getErrorSafe")(t))
                    .sendLogs("hatch-payment-select-threw"),
                  { outcome: "send_failed" }
                );
              }),
            y = f.get(e) === l;
          if (
            (y && f.delete(e),
            c.outcome !== "response" || c.response.status !== "ok")
          )
            return (
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-approval: payment select refused approvalId=",
                      " outcome=",
                      "",
                    ])),
                  e,
                  c.outcome,
                )
                .sendLogs("hatch-payment-select-failed"),
              "refused"
            );
          if (!y)
            return (
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-approval: payment select superseded approvalId=",
                      "",
                    ])),
                  e,
                )
                .sendLogs("hatch-payment-select-superseded"),
              "superseded"
            );
          var C = b(c.response.body, e, t, u);
          if (C == null) return "refused";
          var v = r("WAWebHatchApprovalManager").applyCheckoutPaymentOption(
            e,
            C,
          );
          return v
            ? (C !== s &&
                o("WAWebHatchLogging").logHatchHitlWalletCardSelected(n),
              "applied")
            : "unavailable";
        })),
        C.apply(this, arguments)
      );
    }
    function b(t, n, a, i) {
      var l = v(t, n, a);
      return l.kind === "mismatch"
        ? (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-approval: payment select ack named approvalId=",
                  " for approvalId=",
                  "",
                ])),
              l.ackApprovalId,
              n,
            )
            .sendLogs("hatch-payment-select-ack-mismatch"),
          null)
        : l.paymentId !== a &&
            !i.has(l.paymentId) &&
            !r("WAWebHatchApprovalManager").hasCheckoutPaymentOption(
              n,
              l.paymentId,
            )
          ? (o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-approval: payment select ack named an unoffered card approvalId=",
                    "",
                  ])),
                n,
              )
              .sendLogs("hatch-payment-select-ack-unoffered"),
            null)
          : l.paymentId;
    }
    function v(e, t, n) {
      var r,
        a = S(e, "approval_id");
      if (a != null && a !== t) return { kind: "mismatch", ackApprovalId: a };
      var i =
        (r = S(
          o("WAWebHatchJsonReaders").readField(e, "payment_selection"),
          "payment_id",
        )) != null
          ? r
          : S(e, "payment_id");
      return { kind: "confirmed", paymentId: i != null ? i : n };
    }
    function S(e, t) {
      var n = o("WAWebHatchJsonReaders").readString(e, t);
      return n == null || o("WAWebHatchJsonReaders").isBlankText(n) ? null : n;
    }
    function R(e, t) {
      if (r("WAWebHatchApprovalManager").getApproval(e) == null) {
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-approval: payment select dropped, approval gone approvalId=",
              "",
            ])),
          e,
        );
        return;
      }
      o("WALogger")
        .ERROR(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
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
