__d(
  "WAFlowJSONNativeComponentCountValidatorV500",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONValidationError",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.PHOTO_PICKER,
        o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.DOCUMENT_PICKER,
      ],
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.validate = function () {
            var t = this,
              n = [];
            return (
              this.flowJSONData.flowJson.screens.forEach(function (r) {
                var a,
                  i,
                  l = u(
                    (a = (i = r.layout) == null ? void 0 : i.children) != null
                      ? a
                      : [],
                  );
                if (l > 1) {
                  var s = t.flowJSONData
                    .getComponentDataByType(r.id, e)
                    .map(function (e) {
                      return e.jsonPointer + "/type";
                    });
                  n.push(
                    t.getError(
                      o(
                        "WAFlowJSONValidationError",
                      ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getOnlyOneNativeComponentPerScreenErrorMsg(),
                      s,
                      o("WAFlowJSONValidationError")
                        .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                        .COMPONENT_TYPE_MAX_NUMBER_PER_SCREEN,
                    ),
                  );
                }
              }),
              n
            );
          }),
          n
        );
      })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    function u(t) {
      var n = 0;
      return (
        t.forEach(function (t) {
          var a = t.type;
          if (a === o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.IF) {
            var i,
              l = r("unsafeCast")(t),
              s = u(l.then),
              c = u((i = l.else) != null ? i : []);
            n += Math.max(s, c);
          } else if (
            a === o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.SWITCH
          ) {
            var d = r("unsafeCast")(t),
              m = 0;
            (Object.entries(d.cases).forEach(function (e) {
              var t = e[0],
                n = e[1];
              m = Math.max(m, u(n));
            }),
              (n += m));
          } else if (
            a === o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.FORM
          ) {
            var p = r("unsafeCast")(t),
              _ = u(p.children);
            n += _;
          } else e.includes(a) && (n += 1);
        }),
        n
      );
    }
    l.WAFlowJSONNativeComponentCountValidatorV500 = s;
  },
  98,
);
