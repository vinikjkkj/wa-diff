__d(
  "WAFlowJSONScreenLayoutSchema",
  [
    "WAFlowJSONCartLayoutSchema",
    "WAFlowJSONCategoryListLayoutSchema",
    "WAFlowJSONItemDetailLayoutSchema",
    "WAFlowJSONItemListLayoutSchema",
    "WAFlowJSONSingleColumnLayoutSchema",
    "WAFlowJSONValidationError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case 100:
        case 101:
        case 110:
        case 120:
        case 202:
        case 299:
        case 302:
        case 200:
        case 201:
        case 301:
        case 300:
        case 400:
        case 401:
        case 500:
          throw o(
            "WAFlowJSONValidationError",
          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.UNSUPPORTED_FLOW_JSON_VERSION.concat(
            ": " + String(e),
          );
        case 501:
        case 600:
        case 601:
        case 602:
        case 603:
        case 700:
        case 701:
        case 702:
        case 703:
        case 704:
          return o(
            "WAFlowJSONSingleColumnLayoutSchema",
          ).getSingleColumnLayoutSchema(e);
        case 502:
          return {
            oneOf: [
              o(
                "WAFlowJSONSingleColumnLayoutSchema",
              ).getSingleColumnLayoutSchema(e),
              o("WAFlowJSONItemDetailLayoutSchema").getItemDetailLayoutSchema(
                e,
              ),
              o(
                "WAFlowJSONCategoryListLayoutSchema",
              ).getCategoryListLayoutSchema(e),
              o("WAFlowJSONItemListLayoutSchema").getItemListLayoutSchema(e),
              o("WAFlowJSONCartLayoutSchema").getCartLayoutSchema(e),
            ],
          };
      }
    }
    l.getScreenLayoutSchema = e;
  },
  98,
);
