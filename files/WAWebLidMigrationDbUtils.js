__d(
  "WAWebLidMigrationDbUtils",
  [
    "WALogger",
    "WAWebApiChat",
    "WAWebApiContact",
    "WAWebLid1X1MigrationGating",
    "WAWebSchemaChat",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = new Map(),
            r = t.filter(function (e) {
              var t = o("WAWebWidFactory").createWid(e);
              return t.isRegularUser() && !t.isLid();
            });
          if (r.length === 0) return n;
          var a = yield o("WAWebSchemaChat").getChatTable().bulkGet(r);
          return (
            a.forEach(function (e, t) {
              var a = e == null ? void 0 : e.accountLid;
              if (a == null) {
                var i,
                  l = o("WAWebWidFactory").createUserWidOrThrow(r[t]);
                a =
                  (i = o("WAWebApiContact").getCurrentLid(l)) == null
                    ? void 0
                    : i.toString();
              }
              a != null && n.set(r[t], a);
            }),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "findAccountLidsForPnChatIds: ",
                  " lids for ",
                  " pn chats",
                ])),
              n.size,
              t.length,
            ),
            n
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map(),
            n = e.filter(function (e) {
              var t = o("WAWebWidFactory").createWid(e);
              return t.isLid();
            });
          if (n.length === 0) return t;
          var r = yield o("WAWebSchemaChat")
            .getChatTable()
            .anyOf(["accountLid"], n);
          return (
            r.forEach(function (e) {
              var n = e.accountLid;
              n != null && t.set(n, e.id);
            }),
            n.forEach(function (e) {
              if (!t.has(e)) {
                var n,
                  r = o("WAWebWidFactory").createUserLidOrThrow(e),
                  a =
                    (n = o("WAWebApiContact").getPhoneNumber(r)) == null
                      ? void 0
                      : n.toString();
                a != null && t.set(e, a);
              }
            }),
            t
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebLid1X1MigrationGating",
          ).Lid1X1MigrationUtils.isLidMigrated();
          if (t) {
            var n = yield o("WAWebApiChat").getChatRecordByAccountLid(e),
              r = n[0],
              a = r == null ? void 0 : r.id;
            return a ? o("WAWebWidFactory").createUserWidOrThrow(a) : void 0;
          }
          return o("WAWebApiContact").getPhoneNumber(e);
        })),
        p.apply(this, arguments)
      );
    }
    ((l.findAccountLidsForPnChatIds = s),
      (l.findChatIdsForAccountLids = c),
      (l.getChatWidFromUserLid = m));
  },
  98,
);
