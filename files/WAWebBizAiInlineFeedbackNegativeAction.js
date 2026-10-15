__d(
  "WAWebBizAiInlineFeedbackNegativeAction",
  [
    "WALogger",
    "WAWebBizAiInlineFeedbackState",
    "WAWebMessageEditFlow.react",
    "WAWebModalManager",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react"));
    function d(e, t) {
      var n = e.id;
      o("WAWebBizAiInlineFeedbackState").getBizAiInlineFeedbackKind(n) ==
        null &&
        (o("WAWebBizAiInlineFeedbackState").recordBizAiInlineFeedback(
          n,
          "negative",
        ),
        o("WAWebBizAiInlineFeedbackState").getBizAiInlineFeedbackKind(n) ===
          "negative" && (m(n, t), p(e)));
    }
    function m(e, t) {
      var n;
      try {
        n = t(e.remote, e.id, "negative");
      } catch (e) {
        _(e);
        return;
      }
      n.catch(_);
    }
    function p(t) {
      try {
        o("WAWebModalManager").ModalManager.open(
          c.jsx(r("WAWebMessageEditFlow.react"), { msg: t }),
        );
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "BizAI negative inline feedback editor failed to open",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("biz-ai-inline-feedback-edit-launch-fail");
      }
    }
    function _(e) {
      o("WALogger")
        .ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "BizAI negative inline feedback submission failed unexpectedly",
            ])),
        )
        .catching(r("getErrorSafe")(e))
        .sendLogs("biz-ai-inline-feedback-submit-unexpected");
    }
    l.submitNegativeBizAiInlineFeedback = d;
  },
  98,
);
