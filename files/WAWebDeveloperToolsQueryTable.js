__d(
  "WAWebDeveloperToolsQueryTable",
  ["WAWebDeveloperToolsLoadTable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e.filter(function (e) {
        return s(e, t);
      });
    }
    function s(e, t) {
      if (t.type === "GROUP") {
        var n = t.conditionKey,
          r = t.conditions;
        if (n === o("WAWebDeveloperToolsLoadTable").MapKey.All) {
          var a = !0;
          if (
            (r.every(function (t) {
              return ((a = a && s(e, t)), a);
            }),
            !a)
          )
            return !1;
        } else if (n === o("WAWebDeveloperToolsLoadTable").MapKey.Any) {
          var i = !1;
          if (
            (r.some(function (t) {
              return ((i = i || s(e, t)), i);
            }),
            !i)
          )
            return !1;
        }
      }
      if (t.type === "RULE") {
        var l = t.key,
          u = t.match,
          c = t.value;
        return o("WAWebDeveloperToolsLoadTable").validateFilterMatch(
          e[l],
          c,
          u,
        );
      }
      return !0;
    }
    function u(e) {
      var t, n;
      try {
        n = JSON.parse(e);
      } catch (e) {
        return { valid: !1, reason: "Invalid JSON" };
      }
      if (!Array.isArray(n))
        return { valid: !1, reason: "JSON does not match query schema." };
      if (n.length !== 2)
        return {
          valid: !1,
          reason: "Query must contain exactly 2 root nodes.",
        };
      for (var r = 0; r < n.length; r++)
        for (var a of o("WAWebDeveloperToolsLoadTable").RequiredGroupKeys) {
          if (!(a in n[r]))
            return { valid: !1, reason: "GROUP: " + a + " missing." };
          if (n[r].type !== "GROUP")
            return { valid: !1, reason: "Root nodes must be of type GROUP." };
        }
      var i = n.map(function (e) {
        return c(JSON.stringify(e));
      });
      return {
        valid: i.every(function (e) {
          return e.valid;
        }),
        reason:
          (t = i.find(function (e) {
            return !e.valid;
          })) == null
            ? void 0
            : t.reason,
      };
    }
    function c(e) {
      var t = JSON.parse(e);
      if (!("type" in t))
        return { valid: !1, reason: "Required key: type missing." };
      if (t.type === "GROUP") {
        for (var n of o("WAWebDeveloperToolsLoadTable").RequiredGroupKeys)
          if (!(n in t))
            return { valid: !1, reason: "GROUP: " + n + " missing." };
        if (
          t.conditionKey !== o("WAWebDeveloperToolsLoadTable").MapKey.All &&
          t.conditionKey !== o("WAWebDeveloperToolsLoadTable").MapKey.Any
        )
          return {
            valid: !1,
            reason:
              "GROUP: conditionKey must be of type " +
              o("WAWebDeveloperToolsLoadTable").MapKey.All +
              " or " +
              o("WAWebDeveloperToolsLoadTable").MapKey.Any +
              ".",
          };
        if (!Array.isArray(t.conditions))
          return { valid: !1, reason: "GROUP: conditions must be an array." };
        for (var r of t.conditions) {
          var a = c(JSON.stringify(r));
          if (!a.valid) return { valid: !1, reason: a.reason };
        }
      } else if (t.type === "RULE") {
        for (var i of o("WAWebDeveloperToolsLoadTable").RequiredRuleKeys)
          if (!(i in t))
            return { valid: !1, reason: "RULE: " + i + " missing." };
        if (!o("WAWebDeveloperToolsLoadTable").AllFilters.includes(t.match))
          return {
            valid: !1,
            reason: "RULE: Invalid match type '" + String(t.match) + "'.",
          };
      } else return { valid: !1, reason: "Type must be GROUP or RULE." };
      return { valid: !0, reason: null };
    }
    ((l.queryConditions = e), (l.isValidConditionSchema = u));
  },
  98,
);
