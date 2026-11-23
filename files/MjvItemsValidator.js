__d(
  "MjvItemsValidator",
  ["MjvBuiltins", "MjvKeywords", "MjvTypeValidator"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { type: ["object", "boolean"] };
    function s(e, t, n) {
      return {
        required: e.required,
        dataPath: e.dataPath + "[" + t + "]",
        schemaPath: n,
        skipErrors: e.skipErrors,
        isRootValidation: e.isRootValidation,
        validateUndefined: !0,
        rootSchema: e.rootSchema,
        seen$Refs: e.seen$Refs,
      };
    }
    function u(e, t, n, o) {
      if ((c(e, t, o), !r("MjvBuiltins").isArray(n) || typeof t != "object"))
        return !0;
      var a = t.type,
        i =
          a === void 0 ||
          a === "array" ||
          (r("MjvBuiltins").isArray(a) && a.includes("array"));
      if (!i) return !0;
      var l = t.items;
      return r("MjvBuiltins").isArray(l)
        ? d(e, t, l, n, o)
        : (typeof l == "object" && l != null) || typeof l == "boolean"
          ? m(e, l, n, o)
          : !0;
    }
    function c(t, n, r) {
      if (!(typeof n != "object" || n == null)) {
        var a = t.getSchemaMeta(n);
        a.itemsSchemaChecked !== !0 &&
          (n.items !== void 0 &&
            !Array.isArray(n.items) &&
            !o("MjvTypeValidator").validateType(
              t,
              e,
              n.items,
              t.getParamsWithDataPath(r, "items"),
            ) &&
            t.throwError(t.errorsText(t.errors)),
          (a.itemsSchemaChecked = !0));
      }
    }
    function d(e, t, n, r, o) {
      for (var a = !0, i = n.length, l = 0; l < Math.min(r.length, i); l++) {
        var u = n[l];
        if (
          u != null &&
          (typeof u == "object" ||
            typeof u == "boolean" ||
            typeof u == "string") &&
          !e.validate(u, r[l], s(o, l, o.schemaPath + "/items/" + l)) &&
          ((a = !1), e.exitOnError())
        )
          break;
      }
      return (a && r.length > i && (a = p(e, t, r, i, o)), a);
    }
    function m(e, t, n, r) {
      var o = !0;
      c(e, t, e.getParamsWithDataPath(r, "items"));
      for (
        var a = r.schemaPath + "/items", i = 0;
        i < n.length &&
        !(!e.validate(t, n[i], s(r, i, a)) && ((o = !1), e.exitOnError()));
        i++
      );
      return o;
    }
    function p(e, t, n, o, a) {
      var i = t.additionalItems;
      if (i === !1)
        return (
          e.pushError(
            r("MjvKeywords").ADDITIONAL_ITEMS.ID,
            r("MjvKeywords").ADDITIONAL_ITEMS.message(o),
            { limit: o },
            e.getParamsWithSchemaPath(
              t,
              a,
              r("MjvKeywords").ADDITIONAL_ITEMS.ID,
            ),
            { parentSchema: t, schema: i, data: n },
          ),
          !1
        );
      if (typeof i != "object" || i == null) return !0;
      for (
        var l = !0, u = a.schemaPath + "/additionalItems", c = o;
        c < n.length &&
        !(!e.validate(i, n[c], s(a, c, u)) && ((l = !1), e.exitOnError()));
        c++
      );
      return l;
    }
    l.validateItems = u;
  },
  98,
);
