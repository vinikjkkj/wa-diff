__d(
  "WAWebSyncdDb",
  [
    "WAWebSchemaMissingKeys",
    "WAWebSchemaPendingMutations",
    "WAWebSchemaSyncActions",
    "WAWebSchemaSyncKeys",
    "WAWebSyncdKeyTypes",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebSchemaPendingMutations").getPendingMutationsTable().all();
    }
    function s(e, t) {
      return o("WAWebSchemaPendingMutations")
        .getPendingMutationsTable()
        .equals(e, t);
    }
    async function u() {
      var e = await o("WAWebSchemaPendingMutations")
        .getPendingMutationsTable()
        .allKeys({ index: ["collection"], returnKeyType: "keys" });
      return new Set(e);
    }
    function c(e, t) {
      return o("WAWebSchemaPendingMutations")
        .getPendingMutationsTable()
        .equals(e, t);
    }
    function d(e) {
      return o("WAWebSchemaPendingMutations")
        .getPendingMutationsTable()
        .bulkCreate(e);
    }
    function m(e) {
      return o("WAWebSchemaPendingMutations")
        .getPendingMutationsTable()
        .bulkRemove(e);
    }
    function p(e) {
      return o("WAWebSchemaSyncActions").getSyncActionsTable().get(e);
    }
    function _(e, t) {
      return o("WAWebSchemaSyncActions").getSyncActionsTable().anyOf(e, t);
    }
    function f(e) {
      return o("WAWebSchemaSyncActions")
        .getSyncActionsTable()
        .bulkCreateOrReplace(e);
    }
    function g(e) {
      return o("WAWebSchemaSyncActions")
        .getSyncActionsTable()
        .bulkCreateOrMerge(
          e.map(function (e) {
            return babelHelpers.extends({}, e);
          }),
        );
    }
    function h(e) {
      return o("WAWebSchemaSyncActions").getSyncActionsTable().bulkRemove(e);
    }
    async function y(e) {
      var t = await o("WAWebSchemaSyncKeys")
        .getSyncKeysTable()
        .get(new Uint8Array(o("WAWebSyncdKeyTypes").fromSyncKeyId(e)));
      return t == null
        ? t
        : o("WAWebSchemaSyncKeys").convertToSyncKeyFromRow(t);
    }
    function C() {
      return o("WAWebSchemaSyncKeys")
        .getSyncKeysTable()
        .all()
        .then(function (e) {
          return e.map(o("WAWebSchemaSyncKeys").convertToSyncKeyFromRow);
        });
    }
    function b(e) {
      return o("WAWebSchemaSyncKeys")
        .getSyncKeysTable()
        .createOrReplace(o("WAWebSchemaSyncKeys").convertFromSyncKeyToRow(e))
        .then(function (e) {
          return o("WAWebSyncdKeyTypes").toSyncKeyId(e.buffer);
        });
    }
    async function v(e) {
      var t = await o("WAWebSchemaSyncKeys")
        .getSyncKeysTable()
        .equals(["keyEpoch"], e);
      t.forEach(function (e) {
        return o("WAWebSchemaSyncKeys")
          .getSyncKeysTable()
          .merge({ keyId: e.keyId }, { timestamp: 0 });
      });
    }
    function S() {
      return o("WAWebSchemaMissingKeys").getMissingKeysTable().count();
    }
    function R(e) {
      return o("WAWebSchemaMissingKeys")
        .getMissingKeysTable()
        .bulkGet(e)
        .then(function (e) {
          return e.map(function (e) {
            return e == null
              ? null
              : o("WAWebSchemaMissingKeys").convertToMissingKeyFromRow(e);
          });
        });
    }
    function L() {
      return o("WAWebSchemaMissingKeys")
        .getMissingKeysTable()
        .all()
        .then(function (e) {
          return e.map(o("WAWebSchemaMissingKeys").convertToMissingKeyFromRow);
        });
    }
    function E(e) {
      return o("WAWebSchemaMissingKeys").getMissingKeysTable().bulkRemove(e);
    }
    function k(e) {
      return o("WAWebSchemaMissingKeys")
        .getMissingKeysTable()
        .bulkCreateOrMerge(
          e.map(o("WAWebSchemaMissingKeys").convertFromMissingKeyToRow),
        );
    }
    ((l.getAllPendingMutationsRows = e),
      (l.getPendingMutationsRows = s),
      (l.getCollectionsWithPendingMutations = u),
      (l.getPendingMutationsRowsByIndex = c),
      (l.appendPendingMutationsRows = d),
      (l.bulkRemovePendingMutations = m),
      (l.getSyncAction = p),
      (l.getSyncActionsRows = _),
      (l.setSyncActionRows = f),
      (l.updateSyncActionRows = g),
      (l.deleteSyncActionRows = h),
      (l.getSyncKey = y),
      (l.getAllSyncKeys = C),
      (l.createSyncKey = b),
      (l.expireSyncKey = v),
      (l.getMissingKeyCount = S),
      (l.bulkGetMissingKeys = R),
      (l.getAllMissingKeys = L),
      (l.bulkRemoveMissingKeys = E),
      (l.createOrUpdateMissingKeys = k));
  },
  98,
);
