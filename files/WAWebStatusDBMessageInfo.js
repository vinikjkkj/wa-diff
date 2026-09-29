__d(
  "WAWebStatusDBMessageInfo",
  [
    "Promise",
    "WABatcher",
    "WALogger",
    "WAPromiseMap",
    "WAWebApiMessageInfoStore",
    "WAWebLidStatusMigrationUtils",
    "WAWebUserPrefsStatus",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = { delayMs: 5e3 },
      p = o("WABatcher").createSimpleBatcher(m, function (e) {
        return _(e);
      });
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[updatePeerStatusReceiptInfoInBatch] processing ",
                " records",
              ])),
            t.length,
          );
          var r,
            a,
            i,
            l,
            c = yield o("WAPromiseMap").promiseMap(
              t,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e.msgKey,
                      s = e.setting;
                    switch (s) {
                      case "denylist":
                        return (
                          r == null &&
                            (r = o("WAWebUserPrefsStatus")
                              .getStatusDenyList()
                              .then(function (e) {
                                return new Set(e.map(String));
                              })),
                          a == null &&
                            (a = o("WAWebUserPrefsStatus").getStatusContacts()),
                          {
                            msgKey: t,
                            receiverIds: yield (d || (d = n("Promise")))
                              .all([a, r])
                              .then(function (e) {
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
                            (i = o(
                              "WAWebUserPrefsStatus",
                            ).getStatusAllowList()),
                          { msgKey: t, receiverIds: yield i }
                        );
                      case "contacts":
                        return (
                          a == null &&
                            (a = o("WAWebUserPrefsStatus").getStatusContacts()),
                          { msgKey: t, receiverIds: yield a }
                        );
                      default:
                        return (
                          l == null &&
                            (l = o("WAWebUserPrefsStatus").getStatusList()),
                          { msgKey: t, receiverIds: (yield l).list }
                        );
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
            m = [];
          return (
            c.forEach(function (e) {
              e.receiverIds.forEach(function (t) {
                m.push({
                  msgKey: e.msgKey,
                  receiverId: o("WAWebLidStatusMigrationUtils").matWidConvert(
                    t,
                  ),
                });
              });
            }),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[updatePeerStatusReceiptInfoInBatch] updating ",
                  " records",
                ])),
              m.length,
            ),
            yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(m),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[updatePeerStatusReceiptInfoInBatch] updated ",
                  " records",
                ])),
              m.length,
            ),
            t.map(function () {})
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
          var r = p.accept({ msgKey: e, setting: n });
          return (t || p.runActiveBatch(), r);
        })),
        h.apply(this, arguments)
      );
    }
    l.updatePeerStatusReceiptInfo = g;
  },
  98,
);
