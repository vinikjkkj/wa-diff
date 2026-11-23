__d(
  "WAFlowsASTTypeValidator",
  [
    "WAFlowsASTParser",
    "WAFlowsASTTypes",
    "WAFlowsSchemaValidationUtils",
    "getErrorSafe",
    "jsep",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      o("WAFlowsASTTypes").FlowJSONExpValueTypeEnum.INTEGER,
      o("WAFlowsASTTypes").FlowJSONExpValueTypeEnum.NUMBER,
    ]);
    function s(e) {
      var t;
      return (t =
        o("WAFlowsASTTypes").FlowJSONExpValueTypeEnum.cast(typeof e)) != null
        ? t
        : o("WAFlowsASTTypes").FlowJSONExpValueTypeEnum.STRING;
    }
    function u(e, t, n) {
      var r;
      if ((e == null ? void 0 : e[t]) == null && !(e != null && e.has(t))) {
        var a = new Error(
          "The following property '" +
            t +
            "' does not exist in the screen data model.",
        );
        throw (a.stack, a);
      }
      var i =
          (r = e == null ? void 0 : e[t]) != null
            ? r
            : e == null
              ? void 0
              : e.get(t),
        l = n
          ? typeof i == "object"
            ? o("WAFlowsASTTypes").FlowJSONExpValueTypeEnum.OBJECT
            : o("WAFlowsASTTypes").FlowJSONExpValueTypeEnum.cast(i)
          : s(i);
      return i.get != null
        ? i.set("valueType", l)
        : babelHelpers.extends({}, i, { valueType: l });
    }
    var c = function (t) {
        if (t.raw === "null") {
          var e = new Error(
            "The keyword 'null' is reserved, please use another expression instead.",
          );
          throw (e.stack, e);
        }
        return ((t.valueType = s(t.value)), t);
      },
      d = function (t, n, r) {
        if (
          (r === void 0 && (r = "object"),
          t.name === "screen" && r === "object")
        )
          return n;
        if (!n.has(t.name)) {
          var e = new Error(
            "The following property '" +
              t.name +
              "' does not exist in the screen data model.",
          );
          throw (e.stack, e);
        }
        return n == null ? void 0 : n.get(t.name);
      },
      m = function (t, n, r) {
        var e = r,
          o = y(t.object, n, "object", !1),
          a = t.computed ? y(t.property, n, "property", !1) : t.property.name;
        return u(o, a, e);
      },
      p = function (n, r) {
        return (
          n === void 0 &&
            (n = o("WAFlowsASTTypes").FlowJSONExpValueTypeEnum.STRING),
          r === void 0 &&
            (r = o("WAFlowsASTTypes").FlowJSONExpValueTypeEnum.STRING),
          !e.has(n) || !e.has(r)
        );
      },
      _ = function (t, n) {
        var e = y(t.left, n),
          r = y(t.right, n),
          a = new Set(["==", "!="]),
          i = new Set(["<", ">", "<=", ">="]),
          l = new Set(["+", "-", "*", "/"]).has(t.operator);
        if (
          (l || i.has(t.operator)) &&
          ((t.valueType = l
            ? o("WAFlowsASTTypes").FlowJSONExpValueTypeEnum.NUMBER
            : o("WAFlowsASTTypes").FlowJSONExpValueTypeEnum.BOOLEAN),
          p(e == null ? void 0 : e.valueType, r == null ? void 0 : r.valueType))
        ) {
          var s = new Error(
            "Operation '" + t.operator + "' can only be used with numbers.",
          );
          throw (s.stack, s);
        }
        if (
          a.has(t.operator) &&
          ((t.valueType =
            o("WAFlowsASTTypes").FlowJSONExpValueTypeEnum.BOOLEAN),
          (e == null ? void 0 : e.valueType) !==
            (r == null ? void 0 : r.valueType))
        ) {
          var u = new Error(
            "Operation '" +
              t.operator +
              "' can only be used to compare values with same type.",
          );
          throw (u.stack, u);
        }
        return t;
      },
      f = function (t, n) {
        return (
          (t.valueType = o("WAFlowsASTTypes").FlowJSONExpValueTypeEnum.STRING),
          t.body.forEach(function (e) {
            return y(e, n);
          }),
          t
        );
      },
      g = function (t, n) {
        var e = y(t.argument, n);
        if (
          ["-", "+"].includes(t.operator) &&
          (e == null ? void 0 : e.valueType) !==
            o("WAFlowsASTTypes").FlowJSONExpValueTypeEnum.NUMBER
        ) {
          var r = new Error(
            "Operation '" + t.operator + "' can only be used before numbers.",
          );
          throw (r.stack, r);
        }
        if (
          t.operator === "!" &&
          (e == null ? void 0 : e.valueType) !==
            o("WAFlowsASTTypes").FlowJSONExpValueTypeEnum.BOOLEAN
        ) {
          var a = new Error("Operation '!' can only be used before booleans.");
          throw (a.stack, a);
        }
        return ((t.valueType = e == null ? void 0 : e.valueType), t);
      },
      h = function (t, n) {
        var e = y(t.left, n),
          r = y(t.right, n);
        if (
          (e == null ? void 0 : e.valueType) !==
            o("WAFlowsASTTypes").FlowJSONExpValueTypeEnum.BOOLEAN ||
          (r == null ? void 0 : r.valueType) !==
            o("WAFlowsASTTypes").FlowJSONExpValueTypeEnum.BOOLEAN
        ) {
          var a = new Error(
            "Operation '" + t.operator + "' can only be used with booleans.",
          );
          throw (a.stack, a);
        }
        return (
          (t.valueType = o("WAFlowsASTTypes").FlowJSONExpValueTypeEnum.BOOLEAN),
          t
        );
      };
    function y(e, t, n, r) {
      switch (
        (n === void 0 && (n = "object"), r === void 0 && (r = !0), e.type)
      ) {
        case "Literal":
          return c(e);
        case "Identifier":
          return d(e, t, n);
        case "BinaryExpression":
          return _(e, t);
        case "Compound":
          return f(e, t);
        case "UnaryExpression":
          return g(e, t);
        case "LogicalExpression":
          return h(e, t);
        case "MemberExpression":
          return m(e, t, r);
        default: {
          var o = e.type,
            a = "Operation " + o + " is not supported.",
            i =
              o === "ConditionalExpression"
                ? a +
                  " This means that you are using a ternary operator in your expression (i.e. 'condition ? 'condition passes' : 'condition fails'). Please check the documentation for the supported operations."
                : a,
            l = new Error(i);
          throw (l.stack, l);
        }
      }
    }
    function C(e, t, n, a) {
      var i,
        l = r("jsep")(o("WAFlowsASTParser").cleanExpressionForJSEP(e, t, a)),
        s = y(l, n);
      return s instanceof Map
        ? s.get("valueType")
        : (i = s.valueType) != null
          ? i
          : "";
    }
    function b(e, t, n, a, i) {
      try {
        var l = C(e, t, n, i),
          s = o("WAFlowsSchemaValidationUtils").isTypeMatchingComponentSchema(
            a,
            l,
          );
        if (!s) {
          var u = new Error(
            "The expression return type is '" +
              l +
              "' which does not match the schema for the property.",
          );
          throw (u.stack, u);
        }
      } catch (t) {
        var c = r("getErrorSafe")(t),
          d = new Error(
            'Error while parsing dynamic expression "' + e + '". ' + c.message,
            { cause: t },
          );
        throw (d.stack, d);
      }
    }
    ((l.getDynamicExpressionReturnType = C),
      (l.checkFlowDynamicExpressionTypes = b));
  },
  98,
);
