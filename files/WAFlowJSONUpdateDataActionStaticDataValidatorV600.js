__d(
  "WAFlowJSONUpdateDataActionStaticDataValidatorV600",
  [
    "invariant",
    "WAFlowJSONConstants",
    "WAFlowJSONNavigateActionStaticDataValidatorV500",
    "WAFlowJSONParseUtils",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidationResultUtil",
    "WAFlowsASTTypeValidator",
    "WAFlowsDynamicDataUtils",
    "unsafeCast",
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
          var e = this,
            t = [],
            n = o("WAFlowJSONParseUtils").WAFlowJSONMapScreenProperties(
              this.flowJSONData,
            );
          return (
            this.flowJSONData.getAllActions().forEach(function (r) {
              var a;
              ((a = r.actionValue) == null ? void 0 : a.payload) == null ||
                r.actionValue.name !==
                  o("WAFlowJSONConstants").WAFlowsActionType.UPDATE_DATA ||
                e.validateNavigateActionStaticDataV600(r, t, n);
            }),
            t
          );
        }),
        (n.validateNavigateActionStaticDataV600 = function (t, n, r) {
          var e,
            a,
            i,
            l =
              (e = (a = t.actionValue) == null ? void 0 : a.payload) != null
                ? e
                : {},
            s = this.flowJSONData.screenData,
            u = this.getScreenName(t),
            c = s.get(u),
            d = c == null || (i = c.data) == null ? void 0 : i.data;
          if (!(c == null || d == null)) {
            var m =
              "/" +
              o("WAFlowJSONConstants").WA_FLOW_JSON_SCREENS +
              "/" +
              c.index +
              "/data";
            for (var p of Object.entries(l)) {
              var _ = p[0],
                f = p[1];
              this.validateFieldV600(t, f, _, d[_], m + "/" + _, n, r);
            }
          }
        }),
        (n.validateFieldV600 = function (t, n, a, i, l, s, u) {
          var e = this;
          if (!this.shouldSkipValidation(n)) {
            var c = this.getScreenName(t),
              d = t.jsonDataPointer + "/payload/" + a,
              m = this.getScreenName(t);
            if (i == null) {
              var p = o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getPayloadFieldIsMissingInNextScreenErrorMsg(
                a,
                t.screenId,
                m,
              );
              s.push(
                this.createError(p, [d, l.substring(0, l.lastIndexOf("/"))]),
              );
              return;
            }
            var _;
            try {
              _ = o("WAFlowJSONValidationResultUtil").getFieldValueSchemaType(
                n,
                c,
                u,
                this.flowJSONData.getTemplateVersion(),
              );
            } catch (e) {
              s.push(
                this.getError(
                  e instanceof Error ? e.message : String(e),
                  d,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                    .INVALID_ACTION_PAYLOAD_PROPERTY,
                ),
              );
              return;
            }
            var f = i.type;
            if (o("WAFlowsDynamicDataUtils").isNestedExpressionValue(n)) {
              this.validateNestedExpressionV600(t, m, n, f, i, _, a, d, s, u);
              return;
            }
            if (!_.has(f)) {
              var g = Array.from(_).join(", "),
                h = o(
                  "WAFlowJSONValidationError",
                ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getPayloadFieldNotMatchSchemaInNextScreenErrorMsg(
                  a,
                  t.screenId,
                  _.size > 1 ? "one of [" + g + "]" : "'" + g + "'",
                  m,
                  f,
                );
              s.push(this.createError(h, d));
              return;
            }
            if (
              (_.has(o("WAFlowJSONConstants").WAFlowsDataType.OBJECT) &&
                this.validateObjectFieldV600(t, n, a, d, i, l, s, u),
              _.has(o("WAFlowJSONConstants").WAFlowsDataType.ARRAY))
            ) {
              var y = r("unsafeCast")(n);
              y.forEach(function (n, r) {
                e.validateFieldV600(
                  t,
                  n,
                  a + "/" + r,
                  i == null ? void 0 : i.items,
                  l + "/items",
                  s,
                  u,
                );
              });
            }
          }
        }),
        (n.validateNestedExpressionV600 = function (
          t,
          n,
          r,
          a,
          i,
          l,
          u,
          c,
          d,
          m,
        ) {
          var e = this.getScreenName(t);
          try {
            (typeof r == "string" || s(0, 87776),
              i != null || s(0, 87789),
              o("WAFlowsASTTypeValidator").checkFlowDynamicExpressionTypes(
                r,
                e,
                m,
                i,
                this.flowJSONData.getTemplateVersion(),
              ));
          } catch (e) {
            var p = Array.from(l).join(", "),
              _ = o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getPayloadFieldNotMatchSchemaInNextScreenErrorMsg(
                u,
                t.screenId,
                l.size > 1 ? "one of [" + p + "]" : "'" + p + "'",
                n,
                a,
              );
            d.push(this.createError(_, c));
          }
        }),
        (n.validateObjectFieldV600 = function (t, n, a, i, l, s, u, c) {
          var e,
            d = r("unsafeCast")(n),
            m = this.getScreenName(t);
          for (var p of Object.entries(d)) {
            var _,
              f = p[0],
              g = p[1];
            this.validateFieldV600(
              t,
              g,
              a + "/" + f,
              l == null || (_ = l.properties) == null ? void 0 : _[f],
              s + "/properties/" + f,
              u,
              c,
            );
          }
          var h = (e = l == null ? void 0 : l.properties) != null ? e : {},
            y = Object.keys(h).filter(function (e) {
              return !Object.prototype.hasOwnProperty.call(d, e);
            });
          if (y.length > 0) {
            var C = o(
              "WAFlowJSONValidationError",
            ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getDataModelFieldsAreMissingInPayloadErrorMsg(
              y,
              t.screenId,
              m,
            );
            u.push(this.createError(C, i));
          }
        }),
        (n.shouldSkipValidation = function (t) {
          return o("WAFlowJSONValidationResultUtil").isDynamicDataBindingV400(
            t,
          );
        }),
        (n.createError = function (t, n) {
          return this.getError(
            t,
            n,
            o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
              .INVALID_UPDATE_DATA_ACTION_PAYLOAD,
          );
        }),
        (n.getScreenName = function (t) {
          return t.screenId;
        }),
        t
      );
    })(
      o("WAFlowJSONNavigateActionStaticDataValidatorV500")
        .WAFlowJSONNavigateActionStaticDataValidatorV500,
    );
    l.WAFlowJSONUpdateDataActionStaticDataValidatorV600 = e;
  },
  98,
);
