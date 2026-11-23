__d(
  "WAFlowJSONSchemaValidator",
  [
    "invariant",
    "WAFlowJSONConstants",
    "WAFlowJSONSchemaUtils",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidationResultUtil",
    "WAFlowsDynamicDataUtils",
    "WAFlowsTypes",
    "filterNulls",
    "isValidHttpURL",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = "additionalProperties",
      m = "const",
      p = "type",
      _ = "required",
      f = "minItems",
      g = "maxItems",
      h = "minLength",
      y = "format",
      C = "pattern",
      b = "propertyNames",
      v = "enum",
      S = "dependencies",
      R = "not",
      L = "oneOf",
      E = "anyOf",
      k = "if",
      I = "minimum",
      T = "maximum",
      D = "character(s)",
      x = "item",
      $ = "next",
      P = "required",
      N = "enabled",
      M = "visible",
      w = "error-messages",
      A = [
        (u = o("WAFlowJSONConstants")).WA_FLOW_JSON_COMPONENT_TYPE.TEXT_AREA,
        u.WA_FLOW_JSON_COMPONENT_TYPE.TEXT_INPUT,
        u.WA_FLOW_JSON_COMPONENT_TYPE.CHECKBOX_GROUP,
        u.WA_FLOW_JSON_COMPONENT_TYPE.RADIO_BUTTONS_GROUP,
        u.WA_FLOW_JSON_COMPONENT_TYPE.DROPDOWN,
        u.WA_FLOW_JSON_COMPONENT_TYPE.DATE_PICKER,
        u.WA_FLOW_JSON_COMPONENT_TYPE.OPT_IN,
        u.WA_FLOW_JSON_COMPONENT_TYPE.CALENDAR_PICKER,
        u.WA_FLOW_JSON_COMPONENT_TYPE.NAVIGATION_LIST,
        u.WA_FLOW_JSON_COMPONENT_TYPE.CHIPS_SELECTOR,
      ],
      F = new Map(null),
      O = new Map(null),
      B = (function () {
        function e(e) {
          this.ajv = e;
        }
        var t = e.prototype;
        return (
          (t.validate = function (t, n, a, i, l) {
            l === void 0 && (l = !1);
            var e = this.ajv,
              s = {},
              u = [];
            try {
              s = JSON.parse(t);
            } catch (e) {
              return o("WAFlowJSONValidationError").invalidFlowJSONError()
                .errors;
            }
            var c = typeof i != "boolean" ? (i == null ? void 0 : i.$id) : null,
              d = null;
            if (c != null)
              try {
                d = e.instance.getSchema(c);
              } catch (e) {
                d = null;
              }
            var m;
            if (l && d == null)
              try {
                m = o("WAFlowJSONSchemaUtils").minifySchema(
                  r("unsafeCast")(i),
                  s,
                );
              } catch (e) {
                m = null;
              }
            var p;
            try {
              p = d != null ? d : e.instance.compile(m || i);
            } catch (t) {
              p = e.instance.compile(i);
            }
            return (
              !p(s) &&
                p.errors != null &&
                p.errors.length > 0 &&
                (u = o("WAFlowJSONValidationResultUtil").deduplicateErrors(
                  W(p.errors, a, s, n, i),
                )),
              u
            );
          }),
          e
        );
      })();
    function W(e, t, n, a, i) {
      return e == null
        ? []
        : (F.clear(),
          O.clear(),
          r("filterNulls")(
            e.map(function (e) {
              var r = ge(e.dataPath);
              if (e == null || re(e, r, n)) return null;
              var l = o("WAFlowJSONValidationError")
                  .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_SCHEMA,
                s = ("Error at [" + r + "]: ")
                  .concat(e.message != null ? e.message + ". " : "")
                  .concat("Please refer to the Flow JSON schema."),
                u = null,
                c = null,
                E = Ee(r),
                k = a.get(r),
                D;
              switch (e.keyword) {
                case d: {
                  var x = G(e, r, a, s, k);
                  ((r = x.errorPointer),
                    (k = x.rowPointer),
                    (s = x.errorMessage),
                    (l = o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_KEY),
                    (D = x.lineColumnPointer));
                  break;
                }
                case m: {
                  var $,
                    P = null;
                  (E === p
                    ? ((r = r.replace("/" + p, "")),
                      (u = o("WAFlowJSONValidationError")
                        .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                        .INVALID_TYPE_PROPERTY_VALUE))
                    : (P = [String(e.params.allowedValue)]),
                    (l = o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                      .INVALID_PROPERTY_VALUE),
                    (s = o(
                      "WAFlowJSONValidationError",
                    ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPropertyValueErrorMsg(
                      E,
                      P,
                    )),
                    (D = ($ = k) == null ? void 0 : $.value));
                  break;
                }
                case _:
                case p:
                case f:
                case g:
                case I:
                case T: {
                  var N = q(e, E, s, k);
                  ((s = N.errorMessage),
                    (c = N.errorData),
                    (u = N.errorCodeInternal),
                    (l = N.errorCode),
                    (D = N.lineColumnPointer));
                  break;
                }
                case y:
                case h:
                case C:
                case v:
                  return U(e, r, E, s, k);
                case b: {
                  var M = V(e, r, a, s, k);
                  ((r = M.errorPointer),
                    (k = M.rowPointer),
                    (s = M.errorMessage),
                    (l = o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE.PATTERN_MISMATCH),
                    (D = M.lineColumnPointer));
                  break;
                }
                case S: {
                  var w,
                    A,
                    F = (w = e.message) != null ? w : null;
                  if (F != null && e.data != null) {
                    var O = e.data.type;
                    s = o(
                      "WAFlowJSONValidationError",
                    ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidDependenciesErrorMsg(
                      F,
                      O,
                    );
                  }
                  ((l = o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_DEPENDENCIES),
                    (D = (A = k) == null ? void 0 : A.value));
                  break;
                }
                case R: {
                  var B = X(e, r, k, a, D);
                  ((r = B.errorPointer),
                    (k = B.rowPointer),
                    (l = o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                      .NOT_KEYWORD_SCHEMA_VALIDATION_FAILED),
                    (s = B.errorMessage),
                    (D = B.lineColumnPointer));
                  break;
                }
                case L: {
                  var W = J(e, r, s, t, i, k, a);
                  if (W == null) return null;
                  ((s = W.errorMessage),
                    (k = W.rowPointer),
                    (l = W.errorCode),
                    (D = W.lineColumnPointer));
                }
              }
              return (
                te(r, u != null ? u : l, c),
                {
                  code: l,
                  message: s,
                  pointers: [
                    babelHelpers.extends(
                      {},
                      D != null
                        ? D
                        : o(
                            "WAFlowJSONValidationResultUtil",
                          ).getWAFlowJSONDefaultErrorPointer(),
                      { path: ke(e.dataPath) },
                    ),
                  ],
                }
              );
            }),
          ));
    }
    function q(e, t, n, r) {
      if (e.keyword === _) {
        var a = z(e, n, r);
        return babelHelpers.extends({}, a, {
          errorCode: o("WAFlowJSONValidationError")
            .WA_FLOW_JSON_VALIDATION_ERROR_CODE.MISSING_REQUIRED_PROPERTY,
        });
      }
      if (e.keyword === p) {
        var i = Y(e, t, r);
        return babelHelpers.extends({}, i, {
          errorCodeInternal: null,
          errorCode: o("WAFlowJSONValidationError")
            .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_TYPE,
        });
      }
      var l =
        e.keyword === f || e.keyword === g ? K(e, t, n, r) : j(e, t, n, r);
      return babelHelpers.extends({}, l, {
        errorData: null,
        errorCodeInternal: null,
      });
    }
    function U(e, t, n, r, a) {
      var i;
      if (e.keyword === y) return H(e, t, n, r, a);
      var l = r,
        u = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
          .INVALID_SCHEMA;
      if (e.keyword === h) {
        var c = j(e, n, l, a);
        ((l = c.errorMessage), (u = c.errorCode));
      } else if (e.keyword === C)
        ((l = Q(e, t, n, l)),
          (u = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
            .PATTERN_MISMATCH));
      else {
        var d;
        e.keyword === v || s(0, 176415);
        var m = (d = e.params.allowedValues) == null ? void 0 : d.join(", ");
        (m != null &&
          (l = o(
            "WAFlowJSONValidationError",
          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidEnumValueErrorMsg(
            m,
          )),
          (u = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
            .INVALID_ENUM_VALUE));
      }
      return (
        te(t, u, null),
        {
          code: u,
          message: l,
          pointers: [
            babelHelpers.extends(
              {},
              (i = a == null ? void 0 : a.value) != null
                ? i
                : o(
                    "WAFlowJSONValidationResultUtil",
                  ).getWAFlowJSONDefaultErrorPointer(),
              { path: ke(e.dataPath) },
            ),
          ],
        }
      );
    }
    function V(e, t, n, r, a) {
      var i,
        l,
        s = (i = e.params.propertyName) != null ? i : null,
        u = t,
        c = r,
        d = a;
      if (s != null) {
        var m,
          p,
          _ =
            (m =
              (p = e.parentSchema) == null || (p = p.propertyNames) == null
                ? void 0
                : p.pattern) != null
              ? m
              : null;
        (_ != null &&
          (c = o(
            "WAFlowJSONValidationError",
          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPatternErrorMsg(
            _,
            null,
            null,
            s,
          )),
          (e.dataPath = e.dataPath + "." + s),
          (u = u + "/" + s),
          (d = n.get(u)));
      }
      return {
        errorPointer: u,
        rowPointer: d,
        errorMessage: c,
        lineColumnPointer: (l = d) == null ? void 0 : l.key,
      };
    }
    function H(e, t, n, a, i) {
      var l,
        s,
        u = (l = e.params.format) != null ? l : null;
      if (u === o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_URI) {
        var c = String(e.data).trim();
        if (r("isValidHttpURL")(c)) return null;
      }
      var d =
          u != null
            ? o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPropertyValueFormatErrorMsg(
                n,
                u,
              )
            : a,
        m = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
          .INVALID_PROPERTY_VALUE_FORMAT;
      return (
        te(t, m, null),
        {
          code: m,
          message: d,
          pointers: [
            babelHelpers.extends(
              {},
              (s = i == null ? void 0 : i.value) != null
                ? s
                : o(
                    "WAFlowJSONValidationResultUtil",
                  ).getWAFlowJSONDefaultErrorPointer(),
              { path: ke(e.dataPath) },
            ),
          ],
        }
      );
    }
    function G(e, t, n, r, a) {
      var i,
        l,
        s = (i = e.params) == null ? void 0 : i.additionalProperty,
        u = r,
        c = a,
        d = t;
      if (s != null && e.data != null) {
        var m,
          p =
            (m = e.parentSchema) == null ||
            (m = m.properties) == null ||
            (m = m.type) == null
              ? void 0
              : m.const,
          _ = p;
        ((u = o(
          "WAFlowJSONValidationError",
        ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPropertyErrorMsg(
          s,
          _,
          e.dataPath.length === 0,
        )),
          (d = t + "/" + s),
          (s = s.length === 0 ? "''" : s),
          (e.dataPath = e.dataPath + "." + s),
          (c = n.get(d)));
      }
      return {
        errorPointer: d,
        rowPointer: c,
        errorMessage: u,
        lineColumnPointer: (l = c) == null ? void 0 : l.key,
      };
    }
    function z(e, t, n) {
      var r,
        a,
        i =
          (r = (a = e.params) == null ? void 0 : a.missingProperty) != null
            ? r
            : null,
        l = t,
        s = null,
        u = null;
      return (
        i !== null &&
          ((l = o(
            "WAFlowJSONValidationError",
          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingPropertyErrorMsg(
            i,
          )),
          (s = i),
          i === p &&
            (u = o("WAFlowJSONValidationError")
              .WA_FLOW_JSON_VALIDATION_ERROR_CODE
              .MISSING_REQUIRED_TYPE_PROPERTY)),
        {
          errorMessage: l,
          errorData: s,
          errorCodeInternal: u,
          lineColumnPointer: n == null ? void 0 : n.value,
        }
      );
    }
    function j(e, t, n, r) {
      var a;
      if (e.keyword === h) {
        var i,
          l = (i = e.params.limit) != null ? i : null;
        return {
          errorMessage:
            l != null
              ? o(
                  "WAFlowJSONValidationError",
                ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMinQuantityRequiredErrorMsg(
                  t,
                  l,
                  D,
                )
              : n,
          errorCode: o("WAFlowJSONValidationError")
            .WA_FLOW_JSON_VALIDATION_ERROR_CODE.MIN_CHARS_REQUIRED,
          lineColumnPointer: r == null ? void 0 : r.value,
        };
      }
      var s = (a = e.params.limit) != null ? a : null,
        u =
          s != null
            ? o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMinMaxErrorMsg(
                t,
                s,
                e.keyword === I,
              )
            : n;
      return {
        errorMessage: u,
        errorCode:
          e.keyword === I
            ? o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
                .MINIMUM_VALUE_REQUIRED
            : o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
                .MAXIMUM_VALUE_REQUIRED,
        lineColumnPointer: r == null ? void 0 : r.value,
      };
    }
    function K(e, t, n, r) {
      var a,
        i = (a = e.params.limit) != null ? a : null,
        l = e.keyword === f,
        s = n;
      if (i != null && +i > 0) {
        var u =
          +i > 1 ? o("WAFlowJSONConstants").WA_FLOW_JSON_ITEMS_PROPERTY : x;
        s = l
          ? o(
              "WAFlowJSONValidationError",
            ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMinQuantityRequiredErrorMsg(
              t,
              i,
              u,
            )
          : o(
              "WAFlowJSONValidationError",
            ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMaxQuantityRequiredErrorMsg(
              t,
              i,
              u,
            );
      }
      return {
        errorMessage: s,
        errorCode: l
          ? o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
              .MIN_ITEMS_REQUIRED
          : o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
              .MAX_ITEMS_REQUIRED,
        lineColumnPointer: r == null ? void 0 : r.value,
      };
    }
    function Q(e, t, n, r) {
      var a,
        i,
        l =
          (a = (i = e.parentSchema) == null ? void 0 : i.pattern) != null
            ? a
            : null;
      if (l == null) return r;
      var s = Re(t);
      if (s == null) {
        var u = [P, N, M];
        u.includes(n) && (s = "boolean");
      }
      return o(
        "WAFlowJSONValidationError",
      ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPatternErrorMsg(
        String(l),
        s,
        n,
      );
    }
    function X(e, t, n, r, a) {
      var i,
        l,
        s,
        u,
        c,
        d,
        m = !1,
        p = !1,
        _ = (i = (l = e.schema) == null ? void 0 : l.anyOf) != null ? i : null;
      if (_ === null) {
        var f, g;
        _ =
          (f = (g = e.schema) == null ? void 0 : g.required) != null ? f : null;
      }
      var h = (s = e.data) == null ? void 0 : s.type,
        y = null;
      _ != null &&
        _.length > 0 &&
        (_ = _.map(function (e) {
          var t;
          return (t = e.required) != null ? t : e;
        }).join(","));
      var C = n,
        b = t,
        v = e.schemaPath.split("/");
      if (
        v.length >= 2 &&
        ((y = v[v.length - 2]),
        _ != null &&
          v.includes(o("WAFlowJSONConstants").WA_FLOW_JSON_ON_CLICK_ACTION))
      ) {
        var S, R;
        ((y = (S = (R = e.data) == null ? void 0 : R.name) != null ? S : y),
          (b = t + "/" + _),
          (C = r.get(b)),
          (m = !0),
          (p = !0));
      }
      var L = o(
        "WAFlowJSONValidationError",
      ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getNotKeywordErrorMessage(
        _,
        y,
        h,
        p,
      );
      return {
        errorPointer: b,
        rowPointer: C,
        errorMessage: L,
        lineColumnPointer:
          (u = m
            ? (c = C) == null
              ? void 0
              : c.key
            : (d = C) == null
              ? void 0
              : d.value) != null
            ? u
            : a,
      };
    }
    function Y(e, t, n) {
      var r = o(
          "WAFlowJSONValidationError",
        ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPropertyTypeErrorMsg(
          t,
          String(e.schema),
          Array.isArray(e.data)
            ? o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_ARRAY
            : e.data === null
              ? "null"
              : typeof e.data,
        ),
        a;
      return (
        typeof e.schema == "string"
          ? (a = e.schema)
          : typeof e.schema == "object"
            ? (a = Array.isArray(e.schema)
                ? e.schema.join(", ")
                : JSON.stringify(e.schema))
            : (a = String(e.schema)),
        {
          errorMessage: r,
          errorData: a,
          lineColumnPointer: n == null ? void 0 : n.value,
        }
      );
    }
    function J(e, t, n, r, a, i, l) {
      var s,
        u = n,
        c = i,
        d = he(t);
      if (e.data == null) return null;
      var m = e.data.type;
      if (d && +r <= 301 && Le(t, m))
        u = o(
          "WAFlowJSONValidationError",
        ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingFormParentPropertyErrorMessage(
          m,
        );
      else if (m != null) {
        var _,
          f = Ie(m, e.schema, a);
        if (f) return null;
        var g =
          (_ = e.schema) == null
            ? void 0
            : _.reduce(function (e, t) {
                var n = t == null ? void 0 : t.const;
                return (n != null && n.length > 0 && e.push(n), e);
              }, []);
        ((u = o(
          "WAFlowJSONValidationError",
        ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPropertyValueErrorMsg(
          p,
          g,
        )),
          (c = l.get(t + "/" + p)));
      } else return null;
      return {
        errorMessage: u,
        rowPointer: c != null ? c : void 0,
        errorCode: o("WAFlowJSONValidationError")
          .WA_FLOW_JSON_VALIDATION_ERROR_CODE.ONE_OF_SCHEMA_VALIDATION_FAILED,
        lineColumnPointer: (s = c) == null ? void 0 : s.value,
      };
    }
    function Z(e, t) {
      var n = O.get(e);
      return n ? n.has(t) : !1;
    }
    function ee(e, t) {
      var n = O.get(e);
      return n != null && n.has(t)
        ? Array.from((n == null ? void 0 : n.get(t)) || [])
        : [];
    }
    function te(e, t, n) {
      var r = O.get(e);
      if (r == null) {
        var o = new Map(null);
        (o.set(t, n != null ? new Set([n]) : new Set([])), O.set(e, o));
      } else if (n != null && r.has(t)) {
        var a = r.get(t);
        a && a.add(n);
      } else (r.set(t, n != null ? new Set([n]) : new Set([])), O.set(e, r));
    }
    var ne =
      ((e = {}),
      (e[f] = (c = o(
        "WAFlowJSONValidationError",
      )).WA_FLOW_JSON_VALIDATION_ERROR_CODE.MIN_ITEMS_REQUIRED),
      (e[T] = c.WA_FLOW_JSON_VALIDATION_ERROR_CODE.MAXIMUM_VALUE_REQUIRED),
      (e[I] = c.WA_FLOW_JSON_VALIDATION_ERROR_CODE.MINIMUM_VALUE_REQUIRED),
      (e[b] = c.WA_FLOW_JSON_VALIDATION_ERROR_CODE.PATTERN_MISMATCH),
      (e[h] = c.WA_FLOW_JSON_VALIDATION_ERROR_CODE.MIN_CHARS_REQUIRED),
      e);
    function re(e, t, n) {
      var r = e.keyword,
        o = e.data,
        a = e.parentSchema,
        i = Ee(t);
      if (De(e, t, i) || Fe(e, t, n)) return !0;
      var l = ne[r];
      if (l != null && Z(t, l)) return !0;
      var s = oe(e, t, n, i);
      if (s != null) return s;
      if (
        ye(t) &&
        a != null &&
        typeof a == "object" &&
        "properties" in a &&
        o != null &&
        typeof o == "object" &&
        Object.keys(o).length !== 0 &&
        p in o
      ) {
        var u = a.properties,
          c = u != null && typeof u == "object" && p in u ? u.type : null,
          d = c != null && typeof c == "object" && m in c ? c.const : null;
        return d != null && o.type !== d;
      }
      return !1;
    }
    function oe(e, t, n, r) {
      var o = e.data,
        a = e.parentSchema,
        i = e.params,
        l = e.schemaPath,
        s = e.keyword,
        u = ae(s, t, i, r);
      if (u != null) return u;
      switch (s) {
        case R:
          return ce(t, a, o);
        case m:
          return de(t, r, a, o);
        case d:
          return se(t, i);
        case C:
          return ue(t, l);
        case p:
          return le(t, r, o);
        case v:
          return ie(n, t, i, l, o);
      }
      return null;
    }
    function ae(e, t, n, r) {
      switch (e) {
        case k:
        case E:
          return !0;
        case _: {
          var a,
            i = (a = n == null ? void 0 : n.missingProperty) != null ? a : null;
          if (
            (Z(
              t,
              o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
                .MISSING_REQUIRED_TYPE_PROPERTY,
            ) &&
              r !== o("WAFlowJSONConstants").WA_FLOW_JSON_PROPERTY_LAYOUT) ||
            (Z(
              t,
              o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
                .MISSING_REQUIRED_PROPERTY,
            ) &&
              (i === $ ||
                (i != null &&
                  ee(
                    t,
                    o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                      .MISSING_REQUIRED_PROPERTY,
                  ).includes(i))))
          )
            return !0;
          break;
        }
        case L: {
          if (
            Z(
              t,
              o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
                .INVALID_PROPERTY_VALUE,
            ) ||
            Z(
              t,
              o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
                .INVALID_TYPE_PROPERTY_VALUE,
            )
          )
            return !0;
          break;
        }
      }
      return null;
    }
    function ie(e, t, n, r, a) {
      return $e(e, t, n, r, a) ||
        Pe(e, t, n, r, a) ||
        Z(
          t,
          o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
            .INVALID_ENUM_VALUE,
        )
        ? !0
        : null;
    }
    function le(e, t, n) {
      return Z(
        e,
        o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
          .INVALID_PROPERTY_TYPE,
      ) ||
        ((t === o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_DATA_SOURCE ||
          t === o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_LIST_ITEMS ||
          t === o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_CATEGORIES ||
          t === o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_SEAT_MAP) &&
          Array.isArray(n)) ||
        (t === w && !Array.isArray(n) && typeof n == "object")
        ? !0
        : null;
    }
    function se(e, t) {
      var n = t == null ? void 0 : t.additionalProperty;
      return n != null &&
        Z(
          e + ("/" + n),
          o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
            .INVALID_PROPERTY_KEY,
        )
        ? !0
        : null;
    }
    function ue(e, t) {
      return t.includes(b + "/" + C) ||
        Z(
          e,
          o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
            .PATTERN_MISMATCH,
        )
        ? !0
        : null;
    }
    function ce(e, t, n) {
      var r,
        a = n == null ? void 0 : n.name,
        i = t == null || (r = t.not) == null ? void 0 : r.required,
        l = i !== void 0 ? i[0] : "";
      return (
        Z(
          e,
          o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
            .NOT_KEYWORD_SCHEMA_VALIDATION_FAILED,
        ) || xe(l, a)
      );
    }
    function de(e, t, n, r) {
      if (
        Z(
          e,
          o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
            .INVALID_PROPERTY_VALUE,
        )
      )
        return !0;
      if (t === p) {
        var a = e.replace("/" + p, "");
        if (
          Z(
            a,
            o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
              .INVALID_PROPERTY_KEY,
          ) ||
          Z(
            a,
            o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
              .INVALID_TYPE_PROPERTY_VALUE,
          ) ||
          ((he(a) || Ce(a)) &&
            Object.values(
              o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE,
            ).includes(r)) ||
          r === o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.SINGLE_COLUMN
        )
          return !0;
      }
      return Object.prototype.hasOwnProperty.call(n, "const") &&
        (he(e) || be(e) || ve(e) || Se(e))
        ? r !== (n == null ? void 0 : n.const)
        : null;
    }
    function me(e, t, n, r, o, a) {
      var i = e;
      if (r && Ce(t)) {
        var l =
            /\/screens\/(\d+)\/layout\/children\/(\d+)\/children\/(\d+)(\/.*)?/,
          s = t.match(l);
        if (s != null) {
          var u = i.children;
          if (((i = u[s[3]]), be(t))) return i.type === n;
        }
      }
      var c = t.split("/");
      if (o && ve(t)) {
        var d = c[c.length - 1];
        return i.then[d].type === n || i.else[d].type === n;
      }
      if (a && Se(t)) {
        var m = c[c.length - 2],
          p = c[c.length - 1];
        return i.cases[m][p].type === n;
      }
      return !1;
    }
    function pe(e, t, n, r, o, a, i) {
      if (
        (o === void 0 && (o = !1),
        a === void 0 && (a = !1),
        i === void 0 && (i = !1),
        !r.includes(e))
      )
        return !1;
      var l = r.substring(0, r.length - e.length - 1),
        s = /\/screens\/(\d+)(\/.*)?/,
        u = /\/screens\/(\d+)\/layout\/children\/(\d+)(\/.*)?/,
        c = l.match(s);
      if (c == null || c.length === 0) return !1;
      var d = c[1],
        m = n.screens[d].layout;
      if (m == null) return !1;
      var p = m.children,
        _ = null,
        f = l.match(u);
      return (
        f != null && f.length > 1 && (_ = p[f[2]]),
        _ == null ? !1 : he(l) ? _.type === t : me(_, l, t, o, a, i)
      );
    }
    function _e(e, t) {
      var n = "" + o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_MEDIA_SIZE;
      return pe(
        n,
        o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.NAVIGATION_LIST,
        e,
        t,
        !0,
      );
    }
    function fe(e, t) {
      var n = o("WAFlowJSONConstants").WA_FLOW_JSON_ON_CLICK_ACTION + "/name";
      return pe(
        n,
        o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.FOOTER,
        e,
        t,
        !0,
        !0,
        !0,
      );
    }
    function ge(e) {
      return e
        .replace(/\./g, "/")
        .replace(/\[/g, "/")
        .replace(/[\'\]]/g, "")
        .replace(/\[(\d+)\]/g, "$1");
    }
    function he(e) {
      var t = /^\/screens\/\d+\/layout\/children\/\d+$/;
      return t.test(e);
    }
    function ye(e) {
      var t = /^\/screens\/\d+\/layout\/children\/\d+(\/.*)?$/;
      return t.test(e);
    }
    function Ce(e) {
      var t = /^\/screens\/\d+\/layout\/children\/\d+\/children\/\d+(\/.*)?$/;
      return t.test(e);
    }
    function be(e) {
      var t = /^\/screens\/\d+\/layout\/children\/\d+\/children\/\d+$/;
      return t.test(e);
    }
    function ve(e) {
      var t = /^\/screens\/\d+\/layout\/children\/\d+\/then\/\d+(\/.*)?/,
        n =
          /^\/screens\/\d+\/layout\/children\/\d+\/children\/\d+\/then\/\d+(\/.*)?/,
        r = /^\/screens\/\d+\/layout\/children\/\d+\/else\/\d+(\/.*)?/,
        o =
          /^\/screens\/\d+\/layout\/children\/\d+\/children\/\d+\/else\/\d+(\/.*)?/;
      return t.test(e) || n.test(e) || r.test(e) || o.test(e);
    }
    function Se(e) {
      var t =
          /^\/screens\/\d+\/layout\/children\/\d+\/cases\/[a-zA-Z][a-zA-Z0-9-]*\/\d+(\/.*)?/,
        n =
          /^\/screens\/\d+\/layout\/children\/\d+\/children\/\d+\/cases\/[a-zA-Z][a-zA-Z0-9-]*\/\d+(\/.*)?$/;
      return t.test(e) || n.test(e);
    }
    function Re(e) {
      var t = O.get(e);
      if (
        t != null &&
        t.has(
          o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
            .INVALID_PROPERTY_TYPE,
        )
      ) {
        var n = t.get(
          o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
            .INVALID_PROPERTY_TYPE,
        );
        return n != null ? n.values().next().value : null;
      }
      return null;
    }
    function Le(e, t) {
      var n = /\/screens\/(\d+)/,
        r = e.match(n);
      return !!(r != null && A.includes(t));
    }
    function Ee(e) {
      var t = e.split("/");
      if (t == null || t.length === 0) return "";
      var n = t.pop();
      return n == null
        ? ""
        : isNaN(Number(n))
          ? n
          : t.length > 0
            ? String(t.pop()) + "/" + n
            : "";
    }
    function ke(e) {
      return e.replace(/^\./, "");
    }
    function Ie(e, t, n) {
      var r = !1;
      return (
        Array.isArray(t) &&
          t.forEach(function (t) {
            if (!(r || t == null)) {
              var a = t;
              if (
                typeof a == "object" &&
                Object.prototype.hasOwnProperty.call(
                  a,
                  o("WAFlowJSONConstants").JSON_SCHEMA_REF,
                )
              ) {
                var i = a[o("WAFlowJSONConstants").JSON_SCHEMA_REF];
                if (
                  typeof i == "string" &&
                  i.startsWith(o("WAFlowJSONConstants").JSON_SCHEMA_REF_PREFIX)
                ) {
                  var l,
                    u = o(
                      "WAFlowJSONSchemaUtils",
                    ).getComponentSchemaByReference(
                      n,
                      ((l = {}),
                      (l[o("WAFlowJSONConstants").JSON_SCHEMA_REF] = i),
                      l),
                    );
                  (u != null || s(0, 84233), (a = u));
                }
              }
              a.properties == null ||
                a.properties.type == null ||
                a.properties.type.const == null ||
                (a.properties.type.const === e && (r = !0));
            }
          }),
        r
      );
    }
    function Te(e) {
      return !!Object.values(o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES).includes(
        e,
      );
    }
    function De(e, t, n) {
      var r,
        a = e.data,
        i = e.parentSchema,
        l =
          i == null || (r = i.properties) == null || (r = r.type) == null
            ? void 0
            : r.const;
      if (
        n === o("WAFlowJSONConstants").WA_FLOW_JSON_LAYOUT &&
        a != null &&
        typeof a == "object" &&
        Object.prototype.hasOwnProperty.call(a, "type") &&
        Te(String(l)) &&
        Te(String(a.type)) &&
        l !== (a == null ? void 0 : a.type)
      )
        return !0;
      var s = t.replace("/" + n, ""),
        u = Ee(s);
      return (
        (l = e.schema),
        !!(
          u === o("WAFlowJSONConstants").WA_FLOW_JSON_LAYOUT &&
          a != null &&
          typeof a == "string" &&
          Te(String(l)) &&
          Te(a) &&
          a !== l
        )
      );
    }
    function xe(e, t) {
      return (
        (e === o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_NEXT ||
          e === o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_URL) &&
        !Object.values(o("WAFlowJSONConstants").WAFlowsActionType).includes(t)
      );
    }
    function $e(e, t, n, r, a) {
      var i = fe(e, t);
      if (i)
        return r.includes(
          (
            "" + o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.FOOTER
          ).toLowerCase(),
        )
          ? n.allowedValues
            ? n.allowedValues.includes(a)
            : !1
          : !0;
      if (
        parseFloat(e.version) >= parseFloat("6.0") &&
        r.includes(
          o("WAFlowJSONConstants").WA_FLOW_JSON_ON_CLICK_ACTION +
            "/properties/name",
        ) &&
        a === o("WAFlowJSONConstants").WAFlowsActionType.OPEN_URL
      ) {
        if (
          r.includes(o("WAFlowJSONConstants").ComponentRefKey.NAVIGATION_LIST)
        )
          return n.allowedValues ? n.allowedValues.includes(a) : !1;
        if (
          !r.includes(
            o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.EMBEDDED_LINK,
          ) ||
          !r.includes(
            o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.OPT_IN,
          )
        )
          return !0;
      }
      return !1;
    }
    function Pe(e, t, n, r, a) {
      var i = _e(e, t);
      return i
        ? !r.includes(
            "" + o("WAFlowJSONConstants").ComponentRefKey.NAVIGATION_LIST,
          ) || o("WAFlowsDynamicDataUtils").isBindingValue(a)
          ? !0
          : n.allowedValues
            ? n.allowedValues.includes(a)
            : !1
        : parseFloat(e.version) >= parseFloat("6.0") &&
            r.includes(
              o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_MEDIA_SIZE + "/enum",
            ) &&
            !r.includes(
              o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
                .NAVIGATION_LIST,
            );
    }
    function Ne(e) {
      return e.schemaPath.includes("components");
    }
    function Me(e, t) {
      for (var n = e.indexOf("/") + 1, r = t, o = ""; n < e.length; ) {
        var a = e.indexOf("/", n);
        a < 0 && (a = e.length);
        var i = e.substring(n, a);
        ((r = r[i]), r.type != null && (o = r.type), (n = a + 1));
      }
      return o;
    }
    function we(e) {
      var t,
        n = e.schemaPath.indexOf("components"),
        r = e.schemaPath.indexOf("/", n) + 1,
        a = e.schemaPath.indexOf("/", r);
      return (t = o("WAFlowJSONConstants").ComponentRefKey.cast(
        e.schemaPath.substring(r, a),
      )) != null
        ? t
        : o("WAFlowJSONConstants").ComponentRefKey.FORM;
    }
    function Ae(e, t, n) {
      var r = Me(t, n),
        a = we(e);
      return (
        r ===
          o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.CHIPS_SELECTOR &&
        o("WAFlowJSONSchemaUtils").getComponentTypeByReferenceKey(a) !== r
      );
    }
    function Fe(e, t, n) {
      return e.data != null &&
        typeof e.data == "object" &&
        !("type" in e.data) &&
        "children" in e.data
        ? e.keyword !== _
        : Ne(e)
          ? Ae(e, t, n)
          : !1;
    }
    ((l.WAFlowJSONSchemaValidator = B), (l.formatAJVError = W));
  },
  98,
);
