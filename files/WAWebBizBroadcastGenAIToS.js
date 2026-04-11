__d(
  "WAWebBizBroadcastGenAIToS",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBizBroadcastGenAIGating",
    "WAWebPDFNTypes",
    "WAWebSetUserDisclosureStageJob",
    "WAWebTos",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "20251104";
    function c() {
      return o("WAWebBizBroadcastGenAIGating").isGenAITextEnabled() ? u : "";
    }
    function d() {
      var e = o("WAWebTos").TosManager.getState(u);
      return e === "ACCEPTED";
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWebSetUserDisclosureStageJob").setUserDisclosureStage(
            Number(u),
            o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
          ),
            o("WAWebTos").TosManager.setState(
              u,
              "ACCEPTED",
              o("WATimeUtils").unixTime(),
            ),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "GenAI ToS accepted (notice ",
                  ")",
                ])),
              u,
            ));
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      (o("WAWebTos").TosManager.setState(
        u,
        "UNKNOWN",
        o("WATimeUtils").unixTime(),
      ),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "GenAI ToS debug reset (local only)",
            ])),
        ));
    }
    ((l.BIZ_BROADCAST_GENAI_TOS_ID = u),
      (l.getBizBroadcastGenAITosId = c),
      (l.hasAcceptedGenAIToS = d),
      (l.acceptGenAIToS = m),
      (l.debugResetGenAIToS = _));
  },
  98,
);
