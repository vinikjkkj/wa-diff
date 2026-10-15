__d(
  "WAWebBizAiInlineFeedbackPositiveAction",
  [
    "fbt",
    "WALogger",
    "WAWebBizAiInlineFeedbackState",
    "WAWebToast.react",
    "WAWebToastManager",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react"));
    function m(e, t) {
      o("WAWebBizAiInlineFeedbackState").getBizAiInlineFeedbackKind(e) ==
        null &&
        (o("WAWebBizAiInlineFeedbackState").recordBizAiInlineFeedback(
          e,
          "positive",
        ),
        o("WAWebBizAiInlineFeedbackState").getBizAiInlineFeedbackKind(e) ===
          "positive" && (p(), _(e, t)));
    }
    function p() {
      try {
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebToast.react").Toast, {
            msg: s._(/*BTDS*/ "Feedback received"),
          }),
          o("WAWebToastManager").ToastPosition.CENTER,
        );
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "BizAI positive inline feedback toast failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("biz-ai-inline-feedback-toast-fail");
      }
    }
    function _(e, t) {
      var n;
      try {
        n = t(e.remote, e.id, "positive");
      } catch (e) {
        f(e);
        return;
      }
      n.catch(f);
    }
    function f(e) {
      o("WALogger")
        .ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "BizAI positive inline feedback submission failed unexpectedly",
            ])),
        )
        .catching(r("getErrorSafe")(e))
        .sendLogs("biz-ai-inline-feedback-submit-unexpected");
    }
    l.submitPositiveBizAiInlineFeedback = m;
  },
  226,
);
