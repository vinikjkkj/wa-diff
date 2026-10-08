__d(
  "WAWebBizAiMessageEditActionLog",
  [
    "WALogger",
    "WAWebBizAILargeScreensLogEvents",
    "WAWebBizAiMessageEditEducationState",
    "WAWebMessageEditUtils",
    "WAWebMsgActionCapability",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      try {
        if (!o("WAWebMsgActionCapability").shouldCoachAgentEdit(t)) return;
        o("WAWebBizAILargeScreensLogEvents").logClickBizAiMessageEditAction(
          o("WAWebMessageEditUtils").isParentWithinEditUIWindow({
            msgKey: t.id,
            parentTsInSeconds: t.t,
          }),
          o("WAWebBizAiMessageEditEducationState").hasViewedDiscoveryTooltip(),
        );
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "BizAI message edit telemetry failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("biz-ai-message-edit-telemetry-fail");
      }
    }
    l.logBizAiMessageEditActionClickIfEligible = s;
  },
  98,
);
