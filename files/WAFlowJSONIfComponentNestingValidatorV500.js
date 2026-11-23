__d(
  "WAFlowJSONIfComponentNestingValidatorV500",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONValidationError",
    "unsafeCast",
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
          var e = this,
            t = [],
            n = [];
          return (
            this.flowJSONData.flowJson.screens.forEach(function (t) {
              var a,
                i =
                  (a = e.flowJSONData.getComponentDataByType(
                    t.id,
                    o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.IF,
                  )) != null
                    ? a
                    : [];
              i.forEach(function (e) {
                var t = r("unsafeCast")(e.component),
                  o = s(t);
                o > 2 && n.push("" + e.jsonPointer);
              });
            }),
            n.length > 0 &&
              t.push(
                this.getError(
                  o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMaximumNestingLevelForIfComponent(),
                  n,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE.MAXIMUM_IF_NESTING,
                ),
              ),
            t
          );
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    function s(e, t) {
      var n, r;
      t === void 0 && (t = 0);
      var a = t,
        i = (n = e.then) != null ? n : [],
        l = (r = e.else) != null ? r : [];
      for (var u of [i, l])
        for (var c of u)
          c.type === o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.IF &&
            (a = Math.max(a, s(c, a + 1)));
      return a;
    }
    l.WAFlowJSONIfComponentNestingValidatorV500 = e;
  },
  98,
);
