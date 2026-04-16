__d(
  "WAWebSyncdDb",
  [
    "WASyncdKeyTypes",
    "WAWebSchemaCollectionVersion",
    "WAWebSchemaMissingKeys",
    "WAWebSchemaPendingMutations",
    "WAWebSchemaSyncActions",
    "WAWebSchemaSyncKeys",
    "asyncToGeneratorRuntime",
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
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaPendingMutations")
            .getPendingMutationsTable()
            .all({ index: ["collection"], returnKeyType: "keys" });
          return new Set(e);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return o("WAWebSchemaPendingMutations")
        .getPendingMutationsTable()
        .equals(e, t);
    }
    function m(e) {
      return o("WAWebSchemaPendingMutations")
        .getPendingMutationsTable()
        .bulkCreate(e);
    }
    function p(e) {
      return o("WAWebSchemaPendingMutations")
        .getPendingMutationsTable()
        .bulkRemove(e);
    }
    function _(e, t, n) {
      return o("WAWebSchemaCollectionVersion")
        .getCollectionVersionTable()
        .createOrMerge(e, { collection: e, version: t, ltHash: n });
    }
    function f(e) {
      return o("WAWebSchemaSyncActions").getSyncActionsTable().get(e);
    }
    function g(e, t) {
      return o("WAWebSchemaSyncActions").getSyncActionsTable().anyOf(e, t);
    }
    function h(e) {
      return o("WAWebSchemaSyncActions")
        .getSyncActionsTable()
        .createOrReplace(e);
    }
    function y(e) {
      return o("WAWebSchemaSyncActions")
        .getSyncActionsTable()
        .bulkCreateOrReplace(e);
    }
    function C(e) {
      return o("WAWebSchemaSyncActions")
        .getSyncActionsTable()
        .bulkCreateOrMerge(
          e.map(function (e) {
            return babelHelpers.extends({}, e);
          }),
        );
    }
    function b(e) {
      return o("WAWebSchemaSyncActions").getSyncActionsTable().bulkRemove(e);
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaSyncKeys")
            .getSyncKeysTable()
            .get(new Uint8Array(o("WASyncdKeyTypes").fromSyncKeyId(e)));
          return t == null
            ? t
            : o("WAWebSchemaSyncKeys").convertToSyncKeyFromRow(t);
        })),
        S.apply(this, arguments)
      );
    }
    function R() {
      return o("WAWebSchemaSyncKeys")
        .getSyncKeysTable()
        .all()
        .then(function (e) {
          return e.map(o("WAWebSchemaSyncKeys").convertToSyncKeyFromRow);
        });
    }
    function L(e) {
      return o("WAWebSchemaSyncKeys")
        .getSyncKeysTable()
        .createOrReplace(o("WAWebSchemaSyncKeys").convertFromSyncKeyToRow(e))
        .then(function (e) {
          return o("WASyncdKeyTypes").toSyncKeyId(e.buffer);
        });
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaSyncKeys")
            .getSyncKeysTable()
            .equals(["keyEpoch"], e);
          t.forEach(function (e) {
            return o("WAWebSchemaSyncKeys")
              .getSyncKeysTable()
              .merge({ keyId: e.keyId }, { timestamp: 0 });
          });
        })),
        k.apply(this, arguments)
      );
    }
    function I() {
      return o("WAWebSchemaMissingKeys").getMissingKeysTable().count();
    }
    function T(e) {
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
    function D() {
      return o("WAWebSchemaMissingKeys")
        .getMissingKeysTable()
        .all()
        .then(function (e) {
          return e.map(o("WAWebSchemaMissingKeys").convertToMissingKeyFromRow);
        });
    }
    function x(e) {
      return o("WAWebSchemaMissingKeys").getMissingKeysTable().bulkRemove(e);
    }
    function $(e) {
      return o("WAWebSchemaMissingKeys")
        .getMissingKeysTable()
        .bulkCreateOrMerge(
          e.map(o("WAWebSchemaMissingKeys").convertFromMissingKeyToRow),
        );
    }
    ((l.getAllPendingMutationsRows = e),
      (l.getPendingMutationsRows = s),
      (l.getCollectionsWithPendingMutations = u),
      (l.getPendingMutationsRowsByIndex = d),
      (l.appendPendingMutationsRows = m),
      (l.bulkRemovePendingMutations = p),
      (l.setCollectionVersion = _),
      (l.getSyncAction = f),
      (l.getSyncActionsRows = g),
      (l.setSyncAction = h),
      (l.setSyncActionRows = y),
      (l.updateSyncActionRows = C),
      (l.deleteSyncActionRows = b),
      (l.getSyncKey = v),
      (l.getAllSyncKeys = R),
      (l.createSyncKey = L),
      (l.expireSyncKey = E),
      (l.getMissingKeyCount = I),
      (l.bulkGetMissingKeys = T),
      (l.getAllMissingKeys = D),
      (l.bulkRemoveMissingKeys = x),
      (l.createOrUpdateMissingKeys = $));
  },
  98,
);
