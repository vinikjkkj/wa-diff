__d(
  "WAWebLidAwareContactsDB",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebContactsDbLidMigrationUtils",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebStorageCrashAnnotations",
    "WAWebWid",
    "WAWebWidFactory",
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
      ];
    function _(e) {
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
    async function f(e, t) {
      var n = await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .all(e, t);
      return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(n);
    }
    function g(e) {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .clear(e);
    }
    async function h(e, t, n) {
      if (e[0] === "contactHash") {
        var a = await Promise.all([
            o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
              .getContactTable()
              .equals(e, t, n),
            o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
              .getContactTable()
              .equals(["pnContactHash"], t, n),
          ]),
          i = a[0],
          l = a[1],
          s = new Map();
        return (
          l == null ||
            l.forEach(function (e) {
              if (r("WAWebWid").isStringLid(e.id)) {
                var t = e.contactHash,
                  n = e.id,
                  a = e.phoneNumber,
                  i = e.phoneNumberCreatedAt,
                  l = e.pnContactHash,
                  u = babelHelpers.objectWithoutPropertiesLoose(e, p),
                  c = o("WAWebApiContact").getPnIfLidIsLatestMapping(
                    o("WAWebWidFactory").createUserLidOrThrow(n),
                  );
                if (c != null) {
                  var d = c.toJid();
                  s.set(
                    d,
                    babelHelpers.extends({}, u, {
                      id: d,
                      contactHash: e.pnContactHash,
                    }),
                  );
                }
              }
            }),
          s.size === 0 &&
            (i == null ||
              i.map(function (e) {
                return s.set(e.id, e);
              })),
          Array.from(s.values())
        );
      }
      var u = await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .equals(e, t, n);
      return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(u);
    }
    function y(e) {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .create(e);
    }
    async function C(e, t) {
      for (
        var n = o(
            "WAWebContactsDbLidMigrationUtils",
          ).maybeReplacePhoneNumbersWithLatestLids(e),
          r = await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .bulkGet(n, t),
          a = [],
          i = 0;
        i < e.length;
        i++
      ) {
        var l = e[i],
          s = r[i];
        s == null || s.id === l
          ? a.push(s)
          : a.push(
              o("WAWebContactsDbLidMigrationUtils").removeLidOnlyCols(s, l),
            );
      }
      return Promise.resolve(a);
    }
    async function b(e, t) {
      if (
        e.some(function (e) {
          return r("WAWebWid").isStringLid(e);
        })
      )
        throw r("err")("Expected phone contact keys");
      var n = await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
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
    }
    function v(e) {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .anyOf(["phoneNumber"], e, { shouldDecrypt: !1 });
    }
    async function S(e, t, n) {
      var r = o("WAWebContactsDbLidMigrationUtils").getAlternateRowUpdates(
          e,
          t,
        ),
        a =
          r != null
            ? o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                .getContactTable()
                .merge(r.id, r, n)
            : Promise.resolve();
      await Promise.all([
        o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
          .getContactTable()
          .merge(e, t, n),
        a,
      ]);
    }
    async function R(e, t) {
      var n = o("WAWebContactsDbLidMigrationUtils").getAlternateRowUpdates(
          e,
          t,
        ),
        r =
          n != null
            ? o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                .getContactTable()
                .createOrMerge(n.id, n)
            : Promise.resolve();
      await Promise.all([
        o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
          .getContactTable()
          .createOrMerge(e, t),
        r,
      ]);
    }
    async function L(t, n) {
      n === void 0 && (n = "n/a");
      var a = self.performance.now();
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "bulkCreateOrMerge [",
            "]: ",
            " changes",
          ])),
        n,
        t.length,
      );
      try {
        if (t.length === 0) return Promise.resolve();
        var i = r("compactMap")(t, function (e) {
          return o("WAWebContactsDbLidMigrationUtils").getAlternateRowUpdates(
            r("nullthrows")(e.id),
            e,
          );
        });
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "bulkCreateOrMerge [",
              "]: ",
              " alternate rows",
            ])),
          n,
          i.length,
        );
        var l = [].concat(t, i);
        return (
          o("WAWebStorageCrashAnnotations").annotateCrashWithBulkWriteCaller(
            n,
            l,
          ),
          await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .bulkCreateOrMerge(l)
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
          n,
          t.length,
          Math.round(self.performance.now() - a),
        );
      }
    }
    async function E(e, t) {
      t === void 0 && (t = "n/a");
      var n = self.performance.now();
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
        if (e.length === 0) return Promise.resolve();
        var a = r("compactMap")(e, function (e) {
          return o("WAWebContactsDbLidMigrationUtils").getAlternateRowUpdates(
            r("nullthrows")(e.id),
            e,
          );
        });
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "bulkMergeOnly [",
              "]: ",
              " alternate rows",
            ])),
          t,
          a.length,
        );
        var i = [].concat(e, a);
        return (
          o("WAWebStorageCrashAnnotations").annotateCrashWithBulkWriteCaller(
            t,
            i,
          ),
          await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .bulkMergeOnly(i)
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
          Math.round(self.performance.now() - n),
        );
      }
    }
    function k(e) {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .bulkRemove(e);
    }
    function I(e) {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .remove(e);
    }
    async function T(e, t) {
      var n = await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .lessThan(e, t);
      return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(n);
    }
    async function D(e, t, n) {
      var r = await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .greaterThan(e, t, n);
      return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(r);
    }
    async function x(e, t) {
      var n = await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .anyOf(e, t);
      return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(n);
    }
    function $(e) {
      o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .setUpdateListener(e);
    }
    function P() {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .count();
    }
    async function N() {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .allPrimaryKeys();
    }
    async function M(e, t) {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .equalsPrimaryKeys(e, t);
    }
    var w = {
      get: _,
      all: f,
      allPrimaryKeys: N,
      clear: g,
      equals: h,
      equalsPrimaryKeys: M,
      create: y,
      bulkGet: C,
      bulkGetPhysicalPhoneRows: b,
      anyOfPhysicalPhoneMappingRows: v,
      merge: S,
      createOrMerge: R,
      bulkCreateOrMerge: L,
      bulkMergeOnly: E,
      bulkRemove: k,
      remove: I,
      lessThan: T,
      greaterThan: D,
      anyOf: x,
      setUpdateListener: $,
      count: P,
    };
    l.default = w;
  },
  98,
);
