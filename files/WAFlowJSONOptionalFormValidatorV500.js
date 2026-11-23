__d(
  "WAFlowJSONOptionalFormValidatorV500",
  ["WAFlowJSONBaseValidator", "WAFlowJSONValidationError", "WAFlowsTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = o("WAFlowsTypes")).WA_FLOWS_COMPONENT_NAMES.CHECKBOX_GROUP,
        e.WA_FLOWS_COMPONENT_NAMES.RADIOBUTTONS_GROUP,
        e.WA_FLOWS_COMPONENT_NAMES.TEXT_AREA,
        e.WA_FLOWS_COMPONENT_NAMES.TEXT_INPUT,
        e.WA_FLOWS_COMPONENT_NAMES.OPT_IN,
        e.WA_FLOWS_COMPONENT_NAMES.DROPDOWN,
        e.WA_FLOWS_COMPONENT_NAMES.DATE_PICKER,
        e.WA_FLOWS_COMPONENT_NAMES.PHOTO_PICKER,
        e.WA_FLOWS_COMPONENT_NAMES.DOCUMENT_PICKER,
      ],
      u = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.validate = function () {
            for (
              var e = [],
                t = this.flowJSONData.flowJson.screens,
                n = [],
                r = new Set(),
                a = 0;
              a < t.length;
              a++
            ) {
              var i = t[a];
              this.flowJSONData.findComponent(
                i.id,
                o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.FORM,
              ) != null &&
                this.flowJSONData
                  .getFlattenComponents(i.id)
                  .filter(function (e) {
                    return !e.isInsideForm && s.includes(e.component.type);
                  })
                  .forEach(function (e) {
                    (r.add(e.component.type), n.push(e.jsonPointer));
                  });
            }
            if (n.length > 0) {
              var l = o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getComponentsOutsideFormErrorMsg(
                Array.from(r),
              );
              e.push(
                this.getError(
                  l,
                  n,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE.COMPONENTS_OUTSIDE_FORM,
                ),
              );
            }
            return e;
          }),
          t
        );
      })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONOptionalFormValidatorV500 = u;
  },
  98,
);
