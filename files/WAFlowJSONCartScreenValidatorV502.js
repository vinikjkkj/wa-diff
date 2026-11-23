__d(
  "WAFlowJSONCartScreenValidatorV502",
  ["WAFlowJSONBaseValidator", "WAFlowJSONValidationError", "WAFlowsTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.validate = function () {
          var e = this.flowJSONData.flowJson,
            t = e.screens;
          return this.validateCartScreen(t);
        }),
        (n.validateCartScreen = function (t) {
          var e = [],
            n = t.find(function (e) {
              var t;
              return (
                ((t = e.layout) == null ? void 0 : t.type) ===
                o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.ITEM_LIST
              );
            }),
            r = t.find(function (e) {
              var t;
              return (
                ((t = e.layout) == null ? void 0 : t.type) ===
                o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.CART
              );
            });
          if (n && !r) {
            var a = o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingCartLayoutErrorMsg(),
              i = [];
            e.push(
              this.getError(
                a,
                i,
                o("WAFlowJSONValidationError")
                  .WA_FLOW_JSON_VALIDATION_ERROR_CODE.MISSING_CART_LAYOUT,
              ),
            );
          }
          return e;
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONCartScreenValidatorV502 = e;
  },
  98,
);
