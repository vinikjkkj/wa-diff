__d(
  "WAWebDebugDB",
  [
    "WALogger",
    "WAWebDBMessageSerialization",
    "WAWebDBStats",
    "WAWebDBTableUsage",
    "WAWebLidAwareContactsDB",
    "WAWebProfiler",
    "WAWebSchemaChat",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebSchemaMessage",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n = await o("WAWebSchemaMessage")
          .getMessageTable()
          .all({ returnKeyType: "primary_key" }),
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
        : u(r);
    }
    s.doc = "get message row and decrypted data from DB";
    async function u(e) {
      var t = typeof e == "string" ? e : e.toString(),
        n = await o("WAWebSchemaMessage").getMessageTable().get(t);
      if (n) {
        var r = o("WAWebDBMessageSerialization").messageFromDbRow(n);
        return { msgRow: n, msgData: r };
      }
      return null;
    }
    u.doc = "get message row and decrypted data from DB";
    async function c(e) {
      var t = typeof e == "string" ? e : e.toString(),
        n = await o("WAWebSchemaChat").getChatTable().get(t);
      return n;
    }
    c.doc = "get chat row from DB";
    var d = function (t) {
      o("WAWebProfiler").logDBStatsDev(t);
    };
    d.doc = "Prints DB stats for a table in the dev console";
    var m = function () {
      o("WAWebDBStats").dbStats.resetStatsLog();
    };
    m.doc = "Resets DB stats in the dev console";
    var p = {
      beginDBTableUsage: o("WAWebDBTableUsage").beginDBTableUsage,
      getMessageFromDBBYStanzaId: s,
      getMessageFromDBByMsgKey: u,
      getChatFromDBById: c,
      getContactTable: o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable,
      WAWebLidAwareContactsDB: r("WAWebLidAwareContactsDB"),
      logDBStats: d,
      resetDBStats: m,
    };
    l.default = p;
  },
  98,
);
