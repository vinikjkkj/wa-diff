__d(
  "WAWebDecideHatchApproval",
  [
    "WALogger",
    "WAWebHatchApprovalManager",
    "WAWebSendHatchMetadataRequest",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t, n) {
      var a = n.alwaysScope,
        i = n.kind,
        l = a === "" ? "none" : a;
      (o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-approval: deciding approvalId=",
              " decision=",
              " scope=",
              "",
            ])),
          t,
          i,
          l,
        )
        .sendLogs("hatch-approval-decide"),
        o("WAWebSendHatchMetadataRequest")
          .sendHatchMetadataRequest(
            babelHelpers.extends(
              { method: "hitl.approval.decide", approvalId: t, decision: i },
              a !== "" ? { alwaysScope: a } : null,
            ),
          )
          .then(function (e) {
            e.outcome === "send_failed" &&
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-approval: decide never sent approvalId=",
                      "",
                    ])),
                  t,
                )
                .sendLogs("hatch-approval-decide-send-failed");
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-approval: decide dispatch threw approvalId=",
                    "",
                  ])),
                t,
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("hatch-approval-decide-threw");
          }),
        r("WAWebHatchApprovalManager").resolveApproval(t));
    }
    l.decideHatchApproval = c;
  },
  98,
);
