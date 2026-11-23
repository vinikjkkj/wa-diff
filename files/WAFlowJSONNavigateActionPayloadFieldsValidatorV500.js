__d(
  "WAFlowJSONNavigateActionPayloadFieldsValidatorV500",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidationResultUtil",
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
            r =
              (e = this.flowJSONData.dataChannelLessActionData.get(
                o("WAFlowJSONConstants").WAFlowsActionType.NAVIGATE,
              )) != null
                ? e
                : [];
          return (
            r.forEach(function (e) {
              (t.validatePayloadFieldsInScreenDataModel(e, n),
                t.validateMissingFieldsInPayload(e, n));
            }),
            n
          );
        }),
        (n.getScreenName = function (t) {
          var e;
          return (
            ((e = t.actionValue) == null || (e = e.next) == null
              ? void 0
              : e.name) || ""
          );
        }),
        (n.createNoDataModelInGivenScreenError = function (t, n) {
          var e = o(
            "WAFlowJSONValidationError",
          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getNoDataModelInNextScreenErrorMsg(
            t,
          );
          return this.getError(
            e,
            n,
            o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
              .INVALID_NAVIGATE_ACTION_PAYLOAD,
          );
        }),
        (n.createMissingFieldsInGivenScreenError = function (t, n, r) {
          var e = o(
            "WAFlowJSONValidationError",
          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingFieldsInNextScreenErrorMsg(
            n,
          );
          return this.getError(
            e,
            r,
            o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
              .INVALID_NAVIGATE_ACTION_PAYLOAD,
          );
        }),
        (n.validatePayloadFieldsInScreenDataModel = function (t, n) {
          var e,
            r,
            a,
            i = this.flowJSONData.screenData,
            l = this.getScreenName(t),
            s =
              (e = (r = t.actionValue) == null ? void 0 : r.payload) != null
                ? e
                : {},
            u = Object.keys(s),
            c =
              (a = i.get(l)) == null || (a = a.data) == null ? void 0 : a.data;
          if (c == null) {
            if (u.length !== 0) {
              var d = t.jsonDataPointer + "/payload";
              n.push(this.createNoDataModelInGivenScreenError(l, d));
            }
            return;
          }
          var m = Object.keys(c),
            p = u.filter(function (e) {
              return !m.includes(e);
            });
          if (p.length > 0) {
            var _ = [];
            (p.forEach(function (e) {
              return _.push(t.jsonDataPointer + "/payload/" + e);
            }),
              n.push(
                this.createMissingFieldsInGivenScreenError(
                  l,
                  p,
                  o("WAFlowJSONValidationResultUtil").getKeyPointers(_),
                ),
              ));
          }
        }),
        (n.validateMissingFieldsInPayload = function (t, n) {
          var e,
            r,
            a = this.flowJSONData.screenData,
            i = this.getScreenName(t),
            l =
              (e = a.get(i)) == null || (e = e.data) == null ? void 0 : e.data;
          if (l != null) {
            var s = Object.keys(l),
              u = (r = t.actionValue) == null ? void 0 : r.payload,
              c = s.filter(function (e) {
                return u == null || !Object.prototype.hasOwnProperty.call(u, e);
              });
            if (c.length) {
              if (u == null) {
                n.push(
                  this.getError(
                    o(
                      "WAFlowJSONValidationError",
                    ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingPayloadInNavigateActionErrorMsg(),
                    t.jsonDataPointer,
                    o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                      .MISSING_NAVIGATION_ACTION_PAYLOAD,
                  ),
                );
                return;
              }
              var d = t.jsonDataPointer + "/payload",
                m = o(
                  "WAFlowJSONValidationError",
                ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingFieldsInNavigateActionPayloadErrorMsg(
                  c,
                );
              n.push(
                this.getError(
                  m,
                  d,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                    .INVALID_NAVIGATE_ACTION_PAYLOAD,
                ),
              );
            }
          }
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONNavigateActionPayloadFieldsValidatorV500 = e;
  },
  98,
);
