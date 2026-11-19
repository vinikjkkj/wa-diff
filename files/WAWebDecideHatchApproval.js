__d(
  "WAWebDecideHatchApproval",
  [
    "WALogger",
    "WAWebHatchApprovalManager",
    "WAWebOpenHatchApprovalOutcomeToast",
    "WAWebOpenHatchDecisionNotSentToast",
    "WAWebSendHatchMetadataRequest",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 4e4;
    function m(t, n) {
      var a = n.alwaysScope,
        i = n.kind,
        l = a === "" ? "none" : a;
      (o("WALogger").LOG(
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
      ),
        r("WAWebHatchApprovalManager").beginDecision(t),
        r("WAWebHatchApprovalManager").watchOutcome(t, p),
        o("WAWebSendHatchMetadataRequest")
          .sendHatchMetadataRequest(
            babelHelpers.extends(
              { method: "hitl.approval.decide", approvalId: t, decision: i },
              a !== "" ? { alwaysScope: a } : null,
            ),
            d,
          )
          .then(function (e) {
            if (e.outcome === "response" && e.response.status === "ok") {
              r("WAWebHatchApprovalManager").endDecision(t);
              return;
            }
            (r("WAWebHatchApprovalManager").isSettled(t) || f(t, e), _(t));
          })
          .catch(function (e) {
            (o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-approval: decide dispatch threw approvalId=",
                    "",
                  ])),
                t,
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("hatch-approval-decide-threw"),
              _(t));
          }));
    }
    function p(e) {
      e != null &&
        o("WAWebOpenHatchApprovalOutcomeToast").openHatchApprovalOutcomeToast(
          e,
        );
    }
    function _(e) {
      r("WAWebHatchApprovalManager").restoreDecision(e) &&
        o("WAWebOpenHatchDecisionNotSentToast").openHatchDecisionNotSentToast();
    }
    function f(e, t) {
      if (t.outcome === "send_failed") {
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-approval: decide never sent approvalId=",
                "",
              ])),
            e,
          )
          .sendLogs("hatch-approval-decide-send-failed");
        return;
      }
      var n =
        t.outcome === "response" && t.response.status === "error"
          ? t.response.errorCode
          : null;
      o("WALogger")
        .WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-approval: decide not taken approvalId=",
              " outcome=",
              " errorCode=",
              "",
            ])),
          e,
          t.outcome,
          n != null ? n : "none",
        )
        .sendLogs("hatch-approval-decide-not-taken");
    }
    l.decideHatchApproval = m;
  },
  98,
);
