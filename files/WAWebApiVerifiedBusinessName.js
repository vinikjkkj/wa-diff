__d(
  "WAWebApiVerifiedBusinessName",
  [
    "invariant",
    "$InternalEnum",
    "WAWebHandleMsgTypes.flow",
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
        .get(h(e));
    }
    async function d(e) {
      e.isLid() || s(0, 86986);
      var t = await c(e);
      if (t == null) {
        var n = o("WAWebLidMigrationUtils").toPn(e);
        if (n != null) {
          var r = await c(n);
          if (r != null) return babelHelpers.extends({}, r, { id: h(e) });
        }
      }
      return t;
    }
    async function m(e) {
      var t = o("WAWebLidMigrationUtils").toLid(e);
      if (t != null) {
        var n = await c(t);
        if (n != null) return babelHelpers.extends({}, n, { id: h(e) });
      }
      return c(e);
    }
    async function p(e) {
      return e.isUser() ? (e.isLid() ? d(e) : m(e)) : null;
    }
    async function _(e, t, n) {
      n === void 0 && (n = u.Replace);
      var r = o(
          "WAWebSchemaVerifiedBusinessName",
        ).getVerifiedBusinessNameTable(),
        a = h(e),
        i = babelHelpers.extends({}, t, { id: a });
      n === u.Replace
        ? await r.createOrReplace(i)
        : await r.createOrMerge(a, i);
    }
    async function f(e) {
      var t = await c(e);
      return (t == null ? void 0 : t.privacyMode) == null
        ? null
        : g(t.privacyMode);
    }
    function g(e) {
      var t = o("WAWebHandleMsgTypes.flow").ActualActorsEnumType.cast(
          e.actualActors,
        ),
        n = o("WAWebHandleMsgTypes.flow").HostStorageEnumType.cast(
          e.hostStorage,
        );
      return t == null || n == null
        ? null
        : { actualActors: t, hostStorage: n, privacyModeTs: e.privacyModeTs };
    }
    function h(e) {
      return e.isLid() ? e.toString() : e.user;
    }
    async function y(e, t, n) {
      n === void 0 && (n = u.Replace);
      var r = o("WAWebLidMigrationUtils").getPnAndLidToUpdate(e);
      return Promise.all(
        r.map(function (e) {
          return _(e, t, n);
        }),
      );
    }
    ((l.getAllVerifiedNames = e),
      (l.VerifiedBusinessNameUpdateType = u),
      (l.getVerifiedBusinessNameRecord = c),
      (l.getVerifiedBusinessNameRecordLidAware = p),
      (l.createOrUpdateVerifiedBusinessName = _),
      (l.getPrivacyMode = f),
      (l.convertPrivacyModeFromStorageType = g),
      (l.widToId = h),
      (l.createOrUpdateVerifiedBusinessNameLidAware = y));
  },
  98,
);
