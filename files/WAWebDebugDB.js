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
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      r("vulture")("xuKE0QbrcxD9lk9oSBSEDLeBJjI=");
      var n = await o("WAWebSchemaMessage")
          .getMessageTable()
          .all({ returnKeyType: "primary_key" }),
        a = n.find(function (e) {
          return e.match(t);
        });
      return a == null
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                'Could not find a message key that contains Stanza ID "',
                '"',
              ])),
            t,
          ),
          null)
        : u(a);
    }
    s.doc = "get message row and decrypted data from DB";
    async function u(e) {
      r("vulture")("mHPX1ti1Hb1fPFDIqLMZ5HBtJC8=");
      var t = typeof e == "string" ? e : e.toString(),
        n = await o("WAWebSchemaMessage").getMessageTable().get(t);
      if (n) {
        var a = o("WAWebDBMessageSerialization").messageFromDbRow(n);
        return { msgRow: n, msgData: a };
      }
      return null;
    }
    u.doc = "get message row and decrypted data from DB";
    async function c(e) {
      r("vulture")("-omp1OzPs-9n9VBY9CHpijnOUFM=");
      var t = typeof e == "string" ? e : e.toString(),
        n = await o("WAWebSchemaChat").getChatTable().get(t);
      return n;
    }
    c.doc = "get chat row from DB";
    var d = function () {
      (r("vulture")("iGXFgeWRUrQLhvqjqq3dvrZMSbA="),
        o("WAWebDBStats").dbStats.resetStatsLog());
    };
    d.doc = "Resets DB stats in the dev console";
    var m = {
      beginDBTableUsage: o("WAWebDBTableUsage").beginDBTableUsage,
      getMessageFromDBBYStanzaId: s,
      getMessageFromDBByMsgKey: u,
      getChatFromDBById: c,
      getContactTable: o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
        .getContactTable,
      WAWebLidAwareContactsDB: r("WAWebLidAwareContactsDB"),
      resetDBStats: d,
    };
    l.default = m;
  },
  98,
);
