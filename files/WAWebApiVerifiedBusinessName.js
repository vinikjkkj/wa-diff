__d(
  "WAWebApiVerifiedBusinessName",
  [
    "invariant",
    "$InternalEnum",
    "WAWebHandleMsgTypes",
    "WAWebLidMigrationUtils",
    "WAWebSchemaVerifiedBusinessName",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return o("WAWebSchemaVerifiedBusinessName")
        .getVerifiedBusinessNameTable()
        .all();
    }
    var u = n("$InternalEnum").Mirrored(["Replace", "Merge"]);
    function c(e) {
      return o("WAWebSchemaVerifiedBusinessName")
        .getVerifiedBusinessNameTable()
        .get(C(e));
    }
    async function d(e) {
      e.isLid() || s(0, 86986);
      var t = await c(e);
      if (t == null) {
        var n = o("WAWebLidMigrationUtils").toPn(e);
        if (n != null) {
          var r = await c(n);
          if (r != null) return babelHelpers.extends({}, r, { id: C(e) });
        }
      }
      return t;
    }
    async function m(e) {
      var t = o("WAWebLidMigrationUtils").toLid(e);
      if (t != null) {
        var n = await c(t);
        if (n != null) return babelHelpers.extends({}, n, { id: C(e) });
      }
      return c(e);
    }
    async function p(e) {
      return e.isUser() ? (e.isLid() ? d(e) : m(e)) : null;
    }
    async function _(e) {
      var t = e.map(f),
        n = await o("WAWebSchemaVerifiedBusinessName")
          .getVerifiedBusinessNameTable()
          .bulkGet(Array.from(new Set(t.flat()))),
        r = new Map();
      for (var a of n) a != null && r.set(a.id, a);
      return e.map(function (e, n) {
        var o = t[n]
          .map(function (e) {
            return r.get(e);
          })
          .find(Boolean);
        return o == null ? null : babelHelpers.extends({}, o, { id: C(e) });
      });
    }
    function f(e) {
      return e.isUser()
        ? [
            o("WAWebLidMigrationUtils").toLid(e),
            o("WAWebLidMigrationUtils").toPn(e),
          ]
            .filter(Boolean)
            .map(C)
        : [];
    }
    async function g(e, t, n) {
      n === void 0 && (n = u.Replace);
      var r = o(
          "WAWebSchemaVerifiedBusinessName",
        ).getVerifiedBusinessNameTable(),
        a = C(e),
        i = babelHelpers.extends({}, t, { id: a });
      n === u.Replace
        ? await r.createOrReplace(i)
        : await r.createOrMerge(a, i);
    }
    async function h(e) {
      var t = await c(e);
      return (t == null ? void 0 : t.privacyMode) == null
        ? null
        : y(t.privacyMode);
    }
    function y(e) {
      var t = o("WAWebHandleMsgTypes").ActualActorsEnumType.cast(
          e.actualActors,
        ),
        n = o("WAWebHandleMsgTypes").HostStorageEnumType.cast(e.hostStorage);
      return t == null || n == null
        ? null
        : { actualActors: t, hostStorage: n, privacyModeTs: e.privacyModeTs };
    }
    function C(e) {
      return e.isLid() ? e.toString() : e.user;
    }
    async function b(e, t, n) {
      n === void 0 && (n = u.Replace);
      var r = o("WAWebLidMigrationUtils").getPnAndLidToUpdate(e);
      return Promise.all(
        r.map(function (e) {
          return g(e, t, n);
        }),
      );
    }
    ((l.getAllVerifiedNames = e),
      (l.VerifiedBusinessNameUpdateType = u),
      (l.getVerifiedBusinessNameRecord = c),
      (l.getVerifiedBusinessNameRecordLidAware = p),
      (l.bulkGetVerifiedBusinessNameRecordsLidAware = _),
      (l.createOrUpdateVerifiedBusinessName = g),
      (l.getPrivacyMode = h),
      (l.convertPrivacyModeFromStorageType = y),
      (l.widToId = C),
      (l.createOrUpdateVerifiedBusinessNameLidAware = b));
  },
  98,
);
