__d(
  "signalsLogUserFeedback",
  ["SignalsPixelGiveFeedbackSentiment", "signalsLoggingUserFeedbackListener"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = null;
      if (t.format === "SIMPLE_TEXT") {
        var a = t.browser,
          i = t.feedbackCategory,
          l = t.text;
        n = {
          browser: a,
          feedbackCategory: i,
          feedbackFormat: "SIMPLE_TEXT",
          feedbackMessage: l,
        };
      } else {
        var s = t.browser,
          u = t.businessID,
          c = t.concern,
          d = t.feedbackCategory,
          m = t.feedbackSource,
          p = t.response,
          _ = t.sentiment,
          f = t.signalSourceID;
        switch (
          ((n = {
            browser: s,
            businessID: u,
            feedbackCategory: d,
            feedbackMessage: JSON.stringify({ concern: c, response: p }),
            feedbackNumericValue:
              _ ===
              o("SignalsPixelGiveFeedbackSentiment")
                .SignalsPixelGiveFeedbackSentiment.POSITIVE
                ? 1
                : 0,
            feedbackSelectedCategory: c,
            feedbackSource: m,
            signalSourceID: f,
          }),
          t.format)
        ) {
          case "GENERIC_REACTION_FEEDBACK": {
            var g = t.concerns;
            n = babelHelpers.extends({}, n, {
              feedbackFormat: "GENERIC_REACTION_FEEDBACK",
            });
            var h = g != null && g.length === 1 ? g[0] : null;
            ((n.feedbackMessage = JSON.stringify({
              concern: g != null ? h : c,
              concerns: g,
              response: p,
              source: m,
            })),
              g != null && (n.feedbackSelectedCategory = h));
            break;
          }
          case "MARKETER_ASSESSMENT_FEEDBACK": {
            var y = t.entryPoint,
              C = t.errorCode,
              b = t.pixelSetupStatus,
              v = t.userFlowStep,
              S = t.usesPartnerBrowser;
            n = babelHelpers.extends({}, n, {
              entryPoint: y,
              errorCode: C,
              feedbackFormat: "MARKETER_ASSESSMENT_FEEDBACK",
              pixelSetupStatus: b,
              userFlowStep: v,
              usesPartnerBrowser: S,
            });
            break;
          }
          case "ENGINEERING_CHECKLIST_FEEDBACK": {
            var R = t.businessRole,
              L = t.entryPoint,
              E = t.errorCode,
              k = t.userFlowStep;
            n = babelHelpers.extends({}, n, {
              businessRole: R,
              entryPoint: L,
              errorCode: E,
              feedbackFormat: "ENGINEERING_CHECKLIST_FEEDBACK",
              userFlowStep: k,
            });
            break;
          }
          case "PARTNER_INTEGRATIONS_FEEDBACK": {
            var I = t.entryPoint,
              T = t.isCAPISetup,
              D = t.partnerFlowStep,
              x = t.partnerName,
              $ = t.pixelSetupStatus;
            ((n = babelHelpers.extends({}, n, {
              entryPoint: I,
              feedbackFormat: "PARTNER_INTEGRATIONS_FEEDBACK",
              pixelSetupStatus: $,
            })),
              (n.feedbackMessage = JSON.stringify({
                concern: c,
                isCAPISetup: T,
                partnerFlowStep: D,
                partnerName: x,
                response: p,
              })));
            break;
          }
        }
      }
      n != null &&
        (e == null ||
          e
            .secondary(r("signalsLoggingUserFeedbackListener"), function () {
              return n;
            })
            .logCustomActionUseSparingly("GIVE_FEEDBACK"));
    }
    l.default = e;
  },
  98,
);
