__d(
  "WAWebSyncdDb",
  [
    "WASyncdKeyTypes",
    "WAWebSchemaCollectionVersion",
    "WAWebSchemaMissingKeys",
    "WAWebSchemaPendingMutations",
    "WAWebSchemaSyncActions",
    "WAWebSchemaSyncKeys",
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
        .all({ index: ["collection"], returnKeyType: "keys" });
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
    function p(e, t, n) {
      return o("WAWebSchemaCollectionVersion")
        .getCollectionVersionTable()
        .createOrMerge(e, { collection: e, version: t, ltHash: n });
    }
    function _(e) {
      return o("WAWebSchemaSyncActions").getSyncActionsTable().get(e);
    }
    function f(e, t) {
      return o("WAWebSchemaSyncActions").getSyncActionsTable().anyOf(e, t);
    }
    function g(e) {
      return o("WAWebSchemaSyncActions")
        .getSyncActionsTable()
        .createOrReplace(e);
    }
    function h(e) {
      return o("WAWebSchemaSyncActions")
        .getSyncActionsTable()
        .bulkCreateOrReplace(e);
    }
    function y(e) {
      return o("WAWebSchemaSyncActions")
        .getSyncActionsTable()
        .bulkCreateOrMerge(
          e.map(function (e) {
            return babelHelpers.extends({}, e);
          }),
        );
    }
    function C(e) {
      return o("WAWebSchemaSyncActions").getSyncActionsTable().bulkRemove(e);
    }
    async function b(e) {
      var t = await o("WAWebSchemaSyncKeys")
        .getSyncKeysTable()
        .get(new Uint8Array(o("WASyncdKeyTypes").fromSyncKeyId(e)));
      return t == null
        ? t
        : o("WAWebSchemaSyncKeys").convertToSyncKeyFromRow(t);
    }
    function v() {
      return o("WAWebSchemaSyncKeys")
        .getSyncKeysTable()
        .all()
        .then(function (e) {
          return e.map(o("WAWebSchemaSyncKeys").convertToSyncKeyFromRow);
        });
    }
    function S(e) {
      return o("WAWebSchemaSyncKeys")
        .getSyncKeysTable()
        .createOrReplace(o("WAWebSchemaSyncKeys").convertFromSyncKeyToRow(e))
        .then(function (e) {
          return o("WASyncdKeyTypes").toSyncKeyId(e.buffer);
        });
    }
    async function R(e) {
      var t = await o("WAWebSchemaSyncKeys")
        .getSyncKeysTable()
        .equals(["keyEpoch"], e);
      t.forEach(function (e) {
        return o("WAWebSchemaSyncKeys")
          .getSyncKeysTable()
          .merge({ keyId: e.keyId }, { timestamp: 0 });
      });
    }
    function L() {
      return o("WAWebSchemaMissingKeys").getMissingKeysTable().count();
    }
    function E(e) {
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
    function k() {
      return o("WAWebSchemaMissingKeys")
        .getMissingKeysTable()
        .all()
        .then(function (e) {
          return e.map(o("WAWebSchemaMissingKeys").convertToMissingKeyFromRow);
        });
    }
    function I(e) {
      return o("WAWebSchemaMissingKeys").getMissingKeysTable().bulkRemove(e);
    }
    function T(e) {
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
      (l.setCollectionVersion = p),
      (l.getSyncAction = _),
      (l.getSyncActionsRows = f),
      (l.setSyncAction = g),
      (l.setSyncActionRows = h),
      (l.updateSyncActionRows = y),
      (l.deleteSyncActionRows = C),
      (l.getSyncKey = b),
      (l.getAllSyncKeys = v),
      (l.createSyncKey = S),
      (l.expireSyncKey = R),
      (l.getMissingKeyCount = L),
      (l.bulkGetMissingKeys = E),
      (l.getAllMissingKeys = k),
      (l.bulkRemoveMissingKeys = I),
      (l.createOrUpdateMissingKeys = T));
  },
  98,
);
