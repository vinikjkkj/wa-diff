__d(
  "WAFlowJSONNavigateActionStaticDataValidatorV500",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
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
            t = this,
            n = [],
            r = this.flowJSONData.dataChannelLessActionData,
            a =
              (e = r.get(
                o("WAFlowJSONConstants").WAFlowsActionType.NAVIGATE,
              )) != null
                ? e
                : [];
          return (
            a.forEach(function (e) {
              return t.validateNavigateActionStaticData(e, n);
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
        (n.createError = function (t, n) {
          return this.getError(
            t,
            n,
            o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
              .INVALID_NAVIGATE_ACTION_STATIC_DATA,
          );
        }),
        (n.validateNavigateActionStaticData = function (t, n) {
          var e,
            r,
            a,
            i =
              (e = (r = t.actionValue) == null ? void 0 : r.payload) != null
                ? e
                : {},
            l = this.flowJSONData.screenData,
            s = this.getScreenName(t),
            u = l.get(s),
            c = u == null || (a = u.data) == null ? void 0 : a.data;
          if (!(u == null || c == null)) {
            var d =
              "/" +
              o("WAFlowJSONConstants").WA_FLOW_JSON_SCREENS +
              "/" +
              u.index +
              "/data";
            for (var m of Object.entries(i)) {
              var p = m[0],
                _ = m[1];
              this.validateField(t, _, p, c[p], d + "/" + p, n);
            }
          }
        }),
        (n.shouldSkipValidation = function (t) {
          return o("WAFlowJSONValidationResultUtil").isDynamicDataBindingV400(
            t,
          );
        }),
        (n.validateField = function (t, n, a, i, l, s) {
          var e = this;
          if (!this.shouldSkipValidation(n)) {
            var u = t.jsonDataPointer + "/payload/" + a,
              c = this.getScreenName(t);
            if (i == null) {
              var d = o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getPayloadFieldIsMissingInNextScreenErrorMsg(
                a,
                t.screenId,
                c,
              );
              s.push(
                this.createError(d, [u, l.substring(0, l.lastIndexOf("/"))]),
              );
              return;
            }
            var m = o("WAFlowJSONValidationResultUtil").getFieldValueSchemaType(
                n,
              ),
              p = i.type;
            if (!m.has(p)) {
              var _ = Array.from(m).join(", "),
                f = o(
                  "WAFlowJSONValidationError",
                ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getPayloadFieldNotMatchSchemaInNextScreenErrorMsg(
                  a,
                  t.screenId,
                  m.size > 1 ? "one of [" + _ + "]" : "'" + _ + "'",
                  c,
                  p,
                );
              s.push(this.createError(f, u));
              return;
            }
            if (m.has(o("WAFlowJSONConstants").WAFlowsDataType.OBJECT)) {
              var g,
                h = r("unsafeCast")(n);
              for (var y of Object.entries(h)) {
                var C,
                  b = y[0],
                  v = y[1];
                this.validateField(
                  t,
                  v,
                  a + "/" + b,
                  i == null || (C = i.properties) == null ? void 0 : C[b],
                  l + "/properties/" + b,
                  s,
                );
              }
              var S = (g = i == null ? void 0 : i.properties) != null ? g : {},
                R = Object.keys(S).filter(function (e) {
                  return !Object.prototype.hasOwnProperty.call(h, e);
                });
              if (R.length > 0) {
                var L = o(
                  "WAFlowJSONValidationError",
                ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getDataModelFieldsAreMissingInPayloadErrorMsg(
                  R,
                  t.screenId,
                  c,
                );
                s.push(this.createError(L, u));
              }
            }
            if (m.has(o("WAFlowJSONConstants").WAFlowsDataType.ARRAY)) {
              var E = r("unsafeCast")(n);
              E.forEach(function (n, r) {
                e.validateField(
                  t,
                  n,
                  a + "/" + r,
                  i == null ? void 0 : i.items,
                  l + "/items",
                  s,
                );
              });
            }
          }
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONNavigateActionStaticDataValidatorV500 = e;
  },
  98,
);
