__d(
  "WAFlowsASTParser",
  ["WAFlowsDynamicDataUtils", "WAFlowsObjectPathSafety", "WATypeUtils", "jsep"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      if (
        !((e == null || typeof e != "object") && typeof e != "string") &&
        !(
          (typeof t != "string" && typeof t != "number") ||
          !o("WAFlowsObjectPathSafety").isSafeObjectKey(t)
        )
      )
        return (n = Object.getOwnPropertyDescriptor(Object(e), String(t))) ==
          null
          ? void 0
          : n.value;
    }
    var s = function (n, r, o) {
      return (
        o === void 0 && (o = "object"),
        n.name === "screen" && o === "object" ? r : e(r, n.name)
      );
    };
    function u(t, n) {
      var r = b(t.object, n, "object"),
        o = t.computed ? b(t.property, n, "property") : t.property.name;
      return e(r, o);
    }
    function c(e, t) {
      return e.body
        .map(function (e) {
          return b(e, t);
        })
        .join("");
    }
    function d(e, t) {
      var n = b(e.argument, t);
      switch (e.operator) {
        case "!":
          return !n;
        case "-":
          return -+n;
        case "+":
        default:
          return n;
      }
    }
    function m(e) {
      return e != null && e !== 0;
    }
    function p(e) {
      return e == null || e === "";
    }
    function _(e, t, n, r) {
      return n ? p(e) && p(t) : r ? +e == +t : e === t;
    }
    var f = {
      "<": function (t, n) {
        return t < n;
      },
      "<=": function (t, n) {
        return t <= n;
      },
      ">": function (t, n) {
        return t > n;
      },
      ">=": function (t, n) {
        return t >= n;
      },
    };
    function g(e, t, n, r, o) {
      if (n || !r) return !1;
      var a = f[o];
      return a != null ? a(+e, +t) : !1;
    }
    function h(e, t) {
      if ((t === void 0 && (t = 2), !o("WATypeUtils").isNumber(e))) return e;
      var n = Math.pow(10, t);
      return Math.round(e * n) / n;
    }
    function y(e, t) {
      var n = b(e.left, t),
        r = b(e.right, t),
        a = o("WATypeUtils").isNumber(n) || o("WATypeUtils").isNumber(r),
        i = n == null || r == null || n === "" || r === "",
        l = n != null && n !== "" ? n : 0,
        s = r != null && r !== "" ? r : 0;
      switch (e.operator) {
        case "+":
          return +l + +s;
        case "-":
          return +l - +s;
        case "*":
          return +l * +s;
        case "/":
          return m(r) ? +l / +r : 0;
        case "%":
          return m(r) ? +l % +r : 0;
        case "==":
          return _(n, r, i, a);
        case "!=":
          return !_(n, r, i, a);
        case "<":
        case "<=":
        case ">":
        case ">=":
          return g(n, r, i, a, e.operator);
        default:
          return "";
      }
    }
    function C(e, t) {
      var n = !!b(e.left, t),
        r = !!b(e.right, t);
      switch (e.operator) {
        case "||":
          return n || r;
        case "&&":
        default:
          return n && r;
      }
    }
    function b(e, t, n) {
      switch ((n === void 0 && (n = "object"), e.type)) {
        case "Literal":
          return e.value;
        case "Identifier":
          return s(e, t, n);
        case "MemberExpression":
          return u(e, t);
        case "Compound":
          return c(e, t);
        case "UnaryExpression":
          return d(e, t);
        case "BinaryExpression":
          return h(y(e, t));
        case "LogicalExpression":
          return C(e, t);
        default: {
          var r = new Error("Operation " + e.type + " is not supported");
          throw (r.stack, r);
        }
      }
    }
    function v(e, t, n, o) {
      try {
        var a = r("jsep")(S(e, t, o == null ? void 0 : o.getVersion()));
        return b(a, n);
      } catch (t) {
        var i = new Error(
          "Error while parsing dynamic expression - " + e + ".",
          { cause: t },
        );
        throw (i.stack, i);
      }
    }
    function S(e, t, n) {
      var r = e;
      o("WAFlowsDynamicDataUtils").isNestedExpressionValue(e) && R(n)
        ? (r = e.slice(1, -1))
        : !o("WAFlowsDynamicDataUtils").isBindingValue(e) &&
          o("WATypeUtils").isString(e) &&
          (r = "'" + e.replaceAll("'", "\\'") + "'");
      var a = r
        .replace(/\$\{(screen|data|form|external_data)/g, function (e) {
          var n = {
            "${screen": "screen",
            "${data": "screen." + t + ".data",
            "${form": "screen." + t + ".form",
            "${external_data": "screen." + t + ".external_data",
          };
          return n[e];
        })
        .replace(/\}/g, "");
      return (a.endsWith("\\'") && (a = a.slice(0, -2) + "\\\\'"), a);
    }
    function R(e) {
      return e != null && e >= 600;
    }
    ((l.parseFlowDynamicExpression = v), (l.cleanExpressionForJSEP = S));
  },
  98,
);
