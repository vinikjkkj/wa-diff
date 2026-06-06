__d(
  "WAWebCRUDOperationsACSTokens",
  ["WAWebSchemaACSTokens"],
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
    async function d(e, t) {
      t === void 0 && (t = o("WAWebSchemaACSTokens").getACSTokensTable());
      var n = await c(e, t);
      return n.length > 0 ? n[0] : null;
    }
    function m(e) {
      return o("WAWebSchemaACSTokens").getACSTokensTable().get(e);
    }
    async function p(e, t) {
      var n = await c(e, t);
      await t.bulkRemove(
        n.map(function (e) {
          return e.tokenName;
        }),
      );
    }
    ((l.upsertACSToken = e),
      (l.storeACSTokenForProject = s),
      (l.storeACSTokensForProject = u),
      (l.getACSTokensByProject = c),
      (l.getACSTokenByProject = d),
      (l.getACSTokenByName = m),
      (l.deleteAllACSTokensByProject = p));
  },
  98,
);
