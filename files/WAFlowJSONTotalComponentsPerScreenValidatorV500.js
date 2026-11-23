__d(
  "WAFlowJSONTotalComponentsPerScreenValidatorV500",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONValidationError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 100,
      s = (function (t) {
        function n() {
          for (var n, r = arguments.length, o = new Array(r), a = 0; a < r; a++)
            o[a] = arguments[a];
          return (
            (n = t.call.apply(t, [this].concat(o)) || this),
            (n.maxAllowedComponents = e),
            babelHelpers.assertThisInitialized(n) ||
              babelHelpers.assertThisInitialized(n)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.validate = function () {
            for (
              var e = [], t = this.flowJSONData.flowJson.screens, n = 0;
              n < t.length;
              n++
            ) {
              var r = t[n],
                a = this.flowJSONData.getFlattenComponents(r.id, [
                  o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.FORM,
                ]);
              if (!(a.length <= this.maxAllowedComponents)) {
                for (
                  var i = [], l = this.maxAllowedComponents;
                  l < a.length;
                  l++
                )
                  i.push(a[l].jsonPointer + "/type");
                var s = o(
                  "WAFlowJSONValidationError",
                ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMaxComponentPerScreenErrorMsg(
                  "components",
                  this.maxAllowedComponents,
                  a.length,
                );
                e.push(
                  this.getError(
                    s,
                    i,
                    o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                      .MAX_ALLOWED_COMPONENTS_PER_SCREEN,
                  ),
                );
              }
            }
            return e;
          }),
          (r.setMaxAllowedComponentsPerScreen = function (t) {
            this.maxAllowedComponents = t;
          }),
          n
        );
      })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONTotalComponentsPerScreenValidatorV500 = s;
  },
  98,
);
