__d(
  "WAFlowJSONNativeComponentsInitValidatorV500",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidationResultUtil",
    "isObject",
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
            t = [];
          return (
            this.flowJSONData.flowJson.screens.forEach(function (n) {
              var a = e.flowJSONData
                  .getComponentDataByType(n.id, [
                    o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
                      .PHOTO_PICKER,
                    o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
                      .DOCUMENT_PICKER,
                  ])
                  .filter(function (e) {
                    return e.isInsideForm;
                  }),
                i = e.flowJSONData.getComponentDataByType(
                  n.id,
                  o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.FORM,
                );
              if (!(a.length === 0 || i.length === 0)) {
                var l = i[0],
                  s = r("unsafeCast")(l.component);
                if (r("isObject")(s["init-values"])) {
                  var u = [],
                    c = new Set(),
                    d = r("unsafeCast")(s["init-values"]);
                  if (
                    (a.forEach(function (e) {
                      var t,
                        n = (t = e.component.name) != null ? t : "",
                        r = l.jsonPointer + "/init-values/" + n;
                      Object.prototype.hasOwnProperty.call(d, n) &&
                        (u.push.apply(
                          u,
                          o("WAFlowJSONValidationResultUtil").getKeyPointers(r),
                        ),
                        c.add(e.component.type));
                    }),
                    u.length > 0)
                  ) {
                    var m = o(
                      "WAFlowJSONValidationError",
                    ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getNativeComponentInFormInitValuesErrorMsg(
                      Array.from(c),
                    );
                    t.push(
                      e.getError(
                        m,
                        u,
                        o("WAFlowJSONValidationError")
                          .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                          .NATIVE_COMPONENT_IN_FORM_INIT_VALUES,
                      ),
                    );
                  }
                }
              }
            }),
            t
          );
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONNativeComponentsInitValidatorV500 = e;
  },
  98,
);
