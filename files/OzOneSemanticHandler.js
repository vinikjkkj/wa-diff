__d(
  "OzOneSemanticHandler",
  [
    "OzOneSemanticHandlerUtils",
    "handleOzManifestFetchErrorEvent",
    "handleOzStreamErrorEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t.error;
      o("OzOneSemanticHandlerUtils").shouldRespondWithOneSemantics(n)
        ? o("OzOneSemanticHandlerUtils").evaluateOneSemanticsResponse(e, t)
        : r("handleOzManifestFetchErrorEvent")(e, t);
    }
    function s(e, t) {
      var n = t.error;
      o("OzOneSemanticHandlerUtils").shouldRespondWithOneSemantics(n)
        ? o("OzOneSemanticHandlerUtils").evaluateOneSemanticsResponse(e, t)
        : r("handleOzStreamErrorEvent")(e, t);
    }
    ((l.handleManifestFetchErrorEvent = e), (l.handleStreamErrorEvent = s));
  },
  98,
);
