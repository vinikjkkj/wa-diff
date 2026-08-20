__d(
  "WAWebSelectHatchCheckoutPayment",
  [
    "WALogger",
    "WAWebHatchApprovalManager",
    "WAWebSendHatchMetadataRequest",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!r("WAWebHatchApprovalManager").hasCheckoutPaymentOption(e, t))
            return (_(e, t), !1);
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-approval: selecting payment approvalId=",
                " paymentId=",
                "",
              ])),
            e,
            t,
          );
          var n = yield o("WAWebSendHatchMetadataRequest")
            .sendHatchMetadataRequest({
              method: "hitl.payment.select",
              approvalId: e,
              paymentId: t,
            })
            .catch(function (t) {
              return (
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-approval: payment select threw approvalId=",
                        "",
                      ])),
                    e,
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("hatch-payment-select-threw"),
                { outcome: "send_failed" }
              );
            });
          return n.outcome !== "response" || n.response.status !== "ok"
            ? (o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-approval: payment select refused approvalId=",
                      " outcome=",
                      "",
                    ])),
                  e,
                  n.outcome,
                )
                .sendLogs("hatch-payment-select-failed"),
              !1)
            : r("WAWebHatchApprovalManager").applyCheckoutPaymentOption(e, t);
        })),
        p.apply(this, arguments)
      );
    }
    function _(t, n) {
      if (r("WAWebHatchApprovalManager").getApproval(t) == null) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-approval: payment select dropped, approval gone approvalId=",
              "",
            ])),
          t,
        );
        return;
      }
      o("WALogger")
        .ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-approval: cannot fund approvalId=",
              " with paymentId=",
              "",
            ])),
          t,
          n,
        )
        .sendLogs("hatch-payment-select-unknown-option");
    }
    l.selectHatchCheckoutPayment = m;
  },
  98,
);
