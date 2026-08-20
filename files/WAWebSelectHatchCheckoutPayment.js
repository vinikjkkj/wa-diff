__d(
  "WAWebSelectHatchCheckoutPayment",
  [
    "WALogger",
    "WAWebHatchApprovalManager",
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
      p = new Map(),
      _ = 0;
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (!r("WAWebHatchApprovalManager").hasCheckoutPaymentOption(e, t))
            return (h(e, t), !1);
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-approval: selecting payment approvalId=",
                " paymentId=",
                "",
              ])),
            e,
            t,
          ),
            (_ += 1));
          var a = _;
          p.set(e, a);
          var i = yield o("WAWebSendHatchMetadataRequest")
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
              }),
            l = p.get(e) === a;
          if (
            (l && p.delete(e),
            i.outcome !== "response" || i.response.status !== "ok")
          )
            return (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-approval: payment select refused approvalId=",
                      " outcome=",
                      "",
                    ])),
                  e,
                  i.outcome,
                )
                .sendLogs("hatch-payment-select-failed"),
              !1
            );
          if (!l)
            return (
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-approval: payment select superseded approvalId=",
                      "",
                    ])),
                  e,
                )
                .sendLogs("hatch-payment-select-superseded"),
              !1
            );
          var s = r("WAWebHatchApprovalManager").applyCheckoutPaymentOption(
            e,
            t,
          );
          return (
            s && o("WAWebHatchLogging").logHatchHitlWalletCardSelected(n),
            s
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(t, n) {
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
    l.selectHatchCheckoutPayment = f;
  },
  98,
);
