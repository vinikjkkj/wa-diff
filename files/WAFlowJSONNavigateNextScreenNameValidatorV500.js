__d(
  "WAFlowJSONNavigateNextScreenNameValidatorV500",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidationResultUtil",
    "WATypeUtils",
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
            t = this,
            n = [],
            r = this.flowJSONData.dataChannelLessActionData,
            a =
              (e = r.get(
                o("WAFlowJSONConstants").WAFlowsActionType.NAVIGATE,
              )) != null
                ? e
                : [],
            i = new Set(),
            l = new Set(),
            s = new Set(),
            u = new Set();
          if (
            (a.forEach(function (e) {
              var n,
                r = (n = e.actionValue.next) == null ? void 0 : n.name,
                a = e.jsonDataPointer + "/next/name";
              !o("WATypeUtils").isString(r) ||
                o("WAFlowJSONValidationResultUtil").isDynamicDataBindingV201(
                  r,
                ) ||
                o("WAFlowJSONValidationResultUtil").isFormBinding(r) ||
                (t.flowJSONData.getAllScreenIds().includes(r) ||
                  (i.add(r), l.add(a)),
                e.screenId === r && (s.add(r), u.add(a)));
            }),
            i.size > 0)
          ) {
            var c = o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getUnknownScreenErrorMsg(
                Array.from(i),
              ),
              d = Array.from(l);
            n.push(
              this.getError(
                c,
                d,
                o("WAFlowJSONValidationError")
                  .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                  .INVALID_NAVIGATE_ACTION_NEXT_SCREEN_NAME,
              ),
            );
          }
          if (s.size > 0) {
            var m = o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getSameScreenNavigationErrorMsg(
                Array.from(s),
              ),
              p = Array.from(u);
            n.push(
              this.getError(
                m,
                p,
                o("WAFlowJSONValidationError")
                  .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                  .INVALID_NAVIGATE_ACTION_NEXT_SCREEN_NAME,
              ),
            );
          }
          return n;
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONNavigateNextScreenNameValidatorV500 = e;
  },
  98,
);
