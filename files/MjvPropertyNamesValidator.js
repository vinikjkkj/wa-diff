__d(
  "MjvPropertyNamesValidator",
  ["MjvBuiltins", "MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      var o = !0;
      return (
        typeof t == "object" &&
          t != null &&
          t.propertyNames != null &&
          (typeof t.propertyNames == "boolean"
            ? (o = s(e, t, t.propertyNames, n, r))
            : (typeof t.propertyNames == "object" ||
                typeof t.propertyNames == "string") &&
              (o = u(e, t, t.propertyNames, n, r))),
        o
      );
    }
    function s(e, t, n, o, a) {
      var i = !0;
      if (
        n === !1 &&
        typeof o == "object" &&
        o !== null &&
        r("MjvBuiltins").objectKeys(o).length > 0
      ) {
        var l = r("MjvBuiltins").objectKeys(o)[0];
        (e.pushError(
          r("MjvKeywords").PROPERTY_NAMES.ID,
          r("MjvKeywords").PROPERTY_NAMES.message(l),
          { propertyName: l },
          e.getParamsWithSchemaPath(t, a, r("MjvKeywords").PROPERTY_NAMES.ID),
          { parentSchema: t, schema: n, data: o },
        ),
          (i = !1));
      }
      return i;
    }
    function u(e, t, n, o, a) {
      var i = !0;
      if (
        o !== null &&
        typeof o == "object" &&
        r("MjvBuiltins").objectKeys(o).length > 0
      ) {
        for (var l in o)
          if (
            !e.validate(
              n,
              l,
              babelHelpers.extends({}, a, {
                dataPath:
                  a.dataPath + "[" + r("MjvBuiltins").stringify(l) + "]",
                schemaPath:
                  a.schemaPath + "/" + r("MjvKeywords").PROPERTY_NAMES.ID,
              }),
            ) &&
            (e.pushError(
              r("MjvKeywords").PROPERTY_NAMES.ID,
              r("MjvKeywords").PROPERTY_NAMES.message(l),
              { propertyName: l },
              e.getParamsWithSchemaPath(
                t,
                a,
                r("MjvKeywords").PROPERTY_NAMES.ID,
              ),
              { parentSchema: t, schema: n, data: o },
            ),
            (i = !1),
            e.exitOnError())
          )
            break;
      }
      return i;
    }
    l.validatePropertyNames = e;
  },
  98,
);
