__d(
  "WAFlowJSONValidationResultUtil",
  [
    "invariant",
    "WAFlowJSONConstants",
    "WAFlowJSONSchemaUtils",
    "WAFlowJSONValidationError",
    "WAFlowsASTTypeValidator",
    "WAFlowsDynamicDataUtils",
    "WATypeUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return { isValid: !1, errors: [] };
    }
    function u(e) {
      var t = e.message,
        n = e.pointers,
        r = e.code,
        a =
          r === void 0
            ? o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
                .INVALID_FLOW_JSON
            : r;
      return { code: a, message: t, pointers: Array.isArray(n) ? n : [n] };
    }
    function c(e, t, n, r, o) {
      return {
        lineStart: e,
        columnStart: n,
        lineEnd: t,
        columnEnd: r,
        path: o,
      };
    }
    function d() {
      return {
        lineStart: 0,
        columnStart: 0,
        lineEnd: 0,
        columnEnd: 0,
        path: "",
      };
    }
    function m(e) {
      var t = e.message,
        n = e.pointers,
        r = e.code,
        a =
          r === void 0
            ? o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
                .INVALID_FLOW_JSON
            : r;
      return {
        isValid: !1,
        errors: [
          u({ code: a, message: t, pointers: Array.isArray(n) ? n : [n] }),
        ],
      };
    }
    function p(e) {
      return (
        o("WATypeUtils").isString(e) &&
        e.startsWith(o("WAFlowJSONConstants").DYNAMIC_BINDING_PREFIX) &&
        e.endsWith(o("WAFlowJSONConstants").DYNAMIC_DATA_SUFFIX)
      );
    }
    function _(e) {
      return (
        o("WATypeUtils").isString(e) &&
        new RegExp(
          o("WAFlowJSONSchemaUtils")
            .WA_FLOW_JSON_SCHEMA_ALL_DYNAMIC_DATA_PATTERN_V400,
        ).test(e)
      );
    }
    function f(e) {
      return (
        o("WATypeUtils").isString(e) &&
        e.startsWith(o("WAFlowJSONConstants").GLOBAL_DYNAMIC_DATA_PREFIX) &&
        e.endsWith(o("WAFlowJSONConstants").DYNAMIC_DATA_SUFFIX)
      );
    }
    function g(e) {
      return (
        o("WATypeUtils").isString(e) &&
        e.startsWith(o("WAFlowJSONConstants").FORM_BINDING_PREFIX) &&
        e.endsWith(o("WAFlowJSONConstants").DYNAMIC_DATA_SUFFIX)
      );
    }
    function h(e) {
      return p(e)
        ? e.substring(
            o("WAFlowJSONConstants").DYNAMIC_BINDING_PREFIX.length,
            e.length - 1,
          )
        : g(e)
          ? e.substring(
              o("WAFlowJSONConstants").FORM_BINDING_PREFIX.length,
              e.length - 1,
            )
          : null;
    }
    function y(e) {
      return _(e)
        ? e
            .substring(
              o("WAFlowJSONConstants").DYNAMIC_BINDING_PREFIX.length,
              e.length - 1,
            )
            .split(".")
        : [];
    }
    function C(e) {
      if (e.length === 0) return "";
      var t = e.startsWith("/") ? e.substring(1) : e,
        n = "";
      return (
        t.split("/").forEach(function (e) {
          o("WAFlowJSONConstants").ALL_DIGITS_PATTERN.test(e)
            ? (n += "[" + e + "]")
            : (n += n.length === 0 ? e : "." + e);
        }),
        n
      );
    }
    function b(e) {
      return o("WATypeUtils").isString(e)
        ? new Set([o("WAFlowJSONConstants").WAFlowsDataType.STRING])
        : o("WATypeUtils").isBoolean(e)
          ? new Set([o("WAFlowJSONConstants").WAFlowsDataType.BOOLEAN])
          : o("WATypeUtils").isNumber(e) && !Number.isInteger(e)
            ? new Set([o("WAFlowJSONConstants").WAFlowsDataType.NUMBER])
            : Number.isInteger(e)
              ? new Set([
                  o("WAFlowJSONConstants").WAFlowsDataType.INTEGER,
                  o("WAFlowJSONConstants").WAFlowsDataType.NUMBER,
                ])
              : Array.isArray(e)
                ? new Set([o("WAFlowJSONConstants").WAFlowsDataType.ARRAY])
                : typeof e == "object"
                  ? new Set([o("WAFlowJSONConstants").WAFlowsDataType.OBJECT])
                  : new Set([o("WAFlowJSONConstants").WAFlowsDataType.UNKNOWN]);
    }
    function v(e, t, n, r) {
      return e == null
        ? new Set([o("WAFlowJSONConstants").WAFlowsDataType.NULL])
        : p(e)
          ? new Set([o("WAFlowJSONConstants").WAFlowsDataType.DATA])
          : g(e)
            ? new Set([o("WAFlowJSONConstants").WAFlowsDataType.FORM])
            : o("WAFlowsDynamicDataUtils").isNestedExpressionValue(e) &&
                t != null &&
                n != null
              ? (typeof e == "string" || s(0, 87743),
                new Set([
                  o("WAFlowsASTTypeValidator").getDynamicExpressionReturnType(
                    e,
                    t,
                    n,
                    r,
                  ),
                ]))
              : b(e);
    }
    function S(e) {
      var t = o("WATypeUtils").isString(e) ? [e] : e;
      return L(t, !0);
    }
    function R(e) {
      var t = o("WATypeUtils").isString(e) ? [e] : e;
      return L(t, !1);
    }
    function L(e, t) {
      return e.map(function (e) {
        return { pointer: e, isKeyPointer: !!t };
      });
    }
    function E(e, t) {
      if (!o("WATypeUtils").isString(t) || !_(t)) return null;
      var n = e,
        r = "",
        a = "";
      if (p(t))
        ((r = o("WAFlowJSONConstants").WAFlowsDataStoreType.DATA),
          (a = t.substring(
            o("WAFlowJSONConstants").DYNAMIC_BINDING_PREFIX.length,
            t.length - 1,
          )));
      else if (g(t))
        ((r = o("WAFlowJSONConstants").WAFlowsDataStoreType.FORM),
          (a = t.substring(
            o("WAFlowJSONConstants").FORM_BINDING_PREFIX.length,
            t.length - 1,
          )));
      else if (f(t)) {
        var i = t
            .substring(
              o("WAFlowJSONConstants").GLOBAL_DYNAMIC_DATA_PREFIX.length,
              t.length - 1,
            )
            .split("."),
          l = i[0],
          s = i[1],
          u = babelHelpers.arrayLikeToArray(i).slice(2);
        ((n = l), (r = s), (a = u.join(".")));
      }
      return { screenId: n, store: r, key: a, expression: t };
    }
    function k(e) {
      return (
        e ===
          o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.PHOTO_PICKER ||
        e ===
          o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.DOCUMENT_PICKER
      );
    }
    function I(e) {
      return f(e) ? "Global Dynamic data" : "Dynamic data";
    }
    function T(e) {
      var t = new Map(),
        n = new Map();
      return (
        e.forEach(function (e) {
          var r = e.code + "-" + e.message,
            o = t.get(r),
            a = n.get(r);
          if (o == null || a == null) {
            t.set(r, e);
            var i = e.pointers.map(function (e) {
              return D(e);
            });
            n.set(r, new Set(i));
          } else
            e.pointers.forEach(function (e) {
              var t = D(e);
              a.has(t) || (o.pointers.push(e), a.add(t));
            });
        }),
        Array.from(t.values())
      );
    }
    function D(e) {
      return (
        e.lineStart + "-" + e.columnStart + "-" + e.lineEnd + "-" + e.columnEnd
      );
    }
    ((l.getWAFlowJSONInitResult = e),
      (l.getWAFlowJSONValidationError = u),
      (l.getWAFlowJSONErrorPointer = c),
      (l.getWAFlowJSONDefaultErrorPointer = d),
      (l.getWAFlowJSONResult = m),
      (l.isDynamicDataBindingV201 = p),
      (l.isDynamicDataBindingV400 = _),
      (l.isGlobalDynamicBinding = f),
      (l.isFormBinding = g),
      (l.stripPathFromBinding = h),
      (l.getTokensOfDynamicDataBinding = y),
      (l.convertToJsonPath = C),
      (l.getFieldValueSchemaType = v),
      (l.getKeyPointers = S),
      (l.getValuePointers = R),
      (l.parseBindings = E),
      (l.isNativeComponent = k),
      (l.getBindingType = I),
      (l.deduplicateErrors = T));
  },
  98,
);
