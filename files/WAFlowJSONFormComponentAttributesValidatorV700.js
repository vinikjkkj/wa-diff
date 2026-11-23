__d(
  "WAFlowJSONFormComponentAttributesValidatorV700",
  [
    "invariant",
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONParseUtils",
    "WAFlowJSONValidationError",
    "WAFlowsASTTypeValidator",
    "WAFlowsDynamicDataUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
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
              t = this.flowJSONData.flowJson.screens,
              n = [],
              r = o("WAFlowJSONParseUtils").WAFlowJSONMapScreenProperties(
                this.flowJSONData,
              ),
              a = function () {
                var a = t[i];
                e.flowJSONData
                  .getFlattenComponents(a.id)
                  .filter(function (e) {
                    return (
                      e.component.type ===
                      o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.FORM
                    );
                  })
                  .forEach(function (t) {
                    return e.validateFormComponent(t, r, a.id, n);
                  });
              },
              i = 0;
            i < t.length;
            i++
          )
            a();
          return n;
        }),
        (n.validateFormComponent = function (t, n, r, o) {
          var e = t.jsonPointer,
            a = t.component,
            i = a["error-messages"],
            l = a["init-values"];
          return (
            l != null &&
              typeof l == "object" &&
              this.validateTypes(n, r, o, l, e),
            i != null &&
              typeof i == "object" &&
              this.validateTypes(n, r, o, i, e, "error-messages"),
            { hasValidationFailed: !1 }
          );
        }),
        (n.validateTypes = function (t, n, r, a, i, l) {
          l === void 0 && (l = "init-values");
          var e = Object.keys(a);
          for (var s of e) {
            var u = this.getActualType(t, n, a[s]),
              c = this.getExpectedType(t, n, s, l);
            c === "not-found" && l === "init-values"
              ? r.push(
                  this.getError(
                    o(
                      "WAFlowJSONValidationError",
                    ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getUnusedInitValuePropertyTypeErrorMsg(
                      s,
                    ),
                    i + "/" + l,
                    o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                      .INVALID_PROPERTY_VALUE,
                  ),
                )
              : c != null &&
                c !== u &&
                r.push(
                  this.getError(
                    o(
                      "WAFlowJSONValidationError",
                    ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPropertyTypeErrorMsg(
                      s,
                      c,
                      u,
                    ),
                    i + "/" + l,
                    o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                      .INVALID_PROPERTY_VALUE,
                  ),
                );
          }
        }),
        (n.getActualType = function (t, n, r) {
          return o("WAFlowsDynamicDataUtils").isBindingValue(r) ||
            o("WAFlowsDynamicDataUtils").isNestedExpressionValue(r)
            ? this.getDynamicType(t, n, r)
            : Array.isArray(r)
              ? "array"
              : typeof r;
        }),
        (n.getDynamicType = function (t, n, r) {
          return (
            typeof r == "string" || s(0, 8087),
            o("WAFlowsASTTypeValidator").getDynamicExpressionReturnType(r, n, t)
          );
        }),
        (n.getExpectedType = function (t, n, r, o) {
          var e, a;
          o === void 0 && (o = "init-values");
          var i =
            o === "error-messages"
              ? (e = t.get(n)) == null || (e = e.get("error-messages")) == null
                ? void 0
                : e.get(r)
              : (a = t.get(n)) == null || (a = a.get("form")) == null
                ? void 0
                : a.get(r);
          return typeof i == "string"
            ? i
            : o === "error-messages"
              ? "string"
              : "not-found";
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONFormComponentAttributesValidatorV700 = e;
  },
  98,
);
