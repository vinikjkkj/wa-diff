__d(
  "WAWebDecideHatchApproval",
  [
    "WALogger",
    "WAWebHatchApprovalManager",
    "WAWebHatchDecisionKinds",
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
    function m(t, n, a) {
      var i = n.alwaysScope,
        l = n.kind,
        u = i === "" ? "none" : i,
        c =
          a != null &&
          a !== "" &&
          o("WAWebHatchDecisionKinds").isHatchAllowKind(l)
            ? a
            : null;
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "hatch-approval: deciding approvalId=",
            " decision=",
            " scope=",
            " credential=",
            "",
          ])),
        t,
        l,
        u,
        c != null ? "yes" : "no",
      ),
        r("WAWebHatchApprovalManager").beginDecision(t),
        r("WAWebHatchApprovalManager").watchOutcome(t, p),
        o("WAWebSendHatchMetadataRequest")
          .sendHatchMetadataRequest(
            babelHelpers.extends(
              { method: "hitl.approval.decide", approvalId: t, decision: l },
              i !== "" ? { alwaysScope: i } : null,
              c != null ? { credentialId: c } : {},
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
