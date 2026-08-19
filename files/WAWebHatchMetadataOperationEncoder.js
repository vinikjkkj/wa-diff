__d(
  "WAWebHatchMetadataOperationEncoder",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = (function (e) {
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.method === "channel.bootstrap"
          )
            return {
              method: "channel.bootstrap",
              params:
                t.sections != null && t.sections.length > 0
                  ? { sections: t.sections }
                  : {},
            };
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.method === "hitl.approval.decide" &&
            "approvalId" in e &&
            "decision" in e
          ) {
            var n = e.approvalId,
              r = e.decision;
            return {
              method: "hitl.approval.decide",
              params: babelHelpers.extends(
                { approval_id: n, decision: r },
                t.alwaysScope != null && t.alwaysScope !== ""
                  ? { always_scope: t.alwaysScope }
                  : null,
              ),
            };
          }
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.method === "hitl.payment.select" &&
            "approvalId" in e &&
            "paymentId" in e
          ) {
            var o = e.approvalId,
              a = e.paymentId;
            return {
              method: "hitl.payment.select",
              params: { approval_id: o, payment_id: a },
            };
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              e,
          );
        })(t),
        r = { version: 1, type: "req", payload: n };
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-metadata: encoding req method=",
              "",
            ])),
          t.method,
        ),
        new TextEncoder().encode(JSON.stringify(r)).buffer
      );
    }
    l.encodeHatchRequest = s;
  },
  98,
);
