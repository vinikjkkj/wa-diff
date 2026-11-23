__d(
  "WAWebStatusDBMessageInfo",
  [
    "WABatcher",
    "WALogger",
    "WAPromiseMap",
    "WAWebApiMessageInfoStore",
    "WAWebLidStatusMigrationUtils",
    "WAWebStatusContactUtils",
    "WAWebUserPrefsStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = { delayMs: 5e3 },
      m = o("WABatcher").createSimpleBatcher(d, function (e) {
        return p(e);
      });
    async function p(t) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[updatePeerStatusReceiptInfoInBatch] processing ",
            " records",
          ])),
        t.length,
      );
      var n,
        r,
        a,
        i,
        l = await o("WAPromiseMap").promiseMap(t, async function (e) {
          var t = e.msgKey,
            l = e.setting;
          switch (l) {
            case "denylist":
              return (
                n == null &&
                  (n = o("WAWebUserPrefsStatus")
                    .getStatusDenyList()
                    .then(function (e) {
                      return new Set(e.map(String));
                    })),
                r == null &&
                  (r = o("WAWebStatusContactUtils").getStatusContacts()),
                {
                  msgKey: t,
                  receiverIds: await Promise.all([r, n]).then(function (e) {
                    var t = e[0],
                      n = e[1];
                    return t.filter(function (e) {
                      return !n.has(e.toString());
                    });
                  }),
                }
              );
            case "allowlist":
              return (
                a == null &&
                  (a = o("WAWebUserPrefsStatus").getStatusAllowList()),
                { msgKey: t, receiverIds: await a }
              );
            case "contacts":
              return (
                r == null &&
                  (r = o("WAWebStatusContactUtils").getStatusContacts()),
                { msgKey: t, receiverIds: await r }
              );
            default:
              return (
                i == null && (i = o("WAWebUserPrefsStatus").getStatusList()),
                { msgKey: t, receiverIds: (await i).list }
              );
          }
        }),
        c = [];
      return (
        l.forEach(function (e) {
          e.receiverIds.forEach(function (t) {
            c.push({
              msgKey: e.msgKey,
              receiverId: o("WAWebLidStatusMigrationUtils").matWidConvert(t),
            });
          });
        }),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[updatePeerStatusReceiptInfoInBatch] updating ",
              " records",
            ])),
          c.length,
        ),
        await o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(c),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[updatePeerStatusReceiptInfoInBatch] updated ",
              " records",
            ])),
          c.length,
        ),
        t.map(function () {})
      );
    }
    async function _(e, t, n) {
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "updatePeerStatusReceiptInfo: adding ",
            ", setting ",
            ", offline ",
            "",
          ])),
        e.id,
        n,
        t,
      );
      var r = m.accept({ msgKey: e, setting: n });
      return (t || m.runActiveBatch(), r);
    }
    l.updatePeerStatusReceiptInfo = _;
  },
  98,
);
