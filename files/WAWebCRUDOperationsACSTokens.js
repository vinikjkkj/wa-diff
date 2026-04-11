__d(
  "WAWebCRUDOperationsACSTokens",
  ["WAWebSchemaACSTokens", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        t === void 0 && (t = o("WAWebSchemaACSTokens").getACSTokensTable()),
        t.createOrReplace(e)
      );
    }
    function s(t, n) {
      var r = t + "-default";
      return e(babelHelpers.extends({ project: t }, n, { tokenName: r }));
    }
    function u(e, t) {
      var n = t.map(function (t, n) {
        return babelHelpers.extends({}, t, {
          project: e,
          tokenName: e + "-" + n,
        });
      });
      return o("WAWebSchemaACSTokens")
        .getACSTokensTable()
        .bulkCreateOrReplace(n);
    }
    function c(e, t) {
      return (
        t === void 0 && (t = o("WAWebSchemaACSTokens").getACSTokensTable()),
        t.anyOf(["project"], [e])
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = o("WAWebSchemaACSTokens").getACSTokensTable());
          var n = yield c(e, t);
          return n.length > 0 ? n[0] : null;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return o("WAWebSchemaACSTokens").getACSTokensTable().get(e);
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield c(e, t);
          yield t.bulkRemove(
            n.map(function (e) {
              return e.tokenName;
            }),
          );
        })),
        f.apply(this, arguments)
      );
    }
    ((l.upsertACSToken = e),
      (l.storeACSTokenForProject = s),
      (l.storeACSTokensForProject = u),
      (l.getACSTokensByProject = c),
      (l.getACSTokenByProject = d),
      (l.getACSTokenByName = p),
      (l.deleteAllACSTokensByProject = _));
  },
  98,
);
