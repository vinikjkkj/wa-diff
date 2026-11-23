__d(
  "MAWDbVersion",
  [
    "MAWCurrentUser",
    "MAWDbSchemaReStoreDexieUtils",
    "MAWDbVersionList",
    "MAWGetDbVersion",
    "MAWIndexedDbMetadata",
    "MAWODSProxy",
    "MWFBLogger",
    "Promise",
    "WAOdsEnums",
    "clearTimeout",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = o("MWFBLogger").MWLogger().tags(["db", "getDexieDbVersion"]),
      y = 1e4;
    function C(e, t) {
      var n = t.schema,
        r = t.upgrade,
        o = t.version;
      return (
        n != null && r != null
          ? e.version(o).stores(n).upgrade(r)
          : n != null
            ? e.version(o).stores(n)
            : r != null
              ? e.version(o).upgrade(r)
              : e.version(o),
        o
      );
    }
    function b(t) {
      return new (g || (g = n("Promise")))(function (n) {
        if (!indexedDB) {
          n();
          return;
        }
        var a = null;
        function i(e) {
          (a != null && (r("clearTimeout")(a), (a = null)), n(e));
        }
        var l = indexedDB.open(t);
        ((l.onupgradeneeded = function (n) {
          n.target.transaction.abort();
          var r = n.target.result;
          (h.DEBUG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " onupgradeneeded - closing db",
              ])),
            t,
          ),
            r == null || r.close(),
            i());
        }),
          (l.onsuccess = function (e) {
            var n = e.target.result,
              r = n == null ? void 0 : n.version;
            (h.DEBUG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " version: ",
                  "",
                ])),
              t,
              r != null ? r : "null",
            ),
              n == null || n.close(),
              r != null
                ? (r % 10 >= 1 &&
                    o("MAWODSProxy").odsBumpEntityKey({
                      amount: 1,
                      entity: o("WAOdsEnums").Entity.MAW_DB_UNEXPECTED_VERSION,
                      key: "fail_" + (r % 10),
                    }),
                  i(o("MAWDbVersionList").toVersion(r / 10)))
                : i());
          }),
          (l.onerror = function (e) {
            var n;
            (h.DEBUG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " error ",
                  "",
                ])),
              t,
              e == null || (n = e.target) == null || (n = n.error) == null
                ? void 0
                : n.message,
            ),
              i());
          }),
          (l.onblocked = function (e) {
            var o = e.target.result,
              i = o == null ? void 0 : o.version;
            (h.DEBUG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " blocked, version: ",
                  "",
                ])),
              t,
              i != null ? i : "null",
            ),
              o == null || o.close(),
              a == null &&
                (a = r("setTimeout")(function () {
                  ((a = null),
                    h.mustfix(
                      "Open request for %s still blocked after %s ms, continuing with an unknown db version",
                      t,
                      y,
                    ),
                    n());
                }, y)));
          }));
      });
    }
    function v() {
      var e = o("MAWCurrentUser").getID();
      return b(o("MAWIndexedDbMetadata").dbName(e));
    }
    function S(e, t) {
      if (e.upgrade != null || t.upgrade != null) return !0;
      var n = Object.keys((e == null ? void 0 : e.schema) || {}),
        r = Object.keys((t == null ? void 0 : t.schema) || {}),
        o = [].concat(n, r),
        a = new Set(o);
      return a.size !== o.length;
    }
    function R(e) {
      return e.reduce(function (e, t, n) {
        if (n === 0)
          return [
            babelHelpers.extends({}, t, {
              schema: o(
                "MAWDbSchemaReStoreDexieUtils",
              ).getCompleteDexieSchemaForVersion(t.version),
            }),
          ];
        var r = e[e.length - 1],
          a = babelHelpers.extends({}, t, {
            schema:
              t.schema != null
                ? o("MAWDbSchemaReStoreDexieUtils").getDexieSchemaForVersion(
                    [t],
                    t.version,
                  )
                : null,
          });
        return S(r, a)
          ? (e.push(a), e)
          : (e.splice(
              e.length - 1,
              1,
              babelHelpers.extends({}, r, a, {
                schema: babelHelpers.extends(
                  {},
                  r == null ? void 0 : r.schema,
                  a == null ? void 0 : a.schema,
                ),
              }),
            ),
            e);
      }, []);
    }
    function L(e, t, n, r) {
      var a =
        r != null
          ? r
          : o("MAWGetDbVersion").getArmadilloDbVersion == null
            ? void 0
            : o("MAWGetDbVersion").getArmadilloDbVersion();
      (h.DEBUG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "current db version: ",
            ", target db version: ",
            "",
          ])),
        n,
        a,
      ),
        a == null &&
          h.WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "version is not set in QE",
              ])),
          ),
        n != null &&
          n > a &&
          (h.WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "current db version is greater than target db version",
              ])),
          ),
          (a = n)));
      var i = o("MAWDbSchemaReStoreDexieUtils")
          .MAW_DB_VERSION_CHANGES.filter(function (e) {
            var t = e.version;
            return n == null || t > n;
          })
          .filter(function (e) {
            var t = e.version;
            return a == null || a >= t;
          }),
        l = o("MAWDbSchemaReStoreDexieUtils").MAW_DB_VERSION_CHANGES.filter(
          function (e) {
            var t = e.version;
            return a == null || a >= t;
          },
        );
      if (i.length === 0 || i.length === l.length) {
        (h.DEBUG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "Skipping db upgrade and just applying latest schema",
            ])),
        ),
          t.addAnnotations({ bool: { isUpgradeNeeded: !1 } }));
        var s = o("MAWDbSchemaReStoreDexieUtils").MAW_DB_VERSION_CHANGES[
            o("MAWDbSchemaReStoreDexieUtils").MAW_DB_VERSION_CHANGES.length - 1
          ].version,
          u = Math.min(a != null && a > 0 ? a : s, s);
        return (
          e
            .version(u)
            .stores(
              o(
                "MAWDbSchemaReStoreDexieUtils",
              ).getCompleteDexieSchemaForVersion(u),
            ),
          u
        );
      }
      var c = R(i);
      h.DEBUG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "Applying ",
            " updates between ",
            " and ",
            "",
          ])),
        c.length,
        i[0].version,
        i[i.length - 1].version,
      );
      var g = c
          .filter(function (e) {
            return !!e.upgrade;
          })
          .map(function (e) {
            return e.version.toString();
          }),
        y = c
          .filter(function (e) {
            return !!e.schema;
          })
          .map(function (e) {
            return e.version.toString();
          });
      (g.length &&
        t.addAnnotations({ string_array: { dataMigrationVersions: g } }),
        y.length &&
          t.addAnnotations({ string_array: { schemaUpgradeVersions: y } }),
        t.addAnnotations({ bool: { isUpgradeNeeded: !0 } }));
      var b = 0;
      return (
        c.forEach(function (t) {
          var n;
          b = Math.max((n = C(e, t)) != null ? n : 0, b != null ? b : 0);
        }),
        b
      );
    }
    ((l.BLOCKED_OPEN_TIMEOUT_MS = y),
      (l.getDexieDbVersion = b),
      (l.getDBVersion = v),
      (l.updateDB = L));
  },
  98,
);
