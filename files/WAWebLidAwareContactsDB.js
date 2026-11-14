__d(
  "WAWebLidAwareContactsDB",
  [
    "Promise",
    "WALogger",
    "WAWebApiContact",
    "WAWebContactsDbLidMigrationUtils",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebStorageCrashAnnotations",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = [
        "contactHash",
        "id",
        "phoneNumber",
        "phoneNumberCreatedAt",
        "pnContactHash",
      ],
      _;
    function f(e) {
      var t,
        n = r("WAWebWid").isStringLid(e)
          ? null
          : o("WAWebWidFactory").createWid(e),
        a =
          n != null && n.isUserNotPSA()
            ? (t = o("WAWebApiContact").getCurrentLid(
                o("WAWebWidFactory").asUserWidOrThrow(n),
              )) == null
              ? void 0
              : t.toString()
            : null;
      return n == null || a == null
        ? o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().get(e)
        : o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .get(a)
            .then(function (t) {
              return t == null
                ? null
                : o("WAWebContactsDbLidMigrationUtils").removeLidOnlyCols(t, e);
            });
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .all(e, t);
          return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(
            n,
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .clear(e);
    }
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          if (e[0] === "contactHash") {
            var i = yield (_ || (_ = n("Promise"))).all([
                o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                  .getContactTable()
                  .equals(e, t, a),
                o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                  .getContactTable()
                  .equals(["pnContactHash"], t, a),
              ]),
              l = i[0],
              s = i[1],
              u = new Map();
            return (
              s == null ||
                s.forEach(function (e) {
                  if (r("WAWebWid").isStringLid(e.id)) {
                    var t = e.contactHash,
                      n = e.id,
                      a = e.phoneNumber,
                      i = e.phoneNumberCreatedAt,
                      l = e.pnContactHash,
                      s = babelHelpers.objectWithoutPropertiesLoose(e, p),
                      c = o("WAWebApiContact").getPnIfLidIsLatestMapping(
                        o("WAWebWidFactory").createUserLidOrThrow(n),
                      );
                    if (c != null) {
                      var d = c.toJid();
                      u.set(
                        d,
                        babelHelpers.extends({}, s, {
                          id: d,
                          contactHash: e.pnContactHash,
                        }),
                      );
                    }
                  }
                }),
              u.size === 0 &&
                (l == null ||
                  l.map(function (e) {
                    return u.set(e.id, e);
                  })),
              Array.from(u.values())
            );
          }
          var c = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .equals(e, t, a);
          return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(
            c,
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .create(e);
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          for (
            var r = o(
                "WAWebContactsDbLidMigrationUtils",
              ).maybeReplacePhoneNumbersWithLatestLids(e),
              a = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                .getContactTable()
                .bulkGet(r, t),
              i = [],
              l = 0;
            l < e.length;
            l++
          ) {
            var s = e[l],
              u = a[l];
            u == null || u.id === s
              ? i.push(u)
              : i.push(
                  o("WAWebContactsDbLidMigrationUtils").removeLidOnlyCols(u, s),
                );
          }
          return (_ || (_ = n("Promise"))).resolve(i);
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            e.some(function (e) {
              return r("WAWebWid").isStringLid(e);
            })
          )
            throw r("err")("Expected phone contact keys");
          var n = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .bulkGet(e, t);
          if (
            n.length !== e.length ||
            n.some(function (t, n) {
              return t != null && t.id !== e[n];
            })
          )
            throw r("err")("Incomplete physical phone contact lookup");
          return n;
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .anyOf(["phoneNumber"], e, { shouldDecrypt: !1 });
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = o("WAWebContactsDbLidMigrationUtils").getAlternateRowUpdates(
              e,
              t,
            ),
            i =
              a != null
                ? o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                    .getContactTable()
                    .merge(a.id, a, r)
                : (_ || (_ = n("Promise"))).resolve();
          yield (_ || (_ = n("Promise"))).all([
            o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
              .getContactTable()
              .merge(e, t, r),
            i,
          ]);
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = o("WAWebContactsDbLidMigrationUtils").getAlternateRowUpdates(
              e,
              t,
            ),
            a =
              r != null
                ? o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                    .getContactTable()
                    .createOrMerge(r.id, r)
                : (_ || (_ = n("Promise"))).resolve();
          yield (_ || (_ = n("Promise"))).all([
            o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
              .getContactTable()
              .createOrMerge(e, t),
            a,
          ]);
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          a === void 0 && (a = "n/a");
          var i = self.performance.now();
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "bulkCreateOrMerge [",
                "]: ",
                " changes",
              ])),
            a,
            t.length,
          );
          try {
            if (t.length === 0) return (_ || (_ = n("Promise"))).resolve();
            var l = r("compactMap")(t, function (e) {
              return o(
                "WAWebContactsDbLidMigrationUtils",
              ).getAlternateRowUpdates(r("nullthrows")(e.id), e);
            });
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "bulkCreateOrMerge [",
                  "]: ",
                  " alternate rows",
                ])),
              a,
              l.length,
            );
            var c = [].concat(t, l);
            return (
              o(
                "WAWebStorageCrashAnnotations",
              ).annotateCrashWithBulkWriteCaller(a, c),
              yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                .getContactTable()
                .bulkCreateOrMerge(c)
            );
          } finally {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "bulkCreateOrMerge [",
                  "]: ",
                  " changes: ",
                  "ms",
                ])),
              a,
              t.length,
              Math.round(self.performance.now() - i),
            );
          }
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = "n/a");
          var a = self.performance.now();
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "bulkMergeOnly [",
                "]: ",
                " changes",
              ])),
            t,
            e.length,
          );
          try {
            if (e.length === 0) return (_ || (_ = n("Promise"))).resolve();
            var i = r("compactMap")(e, function (e) {
              return o(
                "WAWebContactsDbLidMigrationUtils",
              ).getAlternateRowUpdates(r("nullthrows")(e.id), e);
            });
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "bulkMergeOnly [",
                  "]: ",
                  " alternate rows",
                ])),
              t,
              i.length,
            );
            var l = [].concat(e, i);
            return (
              o(
                "WAWebStorageCrashAnnotations",
              ).annotateCrashWithBulkWriteCaller(t, l),
              yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                .getContactTable()
                .bulkMergeOnly(l)
            );
          } finally {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "bulkMergeOnly [",
                  "]: ",
                  " changes: ",
                  "ms",
                ])),
              t,
              e.length,
              Math.round(self.performance.now() - a),
            );
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .bulkRemove(e);
    }
    function A(e) {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .remove(e);
    }
    function F(e, t) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .lessThan(e, t);
          return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(
            n,
          );
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t, n) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .greaterThan(e, t, n);
          return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(
            r,
          );
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .anyOf(e, t);
          return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(
            n,
          );
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .setUpdateListener(e);
    }
    function H() {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .count();
    }
    function G() {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .allPrimaryKeys();
        })),
        z.apply(this, arguments)
      );
    }
    function j(e, t) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .equalsPrimaryKeys(e, t);
        })),
        K.apply(this, arguments)
      );
    }
    var Q = {
      get: f,
      all: g,
      allPrimaryKeys: G,
      clear: y,
      equals: C,
      equalsPrimaryKeys: j,
      create: v,
      bulkGet: S,
      bulkGetPhysicalPhoneRows: L,
      anyOfPhysicalPhoneMappingRows: k,
      merge: I,
      createOrMerge: D,
      bulkCreateOrMerge: $,
      bulkMergeOnly: N,
      bulkRemove: w,
      remove: A,
      lessThan: F,
      greaterThan: B,
      anyOf: q,
      setUpdateListener: V,
      count: H,
    };
    l.default = Q;
  },
  98,
);
