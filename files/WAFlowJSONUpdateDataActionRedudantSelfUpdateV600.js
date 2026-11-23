__d(
  "WAFlowJSONUpdateDataActionRedudantSelfUpdateV600",
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
          var e = this,
            t = [];
          return (
            this.flowJSONData.getAllActions().forEach(function (n) {
              e.validateRedundantSelfUpdate(n, t);
            }),
            t
          );
        }),
        (n.validateRedundantSelfUpdate = function (t, n) {
          var e, r, a, i;
          if (
            !(
              ((e = t.actionValue) == null ? void 0 : e.payload) == null ||
              t.actionValue.name !==
                o("WAFlowJSONConstants").WAFlowsActionType.UPDATE_DATA
            )
          ) {
            var l = this.flowJSONData.screenData,
              s = this.getScreenName(t),
              u =
                (r = (a = t.actionValue) == null ? void 0 : a.payload) != null
                  ? r
                  : {},
              c =
                (i = l.get(s)) == null || (i = i.data) == null
                  ? void 0
                  : i.data;
            if (c != null) {
              var d = [];
              for (var m of Object.entries(u)) {
                var p = m[0],
                  _ = m[1];
                if (
                  !(
                    !o("WATypeUtils").isString(_) ||
                    !o(
                      "WAFlowJSONValidationResultUtil",
                    ).isDynamicDataBindingV400(_)
                  )
                ) {
                  var f = o(
                    "WAFlowJSONValidationResultUtil",
                  ).getTokensOfDynamicDataBinding(_);
                  if (!(f.length < 1)) {
                    var g = f[0];
                    p === g && d.push(t.jsonDataPointer + "/payload/" + p);
                  }
                }
              }
              d.length > 0 &&
                n.push(
                  this.getError(
                    o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE
                      .ON_SELECT_ACTION_SELF_UPDATE,
                    d,
                    o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                      .INVALID_UPDATE_DATA_ACTION_PAYLOAD,
                  ),
                );
            }
          }
        }),
        (n.getScreenName = function (t) {
          return t.screenId;
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONUpdateDataActionRedudantSelfUpdateValidatorV600 = e;
  },
  98,
);
