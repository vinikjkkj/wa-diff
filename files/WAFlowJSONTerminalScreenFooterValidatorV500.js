__d(
  "WAFlowJSONTerminalScreenFooterValidatorV500",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidationResultUtil",
    "WAFlowsTypes",
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
          var e = [],
            t = [],
            n = [],
            r = this.flowJSONData.getTerminalScreens(),
            a = this.flowJSONData.flowJSONPointers;
          for (var i of r) {
            var l,
              u = this.flowJSONData.getScreenLayout(i),
              c = [
                (l = o("WAFlowsTypes")).WA_FLOWS_LAYOUT_NAMES.ITEM_DETAIL,
                l.WA_FLOWS_LAYOUT_NAMES.CART,
                l.WA_FLOWS_LAYOUT_NAMES.CATEGORY_LIST,
                l.WA_FLOWS_LAYOUT_NAMES.ITEM_LIST,
              ];
            if (!c.includes(u)) {
              var d = this.flowJSONData.componentTypeDataMap.get(i);
              if (
                d != null &&
                d != null &&
                d.has(
                  o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.FOOTER,
                )
              ) {
                e = e.concat(s(d, this.flowJSONData, a));
                continue;
              }
              var m = this.flowJSONData.getScreenIndex(i);
              m !== -1 && (t.push("/screens/" + m), n.push(i));
            }
          }
          if (t.length > 0) {
            var p = t.reduce(function (e, t) {
              var n,
                r = (n = a.get(t)) == null ? void 0 : n.value;
              return (r != null && e.push(r), e);
            }, []);
            e.push(
              o("WAFlowJSONValidationResultUtil").getWAFlowJSONValidationError({
                code: o("WAFlowJSONValidationError")
                  .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                  .MISSING_FOOTER_ON_TERMINAL_SCREEN,
                message: o(
                  "WAFlowJSONValidationError",
                ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getFooterMissingOnTerminalScreenErrorMsg(
                  n,
                ),
                pointers: p,
              }),
            );
          }
          return e;
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    function s(e, t, n) {
      var r,
        a = [],
        i =
          e == null
            ? void 0
            : e.get(
                o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.FOOTER,
              );
      if (i == null || i.length === 0) return a;
      var l = (r = i[0].component["on-click-action"]) == null ? void 0 : r.name;
      if (
        l !== o("WAFlowJSONConstants").WAFlowsActionType.DATA_EXCHANGE &&
        l !== o("WAFlowJSONConstants").WAFlowsActionType.COMPLETE
      ) {
        var s,
          u = t.isDataChannelLessFlow()
            ? [o("WAFlowJSONConstants").WAFlowsActionType.COMPLETE]
            : [
                o("WAFlowJSONConstants").WAFlowsActionType.DATA_EXCHANGE,
                o("WAFlowJSONConstants").WAFlowsActionType.COMPLETE,
              ],
          c =
            (s = n.get(
              i[0].jsonPointer +
                "/" +
                o("WAFlowJSONConstants").WA_FLOW_JSON_ON_CLICK_ACTION +
                "/" +
                o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_NAME,
            )) == null
              ? void 0
              : s.value;
        a.push(
          o("WAFlowJSONValidationResultUtil").getWAFlowJSONValidationError({
            code: o("WAFlowJSONValidationError")
              .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_VALUE,
            message: o(
              "WAFlowJSONValidationError",
            ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPropertyValueErrorMsg(
              o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_NAME,
              u,
            ),
            pointers:
              c != null
                ? c
                : o(
                    "WAFlowJSONValidationResultUtil",
                  ).getWAFlowJSONDefaultErrorPointer(),
          }),
        );
      }
      return a;
    }
    l.WAFlowJSONTerminalScreenFooterValidatorV500 = e;
  },
  98,
);
