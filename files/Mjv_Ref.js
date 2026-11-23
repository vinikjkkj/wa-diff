__d(
  "Mjv$Ref",
  ["JSONSchemaDraft07", "MjvBuiltins"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        {
          $ref: "http://json-schema.org/draft-07/schema",
          source: r("JSONSchemaDraft07"),
        },
      ],
      s = new Set(["__proto__", "constructor", "prototype"]),
      u = {
        PREFIX: "schema is invalid",
        MESSAGES: {
          INVALID_SCHEMA: function (t) {
            return "can't resolve reference " + t;
          },
        },
        TOKENS: {
          DATA_PATH_SEPARATOR: ".",
          MESSAGE_PREFIX: "data",
          KEYWORD_PREFIX: "properties",
        },
      };
    function c(e) {
      return !e.includes("~") && !e.includes("%")
        ? e
        : decodeURIComponent(e.replace(/~0/g, "~").replace(/~1/g, "/"));
    }
    function d(e, t, n) {
      if (typeof t == "object" && t != null && t.$ref != null) {
        var r = n.seen$Refs == null,
          o = r ? e.getSchemaMeta(t) : null;
        if (
          o != null &&
          o.refResolved === !0 &&
          o.refRootSchema === n.rootSchema
        )
          return (
            o.refSchemaPath != null && (n.schemaPath = o.refSchemaPath),
            o.refResult
          );
        var a = n.seen$Refs || new Set(),
          i = n.schemaPath,
          l = String(t.$ref);
        if (a.has(l)) {
          var s = babelHelpers.extends({}, t);
          return (delete s.$ref, s);
        }
        a.add(l);
        var u = _(e, l, n),
          c = t;
        return (
          u != null &&
            (typeof u == "object"
              ? (c = p(e, t, u, n, a))
              : typeof u == "boolean" && (c = u)),
          o != null &&
            ((o.refResolved = !0),
            (o.refRootSchema = n.rootSchema),
            (o.refResult = c),
            (o.refSchemaPath = n.schemaPath !== i ? n.schemaPath : null)),
          c
        );
      }
      return t;
    }
    function m(t, n, r, o) {
      if (typeof n != "object" || n == null || n.$ref == null) return n;
      var a = t.getSchemaMeta(n);
      if (a.startingSchemaResolved === !0) return a.startingSchema;
      var i = n;
      if (t.isValidPattern(n.$ref, r.URI)) {
        var l = String(n.$ref),
          s = !1;
        for (var c of e)
          if (l.includes(c.$ref)) {
            ((i = c.source), (s = !0));
            break;
          }
        if (!s) {
          for (var d of o)
            if (l.includes(d.$ref)) {
              ((i = d.source), (s = !0));
              break;
            }
        }
        s || t.throwError(u.MESSAGES.INVALID_SCHEMA(l));
      }
      return ((a.startingSchemaResolved = !0), (a.startingSchema = i), i);
    }
    function p(e, t, n, o, a) {
      var i = JSON.parse(JSON.stringify(t)),
        l = i.$ref;
      for (var u in i)
        ["definitions", "$defs", "$ref"].includes(u) || delete i[u];
      for (var c of r("MjvBuiltins").objectKeys(n)) s.has(c) || (i[c] = n[c]);
      return (
        (o.schemaPath = l),
        i.$ref != null && i.$ref !== l
          ? d(e, i, babelHelpers.extends({}, o, { seen$Refs: a }))
          : i
      );
    }
    function _(e, t, n) {
      return t.includes("#/") ? f(e, t, n) : g(e, t, n);
    }
    function f(e, t, n) {
      var o = n.rootSchema,
        a = t.split("/").slice(1);
      for (var i of a)
        if (typeof o == "object" && o != null) {
          var l = c(i),
            s = o[l];
          o =
            s !== void 0 &&
            l in r("MjvBuiltins").objectPrototype &&
            !r("MjvBuiltins").hasOwn(o, l)
              ? void 0
              : s;
        }
      if (
        (typeof o == "object" && o != null) ||
        typeof o == "string" ||
        typeof o == "boolean"
      )
        return o;
    }
    function g(e, t, n) {
      var o = e.resolveExternalSchema(t, n.rootSchema);
      if (o != null) return o;
      var a = n.rootSchema;
      if (a != null && typeof a == "object") {
        var i = a.definitions;
        if (i != null && typeof i == "object")
          for (var l of r("MjvBuiltins").objectKeys(i)) {
            var s = i[l];
            if (typeof s == "object" && s != null && typeof s.$id == "string") {
              var u = String(s.$id).split("/").filter(Boolean),
                c = u.pop();
              if (c === t) {
                a = s;
                break;
              }
            }
          }
      }
      return a;
    }
    ((l.manage$Refs = d), (l.getStartingSchema = m));
  },
  98,
);
