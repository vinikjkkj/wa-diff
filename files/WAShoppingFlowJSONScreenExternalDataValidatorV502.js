__d(
  "WAShoppingFlowJSONScreenExternalDataValidatorV502",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONChildrenSchema",
    "WAFlowJSONConstants",
    "WAFlowJSONRootSchema",
    "WAFlowJSONScreenSchema",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidationResultUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var s = "meta_catalog",
      u = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o = e.call(this, t, r) || this),
            (o.validateExternalDataSchema = function (e, t) {
              return c(t);
            }),
            (o.ajv = n),
            o
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.validate = function () {
            var e,
              t = this.ajv.instance,
              n = this.flowJSONData.flowJson;
            t.getKeyword(
              o("WAFlowJSONConstants")
                .WA_SHOPPING_FLOW_JSON_KEYWORD_EXTERNAL_DATA_SOURCE,
            ) ||
              t.addKeyword(
                o("WAFlowJSONConstants")
                  .WA_SHOPPING_FLOW_JSON_KEYWORD_EXTERNAL_DATA_SOURCE,
                { validate: this.validateExternalDataSchema },
              );
            var r = t.compile(this.getSchema(this.flowJSONData.version)),
              a = r(n),
              i =
                (e = r.errors) == null
                  ? void 0
                  : e.filter(function (e) {
                      return (
                        e.keyword ===
                        o("WAFlowJSONConstants")
                          .WA_SHOPPING_FLOW_JSON_KEYWORD_EXTERNAL_DATA_SOURCE
                      );
                    });
            return !a && i != null && i.length > 0
              ? this.formatAJVError(n, this.flowJSONData.flowJSONPointers)
              : [];
          }),
          (n.getSchema = function (t) {
            var e = {},
              n = babelHelpers.extends(
                {
                  type: "object",
                  properties: {
                    screens: o("WAFlowJSONScreenSchema").getScreenSchema(t),
                    routing_model: o(
                      "WAFlowJSONRootSchema",
                    ).getRoutingModelSchema(t),
                  },
                },
                this.getValidationKeyWordSchema(),
                { additionalProperties: !0, $defs: { $components: e } },
              );
            for (var r of o("WAFlowJSONConstants").ComponentRefKey.members()) {
              var a = r.valueOf();
              n.$defs.$components[a] = o(
                "WAFlowJSONChildrenSchema",
              ).getComponentSchemaRefByVersion(r, t);
            }
            return n;
          }),
          (n.getValidationKeyWordSchema = function () {
            var e = {};
            return (
              (e[
                o(
                  "WAFlowJSONConstants",
                ).WA_SHOPPING_FLOW_JSON_KEYWORD_EXTERNAL_DATA_SOURCE
              ] = !0),
              e
            );
          }),
          (n.formatAJVError = function (t, n) {
            var e = [],
              r = c(t);
            if (!r) {
              var a = o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMultipleExternalDataSourceUsageErrorMsg(
                d(),
              );
              e.push(
                o(
                  "WAFlowJSONValidationResultUtil",
                ).getWAFlowJSONValidationError({
                  message: a,
                  pointers: o(
                    "WAFlowJSONValidationResultUtil",
                  ).getWAFlowJSONDefaultErrorPointer(),
                }),
              );
            }
            return e;
          }),
          t
        );
      })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    function c(e) {
      var t,
        n,
        r =
          e == null || (t = e.screens) == null
            ? void 0
            : t.find(function (e) {
                return e.external_data;
              });
      if (!r) return !0;
      var o = Object.keys((r == null ? void 0 : r.external_data) || {})[0];
      return e == null || (n = e.screens) == null
        ? void 0
        : n.every(function (e) {
            if (e.external_data) {
              var t = Object.keys(e.external_data)[0];
              return t === o;
            } else return !0;
          });
    }
    function d() {
      return [s].toString();
    }
    l.WAShoppingFlowJSONScreenExternalDataValidatorV502 = u;
  },
  98,
);
