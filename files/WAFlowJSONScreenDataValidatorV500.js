__d(
  "WAFlowJSONScreenDataValidatorV500",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONSchemaValidator",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidationResultUtil",
    "getErrorSafe",
    "isObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "__example__",
      s = "required",
      u = (function (t) {
        function n(e, n, r) {
          var o;
          return ((o = t.call(this, e, r) || this), (o.ajv = n), o);
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.validate = function () {
            for (
              var e = [], t = this.flowJSONData.flowJson.screens, n = 0;
              n < t.length;
              n++
            ) {
              var r,
                a = (r = t[n].data) != null ? r : {};
              for (var i of Object.keys(a))
                if (i !== s) {
                  var l = a[i],
                    u =
                      "/" +
                      o("WAFlowJSONConstants").WA_FLOW_JSON_SCREENS +
                      "/" +
                      n +
                      "/" +
                      o("WAFlowJSONConstants").WA_FLOW_JSON_DATA +
                      "/" +
                      i;
                  (this.validateExampleInDataModel(l, u, e),
                    this.validateArraysInDataModel(l, u, e),
                    this.validateExampleSchemaDataModel(l, u, e));
                }
            }
            return e;
          }),
          (a.validateExampleInDataModel = function (n, r, a) {
            var t = babelHelpers.extends({}, n);
            Object.prototype.hasOwnProperty.call(t, e) && delete t[e];
            var i = c(t, e, r);
            if (i != null) {
              var l = o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidExampleInDataModelErrorMsg(
                "/" +
                  o("WAFlowJSONConstants").WA_FLOW_JSON_DATA_POINTER_ROOT +
                  i,
              );
              a.push(
                this.getError(
                  l,
                  o("WAFlowJSONValidationResultUtil").getKeyPointers(i),
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_SCREEN_DATA,
                ),
              );
            }
          }),
          (a.validateArraysInDataModel = function (t, n, a) {
            var e = "",
              i = t[o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_TYPE];
            if (typeof i != "string") {
              e =
                i == null
                  ? o(
                      "WAFlowJSONValidationError",
                    ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingTypeInDataModelErrorMsg()
                  : o(
                      "WAFlowJSONValidationError",
                    ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getExpectStringTypeInDataModelErrorMsg();
              var l =
                i == null
                  ? n
                  : n + "/" + o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_TYPE;
              a.push(
                this.getError(
                  e,
                  l,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_SCREEN_DATA,
                ),
              );
              return;
            }
            if (i === o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_ARRAY) {
              var s = t[o("WAFlowJSONConstants").WA_FLOW_JSON_ITEMS_PROPERTY];
              if (typeof s != "boolean" && !r("isObject")(s)) {
                s == null &&
                  ((e = o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingItemsSchemaInDataModelErrorMsg()),
                  a.push(
                    this.getError(
                      e,
                      n,
                      o("WAFlowJSONValidationError")
                        .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_SCREEN_DATA,
                    ),
                  ));
                return;
              }
              typeof s != "boolean" &&
                this.validateArraysInDataModel(s, n + "/items", a);
            }
          }),
          (a.validateExampleSchemaDataModel = function (n, a, i) {
            var t = this,
              l = this.ajv.instance,
              s = n[e],
              u = babelHelpers.extends({}, n);
            delete u[e];
            var c = a + "/" + e,
              d = null,
              m = null;
            try {
              var p = l.compile(u);
              ((m = p(s)), (d = p.errors));
            } catch (e) {
              var _;
              if (
                l.errors == null ||
                ((_ = l.errors) == null ? void 0 : _.length) === 0
              ) {
                var f = o(
                  "WAFlowJSONValidationError",
                ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidExampleSchemaInDataModelErrorMsg(
                  r("getErrorSafe")(e).message,
                );
                i.push(
                  this.getError(
                    f,
                    c,
                    o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_SCREEN_DATA,
                  ),
                );
              } else {
                ((d = l.errors),
                  d.forEach(function (e) {
                    e.dataPath =
                      "." +
                      o("WAFlowJSONValidationResultUtil").convertToJsonPath(
                        "" + a + e.dataPath,
                      );
                  }));
                var g = o("WAFlowJSONSchemaValidator").formatAJVError(
                  d,
                  this.flowJSONData.version,
                  this.flowJSONData.flowJson,
                  this.flowJSONData.flowJSONPointers,
                  this.flowJSONData.getFlowJSONSchema(),
                );
                g.length > 0 && i.push(g[0]);
              }
              return;
            }
            if (d != null && d.length > 0) {
              d.forEach(function (e) {
                e.dataPath =
                  "." +
                  o("WAFlowJSONValidationResultUtil").convertToJsonPath(c);
              });
              var h = o("WAFlowJSONSchemaValidator").formatAJVError(
                d,
                this.flowJSONData.version,
                this.flowJSONData.flowJson,
                this.flowJSONData.flowJSONPointers,
                this.flowJSONData.getFlowJSONSchema(),
              );
              h.forEach(function (e) {
                i.push(
                  t.getError(
                    o(
                      "WAFlowJSONValidationError",
                    ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidExampleSchemaInDataModelErrorMsg(
                      e.message,
                    ),
                    c,
                    e.code,
                  ),
                );
              });
            }
          }),
          n
        );
      })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    function c(e, t, n) {
      for (var o of Object.entries(e)) {
        var a = o[0],
          i = o[1],
          l = n + "/" + a;
        if (a === t) return l;
        if (r("isObject")(i)) {
          var s = c(i, t, l);
          if (s != null) return s;
        }
        if (Array.isArray(i))
          for (var u = 0; u < i.length; u++) {
            var d = c(i[u], t, l);
            if (d != null) return d;
          }
      }
      return null;
    }
    l.WAFlowJSONScreenDataValidatorV500 = u;
  },
  98,
);
