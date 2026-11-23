__d(
  "WAFlowJSONNestedExpressionActionPayloadPropertyValidatorV702",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONParseUtils",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidationResultUtil",
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
          var e,
            t,
            n = this,
            r = [],
            a = this.flowJSONData.dataChannelLessActionData,
            i =
              (e = a.get(
                o("WAFlowJSONConstants").WAFlowsActionType.COMPLETE,
              )) != null
                ? e
                : [],
            l =
              (t = this.flowJSONData.dataChannelActionData.get(
                o("WAFlowJSONConstants").WAFlowsActionType.DATA_EXCHANGE,
              )) != null
                ? t
                : [];
          return (
            i.forEach(function (e) {
              var t = e.screenId;
              if (!n.flowJSONData.getTerminalScreens().has(t)) {
                var a = e.jsonDataPointer + "/name",
                  i = o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getCompleteActionOnlyOnTerminalScreenErrorMsg();
                r.push(
                  n.getError(
                    i,
                    a,
                    o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                      .INVALID_COMPLETE_ACTION,
                  ),
                );
              }
            }),
            [].concat(i, l).forEach(function (e) {
              r.push.apply(r, n.getPayloadErrors(e));
            }),
            r
          );
        }),
        (n.getPayloadErrors = function (t) {
          var e,
            n,
            r =
              (e = (n = t.actionValue) == null ? void 0 : n.payload) != null
                ? e
                : {},
            o = [];
          for (var a of Object.entries(r)) {
            var i = a[0],
              l = a[1],
              s = t.jsonDataPointer + "/payload/" + i;
            o.push.apply(o, this.getPayloadPropertyErrors(t, l, s));
          }
          return o;
        }),
        (n.getPayloadPropertyErrors = function (t, n, a) {
          var e = this,
            i = o("WAFlowJSONParseUtils").WAFlowJSONMapScreenProperties(
              this.flowJSONData,
            ),
            l = [],
            s;
          try {
            s = o("WAFlowJSONValidationResultUtil").getFieldValueSchemaType(
              n,
              t.screenId,
              i,
              this.flowJSONData.getTemplateVersion(),
            );
          } catch (e) {
            return (
              l.push(
                this.getError(
                  e instanceof Error ? e.message : String(e),
                  a,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                    .INVALID_ACTION_PAYLOAD_PROPERTY,
                ),
              ),
              l
            );
          }
          if (s.has(o("WAFlowJSONConstants").WAFlowsDataType.OBJECT)) {
            var u = r("unsafeCast")(n);
            for (var c of Object.entries(u)) {
              var d = c[0],
                m = c[1];
              l.push.apply(l, this.getPayloadPropertyErrors(t, m, a + "/" + d));
            }
          }
          if (s.has(o("WAFlowJSONConstants").WAFlowsDataType.ARRAY)) {
            var p = r("unsafeCast")(n);
            p.forEach(function (n, r) {
              l.push.apply(l, e.getPayloadPropertyErrors(t, n, a + "/" + r));
            });
          }
          return l;
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONNestedExpressionActionPayloadPropertyValidatorV702 = e;
  },
  98,
);
