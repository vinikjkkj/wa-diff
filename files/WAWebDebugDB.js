__d(
  "WAWebDebugDB",
  [
    "WALogger",
    "WAWebDBMessageSerialization",
    "WAWebDBStats",
    "WAWebDBTableUsage",
    "WAWebLidAwareContactsDB",
    "WAWebSchemaChat",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .allKeys({ returnKeyType: "primary_key" }),
            r = n.find(function (e) {
              return e.match(t);
            });
          return r == null
            ? (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    'Could not find a message key that contains Stanza ID "',
                    '"',
                  ])),
                t,
              ),
              null)
            : c(r);
        })),
        u.apply(this, arguments)
      );
    }
    s.doc = "get message row and decrypted data from DB";
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = typeof e == "string" ? e : e.toString(),
            n = yield o("WAWebSchemaMessage").getMessageTable().get(t);
          if (n) {
            var r = o("WAWebDBMessageSerialization").messageFromDbRow(n);
            return { msgRow: n, msgData: r };
          }
          return null;
        })),
        d.apply(this, arguments)
      );
    }
    c.doc = "get message row and decrypted data from DB";
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("-omp1OzPs-9n9VBY9CHpijnOUFM=");
          var t = typeof e == "string" ? e : e.toString(),
            n = yield o("WAWebSchemaChat").getChatTable().get(t);
          return n;
        })),
        p.apply(this, arguments)
      );
    }
    m.doc = "get chat row from DB";
    var _ = function () {
      (r("vulture")("iGXFgeWRUrQLhvqjqq3dvrZMSbA="),
        o("WAWebDBStats").dbStats.resetStatsLog());
    };
    _.doc = "Resets DB stats in the dev console";
    var f = {
      beginDBTableUsage: o("WAWebDBTableUsage").beginDBTableUsage,
      getMessageFromDBBYStanzaId: s,
      getMessageFromDBByMsgKey: c,
      getChatFromDBById: m,
      getContactTable: o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable,
      WAWebLidAwareContactsDB: r("WAWebLidAwareContactsDB"),
      resetDBStats: _,
    };
    l.default = f;
  },
  98,
);
