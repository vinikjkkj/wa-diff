__d(
  "WAFlowsJSONDynamicParserValidatorV600",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONParseUtils",
    "WAFlowJSONSchemaUtils",
    "WAFlowJSONValidationError",
    "WAFlowsASTTypeValidator",
    "WAFlowsDynamicDataUtils",
    "WAFlowsTypeGuards",
    "WAFlowsTypes",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.EXCLUDED_KEYS = new Set([
            "type",
            "init-value",
            "init-values",
            "error-message",
            "error-messages",
          ])),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.validate = function () {
          var e = this,
            t = this.flowJSONData.flowJson.screens,
            n = [],
            r = [],
            a = o("WAFlowJSONParseUtils").WAFlowJSONMapScreenProperties(
              this.flowJSONData,
            );
          return (
            t.forEach(function (t) {
              e.flowJSONData
                .getFlattenComponents(t.id)
                .flatMap(function (n) {
                  return e.validateComponentProps(n, t.id, a);
                })
                .filter(function (e) {
                  return e.hasValidationFailed;
                })
                .forEach(function (t) {
                  var a;
                  (r.push(t.pointer),
                    n.push(
                      e.getError(
                        (a = t.message) != null ? a : "",
                        t.pointer ? [t.pointer] : "",
                        o("WAFlowJSONValidationError")
                          .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                          .INVALID_PROPERTY_VALUE,
                      ),
                    ));
                });
            }),
            n
          );
        }),
        (n.validateComponentProps = function (t, n, a) {
          var e = this,
            i = t.component,
            l = t.isInsideForm,
            s = o("WAFlowJSONSchemaUtils").getComponentSchemaByComponentType(
              this.flowJSONData.getFlowJSONSchema(),
              i.type,
              l,
            ),
            u = s.properties,
            c = [];
          if (i.type !== o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.FORM) {
            var d = i;
            Object.keys(i).forEach(function (l) {
              var s = d[l];
              if (
                o("WAFlowsTypeGuards").isString(s) &&
                !o("WAFlowsDynamicDataUtils").isBindingValue(s) &&
                !e.EXCLUDED_KEYS.has(l)
              ) {
                if (
                  i.type ===
                    o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.RICH_TEXT &&
                  l === "text"
                ) {
                  o(
                    "WAFlowsDynamicDataUtils",
                  ).DYNAMIC_DATA_STRING_INTERPOLATION_PATTERN.test(s) &&
                    c.push({
                      hasValidationFailed: !0,
                      pointer: {
                        pointer: t.jsonPointer + "/" + l,
                        isKeyPointer: !0,
                      },
                      message: o("WAFlowJSONValidationError")
                        .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE
                        .UNSUPPORTED_RICH_TEXT_STRING_INTERPOLATION,
                    });
                  return;
                }
                try {
                  var m = u[l];
                  o("WAFlowsASTTypeValidator").checkFlowDynamicExpressionTypes(
                    s,
                    n,
                    a,
                    m,
                    e.flowJSONData.getTemplateVersion(),
                  );
                } catch (e) {
                  var p = r("getErrorSafe")(e);
                  c.push({
                    hasValidationFailed: !0,
                    pointer: {
                      pointer: t.jsonPointer + "/" + l,
                      isKeyPointer: !0,
                    },
                    message: "" + p.message,
                  });
                }
              }
            });
          }
          return c;
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.default = e;
  },
  98,
);
