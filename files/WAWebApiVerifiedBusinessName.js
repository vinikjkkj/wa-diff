__d(
  "WAWebApiVerifiedBusinessName",
  [
    "invariant",
    "$InternalEnum",
    "Promise",
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
        .get(k(e));
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
              if (r != null) return babelHelpers.extends({}, r, { id: k(e) });
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
            if (n != null) return babelHelpers.extends({}, n, { id: k(e) });
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
          return e.isUser() ? (e.isLid() ? m(e) : _(e)) : null;
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(b),
            n = yield o("WAWebSchemaVerifiedBusinessName")
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
            return o == null ? null : babelHelpers.extends({}, o, { id: k(e) });
          });
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return e.isUser()
        ? [
            o("WAWebLidMigrationUtils").toLid(e),
            o("WAWebLidMigrationUtils").toPn(e),
          ]
            .filter(Boolean)
            .map(k)
        : [];
    }
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = c.Replace);
          var r = o(
              "WAWebSchemaVerifiedBusinessName",
            ).getVerifiedBusinessNameTable(),
            a = k(e),
            i = babelHelpers.extends({}, t, { id: a });
          n === c.Replace
            ? yield r.createOrReplace(i)
            : yield r.createOrMerge(a, i);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield d(e);
          return (t == null ? void 0 : t.privacyMode) == null
            ? null
            : E(t.privacyMode);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
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
    function k(e) {
      return e.isLid() ? e.toString() : e.user;
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          a === void 0 && (a = c.Replace);
          var i = o("WAWebLidMigrationUtils").getPnAndLidToUpdate(t);
          return (e || (e = n("Promise"))).all(
            i.map(function (e) {
              return v(e, r, a);
            }),
          );
        })),
        T.apply(this, arguments)
      );
    }
    ((l.getAllVerifiedNames = u),
      (l.VerifiedBusinessNameUpdateType = c),
      (l.getVerifiedBusinessNameRecord = d),
      (l.getVerifiedBusinessNameRecordLidAware = g),
      (l.bulkGetVerifiedBusinessNameRecordsLidAware = y),
      (l.createOrUpdateVerifiedBusinessName = v),
      (l.getPrivacyMode = R),
      (l.convertPrivacyModeFromStorageType = E),
      (l.widToId = k),
      (l.createOrUpdateVerifiedBusinessNameLidAware = I));
  },
  98,
);
