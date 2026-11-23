__d(
  "WAFlowJSONComponentPlacementValidatorV600",
  ["WAFlowJSONBaseValidator", "WAFlowJSONValidationError", "WAFlowsTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1,
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.validate = function () {
            var t = this,
              n = [],
              r = this.flowJSONData.flowJson.screens;
            return (
              r.forEach(function (r) {
                var a = t.getLoneComponentTypes();
                a.forEach(function (a) {
                  var i = t.getNonExclusiveComponents(a),
                    l = t.flowJSONData.getFlattenComponents(r.id, i),
                    s = t.flowJSONData.getComponentDataByType(r.id, a),
                    u = Object.prototype.hasOwnProperty.call(
                      t.getLoneComponentCount(),
                      a,
                    )
                      ? t.getLoneComponentCount()[a]
                      : e;
                  if (t.checkIfComponentIsAlone(s.length, l.length, u)) {
                    var c = [];
                    (l.forEach(function (e) {
                      e.component.type === a && c.push(e.jsonPointer + "/type");
                    }),
                      n.push(
                        t.getError(
                          o(
                            "WAFlowJSONValidationError",
                          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getComponentPlacementErrorMsg(
                            a,
                            u,
                            i,
                          ),
                          c,
                          o("WAFlowJSONValidationError")
                            .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                            .INVALID_COMPONENT_PLACEMENT,
                        ),
                      ));
                  }
                });
              }),
              n
            );
          }),
          (r.getLoneComponentTypes = function () {
            return [o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.RICH_TEXT];
          }),
          (r.getNonExclusiveComponents = function (t) {
            return [];
          }),
          (r.getLoneComponentCount = function () {
            var t;
            return (
              (t = {}),
              (t[o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.RICH_TEXT] = e),
              t
            );
          }),
          (r.checkIfComponentIsAlone = function (t, n, r) {
            return t > r || (t > 0 && n >= r && t < n);
          }),
          n
        );
      })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    ((l.WA_FLOW_JSON_DEFAULT_MAX_LONE_COMPONENT_COUNT = e),
      (l.WAFlowJSONComponentPlacementValidatorV600 = s));
  },
  98,
);
