__d(
  "MjvTypeValidator",
  ["MjvBuiltins", "MjvEnumValidator", "MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      enum: [
        "array",
        "boolean",
        "integer",
        "null",
        "number",
        "object",
        "string",
      ],
    };
    function s(e, t, n, o) {
      d(e, t, o);
      var a = !0;
      if (
        typeof t == "object" &&
        t != null &&
        (n !== void 0 || o.validateUndefined)
      ) {
        var i = t.type;
        if (typeof i == "string") {
          var l = c(i, n);
          if (!l && i != null) {
            var s = String(i);
            (e.pushError(
              r("MjvKeywords").TYPE.ID,
              r("MjvKeywords").TYPE.message(s),
              { type: s },
              e.getParamsWithSchemaPath(t, o, r("MjvKeywords").TYPE.ID),
              { parentSchema: t, schema: i, data: n },
            ),
              (a = !1));
          }
        } else if (r("MjvBuiltins").isArray(i) && i.length > 0) {
          var m = u(i, n);
          if (!m && i != null) {
            var p = i.join(",");
            (e.pushError(
              r("MjvKeywords").TYPE.ID,
              r("MjvKeywords").TYPE.message(p),
              { type: p },
              e.getParamsWithSchemaPath(t, o, r("MjvKeywords").TYPE.ID),
              { parentSchema: t, schema: i, data: n },
            ),
              (a = !1));
          }
        }
      }
      return a;
    }
    function u(e, t) {
      var n = !1;
      if (r("MjvBuiltins").isArray(e)) {
        for (var o of e)
          if (c(o, t)) {
            n = !0;
            break;
          }
      } else n = c(e, t);
      return n;
    }
    function c(e, t) {
      if (e == null) return !0;
      switch (e) {
        case "array":
          return r("MjvBuiltins").isArray(t);
        case "object":
          return typeof t === e && t !== null && !r("MjvBuiltins").isArray(t);
        case "integer":
          return r("MjvBuiltins").isInteger(t);
        case "null":
          return t === null;
        default:
          return typeof t === e;
      }
    }
    function d(e, t, n) {
      if (!(typeof t != "object" || t == null)) {
        var o = e.getSchemaMeta(t);
        if (o.typeSchemaChecked !== !0) {
          if (t.type !== void 0)
            if (r("MjvBuiltins").isArray(t.type))
              for (var a of t.type) m(e, a, n);
            else m(e, t.type, n);
          o.typeSchemaChecked = !0;
        }
      }
    }
    function m(t, n, r) {
      o("MjvEnumValidator").validateEnum(
        t,
        e,
        n,
        babelHelpers.extends({}, t.getParamsWithDataPath(r, "type"), {
          schemaPath: "#/definitions/simpleTypes",
        }),
      ) || t.throwError(t.errorsText(t.errors));
    }
    ((l.validateType = s), (l.isValidType = u));
  },
  98,
);
