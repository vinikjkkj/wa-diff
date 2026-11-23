__d(
  "WAFlowsConditionalRenderingParser",
  [
    "WAFlowsConditionalRenderingTypes",
    "WAFlowsStateParser",
    "WAFlowsTypeGuards",
    "WAFlowsWhileLoopWithLimit",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "-",
      c = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]),
      d = "\\",
      m = "'",
      p = "f",
      _ = "t",
      f =
        ((e = {}),
        (e[(s = r("WAFlowsConditionalRenderingTypes")).AND] = function (
          e,
          t,
          n,
          r,
        ) {
          return typeof n == "boolean" && typeof r == "boolean" && n && r;
        }),
        (e[s.NOT] = function (e, t, n, r) {
          return typeof r == "boolean" && !r;
        }),
        (e[s.OR] = function (e, t, n, r) {
          return (typeof n == "boolean" && n) || (typeof r == "boolean" && r);
        }),
        (e[s.GREATER_THAN] = function (e, t) {
          return typeof e == "number" && typeof t == "number" && e > t;
        }),
        (e[s.GREATER_THAN_OR_EQUALS] = function (e, t) {
          return typeof e == "number" && typeof t == "number" && e >= t;
        }),
        (e[s.LESS_THAN] = function (e, t) {
          return typeof e == "number" && typeof t == "number" && e < t;
        }),
        (e[s.LESS_THAN_OR_EQUALS] = function (e, t) {
          return typeof e == "number" && typeof t == "number" && e <= t;
        }),
        (e[s.EQUALS] = function (e, t, n, r) {
          return n === "" || r === ""
            ? n === r || n == null || r == null
            : e === t;
        }),
        (e[s.NOT_EQUALS] = function (e, t, n, r) {
          return n === "" || r === ""
            ? !(n === r || n == null || r == null)
            : e !== t;
        }),
        e),
      g = new Set(["&&", "||", ">", ">=", "<", "<=", "==", "!", "!=", "()"]),
      h = new Set(["!", "=", "&", "|", ">", "<", "("]),
      y = {
        CLOSING_PARENTHESIS: "CLOSING_PARENTHESIS",
        EMPTY_STRING: "EMPTY_STRING",
        OPERATOR: "OPERATOR",
        NUMBER_LITERAL: "NUMBER_LITERAL",
        STRING_LITERAL: "STRING_LITERAL",
        UNIDENTIFIED: "UNIDENTIFIED",
        VARIABLE: "VARIABLE",
      };
    function C(e) {
      return e === "condition";
    }
    function b(e, t, n, o) {
      for (var a = [], i = [], l = 0; l < e.length; l++) {
        var s = e[l];
        switch (N(s)) {
          case y.VARIABLE:
            l = v(a, e, l, t, n, o);
            break;
          case y.CLOSING_PARENTHESIS:
            R(a, i);
            break;
          case y.OPERATOR:
            l = S(a, i, e, l);
            break;
          case y.STRING_LITERAL:
            l = x(a, e, l);
            break;
          case y.NUMBER_LITERAL:
            l = $(a, e, l);
            break;
          case y.BOOLEAN_LITERAL:
            l = P(a, e, l);
            break;
          case y.EMPTY_STRING:
            break;
          case y.UNIDENTIFIED:
            return !1;
        }
      }
      r("WAFlowsWhileLoopWithLimit")(a.length > 1, function () {
        L(a, !0);
      });
      var u = a.pop();
      return typeof u == "boolean" && u;
    }
    function v(e, t, n, r, a, i) {
      var l = t[n + 1],
        s = n + 1;
      if (l === "{") {
        s = t.indexOf("}", n) + 1;
        var u = t.substring(n, s),
          c = o("WAFlowsStateParser").parsePropertyValue(u, a, r, null, i);
        (e.push(c), e.length > 1 && L(e));
      }
      return s - 1;
    }
    function S(e, t, n, o) {
      var a = n[o];
      if (o + 1 < n.length) {
        var i = n.substring(o, o + 2);
        if (g.has(i)) return (e.push(i), o + 1);
      }
      return (
        a === r("WAFlowsConditionalRenderingTypes").OPENING_PARENTHESIS &&
          t.push(e.length),
        e.push(a),
        o
      );
    }
    function R(e, t) {
      var n = t.pop(),
        r = e.length;
      if (n != null) for (var o = r; o >= n; o -= 2) L(e, !0);
    }
    function L(e, t) {
      var n = e[e.length - 2];
      if (E(n, t)) {
        e.push(k(e));
        return;
      }
      I(n, t) && e.push(T(e));
    }
    function E(e, t) {
      return (
        e === r("WAFlowsConditionalRenderingTypes").NOT ||
        (t === !0 &&
          e === r("WAFlowsConditionalRenderingTypes").OPENING_PARENTHESIS)
      );
    }
    function k(e) {
      var t = e.pop(),
        n = e.pop();
      return n === r("WAFlowsConditionalRenderingTypes").NOT ? D(t, n) : t;
    }
    function I(e, t) {
      return (
        typeof e == "string" &&
        g.has(e) &&
        (t === !0 || e === r("WAFlowsConditionalRenderingTypes").AND)
      );
    }
    function T(e) {
      var t = e.pop(),
        n = e.pop(),
        r = e.pop();
      return D(t, n, r);
    }
    function D(e, t, n) {
      if (typeof t != "string") return !1;
      var r = f[t];
      if (r == null) return !1;
      var a =
          o("WAFlowsTypeGuards").isParseableToNumber(e) &&
          o("WAFlowsTypeGuards").isParseableToNumber(n),
        i = a ? parseInt(String(e), 10) : e,
        l = a ? parseInt(String(n), 10) : n;
      return r(l, i, n, e);
    }
    function x(e, t, n) {
      for (var r = t.indexOf(m, n + 1); r > 0 && t[r - 1] === d; )
        r = t.indexOf(m, r + 1);
      if (r === -1) return t.length;
      var o = t.substring(n + 1, r);
      return (e.push(o), e.length > 1 && L(e), r);
    }
    function $(e, t, n) {
      for (
        var r = n;
        r < t.length && (c.has(t[r]) || (r === n && t[n] === u));
      )
        r++;
      var o = t.substring(n, r);
      return (e.push(parseInt(o, 10)), e.length > 1 && L(e), r > 0 ? r - 1 : r);
    }
    function P(e, t, n) {
      var r = "true",
        o = "false",
        a = n + (t[n] === r[0] ? r.length : o.length),
        i = t.substring(n, a);
      return (e.push(i === r), e.length > 1 && L(e), a);
    }
    function N(e) {
      return h.has(e)
        ? y.OPERATOR
        : e === r("WAFlowsConditionalRenderingTypes").DYNAMIC_VARIABLE_START
          ? y.VARIABLE
          : e === r("WAFlowsConditionalRenderingTypes").CLOSING_PARENTHESIS
            ? y.CLOSING_PARENTHESIS
            : e === m
              ? y.STRING_LITERAL
              : e === u || c.has(e)
                ? y.NUMBER_LITERAL
                : e === r("WAFlowsConditionalRenderingTypes").EMPTY_STRING
                  ? y.EMPTY_STRING
                  : e === p || e === _
                    ? y.BOOLEAN_LITERAL
                    : y.UNIDENTIFIED;
    }
    ((l.isConditionalRenderingValue = C), (l.parseConditionalRendering = b));
  },
  98,
);
