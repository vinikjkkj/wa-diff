__d(
  "WAFlowsJSONRichTextPlacementValidatorV501",
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
          for (
            var e = [], t = this.flowJSONData.flowJson.screens, n = 0;
            n < t.length;
            n++
          ) {
            var r = t[n],
              a = this.flowJSONData.getFlattenComponents(r.id),
              i = a.find(function (e) {
                return (
                  e.component.type ===
                  o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.RICH_TEXT
                );
              });
            if (i != null && a.length > 1) {
              var l = [];
              l.push(i.jsonPointer + "/type");
              var s = o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getRichTextPlacementErrorMsg();
              e.push(
                this.getError(
                  s,
                  l,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                    .INVALID_RICHTEXT_PLACEMENT,
                ),
              );
            }
          }
          return e;
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowsJSONRichTextPlacementValidatorV501 = e;
  },
  98,
);
