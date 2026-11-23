__d(
  "WAFlowJSONRuntimeSchema",
  [
    "WAFlowJSONConstants",
    "WAFlowJSONRootSchema",
    "WAFlowJSONValidationError",
    "WhatsAppFlowsTemplateVersionState",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = "V".concat(String(e));
      switch (e) {
        case 100:
        case 101:
        case 110:
        case 120:
        case 202:
        case 299:
        case 302:
        case 401:
        case 200:
        case 201:
        case 300:
        case 301:
        case 400:
        case 500:
          return {};
        case 501:
        case 502:
        case 600:
        case 601:
        case 602:
        case 603:
        case 700:
        case 701:
        case 702:
        case 703:
        case 704:
          return s(e, r("WhatsAppFlowsTemplateVersionState")[t]);
      }
      throw o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE
        .INVALID_FLOW_JSON_VERSION;
    }
    function s(e, t) {
      var n = String(t),
        r = n.indexOf("_");
      if (r === -1)
        throw o("WAFlowJSONValidationError")
          .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE
          .INVALID_FLOW_JSON_VERSION_STATE;
      var a = n.substring(r + 1),
        i = {};
      if (!o("WAFlowJSONConstants").WAFlowVersionStates.isValid(a))
        throw o("WAFlowJSONValidationError")
          .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE
          .INVALID_FLOW_JSON_VERSION_STATE;
      switch (a) {
        case o("WAFlowJSONConstants").WAFlowVersionStates.PUBLISHED:
        case o("WAFlowJSONConstants").WAFlowVersionStates
          .PUBLISHED_WITH_DISABLED_FUNCTIONALITY:
        case o("WAFlowJSONConstants").WAFlowVersionStates.UNDER_DEV:
          i = o("WAFlowJSONRootSchema").getWAFlowJSONDynamicSchema(e);
          break;
        case o("WAFlowJSONConstants").WAFlowVersionStates.NOT_AVAILABLE:
          throw o("WAFlowJSONValidationError")
            .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE
            .UNAVAILABLE_FLOW_JSON_VERSION;
      }
      return i;
    }
    l.default = e;
  },
  98,
);
