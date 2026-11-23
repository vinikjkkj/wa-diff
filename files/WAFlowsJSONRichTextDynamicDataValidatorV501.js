__d(
  "WAFlowsJSONRichTextDynamicDataValidatorV501",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONValidationError",
    "WAFlowsDynamicDataUtils",
    "WAFlowsTypes",
  ],
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
          for (
            var e = this,
              t = [],
              n = this.flowJSONData.flowJson.screens,
              r = function () {
                var r = n[a],
                  i = e.flowJSONData.getComponentDataByType(r.id, [
                    o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
                      .RICH_TEXT,
                    o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.TEXT_BODY,
                    o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.TEXT_CAPTION,
                  ]);
                i.forEach(function (n) {
                  var a = n.component,
                    i = n.jsonPointer;
                  (a.type ===
                    o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.RICH_TEXT ||
                    a.type ===
                      o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.TEXT_BODY ||
                    a.type ===
                      o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES
                        .TEXT_CAPTION) &&
                    a.text != null &&
                    Array.isArray(a.text) &&
                    a.text.forEach(function (n) {
                      if (o("WAFlowsDynamicDataUtils").isBindingValue(n)) {
                        var l = o(
                          "WAFlowJSONValidationError",
                        ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getRichTextInvalidItemDynamicDataErrorMsg(
                          a.type,
                          r.id,
                          n,
                        );
                        t.push(
                          e.getError(
                            l,
                            [i + "/type"],
                            o("WAFlowJSONValidationError")
                              .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                              .INVALID_TEXT_DYNAMIC_DATA,
                          ),
                        );
                      }
                    });
                });
              },
              a = 0;
            a < n.length;
            a++
          )
            r();
          return t;
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowsJSONRichTextDynamicDataValidatorV501 = e;
  },
  98,
);
