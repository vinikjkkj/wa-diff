__d(
  "WAWebLidAwareContactsDB",
  [
    "WALogger",
    "WANullthrows",
    "WAWebApiContact",
    "WAWebContactsDbLidMigrationUtils",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebWid",
    "WAWebWidFactory",
    "compactMap",
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
    async function b(e, t, n) {
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
    async function v(e, t) {
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
    async function S(t, n) {
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
            r("WANullthrows")(e.id),
            e,
          );
        });
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "bulkCreateOrMerge [",
                "]: ",
                " alternate rows",
              ])),
            n,
            i.length,
          ),
          await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .bulkCreateOrMerge([].concat(t, i))
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
    async function R(e, t) {
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
            r("WANullthrows")(e.id),
            e,
          );
        });
        return (
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "bulkMergeOnly [",
                "]: ",
                " alternate rows",
              ])),
            t,
            a.length,
          ),
          await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .bulkMergeOnly([].concat(e, a))
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
    function L(e) {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .bulkRemove(e);
    }
    function E(e) {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .remove(e);
    }
    async function k(e, t) {
      var n = await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .lessThan(e, t);
      return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(n);
    }
    async function I(e, t, n) {
      var r = await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .greaterThan(e, t, n);
      return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(r);
    }
    async function T(e, t) {
      var n = await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .anyOf(e, t);
      return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(n);
    }
    function D(e) {
      o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .setUpdateListener(e);
    }
    function x() {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .count();
    }
    async function $() {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .allPrimaryKeys();
    }
    async function P(e, t) {
      return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable()
        .equalsPrimaryKeys(e, t);
    }
    var N = {
      get: _,
      all: f,
      allPrimaryKeys: $,
      clear: g,
      equals: h,
      equalsPrimaryKeys: P,
      create: y,
      bulkGet: C,
      merge: b,
      createOrMerge: v,
      bulkCreateOrMerge: S,
      bulkMergeOnly: R,
      bulkRemove: L,
      remove: E,
      lessThan: k,
      greaterThan: I,
      anyOf: T,
      setUpdateListener: D,
      count: x,
    };
    l.default = N;
  },
  98,
);
