__d(
  "WAFlowJSONScreenDynamicDataValidatorV500",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONParseUtils",
    "WAFlowJSONSchemaUtils",
    "WAFlowJSONSingleColumnLayoutSchema",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidationResultUtil",
    "WAFlowJSONValidationUtils",
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
            r = this.flowJSONData.version,
            a = this.getComponentSchemas(r);
          if (a == null)
            throw o(
              "WAFlowJSONValidationError",
            ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidSchemaErrorMsg(
              String(r),
            );
          return (
            (e = this.flowJSONData.flowJson.screens) == null ||
              e.forEach(function (e) {
                return t.flowJSONData
                  .getFlattenComponents(e.id)
                  .forEach(function (r) {
                    t.validateDynamicBindingsInComponent(e, r, a, n);
                  });
              }),
            n
          );
        }),
        (n.getComponentSchemas = function (t) {
          var e,
            n = this,
            r = o(
              "WAFlowJSONSingleColumnLayoutSchema",
            ).getSingleColumnLayoutSchema(t),
            a = new Map(),
            i =
              (e = r.properties.children.items.oneOf) == null
                ? void 0
                : e.map(function (e) {
                    return o(
                      "WAFlowJSONSchemaUtils",
                    ).getComponentSchemaByReference(
                      n.flowJSONData.getFlowJSONSchema(),
                      e,
                    );
                  });
          return (
            i == null ||
              i.forEach(function (e) {
                var r = e.properties.type.const;
                if (
                  (a.set(
                    r,
                    o("WAFlowJSONValidationUtils").getPropertySchemaMap(e, t),
                  ),
                  r ===
                    o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.FORM)
                ) {
                  var i;
                  (i = e.properties) == null ||
                    (i = i.children) == null ||
                    (i = i.items) == null ||
                    (i = i.oneOf) == null ||
                    i.forEach(function (e) {
                      var r,
                        i = o(
                          "WAFlowJSONSchemaUtils",
                        ).getComponentSchemaByReference(
                          n.flowJSONData.getFlowJSONSchema(),
                          e,
                        ),
                        l =
                          i == null ||
                          (r = i.properties) == null ||
                          (r = r.type) == null
                            ? void 0
                            : r.const;
                      i !== void 0 &&
                        l != null &&
                        i.properties &&
                        !a.has(i == null ? void 0 : i.type) &&
                        a.set(
                          l,
                          o("WAFlowJSONValidationUtils").getPropertySchemaMap(
                            i,
                            t,
                          ),
                        );
                    });
                }
              }),
            a
          );
        }),
        (n.shouldSkipDynamicBindingValidation = function (t, n) {
          return (
            n === o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.IF &&
            t === o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_CONDITION
          );
        }),
        (n.validateDynamicBindingsInComponent = function (t, n, r, a) {
          var e = n.component;
          for (var i of Object.entries(e)) {
            var l = i[0],
              s = i[1];
            if (
              !this.shouldSkipDynamicBindingValidation(l, n.component.type) &&
              this.isValidPropertyValueType(s)
            ) {
              if (o("WATypeUtils").isString(s))
                this.validateDynamicBindingsInComponentProperty(
                  t,
                  n.jsonPointer,
                  l,
                  s,
                  null,
                  n.component.type,
                  a,
                  r,
                );
              else if (s != null && typeof s == "object" && !Array.isArray(s))
                for (var u of Object.entries(s)) {
                  var c = u[0],
                    d = u[1];
                  o("WATypeUtils").isString(d) &&
                    this.validateDynamicBindingsInComponentProperty(
                      t,
                      n.jsonPointer,
                      c,
                      d,
                      l,
                      n.component.type,
                      a,
                      r,
                    );
                }
            }
          }
        }),
        (n.getBindingSchema = function (t, n, r, a) {
          if (
            o("WAFlowJSONValidationResultUtil").isGlobalDynamicBinding(
              n.expression,
            )
          ) {
            var e;
            if (n.screenId === t.id)
              return o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getGlobalDynamicDataCanNotReferCurrentScreenErrorMsg(
                n.expression,
                n.screenId,
                r,
                a,
              );
            var i =
              (e = this.flowJSONData.screenData.get(n.screenId)) == null
                ? void 0
                : e.data;
            if (i == null)
              return o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getReferencedScreenMissingErrorMsg(
                n.expression,
                t.id,
                r,
                a,
                n.screenId,
              );
          }
          return o("WAFlowJSONParseUtils").getBindingReferencedSchema(
            this.flowJSONData,
            t,
            n,
            r,
            a,
          );
        }),
        (n.validateDynamicBindingsInComponentProperty = function (
          t,
          n,
          r,
          a,
          i,
          l,
          s,
          u,
        ) {
          var e = o("WAFlowJSONValidationResultUtil").parseBindings(t.id, a);
          if (e != null) {
            var c = this.getBindingSchema(t, e, l, r),
              d = i != null ? n + "/" + i + "/" + r : n + "/" + r;
            if (o("WATypeUtils").isString(c)) {
              s.push(
                this.getError(
                  c,
                  d,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                    .INVALID_SCREEN_DYNAMIC_DATA,
                ),
              );
              return;
            }
            var m = c,
              p = this.getPropertySchemaArray(u, l, r, i);
            if (p.length === 0)
              throw o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidSchemaErrorMsg(
                String(this.flowJSONData.version),
              );
            for (
              var _ = e.key.split(".").join(".properties."),
                f = this.flowJSONData.getScreenIndex(e.screenId),
                g = "screens[" + f + "].data." + _,
                h = null,
                y = 0;
              y < p.length;
              y++
            ) {
              var C = p[y];
              if (
                ((h = this.validateDynamicDataSchema(t, e, l, r, m, C, g)),
                h == null)
              )
                break;
            }
            if (h != null) {
              var b = new Set();
              (p.forEach(function (e) {
                if (
                  typeof e != "boolean" &&
                  Object.prototype.hasOwnProperty.call(e, "type")
                ) {
                  var t, n;
                  b.add(
                    (t = (n = e.type) == null ? void 0 : n.toString()) != null
                      ? t
                      : "",
                  );
                }
              }),
                b.size > 1 &&
                  (h = o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getPropertySchemaNotMatchAnyScreenDataErrorMsg(
                    g,
                    Array.from(b),
                  )),
                s.push(
                  this.getError(
                    h,
                    d,
                    o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                      .INVALID_SCREEN_DYNAMIC_DATA,
                  ),
                ));
            }
          }
        }),
        (n.areConstValuesEqualOrError = function (t, n, r) {
          return null;
        }),
        (n.isValidPropertyValueType = function (t) {
          return o("WATypeUtils").isString(t);
        }),
        (n.getPropertySchemaArray = function (t, n, r, o) {
          var e, a;
          return (
            o === void 0 && (o = null),
            (e = (a = t.get(n)) == null ? void 0 : a.get(r)) != null ? e : []
          );
        }),
        (n.validateObjectPropertySchema = function (t, n, r, a, i, l, s) {
          var e,
            u,
            c,
            d = (e = l.required) != null ? e : [],
            m = (u = l.properties) != null ? u : {},
            p = (c = i.properties) != null ? c : {};
          for (var _ of Object.entries(m)) {
            var f = _[0],
              g = _[1],
              h = Object.prototype.hasOwnProperty.call(p, f),
              y = d.includes(f);
            if (!h && y)
              return o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getRequiredPropertyMissingInScreenDataErrorMsg(
                n.expression,
                f,
              );
            if (h || y) {
              var C = this.validateDynamicDataSchema(
                t,
                n,
                r,
                a,
                p[f],
                g,
                s + ".properties." + f,
              );
              if (C != null) return C;
            }
          }
          return null;
        }),
        (n.validateDynamicDataSchema = function (t, n, r, a, i, l, s) {
          var e,
            u = this.areConstValuesEqualOrError(i, l, s);
          if (u !== null) return u;
          var c = (e = i.type) != null ? e : "",
            d = this.getPropertyType(l);
          if (!d.has(c.toString()))
            return o("WAFlowJSONConstants").WAFlowsDataStoreType.cast(
              n.store,
            ) === o("WAFlowJSONConstants").WAFlowsDataStoreType.DATA
              ? o(
                  "WAFlowJSONValidationError",
                ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getPropertySchemaNotMatchInScreenDataErrorMsg(
                  s,
                  d,
                )
              : o(
                  "WAFlowJSONValidationError",
                ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getPropertySchemaNotMatchComponentValueSchemaErrorMsg(
                  n,
                  d,
                );
          if (d.has("object")) {
            var m = this.validateObjectPropertySchema(t, n, r, a, i, l, s);
            if (m != null) return m;
          }
          if (d.has("array")) {
            var p,
              _,
              f = (p = l.items) != null ? p : {},
              g = (_ = i.items) != null ? _ : {},
              h = this.validateDynamicDataSchema(
                t,
                n,
                r,
                a,
                g,
                f,
                s + ".items",
              );
            if (h != null) return h;
          }
        }),
        (n.getPropertyType = function (t) {
          if (t.type != null) return new Set([t.type.toString()]);
          if (t.oneOf != null) {
            var e;
            return new Set(
              (e = t.oneOf) == null
                ? void 0
                : e.reduce(function (e, t) {
                    if (
                      t.type != null &&
                      typeof t.type == "string" &&
                      !e.includes(t.type)
                    ) {
                      var n, r;
                      e.push(
                        (n = (r = t.type) == null ? void 0 : r.toString()) !=
                          null
                          ? n
                          : "",
                      );
                    }
                    return e;
                  }, []),
            );
          }
          if (t.anyOf != null) {
            var n;
            return new Set(
              (n = t.anyOf) == null
                ? void 0
                : n.reduce(function (e, t) {
                    if (
                      t.type != null &&
                      typeof t.type == "string" &&
                      !e.includes(t.type)
                    ) {
                      var n, r;
                      e.push(
                        (n = (r = t.type) == null ? void 0 : r.toString()) !=
                          null
                          ? n
                          : "",
                      );
                    }
                    return e;
                  }, []),
            );
          }
          return t.if != null
            ? new Set(
                [].concat(
                  t.then != null
                    ? Array.from(this.getPropertyType(t.then).values())
                    : [],
                  t.else != null
                    ? Array.from(this.getPropertyType(t.else).values())
                    : [],
                ),
              )
            : new Set([""]);
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.default = e;
  },
  98,
);
