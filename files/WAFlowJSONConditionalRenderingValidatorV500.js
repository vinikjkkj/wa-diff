__d(
  "WAFlowJSONConditionalRenderingValidatorV500",
  [
    "invariant",
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConditionalRenderingLiteralHelper",
    "WAFlowJSONConditionalRenderingOperandHelper",
    "WAFlowJSONConditionalRenderingOperatorHelper",
    "WAFlowJSONConstants",
    "WAFlowJSONParseUtils",
    "WAFlowJSONValidationError",
    "WAFlowsConditionalRenderingTypes",
    "WAFlowsTypeGuards",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "LITERAL",
      u = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.validate = function () {
            for (
              var e = this,
                t = this.flowJSONData.flowJson.screens,
                n = [],
                r = o("WAFlowJSONParseUtils").WAFlowJSONMapScreenProperties(
                  this.flowJSONData,
                ),
                a = this.flowJSONData.getTemplateVersion(),
                i = function () {
                  var i = t[l];
                  e.flowJSONData
                    .getFlattenComponents(i.id)
                    .filter(function (e) {
                      return (
                        e.component.type ===
                        o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.IF
                      );
                    })
                    .map(function (t) {
                      return e.validateIfComponent(a, t, r, i.id);
                    })
                    .filter(function (e) {
                      return e.hasValidationFailed;
                    })
                    .forEach(function (t) {
                      var r;
                      return n.push(
                        e.getError(
                          e.getErrorMessage(t),
                          (r = t.jsonPointer) != null ? r : "",
                          o("WAFlowJSONValidationError")
                            .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                            .INVALID_PROPERTY_VALUE,
                        ),
                      );
                    });
                },
                l = 0;
              l < t.length;
              l++
            )
              i();
            return n;
          }),
          (a.shouldValidateCondition = function (t, n) {
            return o("WAFlowsTypeGuards").isString(t);
          }),
          (a.validateIfComponent = function (t, n, r, o) {
            var e = n.component.condition;
            return this.shouldValidateCondition(e, t)
              ? this.validateStringIfComponent(e, n, r, o)
              : { hasValidationFailed: !1 };
          }),
          (a.validateStringIfComponent = function (t, n, r, a) {
            var e;
            typeof t == "string" || s(0, 88059);
            var i = n.jsonPointer,
              l = this.validateConditionSyntax(r, a, t, i);
            return l != null
              ? l
              : ((e = n.component.then) == null ? void 0 : e.length) === 0
                ? {
                    hasValidationFailed: !0,
                    errorMessage: o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.EMPTY_ARRAY,
                    jsonPointer: i + "/then",
                  }
                : { hasValidationFailed: !1 };
          }),
          (a.validateConditionSyntax = function (n, a, i, l) {
            for (var t = 0, s = [], u = 0; u < i.length; u++)
              switch (this.getCharType(i[u])) {
                case r("WAFlowsConditionalRenderingTypes").EMPTY_STRING:
                  break;
                case r("WAFlowsConditionalRenderingTypes")
                  .OPENING_PARENTHESIS: {
                  (t++,
                    s.push({
                      value: i[u],
                      type: "",
                      isLiteral: !1,
                      isOperand: !1,
                    }));
                  break;
                }
                case r("WAFlowsConditionalRenderingTypes")
                  .CLOSING_PARENTHESIS: {
                  var c = o(
                    "WAFlowJSONConditionalRenderingOperatorHelper",
                  ).validateClosingParenthesis(s, t);
                  if (c.hasValidationFailed)
                    return {
                      column: u,
                      errorMessage: c.errorMessage,
                      hasValidationFailed: !0,
                      jsonPointer: l + "/condition",
                    };
                  (t--,
                    s.push({
                      value: i[u],
                      type: "",
                      isLiteral: !1,
                      isOperand: !1,
                    }));
                  break;
                }
                case e:
                case r("WAFlowsConditionalRenderingTypes")
                  .DYNAMIC_VARIABLE_START: {
                  var d,
                    m,
                    p,
                    _ = this.validateLiteralOrDynamicVariable(n, s, a, i, u);
                  if (_.hasValidationFailed) {
                    var f;
                    return {
                      column: (f = _.column) != null ? f : u,
                      errorMessage: _.errorMessage,
                      hasValidationFailed: !0,
                      jsonPointer: l + "/condition",
                    };
                  }
                  (s.push({
                    value: (d = _.value) != null ? d : "",
                    type: (m = _.valueType) != null ? m : "",
                    isLiteral: this.getCharType(i[u]) === e,
                    isOperand: !0,
                  }),
                    (u = (p = _.endIndex) != null ? p : u));
                  break;
                }
                default: {
                  var g,
                    h,
                    y = o(
                      "WAFlowJSONConditionalRenderingOperatorHelper",
                    ).validateOperator(s, i, u);
                  if (y.hasValidationFailed)
                    return {
                      column: u,
                      errorMessage: y.errorMessage,
                      hasValidationFailed: !0,
                      jsonPointer: l + "/condition",
                    };
                  (s.push({
                    value: (g = y.value) != null ? g : "",
                    type: "",
                    isLiteral: !1,
                    isOperand: !1,
                  }),
                    (u = (h = y.endIndex) != null ? h : u));
                  break;
                }
              }
            return this.validateConditionState(i, t, s, l);
          }),
          (a.validateConditionState = function (t, n, a, i) {
            if (t.length === 0)
              return {
                hasValidationFailed: !0,
                errorMessage: o("WAFlowJSONValidationError")
                  .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.EMPTY_CONDITION,
                jsonPointer: i + "/condition",
              };
            if (n > 0)
              return {
                hasValidationFailed: !0,
                errorMessage: o("WAFlowJSONValidationError")
                  .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE
                  .MISSING_PARENTHESIS_CLOUSURE,
                jsonPointer: i + "/condition",
              };
            var e = a[a.length - 1];
            if (
              e != null &&
              !e.isOperand &&
              e.value !==
                r("WAFlowsConditionalRenderingTypes").CLOSING_PARENTHESIS
            )
              return {
                hasValidationFailed: !0,
                errorMessage: o(
                  "WAFlowJSONValidationError",
                ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingOperandAfterLastOperatorErrorMsg(
                  e.value,
                ),
                jsonPointer: i + "/condition",
              };
            var l = o(
              "WAFlowJSONConditionalRenderingOperatorHelper",
            ).validateStackWithoutParentheses(a);
            return l.hasValidationFailed
              ? {
                  hasValidationFailed: !0,
                  errorMessage: l.errorMessage,
                  jsonPointer: i + "/condition",
                }
              : null;
          }),
          (a.validateLiteralOrDynamicVariable = function (n, r, a, i, l) {
            return this.getCharType(i[l]) === e
              ? o(
                  "WAFlowJSONConditionalRenderingLiteralHelper",
                ).WAFlowJSONValidateIfCompLiteral(r, i, l)
              : o(
                  "WAFlowJSONConditionalRenderingOperandHelper",
                ).WAFlowJSONValidateIfCompOperand(n, r, a, i, l);
          }),
          (a.getErrorMessage = function (t) {
            var e,
              n,
              r =
                t.column != null && t.column >= 0
                  ? " at column " + t.column + "."
                  : (e = t.errorMessage) != null && e.endsWith(".")
                    ? ""
                    : ".";
            return "" + ((n = t.errorMessage) != null ? n : "") + r;
          }),
          (a.getCharType = function (n) {
            return o(
              "WAFlowJSONConditionalRenderingLiteralHelper",
            ).WA_FLOW_JSON_IF_OPERATORS_INITIALS.has(n)
              ? e
              : n;
          }),
          n
        );
      })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONConditionalRenderingValidatorV500 = u;
  },
  98,
);
