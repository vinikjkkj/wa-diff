__d(
  "WAWebLidAwareContactsDB",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WAWebApiContact",
    "WAWebContactsDbLidMigrationUtils",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = [
        "contactHash",
        "id",
        "phoneNumber",
        "phoneNumberCreatedAt",
        "pnContactHash",
      ],
      d;
    function m(e) {
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
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .all(e, t);
          return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(
            n,
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .clear(e);
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          if (e[0] === "contactHash") {
            var i = yield (d || (d = n("Promise"))).all([
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
                      s = babelHelpers.objectWithoutPropertiesLoose(e, c),
                      d = o("WAWebApiContact").getPnIfLidIsLatestMapping(
                        o("WAWebWidFactory").createUserLidOrThrow(n),
                      );
                    if (d != null) {
                      var m = d.toJid();
                      u.set(
                        m,
                        babelHelpers.extends({}, s, {
                          id: m,
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
          var m = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .equals(e, t, a);
          return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(
            m,
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .create(e);
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          return (d || (d = n("Promise"))).resolve(i);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = o("WAWebContactsDbLidMigrationUtils").getAlternateRowUpdates(
              e,
              t,
            ),
            a =
              r != null
                ? o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                    .getContactTable()
                    .merge(r.id, r)
                : (d || (d = n("Promise"))).resolve();
          yield (d || (d = n("Promise"))).all([
            o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
              .getContactTable()
              .merge(e, t),
            a,
          ]);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = o("WAWebContactsDbLidMigrationUtils").getAlternateRowUpdates(
              e,
              t,
            ),
            a =
              r != null
                ? o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                    .getContactTable()
                    .createOrMerge(r.id, r)
                : (d || (d = n("Promise"))).resolve();
          yield (d || (d = n("Promise"))).all([
            o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
              .getContactTable()
              .createOrMerge(e, t),
            a,
          ]);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
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
            if (t.length === 0) return (d || (d = n("Promise"))).resolve();
            var l = r("compactMap")(t, function (e) {
              return o(
                "WAWebContactsDbLidMigrationUtils",
              ).getAlternateRowUpdates(r("WANullthrows")(e.id), e);
            });
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "bulkCreateOrMerge [",
                    "]: ",
                    " alternate rows",
                  ])),
                a,
                l.length,
              ),
              yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                .getContactTable()
                .bulkCreateOrMerge([].concat(t, l))
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
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .bulkRemove(e);
    }
    function T(e) {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .remove(e);
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .lessThan(e, t);
          return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(
            n,
          );
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .greaterThan(e, t, n);
          return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(
            r,
          );
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
          var n = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .anyOf(e, t);
          return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(
            n,
          );
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .setUpdateListener(e);
    }
    function A() {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .count();
    }
    function F() {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .allPrimaryKeys();
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .equalsPrimaryKeys(e, t);
        })),
        W.apply(this, arguments)
      );
    }
    var q = {
      get: m,
      all: p,
      allPrimaryKeys: F,
      clear: f,
      equals: g,
      equalsPrimaryKeys: B,
      create: y,
      bulkGet: C,
      merge: v,
      createOrMerge: R,
      bulkCreateOrMerge: E,
      bulkRemove: I,
      remove: T,
      lessThan: D,
      greaterThan: $,
      anyOf: N,
      setUpdateListener: w,
      count: A,
    };
    l.default = q;
  },
  98,
);
