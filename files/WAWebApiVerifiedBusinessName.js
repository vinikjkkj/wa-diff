__d(
  "WAWebApiVerifiedBusinessName",
  [
    "invariant",
    "$InternalEnum",
    "Promise",
    "WAWebBizGatingUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebLidMigrationUtils",
    "WAWebSchemaVerifiedBusinessName",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u() {
      return o("WAWebSchemaVerifiedBusinessName")
        .getVerifiedBusinessNameTable()
        .all();
    }
    var c = n("$InternalEnum").Mirrored(["Replace", "Merge"]);
    function d(e) {
      return o("WAWebSchemaVerifiedBusinessName")
        .getVerifiedBusinessNameTable()
        .get(R(e));
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e.isLid() || s(0, 86986);
          var t = yield d(e);
          if (t == null) {
            var n = o("WAWebLidMigrationUtils").toPn(e);
            if (n != null) {
              var r = yield d(n);
              if (r != null) return babelHelpers.extends({}, r, { id: R(e) });
            }
          }
          return t;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebLidMigrationUtils").toLid(e);
          if (t != null) {
            var n = yield d(t);
            if (n != null) return babelHelpers.extends({}, n, { id: R(e) });
          }
          return d(e);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebBizGatingUtils").isLidMigrationForVnameEnabled()
            ? e.isUser()
              ? e.isLid()
                ? m(e)
                : _(e)
              : null
            : d(e);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = c.Replace);
          var r = o(
              "WAWebSchemaVerifiedBusinessName",
            ).getVerifiedBusinessNameTable(),
            a = R(e),
            i = babelHelpers.extends({}, t, { id: a });
          n === c.Replace
            ? yield r.createOrReplace(i)
            : yield r.createOrMerge(a, i);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield d(e);
          return (t == null ? void 0 : t.privacyMode) == null
            ? null
            : S(t.privacyMode);
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
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
    function R(e) {
      return e.isLid() ? e.toString() : e.user;
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          a === void 0 && (a = c.Replace);
          var i = o("WAWebBizGatingUtils").isLidMigrationForVnameEnabled()
            ? o("WAWebLidMigrationUtils").getPnAndLidToUpdate(t)
            : [t];
          return (e || (e = n("Promise"))).all(
            i.map(function (e) {
              return y(e, r, a);
            }),
          );
        })),
        E.apply(this, arguments)
      );
    }
    ((l.getAllVerifiedNames = u),
      (l.VerifiedBusinessNameUpdateType = c),
      (l.getVerifiedBusinessNameRecord = d),
      (l.getVerifiedBusinessNameRecordLidAware = g),
      (l.createOrUpdateVerifiedBusinessName = y),
      (l.getPrivacyMode = b),
      (l.convertPrivacyModeFromStorageType = S),
      (l.widToId = R),
      (l.createOrUpdateVerifiedBusinessNameLidAware = L));
  },
  98,
);
