__d(
  "WAWebStatusDBMessageInfo",
  [
    "WABatcher",
    "WALogger",
    "WAPromiseMap",
    "WAWebApiMessageInfoStore",
    "WAWebLidStatusMigrationUtils",
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
        a,
        i,
        l,
        c = await o("WAPromiseMap").promiseMap(t, async function (e) {
          var t = e.msgKey,
            o = e.setting;
          switch (o) {
            case "denylist":
              return (
                n == null &&
                  (n = r("WAWebUserPrefsStatus")
                    .getStatusDenyList()
                    .then(function (e) {
                      return new Set(e.map(String));
                    })),
                a == null &&
                  (a = r("WAWebUserPrefsStatus").getStatusContacts()),
                {
                  msgKey: t,
                  receiverIds: await Promise.all([a, n]).then(function (e) {
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
                i == null &&
                  (i = r("WAWebUserPrefsStatus").getStatusAllowList()),
                { msgKey: t, receiverIds: await i }
              );
            case "contacts":
              return (
                a == null &&
                  (a = r("WAWebUserPrefsStatus").getStatusContacts()),
                { msgKey: t, receiverIds: await a }
              );
            default:
              return (
                l == null && (l = r("WAWebUserPrefsStatus").getStatusList()),
                { msgKey: t, receiverIds: (await l).list }
              );
          }
        }),
        d = [];
      return (
        c.forEach(function (e) {
          e.receiverIds.forEach(function (t) {
            d.push({
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
          d.length,
        ),
        await o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(d),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[updatePeerStatusReceiptInfoInBatch] updated ",
              " records",
            ])),
          d.length,
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
    var f = { updatePeerStatusReceiptInfo: _ };
    l.default = f;
  },
  98,
);
