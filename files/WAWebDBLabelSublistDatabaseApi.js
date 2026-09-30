__d(
  "WAWebDBLabelSublistDatabaseApi",
  [
    "WAWebLidMigrationDbUtils",
    "WAWebSchemaLabelSublist",
    "WAWebUserPrefsLabelAssociationsLidMigration",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = h(e),
            n = yield C([t]),
            r = n[0],
            a = o("WAWebSchemaLabelSublist").getChatJidFromPrimaryKey(r);
          (yield o("WAWebSchemaLabelSublist")
            .getLabelSublistTable()
            .createOrReplace(babelHelpers.extends({}, e, { chatJid: a })),
            a !== o("WAWebSchemaLabelSublist").getChatJidFromPrimaryKey(t) &&
              (yield o("WAWebSchemaLabelSublist")
                .getLabelSublistTable()
                .bulkRemove([t])));
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [].concat(yield C([e]), [e]);
          yield o("WAWebSchemaLabelSublist")
            .getLabelSublistTable()
            .bulkRemove(t);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = (yield o("WAWebSchemaLabelSublist")
            .getLabelSublistTable()
            .all()).filter(function (t) {
            return t.predefinedId === e;
          });
          return (
            t.length > 0 &&
              (yield o("WAWebSchemaLabelSublist")
                .getLabelSublistTable()
                .bulkRemove(t.map(h))),
            t.length
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = o("WAWebSchemaLabelSublist").createLabelSublistPrimaryKey({
              predefinedId: e,
              chatJid: t,
            }),
            a = yield C([r]),
            i = a[0],
            l =
              (n = yield o("WAWebSchemaLabelSublist")
                .getLabelSublistTable()
                .get(i)) != null
                ? n
                : yield o("WAWebSchemaLabelSublist")
                    .getLabelSublistTable()
                    .get(r);
          if (l == null) return null;
          var s = yield v([l]),
            u = s[0];
          return u;
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaLabelSublist")
            .getLabelSublistTable()
            .all();
          return v(e);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      var t = e.chatJid,
        n = e.predefinedId;
      return o("WAWebSchemaLabelSublist").createLabelSublistPrimaryKey({
        chatJid: t,
        predefinedId: n,
      });
    }
    function y(e) {
      return e.filter(function (e) {
        return r("WAWebWid").isWid(e);
      });
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !o(
              "WAWebUserPrefsLabelAssociationsLidMigration",
            ).isLabelAssociationsMigrationComplete()
          )
            return e;
          var t = yield o(
            "WAWebLidMigrationDbUtils",
          ).findAccountLidsForPnChatIds(
            y(
              Array.from(
                new Set(
                  e.map(o("WAWebSchemaLabelSublist").getChatJidFromPrimaryKey),
                ),
              ),
            ),
          );
          return e.map(function (e) {
            var n = t.get(
              o("WAWebSchemaLabelSublist").getChatJidFromPrimaryKey(e),
            );
            return n == null
              ? e
              : o("WAWebSchemaLabelSublist").createLabelSublistPrimaryKey({
                  chatJid: n,
                  predefinedId: o(
                    "WAWebSchemaLabelSublist",
                  ).getPredefinedIdFromPrimaryKey(e),
                });
          });
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !o(
              "WAWebUserPrefsLabelAssociationsLidMigration",
            ).isLabelAssociationsMigrationComplete()
          )
            return e;
          var t = yield o("WAWebLidMigrationDbUtils").findChatIdsForAccountLids(
            y(
              Array.from(
                new Set(
                  e.map(function (e) {
                    return e.chatJid;
                  }),
                ),
              ),
            ),
          );
          return e.map(function (e) {
            var n;
            return babelHelpers.extends({}, e, {
              chatJid: (n = t.get(e.chatJid)) != null ? n : e.chatJid,
            });
          });
        })),
        S.apply(this, arguments)
      );
    }
    ((l.addOrEditLabelSublist = e),
      (l.removeLabelSublist = u),
      (l.removeLabelSublistsByPredefinedId = d),
      (l.getLabelSublistByChat = p),
      (l.getAllLabelSublist = f));
  },
  98,
);
