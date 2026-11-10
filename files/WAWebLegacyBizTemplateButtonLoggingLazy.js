__d(
  "WAWebLegacyBizTemplateButtonLoggingLazy",
  ["JSResourceForInteraction", "WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = t.chat,
        a = t.msg;
      r("JSResourceForInteraction")("WAWebLegacyBizTemplateButtonLogging")
        .__setRef("WAWebLegacyBizTemplateButtonLoggingLazy")
        .load()
        .then(function (e) {
          return e.logLegacyBizTemplateExternalUrlClick({ chat: n, msg: a });
        })
        .catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[qbm] legacy business template button logging failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("legacy-biz-template-button-logging-failed");
        });
    }
    l.logLegacyBizTemplateExternalUrlClick = s;
  },
  98,
);
